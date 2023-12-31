import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery')
function createMrkup(arr) {
    return arr.map(({ preview, original, description }) => ` <li class="gallery__item" >
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"width="340" height="300"/>
    </a>
  </li>`).join('')
}
container.insertAdjacentHTML('beforeend', createMrkup(galleryItems))
container.addEventListener('click', handletGalleryClick)
function handletGalleryClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    const picture = evt.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${picture}" alt=""/>`,{
        onShow: (instance) => {
          container.addEventListener('keydown', onEscPress );
        },
        onClose: (instance) => {
        container.removeEventListener('keydown',onEscPress );
        },
      }
    );   
    instance.show();
function  onEscPress (evt) {
  if (evt.code === "Escape") {
    instance.close();}};
}