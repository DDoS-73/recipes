import React, { FC } from 'react';
import style from './RecipeFormItem.module.css';
import * as Styled from '../../../../common/component/component.styled';
import { Field, FormikValues } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

interface Props {
  placeholder: string;
  name: string;
  label: string;
  setFieldValue: Function;
  values: FormikValues;
}

const RecipeFormFileUpload: FC<Props> = ({ placeholder, name, label, setFieldValue, values }) => {
  return (
    <Styled.FormItem>
      <h4>{label}</h4>
      <label className={style.fileUpload}>
        <FontAwesomeIcon className="me-2" icon={faDownload} />
        {values[name].length ? 'Файл додано' : placeholder}
        <Field
          component={Styled.Input}
          type="file"
          placeholder={placeholder}
          name={'random'}
          onChange={(e: Event) => {
            const target = e.target as HTMLInputElement;
            const files = target.files as ArrayLike<File>;
            let myFiles = Array.from(files);
            console.log(name);
            setFieldValue(name, myFiles);
          }}
        />
      </label>
    </Styled.FormItem>
  );
};

export default RecipeFormFileUpload;
