export default class Autenticacao {
    constructor() {
        this.users = []
    }

    adicionarUser(user){
        this.users.append(user)
    }

    authentication(user, senha){
        if (this.users[user] == senha) {
            console.log(`Usuário autenticado com sucesso\n\tBem-vindo ${user}`);
            return true;
        }
        else{
            console.log('Usuário ou senha incorreto');
            return false;
        }
    }
}