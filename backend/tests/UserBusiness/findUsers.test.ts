import { UserBusiness } from "../../src/business/UserBusiness";
import { AuthenticatorMock } from '../mocks/services/AuthenticatorMock'
import { UserDatabaseMock } from '../mocks/UserDatabaseMock'
import { BaseError } from '../../src/errors/BaseError'

describe ("Testing UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new AuthenticatorMock()
    )

    test("Succeded findUsers", async () => {
        const token = "token-valido"

        const response = await userBusiness.findUsers(token)

        expect(response.uniqueUsers.length).toEqual(3)
        expect(response.uniqueUsers[0].email).toEqual("clintonhayes@kpis.tech")

    })

    test("Failed findUsers - Missing token", async () => {
        expect.assertions(2)

        try {
            const token = ""

            await userBusiness.findUsers(token)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("Missing token")
                expect(error.statusCode).toEqual(400)
            }
        }
    })

    test("Failed findUsers - Invalid token", async () => {
        expect.assertions(2)

        try {
            const token = "token-invalido"

            await userBusiness.findUsers(token)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("Invalid token")
                expect(error.statusCode).toEqual(400)
            }
        }
    })
})
