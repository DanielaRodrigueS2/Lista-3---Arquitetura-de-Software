export default class User{
    
    constructor(cpf, nome, email,senha, carrinho){
        this.cpf = cpf
        this.nome = nome
        this.email = email
        this.senha = senha
        this.saldo = 0.0
        this.carrinho = carrinho
    }

    getNome(){
        return this.nome
    }

    getCpf(){
        return this.cpf
    }

    getEmail(){
        return this.email
    }

    getSenha(){
        return this.senha
    }

    getSaldo(){
        return this.saldo
    }

    alterarSaldo(valor){
        this.saldo += valor
    }

}