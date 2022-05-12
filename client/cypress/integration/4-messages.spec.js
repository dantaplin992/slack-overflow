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

        //change rooms 
        // cy.get('SideBarIcon[name="Ruby"]').click()
    })

})