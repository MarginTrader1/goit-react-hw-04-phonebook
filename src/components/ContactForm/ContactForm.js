// используем библиотеку Formik для заполнения форм ввода
import { Formik } from 'formik';
import {
  StyledForm,
  StyledField,
  StyledError,
  Button,
  Span,
} from './ContactForm.styled';
import * as Yup from 'yup';

// используем библиотеку Nanoid для генерации случайного id
import { nanoid } from 'nanoid';

// паттерн для проверки номера
const phoneRegExp =
  /^\+?\d{1,4}?[ .-]?(\(\d{1,3}\))?([ .-]?\d{1,4}){1,4}([ .-]?\d{1,9})?$/;

// паттерн для проверки имени
const nameRegExp =
  "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

// валидация формы через библиотеку Yup
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(nameRegExp, 'Неверный ввод')
    .required('Заполните поле'),
  number: Yup.string()
    .min(7, 'Too Short!')
    .matches(phoneRegExp, 'Неверный ввод')
    .required('Заполните поле'),
});

export const ContactForm = ({ addContact, defaltState }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        // submit формы ввода возвращает объект values, который мы распыляем в новый объект и добавляем сгенерированное id
        addContact({ ...values, id: nanoid() });

        //ресет формы
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          <Span>Name</Span>
          <StyledField name="name" placeholder="Jane Doe" />
          <StyledError name="name" component="div" />
        </label>

        <label>
          <Span>Number</Span>
          <StyledField
            type="tel"
            name="number"
            placeholder="111-11-11"
            required
          />
          <StyledError name="number" component="div" />
        </label>

        <Button type="submit">Добавить контакт</Button>
        <Button type="button" onClick={defaltState}>Defalt Settings</Button>
      </StyledForm>
    </Formik>
  );
};
