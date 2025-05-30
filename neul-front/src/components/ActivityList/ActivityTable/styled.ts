import styled from "styled-components";

export const ActivityTableStyled = styled.div`
  &.ActivityList_main_wrap {
    //padding: 0px 20px;

    .ant-table-tbody > tr > td:nth-child(1),
    .ant-table-tbody > tr > td:nth-child(3) {
      text-align: center;
    }

    .ant-table-tbody > tr > td:nth-child(2) {
      max-width: 500px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ant-table-thead > tr > th {
      text-align: center;
      //border-top: 1px solid #ccc;
      //border-bottom: 1px solid #ccc;
    }

    .ant-table-tbody > tr:hover {
      cursor: pointer;
    }

    /* Pagination 테두리 및 그림자 제거 */
    .ant-pagination-item,
    .ant-pagination-prev,
    .ant-pagination-next,
    .ant-pagination-jump-next,
    .ant-pagination-jump-prev {
      border: none !important;
      box-shadow: none !important;
      background: transparent !important;
    }

    /* Pagination 활성 아이템 스타일 */
    .ant-pagination-item-active {
      background-color: #ffffff !important;
      border: none !important;
      box-shadow: none !important;
    }
    .ant-table-tbody > tr:hover {
      cursor: pointer;
    }

    /* Pagination 아이템 숫자 색상 */
    .ant-pagination-item a {
      color: #5da487;
    }

    .ant-pagination-item-active a {
      color: #5da487;
      font-weight: bold;
    }

    .ant-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 40px;
    }
  }

  @media (max-width: 768px) {
    &.ActivityList_main_wrap {
      //padding: 0px 20px;

      .ant-table-tbody > tr > td:nth-child(2) {
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .ant-table-thead > tr > th {
        text-align: center;
        font-size: 12px;
        //border-top: 1px solid #ccc;
        //border-bottom: 1px solid #ccc;
      }

      .ant-table-thead > tr {
        text-align: center;
        //border-top: 1px solid #ccc;
        //border-bottom: 1px solid #ccc;
      }

      .ant-table-tbody > tr > td {
        font-size: 12px;
      }

      .ant-table-tbody > tr:hover {
        cursor: pointer;
      }

      /* Pagination 테두리 및 그림자 제거 */
      .ant-pagination-item,
      .ant-pagination-prev,
      .ant-pagination-next,
      .ant-pagination-jump-next,
      .ant-pagination-jump-prev {
        border: none !important;
        box-shadow: none !important;
        background: transparent !important;
      }

      /* Pagination 활성 아이템 스타일 */
      .ant-pagination-item-active {
        background-color: #ffffff !important;
        border: none !important;
        box-shadow: none !important;
      }
      .ant-table-tbody > tr:hover {
        cursor: pointer;
      }

      /* Pagination 아이템 숫자 색상 */
      .ant-pagination-item a {
        color: #5da487;
      }

      .ant-pagination-item-active a {
        color: #5da487;
        font-weight: bold;
      }

      .ant-pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 40px;
      }
    }
  }

  @media (max-width: 768px) {
    &.ActivityList_main_wrap {
      //padding: 0px 20px;

      .ant-table-tbody > tr > td:nth-child(2) {
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .ant-table-thead > tr > th {
        text-align: center;
        font-size: 11px;
        padding: 10px 10px;
        //border-top: 1px solid #ccc;
        //border-bottom: 1px solid #ccc;
      }

      .ant-table-thead > tr {
        text-align: center;

        //border-top: 1px solid #ccc;
        //border-bottom: 1px solid #ccc;
      }

      .ant-table-tbody > tr > td {
        font-size: 11px;
        padding: 10px 10px;
      }

      .ant-table-tbody > tr:hover {
        cursor: pointer;
      }

      /* Pagination 테두리 및 그림자 제거 */
      .ant-pagination-item,
      .ant-pagination-prev,
      .ant-pagination-next,
      .ant-pagination-jump-next,
      .ant-pagination-jump-prev {
        border: none !important;
        box-shadow: none !important;
        background: transparent !important;
      }

      /* Pagination 활성 아이템 스타일 */
      .ant-pagination-item-active {
        background-color: #ffffff !important;
        border: none !important;
        box-shadow: none !important;
      }
      .ant-table-tbody > tr:hover {
        cursor: pointer;
      }

      /* Pagination 아이템 숫자 색상 */
      .ant-pagination-item a {
        color: #5da487;
      }

      .ant-pagination-item-active a {
        color: #5da487;
        font-weight: bold;
      }

      .ant-pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 40px;
      }
    }
  }
`;

export const theme = {
  components: {
    token: {
      borderRadius: 0,
    },
    Table: {
      rowHoverBg: "#none", // hover 시 배경색
      headerBg: "#fef6d4",
      //headerBg: "rgb(242, 245, 248)", // 헤더 배경색
      rowSelectedBg: "#bae7ff", // 선택된 row 배경색
      headerColor: "#000",
      headerBorderRadius: 0,
    },
    Pagination: {
      itemBg: "transparent", // 각 페이지 아이템 배경
      itemActiveBg: "#ffffff", // 선택된 페이지 배경
      itemSize: 32, // 페이지 버튼 크기
      colorBgContainer: "transparent", // 컨테이너 배경
      colorBorder: "none", // 일반 테두리 색
      colorPrimaryBorder: "#ffffff", // 활성 상태 테두리 색
    },
  },
};
