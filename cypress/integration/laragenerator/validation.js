describe('Validation Test', () => {
    it('adds validation rules in multiple tables', () => {
        cy.visit('./public');

        // add the posts table
        cy.get('#add-table-input').type('posts');
        cy.get('#add-table-btn').click();
        cy.contains('.sidebar', 'posts');

        // insert id field
        cy.get('#table-fields-title-input').type('id');
        cy.get('#table-fields-type-input').select('bigIncrements');
        cy.get('#table-fields-add-btn').click();

        // insert title field
        cy.get('#table-fields-title-input').type('title');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();

        // add the pages table
        cy.get('#add-table-input').type('pages');
        cy.get('#add-table-btn').click();
        cy.contains('.sidebar', 'pages');

        // insert id field
        cy.get('#table-fields-title-input').type('pages_id');
        cy.get('#table-fields-type-input').select('bigIncrements');
        cy.get('#table-fields-add-btn').click();

        // insert title field
        cy.get('#table-fields-title-input').type('pages_title');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();

        // click the posts table
        cy.get('.table-posts').click();
        cy.get('#validation-tab').click();

        // add validation rules for posts table
        cy.get('.validation-id').type('required|integer');
        cy.get('.validation-title').type('required|string');

        cy.get('#validation-tab').click();

        cy.get('.table-pages').click();

        cy.get('.validation-pages_id').type('integer|required');
        cy.get('.validation-pages_title').type('string|required');
        
        cy.get('#validation-tab').click();
        
        cy.reload();

        cy.get('#validation-tab').click();

        cy.get('.validation-id').should('have.value', 'required|integer');
        cy.get('.validation-title').should('have.value', 'required|string');
    
        cy.get('.table-pages').click();

        cy.get('.validation-pages_id').should('have.value', 'integer|required');
        cy.get('.validation-pages_title').should('have.value', 'string|required');
    });
});