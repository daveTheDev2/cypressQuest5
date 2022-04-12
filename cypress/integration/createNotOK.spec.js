/// <reference types="cypress"/>
const { faker } = require("@faker-js/faker");

const Name = faker.name.lastName();
const firstName = faker.name.firstName();
const Email = faker.internet.email();

describe("Create not ok tests suite ", () => {
  beforeEach(() => {
    cy.visit("https://preprod.backmarket.fr/register");
    cy.get('[data-qa="accept-cta"]').click();
  });

  it(" Create account with user name empty ", () => {
    cy.get("#lastName").type(firstName);
    cy.get("#signup-email").type(Email);
    cy.get("#signup-password").type("Fakeman12345?");
    cy.get('[data-qa="signup-submit-button"]').click();

    cy.url().should("include", "/register");
    cy.contains("obligatoire").should("be.visible");
  });
});
