module.exports = {
  'Unauthenticated Homepage': (browser) => {
    browser
      .windowMaximize()
      .url('http://localhost:8000')
      .assert.containsText(
        '#root > div:nth-child(2) > div > div.client-src-components-Home-Welcome-welcome__welcome--1C0Xi > nav > div.client-src-components-Layout-NavBar-navbar__titleArea--FHOiR > a > span',
        'Book-A-Meal',
        'Navbar title should be Book-A-Meal'
      )
      .assert.containsText(
        '#root > div:nth-child(2) > div > div.client-src-components-Home-Welcome-welcome__welcome--1C0Xi > nav > div.client-src-components-Layout-NavBar-navbar__navMenus--3tNEi > ul > li:nth-child(1) > a',
        'Login',
        'Login link should be visible'
      )
      .assert.containsText(
        '#root > div:nth-child(2) > div > div.client-src-components-Home-Welcome-welcome__welcome--1C0Xi > nav > div.client-src-components-Layout-NavBar-navbar__navMenus--3tNEi > ul > li:nth-child(2) > a',
        'Sign Up',
        'Sign up link should be visible'
      )
      .assert.containsText(
        '#root > div:nth-child(2) > div > div.client-src-components-Home-Welcome-welcome__welcome--1C0Xi > div > div > span',
        'Book a meal on the go...',
        'Welcome message is visible'
      )
      .assert.containsText(
        '#root > div:nth-child(2) > div > div.client-src-components-Home-MenuPeep-menu-peep__peep--DxrDf > div.client-src-components-Home-MenuPeep-menu-peep__heading--t8Q89 > span > b',
        "Peep into today's menus",
        'Peep menus header should be correct'
      )
      .end();
  }
};

