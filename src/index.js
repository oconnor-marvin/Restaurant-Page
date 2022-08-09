import pageLoad from "./load-page"
import loadAbout from "./load-about"
import loadMenu from "./load-menu"
import loadContact from "./load-contact"

init();

function setActiveBtn(id){
    const activeBtn = document.querySelector('.btn-tab.active')
    if(activeBtn){
        activeBtn.classList.remove('active');
    }
    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.add('active');
}

function operateTabs(){
    const aboutTab = document.getElementById('about');
    const menuTab = document.getElementById('menu');
    const contactTab = document.getElementById('contact');

    aboutTab.addEventListener("click", () => {
        setActiveBtn('about');
        loadAbout();
    });
    menuTab.addEventListener("click", () => {
        setActiveBtn('menu');
        loadMenu();
    });
    contactTab.addEventListener("click", () => {
        setActiveBtn('contact');
        loadContact();
    })
}

function init(){
    pageLoad();
    loadAbout();
    setActiveBtn('about');
    operateTabs();
}

