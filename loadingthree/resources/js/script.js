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
        slide.querySelector('video').preload = 'metadata';
    }, 2000);

    slide.querySelector('video').addEventListener('click', () => {
        const video = slide.querySelector('video');
        //간결하게 conse video = e.target 도 가능하다. 대신 e를 매개변수로 또 받아야 한다.

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
