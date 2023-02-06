import React, { FC } from 'react';
import styles from '../RecipeItem.module.css';

const Step: FC<{ index: number; step: string }> = ({ index, step }) => {
  return (
    <div className="d-flex my-3">
      <div style={{ minWidth: '130px' }} className="me-4">
        <span className={styles.step}>Крок {index}</span>
      </div>
      <div>
        <p style={{ fontSize: '1.25rem' }}>{step}</p>
      </div>
    </div>
  );
};

export default Step;
