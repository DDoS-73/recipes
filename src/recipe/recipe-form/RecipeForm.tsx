import React from 'react';
import style from './RecipeForm.module.css';
import HeaderForm from './components/HeaderForm';
import BodyForm from './components/body-form/BodyForm';
import Footer from '../../common/component/footer/Footer';

const RecipeForm = () => {
  return (
    <>
      <div className={style.background}>
        <HeaderForm />
        <BodyForm />
      </div>
      <Footer />
    </>
  );
};

export default RecipeForm;
