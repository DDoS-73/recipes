import React, { FC } from 'react';
import * as Styled from '../../../../common/component/component.styled';

interface Props {
  placeholder: string;
  name: string;
  label: string;
}

const RecipeFormInput: FC<Props> = ({ placeholder, name, label }) => {
  return (
    <Styled.FormItem>
      <h4>{label}</h4>
      <Styled.Input placeholder={placeholder} name={name} />
    </Styled.FormItem>
  );
};

export default RecipeFormInput;
