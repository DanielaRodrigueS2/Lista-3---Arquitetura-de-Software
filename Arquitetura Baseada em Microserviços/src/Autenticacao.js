class Autenticacao {
    constructor() {
        this.users = []
    }

    // Adiciona um novo usuario a lista de usuarios
    adicionarUser(user){
        this.users.push(user)
    }

    // Valida a entrada de um usuario com base no user e sua senha
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

    // retorna um usuario com base em seu codigo(user)
    getUser(user) {
        return this.users.find(u => u.usuario === user);
    }
    
}

module.exports = Autenticacao;