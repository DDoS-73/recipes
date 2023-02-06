import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  login: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.')
});
