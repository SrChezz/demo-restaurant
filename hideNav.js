var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if (document.documentElement.clientWidth > 600) {
    var currentScrollPos = window.pageYOffset;
    var myNav = document.getElementById('navbar');
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-60px";
    }
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
          myNav.classList.add("nav-colored");
          myNav.classList.remove("nav-transparent");
      } 
      else {
          myNav.classList.add("nav-transparent");
          myNav.classList.remove("nav-colored");
      }
    prevScrollpos = currentScrollPos;    
  }

}

let moveResponsiveNav = function () {
  /* let myNav = document.getElementById('navbar'); */
  let myNav = document.querySelector('.responsive-list');
  /* let myNav2 = document.querySelector('nav .nav-icons'); */
  let closeNav = document.getElementById('closeNav');

  

 /*  closeNav.addEventListener('click', function() {
    myNav.classList.add('nav-move')
    myNav.style.transform = 'translateX(100%)'
  })
  myNav.style.transform = 'translateX(100%)' */


  myNav.classList.toggle('responsive-list-active')
}