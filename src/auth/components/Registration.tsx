import React from 'react';
import * as Styled from '../../common/component/component.styled';
import { Field, Form, Formik, FormikValues } from 'formik';
import { RegistrationSchema } from '../../common/schema/registration-yup';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../service/auth.service';

interface RegistrationValues {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Registration = () => {
  const navigate = useNavigate();
  const initialValues: RegistrationValues = {
    email: '',
    password: '',
    name: '',
    surname: '',
    username: '',
    confirmPassword: ''
  };

  const handleSubmit = (values: FormikValues) => {
    AuthService.register(values).then(() => navigate('/auth/login'));
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
        onSubmit={handleSubmit}>
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
            <div className="row">
              <div className="col-6">
                <Field as={Styled.Input} type="email" name="email" placeholder="Пошта" />
                {errors.email && touched.email ? (
                  <Styled.ErrorText>{errors.email}</Styled.ErrorText>
                ) : null}
              </div>
              <div className="col-6">
                <Field
                  as={Styled.Input}
                  type="text"
                  name="username"
                  placeholder="Ім'я користувача"
                />
                {errors.username && touched.username ? (
                  <Styled.ErrorText>{errors.username}</Styled.ErrorText>
                ) : null}
              </div>
            </div>
            <Field as={Styled.Input} type="password" name="password" placeholder="Пароль" />
            {errors.password && touched.password ? (
              <Styled.ErrorText>{errors.password}</Styled.ErrorText>
            ) : null}
            <Field
              as={Styled.Input}
              type="password"
              name="confirmPassword"
              placeholder="Підтвердіть пароль"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <Styled.ErrorText>{errors.confirmPassword}</Styled.ErrorText>
            ) : null}
            <div className="w-100 d-flex justify-content-between">
              <Link to="/auth/login">
                <Styled.OutlineButton width={'265px'} borderRadius={'8px'} color={'green'}>
                  Вже маю акаунт
                </Styled.OutlineButton>
              </Link>
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
