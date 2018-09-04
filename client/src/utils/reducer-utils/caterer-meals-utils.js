export const addMeal = (state, payload) => {
  const { meal } = payload;

  return {
    ...state,
    meals: [meal, ...state.meals]
  };
};

export const removeMeal = (state, payload) => {
  const { meal } = payload;

  return {
    ...state,
    meals: state.meals.filter(stateMeal => stateMeal.id !== meal.id)
  };
};

export const updateMeal = (state, payload) => {
  const { meal: updatedMeal } = payload;

  const updatedMeals = state.meals.map((meal) => {
    if (meal.id === updatedMeal.id) {
      return updatedMeal;
    }
    return meal;
  });

  return {
    ...state,
    meals: updatedMeals
  };
};
