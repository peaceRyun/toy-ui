//기본 레이어 팝업(근데 모달임)
const openPopup = () => {
    document.querySelector('.defaultPopupCont').classList.add('active');
};

const closePopup = () => {
    document.querySelector('.defaultPopupCont').classList.remove('active');
};

//animation 모달
const openAniModal = () => {
    document.querySelector('.animationModalCont').classList.add('active');
};

const closeAniModal = () => {
    document.querySelector('.animationModalCont').classList.remove('active');
};

document.querySelector('.animationModalBtn').addEventListener('click', openAniModal);

document.querySelector('.animationModalWrap .closeBtn').addEventListener('click', closeAniModal);
