const loadContent = () => {
  const container = document.querySelector('.container');

  if (container) {
    container.classList.add('loaded');
  } else {
    console.error('.container element not found');
  }
};

export default loadContent;
