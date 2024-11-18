# javascript-movie

5주차 비동기 실습 과제

## 구조
<br>src/
<br>├── scripts/
<br>│   ├── api/                   # API 관련 이벤트 처리
<br>│   │   ├── fillTable.ts       # 반환된 result를 통해 페이지에 처리하는 함수
<br>│   │   ├── resultsManager.ts    # 맵핑된 results를 현재 페이지 너비에 따라 반환하는 함수
<br>│   │   └── fecthResults.ts    # API에서 results 맵핑하는 함수
<br>│   ├── ui/                    # UI 관련 이벤트 처리
<br>│   │   ├── eventHandlers.ts   # 버튼 및 스크롤 이벤트 처리
<br>│   │   ├── scrollHandler.ts   # 스크롤 위치 확인 함수
<br>│   │   ├── clickHandler.ts    # 버튼 클릭 확인 함수
<br>│   │   └── widthHandler.ts    # 너비 변화 확인 함수
<br>├── types/                     # UI 관련 이벤트 처리
<br>│   └── movie.d.ts             # 여러 타입들 interface 처리
<br>├── constants/                 # 상수 폴더
<br>│   ├── index.ts               # URL 상수
<br>│   └── options.ts             # API 옵션들 상수
<br>├── styles/                    # 스타일
<br>│   └── style.css              # 스타일시트
<br>└── main.ts                    # results와
<br>index.html                     # UI와 main.ts 연결
<br>.env                           # API 키 들어있는 환경변수