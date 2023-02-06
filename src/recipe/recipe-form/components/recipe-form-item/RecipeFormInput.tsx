import React, { FC } from 'react';
import * as Styled from '../../../../common/component/component.styled';
import { Field } from 'formik';

interface Props {
  placeholder: string;
  name: string;
  label: string;
}

const RecipeFormInput: FC<Props> = ({ placeholder, name, label }) => {
  return (
    <Styled.FormItem>
      <h4>{label}</h4>
      <div className="w-25">
        <Field as={Styled.OutlineInput} placeholder={placeholder} name={name} />
      </div>
    </Styled.FormItem>
  );
};

export default RecipeFormInput;
