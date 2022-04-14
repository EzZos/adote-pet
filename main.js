// SWIPER

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: true,
    mousewheel: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// MODAL

function activeModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add("show");
    modal.addEventListener("click", (e) => {
        if(e.target.id == modalID || e.target.className == "icon-x"){
            modal.classList.remove("show");
        }
    })
}

const pet = document.querySelectorAll(".pet");

for(const element of pet) {
    element.addEventListener("click", (event) => {
        activeModal(event.target.id.toString() + "-modal");
    })
}
