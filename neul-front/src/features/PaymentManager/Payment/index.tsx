import { useEffect, useState } from "react";
import { PaymentStyled } from "./styled";
import axiosInstance from "@/lib/axios";
import clsx from "clsx";
import { formatPhoneNumber } from "@/utils/formatter";

import { loadTossPayments } from "@tosspayments/payment-sdk";

import { useCartStore } from "@/stores/useCartStore";
import { message, notification } from "antd";

interface UserInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
}

interface Program {
  id: number;
  name: string;
  manager: string;
  payment_status: string;
  price: number;
  img: string;
}

const PaymentFeature = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [programs, setPrograms] = useState<Program[]>([]);
  // 처음 실행 시에만 전체선택 되도록 제어하는 state
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // console.log("결제페이지 프로그램", programs);

  // 선택된 프로그램의 id만 저장
  const [selectedProgramIds, setSelectedProgramIds] = useState<number[]>([]);

  // 프로그램 신청내역 요청
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await axiosInstance.get("/program/histories");
        setPrograms(res.data);
      } catch (err) {
        console.error("프로그램 신청내역 불러오기 오류:", err);
      }
    };

    fetchPrograms();
  }, []);

  // 내 정보 요청
  useEffect(() => {
    const fetchMyInfo = async () => {
      try {
        const res = await axiosInstance.get("/user/info");
        setUserInfo(res.data);
      } catch (error) {
        console.error("내 정보 불러오기 실패:", error);
      }
    };

    fetchMyInfo();
  }, []);

  // 처음 페이지 진입 시 모든 프로그램 체크표시
  useEffect(() => {
    if (isInitialLoad && programs.length > 0) {
      const allIds = programs
        .filter((p) => p.payment_status !== "결제 완료")
        .map((p) => p.id);
      setSelectedProgramIds(allIds);
      setIsInitialLoad(false);
    }
  }, [programs, isInitialLoad]);

  // 토스 결제
  const tossClientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY;

  const handlePayment = async (amount: number) => {
    if (!tossClientKey) {
      console.error("Toss client key가 없습니다.");
      return;
    }

    try {
      // 1. 결제 준비 요청
      const res = await axiosInstance.post("/program/create", {
        amount,
        programId: selectedProgramIds, // [12, 13]
      });
      // console.log("orderId", res.data);
      const orderId = res.data;

      // 2. 받은 orderId로 토스 결제창 띄우기
      const tossPayments = await loadTossPayments(tossClientKey);

      await tossPayments.requestPayment({
        amount: amount,
        orderId: orderId,
        orderName: `${amount}원 결제`,

        successUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
        failUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/fail`,
      });

      // 장바구니 수량 감소 (프론트에서 먼저 처리)
      const prevCount = useCartStore.getState().cartCount;
      const newCount = Math.max(0, prevCount - selectedProgramIds.length);
      useCartStore.getState().setCartCount(newCount);
    } catch (error) {
      console.error("결제 요청 중 오류:", error);
      window.location.href = "/payment/fail";
    }
  };

  // 체크박스 핸들러
  const toggleProgramSelection = (id: number) => {
    setSelectedProgramIds((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  // 선택된 프로그램 가격 합산
  const totalSelectedPrice = programs
    .filter(
      (p) =>
        selectedProgramIds.includes(p.id) && p.payment_status !== "결제 완료"
    )
    .reduce((acc, p) => acc + p.price, 0);

  // 선택된 프로그램 삭제
  // 1. '결제 대기' 상태인 선택된 프로그램만 추림
  const deletableIds = programs
    .filter(
      (p) =>
        selectedProgramIds.includes(p.id) && p.payment_status === "결제 대기"
    )
    .map((p) => p.id);

  // 2. 선택된 프로그램 없을 시 버튼 비활성화용
  const isDeleteDisabled = deletableIds.length === 0;

  // 3. 삭제 실행
  const handleDeleteSelected = async () => {
    if (isDeleteDisabled) {
      message.info("삭제할 프로그램을 선택해주세요.");
      return;
    }

    try {
      const res = await axiosInstance.post("/program/delete-cart", {
        programIds: deletableIds,
      });

      // console.log("장바구니 삭제", res.data);

      if (res.data.ok) {
        // 4. 삭제된 항목 프론트에서 제거
        setPrograms((prev) => prev.filter((p) => !deletableIds.includes(p.id)));
        setSelectedProgramIds((prev) =>
          prev.filter((id) => !deletableIds.includes(id))
        );

        // 5. 선택 초기화
        setSelectedProgramIds([]);

        // 6. 장바구니 개수 동기화
        const prevCount = useCartStore.getState().cartCount;
        const newCount = Math.max(0, prevCount - deletableIds.length);
        // console.log("newCount", newCount);
        useCartStore.getState().setCartCount(newCount);
      }
    } catch (err) {
      console.error("선택 삭제 실패:", err);
      notification.error({
        message: "선택 삭제 실패",
        description: "삭제 중 오류가 발생했습니다.",
      });
    }
  };

  return (
    <PaymentStyled>
      <div className="Payment_title">결제하기</div>

      <div className="Payment_container">
        {/* 왼쪽 */}
        <div className="Payment_leftContainer">
          {/* 주문자 정보 */}
          <div className="Orderer_info radius">
            <div className="title">신청자 정보</div>

            <div className="Orderder_info_container">
              <div className="O_orderer">{userInfo?.name}</div>
              <div className="O_phone">
                {formatPhoneNumber(userInfo?.phone ?? "")}
              </div>
              <div className="O_email">{userInfo?.email}</div>
            </div>
          </div>

          {/* 프로그램 주문 정보 */}
          <div className="Program_info radius">
            {/* 전체 선택, 선택삭제 */}
            <div className="AllSelect">
              <label className="Program_info_label L-flex">
                <input
                  type="checkbox"
                  className="Program_labelInput"
                  checked={
                    selectedProgramIds.length > 0 &&
                    selectedProgramIds.length ===
                      programs.filter((p) => p.payment_status !== "결제 완료")
                        .length
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      const allIds = programs
                        .filter((p) => p.payment_status !== "결제 완료")
                        .map((p) => p.id);
                      setSelectedProgramIds(allIds);
                    } else {
                      setSelectedProgramIds([]);
                    }
                  }}
                  style={{ marginRight: "8px" }}
                />

                <div
                  className={clsx("Program_info_div", {
                    checked:
                      selectedProgramIds.length > 0 &&
                      selectedProgramIds.length ===
                        programs.filter((p) => p.payment_status !== "결제 완료")
                          .length,
                  })}
                ></div>
                <div className="select_m">전체선택</div>
              </label>

              <div className="select_del">
                <button
                  onClick={handleDeleteSelected}
                  disabled={isDeleteDisabled}
                >
                  선택삭제
                </button>
              </div>
            </div>

            {/* 프로그램 주문목록 */}
            {programs.filter(
              (program) => program.payment_status !== "결제 완료"
            ).length === 0 ? (
              <div className="Payment_empty">
                <div className="empty_img">
                  <img src="/empty.svg" alt="emptyImage" />
                </div>
                <div className="empty_cont">프로그램 신청내역이 없습니다.</div>
              </div>
            ) : (
              programs
                .filter((program) => program.payment_status !== "결제 완료")
                .map((program, i) => (
                  <div key={program.id} className="program_info_container">
                    {/* 체크박스 */}
                    <label className="Program_info_label">
                      <input
                        type="checkbox"
                        className="Program_labelInput"
                        checked={selectedProgramIds.includes(program.id)}
                        onChange={() => toggleProgramSelection(program.id)}
                        style={{ marginRight: "8px" }}
                      />

                      <div
                        className={clsx("Program_info_div", {
                          checked: selectedProgramIds.includes(program.id),
                        })}
                      ></div>
                    </label>

                    <div className="program_info_imgDiv">
                      <a href={`/program/${program.id}`}>
                        <img
                          src={`${
                            process.env.NEXT_PUBLIC_API_URL
                          }/uploads/image/${program.img.split(",")[0]}`}
                          alt={program.name}
                        />
                      </a>
                    </div>

                    <div>
                      <div className="p_name">
                        <a href={`/program/${program.id}`}>{program.name}</a>
                      </div>
                      <div className="p_manager">{program.manager}</div>
                      <div className="p_price">
                        {program.price.toLocaleString()}원
                      </div>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>

        {/* 오른쪽 */}
        <div className="Payment_RightContainer">
          <div className="Payment_RightSubContainer">
            {/* 총 결제금액 */}
            <div className="Total_amount radius">
              <div className="title">결제금액</div>

              <div className="T_flex">
                <div className="T_column">상품금액</div>
                <div className="T_price">
                  {totalSelectedPrice.toLocaleString()}원
                </div>
              </div>
              <div className="T_flex">
                <div className="T_column">상품할인금액</div>
                <div className="T_price">0원</div>
              </div>

              <div className="hr" />

              <div className="T_amount T_flex">
                <div>총 결제금액</div>
                <div className="T_result">
                  {totalSelectedPrice.toLocaleString()}원
                </div>
              </div>
            </div>

            <div className="T_btn">
              <button
                onClick={() => {
                  handlePayment(totalSelectedPrice);
                }}
                disabled={selectedProgramIds.length === 0}
              >
                {selectedProgramIds.length === 0
                  ? "프로그램을 선택해주세요"
                  : "결제하기"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </PaymentStyled>
  );
};

export default PaymentFeature;
