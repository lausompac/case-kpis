export enum USER_STATUS {
    ATIVO = "ativo",
    INATIVO = "inativo"
}

export interface IUserDB {
    matrícula: number,
    status: USER_STATUS,
    nome: string,
    email: string,
    email_gestor: string,
    data_admissao: string,
    data_rescisao: string,
    cargo: string
}

export class User {
    constructor(
        private matrícula: number,
        private status: USER_STATUS,
        private nome: string,
        private email: string,
        private email_gestor: string,
        private data_admissao: string,
        private data_rescisao: string,
        private cargo: string
    ) { }

    public getmatrícula = () => {
        return this.matrícula
    }

    public getStatus = () => {
        return this.status
    }

    public getNome = () => {
        return this.nome
    }

    public getEmail = () => {
        return this.email
    }

    public getEmailGestor = () => {
        return this.email_gestor
    }

    public getDataAdmissao = () => {
        return this.data_admissao
    }

    public getDataRescisao = () => {
        return this.data_rescisao
    }

    public getCargo = () => {
        return this.cargo
    }

    public setmatrícula = (newmatrícula: number) => {
        this.matrícula = newmatrícula
    }

    public setStatus = (newStatus: USER_STATUS) => {
        this.status = newStatus
    }

    public setNome = (newNome: string) => {
        this.nome = newNome
    }

    public setEmail = (newEmail: string) => {
        this.email = newEmail
    }

    public setEmailGestor = (newEmailGestor: string) => {
        this.email_gestor = newEmailGestor
    }

    public setDataAdmissao = (newDataAdmissao: string) => {
        this.data_admissao = newDataAdmissao
    }

    public setDataRescisao = (newDataRescisao: string) => {
        this.data_rescisao = newDataRescisao
    }

    public setCargo = (newCargo: string) => {
        this.cargo = newCargo
    }
}

