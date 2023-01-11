import React from 'react';
import { Form, Formik } from 'formik';
import * as Styled from '../../common/component/component.styled';
import { LoginSchema } from '../../common/schema/login-yup';

interface LoginValues {
  email: string;
  password: string;
}

const Login = () => {
  const initialValues: LoginValues = { email: '', password: '' };
  return (
    <div className="d-flex justify-content-center flex-column h-100">
      <h1 style={{ fontSize: '2rem' }}>
        Заходьте скоріше до <Styled.OrangeText>Куховар</Styled.OrangeText>нику!
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '-10px' }}>
        Увійдіть для можливості додавати рецепти, коментарі та вподобання.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}>
        {({ errors, touched }) => (
          <Form>
            <Styled.Input type="email" name="email" placeholder="Пошта" />
            {errors.email && touched.email ? (
              <Styled.ErrorText>{errors.email}</Styled.ErrorText>
            ) : null}
            <Styled.Input type="password" name="password" placeholder="Пароль" />
            {errors.password && touched.password ? (
              <Styled.ErrorText>{errors.password}</Styled.ErrorText>
            ) : null}
            <div className="w-100 d-flex justify-content-between">
              <Styled.OutlineButton width={'265px'} borderRadius={'8px'} color={'green'}>
                Не маю акаунту
              </Styled.OutlineButton>
              <Styled.FilledButton
                backgroundColor="green"
                width="250px"
                borderRadius="8px"
                type="submit">
                Увійти
              </Styled.FilledButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
