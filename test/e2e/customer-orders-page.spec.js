const login = require('./login-page.spec.js');

module.exports = {
  before(browser) {
    login.beforeEach(browser);
    login['Customer should be able to login successfully'](browser);
    browser
      .url('http://localhost:8000/orders')
      .pause(1000);
  },
  'Page header should be order history': (browser) => {
    browser
      .assert.containsText(
        '#root > div.client-src-components-Layout-layout__layout--L4G2t > div > h2',
        'Order History',
        'page header should be order history'
      );
  },
  'Customer should be able to update order': (browser) => {
    browser
      .click('#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(7) > button.client-src-components-Orders-order__updateBtn--3Jj-7')
      .assert.visible(
        'body > div:nth-child(4) > div > div',
        'Update modal should be visible'
      )
      .clearValue('body > div:nth-child(4) > div > div > div > div.client-src-components-Orders-OrderModal-order-modal__content--3gx6O > div.client-src-components-Orders-OrderModal-order-modal__detailArea--3XEIX > div:nth-child(5) > textarea')
      .setValue(
        'body > div:nth-child(4) > div > div > div > div.client-src-components-Orders-OrderModal-order-modal__content--3gx6O > div.client-src-components-Orders-OrderModal-order-modal__detailArea--3XEIX > div:nth-child(5) > textarea',
        '24 irepodun street, bodija, ibadan'
      )
      .click('#proceed')
      .pause(200)
      .click('body > div:nth-child(4) > div > div > div > div:nth-child(3) > div > button.client-src-components-Orders-OrderModal-order-modal__successBtn--2r1nC')
      .pause(1000)
      .assert.containsText(
        '#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(5) > p',
        '24 irepodun street, bodija, ibadan',
        'address should be updated'
      );
  },
  'Customer should be able to cancel order': (browser) => {
    browser
      .click('#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(7) > button.client-src-components-Orders-order__deleteBtn--1ntts')
      .assert.visible(
        '#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(7) > button.client-src-components-Orders-order__deleteBtn--1ntts',
        'Cancel order modal should be visible'
      )
      .click('body > div:nth-child(3) > div > div > div > button.client-src-components-Orders-confirm-cancel-modal__yesBtn--3Gavv')
      .pause(300)
      .assert.containsText(
        '#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(6) > span',
        'Cancelled',
        'order status should be changed to cancelled'
      );
  },
  after(browser) {
    browser.end();
  }
};

