export default class Autenticacao {
    constructor() {
        this.users = {
            "user1": "senha1",
            "user2": "senha2"
        };
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