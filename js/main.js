$(function () {
  $(".offers__slider").slick({
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  });
});

const arrowRight = document.querySelector(".right-arrow");
const arrowLeft = document.querySelector(".left-arrow");
const productSlider = document.querySelector(".product__slider");
const productSliderElem = productSlider.children;
const burgerBtn = document.querySelector(".info__btn-burger");
const infoMenu = document.querySelector(".info__click-menu");
let productBigImgs = document.querySelectorAll(".product__big-img");
let oldActiveElem = document.querySelector(".active-img");
let oldActiveImg = document.querySelector(".active-big-img");

let currElem = 0;

arrowRight.addEventListener("click", changeActiveRight);
arrowLeft.addEventListener("click", changeActiveLeft);
productSlider.addEventListener("click", changeActiveClick);
burgerBtn.addEventListener("click", changeClass);

function changeActiveRight(e) {
  if (currElem >= 3) {
    currElem = 0;
  } else {
    currElem++;
  }
  oldActiveElem.classList.toggle("active-img");
  oldActiveElem = productSliderElem[currElem];
  productSliderElem[currElem].classList.toggle("active-img");
  oldActiveImg.classList.toggle("active-big-img");
  oldActiveImg = productBigImgs[currElem];
  oldActiveImg.classList.toggle("active-big-img");
}

function changeActiveLeft() {
  if (currElem <= 0) {
    currElem = 3;
  } else {
    currElem--;
  }
  oldActiveElem.classList.toggle("active-img");
  oldActiveElem = productSliderElem[currElem];
  productSliderElem[currElem].classList.toggle("active-img");
  oldActiveImg.classList.toggle("active-big-img");
  oldActiveImg = productBigImgs[currElem];
  oldActiveImg.classList.toggle("active-big-img");
}

function changeActiveClick(e) {
  if (
    e.target.classList.contains("product__slider") ||
    e.target.classList.contains("product__slider-item")
  ) {
    return false;
  } else {
    oldActiveElem.classList.toggle("active-img");
    oldActiveElem = e.target;
    currElem = e.target.dataset.num;
    oldActiveElem.classList.toggle("active-img");
    oldActiveImg.classList.toggle("active-big-img");
    oldActiveImg = productBigImgs[currElem];
    oldActiveImg.classList.toggle("active-big-img");
  }
}
function changeClass() {
  infoMenu.classList.toggle("show");
}
