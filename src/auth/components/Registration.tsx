import React from 'react';
import * as Styled from '../../common/component/component.styled';
import { Field, Form, Formik } from 'formik';
import { RegistrationSchema } from '../../common/schema/registration-yup';

interface RegistrationValues {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Registration = () => {
  const initialValues: RegistrationValues = {
    email: '',
    password: '',
    name: '',
    surname: '',
    confirmPassword: ''
  };
  return (
    <div className="d-flex justify-content-center flex-column h-100">
      <h1 style={{ fontSize: '2rem' }}>
        Вітаємо в <Styled.OrangeText>Куховар</Styled.OrangeText>нику!
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '-10px' }}>
        Зареєструйтесь для можливості додавати рецепти, коментарі та вподобання.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={RegistrationSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}>
        {({ errors, touched }) => (
          <Form>
            <div className="row">
              <div className="col-6">
                <Field as={Styled.Input} type="text" name="name" placeholder="Ім’я" />
                {errors.name && touched.name ? (
                  <Styled.ErrorText>{errors.name}</Styled.ErrorText>
                ) : null}
              </div>
              <div className="col-6">
                <Field as={Styled.Input} type="text" name="surname" placeholder="Прізвище" />
                {errors.surname && touched.surname ? (
                  <Styled.ErrorText>{errors.surname}</Styled.ErrorText>
                ) : null}
              </div>
            </div>
            <Field as={Styled.Input} type="email" name="email" placeholder="Пошта" />
            {errors.email && touched.email ? (
              <Styled.ErrorText>{errors.email}</Styled.ErrorText>
            ) : null}
            <Field as={Styled.Input} type="password" name="password" placeholder="Пароль" />
            {errors.password && touched.password ? (
              <Styled.ErrorText>{errors.password}</Styled.ErrorText>
            ) : null}
            <Field
              as={Styled.Input}
              type="password"
              name="password"
              placeholder="Підтвердіть пароль"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <Styled.ErrorText>{errors.confirmPassword}</Styled.ErrorText>
            ) : null}
            <div className="w-100 d-flex justify-content-between">
              <Styled.OutlineButton width={'265px'} borderRadius={'8px'} color={'green'}>
                Вже маю акаунт
              </Styled.OutlineButton>
              <Styled.FilledButton
                backgroundColor="green"
                width="250px"
                borderRadius="8px"
                type="submit">
                Зареєструватись
              </Styled.FilledButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
