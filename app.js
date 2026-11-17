// ================ Part A ================
// 1. 바구니(변수)
let sumA = 0;      
let maxA = 0;      
let count8A = 0;    

let count2020A = 0; 
let count2010A = 0;
let count2000A = 0;
let countOldA = 0;

let bigA = "";    


for (let i = 0; i < 10; i++) {
    
    sumA = sumA + ratings[i];

    if (ratings[i] > ratings[maxA]) {
        maxA = i;  
    }

    if (ratings[i] >= 8) {
        count8A = count8A + 1; 
    }

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

    if (audiences[i] >= 1000000) {
        bigA = bigA + titles[i] + " "; 
    }
}



// 3. 반복문 종료 -> 콘솔 창

// A1은 sumA를 10으로 나눠서 평균 계산
console.log("A1 평균 평점: " + (sumA / 10));
console.log("A2 최고 평점: " + titles[maxA] + " " + ratings[maxA]);
console.log("A3 8점 이상: " + count8A + "편");
console.log("A4 2020년대 " + count2020A + "편, 2010년대 " + count2010A + "편, 2000년대 " + count2000A + "편, 그 이전 " + countOldA + "편");


if (bigA === "") {
    console.log("A5 관객 100만 이상: 없음");
} else {
    console.log("A5 관객 100만 이상: " + bigA);
}



// ======================= Part B ========================

// 1. average : 평균 평점
function average(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum = sum + list[i].rating;
    }
    return sum / list.length;
}

// 2. best : 최고 평점
function best(list) {
    let maxMovie = list[0]; 
    for (let i = 1; i < list.length; i++) {
        if (list[i].rating > maxMovie.rating) { // 더 높은 평점 발견
            maxMovie = list[i]; 
        }
    }
    return maxMovie;
}

// 3. filterByRating : 배열, 숫자 
function filterByRating(list, min) {
    return list.filter(m => m.rating >= min);
}

// 4. sortBy : 배열, 키 이름, 내림차순 여부 (참/거짓)
function sortBy(list, key, desc) {
    return [...list].sort((a, b) => {
        const sign = desc ? -1 : 1; // desc가 참(true)이면 내림차순(-1 곱하기)
        
        if (typeof a[key] === "string") {
            // 제목, 다른 글 ...: 가나다순
            return a[key].localeCompare(b[key]) * sign; 
        } else {
            // 숫자: 평점, 관객수 ...
            return (a[key] - b[key]) * sign; 
        }
    });
}

// 5. search : 배열, 문자열 -> 새 배열
function search(list, keyword) {
    const kw = keyword.trim().toLowerCase(); // 검색어 다듬기 
    return list.filter(m => m.title.toLowerCase().includes(kw));
}

// 6. formatNumber : 숫자나 숫자 문자열 -> 쉼표 찍힌 글자
function formatNumber(n) {
    return Number(n).toLocaleString("ko-KR");
}
// 7. yearsSince : 날짜 -> 올해까지 년수 
function yearsSince(dateStr) {
    const currentYear = new Date().getFullYear(); // 올해 연도 (2026)
    const releaseYear = new Date(dateStr).getFullYear(); // 개봉 연도
    return currentYear - releaseYear;
}

// 웹페이지 화면에 요약 3줄 
const bestMovie = best(movies); 
const topMovie = sortBy(movies, "audience", true)[0]; 

const line1 = "전체 " + movies.length + "편, 평균 평점 " + average(movies).toFixed(1) + "점";
const line2 = "최고 평점 " + bestMovie.title + " (" + bestMovie.rating + "점, 개봉한 지 " + yearsSince(bestMovie.date) + "년)";
const line3 = "관객 1위 " + topMovie.title + " (누적 " + formatNumber(topMovie.audience) + "명)";

document.getElementById("out").textContent = line1 + "\n" + line2 + "\n" + line3;






// ============= Part C =============

function getList(data) {
    return data.results;
}


function averageBy(list, key) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum = sum + list[i][key]; 
    }
    return sum / list.length;
}


// 3. 콘솔 창 (C1 ~ C4)
console.log("C1 page " + TMDB.page + ", total_pages " + TMDB.total_pages + ", total_results " + TMDB.total_results + ", 이번 응답 " + getList(TMDB).length + "편");
console.log("C2 상영작 평균 평점: " + averageBy(getList(TMDB), "vote_average").toFixed(1));


