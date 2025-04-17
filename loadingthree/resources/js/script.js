const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const slides = document.querySelectorAll('.swiper-slide');

slides.forEach((slide) => {
    slide.addEventListener('load', () => {
        slide.querySelector('.loading-wrap').classList.add('on');
    });

    setTimeout(() => {
        slide.querySelector('.loading-wrap').classList.remove('on');
    }, 2000);
});
