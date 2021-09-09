/// <reference types="cypress" />
//cy.viewport

describe('VR', () => {

    it('Deve acessar a página VR Benefícios,navegar até a aba"pra voce" e clicar na mesma',() => {
        cy.visit('http://www.vr.com.br/');

        cy.get ('[class="vr-menu-trigger vr-menu-trigger--open"]').click();

        cy.get ('[href="/onde-aceita.htm').click();
     
        cy.get ('[class="vr-button vr-button--negative "]').click();
        
        cy.get ('#mapSection').should('be.visible');

        cy.get ('[id="endereco"]').click().type("Avenida dos Bandeirantes, 460 - Brooklin, São Paulo - SP, Brasil");
        cy.get ('[class="autocomplete-results google" ]').click();
        
        cy.get ('[ id="buttonFiltrar" ]').click();
        
        cy.contains('Refeição').siblings('input').click({ force: true });
        cy.get ('[ id="close-card" ]').click();

        cy.get ('[ id="buscarResultados" ]').click();
        
        

        

   
        
        



      //  cy.get ('[lum_4028808471FC1D5D0171FE80340D6AC8_openPrivacyTerm]').click();

            
        
        //cy.get ('#id="endereco"').click().type("Av. dos Bandeirantes, 460 - Brooklin, São Paulo - SP, 04553-900");

        
       // cy.get ('[name="endereco"').type("Av. dos Bandeirantes, 460 - Brooklin, São Paulo - SP, 04553-900");


    });

       
});
