import React from 'react';
import backArrow from '../../../assets/images/backArrow.svg';

const HeaderForm = () => {
  return (
    <>
      <div className="mb-5">
        <img src={backArrow} alt="arrow" />
      </div>
      <h2>Форма додавання рецепту</h2>
      <p style={{ fontSize: '1.5rem' }}>
        Маєте бажання поділитись своїм рецептом зі спільнотою? Тоді мерщій заповнювати форму
        додавання рецепту!
      </p>
    </>
  );
};

export default HeaderForm;
