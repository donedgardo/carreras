import {
  getAddCardButton,
  getCreateButton,
  getJoinLink,
  getLobbyNameInput, getPostItCard,
  getUserNameInput
} from '../support/app.po';

describe('sailboat create lobby', () => {
  beforeEach(() => cy.visit('/lobby/create'));
  it("should allow to create a lobby", () => {
    getCreateButton().should('be.disabled');
    getLobbyNameInput().type("onyx");
    getCreateButton().should('be.disabled');
    getUserNameInput().type("random username");
    getCreateButton().should('be.enabled').click();
    cy.url().should('include', '/lobby/create/onyx');
    getAddCardButton().click();
    getPostItCard().should('exist');
  });

  it("should allow user to join", () => {
    getJoinLink().click();
    cy.url().should('include', '/lobby/join');
  })
});
