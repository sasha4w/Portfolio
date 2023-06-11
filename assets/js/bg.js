window.addEventListener("DOMContentLoaded", function () {
  // condition menu burger//
  const burgerBtn = document.querySelector(".burger-btn");
  const burgerMenu = document.querySelector(".burger-menu");
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("open");
    burgerMenu.classList.toggle("open");
  });

  // Carousel avec le doigt//

  const carousel = document.querySelector(".carousel");
  let isTouchStart = false;
  let touchStartX = 0;
  let touchMoveX = 0;
  let startX = null;
  let startY = null;
  let deltaX = 0;
  let deltaY = 0;

  document.addEventListener("touchmove", (x) => {
    // Vérification scroll horizontal > vertical //
    if (deltaX > deltaY) {
      x.preventDefault();
    }
  });

  const touchStart = (x) => {
    isTouchStart = true;
    touchStartX = x.touches[0].clientX;
  };

  const touchMove = (x) => {
    if (!isTouchStart) return;

    deltaX = Math.abs(startX - x.touches[0].clientX);
    deltaY = Math.abs(startY - x.touches[0].clientY);

    // Vérification scroll horizontal > vertical //
    if (deltaX > deltaY) {
      x.preventDefault();
    }

    touchMoveX = x.touches[0].clientX;
    const difference = touchStartX - touchMoveX;
    carousel.scrollLeft += difference;
    touchStartX = touchMoveX;
  };

  const touchEnd = () => {
    isTouchStart = false;
  };

  carousel.addEventListener("touchstart", touchStart);
  carousel.addEventListener("touchmove", touchMove);
  carousel.addEventListener("touchend", touchEnd);

  document.addEventListener("touchstart", (x) => {
    startX = x.touches[0].clientX;
    startY = x.touches[0].clientY;
  });
  // Slider animation //
  const slider = document.querySelector(".slider");
  const prevButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");
  const slideWidth = document.querySelector(".slide").offsetWidth;
  let currentIndex = 0;

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < 2) {
      currentIndex++;
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  });
  //zoom img et description //
  const images = document.querySelectorAll(".image-container");

  images.forEach((image) => {
    const diapo = image.querySelector(".diapo");
    const overlay = image.querySelector(".overlay");

    diapo.addEventListener("click", () => {
      overlay.style.height = "100%";
    });

    overlay.addEventListener("click", () => {
      overlay.style.height = "0";
    });
  });
  //Mentions légales//
  const mentionsLegalesLink = document.getElementById("mentions-legales-link");
  const mentionsLegales = document.getElementById("mentions-legales");
  const closeMentionsLegales = document.getElementById(
    "close-mentions-legales"
  );

  mentionsLegalesLink.addEventListener("click", (event) => {
    event.preventDefault();
    mentionsLegales.style.display = "block";
  });

  closeMentionsLegales.addEventListener("click", () => {
    mentionsLegales.style.display = "none";
  });
});
