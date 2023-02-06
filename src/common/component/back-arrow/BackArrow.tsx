import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from '../../../assets/images/backArrow.svg';

const BackArrow = () => {
  const navigate = useNavigate();

  return (
    <div role="button" onClick={() => navigate(-1)}>
      <img src={arrow} alt="arrow" />
    </div>
  );
};

export default BackArrow;
