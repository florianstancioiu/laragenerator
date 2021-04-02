describe('Tables Test', () => {
    it('adds fields', () => {
        // add the posts table
        cy.visit('./public');
        cy.get('#add-table-input').type('posts');
        cy.get('#add-table-btn').click();
        cy.contains('.sidebar', 'posts');

        // insert id field
        cy.get('#table-fields-title-input').type('id');
        cy.get('#table-fields-type-input').select('bigIncrements');
        cy.get('#table-fields-add-btn').click();
        cy.contains('#table-fields-wrapper tr', 'id');

        // insert title field
        cy.get('#table-fields-title-input').type('title');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();
        cy.contains('#table-fields-wrapper tr', 'title');

        // insert slug field
        cy.get('#table-fields-title-input').type('slug');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();
        cy.contains('#table-fields-wrapper tr', 'slug');
        
        // insert user_id field
        cy.get('#table-fields-title-input').type('user_id');
        cy.get('#table-fields-type-input').select('unsignedBigInteger');
        cy.get('#table-fields-default-input').type(1);
        cy.get('#table-fields-add-btn').click();
        cy.contains('#table-fields-wrapper tr', 'user_id');

        cy.reload();

        // check the existence of id field
        cy.contains('#table-fields-wrapper tr:nth-child(1)', 'id');
        cy.contains('#table-fields-wrapper tr:nth-child(1)', 'bigIncrements');
        cy.contains('#table-fields-wrapper tr:nth-child(1)', 'false');

        // check the existence of title field
        cy.contains('#table-fields-wrapper tr:nth-child(2)', 'title');
        cy.contains('#table-fields-wrapper tr:nth-child(2)', 'string');
        cy.contains('#table-fields-wrapper tr:nth-child(2)', 'false');

        // check the existence of slug field
        cy.contains('#table-fields-wrapper tr:nth-child(3)', 'slug');
        cy.contains('#table-fields-wrapper tr:nth-child(3)', 'string');
        cy.contains('#table-fields-wrapper tr:nth-child(3)', 'false');

        // check the existence of user_id field
        cy.contains('#table-fields-wrapper tr:nth-child(4)', 'user_id');
        cy.contains('#table-fields-wrapper tr:nth-child(4)', 'unsignedBigInteger');
        cy.contains('#table-fields-wrapper tr:nth-child(4)', '1');
        cy.contains('#table-fields-wrapper tr:nth-child(4)', 'false');

        // add the pages table
        cy.get('#add-table-input').type('pages');
        cy.get('#add-table-btn').click();
        cy.contains('.sidebar', 'pages');
        
        // insert id field in pages table
        cy.get('#table-fields-title-input').type('pages_id');
        cy.get('#table-fields-type-input').select('bigIncrements');
        cy.get('#table-fields-add-btn').click();
        cy.contains('#table-fields-wrapper tr', 'pages_id');

        // insert title field
        cy.get('#table-fields-title-input').type('pages_title');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();
        cy.contains('#table-fields-wrapper tr', 'pages_title');

        // insert slug field
        cy.get('#table-fields-title-input').type('pages_slug');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();
        cy.contains('#table-fields-wrapper tr', 'pages_slug');

        cy.reload();

        cy.get('#tables-list li:nth-child(2)').click();

        // check the existence of id field
        cy.contains('#table-fields-wrapper tr:nth-child(1)', 'pages_id');
        cy.contains('#table-fields-wrapper tr:nth-child(1)', 'bigIncrements');
        cy.contains('#table-fields-wrapper tr:nth-child(1)', 'false');

        // check the existence of title field
        cy.contains('#table-fields-wrapper tr:nth-child(2)', 'pages_title');
        cy.contains('#table-fields-wrapper tr:nth-child(2)', 'string');
        cy.contains('#table-fields-wrapper tr:nth-child(2)', 'false');

        // check the existence of slug field
        cy.contains('#table-fields-wrapper tr:nth-child(3)', 'pages_slug');
        cy.contains('#table-fields-wrapper tr:nth-child(3)', 'string');
        cy.contains('#table-fields-wrapper tr:nth-child(3)', 'false');
    });

    it('deletes field', () => {
        // add the posts table
        cy.visit('./public');
        cy.get('#add-table-input').type('posts');
        cy.get('#add-table-btn').click();
        cy.contains('.sidebar', 'posts');

        // insert id field
        cy.get('#table-fields-title-input').type('id');
        cy.get('#table-fields-type-input').select('bigIncrements');
        cy.get('#table-fields-add-btn').click();
        cy.contains('#table-fields-wrapper tr', 'id');

        cy.get('#table-fields-wrapper tr:nth-child(1) .btn-danger').click();
        cy.get('#table-fields-wrapper tbody tr').should('not.exist');
    });
});