import { IUserDB, USER_STATUS } from "../../models/User";

export const users: IUserDB[] = [
    {
        matrícula: 0,
        status: USER_STATUS.ATIVO,
        nome: "Danielle Winters",
        email: "daniellewinters@kpis.tech",
        email_gestor: "-",
        data_admissao: new Date("2021-10-06"),
        data_rescisao: null,
        cargo: "Diretor"
    }
]