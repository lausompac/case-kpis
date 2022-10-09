import { UserDatabase } from "../database/UserDatabase";
import { NotFoundError } from "../errors/NotFoundError";
import { RequestError } from "../errors/RequestError";
import { IUserDB } from "../models/User";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase = new UserDatabase(),

    ) { }

    findUsers = async (input: string) => {

        const email = input

        if (!email) {
            throw new RequestError("Email is required")
        }

        const isUserValid = await this.userDatabase.verifyUser(email)

        if (!isUserValid) {
            throw new NotFoundError("User not found")
        }

        let allSubordinates: IUserDB[] = []
        const directSubordinatesDB = await this.userDatabase.findUserByManager(email)
        const directSubordinates = directSubordinatesDB.map(user => user)

        allSubordinates.push(...directSubordinates)


        const indirectSubordinatesDB = directSubordinates.map(user => this.userDatabase.findUserByManager(user.email))
        const indirectSubordinates = Promise.all(indirectSubordinatesDB).then(subordinate => subordinate)
        const loadList = await indirectSubordinates
        for (let i = 0; i < loadList.length; i++) {
            const subordinate = loadList[i].map(sub => sub)

            allSubordinates.push(...subordinate)
        }

        const indirectSubordinates2DB = allSubordinates.map(user => this.userDatabase.findUserByManager(user.email))
        const indirectSubordinates2 = Promise.all(indirectSubordinates2DB).then(subordinate => subordinate)
        const loadList2 = await indirectSubordinates2
        for (let i = 0; i < loadList2.length; i++) {
            const subordinate = loadList2[i].map(sub => {
                if (!allSubordinates.includes(sub)) {
                    return allSubordinates.push(sub)
                }
            })
        }

        const uniqueUsers = allSubordinates.filter((user, index, self) =>
            index === self.findIndex((t) => (
                t.matrícula === user.matrícula
            ))
        )

        console.log(uniqueUsers.length)

        uniqueUsers.sort((a, b) => {
            if (a.matrícula < b.matrícula) {
                return -1
            }
            if (a.matrícula > b.matrícula) {
                return 1
            }
            return 0
        })

        const response = {
            uniqueUsers
        }

        return response
    }

    findActiveUsers = async () => {

        const usersDB = await this.userDatabase.findActiveUsers()
        const users = usersDB.map(user => {
            return {
                matrícula: user.matrícula,
                status: user.status,
                nome: user.nome,
                email: user.email,
                email_gestor: user.email_gestor,
                data_admissao: user.data_admissao,
                data_rescisao: user.data_rescisao,
                cargo: user.cargo
            }
        })

        const response = {
            users
        }

        return response
    }

    findInactiveUsers = async () => {

        const usersDB = await this.userDatabase.findInactiveUsers()
        const users = usersDB.map(user => {
            return {
                matrícula: user.matrícula,
                status: user.status,
                nome: user.nome,
                email: user.email,
                email_gestor: user.email_gestor,
                data_admissao: user.data_admissao,
                data_rescisao: user.data_rescisao,
                cargo: user.cargo
            }
        })

        const response = {
            users
        }

        return response
    }
}