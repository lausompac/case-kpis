import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import { BaseError } from "../errors/BaseError";

export class UserController {
    constructor(
        private userBusiness = new UserBusiness()
    ) {}

    findUsers = async (req: Request, res: Response) => {
        try {
            const input = req.body.email as string
            const response = await this.userBusiness.findUsers(input)

            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
               return res.status(error.statusCode).send({ error: error.message })
            }
            res.status(500).send({ error: "Unexpected error ocurred during find users" })
        }
    }

    findActiveUsers = async (req: Request, res: Response) => {
        try {
            const response = await this.userBusiness.findActiveUsers()

            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
               return res.status(error.statusCode).send({ error: error.message })
            }
            res.status(500).send({ error: "Unexpected error ocurred during find active users" })
        }
    }

    findInactiveUsers = async (req: Request, res: Response) => {
        try {
            const response = await this.userBusiness.findInactiveUsers()

            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
               return res.status(error.statusCode).send({ error: error.message })
            }
            res.status(500).send({ error: "Unexpected error ocurred during find inactive users" })
        }
    }
}