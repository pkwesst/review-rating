# Review-Rating-App

> 후기 아이템의 평점(1-10점)을 클릭하고, 후기 내용을 기록하여 관리하는 앱

---

## 사용

- React
- Context API
- Axios
- FAKE REST API
- LocalStorage
- Styled Components

---

## 목차

- [구현](#구현)
  - API 통신
  - 평점, 후기 등록
  - 평점, 후기 수정
  - 평점, 후기 삭제
  - 평점, 후기 저장
  - UI
- [트러블 슈팅](#트러블슈팅)

---

## 구현

### API 통신

<img alt="api" src="https://user-images.githubusercontent.com/90893579/171990605-a69a5616-4b7e-4ba3-b5d5-794d20d7bd4a.png" style="width:100vw; display:block; margin:0 auto"/>

- FAKE REST API를 get 방식으로 commets JSON 데이터를 가공해 기존 예시 데이터로 출력
- 평점은 random()으로 1-10점 이내 숫자로 후기 리스트 생성
- useReducer로 관리하는 data의 length로 후기 총 개수 출력

### 평점, 후기 등록

<img alt="create1" src="https://user-images.githubusercontent.com/90893579/171989524-9e7a7b9e-7145-4ab6-b9b1-0a70927a06ff.png" style="width:100vw; display:block; margin:0 auto"/>

- 평점, 후기 아이템, 후기 내용 작성 후 등록
- 평점은 ReviewRating 컴포넌트에서 input type을 radio로 한 후 해당 숫자에 해당하는 key를 props으로 전달
- Context API로 전역적으로 공급한 onCreate 함수를 ReviewCreate 컴포넌트에서 useContext를 이용해 사용
- 'SEND' 버튼의 클릭 시 평점, 후기 아이템, 후기 내용을 가지고 onCreate가 실행되게 함

| 평점, 후기 작성                                                                                                                                                                           | 평점, 후기 생성 확인                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img alt="create2" src="https://user-images.githubusercontent.com/90893579/171989597-2192c098-2d6f-455d-83d4-cf06009778a9.png" style="width:100vw; display:inline-block; margin:0 auto"/> | <img alt="create3" src="https://user-images.githubusercontent.com/90893579/171989674-b434fff3-c942-48bb-b69f-c9af5d898d7f.png" style="width:100vw; display:inline-block; margin:0 auto"/> |

- confirm창으로 후기 생성 확인 메시지
- 'SEND'버튼 누르면 onClick 이벤트 발생 후 onCreate 함수 호출해 데이터 생성된 다음 후기 리스트에 출력
- 날짜는 후기 작성 시점을 기준으로 출력

### 평점, 후기 수정

| 후기 내용 수정                                                                                                                                                                    | 후기 내용 수정 확인                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img alt="edit1" src="https://user-images.githubusercontent.com/90893579/171990745-1125da56-0be3-4c8f-bfde-5352ae82500b.png" style="width:100vw; display:block; margin:0 auto" /> | <img alt="edit2" src="https://user-images.githubusercontent.com/90893579/171990765-e6b588bc-a3f4-4d5f-b4a9-6a0b240e02b7.png" style="width:100vw; display:block; margin:0 auto" /> |

- 평점 수정 및 후기 내용 수정 가능
- useState의 boolean으로 수정 버튼 클릭 유무를 관리해 삼항연산자를 통해 화면 출력
- 수정 버튼 클릭 시 autofocus로 후기 내용란을 사용자에게 알림
- 후기 내용 작성하는 textarea의 onChange로 후기 내용을 state에 업데이트
- Context로 공급받은 onEdit 함수를 호출해 수정 내용 반영 후 호출

<img alt="edit_btn" src="https://user-images.githubusercontent.com/90893579/171990786-85241fb5-e023-4022-8a16-91db76813f94.png" style="width:100vw; display:block; margin:0 auto" />

- 수정 버튼을 누르지 않고도 +/- 버튼으로 평점만 따로 수정 가능
- +/- 버튼에 현재 평점을 가져온 후 연산하는 onClick 이벤트 설정
- Context로 공급받은 onEdit을 이용해 평점 수정 반영

### 평점, 후기 삭제

| 평점, 후기 삭제                                                                                                                                                                     | 평점, 후기 삭제 확인                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img alt="delete1" src="https://user-images.githubusercontent.com/90893579/171990823-eb188818-346d-4f11-98a3-a8596376f674.png" style="width:100vw; display:block; margin:0 auto" /> | <img alt="delete2" src="https://user-images.githubusercontent.com/90893579/171990834-5d5a5cad-b9f3-4fbe-8da3-d3fe435a2bac.png" style="width:100vw; display:block; margin:0 auto" /> |

- 삭제 버튼 클릭 시 Context로 공급받은 onRemove 함수 실행
- onRemove 실행 시 해당 후기 id를 제외한 요소를 모아 새로운 배열로 반환해 화면 출력

### 평점, 후기 저장

<img alt="save" src="https://user-images.githubusercontent.com/90893579/171991016-e0332f76-19a7-4691-b9a4-ec36a0b42bb3.png">

- LocalStorage를 통해 review key를 통해 후기의 평점과 내용 관리
- Context에서 dispatch에서 onRemove를 조회해 사용
- reducer에서 action을 일으켜 newData로 반영한 객체를 LocalStorage에 JSON 문자열로 변환해 review key의 값으로 저장

### UI

- Styled Components 이용
  - Global Style로 관리
  - props 받아와 스타일 적용

---

## 트러블 슈팅

### API로 데이터 가져올 때 데이터가 undefined 되는 현상

**문제**

- API가 데이터를 가져 오기 전 렌더가 돼 undefined 데이터가 후기 목록에 출력되는 현상

**해결**

- 해당 데이터의 id가 undefined나 null이 아닌 경우에만 후기 목록을 반환하도록 단축 평가 논리 계산법을 이용해 해결

### 평점만 +/-버튼으로 수정하는 기능

**문제**

- 후기 내용을 수정하는 함수를 이미 구현했는데, 평점만 따로 수정하고 싶을 때 새로운 함수를 작성 시 코드가 중복되는 현상

**해결**

- target의 name, value값을 전달받아 하나의 함수(changeReview)로 구현

### 평점 숫자의 클릭 범위가 좁음

**문제**

- input의 radio를 통해 평점 하나만 클릭할 수 있게 하였더니, radio 좁은 해당 부분만 클릭이 인식되는 현상

**해결**

- input의 radio 클릭은 opacity로 보이지 않게 처리하고, label의 범위를 평점 요소만큼으로 설정

### +/- 버튼으로 평점 수정 시 연산 오류

**문제**

- 원래 평점에서 + 버튼 클릭하면 +10이 연산된 후 +1씩 연산되는 오류

**해결**

- 평점을 숫자가 아닌 문자로 인식하여 생긴 오류로 버튼으로 전달받은 평점을 parseInt로 숫자로 변환 후 +/- 연산해 해결

---

## 학습한 내용

### Truthy, Falsy

- Falsy한 값은 `undefined`, `null`, `0`, `''`, `NaN`
- Falsy한 값에 앞에 느낌표를 붙일 경우 Truthy한 값이 됨
- 느낌표 2개도 사용 가능

### 단축 평가 논리 계산법

- 특정 값이 유효할때에만 어떤 값을 조회하고자 할 때 유용
- A && B 연산자의 경우
  - A가 Truthy 한 값이라면, 결과값은 B
  - A가 Falsy 한 값이라면, 결과값은 A
- A || B 연산자의 경우
  - A가 Truthy한 값이라면, 결과값은 A
  - A가 Falsy한 값이라면, 결과값은 B
