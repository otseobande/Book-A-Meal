import { toast } from 'react-toastify';
import Meals from '../services/api/meals.js';
import uploadImage from '../services/uploadImage';
import {
  REQUEST_MEALS,
  RECEIVE_MEALS,
  ADD_MEAL,
  REMOVE_MEAL,
  EDIT_MEAL
} from './actionTypes.js';
import requestErrorHandler from '../utils/requestErrorHandler.js';

export const requestMeals = () => ({
  type: REQUEST_MEALS
});

export const receiveMeals = (meals, pagination) => ({
  type: RECEIVE_MEALS,
  payload: {
    meals,
    pagination
  }
});

export const addMeal = meal => ({
  type: ADD_MEAL,
  payload: { meal }
});

export const editMeal = meal => ({
  type: EDIT_MEAL,
  payload: { meal }
});

export const removeMeal = meal => ({
  type: REMOVE_MEAL,
  payload: { meal }
});


export const getMeals = paginationInfo => (dispatch) => {
  dispatch(requestMeals());

  return Meals.getMeals(paginationInfo)
    .then((res) => {
      const { meals, pagination } = res.data;
      dispatch(receiveMeals(meals, pagination));
    })
    .catch(requestErrorHandler);
};

export const saveMeal = mealDetails => (dispatch) => {
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

  return addMealOperation
    .then((res) => {
      const { meal } = res.data;

      dispatch(addMeal(meal));

      toast.success('Meal added successfully!', { autoClose: 3000 });
    })
    .catch(requestErrorHandler);
};

export const deleteMeal = meal => dispatch => Meals.deleteMeal(meal.id)
  .then(() => {
    dispatch(removeMeal(meal));

    toast('Meal deleted', { autoClose: 3000 });
  })
  .catch(requestErrorHandler);

export const updateMeal = mealDetails => (dispatch) => {
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

  return updateMealOperation
    .then((res) => {
      const { meal } = res.data;

      dispatch(editMeal(meal));

      toast.success('Meal updated successfully!', { autoClose: 3000 });
    })
    .catch(requestErrorHandler);
};

