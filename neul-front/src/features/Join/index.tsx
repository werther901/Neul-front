import { JoinStyled } from "./styled";
import { useState } from "react";
// 컴포넌트 최적화
import Image from "next/image";

import { Select } from "antd";
import { useFormik } from "formik";

// 회원가입 페이지
const JoinPage = () => {
  // antd 일반, 관리자 사용자 구분
  const option = [
    { value: "user", label: "일반사용자" },
    { value: "manager", label: "관리자" },
  ];

  const [value, setValue] = useState<string>("user");

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <JoinStyled>
      <div className="Join_container">
        {/* 로고 */}
        <div className="Join_wrap">
          <Image src="/logo.png" alt="logo" width={150} height={65} />
        </div>

        {/* 이메일, 비번, 비번확인 */}
        <div>
          <div>
            <input type="email" placeholder="이메일" className="" />
          </div>
          <div>
            <input type="password" placeholder="비밀번호" />
          </div>
          <div>
            <input type="password" placeholder="비밀번호 확인" />
          </div>
        </div>

        {/* 이름, 피보호자 이름, 전화번호 */}
        <div>
          <div>
            <input type="text" placeholder="이름" />
            <input type="text" placeholder="피보호자 이름" />
          </div>
          <div>
            <input type="text" placeholder="전화번호" />
          </div>
        </div>

        {/* 사용자 구분 */}
        <div>
          <Select value={value} options={option} onChange={onChange} />
        </div>

        {/* 회원가입 버튼 */}
        <div className="Join_submit_btn">
          <button>회원가입</button>
        </div>
      </div>
    </JoinStyled>
  );
};

export default JoinPage;
