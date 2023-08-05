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
    const instance = basicLightbox.create(`
    <div class = "modal"> <img src="${picture}" alt=""/></div>`)
     const modalImage = instance.element().querySelector('img');
    instance.show();
      modalImage.addEventListener('click', () => {
        instance.close();
    });
    container.addEventListener('keydown', (evt) => {
        if (evt.code === "Escape") {
            instance.close();
        }
    });
}


//{
        // onShow: (instance) => {
        //    instance.show();
        // },
        // onClose: (instance) => {
        //     instance.close();
        // },
        // }
        // );

        //function handletGalleryClick(evt) {
         //   evt.preventDefault();
           // if (!evt.target.classList.contains('gallery__image')) {
          ///      return;
           // }
          //  console.log(evt.target);
          //  const picture = evt.target.dataset.source;
           // const instance = basicLightbox.create(`
           // <div class = "modal"> <img src="${picture}" alt=""/></div>`)
           // instance.show();
          
           // container.addEventListener('keydown', (evt) => {
          //      if (evt.code === "Escape") {
          //          instance.close();
          //      }
          //  });
       // }


