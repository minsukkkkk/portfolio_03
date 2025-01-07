$(document).ready(function () {
  
      // bg 병원시설
  const bg_img = new Swiper(".bg_img", {
    loop: true,
    autoplay: {
      delay: 3000, //2500=2.5초, 슬라이드 대기 시간
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: { //슬라이드 갯수(하단 불릿기호) -태그 추가
      el: ".swiper-pagination",
      type: "fraction", //"bullet(하단점)", "fraction"하단(숫자), "progressbar"
      clickable: true, // false(기본값)클릭가능여부
    },
    navigation: { // 방향버튼 - 태그추가
      nextEl: ".swiper-button-next", //다음
      prevEl: ".swiper-button-prev", //이전
    },
  });
  $(".mb_play").hide();
  $(".mb_pause").click(function () {
    bg_img.autoplay.stop();
    $(".mb_play").show();
    $(".mb_pause").hide();
  });
  $(".mb_play").click(function () {
    bg_img.autoplay.start();
    $(".mb_play").hide();
    $(".mb_pause").show();
  });


  // mv 진료항목
  const news_img = new Swiper(".mv_img", {
    loop: true,
    autoplay: {
      delay: 3000, //2500=2.5초, 슬라이드 대기 시간
      disableOnInteraction: false,
    },
    speed: 1000,
    navigation: { // 방향버튼 - 태그추가
      nextEl: ".swiper-button-next", //다음
      prevEl: ".swiper-button-prev", //이전
    },
    slidesPerView: 1, //모바일에서 보이는개수
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
      635: {  //768px 이상에서
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {  //768px 이상에서
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: { // 1200px 이상에서 
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    navigation: { // 방향버튼 - 태그추가
      nextEl: ".swiper-button-next", //다음
      prevEl: ".swiper-button-prev", //이전
    },
  });

  // 버튼 요소 가져오기
const goTopBtn = document.getElementById("goTopBtn");

// 스크롤 이벤트 감지
window.addEventListener("scroll", () => {

});

// 버튼 클릭 이벤트
goTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0, // 상단으로 이동
        behavior: "smooth" // 부드럽게 스크롤
    });
});

  });