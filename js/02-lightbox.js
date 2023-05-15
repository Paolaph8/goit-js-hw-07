import { galleryItems } from "./gallery-items.js";

const garellyContainer = document.querySelector(".gallery");
const imgMarkup = galleryItems
  .map((item) => {
    return `<li>
   <a class="gallery__item" href="${item.original}">
      <img
         class="gallery__image"
         src="${item.preview}"
         alt="${item.description}"
      />
   </a>
</li>
  `;
  })
  .join(" ");

garellyContainer.innerHTML = imgMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
