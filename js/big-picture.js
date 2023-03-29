import { escapeKey } from './consts.js';

// закрытие окна по нажатию клавиши Esc
const onDocumentKeyDown = (evt) => {
  if (evt.key === escapeKey) {
    closeBigPicture();
  }
};

// закрытие окна по клику на иконку закрытия
const onCloseButtonClick = () => {
  closeBigPicture();
};

export function closeBigPicture () {
  const bigPictureElement = document.querySelector('.big-picture');
  const closeButtonElement = bigPictureElement.querySelector('.big-picture__cancel');

  // удаляем класс modal-open у тега <body>
  document.body.classList.remove('modal-open');

  // закрываем окно
  bigPictureElement.classList.add('hidden');

  // удаляем обработчики событий
  document.removeEventListener('keydown', onDocumentKeyDown);
  closeButtonElement.removeEventListener('click', onCloseButtonClick);
}

export function openBigPicture(photo) {
  const bigPictureElement = document.querySelector('.big-picture');
  const bigPictureImgElement = bigPictureElement.querySelector('.big-picture__img img');
  const likesCountElement = bigPictureElement.querySelector('.likes-count');
  const commentsCountElement = bigPictureElement.querySelector('.comments-count');
  const socialCaptionElement = bigPictureElement.querySelector('.social__caption');
  const socialCommentsElement = bigPictureElement.querySelector('.social__comments');
  const socialCommentCountElement = bigPictureElement.querySelector('.social__comment-count');
  const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
  const closeButtonElement = bigPictureElement.querySelector('.big-picture__cancel');

  bigPictureImgElement.src = photo.url;
  likesCountElement.textContent = photo.likes;
  commentsCountElement.textContent = photo.comments.length;
  socialCaptionElement.textContent = photo.description;

  // удаляем предыдущие комментарии
  socialCommentsElement.innerHTML = '';

  // добавляем новые комментарии
  photo.comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const commentImgElement = document.createElement('img');
    commentImgElement.classList.add('social__picture');
    commentImgElement.src = comment.avatar;
    commentImgElement.alt = comment.name;
    commentImgElement.width = 35;
    commentImgElement.height = 35;
    commentElement.appendChild(commentImgElement);

    const commentTextElement = document.createElement('p');
    commentTextElement.classList.add('social__text');
    commentTextElement.textContent = comment.message;
    commentElement.appendChild(commentTextElement);

    socialCommentsElement.appendChild(commentElement);
  });

  // спрячем блоки счётчика комментариев и загрузки новых комментариев
  socialCommentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');

  // добавим тегу <body> класс modal-open
  document.body.classList.add('modal-open');

  // показываем окно
  bigPictureElement.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeyDown);
  closeButtonElement.addEventListener('click', onCloseButtonClick);
}
