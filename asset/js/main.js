/* MENU SHOW */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')



/* ACTIVE AND REMOVE MENU */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* mixitup*/
const mixer = mixitup('.work__container', {
    selectors: {
        target: '.work__img'
    },
    animation: {
        duration: 1000
    }
});

const linkPortfolio = document.querySelectorAll('.work__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

//typing animation script
var typed = new Typed(".typing", {
  strings: ["Surabhi S", "a Python Developer","an ML Enthusiast", "a Blogger","a Student"],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true
})

AOS.init();



$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwQGPr1pkixKq48eghIfCxI29Hivv7NnEfLw7kmrA/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Succesful")
            window.location.reload()
            
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
