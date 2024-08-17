const openPopup = () => {
  document.getElementById('popup').style.display = 'block';
};

document.querySelectorAll('.open-popup').forEach((button) => {
  button.addEventListener('click', openPopup);
});

export default openPopup;
