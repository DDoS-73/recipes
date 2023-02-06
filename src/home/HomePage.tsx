import React from 'react';
import styles from './HomePage.module.css';
import * as Styled from '../common/component/component.styled';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="d-flex justify-content-between align-items-stretch h-100">
      <div className="px-5 d-flex flex-column justify-content-center h-100">
        <h1 className={styles.title}>
          <Styled.OrangeText>Читай та додавай</Styled.OrangeText> чудові українські рецепти з{' '}
          <Styled.OrangeText>Куховар</Styled.OrangeText>ником
        </h1>
        <p className={styles.subtitle}>
          Зроби приємно собі та своїм рідним, приготувавши українські смаколики за простими
          рецептами.
        </p>
        <div className="d-flex justify-content-between">
          <Link to="/recipe-form">
            <Styled.FilledButton
              padding="13px 30px"
              backgroundColor="green"
              width="230px"
              borderRadius="8px">
              Додати рецепт
            </Styled.FilledButton>
          </Link>
          <Link to="/recipes">
            <Styled.OutlineButton
              padding="13px 30px"
              color="green"
              width="230px"
              borderRadius="8px">
              Читати рецепти
            </Styled.OutlineButton>
          </Link>
        </div>
      </div>
      <div className={'w-50 ' + styles.background}></div>
    </div>
  );
};

export default HomePage;
