import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from '../recipe/recipe-page/components/recipe-card/RecipeCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { showFormatTime } from '../common/pipe/showFormatTime';
import { GoLocation } from 'react-icons/go';
import { RecipeModel } from '../common/models/Recipe.model';

const RecipeCardModeration: FC<{ recipe: RecipeModel }> = ({ recipe }) => {
  return (
    <Link to={'/recipes/moderation/' + recipe.recipe.id}>
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
            <span>@{recipe.recipe.user.username}</span>
          </div>
          <p className={styles.region}>
            <GoLocation /> {recipe.recipe.region}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCardModeration;
