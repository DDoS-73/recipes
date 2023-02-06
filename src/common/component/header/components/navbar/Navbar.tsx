import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="d-flex justify-content-between w-25 align-items-center">
      <span className={styles.navItem}>Про нас</span>
      <span className={styles.navItem}>Блог</span>
      <Link to="/recipes">
        <span className={styles.navItem}>Рецепти</span>
      </Link>
    </div>
  );
};

export default Navbar;
