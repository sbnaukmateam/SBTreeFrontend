const required = value => (value ? undefined : 'Поле не заповнене');
const minLength = min => value => (value && value.length < min ? `Як мінімум ${min} символів` : undefined);
const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Не правильна адреса' : undefined);
const oneNumber = value => (value && !/(?=.*[0-9])/i.test(value) ? 'Як мінімум 1 цифра' : undefined);
const oneUpperChar = value => (value && !/(?=.*[A-Z])/i.test(value) ? 'Як мінімум 1 велика літера' : undefined);
const isYear = value => (value && !/^\d{4}$/i.test(value) ? 'Рік в форматі yyyy' : undefined);
const passwordConfirmation = (values) => {
  const errors = {};
  if (values.passwordConfirm && values.password && values.passwordConfirm !== values.password) {
    errors.passwordConfirm = 'Паролі не співпадають';
  }
  return errors;
};
const phone = value => (value && !/^[+]*[(]{0,1}[0-9]{1,4}[)]?[-\s./0-9]*$/i.test(value) ? 'Некоректний формат номеру' : undefined);
const url = value => (value && !/[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i.test(value) ? 'Неправильне покликання' : undefined);
export const validate = {
  required, minLength, email, oneNumber, oneUpperChar, passwordConfirmation, isYear, url, phone,
};
