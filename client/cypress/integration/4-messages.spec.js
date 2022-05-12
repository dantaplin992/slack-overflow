describe("Messages", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("allows a user to send messages", () => {

        //sends a message
        cy.get('input[name="email"]').type("homer@test.com")
        cy.get('input[name="password"]').type("password")
        cy.get('input[type="submit"]').click()
        cy.contains("General")

        cy.get('input[type="text"]').type("Testing the delete button!")
        cy.get("#submit-message").click()
        cy.contains("Testing the delete button!")

        //deletes the message
        cy.get('button[name="delete-button"]').click()
        cy.contains("Testing the delete button!").should('not.exist')

        //send and edit the message
        cy.get('input[type="text"]').type("Testing the edit button!")
        cy.get("#submit-message").click()
        cy.contains("Testing the edit button!")

        cy.get('button[name="edit-button"]').click()
        cy.contains("Testing the edit button!")
        cy.get('textarea').clear().type("Edit messages works!")
        cy.get('button[name="edit-button"]').click()

        //react, change and unreact to a message
        cy.contains("Edit messages works!")
        cy.get('button[name="heart"]').click()
        cy.get('button[name="laugh"]').click()
        cy.get('button[name="laugh"]').click()
    })

})