const imageContainer = document.getElementById("image-container");
const backDrop = document.getElementById("back-drop");
const popupContainer = document.getElementById("popup-container");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let popUpImages = document.getElementById("popup-images");
let slide;

//Images array with all images url path
const imagesArray = [
  "images/img0.jpeg",
  "images/img1.jpeg",
  "images/img2.jpeg",
  "images/img3.jpeg",
  "images/img4.jpeg",
  "images/img5.jpeg",
  "images/img6.jpeg",
  "images/img7.jpeg",
  "images/img8.jpg",
  "images/img9.jpeg",
  "images/img10.jpeg",
  "images/img11.jpg",
];

//Get all HTML Element through map function
const createImagesElement = imagesArray.map(
  (img) =>
    `<img src=${img} class="images w-full p-1 rounded-xl sm:w-1/3 md:w-1/4 h-52 cursor-pointer">`
);

//Insert Element in Image-container.
imageContainer.innerHTML = imagesElement.join("");

//Get all images from webpages.
const images = document.querySelectorAll(".images");

//Iterate all Images to get Click index
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    slide = index;
    imgSlide();
  });
});

//ButtonShowAndHide Function Created to check button show or not
const buttonShowAndHide = () => {
  slide === 0
    ? (prevButton.style.display = "none")
    : (prevButton.style.display = "block");
  slide === images.length - 1
    ? (nextButton.style.display = "none")
    : (nextButton.style.display = "block");
};

//Create imgSlide Function
const imgSlide = () => {
  popupContainer.style.display = "block";
  backDrop.style.display = "block";
  popUpImages.src = `${imagesArray[slide]}`;
  buttonShowAndHide();
};

//Create backDrop Function to handle when user click outside of slider then it close.
backDrop.addEventListener("click", () => {
  backDrop.style.display = "none";
  popupContainer.style.display = "none";
});

//Create PrevClick button To handle slide backward
const prevClick = () => {
  if (slide === 0) {
    slide = images.length - 1;
  }
  slide--;
  imgSlide();
};

//Create nextClick button to hanlde slide forward
const nextClick = () => {
  if (slide > images.length - 1) {
    slide = 0;
  }
  slide++;
  imgSlide();
};
