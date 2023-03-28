export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomElement(arr) {
  return arr[getRandomNumber(0, arr.length - 1)];
}

export function getRandomSentence() {
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

export function getRandomName() {
  const names = ['Алексей', 'Дмитрий', 'Мария', 'Светлана', 'Василий', 'Елена'];
  return getRandomElement(names);
}

export function getRandomAvatar() {
  return `img/avatar-${getRandomNumber(1, 6)}.svg`;
}
