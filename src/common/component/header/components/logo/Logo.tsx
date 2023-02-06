import React from 'react';
import * as Styled from '../../../component.styled';
import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <p className={styles.logoText}>
        <Link to="/">
          <Styled.OrangeText>Куховар</Styled.OrangeText>ник
        </Link>
      </p>
    </div>
  );
};

export default Logo;
