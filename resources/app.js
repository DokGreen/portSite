//find the navc
const nav = document.querySelector(".nav");

//on scroll add the new class
window.addEventListener("scroll", () => {
    let top = window.scrollY;
    
    if(top != 0){
        nav.classList.add("navmve");
    } else {
        nav.classList.remove("navmve");
    }

    parallax("#header", window.scrollY, 1);
    parallax(".pc", window.scrollY, 2.5, 25);
    parallax(".coffee", window.scrollY, -0.7, -20);
    parallax(".tablet", window.scrollY, 5, 40);
    parallax(".plant", window.scrollY, -2, 0);
})


//parallax the imgs on the header
function parallax(e, d, s, r) {
    const item = document.querySelector(e);
    item.style.transform = `translateY(${d * s}px) rotate(${r}deg)`;
}