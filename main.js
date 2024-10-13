const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-button');
const navBtnImg = document.querySelector('#btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/nav-close.svg";
    } else {
        navBtnImg.src = 'img/NAV.svg';
    }
}

AOS.init();