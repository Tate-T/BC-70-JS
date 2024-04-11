// Завдання "Переключення слайдів": Створіть галерею слайдів,
//     яка автоматично перемикається на наступний слайд
//     через певний інтервал, використовуючи setTimeout.

const images = [
  "https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp",
  "https://thumbs.dreamstime.com/b/post-apocalyptic-cyberpunk-boy-outdoors-nuclear-post-apocalypse-time-life-doomsday-concept-young-man-warrior-chain-171459143.jpg",
  "https://static4.depositphotos.com/1003326/319/i/450/depositphotos_3191160-stock-photo-blurry-bright-background.jpg",
];

const list = document.createElement("ul");
for (let index = 0; index < 3; index++) {
  const li = document.createElement("li");
  li.classList.add("gallery-item");
  list.append(li);
  const link = document.createElement("a");
  li.classList.add("gallery-link");
  li.append(link);
  const img = document.createElement("img");
  img.classList.add("gallery-image");
  img.dataset.source = images[index];
  link.append(img);
}

document.body.prepend(list);
const elements = document.querySelector("ul");
const items = document.querySelectorAll(".gallery-item");
const imgs = document.querySelectorAll(".gallery-image");

let n = 0;
for (let img of imgs) {
  img.src = images[n];
  n++;
}

elements.addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target.nodeName === "IMG") {
    let imgLink = event.target.dataset.source;
    const lightbox = basicLightbox.create(`
    <div class="modal">
        <img class="image-shown" src= "${imgLink}">
    </div>
      `);
    lightbox.show();
    const shownImage = document.querySelector(".image-shown");
    let currentImage = images.indexOf(imgLink);
    const interval = setInterval(() => {
      if (currentImage < 3) {
        shownImage.src = images[currentImage];
        currentImage++;
      } else {
        currentImage = 0;
      }
    }, 2000);
  }
});
