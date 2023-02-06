import React from 'react';
import styles from './Header.module.css';
import Logo from './components/logo/Logo';
import Navbar from './components/navbar/Navbar';
import * as Styled from '../component.styled';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { CgProfile } from 'react-icons/cg';
import { setIsAuth } from '../../../store/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state: RootState) => state.isAuth);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('token');
    navigate('/auth/login');
  };

  return (
    <div className="px-5 py-4 d-flex justify-content-between">
      <Logo />
      <Navbar />
      <div className="d-flex justify-content-between align-items-center">
        {isAuth ? (
          <CgProfile size={32} onClick={logout} />
        ) : (
          <>
            <Link to="/auth/login">
              <span className={styles.bold}>Вхід</span>
            </Link>
            <Link to="/auth/register">
              <Styled.FilledButton
                margin="0 0 0 2rem"
                padding="5px"
                backgroundColor="green"
                width="180px"
                borderRadius="8px">
                Реєстрація
              </Styled.FilledButton>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
