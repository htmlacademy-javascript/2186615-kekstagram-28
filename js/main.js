function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(arr) {
  return arr[getRandomNumber(0, arr.length - 1)];
}

function getRandomSentence() {
  const sentences = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  return getRandomElement(sentences);
}

function getRandomName() {
  const names = ['Алексей', 'Дмитрий', 'Мария', 'Светлана', 'Василий', 'Елена'];
  return getRandomElement(names);
}

function getRandomAvatar() {
  return `img/avatar-${getRandomNumber(1, 6)}.svg`;
}

function generateComments() {
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

// eslint-disable-next-line no-unused-vars
function generatePhotos() {
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
