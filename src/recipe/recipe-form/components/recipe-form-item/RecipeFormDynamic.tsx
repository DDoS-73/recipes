import React, { FC } from 'react';
import { Field, FieldArray, FormikValues } from 'formik';
import * as Styled from '../../../../common/component/component.styled';
import styles from './RecipeFormItem.module.css';

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
                <div key={i} className="w-25 d-flex">
                  <span className={styles.number}>{i + 1}. </span>
                  <Field
                    as={Styled.OutlineInput}
                    type="text"
                    name={`${name}.${i}`}
                    placeholder={name === 'ingredients' ? 'Інгрідієнт' : 'Крок'}
                  />
                </div>
              );
            })}
            <Styled.FilledButton
              backgroundColor="green"
              width="250px"
              borderRadius="8px"
              onClick={() => handleClick(values, setValues)}
              type="button">
              Додати ще
            </Styled.FilledButton>
          </>
        )}
      </FieldArray>
    </Styled.FormItem>
  );
};

export default RecipeFormDynamic;
