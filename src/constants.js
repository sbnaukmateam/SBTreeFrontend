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

export const PROGRAMS = ['Бакалавр', 'Магістр', 'Аспірант'];
export const MIN_YEAR = 1992;
export const CURRENT_YEAR = new Date().getFullYear();
export const POSSIBLE_YEARS = Array.from(new Array(CURRENT_YEAR - MIN_YEAR + 1), (val, index) => index + MIN_YEAR);
export const SB_STATUS = [
  { value: 'MALIUK', label: 'Малюк' },
  { value: 'BRATCHYK', label: 'Братчик' },
  { value: 'POSHANOVANYJ', label: 'Пошанований' },
];
