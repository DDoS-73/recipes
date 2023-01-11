import { Field } from 'formik';
import React, { FC } from 'react';
import * as Styled from '../../../../common/component/component.styled';

interface Props {
  label: string;
  name: string;
}

const RecipeFormSelect: FC<Props> = ({ label, name }) => {
  return (
    <Styled.FormItem>
      <h4>{label}</h4>
      <Field as="select" name={name} component={Styled.Select}>
        <option value="Kyiv">Київ</option>
      </Field>
    </Styled.FormItem>
  );
};

export default RecipeFormSelect;
