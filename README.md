# Kiosk_Project를 통한 사회문제 개선

🐶 기간 : 2023. 01. 10 ~

🐶 목적 :

햄버거를 사먹으려고 프랜차이즈 매장에 방문했던 경험이 있다. 그때 내 앞에서 주문을 하고 계신 어르신을 보았고, 한동안 주문을 못하셔서 돌아가시려는 모습을 봤다. 그때 돌아가시려는 할머니를 붙잡고 주문을 도와드렸는데 "고마워요 학생, 우리 같은 노인들은 이게(키오스크) 너무 어려워서 뭘 사먹지도 못하겠어"라는 말과 함께 쓸쓸한 미소를 지으셨던 할머니의 모습이 너무 기억에 남는다.

아래는 노인층의 키오스크 사용이 얼마나 어려움을 겪고 있는지 알려주는 기사이다.

<img width="560" alt="스크린샷 2023-01-12 오후 3 15 00" src="https://user-images.githubusercontent.com/98578138/211991984-3d8e647d-8f06-4053-9b99-2fc7a8d4402a.png">
<img width="554" alt="스크린샷 2023-01-12 오후 3 15 09" src="https://user-images.githubusercontent.com/98578138/211992046-5dbdfa01-e70d-45a5-aea0-f141c8b3f583.png">

해당 기사 외에도 요새 유튜브나 SNS에서 사회 문제로 이슈화되고 있는 문제가 바로 "어르신들의 키오스크 사용 어려움"이다. 나는 이를 해결할 방법이 없을까 많은 고민을 하였지만 마땅한 해결책이 나온건 아니다. 하지만 조금씩 내 프로젝트에, 내 아이디어를 담아, 나중에 기회가 된다면 창업 해커톤 또는 관련 문제에 대한 기획 아이디어를 제출할 일이 있으면 이 프로젝트를 활용하여 "키오스크 사용의 어려움을 겪고 계신 어르신들"에게 도움을 드리고 싶다.

🐶 구현기능: 노인층도 사용에 불편함이 없는 Kiosk 만들기

🐶 프로젝트 기획 : https://goofy-statistic-5ea.notion.site/Kiosk_Project-6b0e10e028d147038612a428e9bdae43

🐶 참고자료: https://www.youtube.com/watch?v=TLln4FGpgF8&ab_channel=from.designer

🐶 적용기술(1차) : <img src="https://img.shields.io/badge/Next.js-gray?style=flat&logo=Next.js&logoColor=white&magin-left=5px"/>, <img src="https://img.shields.io/badge/TypeScript-blue?style=flat&logo=TypeScript&logoColor=white&magin-left=5px"/>, <img src="https://img.shields.io/badge/styled_components-green?style=flat&logo=styledcomponents&logoColor=white&magin-left=5px"/>, <img src="https://img.shields.io/badge/Recoil-purple?style=flat&logo=Recoil&logoColor=white&magin-left=5px"/>

🐶 적용기술(2차-구상내용) : 실제 배포할 서버/제작한 소프트웨어를 실행할 장비-터치기능/개인적으로 추후에 음성인식,안내 사운드를 담고 싶어서 입출력 장치

---

1. 프로젝트 준비단계(01/10 ~ 01/12)

- Next.js + TypeScript + styled-component + Recoil 프로젝트 생성 및 개발환경 세팅 (01/10)
- Next.js + TypeScript 프로젝트 진행을 위해 부족한 내용 복습(01/11)
- Readme 작성 및 프로젝트 시작 / 프로젝트 기획 및 구상 (01/12)

2. 프로젝트 초기 제작 및 아이디어 구상(01/13 ~ )

- 위에 [프로젝트 기획] notion 링크에 프로젝트 관련해서 아이디어 및 분석 내용 계속 정리중(01/13)
- 초기 구도 잡기용 컴포넌트 생성 및 로딩 컴포넌트 생성(01/14 ~ 01/15)
- 초기페이지, 주문방식 선택 페이지, 공용 nav component제작/ 주문 방식 선택 시 전역 state로 저장하여 공용 nav에 선택값 표출(01/16)
- 메뉴 리스트를 작성하기 위해 OPEN API 를 활용하여 제품리스트 표출(01/17)
- 제품리스트 선택 시 상세 정보를 갖고 있는 modal창 구현(01/19 ~ 01/20)

![KakaoTalk_20230116_204431872](https://user-images.githubusercontent.com/98578138/212671305-d1135ed6-8cbe-4de4-9707-c4d2234b05a2.png)

