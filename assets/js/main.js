/*=============== SHOW MENU ===============*/
const 
navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*=============== MENU SHOW ===============*/

/* Validate if constant exist */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');   
       })
}
/*=============== MENU HIDDEN ===============*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}  

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Cuando clickamos en cada nav__link, quitamos la clase showmenu
    navMenu.classList.remove('show-menu')
}  
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  },
  keyboard: true,
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  },
  keyboard: true,
});


/*=============== PRELOAD ANIMATION ===============*/

window.addEventListener('load', (event) => {
  setTimeout(() => {
      const preloadContainer = document.querySelector('.preload-container');
      preloadContainer.style.display = 'none';
  }, 1600); 
});



/*=============== CAMBIO DE IDIOMA ===============*/
const languageButton = document.getElementById("language-button");

// Agregar un controlador de eventos para cambiar el idioma al hacer clic en el botón
languageButton.addEventListener("click", function () {

  const englishContent = document.querySelectorAll(".language-en");
  const spanishContent = document.querySelectorAll(".language-es");

  englishContent.forEach((element) => {
    element.style.display = "none";
  });

  spanishContent.forEach((element) => {
    element.style.display = "block";
  });
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
document.addEventListener('DOMContentLoaded', function () {
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const scrollActive = () => {
   const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute('id');
      const sectionsClass = document.querySelector('.nav__menu')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active-link');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active-link');
          }
        });
      } else {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.remove('active-link');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', scrollActive);

  /*=============== SHOW SCROLL UP ===============*/
  const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the scroll-up element
    if (window.scrollY >= 350) {
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  };

  window.addEventListener('scroll', scrollUp);
});

/*=============== DARK LIGHT THEME ===============*/ 
const themeSwitch = document.getElementById('theme-switch');
const darkThemeIcon = document.querySelector('.dark-theme-icon');
const lightThemeIcon = document.querySelector('.light-theme-icon');

// Comprobar el tema seleccionado al cargar la página
const selectedTheme = localStorage.getItem('selected-theme') || 'dark-theme';

const toggleTheme = () => {
  if (themeSwitch.checked) {
    // Cambiar al tema claro
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('selected-theme', 'light-theme');
    darkThemeIcon.style.display = 'none';
    lightThemeIcon.style.display = 'inline';
  } else {
    // Cambiar al tema oscuro
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('selected-theme', 'dark-theme');
    darkThemeIcon.style.display = 'inline';
    lightThemeIcon.style.display = 'none';
  }
};

// Establecer el tema predeterminado
if (selectedTheme === 'dark-theme') {
  themeSwitch.checked = false;
} else {
  themeSwitch.checked = true;
}
toggleTheme(); // Aplicar el tema predeterminado

// Escuchar el evento de cambio en el switch
themeSwitch.addEventListener('change', toggleTheme);



/*=============== CHANGE BACKGROUND HEADER ===============*/
 
const scrollHeader = () =>{
  const header = document. getElementById('header')

// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
this.scrollY >= 50 ? header.classList.add('bg-header')
                   : header.classList.remove('bg-header')

}

window. addEventListener('scroll', scrollHeader)


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true /* Animations, aol
  
})
  
  sr.reveal('.home__data, .projects__container, .testimonial__container, .footer_container')
  sr.reveal('.home__info div', {delay: 600, origin: 'bottom', interval: 100})
  sr.reveal('.skills__content:nth-child(1), .contact__content:nth-child(1)', {origin: 'left'})
  sr.reveal('.skills__content:nth-child(2), .contact__content:nth-child(2)', {origin: 'right'})
  sr.reveal('.qualification__content, .services__card', {interval: 100})