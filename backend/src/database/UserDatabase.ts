import { IUserDB } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "users";

    verifyUser = async (email: string): Promise<IUserDB | undefined> => {
        const userDB: IUserDB[] | undefined = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select("*")
        .where({ email })
        
        return userDB[0]
    }
    
    findUserByManager = async (email: string) => {
        const usersDB: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select("*")
        .where({ email_gestor: email })


        return usersDB
    }
    
    findActiveUsers = async () => {
        const usersDB: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select("*")
        .where({ status: "ativo" })

        return usersDB
    }

    findInactiveUsers = async () => {
        const usersDB: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select("*")
        .where({ status: "inativo" })

        return usersDB
    }



}