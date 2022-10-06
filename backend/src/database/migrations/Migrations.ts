import { USER_STATUS } from "../../models/User";
import { BaseDatabase } from "../BaseDatabase";
import { UserDatabase } from "../UserDatabase";
import { users } from "./data";


class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};

        CREATE TABLE IF NOT EXISTS Users(
            matrícula integer PRIMARY KEY,
            status STATUS NOT NULL,
            nome varchar(255) NOT NULL,
            email varchar(255) NOT NULL UNIQUE,
            email_gestor varchar(255),
            data_admissao DATE NOT NULL,
            data_rescisao DATE,
            cargo varchar(255) NOT NULL
            );

        `)
    }

    insertData = async () => {
        //inserido através do arquivo .csv gerado pelo google sheets. No banco de dados, 
        //utilizado o comando COPY Users FROM 'C:\Users\laura.LAPTOP-93SJ0BMP\OneDrive\Documentos\usuarios.csv' DELIMITER ',' CSV HEADER;
        //criar um arquivo .csv com os dados da tabela e salvar na pasta do projeto, e um jeito de inserir através da aplicação.
       

    }
}

const migrations = new Migrations()
migrations.execute()
