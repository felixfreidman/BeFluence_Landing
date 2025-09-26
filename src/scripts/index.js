// Swipers

const swiper1 = new Swiper(".column1", {
  direction: "vertical",
  loop: true,
  slidesPerView: 2,
  speed: 12000,
  allowTouchMove: false,
  spaceBetween: 8,
  autoplay: {
    delay: 0,
  },
});
const swiper2 = new Swiper(".column2", {
  direction: "vertical",
  loop: true,
  slidesPerView: 2,
  speed: 12000,
  allowTouchMove: false,
  spaceBetween: 8,
  autoplay: {
    delay: 0,
    reverseDirection: true,
  },
});
const swiper3 = new Swiper(".column3", {
  direction: "vertical",
  loop: true,
  slidesPerView: 2,
  speed: 12000,
  allowTouchMove: false,
  spaceBetween: 8,
  autoplay: {
    delay: 0,
  },
});
const swiper4 = new Swiper(".column4", {
  direction: "vertical",
  loop: true,
  slidesPerView: 5,
  speed: 1000,
  initialSlide: 0,
  allowTouchMove: false,
  spaceBetween: 20,
  autoplay: {
    reverseDirection: true,
    delay: 500,
  },
});

const swiper5 = new Swiper(".swiperBrand", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 6,
  speed: 3000,
  allowTouchMove: false,
  spaceBetween: 30,
  autoplay: {
    delay: 0,
  },

  breakpoints: {
    0: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    681: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});

// Custom Cursor

const videoGrid = document.querySelector(".directionSection__videoGrid");

const cursorArrow = document.querySelector(".arrow");
const cursorBubble = document.querySelector(".bubble");

const moveCursor = (e) => {
  const mouseY = e.clientY + window.pageYOffset;
  const mouseX = e.clientX;
  cursorArrow.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  cursorBubble.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

const showCursor = () => {
  cursorArrow.classList.remove("jsHidden");
  cursorBubble.classList.remove("jsHidden");
};

const hideCursor = () => {
  cursorArrow.classList.add("jsHidden");
  cursorBubble.classList.add("jsHidden");
};

window.addEventListener("mousemove", moveCursor);
videoGrid.addEventListener("mousemove", showCursor);
videoGrid.addEventListener("mouseout", hideCursor);

// Steps Containes

const stepContainerTiles = document.querySelectorAll(
  ".directionSection__stepContainerTile"
);

let index = 0;

function setStepActive() {
  if (index % 3 === 0) {
    stepContainerTiles[0].classList.add(
      "directionSection__stepContainerTileActive"
    );
    stepContainerTiles[1].classList.remove(
      "directionSection__stepContainerTileActive"
    );
    stepContainerTiles[2].classList.remove(
      "directionSection__stepContainerTileActive"
    );
  } else if (index % 3 === 1) {
    stepContainerTiles[1].classList.add(
      "directionSection__stepContainerTileActive"
    );
    stepContainerTiles[0].classList.remove(
      "directionSection__stepContainerTileActive"
    );
    stepContainerTiles[2].classList.remove(
      "directionSection__stepContainerTileActive"
    );
  } else if (index % 3 === 2) {
    stepContainerTiles[2].classList.add(
      "directionSection__stepContainerTileActive"
    );
    stepContainerTiles[0].classList.remove(
      "directionSection__stepContainerTileActive"
    );
    stepContainerTiles[1].classList.remove(
      "directionSection__stepContainerTileActive"
    );
  }

  index++;
}

setInterval(setStepActive, 3000);

// const contactMask = new IMask(document.querySelector('[name="contactInput"]'), {
//   mask: [
//     {
//       mask: "+{0}(000)000-00-00",
//     },
// {
//   mask: /^@\S*@?\S*$/,
// },
//   ],
// });

const toTopButtons = document.querySelectorAll(".ToTop");

toTopButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    let currentURL = window.location.href;
    let newURL = currentURL.split("#")[0];
    window.history.replaceState({}, document.title, newURL);
  });
});

let initZoom = 1;

function reportWindowSize() {
  const wrapper = document.querySelector(".wrapperSection");
  const currentWidth = window.innerWidth;
  let initWidth = 0;
  let zoomLevelPerPixel = 0;
  let zoomLevel = 0;

  // if (currentWidth > 1399) {
  //   initWidth = 1440;
  //   zoomLevelPerPixel = 0.0005;
  //   zoomLevel = (currentWidth - initWidth) * zoomLevelPerPixel + initZoom;
  //   if (zoomLevel >= 1.24) {
  //     wrapper.style.zoom = 1.24;
  //   } else {
  //     wrapper.style.zoom = zoomLevel;
  //   }
  // }

  if (currentWidth <= 1399 && currentWidth >= 961) {
    zoomLevelPerPixel = 0.0007;
    initWidth = 1440;
    zoomLevel = initZoom - (initWidth - currentWidth) * zoomLevelPerPixel;
    wrapper.style.zoom = zoomLevel;
  }

  if (currentWidth <= 960 && currentWidth > 680) {
    initZoom = 1;
    zoomLevelPerPixel = 0.0012;
    initWidth = 681;
    zoomLevel = initZoom + (currentWidth - initWidth) * zoomLevelPerPixel;
    wrapper.style.zoom = zoomLevel;
  }

  if (currentWidth <= 680) {
    initZoom = 1.5;
    zoomLevelPerPixel = 0.002;
    initWidth = 639;
    zoomLevel = initZoom - (initWidth - currentWidth) * zoomLevelPerPixel;
    wrapper.style.zoom = zoomLevel;
  }
}

window.addEventListener("resize", reportWindowSize);

document.addEventListener("DOMContentLoaded", () => {
  reportWindowSize();
});

window.addEventListener("load", () => {
  const dateInput = document.querySelector(".dateInput");
  const today = new Date();

  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  dateInput.value = `${day}/${month}/${year}`;
});

const anchorLinks = document.querySelectorAll(".anchorLink");

anchorLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      let currentURL = window.location.href;
      let newURL = currentURL.split("#")[0];
      window.history.replaceState({}, document.title, newURL);
    }, 300);
  });
});

const contactForm = document.querySelector(".contactForm");
contactForm.addEventListener("submit", (event) => {
  const phoneInput = document.querySelector(".phoneInput");
  if (phoneInput.value !== "") {
    event.preventDefault();
  }
});
