import { generatePhotos, createPicture } from './photos.js';

const photos = generatePhotos();
const picturesContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

photos.forEach((photo) => {
  const pictureElement = createPicture(photo);
  fragment.appendChild(pictureElement);
});

picturesContainer.appendChild(fragment);
