/// <reference types="cypress"/>
const { faker } = require("@faker-js/faker");

const Name = faker.name.lastName();
const firstName = faker.name.firstName();
const Email = faker.internet.email();

describe("Create account tests suite ", () => {
  beforeEach(() => {
    cy.visit("https://preprod.backmarket.fr/register");
    cy.get('[data-qa="accept-cta"]').click();
  });

  it(" Create account with good crédentials", () => {
    cy.get("#firstName").type(Name);
    cy.get("#lastName").type(firstName);
    cy.get("#signup-email").type(Email);
    cy.get("#signup-password").type("Fakeman12345?");
    cy.get('[data-qa="signup-submit-button"]').click();

    cy.url().should("include", "dashboard/orders");
    cy.get('[data-qa="dashboard-navigation-profil"]').click();
    cy.get('[data-test="dashboard-profile"]').should("exist");
  });
});
