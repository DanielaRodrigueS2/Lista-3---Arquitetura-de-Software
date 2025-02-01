// Importação das classes de serviço
const Autenticacao = require("./src/Autenticacao");
const Catalogo = require("./src/Catalogo");
const Carrinho = require("./src/Carrinho");
const Pagamento = require("./src/Pagamento");
const Pedidos = require("./src/Pedidos");
const ReadInput = require("./src/ReadInput");
// Importação da classe User
const User = require("./src/User");

const auth = new Autenticacao();
const reader = new ReadInput();
const catalogo = new Catalogo();
const carrinho = new Carrinho();
const pagamento = new Pagamento();

//let userPadrao = new User('Daisy', 'abacaxi', 1, carrinho)
//auth.adicionarUser()

async function menu(){
    let user = '';
    let senha = '';
    let op;

    console.log('\n\tAplicativo de compras');
    do{
        user = await reader.read('Informe o usuário: ');
        senha = await reader.read('informe a senha: ');
    } while(!auth.authentication(user, senha));

    catalogo.listarProdutos();
    console.log('1 - Listar produtos do carrinho\n2 - Ir para pagamento\n0 - Sair da conta');

    do{
        op = parseInt(await reader.read('Informe um código para adicionar o produto ao carrinho ou uma opção de ação: '));

        switch(op){
            case 0:
    
                break;
            case 1:
                carrinho.listarProdutos();
                break;
            case 2:
                pagamento.processarPagamento();
                break;
            default:
                if(catalogo.produtos[op]){
                    if(catalogo.verificaEstoque(op)){
                        catalogo.reduzEstoque(op);
                        carrinho.adicionarProduto(op, catalogo.produtos[op].nome, catalogo.produtos[op].preco);
                    }
                }
                break;
        }
    } while(op != 0);
}

menu();