import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export abstract class BaseDatabase {
    protected static connection = knex({
        client: "pg",
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        }
    })
}
