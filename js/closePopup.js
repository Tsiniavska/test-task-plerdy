const closePopup = () => {
  document.getElementById('popup').style.display = 'none';
};

document.getElementById('close-btn').addEventListener('click', closePopup);

export default closePopup;
