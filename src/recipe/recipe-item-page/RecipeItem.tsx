import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeModel } from '../../common/models/Recipe.model';
import RecipeService from '../services/recipe.service';
import RecipeMainInfo from './components/RecipeMainInfo';
import RecipeIngredients from './components/RecipeIngredients';
import RecipeSteps from './components/RecipeSteps';
import RecipeVideo from './components/RecipeVideo';
import Footer from '../../common/component/footer/Footer';

const RecipeItem = () => {
  let { id } = useParams();
  const [recipe, setRecipe] = useState<RecipeModel>();

  useEffect(() => {
    RecipeService.getRecipeByID(id || '').then((res) => setRecipe(res));
  }, []);

  return (
    <>
      <RecipeMainInfo recipe={recipe} />
      <div className="p-5">
        <h2>Як приготувати страву?</h2>
        <RecipeIngredients ingredients={recipe?.recipe.ingredients || []} />
        <RecipeSteps steps={recipe?.recipe.steps || []} />
      </div>
      <RecipeVideo video={recipe?.video || ''} />
      <Footer />
    </>
  );
};

export default RecipeItem;
