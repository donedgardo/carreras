export const getJoinLink = () => cy.get('[data-cy=join-lobby-link]');
export const getJoinButton = () => cy.get('[data-cy=join-lobby-button]');

export const getCreateLink = () => cy.get('[data-cy=create-lobby-link]');
export const getCreateButton = () => cy.get('[data-cy=create-lobby-button]');

export const getLobbyNameInput = () => cy.get('[data-cy=lobby-name-input]');
export const getLobbyIdInput = () => cy.get('[data-cy=lobby-id-input]');
export const getUserNameInput = () => cy.get('[data-cy=user-name-input]');

export const getAddCardButton = () => cy.get('[data-cy=add-card-button]');
export const getPostItCard = () => cy.get('[data-cy=post-it-card]');
