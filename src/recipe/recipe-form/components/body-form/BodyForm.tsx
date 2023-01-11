import React from 'react';
import { Form, Formik, FormikValues } from 'formik';
import style from './BodyForm.module.css';
import RecipeFormInput from '../recipe-form-item/RecipeFormInput';
import RecipeFormFileUpload from '../recipe-form-item/RecipeFormFileUpload';
import RecipeFormTimeInput from '../recipe-form-item/RecipeFormTimeInput';
import RecipeFormSelect from '../recipe-form-item/RecipeFormSelect';
import RecipeFormRadioGroup from '../recipe-form-item/RecipeFormRadioGroup';
import * as Styled from '../../../../common/component/component.styled';
import RecipeFormDynamic from '../recipe-form-item/RecipeFormDynamic';
import RecipeService from '../../../services/recipe.service';

interface RecipeValues {
  name: string;
  description: string;
  photo: [];
  video: [];
  hours: number;
  minutes: number;
  region: string;
  category: string;
  complexity: string;
  ingredients: Array<string>;
  steps: Array<string>;
}

const BodyForm = () => {
  const initialValues: RecipeValues = {
    name: '',
    description: '',
    photo: [],
    video: [],
    hours: 0,
    minutes: 0,
    region: 'Київ',
    category: 'Перша страва',
    complexity: 'Легкий',
    ingredients: ['', ''],
    steps: ['', '']
  };

  const onSubmit = (values: FormikValues) => {
    const data = new FormData();
    const recipe: { [field: string]: any } = {};
    for (let key in values) {
      if (key === 'photo' || key === 'video') {
        data.append(key, values[key][0]);
      } else recipe[key] = values[key];
    }
    data.append(
      'recipe',
      new Blob([JSON.stringify(recipe)], {
        type: 'application/json'
      })
    );
    RecipeService.createRecipe(data).then(console.log).catch(console.log);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, setValues, setFieldValue }) => (
        <Form className={style.form}>
          <RecipeFormInput label="Введіть назву рецепту:" placeholder="Назва" name="name" />
          <RecipeFormInput label="Введіть опис рецепту:" placeholder="Опис" name="description" />
          <RecipeFormFileUpload
            label="Завантажте фото рецепту:"
            placeholder="Додати файл"
            name="photo"
            setFieldValue={setFieldValue}
            values={values}
          />
          <RecipeFormFileUpload
            label="Завантажте відео рецепту:"
            placeholder="Додати відео"
            name="video"
            setFieldValue={setFieldValue}
            values={values}
          />
          <RecipeFormTimeInput name1="hours" name2="minutes" />
          <RecipeFormSelect label="Вкажіть область походження рецепту:" name="region" />
          <RecipeFormSelect label="Вкажіть категорію:" name="category" />
          <RecipeFormRadioGroup />
          <RecipeFormDynamic
            label="Вкажіть інгредієнти страви за рецептом:"
            values={values}
            setValues={setValues}
            name={'ingredients'}
          />
          <RecipeFormDynamic
            label="Вкажіть кроки приготування страви за рецептом:"
            values={values}
            setValues={setValues}
            name={'steps'}
          />
          <Styled.FilledButton
            backgroundColor="green"
            width="250px"
            borderRadius="8px"
            type="submit">
            Submit
          </Styled.FilledButton>
        </Form>
      )}
    </Formik>
  );
};

export default BodyForm;
