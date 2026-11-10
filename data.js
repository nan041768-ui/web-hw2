const titles = [
  "스파이더맨: 브랜드 뉴 데이", "아이언맨", "어벤져스: 엔드게임", "어벤져스: 인피니티 워", "스파이더맨: 홈커밍",
  "극장판 치이카와: 인어 섬의 비밀", "암살자(들)", "실낙원", "타짜: 벨제붑의 노래", "클레이페이스"
];

const ratings = [
  8.2, 7.8, 8.2, 8.2, 7.3,
  7.4, 7.2, 8, 7, 7.5
];

const years = [
  2026, 2008, 2019, 2018, 2017,
  2026, 2026, 2026, 2026, 2026
];

const audiences = [
  0, 0, 0, 0, 0,
  23394865120, 3382064, 112193, 2006487, 84196
];



// 영화 객체 10건

const movies = [
  // 1~5번: 내 인생 영화 5편 (관객수는 0, type은 "mine", rank는 null)
  {
    title: "스파이더맨: 브랜드 뉴 데이", year: 2026, date: "2026-01-01", rating: 8.2,
    audience: 0, poster: "/mt6uZzy7DAsncHlGGzMsyNgLR6v.jpg", type: "mine", rank: null
  },
  {
    title: "아이언맨", year: 2008, date: "2008-01-01", rating: 7.8,
    audience: 0, poster: "/ziReGUV3xURsWmcmsn2GOunPc0L.jpg", type: "mine", rank: null
  },
  {
    title: "어벤져스: 엔드게임", year: 2019, date: "2019-01-01", rating: 8.2,
    audience: 0, poster: "/z7ilT5rNN9kDo8JZmgyhM6ej2xv.jpg", type: "mine", rank: null
  },
  {
    title: "어벤져스: 인피니티 워", year: 2018, date: "2018-01-01", rating: 8.2,
    audience: 0, poster: "/kmP6viwzcEkZeoi1LaVcQemcvZh.jpg", type: "mine", rank: null
  },
  {
    title: "스파이더맨: 홈커밍", year: 2017, date: "2017-01-01", rating: 7.3,
    audience: 0, poster: "/hjki9weYYVABvkpZbX5jBOmKXXv.jpg", type: "mine", rank: null
  },

  // 6~10번: 박스오피스 5편 (실제 관객수 기입, type은 "boxoffice", rank는 1~5)
  {
    title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2026-07-24", rating: 7.4,
    audience: 23394865120, poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg", type: "boxoffice", rank: 1
  },
  {
    title: "암살자(들)", year: 2026, date: "2026-09-23", rating: 7.2,
    audience: 3382064, poster: "/c55ijsOdntj6P25vDwHLdgsBpmV.jpg", type: "boxoffice", rank: 2
  },
  {
    title: "실낙원", year: 2026, date: "2026-10-21", rating: 8,
    audience: 112193, poster: "/8Qybglcd5IqksU7rNRvpvodtrpQ.jpg", type: "boxoffice", rank: 3
  },
  {
    title: "타짜: 벨제붑의 노래", year: 2026, date: "2026-09-23", rating: 7,
    audience: 2006487, poster: "/ueigb5zra1tj6FTK9yhh2P33P9B.jpg", type: "boxoffice", rank: 4
  },
  {
    title: "클레이페이스", year: 2026, date: "2026-10-19", rating: 7.5,
    audience: 84196, poster: "/LSGpoSAlitss0KOvVakkeUToZo.jpg", type: "boxoffice", rank: 5
  }
];