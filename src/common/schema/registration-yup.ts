import * as Yup from 'yup';

export const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(40)
    .required(),
  surname: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid surname')
    .max(40)
    .required(),
  email: Yup.string().email('Invalid email').required('Required'),
  username: Yup.string()
    .matches(
      /^(?=.{3,40}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      'Please enter valid name'
    )
    .min(3)
    .max(40)
    .required(),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});
