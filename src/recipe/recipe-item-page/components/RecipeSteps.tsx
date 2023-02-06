import React, { FC } from 'react';
import { CgBowl } from 'react-icons/cg';
import Step from './Step';

const RecipeSteps: FC<{ steps: string[] }> = ({ steps }) => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <CgBowl size={32} className="me-4" />
        <span style={{ fontSize: '1.5rem' }}>Покроковий рецепт</span>
      </div>
      {steps.map((step, i) => (
        <Step key={i} index={i + 1} step={step} />
      ))}
    </div>
  );
};

export default RecipeSteps;
