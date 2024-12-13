let currentIndex = 0;
const carouselItems = document.querySelector('.carousel-items');
const totalItems = document.querySelectorAll('.carousel-item').length;
function moveSlide(step) {
  currentIndex = (currentIndex + step + totalItems) % totalItems;  
  carouselItems.style.transform = `translateX(-${currentIndex * 100}%)`;
}
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
setInterval(() => {
  moveSlide(1);  
}, 2000); 
