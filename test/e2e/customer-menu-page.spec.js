const login = require('./login-page.spec.js');

module.exports = {
  before(browser) {
    login.beforeEach(browser);
    login['Customer should be able to login successfully'](browser);
    browser
      .url('http://localhost:8000/menus')
      .pause(1000);
  },
  'Menus for the day should be visible': (browser) => {
    browser
      .assert.visible(
        '#root > div.client-src-components-Layout-layout__layout--L4G2t > div > h2',
        'Menus for the day text should be visible'
      );
  },
  'Meal card should be visible once meal tile is clicked': (browser) => {
    browser
      .click('#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div > div.client-src-components-Menus-menus__menuBody--C4W_V > div:nth-child(2) > ul > li:nth-child(1) > div')
      .pause(2000)
      .assert.visible(
        '#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div > div.client-src-components-Menus-menus__menuBody--C4W_V > div:nth-child(2) > ul > li:nth-child(1) > div > div.client-src-components-MealCard-meal-card__card--2as7C.client-src-components-Menus-menus__mealCard--1Kosi',
        'meal card should be visible'
      );
  },
  'Order modal should open when order button is clicked': (browser) => {
    browser
      .click('#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div > div.client-src-components-Menus-menus__menuBody--C4W_V > div:nth-child(2) > ul > li:nth-child(1) > div > div > div > button')
      .pause(2000)
      .assert.visible(
        'body > div:nth-child(3) > div > div',
        'order modal should be visible'
      );
  },
  'Meal order form should show errors if fields are empty': (browser) => {
    const phoneNumberErrorMsgSel = 'body > div:nth-child(3) > div > div > div > div.client-src-components-Orders-OrderModal-order-modal__content--3gx6O > div.client-src-components-Orders-OrderModal-order-modal__detailArea--3XEIX > div:nth-child(4) > span';
    const deliveryAddressErrorMsgSel = 'body > div:nth-child(3) > div > div > div > div.client-src-components-Orders-OrderModal-order-modal__content--3gx6O > div.client-src-components-Orders-OrderModal-order-modal__detailArea--3XEIX > div:nth-child(5) > span';

    browser
      .click('#proceed')
      .pause(2000)
      .assert.visible(
        phoneNumberErrorMsgSel,
        'Phone number field error message should be visible'
      )
      .assert.containsText(
        phoneNumberErrorMsgSel,
        'Phone number is required',
        'phone number should show error message if empty on proceed button click'
      )
      .assert.visible(
        deliveryAddressErrorMsgSel,
        'Delivery address error message should be visible'
      )
      .assert.containsText(
        deliveryAddressErrorMsgSel,
        'Delivery address is required',
        'delivery address should show error message if empty on proceed button click'
      );
  },
  'Meal order should be confirmed successfully if fields are filled properly': (browser) => {
    const phoneNumberInputSel = 'body > div:nth-child(3) > div > div > div > div.client-src-components-Orders-OrderModal-order-modal__content--3gx6O > div.client-src-components-Orders-OrderModal-order-modal__detailArea--3XEIX > div:nth-child(4) > input';
    const deliveryAddressInputSel = 'body > div:nth-child(3) > div > div > div > div.client-src-components-Orders-OrderModal-order-modal__content--3gx6O > div.client-src-components-Orders-OrderModal-order-modal__detailArea--3XEIX > div:nth-child(5) > textarea';

    browser
      .setValue(
        phoneNumberInputSel,
        '08131928452'
      )
      .setValue(
        deliveryAddressInputSel,
        '24, asdfadfa3 adsfs eefasfsadfasf.'
      )
      .click('#proceed')
      .pause(1500)
      .click('body > div:nth-child(3) > div > div > div > div:nth-child(3) > div > button.client-src-components-Orders-OrderModal-order-modal__successBtn--2r1nC')
      .pause(3000)
      .assert.visible(
        'body > div:nth-child(3) > div > div > div > p:nth-child(4)',
        'order modification message should be visible'
      )
      .assert.containsText(
        'body > div:nth-child(3) > div > div > div > p:nth-child(4)',
        'Please note that order update and cancellation can only be done 15 minutes after the order is placed.'
      );
  },
  after(browser) {
    browser.end();
  }
};
