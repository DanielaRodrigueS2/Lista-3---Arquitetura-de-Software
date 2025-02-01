// Importação das classes de serviço
import Autenticacao from "./src/Autenticacao";
import Catalogo from "./src/Catalogo";
import Carrinho from "./src/Carrinho";
import Pagamento from "./src/Pagamento";
import Pedidos from "./src/Pedidos";
import ReadInput from "./src/ReadInput";

// Importação da classe User
import User from "./src/User";

auth = new Autenticacao
reader = new ReadInput
catalogo = new Catalogo
carrinho = new Carrinho
pagamento = new Pagamento

userPadrao = User(1,'Daisy', 'daisy@gmail.com', 'abacaxi', Carrinho())
Autenticacao.adicionaUser()

function menu(){
    let user = '';
    let senha = '';
    let op;
    let quantidade;

    console.log('\n\tAplicativo de compras');
    do{
        user = reader.read('Informe o usuário: ');
        senha = reader.read('informe a senha: ');
    }while (auth.auth(user, senha));

    catalogo.listarProdutos();
    console.log('1 - Listar produtos do carrinho\n2 - Ir para pagamento\n0 - Sair da conta');

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
                quantidade = reader.read('Informe a quantidade de itens desejada: ')
                catalogo.verificaEstoque(op)
                carrinho.adicionarProduto(op, quantidade, catalogo.produtos[op].nome, catalogo.produtos[op].preco)
            }
            break;
    }

    do{
        op = reader.read('Informe um código para adicionar o produto ao carrinho ou uma opção: ')
    } while(op)

}

