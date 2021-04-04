describe('Controller Test', () => {
    it('toggles checkboxes in multiple tables', () => {
        cy.visit('./public');

        // add the posts table
        cy.get('#add-table-input').type('posts');
        cy.get('#add-table-btn').click();
        cy.contains('.sidebar', 'posts');

        // add the pages table
        cy.get('#add-table-input').type('pages');
        cy.get('#add-table-btn').click();
        cy.contains('.sidebar', 'pages');

        // click the posts table
        cy.get('.table-posts').click();
        cy.get('#controller-tab').click();

        cy.get('.include-index').uncheck();
        cy.get('.include-create').uncheck();
        cy.get('.include-edit').uncheck();
        cy.get('.include-store').uncheck();
        cy.get('.include-update').uncheck();
        cy.get('.include-destroy').uncheck();

        cy.reload();

        cy.get('#controller-tab').click();

        cy.get('.include-index').should('not.be.checked');
        cy.get('.include-create').should('not.be.checked');
        cy.get('.include-edit').should('not.be.checked');
        cy.get('.include-store').should('not.be.checked');
        cy.get('.include-update').should('not.be.checked');
        cy.get('.include-destroy').should('not.be.checked');

        cy.get('.table-pages').click();

        cy.get('.include-index').should('be.checked');
        cy.get('.include-create').should('be.checked');
        cy.get('.include-edit').should('be.checked');
        cy.get('.include-store').should('be.checked');
        cy.get('.include-update').should('be.checked');
        cy.get('.include-destroy').should('be.checked');
    });
});