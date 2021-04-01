describe('Tables Test', () => {
    it('adds fields', () => {
        // add the posts table
        cy.visit('./public');
        cy.get('#add-table-input').type('posts');
        cy.get('#add-table-btn').click();
        cy.contains('posts');

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
    });
})