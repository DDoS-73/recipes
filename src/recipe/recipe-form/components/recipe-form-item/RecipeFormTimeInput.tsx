import React, { FC } from 'react';
import * as Styled from '../../../../common/component/component.styled';
import style from './RecipeFormItem.module.css';
import { Field } from 'formik';

interface Props {
  name1: string;
  name2: string;
}

const RecipeFormTimeInput: FC<Props> = ({ name1, name2 }) => {
  return (
    <Styled.FormItem>
      <h4>Вкажіть час приготування страви за рецептом:</h4>
      <div className={'d-inline-block ' + style.time}>
        <Field as={Styled.OutlineInput} type="number" name={name1} />
      </div>
      <span style={{ fontSize: '2rem' }}> : </span>
      <div className={'d-inline-block ' + style.time}>
        <Field as={Styled.OutlineInput} type="number" name={name2} />
      </div>
    </Styled.FormItem>
  );
};

export default RecipeFormTimeInput;
