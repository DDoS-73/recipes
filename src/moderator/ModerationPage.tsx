import React, { useEffect, useState } from 'react';
import { RecipeModel } from '../common/models/Recipe.model';
import RecipeService from '../recipe/services/recipe.service';
import RecipeCardModeration from './RecipeCardModeration';
import { TailSpin } from 'react-loader-spinner';

const ModerationPage = () => {
  const [recipes, setRecipes] = useState<RecipeModel[]>([]);
  const [loader, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    RecipeService.getModerationRecipes().then((res) => {
      setRecipes(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-5 pt-2">
      <h1 style={{ fontSize: '2rem' }}>Модерація</h1>
      <div className="d-flex justify-content-center">
        <TailSpin
          height="80"
          width="80"
          color="#088149"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loader}
        />
      </div>
      <div className="d-flex justify-content-between flex-wrap py-5">
        {recipes.map((recipe) => (
          <RecipeCardModeration key={recipe.recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default ModerationPage;
