export const FACULTIES = [
  {
    name: 'ФІ',
    speacialities: ['Прикладна математика', 'Інженерія ПЗ / Програмна Інженерія', 'Комп"ютерні науки / Інформатика'],
  },
  {
    name: 'ФГН',
    speacialities: [],
  },
  {
    name: 'ФСНСТ',
    speacialities: [],
  },
  {
    name: 'ФПрН',
    speacialities: [],
  },
  {
    name: 'ФПвН',
    speacialities: ['Правознавство'],
  },
  {
    name: 'ФЕН',
    speacialities: [],
  },
];

export const PROGRAMS = ['Бакалавр', 'Магістр', 'Аспірант'];
export const MIN_YEAR = 1992;
export const CURRENT_YEAR = new Date().getFullYear();
export const POSSIBLE_YEARS = Array.from(new Array(CURRENT_YEAR - MIN_YEAR + 1), (val, index) => index + MIN_YEAR);
