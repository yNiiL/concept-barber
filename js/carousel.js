const slides = document.querySelector('.slides');
let index = 0;

document.querySelector('.next')?.addEventListener('click', () => {
  index = (index + 1) % slides.children.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.prev')?.addEventListener('click', () => {
  index = (index - 1 + slides.children.length) % slides.children.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
});
