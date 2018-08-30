import { toast } from 'react-toastify';
import Meals from '../services/api/meals.js';
import uploadImage from '../services/uploadImage';
import { REQUEST_MEALS, RECEIVE_MEALS } from './actionTypes.js';
import requestErrorHandler from '../utils/requestErrorHandler.js';

export const requestMeals = () => ({
  type: REQUEST_MEALS
});

export const receiveMeals = (meals, pagination) => ({
  type: RECEIVE_MEALS,
  meals,
  pagination
});

export const getMeals = () => (dispatch) => {
  dispatch(requestMeals());

  Meals.getMeals()
    .then((res) => {
      const { meals, pagination } = res.data;
      dispatch(receiveMeals(meals, pagination));
    })
    .catch(requestErrorHandler);
};

const getMealsFromStateAndAddNew = (meal, getState) => {
  const meals = getState().catererMeals.meals.slice();
  const updatedMeals = [meal, ...meals];

  return updatedMeals;
};

export const addMeal = mealDetails => (dispatch, getState) => {
  const addMealOperation = mealDetails.image
    ? uploadImage(mealDetails.image)
      .then((res) => {
        const mealDetailsWithImageLink = {
          ...mealDetails,
          img: res.data.url
        };

        return Meals.addMeal(mealDetailsWithImageLink);
      })
    : Meals.addMeal(mealDetails);

  return addMealOperation.then((res) => {
    const { meal } = res.data;
    const updatedMeals = getMealsFromStateAndAddNew(meal, getState);

    dispatch(receiveMeals(updatedMeals));

    toast.success('Meal added successfully!', { autoClose: 3000 });
  })
    .catch(requestErrorHandler);
};

export const removeMeal = (mealId, getState) => {
  const meals = getState().catererMeals.meals.slice();
  const updatedMeals = meals.filter(meal => meal.id !== mealId);

  return updatedMeals;
};

export const deleteMeal = mealId => (dispatch, getState) => Meals.deleteMeal(mealId)
  .then(() => {
    const updatedMeals = removeMeal(mealId, getState);
    dispatch(receiveMeals(updatedMeals));
    toast('Meal deleted', { autoClose: 3000 });
  })
  .catch(requestErrorHandler);

const updateMealInState = (updatedMeal, getState) => {
  const meals = getState().catererMeals.meals.slice();

  const updatedMeals = meals.map((meal) => {
    if (meal.id === updatedMeal.id) {
      return updatedMeal;
    }
    return meal;
  });

  return updatedMeals;
};

export const updateMeal = mealDetails => (dispatch, getState) => {
  const updateMealOperation = mealDetails.image
    ? uploadImage(mealDetails.image)
      .then((res) => {
        const mealDetailsWithImageLink = {
          ...mealDetails,
          img: res.data.url
        };

        return Meals.updateMeal(mealDetails.id, mealDetailsWithImageLink);
      })
    : Meals.updateMeal(mealDetails.id, mealDetails);

  return updateMealOperation.then((res) => {
    const { meal } = res.data;
    const updatedMeals = updateMealInState(meal, getState);

    dispatch(receiveMeals(updatedMeals));

    toast.success('Meal updated successfully!', { autoClose: 3000 });
  })
    .catch(requestErrorHandler);
};

