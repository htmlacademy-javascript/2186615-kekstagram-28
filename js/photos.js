import { getRandomNumber } from './random.js';
import { generateComments } from './comments.js';

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
