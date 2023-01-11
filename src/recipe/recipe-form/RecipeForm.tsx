import React from 'react';
import style from './RecipeForm.module.css';
import HeaderForm from './components/HeaderForm';
import BodyForm from './components/body-form/BodyForm';

const RecipeForm = () => {
  return (
    <div className={style.background}>
      <div className="container py-5">
        <HeaderForm />
        <BodyForm />
      </div>
    </div>
  );
};

export default RecipeForm;
