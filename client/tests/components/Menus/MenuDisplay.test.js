import React from 'react';
import MenuDisplay from '../../../src/components/Menus/MenuDisplay';

const menus = [{
  "id": "d48a03fa-ca24-4f5c-9ff2-61c6f5b7b633",
  "date": "2018-06-24",
  "categories": [{
    "id": "a7166d2c-3af2-438e-ba70-aa02d1a72fb5",
    "title": "Appetizer",
    "meals": [{
      "id": "e0a8e7f2-c27b-484e-9cd7-c4720e14b004",
      "title": "Rice and stew",
      "description": "Delicious Nigerian rice and Chicken Stew with Onions, Tomatoes, and Dijon Recipe",
      "price": 1200,
      "img": "https://www.simplyrecipes.com/wp-content/uploads/2009/04/chicken-stew-onions-tomatoes-dijon-horiz-a-1600.jpg"
    }]
  }],
  "caterer": {
    "id": "e20ac257-86cc-4a6f-a619-0249a201c475",
    "fullName": "Otse Obande",
    "username": "otseobande",
    "email": "mealbooker@gmail.com",
    "role": "caterer"
  }
}];


describe('MenuDisplay component', () => {
  it('should match snapshot if menus array is empty', () => {
    const wrapper = shallow(
      <MenuDisplay
        menus={[]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if menus array is not empty', () => {
    const wrapper = shallow(
      <MenuDisplay
        menus={menus}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })
});