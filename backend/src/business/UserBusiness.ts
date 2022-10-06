import { UserDatabase } from "../database/UserDatabase";
import { NotFoundError } from "../errors/NotFoundError";
import { RequestError } from "../errors/RequestError";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase = new UserDatabase(),

    ) { }

    findUsers = async (input: string) => {

        const email = input

        if(!email) {
            throw new RequestError("Email is required")
        }

        const isUserValid = await this.userDatabase.verifyUser(email)

        if(!isUserValid) {
            throw new NotFoundError("User not found")
        }

        const usersDB = await this.userDatabase.findUserByManager(email)
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
        
        const indirects = await this.userDatabase.findUserByManager(users[0].email)


        const response = {
            users
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