import React from 'react';
import BackArrow from '../../../common/component/back-arrow/BackArrow';

const HeaderForm = () => {
  return (
    <div className="px-5 pt-5">
      <BackArrow />
      <h2 className="mt-5">Форма додавання рецепту</h2>
      <p style={{ fontSize: '1.5rem' }} className="my-4">
        Маєте бажання поділитись своїм рецептом зі спільнотою? Тоді мерщій заповнювати форму
        додавання рецепту!
      </p>
    </div>
  );
};

export default HeaderForm;
