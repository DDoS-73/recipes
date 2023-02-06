import { Field } from 'formik';
import React, { FC } from 'react';
import * as Styled from '../../../../common/component/component.styled';

interface Props {
  label: string;
  name: string;
  options: string[];
}

const RecipeFormSelect: FC<Props> = ({ label, name, options }) => {
  return (
    <Styled.FormItem>
      <h4>{label}</h4>
      <Field as={Styled.OutlineSelect} name={name} color="#A3A3A3">
        <option value="" disabled>
          Оберіть
        </option>
        {options.map((str, i) => (
          <option key={i} value={str}>
            {str}
          </option>
        ))}
      </Field>
    </Styled.FormItem>
  );
};

export default RecipeFormSelect;
