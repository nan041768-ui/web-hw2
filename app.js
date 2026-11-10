// ================ Part A ================

// 1. 바구니(변수)
let sumA = 0;       // A1: 10편의 평점을 모두 더할 바구니
let maxA = 0;       // A2: 최고 평점 영화의 '번호(순서)'를 기억할 것
let count8A = 0;    // A3: 평점 8점 이상인 영화 '개수'를 셀 것

// A4: 연도대별 영화 개수 셀것
let count2020A = 0; 
let count2010A = 0;
let count2000A = 0;
let countOldA = 0;

let bigA = "";      // A5: 100만 관객 이상인 영화 '제목'들을 글자로 이어 붙일 것


// 2. 10편의 영화를 하나씩 확인 (0~9 번: 10번 반복)
for (let i = 0; i < 10; i++) {
    
    // [A1] 현재 확인 중인 영화의 평점을 sumA 바구니에 누적해서 더함
    sumA = sumA + ratings[i];

    // [A2] 현재 영화 평점이 지금까지 최고 평점(maxA가 기억하는 번호의 평점)보다 높다
    if (ratings[i] > ratings[maxA]) {
        maxA = i;  // 최고 평점 1등 자리를 현재 영화 번호(i)로 바꿈
    }

    // [A3] 평점이 8점 이상(>= 8)이라면?
    if (ratings[i] >= 8) {
        count8A = count8A + 1; // 8점 이상 개수를 1개 늘려줌.
    }

    // [A4] years를 10 단위로 잘라서 확인
    const decade = years[i] - (years[i] % 10);
    
    if (decade === 2020) {
        count2020A = count2020A + 1;
    } else if (decade === 2010) {
        count2010A = count2010A + 1;
    } else if (decade === 2000) {
        count2000A = count2000A + 1;
    } else {
        countOldA = countOldA + 1; // 2000년대 이전
    }

    // [A5] audiences가 100만 명 이상 (>= 1000000)
    if (audiences[i] >= 1000000) {
        // 제목(titles) 뒤에 띄어쓰기 하나(" ")를 넣어서 기차처럼 이어 붙임
        bigA = bigA + titles[i] + " "; 
    }
}



// 3. 반복문이 다 끝난 후, 최종 결과를 콘솔 창에 출력

// A1은 sumA를 10으로 나눠서 평균 계산
console.log("A1 평균 평점: " + (sumA / 10));
console.log("A2 최고 평점: " + titles[maxA] + " " + ratings[maxA]);
console.log("A3 8점 이상: " + count8A + "편");
console.log("A4 2020년대 " + count2020A + "편, 2010년대 " + count2010A + "편, 2000년대 " + count2000A + "편, 그 이전 " + countOldA + "편");

// A5는 100만 넘는 영화가 하나도 없어서 bigA가 빈칸 그대로: "없음"으로 출력
if (bigA === "") {
    console.log("A5 관객 100만 이상: 없음");
} else {
    console.log("A5 관객 100만 이상: " + bigA);
}



// ======================= Part B ========================

// 1. average : 배열 -> 평균 평점(숫자)
function average(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum = sum + list[i].rating;
    }
    return sum / list.length;
}

// 2. best : 배열 -> 최고 평점 객체
function best(list) {
    let maxMovie = list[0]; // 일단 첫 번째 영화를 1등으로 두고 시작
    for (let i = 1; i < list.length; i++) {
        if (list[i].rating > maxMovie.rating) { // 더 높은 평점을 발견
            maxMovie = list[i]; // 1등 교체
        }
    }
    return maxMovie;
}

// 3. filterByRating : 배열, 숫자 -> 새 배열
function filterByRating(list, min) {
    return list.filter(m => m.rating >= min);
}

// 4. sortBy : 배열, 키 이름, 내림차순 여부(참/거짓) -> 새 배열
function sortBy(list, key, desc) {
    return [...list].sort((a, b) => {
        const sign = desc ? -1 : 1; // desc가 참(true)이면 내림차순(-1 곱하기)
        
        if (typeof a[key] === "string") {
            // 글자(제목 등)일 때는 가나다순 비교
            return a[key].localeCompare(b[key]) * sign; 
        } else {
            // 숫자(평점, 관객수 등)일 때는 빼기로 비교
            return (a[key] - b[key]) * sign; 
        }
    });
}

// 5. search : 배열, 문자열 -> 새 배열
function search(list, keyword) {
    const kw = keyword.trim().toLowerCase(); // 검색어 다듬기
    return list.filter(m => m.title.toLowerCase().includes(kw));
}

// 6. formatNumber : 숫자나 숫자 문자열 -> 쉼표가 찍힌 글자
function formatNumber(n) {
    return Number(n).toLocaleString("ko-KR");
}

// 7. yearsSince : 날짜 문자열 -> 올해까지 몇 년(숫자)
function yearsSince(dateStr) {
    const currentYear = new Date().getFullYear(); // 올해 연도 (2026)
    const releaseYear = new Date(dateStr).getFullYear(); // 개봉 연도
    return currentYear - releaseYear;
}

// 웹페이지 화면(<pre id="out">)에 요약 3줄 출력

// 방금 만든 도구들을 사용해서 1등 영화와 관객수 1위 영화를 찾음
const bestMovie = best(movies); 
// audience 기준으로 내림차순 정렬 -> 맨 앞([0]) 영화 뽑기
const topMovie = sortBy(movies, "audience", true)[0]; 

// 화면에 띄울 3줄의 글자 완성
const line1 = "전체 " + movies.length + "편, 평균 평점 " + average(movies).toFixed(1) + "점";
const line2 = "최고 평점 " + bestMovie.title + " (" + bestMovie.rating + "점, 개봉한 지 " + yearsSince(bestMovie.date) + "년)";
const line3 = "관객 1위 " + topMovie.title + " (누적 " + formatNumber(topMovie.audience) + "명)";

// 3줄을 하나로 묶어서 index.html에 있는 <pre id="out"> 공간에 텍스트로 넣기
document.getElementById("out").textContent = line1 + "\n" + line2 + "\n" + line3;






// ============= Part C =============

// 1. getList 도구 : 입력(TMDB 전체 데이터) -> 출력(영화 목록 배열)
// 진짜 영화 목록이 들어있는 'results' 
function getList(data) {
    return data.results;
}


// 2. averageBy 도구 : 입력(영화 배열, 계산할 항목 이름) -> 출력(평균 숫자)
// 내 데이터는 평점 이름이 'rating'이지만, TMDB 데이터는 'vote_average'입니다.
// 이 함수는 어떤 이름표(key)를 넘겨주든 그 항목의 평균을 계산해 주는 만능 도구입니다.
function averageBy(list, key) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        // list[i].rating 처럼 고정하지 않고, list[i][key]를 써서 넘겨받은 이름표의 값을 꺼냅니다.
        sum = sum + list[i][key]; 
    }
    return sum / list.length;
}


// 3. 콘솔 창에 결과 출력하기 (C1 ~ C4)
console.log("C1 page " + TMDB.page + ", total_pages " + TMDB.total_pages + ", total_results " + TMDB.total_results + ", 이번 응답 " + getList(TMDB).length + "편");
console.log("C2 상영작 평균 평점: " + averageBy(getList(TMDB), "vote_average").toFixed(1));

// (주의) 아래 C3 표와 C4 검색 결과 출력은 Part B에서 만든 sortBy, search 도구가 필요합니다!
// console.table(sortBy(getList(TMDB), "vote_average", true).slice(0, 5), ["title", "release_date", "vote_average"]);
// console.log("C4 '바다' 검색: " + search(getList(TMDB), "바다").length + "편");
