class User{
    constructor(usuario, senha, saldo, carrinho){
        this.usuario = usuario
        this.senha = senha
        this.saldo = saldo
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
}

module.exports = User;