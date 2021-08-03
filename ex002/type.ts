class Pessoa {
    protected nome: string
    protected idade: number
    protected cidade: string
    constructor(nome: string, idade: number, cidade: string) {
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
    }
}
class Colaborador extends Pessoa {
    protected salary: number
    protected position: string
    constructor(nome: string,
        idade: number,
        cidade: string,
        salary: number,
        position: string) {

        super(nome, idade, cidade)
        this.salary = salary
        this.position = position
    }
    show(){
        console.log(this.salary , this.position , this.nome)
    }
}
let pessoa1 = new Colaborador('juam' ,15,'blumenau',1.980,'gerente')
