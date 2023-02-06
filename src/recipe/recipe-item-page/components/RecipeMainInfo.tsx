import React, { FC } from 'react';
import styles from '../RecipeItem.module.css';
import BackArrow from '../../../common/component/back-arrow/BackArrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar } from '@fortawesome/free-regular-svg-icons';
import { showFormatTime } from '../../../common/pipe/showFormatTime';
import { GoLocation } from 'react-icons/go';
import { RecipeModel } from '../../../common/models/Recipe.model';
import { Rate } from 'rsuite';

const RecipeMainInfo: FC<{ recipe: RecipeModel | undefined }> = ({ recipe }) => {
  return (
    <div className={'p-5 pb-3 ' + styles.bg}>
      <BackArrow />
      <div className="d-flex mt-5">
        <div className="w-50">
          <img className={styles.img} src={recipe?.photo} alt="photo" />
        </div>
        <div className="w-50 px-5 d-flex flex-column justify-content-between">
          <h2 className="text-uppercase">{recipe?.recipe.name}</h2>
          <p className={styles.description}>{recipe?.recipe.description}</p>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column align-items-center">
              <FontAwesomeIcon icon={faClock} size="2xl" />
              <p className="mt-3 mb-0">ПРИГОТУВАННЯ</p>
              <p className={styles.info}>
                {showFormatTime(recipe?.recipe.hours || 0, recipe?.recipe.minutes || 0)}
              </p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <GoLocation size={32} />
              <p className="mt-3 mb-0">ОБЛАСТЬ</p>
              <p className={styles.info}>{recipe?.recipe.region}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <FontAwesomeIcon icon={faStar} size="2xl" />
              <p className="mt-3 mb-0">СКЛАДНІСТЬ</p>
              <p className={styles.info}>{recipe?.recipe.complexity}</p>
            </div>
          </div>
          <div className="d-flex align-items-bottom">
            <Rate size="sm" value={recipe?.recipe.rating.rating} color="green" readOnly allowHalf />
            <span className={styles.rate}>
              Поточний рейтинг {recipe?.recipe.rating.rating} з 5 (Кількість голосів:{' '}
              {recipe?.recipe.rating.votesNumber})
            </span>
          </div>
          <div>
            <span style={{ color: 'var(--grey-border)' }}>
              Автор:{' '}
              <span style={{ color: 'var(--main-green-color)' }}>
                {recipe?.recipe.user.name} {recipe?.recipe.user.surname}
              </span>{' '}
              ({recipe?.recipe.user.username})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeMainInfo;
