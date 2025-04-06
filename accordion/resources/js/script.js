document.querySelectorAll('.accordion li').forEach((item) => {
    const accordionHeader = item.querySelector('a');
    const accordionBody = item.querySelector('.accordion-body');

    accordionHeader.addEventListener('click', function (event) {
        event.preventDefault();

        if (item.classList.contains('disabled')) {
            return;
        }

        // 현재 클릭한 아이템이 이미 활성화되어 있는지 확인
        const isActive = accordionHeader.classList.contains('active');

        // 모든 아코디언 닫기
        document.querySelectorAll('.accordion .accordion-body').forEach((body) => {
            body.classList.remove('active');
        });
        document.querySelectorAll('.accordion a').forEach((header) => {
            header.classList.remove('active');
        });

        // 이미 활성화된 상태가 아니었을 경우에만 현재 항목 열기
        if (!isActive) {
            accordionBody.classList.add('active');
            accordionHeader.classList.add('active');
        }
        // 이미 활성화된 상태였다면 아무것도 하지 않음 (모든 항목이 닫힌 상태 유지)
    });
});
