class LoginPage {
  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  }

  enterUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  verifyLoginPageVisible() {
    cy.get('h5').should('contain.text', 'Login');
  }
}

export default LoginPage;
