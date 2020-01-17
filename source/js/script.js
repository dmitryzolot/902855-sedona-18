var navMenu = document.querySelector('.menu');
      var navHamburger = document.querySelector('.hamburger');
      var navMenuclose = document.querySelector('.menu-close');

      navMenu.classList.remove('menu--nojs');
      navMenu.classList.remove('menu--opened');
      navHamburger.classList.remove('hamburger--hidden');


      navHamburger.addEventListener('click', function() {
        navMenuclose.classList.remove('menu-close--hidden');
        navMenu.classList.add('menu--opened');
        navHamburger.classList.add('hamburger--hidden');
        }
      );

      navMenuclose.addEventListener('click', function() {
        navMenu.classList.remove('menu--opened');
        navMenuclose.classList.add('menu-close--hidden');
        navHamburger.classList.remove('hamburger--hidden');
        }
      );
