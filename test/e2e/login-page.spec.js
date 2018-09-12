const loginBtnSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > button';

module.exports = {
  beforeEach(browser) {
    browser
      .windowMaximize()
      .url('http://localhost:8000/login');
  },
  'Home link should be visible and redirect to home page': (browser) => {
    const homeLinkSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__title--2AlBC > a';

    browser
      .assert.visible(
        homeLinkSel,
        'Home link should be visible'
      )
      .click(homeLinkSel)
      .assert.urlEquals('http://localhost:8000/');
  },
  'Forgot password link should be visible and redirect to reset password page': (browser) => {
    const forgotPasswordLinkSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > p > a';

    browser
      .assert.visible(
        forgotPasswordLinkSel,
        'Forgot password link should be visible'
      )
      .click(forgotPasswordLinkSel)
      .assert.urlEquals('http://localhost:8000/reset_password');
  },
  'Signup link should be visible and redirect to signup page': (browser) => {
    const signupLinkSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > p > span > a';

    browser
      .url('http://localhost:8000/login')
      .assert.visible(
        signupLinkSel,
        'Signup link should be visible'
      )
      .click(signupLinkSel)
      .assert.urlEquals('http://localhost:8000/signup')
      .end();
  },
  'Error messages should show if fields are empty on login button click': (browser) => {
    const usernameErrorMsgSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(1) > div';
    const passwordErrorMsgSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(2) > div';

    browser
      .click(loginBtnSel)
      .assert.visible(
        usernameErrorMsgSel,
        'username error message should be visible'
      )
      .assert.containsText(
        usernameErrorMsgSel,
        'Username is required!',
        'Username should show required error message if not given'
      )
      .assert.visible(
        passwordErrorMsgSel,
        'password error message should be visible'
      )
      .assert.containsText(
        passwordErrorMsgSel,
        'Password is required!',
        'Password should show required error message if not given'
      );
  },
  'Caterer should be able to login successfully': (browser) => {
    browser
      .refresh()
      .setValue(
        '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(1) > input',
        'otseobande'
      )
      .setValue(
        '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(2) > input',
        'bookameal'
      )
      .click(loginBtnSel)
      .pause(2000)
      .assert.urlEquals('http://localhost:8000/manage-orders')
      .end();
  },
  'Customer should be able to login successfully': (browser) => {
    browser
      .setValue(
        '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(1) > input',
        'john'
      )
      .setValue(
        '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(2) > input',
        'bookameal'
      )
      .click(loginBtnSel)
      .pause(2000)
      .assert.urlEquals('http://localhost:8000/menus');
  },
  after(browser) {
    browser.end();
  }
};

