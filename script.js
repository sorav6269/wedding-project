const searchbox = document.querySelector("#searchbox");
const option = document.querySelector(".option");
const citymenu = document.querySelector(".cityinput");
const optionlist = document.querySelectorAll(".option li");

optionlist.forEach(function (optionlistsingle) {
    optionlistsingle.addEventListener('click', function () {
        text = this.textContent;
        citymenu.value = text;
    })
});

/*slider*/

const carousel = document.querySelector(".carousel")
const arrowbtn = document.querySelectorAll(".wrapper img")
const cardlist = carousel.querySelector(".card").offsetwidth;

let isdragging = false, startX, startScrollLeft;


arrowbtn.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? - cardlist : cardlist;
    });
});

const drgstart = (e) => {
    isdragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
    if (! isdragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragstop = () => {
    isdragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", drgstart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragstop)
