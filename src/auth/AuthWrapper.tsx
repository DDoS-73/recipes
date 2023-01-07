import React from 'react';
import style from './Auth.module.css';
import Registration from './components/Registration';

const AuthWrapper = () => {
  return (
    <div className="h-100">
      <div className="d-flex justify-content-between h-100">
        <div className={style.image}></div>
        <div className="flex-grow-1" style={{ padding: '80px' }}>
          <Registration />
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
