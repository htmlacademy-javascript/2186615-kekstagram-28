export function checkLength(text, maxLength) {
  return text.length <= maxLength;
}

export function isPalindrom(text) {
  let textWithoutSpaces = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      textWithoutSpaces += text[i];
    }
  }

  text = textWithoutSpaces.toLowerCase();

  let start = 0;
  let end = text.length - 1;

  while (start < end) {
    if (text[start] !== text[end]) {
      return false;
    }

    start++;
    end--;
  }
  return true;
}

export function fetchDigits(text) {
  let digits = '';

  for (let i = 0; i < text.length; i++) {
    if (!isNaN(parseInt(text[i], 10))) {
      digits += text[i];
    }
  }

  return parseInt(digits, 10);
}

export function addSymbols(text, minLength, symbols) {
  if (text.length > minLength) {
    return text;
  }

  const cyclesCount = minLength - text.length;
  let j = 0;
  let textBegin = '';

  for (let i = 0; i < cyclesCount; i++) {
    textBegin += symbols[j];

    if (j < symbols.length - 1) {
      j++;
    } else { // reset cycle by symbols
      text = textBegin + text;
      j = 0;
      textBegin = '';
    }
  }

  return textBegin + text;
}

// Cтрока короче 20 символов
checkLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkLength('проверяемая строка', 10); // false

isPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrom('ДовОд'); // true
// Это не палиндром
isPalindrom('Кекс'); // false

fetchDigits('2023 год'); // 2023
fetchDigits('ECMAScript 2022'); // 2022
fetchDigits('1 кефир, 0.5 батона'); // 105
fetchDigits('агент 007'); // 7
fetchDigits('а я томат'); // NaN

// Добавочный символ использован один раз
addSymbols('1', 2, '0'); // '01'

// Добавочный символ использован три раза
addSymbols('1', 4, '0'); // '0001'

// Добавочные символы обрезаны с конца
addSymbols('q', 4, 'werty'); // 'werq'

// Добавочные символы использованы полтора раза
addSymbols('q', 4, 'we'); // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
addSymbols('qwerty', 4, '0'); // 'qwerty'
