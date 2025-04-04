document.querySelectorAll('.accordion li').forEach((item) => {
    const accordionHeader = item.querySelector('a');
    const accordionBody = item.querySelector('.accordion-body');

    accordionHeader.addEventListener('click', function (event) {
        event.preventDefault();

        if (item.classList.contains('disabled')) {
            return;
        }

        document.querySelectorAll('.accordion .accordion-body').forEach((body) => {
            body.classList.remove('active');
        });
        document.querySelectorAll('.accordion a').forEach((header) => {
            header.classList.remove('active');
        });

        accordionBody.classList.toggle('active');
        accordionHeader.classList.toggle('active');
    });
});
