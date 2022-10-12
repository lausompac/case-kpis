import { ITokenPayload } from '../../../src/services/Authenticator'

export class AuthenticatorMock {
    generateToken = (payload: ITokenPayload): string => {
        switch (payload.email) {
            case "kathleenroberts@kpis.tech":
                return "token-valido"
                        
            default:
                return "token-invalido"

        }
    }

    getTokenPayload = (token: string): ITokenPayload | null => {
        switch (token) {
            case "token-valido":
                return {
                    email: "kathleenroberts@kpis.tech"
                }

            default:
                return null
        }
    }
}