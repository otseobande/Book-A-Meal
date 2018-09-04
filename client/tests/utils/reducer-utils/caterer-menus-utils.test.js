import { addMenu, removeMenu, editMenu } from '../../../src/utils/reducer-utils/caterer-menus-utils.js';

const state = {
  pagination: {
    page: 1,
    limit: 10
  },
  menus: [
    {
      id: 'id-one',
      date: '2018-04-05',
      categories: []
    },
    {
      id: 'id-two',
      date: '2018-04-08',
      categories: []
    }
  ]
};

describe("Reducer caterer-menus-utils", () => {
  describe("addMenu function", () => {
    const menu = {
      id: 'test-id',
      date: '2018-10-03',
      categories: []
    }
    const newState = addMenu(state, { menu });

    it("should return new state with a new menu added", () => {
      expect(newState.menus).toContain(menu);
    });
    it("should return new state with other values unchanged", () => {
      expect(newState.pagination).toEqual(state.pagination);
    });
  });

  describe("removeMenu function", () => {
    const menu = {
      id: 'id-one',
      date: '2018-04-05',
      categories: []
    }
    const newState = removeMenu(state, { menu });

    it("should return new state without payload menu", () => {
      expect(newState.menus).not.toContain(menu);
    });
    it("should return new state with other values unchanged", () => {
      expect(newState.pagination).toEqual(state.pagination);
    });
  });

  describe("editMenu function", () => {
    const menu = {
      id: 'id-one',
      date: '2018-04-05',
      categories: [{
        title: 'appetizer',
        meals: ['meal-id']
      }]
    }
    const newState = editMenu(state, { menu });

    it('should return new state with menu modified', () => {
      expect(newState.menus[0]).toEqual(menu);
    });
    it("should return new state with other values unchanged", () => {
      expect(newState.pagination).toEqual(state.pagination);
    });
  });
});