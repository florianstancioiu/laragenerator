describe('Tables Test', () => {
    it('adds a table', () => {
        cy.visit('./public');

        cy.get('#add-table-input').type('posts');
        cy.get('#add-table-btn').click();
        cy.contains('posts');

        cy.reload();
        cy.contains('posts');
    });

    it('removes a table', () => {
        cy.visit('./public');

        cy.get('#add-table-input').type('posts');
        cy.get('#add-table-btn').click();
        cy.contains('posts');

        cy.get('#tables-list .btn-danger').click();
        cy.get('.swal2-confirm').click();
        cy.contains('posts').should('not.exist');

        cy.reload();
        cy.contains('posts').should('not.exist');
    });

    it('creates a new project', () => {
        cy.visit('./public');

        cy.get('#add-table-input').type('posts');
        cy.get('#add-table-btn').click();
        cy.contains('posts');

        cy.get('#add-table-input').type('pages');
        cy.get('#add-table-btn').click();
        cy.contains('pages');

        cy.get('#new-project-btn').click();
        cy.get('.swal2-confirm').click();

        cy.reload();
        cy.contains('posts').should('not.exist');
        cy.contains('pages').should('not.exist');
    });
})