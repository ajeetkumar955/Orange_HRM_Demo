class DashboardPage {
  verifyDashboardVisible() {
    cy.get('h6').should('contain.text', 'Dashboard');
  }
}

export default DashboardPage;
