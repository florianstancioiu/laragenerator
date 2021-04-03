describe('Model Test', () => {
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

        // insert title field
        cy.get('#table-fields-title-input').type('title');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();

        // insert slug field
        cy.get('#table-fields-title-input').type('slug');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();

        cy.reload();

        cy.get('#model-tab').click();

        // check the existence of inserted fields
        cy.contains('.model-section-tbody tr:nth-child(1)', 'id');
        cy.contains('.model-section-tbody tr:nth-child(2)', 'title');
        cy.contains('.model-section-tbody tr:nth-child(3)', 'slug');
    });

    it('adds fields in multiple tables', () => {
        // add the posts table
        cy.visit('./public');
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

        // insert slug field
        cy.get('#table-fields-title-input').type('slug');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();

        cy.reload();

        cy.get('#model-tab').click();

        // check the existence of inserted fields
        cy.contains('.model-section-tbody tr:nth-child(1)', 'id');
        cy.contains('.model-section-tbody tr:nth-child(2)', 'title');
        cy.contains('.model-section-tbody tr:nth-child(3)', 'slug');

        cy.get('#add-table-input').type('pages');
        cy.get('#add-table-btn').click();
        cy.contains('.sidebar', 'pages');

        cy.get('#table-fields-tab').click();

        // insert pages_id field
        cy.get('#table-fields-title-input').type('pages_id');
        cy.get('#table-fields-type-input').select('bigIncrements');
        cy.get('#table-fields-add-btn').click();

        // insert title field
        cy.get('#table-fields-title-input').type('pages_title');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();

        // insert slug field
        cy.get('#table-fields-title-input').type('pages_slug');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();

        cy.reload();

        cy.get('.table-pages').click();
        cy.get('#model-tab').click();

        // check the existence of inserted fields
        cy.contains('.model-section-tbody tr:nth-child(1)', 'pages_id');
        cy.contains('.model-section-tbody tr:nth-child(2)', 'pages_title');
        cy.contains('.model-section-tbody tr:nth-child(3)', 'pages_slug');
    });

    it('adds fields in multiple tables and makes them fillable', () => {
        // add the posts table
        cy.visit('./public');
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

        // insert slug field
        cy.get('#table-fields-title-input').type('slug');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();

        cy.reload();

        cy.get('#model-tab').click();

        cy.get('.fillable-id').should('be.checked');
        cy.get('.hidden-id').should('not.be.checked');
        cy.get('.fillable-title').should('be.checked');
        cy.get('.hidden-title').should('not.be.checked');
        cy.get('.fillable-slug').should('be.checked');
        cy.get('.hidden-slug').should('not.be.checked');

        // check the existence of inserted fields
        cy.contains('.model-section-tbody tr:nth-child(1)', 'id');
        cy.contains('.model-section-tbody tr:nth-child(2)', 'title');
        cy.contains('.model-section-tbody tr:nth-child(3)', 'slug');

        cy.get('#add-table-input').type('pages');
        cy.get('#add-table-btn').click();
        cy.contains('.sidebar', 'pages');

        cy.get('#table-fields-tab').click();

        // insert pages_id field
        cy.get('#table-fields-title-input').type('pages_id');
        cy.get('#table-fields-type-input').select('bigIncrements');
        cy.get('#table-fields-add-btn').click();

        // insert title field
        cy.get('#table-fields-title-input').type('pages_title');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();

        // insert slug field
        cy.get('#table-fields-title-input').type('pages_slug');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();

        cy.reload();

        cy.get('.table-pages').click();
        cy.get('#model-tab').click();

        cy.get('.fillable-pages_id').should('be.checked');
        cy.get('.hidden-pages_id').should('not.be.checked');
        cy.get('.fillable-pages_title').should('be.checked');
        cy.get('.hidden-pages_title').should('not.be.checked');
        cy.get('.fillable-pages_slug').should('be.checked');
        cy.get('.hidden-pages_slug').should('not.be.checked');

        // check the existence of inserted fields
        cy.contains('.model-section-tbody tr:nth-child(1)', 'pages_id');
        cy.contains('.model-section-tbody tr:nth-child(2)', 'pages_title');
        cy.contains('.model-section-tbody tr:nth-child(3)', 'pages_slug');
    });

    it('adds fields in multiple tables and makes them hidden', () => {
        // add the posts table
        cy.visit('./public');
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

        // insert slug field
        cy.get('#table-fields-title-input').type('slug');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();

        cy.reload();

        cy.get('#model-tab').click();

        cy.get('.fillable-id').uncheck();
        cy.get('.fillable-title').uncheck();
        cy.get('.fillable-slug').uncheck();

        cy.get('.hidden-id').check();
        cy.get('.hidden-title').check();
        cy.get('.hidden-slug').check();

        cy.get('.fillable-id').should('not.be.checked');
        cy.get('.hidden-id').should('be.checked');
        cy.get('.fillable-title').should('not.be.checked');
        cy.get('.hidden-title').should('be.checked');
        cy.get('.fillable-slug').should('not.be.checked');
        cy.get('.hidden-slug').should('be.checked');

        // check the existence of inserted fields
        cy.contains('.model-section-tbody tr:nth-child(1)', 'id');
        cy.contains('.model-section-tbody tr:nth-child(2)', 'title');
        cy.contains('.model-section-tbody tr:nth-child(3)', 'slug');

        cy.reload();

        cy.get('.fillable-id').should('not.be.checked');
        cy.get('.hidden-id').should('be.checked');
        cy.get('.fillable-title').should('not.be.checked');
        cy.get('.hidden-title').should('be.checked');
        cy.get('.fillable-slug').should('not.be.checked');
        cy.get('.hidden-slug').should('be.checked');

        cy.get('#add-table-input').type('pages');
        cy.get('#add-table-btn').click();
        cy.contains('.sidebar', 'pages');

        cy.get('#table-fields-tab').click();

        // insert pages_id field
        cy.get('#table-fields-title-input').type('pages_id');
        cy.get('#table-fields-type-input').select('bigIncrements');
        cy.get('#table-fields-add-btn').click();

        // insert title field
        cy.get('#table-fields-title-input').type('pages_title');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();

        // insert slug field
        cy.get('#table-fields-title-input').type('pages_slug');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();

        cy.reload();

        cy.get('.table-pages').click();
        cy.get('#model-tab').click();

        cy.get('.fillable-pages_id').should('be.checked');
        cy.get('.hidden-pages_id').should('not.be.checked');
        cy.get('.fillable-pages_title').should('be.checked');
        cy.get('.hidden-pages_title').should('not.be.checked');
        cy.get('.fillable-pages_slug').should('be.checked');
        cy.get('.hidden-pages_slug').should('not.be.checked');

        // check the existence of inserted fields
        cy.contains('.model-section-tbody tr:nth-child(1)', 'pages_id');
        cy.contains('.model-section-tbody tr:nth-child(2)', 'pages_title');
        cy.contains('.model-section-tbody tr:nth-child(3)', 'pages_slug');

        cy.get('.fillable-pages_id').uncheck();
        cy.get('.fillable-pages_title').uncheck();
        cy.get('.fillable-pages_slug').uncheck();

        cy.get('.hidden-pages_id').check();
        cy.get('.hidden-pages_title').check();
        cy.get('.hidden-pages_slug').check();

        cy.get('.fillable-pages_id').should('not.be.checked');
        cy.get('.hidden-pages_id').should('be.checked');
        cy.get('.fillable-pages_title').should('not.be.checked');
        cy.get('.hidden-pages_title').should('be.checked');
        cy.get('.fillable-pages_slug').should('not.be.checked');
        cy.get('.hidden-pages_slug').should('be.checked');

        cy.reload();

        cy.get('.table-pages').click();
        cy.get('#model-tab').click();

        cy.get('.fillable-pages_id').should('not.be.checked');
        cy.get('.hidden-pages_id').should('be.checked');
        cy.get('.fillable-pages_title').should('not.be.checked');
        cy.get('.hidden-pages_title').should('be.checked');
        cy.get('.fillable-pages_slug').should('not.be.checked');
        cy.get('.hidden-pages_slug').should('be.checked');
    });

});