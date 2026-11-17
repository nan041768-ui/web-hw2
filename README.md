# 실습과제 #2 [영화 데이터를 자바스크립트로] 

- 이름 / 학번 : 민윤희 / (2651025)
- 사이트 주소 : https://nan041768-ui.github.io/web-hw2/
- 사용한 API: TMDB (영화 정보, now_playing 응답), KOBIS 일별 박스오피스 (기준일 2026-10-26)

## 구현 항목 체크
- [ ] 1. Part A: data.js에 10칸짜리 배열 4개. app.js에서 계산한 A1~A5 다섯 줄이 콘솔에 찍힘.
- [ ] 2. Part B 함수 7개: movies 10건. 7개 함수가 표의 입력/출력대로 동작하고 자가 테스트 1~8번 통과.
- [ ] 3. Part C 응답 구조: tmdb.js에 now_playing 응답 저장. C1, C2, 상위 5편 표, C4가 콘솔에 찍힘.
- [ ] 4. 출력: console-a.png, console-c.png 2장. 사이트 주소에 Part B 요약 3줄.
- [ ] 5. 코드 품질: 주석, const/let 사용, 원본 불변, 중복 없음, 직관적인 이름.
- [ ] 6. 제출 형식: 공개 저장소 web-hw2, Pages 동작, README, 자가 테스트 표, 생성형 AI 기록, API 키 없음.

## 자가 테스트 표
| 번호 | 호출 | 기대 결과 | 실제 결과 |
| --- | --- | --- | --- |
| 1 | `formatNumber("1234567")` | '1,234,567' | | _숫자 3자리마다 쉼표_
| 2 | `average(movies).toFixed(1)` | | |  _(movies)영화 데이터 배열 내 (rating)평균값 계산_
| 3 | `best(movies).title` | | | _배열 내 평점 톺은 영화 객체 1개 반환_
| 4 | `sortBy(movies, "rating", true)[0].title` | | | _배열 속성 기준 - 오름/내림차순 정렬_
| 5 | `filterByRating(movies, 8).length` | | |  _8점 이상인 영화만 반환_
| 6 | `search(movies, "스파이더맨").length` | | | _특정 검색어 포함 데이터만 반환_
| 7 | `yearsSince("2014-11-06")` | 12 | | _특정 개봉일(2014-11-06)~현재: 경과 년수_
| 8 | 4번 실행 뒤 `movies[0].title` | 스파이더맨: 브랜드 뉴 데이 | | _배열 정렬 -> 맨 처음 영화 객체 제목 반환_

## 어려웠던 점 3가지와 해결
1. 
2. 
3. 

## 참고한 자료 
- MDN Web Docs 등 검색한 자료 입력

## 생성형 AI 사용 내역 
- 질문 요지 : 
- 답변 요약 : 
- 채택 여부 :# 실습과제 #2 [영화 데이터를 자바스크립트로] 

- 이름 / 학번 : 민윤희 / (2651025)
- 사이트 주소 : https://nan041768-ui.github.io/web-hw2/
- 사용한 API: TMDB (영화 정보, now_playing 응답), KOBIS 일별 박스오피스 (기준일 2026-10-26)

## 구현 항목 체크
- [ ] 1. Part A: data.js에 10칸짜리 배열 4개. app.js에서 계산한 A1~A5 다섯 줄이 콘솔에 찍힘.
- [ ] 2. Part B 함수 7개: movies 10건. 7개 함수가 표의 입력/출력대로 동작하고 자가 테스트 1~8번 통과.
- [ ] 3. Part C 응답 구조: tmdb.js에 now_playing 응답 저장. C1, C2, 상위 5편 표, C4가 콘솔에 찍힘.
- [ ] 4. 출력: console-a.png, console-c.png 2장. 사이트 주소에 Part B 요약 3줄.
- [ ] 5. 코드 품질: 주석, const/let 사용, 원본 불변, 중복 없음, 직관적인 이름.
- [ ] 6. 제출 형식: 공개 저장소 web-hw2, Pages 동작, README, 자가 테스트 표, 생성형 AI 기록, API 키 없음.

## 자가 테스트 표
| 번호 | 호출 | 기대 결과 | 실제 결과 |
| --- | --- | --- | --- |
| 1 | `formatNumber("1234567")` | '1,234,567' |7.68| _숫자 3자리마다 쉼표_
| 2 | `average(movies).toFixed(1)` | | |  _(movies)영화 데이터 배열 내 (rating)평균값 계산_
| 3 | `best(movies).title` | | | _배열 내 평점 톺은 영화 객체 1개 반환_
| 4 | `sortBy(movies, "rating", true)[0].title` | | | _배열 속성 기준 - 오름/내림차순 정렬_
| 5 | `filterByRating(movies, 8).length` | | |  _8점 이상인 영화만 반환_
| 6 | `search(movies, "스파이더맨").length` | | | _특정 검색어 포함 데이터만 반환_
| 7 | `yearsSince("2014-11-06")` | 12 | | _특정 개봉일(2014-11-06)~현재: 경과 년수_
| 8 | 4번 실행 뒤 `movies[0].title` | 스파이더맨: 브랜드 뉴 데이 | | _배열 정렬 -> 맨 처음 영화 객체 제목 반환_

## 어려웠던 점 3가지와 해결
1. 
2. 
3. 

## 참고한 자료 
- MDN Web Docs 등 검색한 자료 입력

## 생성형 AI 사용 내역 
- 질문 요지 : 레포지토리 내에 있는 코드 파일(4가지) 각각 역할이 어떻게 되는지, 코드의 흐름 이해를 위한 질문
- 답변 요약 : app.js, data.js, index.html, tmdb.js 파일의 각각 역할이 어떻게 되는지에 대한 요약 답변.
- 채택 여부 : 채택

- 질문 요지 : LiveServer → Console 창에 formatNumber() 함수에 해당하는 기능이 뜨지 않음
- 답변 요약 : 테스트용 큰 숫자(예: 1234567) 직접 입력 후 콘솔 확인하기.
- 채택 여부 : 채택