const mask = document.querySelector('.mask');
const html = document.querySelector('html');

html.style.overflow = 'hidden'; //로딩 중 스크롤 방지
window.addEventListener('load', function () {
    //아래 setTimeout은 로딩되는 과정을 임의로 생성하기 위해 사용. 실제 적용 시에는 삭제 후 적용해야함.
    setTimeout(function () {
        mask.classList.add('fade-out'); // 클래스 추가로 트랜지션 트리거

        mask.addEventListener(
            'transitionend',
            function () {
                html.style.overflow = 'auto';
                mask.style.display = 'none';
            },
            { once: true }
        );
    }, 2000);
});
