import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RecipeModel } from '../common/models/Recipe.model';
import RecipeService from '../recipe/services/recipe.service';
import RecipeMainInfo from '../recipe/recipe-item-page/components/RecipeMainInfo';
import RecipeIngredients from '../recipe/recipe-item-page/components/RecipeIngredients';
import RecipeSteps from '../recipe/recipe-item-page/components/RecipeSteps';
import RecipeVideo from '../recipe/recipe-item-page/components/RecipeVideo';
import Footer from '../common/component/footer/Footer';
import * as Styled from '../common/component/component.styled';
import { ButtonContainer } from '../common/component/component.styled';

const RecipeModeration = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [recipe, setRecipe] = useState<RecipeModel>();

  useEffect(() => {
    RecipeService.getRecipeByID(id || '').then((res) => setRecipe(res));
  }, []);

  const submitHandler = () => {
    RecipeService.confirmRecipe(id || '').then(() => {
      navigate('/recipes/moderation');
    });
  };

  const rejectHandler = () => {
    RecipeService.rejectRecipe(id || '').then(() => {
      navigate('/recipes/moderation');
    });
  };

  return (
    <>
      <RecipeMainInfo recipe={recipe} />
      <div className="p-5">
        <h2>Як приготувати страву?</h2>
        <RecipeIngredients ingredients={recipe?.recipe.ingredients || []} />
        <RecipeSteps steps={recipe?.recipe.steps || []} />
      </div>
      <RecipeVideo video={recipe?.video || ''} />
      <ButtonContainer>
        <Styled.OutlineButton
          width={'265px'}
          borderRadius={'8px'}
          color={'green'}
          className="me-3"
          onClick={rejectHandler}>
          Відхилити
        </Styled.OutlineButton>
        <Styled.FilledButton
          backgroundColor="green"
          width="265px"
          borderRadius="8px"
          onClick={submitHandler}>
          Підтвердити
        </Styled.FilledButton>
      </ButtonContainer>
      <Footer />
    </>
  );
};

export default RecipeModeration;
