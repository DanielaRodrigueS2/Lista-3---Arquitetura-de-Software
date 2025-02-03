const { error } = require("console")

class User{
    constructor(usuario, senha, saldo, carrinho){
        this.usuario = usuario
        this.senha = senha
        this.saldo = 0.0
        this.carrinho = carrinho
    }

    getUsuario(){
        return this.usuario
    }

    getSenha(){
        return this.senha
    }

    getSaldo(){
        return this.saldo
    }

    getCarrinho(){
        return this.carrinho
    }

    alterarSaldo(valor){
        if(isNaN(valor)){
            console.log('\nDigite um valor válido')
        }
        else{
            this.valor += valor
        }
        
    }
}

module.exports = User;