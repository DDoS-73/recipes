import React, { FC } from 'react';
import { GrCart } from 'react-icons/gr';

const RecipeIngredients: FC<{ ingredients: string[] }> = ({ ingredients }) => {
  return (
    <div className="py-4 d-flex">
      <GrCart size={32} />
      <div className="ms-4">
        <p style={{ fontSize: '1.5rem' }}>Інгредієнти</p>
        <ul>
          {ingredients.map((item, i) => (
            <li style={{ fontSize: '1.25rem' }} key={i}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeIngredients;
