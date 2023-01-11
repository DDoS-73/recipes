import React from 'react';
import * as Styled from '../../../../common/component/component.styled';
import { Field } from 'formik';
import style from './RecipeFormItem.module.css';

const RecipeFormRadioGroup = () => {
  return (
    <Styled.FormItem>
      <h4>Вкажіть складність рецепту:</h4>
      <div role="group" aria-labelledby="my-radio-group" className="mt-4 ps-5">
        <label className={'d-block'}>
          <Field type="radio" name="complexity" value="Легкий" />
          <span className={style.radio}>Легкий</span>
        </label>
        <label className={'d-block'}>
          <Field type="radio" name="complexity" value="Помірний" />
          <span className={style.radio}>Помірний</span>
        </label>
        <label className={'d-block'}>
          <Field type="radio" name="complexity" value="Складний" />
          <span className={style.radio}>Складний</span>
        </label>
      </div>
    </Styled.FormItem>
  );
};

export default RecipeFormRadioGroup;
