import React from 'react';
import { Field, Form, Formik, FormikValues } from 'formik';
import * as Styled from '../common/component/component.styled';
import { LoginSchema } from '../common/schema/login-yup';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../auth/service/auth.service';
import { setIsAuth } from '../store/authSlice';
import { useDispatch } from 'react-redux';
import RecipeService from '../recipe/services/recipe.service';

interface LoginValues {
  login: string;
  password: string;
}

const ModeratorLogin = () => {
  const initialValues: LoginValues = { login: '', password: '' };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values: FormikValues) => {
    AuthService.login(values).then((res) => {
      dispatch(setIsAuth(true));
      localStorage.setItem('token', 'Bearer ' + res.data.accessToken);
      RecipeService.setToken();
      navigate('/recipes/moderation');
    });
  };

  return (
    <div className="d-flex justify-content-center flex-column h-100">
      <h1 style={{ fontSize: '2rem' }}>
        Заходьте скоріше до <Styled.OrangeText>Куховар</Styled.OrangeText>нику!
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '-10px' }}>
        Увійдіть для можливості додавати рецепти, коментарі та вподобання.
      </p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form>
            <Field as={Styled.Input} type="text" name="login" placeholder="Пошта" />
            {errors.login && touched.login ? (
              <Styled.ErrorText>{errors.login}</Styled.ErrorText>
            ) : null}
            <Field as={Styled.Input} type="password" name="password" placeholder="Пароль" />
            {errors.password && touched.password ? (
              <Styled.ErrorText>{errors.password}</Styled.ErrorText>
            ) : null}
            <div className="w-100 d-flex justify-content-between">
              <Link to="/auth/register">
                <Styled.OutlineButton width={'265px'} borderRadius={'8px'} color={'green'}>
                  Не маю акаунту
                </Styled.OutlineButton>
              </Link>
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

export default ModeratorLogin;
