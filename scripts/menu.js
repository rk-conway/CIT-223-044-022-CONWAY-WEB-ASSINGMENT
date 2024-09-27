
function menuFunction(){
    const menuBtn = document.querySelector('.menu');
    const navModal = document.querySelector('.nav-modal');
    const nav = document.querySelector('nav');

    if(menuBtn && navModal && nav){
        menuBtn.addEventListener('click',()=>{
            navModal.classList.add("nav-modal-open");
            nav.classList.add('fixed-nav');
        });
        navModal.addEventListener('click',()=>{
            nav.classList.remove('fixed-nav');
            navModal.classList.remove("nav-modal-open");
        });
    }
}

setTimeout(() => {
    menuFunction();
}, 0);