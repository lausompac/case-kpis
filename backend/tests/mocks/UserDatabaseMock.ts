import { BaseDatabase } from "../../src/database/BaseDatabase";
import { USER_STATUS } from "../../src/models/User";

export class UserDatabaseMock extends BaseDatabase {
    public static TABLE_USERS = "users";

    verifyUser = async (email: string) => {
        switch (email) {
            case "kathleenroberts@kpis.tech":
                return {
                    matrícula: 40,
                    status: USER_STATUS.ATIVO,
                    nome: "Kathleen Roberts",
                    email: "kathleenroberts@kpis.tech",
                    email_gestor: "sharonbarr@kpis.tech",
                    data_admissao: "28/07/2021",
                    data_rescisao: "17/02/2022",
                    cargo: "Designer"
                }

            default:
                return undefined
        }
    }

    findUserByManager = async (email: string) => {
        switch (email) {
            case "kathleenroberts@kpis.tech":
                return [
                    {
                        matrícula: 38,
                        status: USER_STATUS.ATIVO,
                        nome: "Clinton Hayes",
                        email: "clintonhayes@kpis.tech",
                        email_gestor: "kathlennroberts@kpis.tech",
                        data_admissao: "10/10/2021",
                        data_rescisao: "",
                        cargo: "Estagiário"
                    },
                    {
                        matrícula: 39,
                        status: USER_STATUS.INATIVO,
                        nome: "Justin Jensen",
                        email: "justinjensen@kpis.tech",
                        email_gestor: "kathleenroberts@kpis.tech",
                        data_admissao: "28/01/2021",
                        data_rescisao: "27/03/2021",
                        cargo: "Estagiário"
                    },
                    {
                        matrícula: 43,
                        status: USER_STATUS.INATIVO,
                        nome: "Michelle Flynn",
                        email: "michelleflynn@kpis.tech",
                        email_gestor: "kathleenroberts@kpis.tech",
                        data_admissao: "25/08/2021",
                        data_rescisao: "05/03/2022",
                        cargo: "Designer"
                    }
                ]

            case "clintonhayes@kpis.tech":
                return []

            case "justinjensen@kpis.tech":
                return []

            case "michelleflynn@kpis.tech":
                return []


            default:
                return undefined
        }
    }
}