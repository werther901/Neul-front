# 🙋‍♂️ 장애인 & 가족을 위한 기록 관리 서비스 Neul
![표지](https://github.com/user-attachments/assets/7496762e-5829-4a70-a1aa-40a6ca09c163)


## 프로젝트 소개

- 기록 관리 서비스 'Neul'은 장애인 보호자와 장애인 돌봄 기관 간의 원활한 연결 및 기록 관리 시스템을 구축하여 장애인 복지의 효율성과 신뢰성을 높이기 위해 기획된 **장애인 기록관리 통합 서비스**입니다.<br/>
- 배포: [Neul](http://3.38.125.252) <a href="http://3.38.125.252" target="_blank" rel="noopener noreferrer">Neul</a>
<br/>

- 'Neul' 프로젝트를 시작하게 된 이유는 장애인 보호자들이 도우미와의 소통과 피보호자의 상태 관리를 수기로 진행하거나 비체계적으로 관리하고 있다는 문제를 발견했기 때문입니다. 이로 인해 돌봄 서비스의 신뢰성과 효율성이 낮아지는 상황이 자주 발생하였고 이를 디지털화된 시스템으로 개선할 필요가 있다고 판단했습니다.
<br />

- 주요 사용자<br />
**보호자**: 피보호자 등록, 도우미 신청, 상태 확인 및 활동 기록 열람, 담당 도우미와 채팅, 프로그램 신청<br />
**도우미**: 경력 입력, 신청 온 매칭 수락/거절, 피보호자 상태 기록 및 활동 기록, 담당 보호자와 채팅<br />
**총관리자**: 도우미 승인 관리, 전체 사용자 관리, 프로그램 등록, 광고 등록<br />
<br />
  
- 'Neul'의 주요 기능<br />
보호자는 피보호자 정보를 입력하여 회원가입을 할 수 있으며 **원하는 날짜를 선택해 도우미를 신청**할 수 있습니다.<br />
도우미는 본인의 경력을 입력 후 **총관리자의 승인**을 받아야 활동이 가능하며 **보호자의 신청**을 **수락 또는 거절**할 수 있습니다.<br />
도우미가 신청을 수락하면 **보호자는 결제를 통해 매칭을 확정**할 수 있고 매칭이 완료되면 해당 기간 동안 **도우미는 피보호자의 상태 및 활동을 기록**할 수 있습니다.<br />
보호자는 도우미가 작성한 기록을 **언제든 열람**할 수 있으며 **매칭된 보호자-도우미 간에는 실시간 1:1 채팅**이 가능합니다.<br />
보호자가 신청한 매칭일이 경과하면 해당 매칭은 **자동으로 종료**됩니다. <br />
매칭 여부와 관계없이 신청할 수 있는 다양한 **프로그램**도 함께 제공합니다.<br />

<br />

## :busts_in_silhouette: Developers

| FE. 권태연                          | FE. 이정민                                  | FE. 최승연                              | BE. 김예지                              |
| ----------------------------------- | ------------------------------------------- | --------------------------------------- | --------------------------------------- |
| [Taetea1](https://github.com/Taetea1) | [ihoek](https://github.com/ihoek) | [werther901](https://github.com/werther901) | [Yzoraa](https://github.com/Yzoraa) |

<br />

## 기술 스택

- **🛠️ Frontend**: Next.js, TypeScript, Zustand, Socket.io-client, styled-components
- **🛠️ Backend**: Nest.js, TypeORM, MySQL, JWT, Socket.io
- **🛠️ DevOps**: AWS EC2, Nginx, PM2
- **🛠️ Others**: OAuth (Kakao, Naver), Formik, Yup, Notion

<br />

## 주요 기능

- 로그인 및 회원가입 기능
- 도우미 신청 기능
- 도우미 신청 후 상태확인/활동기록 열람, 피드백 기능
- 실시간 채팅 기능
- 프로그램 신청/환불 기능
- 도우미 일정 관리 기능
- 시스템 관리자 대시보드 및 회원관리 기능

<br />

## 역할분담

#### 팀원 이름은 기여순이 아닌 가나다 순으로 정렬 하였습니다.

### 권태연
- GitHub Project 활용한 진행 상황 관리
- 댓글기능
- 게시글 랜더링 , 수정 , 삭제 , 생성 기능

### 김예지
- GitHub Project 활용한 진행 상황 관리
- 회원 가입 기능 구현
- 프로필 수정 기능 구현

### 이정민
- GitHub Project 활용한 진행 상황 관리
- 회원 가입 기능 구현
- 프로필 수정 기능 구현

### 최승연
- 로그인 기능 구현
- 회원 가입 기능 구현
- 프로필 수정 기능 구현


<br />

## 기능구현

<table>
  <th>도우미</th>
  <th>보호자</th>
  
  <tr>
    <td align="center">
      <strong>회원가입</strong><br><br>
      <img src="https://github.com/user-attachments/assets/9ee8d7db-5647-4c46-92b0-14316b3d3949" alt="mainpage" width="500" height="500">
    </td>
    <td align="center">
      <strong>로그인</strong><br><br>
      <img src="https://github.com/user-attachments/assets/c5e59416-c6ff-4fd0-89da-8b6b52652b44" alt="all-post" width="500" height="500">
    </td>
  </tr>
  
  <tr>
    <td align="center">
      <strong>도우미 신청승인<br><br>
      <img src="https://github.com/user-attachments/assets/e6d3f330-0ae4-47d8-83cd-d55063b688ca" alt="chat" width="500" height="500">
    </td>
    <td align="center">
      <strong>도우미 신청</strong><br><br>
      <img src="https://github.com/user-attachments/assets/6288bde7-1dcf-485b-9c98-f0d051e8786e" alt="my-profile" width="500" height="500">
    </td>
  </tr>
  
   <tr>
    <td align="center">
      <strong>소셜 로그인</strong><br><br>
      <img src="https://github.com/user-attachments/assets/6fb5ec66-3a87-4909-a2a3-7988230765a6" alt="login" width="250" height="250">
    </td>
    <td align="center">
      <strong>결제하기</strong><br><br>
      <img src="https://github.com/user-attachments/assets/c4f46d4d-906a-4c81-b165-a230cb200dd6" alt="pay-page" width="250" height="250">
    </td>
  </tr>

   <tr>
    <td align="center">
      <strong>상태기록</strong><br><br>
      <img src="https://github.com/user-attachments/assets/18880832-74b8-41d0-a8e7-a871c981a595" alt="status" width="500" height="250">
    </td>
    <td align="center">
      <strong>상태확인</strong><br><br>
      <img src="https://github.com/user-attachments/assets/6e2273a8-c8c7-477b-96ad-9970e82ae72d" alt="status-check" width="500" height="250">
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>활동기록</strong><br><br>
      <img src="https://github.com/user-attachments/assets/2c0c60c2-1506-40b9-85ba-44417e9c740b" alt="active" width="500" height="250">
    </td>
    <td align="center">
      <strong>활동열람</strong><br><br>
      <img src="https://github.com/user-attachments/assets/0ceda075-5e48-4f68-acdc-5533bf99e0dd" alt="active-check" width="500" height="250">
    </td>
  </tr>
    <tr>
    <td align="center">
      <strong>피드백 확인</strong><br><br>
      <img src="https://github.com/user-attachments/assets/78d77e18-a547-4692-a54e-fa5179eeee31" alt="feed-check" width="500" height="250">
    </td>
    <td align="center">
      <strong>피드백 작성</strong><br><br>
      <img src="https://github.com/user-attachments/assets/2ec7c56b-d589-4704-bc08-c5f500e5bfdb" alt="feed" width="500" height="250">
    </td>
  </tr>
</table>

<br />

## DB 설계도
<img width="700" alt="db" src="https://github.com/user-attachments/assets/549bb36f-8a32-41f4-9468-a3d93c263909" />

<br />

## API 명세서
<img width="600" alt="Image" src="https://github.com/user-attachments/assets/174fb9bc-dc48-4600-96d9-9763caec3348" />


<br />

## 기능 정의서

<img width="600" alt="devs" src="https://github.com/user-attachments/assets/76c34910-0f28-4280-ad6e-6d081a67351f" />

<br />

## 반응형
<table>
  <tr>
    <td align="center">
      <strong>내 정보 페이지</strong><br><br>
      <img src="https://github.com/user-attachments/assets/0a20e780-7e39-409c-8cfe-3ca5064a79ca" alt="main-page" width="280" height="400">
    </td>
    <td align="center">
      <strong>게시물 상세보기</strong><br><br>
      <img src="https://github.com/user-attachments/assets/e4e35581-abc5-4665-9bc5-a9527a23c891" alt="all-post" width="270" height="400">
    </td>
    <td align="center">
       <strong>채팅하기</strong><br><br>
      <img src="https://github.com/user-attachments/assets/b9a92580-7204-48b8-ae39-f863ffcaefe7" width="280" height="400">
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>상태확인</strong><br><br>
      <img src="https://github.com/user-attachments/assets/16b509ce-b2c0-4f4c-b84a-39093f59da1d" alt="status-check" width="310" height="400">
    </td>
    <td align="center">
      <strong>활동기록</strong><br><br>
      <img src="https://github.com/user-attachments/assets/e4e35581-abc5-4665-9bc5-a9527a23c891" alt="all-post" width="270" height="400">
    </td>
    <td align="center">
       <strong>채팅</strong><br><br>
      <img src="https://github.com/user-attachments/assets/b9a92580-7204-48b8-ae39-f863ffcaefe7" width="280" height="400">
    </td>
  </tr>
</table>

<br />

👉 **도우미 레포지토리**: [neul_admin](https://github.com/Neul-project/Neul-admin) <br>
👉 **관리자 레포지토리**: [neul_manager](https://github.com/Neul-project/Neul-manager) <br>
👉 **백엔드 레포지토리**: [neul_back](https://github.com/Neul-project/Neul-back) <br><br> 

