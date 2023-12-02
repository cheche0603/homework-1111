  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-right",
      prevEl: ".swiper-button-lift",
    },
  });



var swiper = new Swiper(".list_swiper", {
    slidesPerView: 10,
  spaceBetween: 30,
  navigation: {
      nextEl: ".swiper-button-right",
      prevEl: ".swiper-button-lift",
    },
});



var swiper = new Swiper(".product_flashsale_swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-right",
      prevEl: ".swiper-button-lift",
    },
});
