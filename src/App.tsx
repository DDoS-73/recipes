import React, { useEffect } from 'react';
import './App.css';
import HomePage from './home/HomePage';
import { Route, Routes } from 'react-router-dom';
import AuthWrapper from './auth/AuthWrapper';
import Login from './auth/components/Login';
import PageContainer from './common/component/page-container/PageContainer';
import Registration from './auth/components/Registration';
import RecipeForm from './recipe/recipe-form/RecipeForm';
import RecipePage from './recipe/recipe-page/RecipePage';
import { useDispatch } from 'react-redux';
import RecipeService from './recipe/services/recipe.service';
import { setCategories, setRegions } from './store/filterSlice';
import RecipeItem from './recipe/recipe-item-page/RecipeItem';
import ModerationPage from './moderator/ModerationPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RecipeModeration from './moderator/RecipeModeration';
import ModeratorLogin from './moderator/ModeratorLogin';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    initData();
  }, []);

  const initData = () => {
    RecipeService.getRegions().then((res) => {
      dispatch(setRegions(res.regions));
    });
    RecipeService.getCategories().then((res) => {
      dispatch(setCategories(res.categories));
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<PageContainer />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe-form" element={<RecipeForm />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/recipes/:id" element={<RecipeItem />} />
          <Route path="/recipes/moderation" element={<ModerationPage />} />
          <Route path="/recipes/moderation/:id" element={<RecipeModeration />} />
        </Route>
        <Route path="/auth" element={<AuthWrapper />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="moderation" element={<ModeratorLogin />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
