import * as mealActions from '../../src/actions/meals.js';
import * as types from '../../src/actions/actionTypes.js';

const meal = {
  id: '4293',
  title: 'beans',
  price: 1289,
  img: 'test.png'
};

describe('Meal actions', () => {
  describe('requestMeal action creator', () => {
    it('should return REQUEST_MEALS action', () => {
      const requestMealsAction = mealActions.requestMeals();

      expect(requestMealsAction).toEqual({
        type: types.REQUEST_MEALS
      });
    });
  });

  describe('receiveMeals action creator', () => {
    it('should return RECEIVE_MEALS action', () => {
      const receiveMealsAction = mealActions.receiveMeals([], {});

      expect(receiveMealsAction).toEqual({
        type: types.RECEIVE_MEALS,
        payload: {
          meals: [],
          pagination: {}
        }
      });
    });
  });

  describe('addMeal action creator', () => {
    it('should return ADD_MEAL action', () => {
      const addMealAction = mealActions.addMeal(meal);

      expect(addMealAction).toEqual({
        type: types.ADD_MEAL,
        payload: {
          meal
        }
      });
    });
  });

  describe('editMeal action creator', () => {
    it('should return EDIT_MEAL action', () => {
      const editMealAction = mealActions.editMeal(meal);

      expect(editMealAction).toEqual({
        type: types.EDIT_MEAL,
        payload: {
          meal
        }
      });
    });
  });

  describe('removeMeal action creator', () => {
    it('should return REMOVE_MEAL action', () => {
      const removeMealAction = mealActions.removeMeal(meal);

      expect(removeMealAction).toEqual({
        type: types.REMOVE_MEAL,
        payload: {
          meal
        }
      });
    });
  });

  describe('getMeals action creator', () => {
    let dispatchedActions;
    beforeAll(async () => {
      await store.dispatch(mealActions.getMeals(meal));
      dispatchedActions = store.getActions();
    });
    it('should dispatch REQUEST_MEALS action', () => {
      const requestMealsDispatched = dispatchedActions
        .find(action => action.type === types.REQUEST_MEALS);

      expect(requestMealsDispatched).toBeTruthy();
    });
    it('should dispatch RECEIVE_MEALS action', () => {
      const receiveMealsDispatched = dispatchedActions
        .find(action => action.type === types.RECEIVE_MEALS);

      expect(receiveMealsDispatched).toBeTruthy();
    });
  });

  describe('saveMeal action creator', () => {
    const mealDetailsWithImage = {
      image: 'pic.jpg'
    };
    beforeEach(() => {
      store.clearActions();
    });
    it('should dispatch ADD_MEAL action if meal details contain image', async () => {
      await store.dispatch(mealActions.saveMeal(mealDetailsWithImage));
      const dispatchedActions = store.getActions();

      const addMealDispatched = dispatchedActions
        .find(action => action.type === types.ADD_MEAL);

      expect(addMealDispatched).toBeTruthy();
    });
    it('should dispatch ADD_MEAL action without image', async () => {
      await store.dispatch(mealActions.saveMeal({}));
      const dispatchedActions = store.getActions();

      const addMealDispatched = dispatchedActions
        .find(action => action.type === types.ADD_MEAL);

      expect(addMealDispatched).toBeTruthy();
    });
  });

  describe('deleteMeal action creator', () => {
    it('should dispatch REMOVE_MEAL action', async () => {
      await store.dispatch(mealActions.deleteMeal({}));
      const dispatchedActions = store.getActions();

      const removeMealDispatched = dispatchedActions
        .find(action => action.type === types.REMOVE_MEAL);

      expect(removeMealDispatched).toBeTruthy();
    });
  });

  describe('updateMeal action creator', () => {
    const mealDetailsWithImage = {
      image: 'pic.jpg'
    };
    beforeEach(() => {
      store.clearActions();
    });
    it('should dispatch EDIT_MEAL action if meal details contain image', async () => {
      await store.dispatch(mealActions.updateMeal(mealDetailsWithImage));
      const dispatchedActions = store.getActions();

      const updateMealDispatched = dispatchedActions
        .find(action => action.type === types.EDIT_MEAL);

      expect(updateMealDispatched).toBeTruthy();
    });
    it('should dispatch EDIT_MEAL action without image', async () => {
      await store.dispatch(mealActions.updateMeal({}));
      const dispatchedActions = store.getActions();

      const updateMealDispatched = dispatchedActions
        .find(action => action.type === types.EDIT_MEAL);

      expect(updateMealDispatched).toBeTruthy();
    });
  })

  afterAll(() => {
    store.clearActions()
  });
});