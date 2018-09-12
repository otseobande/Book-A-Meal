module.exports = {
  before(browser) {
    browser
      .url('http://localhost:8000/login')
      .windowMaximize()
      .setValue(
        '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(1) > input',
        'otseobande'
      )
      .setValue(
        '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(2) > input',
        'bookameal'
      )
      .click('#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > button')
      .pause(2000)
      .url('http://localhost:8000/manage-meals');
  },

  'Caterer should be able to add a meal successfully': (browser) => {
    browser
      .pause(1000)
      .click('#root > div.client-src-components-Layout-layout__layout--L4G2t > div > button')
      .pause(2000)
      .assert.visible(
        'body > div:nth-child(3) > div > div',
        'Add meal modal should be visible'
      )
      .setValue(
        'body > div:nth-child(3) > div > div > form > label:nth-child(2) > input',
        'Fufu and egusi'
      )
      .setValue(
        'body > div:nth-child(3) > div > div > form > label:nth-child(3) > input',
        'Native meal'
      )
      .setValue(
        'body > div:nth-child(3) > div > div > form > label:nth-child(4) > input',
        '3000'
      )
      .click('body > div:nth-child(3) > div > div > form > div > button.client-src-components-Meals-MealForm-meal-form__successBtn--1THXn')
      .pause(2000)
      .assert.elementNotPresent(
        'body > div:nth-child(3) > div > div',
        'Add meal modal should close on save'
      );
  },
  'Add meal form should show validation errors if fields are empty on save': (browser) => {
    browser
      .click('#root > div.client-src-components-Layout-layout__layout--L4G2t > div > button')
      .pause(2000)
      .click('body > div:nth-child(3) > div > div > form > div > button.client-src-components-Meals-MealForm-meal-form__successBtn--1THXn')
      .assert.visible(
        'body > div:nth-child(3) > div > div > form > label:nth-child(2) > div',
        'Title error message should be visible'
      )
      .assert.containsText(
        'body > div:nth-child(3) > div > div > form > label:nth-child(2) > div',
        'Title is required',
        'Title should show a required error message if empty'
      )
      .assert.visible(
        'body > div:nth-child(3) > div > div > form > label:nth-child(3) > div',
        'Description error message should be visible'
      )
      .assert.containsText(
        'body > div:nth-child(3) > div > div > form > label:nth-child(3) > div',
        'Description is required',
        'Title should show a required error message if empty'
      )
      .assert.visible(
        'body > div:nth-child(3) > div > div > form > label:nth-child(4) > div',
        'Price error message should be visible'
      )
      .assert.containsText(
        'body > div:nth-child(3) > div > div > form > label:nth-child(4) > div',
        'Price is required',
        'Price should show a required error message if empty'
      )
      .click('body > div:nth-child(3) > div > div > form > div > button.client-src-components-Meals-MealForm-meal-form__closeModalBtn--1D-Ly');
  },
  'Caterer should be able to delete meal': (browser) => {
    browser
      .pause(2000)
      .click('#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div > div > div > div:nth-child(1) > div.client-src-components-MealCard-meal-card__footer--3FJAB > div > button:nth-child(2)')
      .pause(3000)
      .assert.visible(
        'body > div:nth-child(24) > div > div',
        'Delete meal modal should be visible'
      )
      .click('body > div:nth-child(24) > div > div > div > button.client-src-components-ConfirmDeleteModal-confirm-delete-modal__yesBtn--w3sQj')
      .pause(2000);

    browser
      .expect
      .element('#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div > div > div > div:nth-child(1) > div.client-src-components-MealCard-meal-card__body--2JLVV > div.client-src-components-MealCard-meal-card__title--3ancu')
      .text.to.not.contain('Fufu and egusi');
  },
  'Caterer should be able to edit meal': (browser) => {
    browser
      .click('#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div > div > div > div:nth-child(1) > div.client-src-components-MealCard-meal-card__footer--3FJAB > div > button:nth-child(1)')
      .pause(3000)
      .assert.visible(
        'body > div:nth-child(5) > div > div',
        'Edit meal modal should be visible'
      )
      .clearValue('body > div:nth-child(5) > div > div > form > label:nth-child(2) > input')
      .setValue(
        'body > div:nth-child(5) > div > div > form > label:nth-child(2) > input',
        'Eba and stew'
      )
      .click('body > div:nth-child(5) > div > div > form > div > button.client-src-components-Meals-MealForm-meal-form__successBtn--1THXn')
      .pause(3000)
      .assert.containsText(
        '#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div > div > div > div:nth-child(1) > div.client-src-components-MealCard-meal-card__body--2JLVV > div.client-src-components-MealCard-meal-card__title--3ancu',
        'Eba and stew',
        'Meal should be updated successfully'
      );
  },
  after(browser) {
    browser.end();
  }
};

