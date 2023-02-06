import React from 'react';
import style from './Auth.module.css';
import { Outlet } from 'react-router-dom';
import BackArrow from '../common/component/back-arrow/BackArrow';

const AuthWrapper = () => {
  return (
    <div className="h-100">
      <div className="d-flex justify-content-between h-100">
        <div className={style.image}></div>
        <div className="flex-grow-1" style={{ padding: '30px 50px' }}>
          <BackArrow />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
