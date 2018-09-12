module.exports = {
  before(browser) {
    browser
      .maximizeWindow()
      .url('http://localhost:8000/login')
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
      .url('http://localhost:8000/manage-menus');
  },
  'Page header should be manage menus': (browser) => {
    browser
      .assert.containsText(
        '#root > div.client-src-components-Layout-layout__layout--L4G2t > div > h2',
        'Manage Menus',
        'Page title should be Manage Menus'
      );
  },
  'Caterer should be able to set menu for a specific date': (browser) => {
    browser
      .click('#root > div.client-src-components-Layout-layout__layout--L4G2t > div > button')
      .pause(2000)
      .assert.visible(
        'body > div:nth-child(3) > div > div',
        'Set menu modal is visible'
      )
      .click('body > div:nth-child(3) > div > div > div > div.client-src-components-Menus-ManageMenus-set-menu__btns--1knGO > div > button.client-src-components-Menus-ManageMenus-set-menu__closeModalBtn--2JHUL')
      .pause(1500)
      .assert.visible(
        'body > div:nth-child(3) > div > div > div > div:nth-child(4)',
        'caterer can add a category successfully'
      )
      .setValue(
        'body > div:nth-child(3) > div > div > div > label > input',
        '09-08-2019'
      )
      .click('body > div:nth-child(3) > div > div > div > div:nth-child(3) > label > select > option:nth-child(3)')
      .click('body > div:nth-child(3) > div > div > div > div:nth-child(3) > div > div > div:nth-child(4) > label')
      .click('body > div:nth-child(3) > div > div > div > div:nth-child(4) > label > select > option:nth-child(4)')
      .click('body > div:nth-child(3) > div > div > div > div:nth-child(4) > div > div > div:nth-child(4) > label')
      .click('body > div:nth-child(3) > div > div > div > div.client-src-components-Menus-ManageMenus-set-menu__btns--1knGO > div > button.client-src-components-Menus-ManageMenus-set-menu__successBtn--1f7GE')
      .pause(3000)
      .assert.containsText(
        '#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div > div > div > div:nth-child(1) > div.client-src-components-Menus-ManageMenus-MenuCard-menu-card__body--2j2bz > h4',
        '9th Aug, 2019',
        'Menu should be created successfully'
      );
  },
  'Set Menu form should show error if save is clicked without filling the form': (browser) => {
    browser
      .refresh()
      .click('#root > div.client-src-components-Layout-layout__layout--L4G2t > div > button')
      .pause(2000)
      .click('body > div:nth-child(3) > div > div > div > div.client-src-components-Menus-ManageMenus-set-menu__btns--1knGO > div > button.client-src-components-Menus-ManageMenus-set-menu__successBtn--1f7GE')
      .pause(1500)
      .assert.visible(
        'body > div:nth-child(3) > div > div > div > label > div',
        'Date error message is visible'
      )
      .assert.containsText(
        'body > div:nth-child(3) > div > div > div > label > div',
        'Date is required',
        'Date error message is correct'
      )
      .assert.visible(
        'body > div:nth-child(3) > div > div > div > div.client-src-components-Menus-ManageMenus-set-menu__menuCategory--2QtWw > label > div.client-src-components-Menus-ManageMenus-set-menu__errorMessage--3Bn9T',
        'Category title error is visible'
      )
      .assert.containsText(
        'body > div:nth-child(3) > div > div > div > div.client-src-components-Menus-ManageMenus-set-menu__menuCategory--2QtWw > label > div.client-src-components-Menus-ManageMenus-set-menu__errorMessage--3Bn9T',
        'Category title is required',
        'Category title error message is correct'
      )
      .assert.visible(
        'body > div:nth-child(3) > div > div > div > div.client-src-components-Menus-ManageMenus-set-menu__menuCategory--2QtWw > div > div.client-src-components-Menus-ManageMenus-set-menu__mealsErrorMessage--2GWWP',
        'Meals error is visible'
      )
      .assert.containsText(
        'body > div:nth-child(3) > div > div > div > div.client-src-components-Menus-ManageMenus-set-menu__menuCategory--2QtWw > div > div.client-src-components-Menus-ManageMenus-set-menu__mealsErrorMessage--2GWWP',
        'Meals are required in categories',
        'Category meals error is correct'
      )
      .click('body > div:nth-child(3) > div > div > div > div.client-src-components-Menus-ManageMenus-set-menu__btns--1knGO > button')
      .pause(1500)
      .assert.elementNotPresent(
        'body > div:nth-child(3) > div > div > div > label > div',
        'Set menu modal is closed successfully'
      );
  },
  'Caterer should be able to delete menus': (browser) => {
    browser
      .click('#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div > div > div > div:nth-child(1) > div.client-src-components-Menus-ManageMenus-MenuCard-menu-card__footer--3ryDt > div > button:nth-child(2)')
      .pause(2000)
      .assert.visible(
        '#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div > div > div > div:nth-child(1) > div.client-src-components-Menus-ManageMenus-MenuCard-menu-card__footer--3ryDt > div > button:nth-child(2)',
        'Delete menu modal is visible'
      )
      .pause(2000)
      .click('body > div:nth-child(4) > div > div > div > button.client-src-components-ConfirmDeleteModal-confirm-delete-modal__yesBtn--w3sQj')
      .pause(3000);

    browser
      .expect.element('#root > div.client-src-components-Layout-layout__layout--L4G2t > div > div > div > div > div:nth-child(1) > div.client-src-components-Menus-ManageMenus-MenuCard-menu-card__body--2j2bz > h4')
      .text.to.not.equal('9th Aug, 2019');
  },
  after(browser) {
    browser.end();
  }
};

