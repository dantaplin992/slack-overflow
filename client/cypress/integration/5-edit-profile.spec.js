describe("Edit profile", () => {
    it("loads successfully", () => {
        cy.visit('http://localhost:3000')
    })

    it("allows a user to edit their profile", () => {

        //logs in
        cy.get('input[name="email"]').type("mrtesty@test.com")
        cy.get('input[name="password"]').type("password")
        cy.get('input[type="submit"]').click()
        cy.contains("General")

        //clicks edit profile and amends
        cy.get('button[type="button"]').click()
        cy.get('button[name="edit"]').click()
        cy.contains("First Name")
        cy.contains("Last Name")
        cy.contains("Email")
        cy.contains("Password")
        cy.contains("Confirm Password")
        cy.contains("Display Name")
        cy.contains("Icon Url")

        cy.get('input[name="firstName"]').clear().type("Bradley")
        cy.get('input[name="lastName"]').clear().type("Walsh")
        cy.get('input[name="email"]').clear().type("Bradders@test.com")
        cy.get('input[name="password"]').type("password")
        cy.get('input[name="confirmPassword"]').type("password")
        cy.get('input[name="displayName"]').clear().type("The Chase")
        cy.get('input[name="icon"]').clear().type("https://img.huffingtonpost.com/asset/61ddb552210000991b7036bc.jpg?cache=1XUXvePA1G&ops=crop_0_186_3514_2410%2Cscalefit_720_noupscale&format=webp")
        cy.get('input[type="submit"]').click()

        //sends message showing new user info
        cy.get('input[type="text"]').type("You can now call me Bradley Walsh!")
        cy.get("#submit-message").click()
        cy.contains("You can now call me Bradley Walsh!")

        //edits profile back
        cy.get('button[type="button"]').click()
        cy.get('button[name="edit"]').click()
        cy.contains("First Name")
        cy.contains("Last Name")
        cy.contains("Email")
        cy.contains("Password")
        cy.contains("Confirm Password")
        cy.contains("Display Name")
        cy.contains("Icon Url")

        cy.get('input[name="firstName"]').clear().type("Testy")
        cy.get('input[name="lastName"]').clear().type("Teston")
        cy.get('input[name="email"]').clear().type("mrtesty@test.com")
        cy.get('input[name="password"]').type("password")
        cy.get('input[name="confirmPassword"]').type("password")
        cy.get('input[name="displayName"]').clear().type("Mr T")
        cy.get('input[name="icon"]').clear().type("https://randomuser.me/api/portraits/lego/6.jpg")
        cy.get('input[type="submit"]').click()

        //sends new message to confirm changes
        cy.get('input[type="text"]').type("Back to Mr T")
        cy.get("#submit-message").click()
        cy.contains("Back to Mr T")
    })
})