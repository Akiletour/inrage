
import { checkEmptyLinks } from '../support/commands';

/// <reference types="cypress"/>

context('Public Portfolio list page', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/portfolio');
  });

  checkEmptyLinks();
  it('Should not contain a private project', () => {
    // For example, the Audilab project is private, so it should not be listed
    cy.get('.project-item').should('not.contain', 'Audilab');
  });
});

context('Private Portfolio list page', () => {
  checkEmptyLinks();
  
  it('Should contain a private project', () => {
    cy.visit('http://localhost:3000/api/preview?secret=secret_preview');
    cy.get('.project-item').should('contain', 'Audilab');
  });

  it('Should not contain anymore a private post when I click on exit-preview', () => {
    cy.visit('http://localhost:3000/api/preview?secret=secret_preview');
    cy.get('.project-item').should('contain', 'Audilab');

    cy.visit('http://localhost:3000/api/exit-preview');
    cy.visit('http://localhost:3000/portfolio');
    cy.get('.project-item').should('not.contain', 'Audilab');
  })
});
export {};
