export const FACULTIES = [
  {
    name: 'ФІ',
    value: '1',
    specialities: [
      { name: 'Прикладна математика', value: '1' },
      { name: 'Інженерія ПЗ / Програмна Інженерія', value: '2' },
      { name: 'Комп"ютерні науки / Інформатика', value: '3' },
    ],
  },
  {
    name: 'ФГН',
    value: '2',
    specialities: [
      { name: 'Літературознавство', value: '4' },
      { name: 'Філологія', value: '5' },
      { name: 'Історія', value: '6' },
    ],
  },
  {
    name: 'ФСНСТ',
    value: '3',
    specialities: [
      { name: 'Соціологія', value: '7' },
      { name: 'Психологія', value: '8' },
    ],
  },
  {
    name: 'ФПрН',
    value: '4',
    specialities: [
      { name: 'Екологія', value: '9' },
      { name: 'Хімія', value: '10' },
      { name: 'Фізика', value: '11' },
    ],
  },
  {
    name: 'ФПвН',
    value: '5',
    specialities: [
      { name: 'Право', value: '12' },
    ],
  },
  {
    name: 'ФЕН',
    value: 6,
    specialities: [],
  },
];
export const INTERESTS = [
  {
    value: 'photo',
    label: 'Фото',
    img: '/images/interests/camera.png',
  },
  {
    value: 'cinema',
    label: 'Кіно',
    img: '/images/interests/cinema.png',
  },
  {
    value: 'listenMusic',
    label: 'Слухати музику',
    img: '/images/interests/music.png',
  },
  {
    value: 'playMusic',
    label: 'Музика',
    img: '/images/interests/guitar.png',
  },
  {
    value: 'books',
    label: 'Книги',
    img: '/images/interests/book.png',
  },
  {
    value: 'travel',
    label: 'Подорожі',
    img: '/images/interests/hiking.png',
  },
];
export const PROGRAMS = [
  { name: 'Бакалавр', value: '1' },
  { name: 'Магістр', value: '2' },
  { name: 'Аспірант', value: '3' },
];
export const MIN_YEAR = 1992;
export const CURRENT_YEAR = new Date().getFullYear();
export const POSSIBLE_YEARS = Array.from(new Array(CURRENT_YEAR - MIN_YEAR + 1), (val, index) => index + MIN_YEAR);
export const SB_STATUS = [
  { value: 'NEW_MEMBER', label: 'Малюк' },
  { value: 'CURRENT_MEMBER', label: 'Братчик' },
  { value: 'OLD_MEMBER', label: 'Пошанований' },
];
