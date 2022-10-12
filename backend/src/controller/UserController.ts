import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import { BaseError } from "../errors/BaseError";

export class UserController {
    constructor(
        private userBusiness = new UserBusiness()
    ) {}

    login = async (req: Request, res: Response) => {
        try {
            const { email } = req.body

            const response = await this.userBusiness.login(email)

            res.status(200).send(response)
        } catch (error) {
            if (error instanceof BaseError) {
                res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Unexpected error ocurred during login" })
        }
    }


    findUsers = async (req: Request, res: Response) => {
        try {
            const input = req.headers.authorization
            const response = await this.userBusiness.findUsers(input)

            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
               return res.status(error.statusCode).send({ error: error.message })
            }
            res.status(500).send({ error: "Unexpected error ocurred during find users" })
        }
    }

}