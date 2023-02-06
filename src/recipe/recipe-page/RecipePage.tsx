import React, { ChangeEvent, useEffect, useState } from 'react';
import * as Styled from '../../common/component/component.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import RecipeCard from './components/recipe-card/RecipeCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import RecipeService from '../services/recipe.service';
import { RecipeModel } from '../../common/models/Recipe.model';
import { TailSpin } from 'react-loader-spinner';
import { setRecipes } from '../../store/recipeSlice';

const RecipePage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const categories = useSelector((state: RootState) => state.filters.categories);
  const regions = useSelector((state: RootState) => state.filters.regions);
  const [filteredRecipes, setFiltered] = useState<RecipeModel[]>();
  const [loader, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filters = {
    category: '',
    region: '',
    name: ''
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    filters[e.target.name as 'category' | 'region'] = e.target.value;
    RecipeService.filterRecipes(filters).then((res) => setFiltered(res));
  };

  const handleClick = () => {
    filters['name'] = searchTerm;
    RecipeService.filterRecipes(filters).then((res) => setFiltered(res));
  };

  useEffect(() => {
    setLoading(true);
    RecipeService.getRecipes().then((res) => {
      dispatch(setRecipes(res));
      setFiltered(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-5 pt-2">
      <h1 style={{ fontSize: '2rem' }}>Рецепти</h1>
      <div className="d-flex justify-content-between">
        <Styled.OutlineSelect color="#FF612F" defaultValue="" onChange={handleSelect} name="region">
          <option value="">Обрати регіон</option>
          {regions.map((region, i) => (
            <option key={i} value={region}>
              {region}
            </option>
          ))}
        </Styled.OutlineSelect>
        <Styled.OutlineSelect
          color="#FF612F"
          defaultValue=""
          name="category"
          onChange={handleSelect}>
          <option value="">Обрати категорію</option>
          {categories.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </Styled.OutlineSelect>
        <div className="w-25 position-relative">
          <Styled.Input
            placeholder="Пошук"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faSearch}
            style={{ position: 'absolute', bottom: '17px', right: '10px' }}
          />
        </div>
        <Styled.FilledButton
          onClick={handleClick}
          margin="2rem 0 0 0"
          backgroundColor="orange"
          width="180px"
          borderRadius="8px">
          Знайти
        </Styled.FilledButton>
      </div>
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
      <div className="d-flex justify-content-center flex-wrap py-5">
        {filteredRecipes?.length ? (
          filteredRecipes?.map((recipe) => <RecipeCard key={recipe.recipe.id} recipe={recipe} />)
        ) : loader ? (
          ''
        ) : (
          <h2>Схоже ще ніхто не додав рецепти. Будьте першими!</h2>
        )}
      </div>
    </div>
  );
};

export default RecipePage;
