let currentPage = 0;
const totalPages = document.querySelectorAll('.page').length;
const container = document.querySelector('.swipe-container');

document.addEventListener('wheel', (event) => {
  if (event.deltaY > 0 && currentPage < totalPages - 1) {
    currentPage++;
  } else if (event.deltaY < 0 && currentPage > 0) {
    currentPage--;
  }
  container.style.transform = `translateX(-${currentPage * 100}vw)`;
});
