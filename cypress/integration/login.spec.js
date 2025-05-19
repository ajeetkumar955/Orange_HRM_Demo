import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('OrangeHRM Login Test', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    cy.fixture('loginData').then(({ username, password }) => {
      loginPage.enterUsername(username);
      loginPage.enterPassword(password);
      loginPage.clickLogin();
      dashboardPage.verifyDashboardVisible();
    });
  });
});
