import {
  getAddCardButton,
  getCreateLink,
  getJoinButton,
  getLobbyIdInput,
  getPostItCard,
  getUserNameInput
} from '../support/app.po';

describe('sailboat join lobby', () => {
  beforeEach(() => cy.visit('/lobby/join'));


  it("should send to the lobby after filling lobby id and clicking join button ", () => {
    getJoinButton().should('be.disabled');
    getUserNameInput().type("Donlols");
    getJoinButton().should('be.disabled');
    getLobbyIdInput().type("randomId");
    getJoinButton().should('be.enabled').click();
    cy.url().should('include', '/lobby/join/randomId');
    getAddCardButton().click();
    getPostItCard().should('exist');
  });


  it("should be able to create lobby by sending to /create on hitting create", () => {
    getCreateLink().click();
    cy.url().should('include', '/lobby/create');
  });
});
