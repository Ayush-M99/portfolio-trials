// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// Typewriter animation
const typewriter = document.querySelector('.typewriter');
if (typewriter) {
  const phrases = ["AI/ML Engineer", "Robotics Enthusiast", "Real-Time Systems"];
  let i = 0, j = 0, isDeleting = false;

  function type() {
    const current = phrases[i];
    if (isDeleting) {
      j--;
    } else {
      j++;
    }

    typewriter.textContent = current.substring(0, j);

    if (!isDeleting && j === current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
      setTimeout(type, 300);
    } else {
      setTimeout(type, isDeleting ? 60 : 120);
    }
  }

  type();
}

// Theme toggle
const themeCheckbox = document.querySelector('.theme-switch__checkbox');
if (themeCheckbox) {
  themeCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
  });
}
