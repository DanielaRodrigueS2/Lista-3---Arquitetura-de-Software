class Autenticacao {
    constructor() {
        this.users = []
    }

    adicionarUser(user){
        this.users.push(user)
    }

    authentication(user, senha){
        for (let usuario of this.users){
            
            if(usuario.getUsuario() == user){
                
                if(usuario.getSenha() == senha){
                    console.log('\n\tUsuário logado com sucesso')
                    return usuario
                }
                else{
                    console.log('\n\tSenha incorreta')
                    return null
                }

            }
        }
        console.log('\n\tUsuário inexistente')
        return null
    }
}

module.exports = Autenticacao;