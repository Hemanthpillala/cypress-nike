/// <reference types="cypress" />

it('Google Search', () => {

    cy.visit('https://www.nike.com/in/')
    cy.get('#VisualSearchInput').click().type('AIR jordan series{enter}')
    cy.get('[data-product-position="2"] > [data-testid="product-card__body"] > figure > [data-testid="product-card__img-link-overlay"] > [data-testid="wall-image-loader"] > .product-card__hero-image').click()
    cy.get(':nth-child(5) > .css-xf3ahq').click()
    cy.contains('Add to Bag').click()
    
    


   
    
})