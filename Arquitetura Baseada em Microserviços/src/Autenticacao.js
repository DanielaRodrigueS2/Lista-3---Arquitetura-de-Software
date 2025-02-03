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
                    console.log(`\n\tUsuário logado com sucesso. Bem vindo ${user}`)
                    return true
                }
                else{
                    console.log('\n\tSenha incorreta\n')
                    return false
                }

            }
        }
        console.log('\n\tUsuário inexistente\n')
        return false
    }

    getUser(user) {
        return this.users.find(u => u.usuario === user);
    }
    
}

module.exports = Autenticacao;