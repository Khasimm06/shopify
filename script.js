document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelectorAll('.testimonial');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.2,
  });

  testimonials.forEach(testimonial => observer.observe(testimonial));

const slide = document.querySelector('.carousel-slide');
const slides = document.querySelectorAll('.carousel-slide > *');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;

function updateSlide() {
  const size = slides[0].clientWidth;
  slide.style.transform = `translateX(${-size * counter}px)`;
}

nextBtn.addEventListener('click', () => {
  counter = (counter + 1) % slides.length;
  updateSlide();
});

prevBtn.addEventListener('click', () => {
  counter = (counter - 1 + slides.length) % slides.length;
  updateSlide();
});

window.addEventListener('resize', updateSlide);


window.addEventListener("scroll", () => {
  const progress = document.getElementById("progress");
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progress.style.width = scrollPercent + "%";
});


});
