import { UserBusiness } from '../../src/business/UserBusiness'
import { AuthenticatorMock } from '../mocks/services/AuthenticatorMock'
import { UserDatabaseMock } from '../mocks/UserDatabaseMock'
import { BaseError } from '../../src/errors/BaseError'

describe('Testing Userbusiness', () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new AuthenticatorMock()
    )

    test("Succeded login", async () => {
        const email = "kathleenroberts@kpis.tech"

        const response = await userBusiness.login(email)

        expect(response.message).toEqual("User authenticated successfully")
        expect(response.token).toEqual("token-valido")
    })

    test("Failed login - User not Found", async () => {
        expect.assertions(2)

        try {
            const email = "teste@teste.tech"

            await userBusiness.login(email)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("User not found")
                expect(error.statusCode).toEqual(404)
            }
        }
    })

    test("Failed login - Invalid email", async () => {
        expect.assertions(2)

        try {
            const email = "teste"

            await userBusiness.login(email)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("Invalid email")
                expect(error.statusCode).toEqual(400)
            }
        }
    })

    test("Failed login - Missing email", async () => {
        expect.assertions(2)

        try {
            const email = ""

            await userBusiness.login(email)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("Missing email")
                expect(error.statusCode).toEqual(400)
            }
        }
    })
})