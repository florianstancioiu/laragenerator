describe('Relationships Test', () => {
    it('adds methods in multiple tables', () => {
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
        cy.get('#table-fields-title-input').type('category_id');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();

        // check the existence of inserted fields
        cy.contains('.model-section-tbody tr:nth-child(1)', 'id');
        cy.contains('.model-section-tbody tr:nth-child(2)', 'category_id');

        // add categories table
        cy.get('#add-table-input').type('categories');
        cy.get('#add-table-btn').click();
        cy.contains('.sidebar', 'categories');

        // insert pages_id field
        cy.get('#table-fields-title-input').type('id');
        cy.get('#table-fields-type-input').select('bigIncrements');
        cy.get('#table-fields-add-btn').click();

        // insert title field
        cy.get('#table-fields-title-input').type('title');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();

        // add tags table
        cy.get('#add-table-input').type('tags');
        cy.get('#add-table-btn').click();
        cy.contains('.sidebar', 'tags');

        // insert pages_id field
        cy.get('#table-fields-title-input').type('id');
        cy.get('#table-fields-type-input').select('bigIncrements');
        cy.get('#table-fields-add-btn').click();

        // insert title field
        cy.get('#table-fields-title-input').type('title');
        cy.get('#table-fields-type-input').select('string');
        cy.get('#table-fields-add-btn').click();

        // add post_tag table
        cy.get('#add-table-input').type('post_tag');
        cy.get('#add-table-btn').click();
        cy.contains('.sidebar', 'post_tag');

        // insert post_id field
        cy.get('#table-fields-title-input').type('post_id');
        cy.get('#table-fields-type-input').select('unsignedBigInteger');
        cy.get('#table-fields-add-btn').click();

        // insert tag_id field
        cy.get('#table-fields-title-input').type('tag_id');
        cy.get('#table-fields-type-input').select('unsignedBigInteger');
        cy.get('#table-fields-add-btn').click();

        // navigate to posts relationships
        cy.get('.table-posts').click();
        cy.get('#relationships-tab').click();

        // add categories relationship
        cy.get('#relationship-title-input').type('categories');
        cy.get('#relationship-type-input').select('hasOne');
        cy.get('#foreign-model-input').select('Categorie');
        cy.get('#add-relationship-btn').click();

        // add tags relationship
        cy.get('#relationship-title-input').type('tags');
        cy.get('#relationship-type-input').select('hasMany');
        cy.get('#foreign-model-input').select('Tag');
        cy.get('#add-relationship-btn').click();

        // navigate to categories relationships
        cy.get('.table-categories').click();

        // add posts relationship
        cy.get('#relationship-title-input').type('post');
        cy.get('#relationship-type-input').select('belongsTo');
        cy.get('#foreign-model-input').select('Post');
        cy.get('#add-relationship-btn').click();

        // navigate to tags relationships
        cy.get('.table-tags').click();

        // add posts relationship
        cy.get('#relationship-title-input').type('posts');
        cy.get('#relationship-type-input').select('belongsTo');
        cy.get('#foreign-model-input').select('Post');
        cy.get('#add-relationship-btn').click();

        // reload the page
        cy.reload();

        // navigate to posts relationships
        cy.get('#relationships-tab').click();

        // assert that post relationships exist
        cy.contains('.relationship-categories', 'categories');
        cy.contains('.relationship-categories', 'hasOne');
        cy.contains('.relationship-categories', 'Categorie');
        
        cy.contains('.relationship-tags', 'tags');
        cy.contains('.relationship-tags', 'hasMany');
        cy.contains('.relationship-tags', 'Tag');

        // assert that categories relationship exist
        cy.get('.table-categories').click();

        cy.contains('.relationship-post', 'post');
        cy.contains('.relationship-post', 'belongsTo');
        cy.contains('.relationship-post', 'Post');

        // assert that tags relationship exist
        cy.get('.table-tags').click();

        cy.contains('.relationship-posts', 'posts');
        cy.contains('.relationship-posts', 'belongsTo');
        cy.contains('.relationship-posts', 'Post');
    });

    it('removes methods', () => {
        cy.visit('./public');

        // add the posts table
        cy.get('#add-table-input').type('posts');
        cy.get('#add-table-btn').click();
        cy.contains('.sidebar', 'posts');
        
        // add the categories table
        cy.get('#add-table-input').type('categories');
        cy.get('#add-table-btn').click();
        cy.contains('.sidebar', 'categories');

        // navigate to posts relationships
        cy.get('#relationships-tab').click();

        // add categories relationship
        cy.get('#relationship-title-input').type('categories');
        cy.get('#relationship-type-input').select('hasOne');
        cy.get('#foreign-model-input').select('Categorie');
        cy.get('#add-relationship-btn').click();

        // add post relationship
        cy.get('#relationship-title-input').type('post');
        cy.get('#relationship-type-input').select('hasOne');
        cy.get('#foreign-model-input').select('Post');
        cy.get('#add-relationship-btn').click();

        cy.get('.relationship-categories .btn-danger').click();
        cy.get('.relationship-post .btn-danger').click();

        cy.reload();

        cy.get('#relationships-tab').click();

        cy.get('.relationship-categories').should('not.exist');
        cy.get('.relationship-post').should('not.exist');
    });
});