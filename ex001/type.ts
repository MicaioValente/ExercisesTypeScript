class Account {
    protected agency: number
    protected checkingAccount: boolean
    constructor(agency: number, checkinAccount: boolean) {
        this.agency = agency
        this.checkingAccount = checkinAccount


    }

}

class LegalPerson extends Account {
    protected interpriseName: string
    protected cnpj: number

    constructor(agency: number,
        checkinAccount: boolean,
        interpriseName: string,
        cnpj: number) {
        super(agency, checkinAccount)
        this.interpriseName = interpriseName
        this.cnpj = cnpj
    }




}
class PhysicalPerson extends Account {
    protected cpf: number
    protected Name: string
    constructor(agency: number,
        checkinAccount: boolean,
        Name: string,
        cpf: number) {
        super(agency, checkinAccount)
        this.Name = Name
        this.cpf = cpf
    }
}

