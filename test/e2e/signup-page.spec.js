const signupBtnSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > button';
const fullnameErrorMsgSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(1) > div';
const usernameErrorMsgSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(2) > div';
const emailErrorMsgSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(3) > div';
const roleErrorMsgSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > div > div.client-src-components-Auth-auth__errorMessage--2rQbr';
const passwordErrorMsgSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(5) > div';

const fullnameInputSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(1) > input';
const usernameInputSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(2) > input';
const emailInputSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(3) > input';
const customerCheckboxSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > div > div > label:nth-child(1) > input';
const catererCheckboxSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > div > div > label:nth-child(2) > input';
const passwordInputSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(5) > input';
const confirmPasswordInputSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > form > label:nth-child(6) > input';

module.exports = {
  beforeEach(browser) {
    browser
      .windowMaximize()
      .url('http://localhost:8000/signup');
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
  'Login link should be visible and redirect to the login page': (browser) => {
    const loginLinkSel = '#root > div.client-src-components-Auth-auth__background--soniN > div > div.client-src-components-Auth-auth__authCard--1xqVS > p > a';

    browser
      .assert.visible(
        loginLinkSel,
        'Login link should be visible'
      )
      .click(loginLinkSel)
      .assert.urlEquals('http://localhost:8000/login');
  },
  'Error messages should show if fields are empty on signup button click': (browser) => {
    browser
      .click(signupBtnSel)
      .assert.visible(
        fullnameErrorMsgSel,
        'fullname error message should be visible'
      )
      .assert.containsText(
        fullnameErrorMsgSel,
        'Fullname is required!',
        'fullname should show required error message if field is empty'
      )
      .assert.visible(
        usernameErrorMsgSel,
        'username error message should be visible'
      )
      .assert.containsText(
        usernameErrorMsgSel,
        'Username is required!',
        'username should show required error message if field is empty'
      )
      .assert.visible(
        emailErrorMsgSel,
        'Email error message should be visible'
      )
      .assert.containsText(
        emailErrorMsgSel,
        'Email is required!',
        'email should show required error message if field is empty'
      )
      .assert.visible(
        roleErrorMsgSel,
        'role error message should be visible'
      )
      .assert.containsText(
        roleErrorMsgSel,
        'Role is required!',
        'role should show required error message if field is empty'
      )
      .assert.visible(
        passwordErrorMsgSel,
        'password error message should be visible'
      )
      .assert.containsText(
        passwordErrorMsgSel,
        'Password is required!',
        'password should show required error message if field is empty'
      );
  },
  'Email should show error if email is invalid': (browser) => {
    browser
      .setValue(
        emailInputSel,
        'asdfasdf@dad'
      )
      .click(signupBtnSel)
      .assert.visible(
        emailErrorMsgSel,
        'Email error message should be visible'
      )
      .assert.containsText(
        emailErrorMsgSel,
        'Invalid email address',
        'Error message should show invalid email address'
      );
  },
  'Customer should be able to signup successfully': (browser) => {
    browser
      .setValue(
        fullnameInputSel,
        'Babajide Oni'
      )
      .setValue(
        usernameInputSel,
        'babajide'
      )
      .setValue(
        emailInputSel,
        'babajide@gmail.com'
      )
      .click(customerCheckboxSel)
      .setValue(
        passwordInputSel,
        'bookameal'
      )
      .setValue(
        confirmPasswordInputSel,
        'bookameal'
      )
      .click(signupBtnSel)
      .pause(3000)
      .assert.urlEquals('http://localhost:8000/', 'it should redirect to homepage on success')
      .end();
  },
  'Caterer should be able to signup successfully': (browser) => {
    browser
      .setValue(
        fullnameInputSel,
        'obande agbenu'
      )
      .setValue(
        usernameInputSel,
        'agbenu'
      )
      .setValue(
        emailInputSel,
        'agbenu@gmail.com'
      )
      .click(catererCheckboxSel)
      .setValue(
        passwordInputSel,
        'bookameal'
      )
      .setValue(
        confirmPasswordInputSel,
        'bookameal'
      )
      .click(signupBtnSel)
      .pause(3000)
      .assert.urlEquals('http://localhost:8000/', 'it should redirect to homepage on success')
      .end();
  }
};

