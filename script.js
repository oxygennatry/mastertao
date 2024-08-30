const btnOpen = document.querySelector('.btn-open');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

btnOpen.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});