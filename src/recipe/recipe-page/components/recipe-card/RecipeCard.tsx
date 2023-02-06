import React, { FC } from 'react';
import { RecipeModel } from '../../../../common/models/Recipe.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Rate } from 'rsuite';
import styles from './RecipeCard.module.css';
import { GoLocation } from 'react-icons/go';
import 'rsuite/dist/rsuite.min.css';
import { showFormatTime } from '../../../../common/pipe/showFormatTime';
import { Link } from 'react-router-dom';

const RecipeCard: FC<{ recipe: RecipeModel }> = ({ recipe }) => {
  return (
    <Link to={'/recipes/' + recipe.recipe.id}>
      <div className={styles.card}>
        <div className="w-50">
          <img className={styles.img} src={recipe.photo} alt="photo" />
        </div>
        <div className="w-50 ps-3 pe-1 d-flex flex-column justify-content-end">
          <h6 className={styles.title}>{recipe.recipe.name}</h6>
          <p className={styles.description}>{recipe.recipe.description}</p>
          <p className={styles.time + ' mb-0'}>
            <FontAwesomeIcon icon={faClock} />
            {'  '}
            {showFormatTime(recipe.recipe.hours, recipe.recipe.minutes)}
          </p>
          <div>
            <Rate size="xs" value={recipe.recipe.rating.rating} color="green" readOnly allowHalf />
          </div>
          <p className={styles.region}>
            <GoLocation /> {recipe.recipe.region}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
