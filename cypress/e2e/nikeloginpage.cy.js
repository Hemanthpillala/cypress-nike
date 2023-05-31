/// <reference types="cypress" />

it('Google Search', () => {

    
    cy.visit('https://www.nike.com/in/')
    
    cy.get('.pre-login-btns > .nav-btn > #hf_title_signin_membership').click().should('exist')
    cy.get('.nike-unite-swoosh').should('be.visible')



    cy.contains('Email address ').click().type('hemanthpillala@gmail.com')
    cy.contains('Password ').click().type('hemanth@112002{enter}')


   
    
})