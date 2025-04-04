const openAccordion = () => {
    document.querySelectorAll('.accordion .accordion-body').forEach((body) => {
        body.classList.add('active');
    });
};

document.querySelectorAll('.accordion li').forEach((item) => item.addEventListener('click', openAccordion));
