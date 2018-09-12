
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
      .pause(1000)
      .url('http://localhost:8000/manage-orders');
  },

  'Caterer should be able to mark an order as delivered': (browser) => {
    browser
      .click('#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div > div.client-src-components-ResponsiveTable-responsive-table__table--zEvve > div:nth-child(5) > div:nth-child(7) > button')
      .pause(3000)
      .assert.visible(
        'body > div:nth-child(6) > div > div',
        'Deliver modal should be visible'
      )
      .click('body > div:nth-child(6) > div > div > div > button.client-src-components-Orders-order__successBtn--C_pQB')
      .assert.containsText(
        '#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div > div.client-src-components-ResponsiveTable-responsive-table__table--zEvve > div:nth-child(3) > div:nth-child(6) > span',
        'Delivered',
        'Order should be marked as delivered'
      );
  },
  after(browser) {
    browser.end();
  }
};
