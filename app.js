// Carroceu

let currentIndex = 0;
let interval = null;

function showItem(index) {
  const items = document.querySelectorAll(".carousel-item");
  items.forEach((item, i) => {
    item.style.left = `${(i - index) * 100}%`;
    item.classList.toggle("active", i === index);
  });
}

function showNextItem() {
  const items = document.querySelectorAll(".carousel-item");
  // Enquanto o currentIndex não for igual ao tamanho da lista, ele não retorna 0
  // Quando isso ocorre, o currentIndex recebe 0
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
  startCarousel();
}

function showPrevItem() {
  const items = document.querySelectorAll(".carousel-item");
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
  startCarousel();
}

function startCarousel() {
  clearInterval(interval);
  interval = setInterval(showNextItem, 5000);
}

function stopCarousel() {
  clearInterval(interval);
}

document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("vantagens");
  if (section) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showItem(currentIndex);
            startCarousel();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // null significa que a área visível do navegador será usada
        rootMargin: "0px",
        threshold: 0.1, // O percentual de visibilidade necessário para acionar o callback
      }
    );
    observer.observe(section);
  }
});

document.querySelector("prev-button").addEventListener("click", () => {
  stopCarousel();
  showPrevItem();
});

document.querySelector("next-button").addEventListener("click", () => {
  stopCarousel();
  showNextItem();
});
