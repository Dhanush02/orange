console.log("Orange Designer");
menu = () => {
  var showNav = document.querySelector(".nav-list");
  showNav.classList.toggle("show");
  var a = Array.from(document.querySelectorAll(".show a"));
  a.forEach((rem) => {
    rem.addEventListener("click", () => {
      showNav.classList.remove("show");
    });
  });
};

window.addEventListener("scroll", () => {
  let navbar = document.getElementById("scr-fix");
  if (window.pageYOffset > 90) {
    navbar.style.boxShadow = "0 8px 25px 0 rgba(0,0,0,.1)";
    navbar.classList.add("nav-change");
  } else {
    navbar.style.backgroundColor = "white";
    navbar.style.boxShadow = "none";
  }
});

// let clientHeight = document.getElementById('home').offsetHeight;
// console.log(clientHeight);  
// window.addEventListener('scroll',()=>{
//     if(window.pageYOffset > 660){
//         let nav2 = document.getElementById('ul-nav-list2');
//         nav2.style.color = "orange";
//     }
//     else{
//         let nav2 = document.getElementById('ul-nav-list2');
//         nav2.style.color = "black"
//     }
// })
