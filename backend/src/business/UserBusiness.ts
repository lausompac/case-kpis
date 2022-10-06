import { UserDatabase } from "../database/UserDatabase";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase = new UserDatabase(),

    ) {}

    findUsers = async () => {
    
        const usersDB = await this.userDatabase.findUsers()
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