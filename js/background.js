const images = [
  "color1.png",
  "color2.png",
  "color3.png",
  "color4.png",
  "color5.png",
  "color6.png",
  "color7.png",
];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);
