const initBurgerMenu = () => {
  const DOMBurger = document.getElementById('js-burger');
  const DOMNavigation = document.getElementById('js-navigation');

  // Function for closing the burger menu
  const closeBurgerMenu = () => {
    if (DOMBurger.classList.contains('header-burger--open')) {
      DOMBurger.classList.remove('header-burger--open');
      DOMNavigation.classList.remove('navigation--open');
    }
  };

  // Event handler for the burger menu button
  if (DOMBurger) {
    DOMBurger.addEventListener('click', () => {
      DOMBurger.classList.toggle('header-burger--open');
      DOMNavigation.classList.toggle('navigation--open');
    });

    // Event handler for resizing the window
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        closeBurgerMenu();
      }
    });
  }
};

export default initBurgerMenu;
