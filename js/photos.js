import { getRandomNumber } from './random.js';
import { generateComments } from './comments.js';
import { openBigPicture } from './big-picture.js';

export function createPreviews() {
  const photos = generatePhotos();
  const picturesContainer = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const pictureElement = createPicture(photo);
    pictureElement.addEventListener('click', () => {
      openBigPicture(photo);
    });
    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
}
// eslint-disable-next-line no-unused-vars
export function generatePhotos() {
  const photos = [];

  for (let i = 0; i < 25; i++) {
    photos.push({
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: `Описание фотографии ${i + 1}`,
      likes: getRandomNumber(15, 200),
      comments: generateComments()
    });
  }

  return photos;
}

export function createPicture(photo) {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const pictureElement = pictureTemplate.cloneNode(true);
  const pictureImgElement = pictureElement.querySelector('.picture__img');
  const pictureLikesElement = pictureElement.querySelector('.picture__likes');
  const pictureCommentsElement = pictureElement.querySelector('.picture__comments');

  pictureImgElement.src = photo.url;
  pictureLikesElement.textContent = photo.likes;
  pictureCommentsElement.textContent = photo.comments.length;

  return pictureElement;
}
