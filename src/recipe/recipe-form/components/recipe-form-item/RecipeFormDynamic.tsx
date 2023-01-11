import React, { FC } from 'react';
import { FieldArray, FormikValues } from 'formik';
import * as Styled from '../../../../common/component/component.styled';

interface Props {
  values: FormikValues;
  setValues: Function;
  name: string;
  label: string;
}

const RecipeFormDynamic: FC<Props> = ({ values, setValues, name, label }) => {
  const handleClick = (values: FormikValues, setValues: Function) => {
    const arr = [...values[name]];
    arr.push('');
    setValues({ ...values, [name]: arr });
  };

  return (
    <Styled.FormItem>
      <h4>{label}</h4>
      <FieldArray name={name}>
        {() => (
          <>
            {values[name].map((item: string, i: number) => {
              return (
                <div key={i}>
                  <Styled.Input type="text" name={`${name}.${i}`} placeholder={i + 1} />
                </div>
              );
            })}
            <Styled.OutlineButton
              color="green"
              width="250px"
              borderRadius="8px"
              onClick={() => handleClick(values, setValues)}
              type="button">
              Додати
            </Styled.OutlineButton>
          </>
        )}
      </FieldArray>
    </Styled.FormItem>
  );
};

export default RecipeFormDynamic;
