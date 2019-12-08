//find the navc
const nav = document.querySelector(".nav");
const w = window.innerWidth;

//console.log(w);

//on scroll add the new class
window.addEventListener("scroll", () => {
    let top = window.scrollY;
    
    if(top != 0){
        nav.classList.add("navmve");
    } else {
        nav.classList.remove("navmve");
    }

    //header imgs
    parallax(".header", window.scrollY, 1);
    parallax(".pc", window.scrollY, 2.5, 25);
    parallax(".tablet", window.scrollY, -0.7, -20);
    parallax(".coffee", window.scrollY, 5, 40);
    parallax(".plant", window.scrollY, -2, 0);

    //contact imgs
    parallax(".contact", window.scrollY, 1);
    parallax(".plane", (window.scrollY / 35), -8, 0);
    parallax(".phone", (window.scrollY / 10), 7, 0);

    //console.log(-window.scrollY);
})


//parallax the imgs on the header
function parallax(e, d, s, r) {
    const item = document.querySelector(e);
    item.style.transform = `translateY(${d * s}px) rotate(${r}deg)`;
}

//get the probox's
const box = document.querySelectorAll(".probox");
//console.log(box);

//when hovering zoom photo in and popup txt box
box.forEach(i => {
    i.addEventListener('mouseover', e => {
        let pic = i.children[0];
        let txt = i.children[1];

        let rect = e.target.getBoundingClientRect();
        //console.log(rect);

        mouseX = Math.floor(e.clientX - rect.left);
        mouseY = Math.floor(e.clientY - rect.top);

        //console.log(mouseX, mouseY);

        imgX = mouseX / 5;
        imgY = mouseY / 5;

        //console.log(imgX, imgY)

        pic.style.filter = "blur(2px)";
        pic.style.transform = `translate(${imgX}px, ${imgY}px) scale(2)`;
        txt.style.transform = "translateY(-20vw)";
        if(w <= 475){
            txt.style.transform = "translateY(-80vw)";  
        //console.log('mobile');  
      } else {
        txt.style.transform = "translateY(-20vw)";
        //console.log('regular');
      }
    })
})

box.forEach(function(i) {
    i.addEventListener('mouseout', e => {
      //console.log('over'); 
      let pic = i.children[0];
      let txt = i.children[1];
      pic.style.filter = "blur(0px)";
      pic.style.transform = "scale(1)";
      txt.style.transform = "translateY(0)";
    })
  });