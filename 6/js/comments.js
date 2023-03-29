import { getRandomAvatar, getRandomName, getRandomSentence, getRandomNumber } from './random.js';

export function generateComments() {
  const comments = [];
  const commentsCount = getRandomNumber(1, 5);

  for (let i = 0; i < commentsCount; i++) {
    comments.push({
      id: i + 1,
      avatar: getRandomAvatar(),
      message: getRandomSentence(),
      name: getRandomName()
    });
  }

  return comments;
}
