describe('My First Test', () => {
    it('Test main', () => {
        cy.visit('/');//cy.visit('http://localhost:4200');

        cy.contains('Page principale');
        cy.contains('User');

        // Chercher un texte : diférence entre contains et should
        cy.get('p').contains("C'est qui le patron ?");
        cy.get('p').should('contain.text', "C'est qui le patron ?");
        cy.get('p').should('have.text', 'C\'est qui le patron ? C\'est Momo le Bobo ou John John');

        // Chercher et tester les 2 bouttons Jour / Nuit
        cy.get('button').contains('Jour');
        cy.get('button').should('have.text', ' Jour\n Jour\n');

        // Exemple d'utilisation de l'attribut html 'data-cy'
        cy.get('[data-cy=button1]').should('contain.text', 'Jour');
        cy.get('[data-cy=button1]').click();
        cy.get('[data-cy=button1]').contains('Nuit');

        // Compte le nombre de puce dans la liste
        cy.get('ol li').should('have.length', 4);
    })
  })
  