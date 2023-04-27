var images = [
  "https://images.ctfassets.net/wtodlh47qxpt/2Ns4Nh6oLG77MPIRWUAprF/3993e3b6d0bed8e513cb74fb4baf252a/Chicken_Roll_1440x396px.jpg?w=1707&fit=fill&fm=webp",

  "https://images.ctfassets.net/wtodlh47qxpt/44txpCMQBZgrDK3FMlFIRp/e1b576487bd10a78810b6a2a8889d01d/Peri_Peri_Match_Specials_Baner_1440x396px_Set_1.jpg?w=1707&fit=fill&fm=webp",

  "https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/e7163ee02d91d59d81a20ecf606f707b/Biryani_Banner_1440x396px.jpg?w=1707&fit=fill&fm=webp",
];
var currentIndex = 0;
var delay = 3000;

function displayNextImage() {
  var imageElement = document.getElementById("image");

  imageElement.src = images[currentIndex];

  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}

displayNextImage();

setInterval(displayNextImage, delay);
