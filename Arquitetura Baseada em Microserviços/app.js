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
const pedidos = new Pedidos();

let userPadrao = new User('a', 'a', 100, carrinho)
auth.adicionarUser(userPadrao)

async function menu(){
    let user = '';
    let senha = '';
    let op;

        console.log('\n\tAPLICATIVO DE COMPRAS');
        do{
            user = await reader.read('Informe o usuário: ');
            senha = await reader.read('informe a senha: ');
        } while(!auth.authentication(user, senha));

        let usuario = auth.getUser(user);
        await reader.esperar();
        catalogo.listarProdutos();

        do{
            console.log('\n1 - Listar produtos do carrinho\n2 - Ir para pagamento\n3 - Listar pedidos\n4 - Listar Catalogo de Produtos\n5 - Ver saldo');
            op = await reader.read('Informe um código para adicionar o produto ao carrinho ou uma opção de ação: ');

            switch(op){
                case '0':
                    break;
                case '1':
                    carrinho.listarProdutos()
                    await reader.esperar();
                    break;
                case '2':
                    if(carrinho.carrinho.length === 0){
                        console.log('\n\tCarrinho Vazio');
                    }
                    else{
                        if(pagamento.processarPagamento(usuario.saldo, carrinho)){
                            pedidos.addPedido(user, carrinho);
                            usuario.saldo -= carrinho.total;
                            carrinho.carrinho = [];
                            carrinho.total = 0;
                        }
                    }
                    await reader.esperar();
                    break;
                case '3':
                    pedidos.listarPedidos(user);
                    await reader.esperar();
                    break;
                case '4':
                    catalogo.listarProdutos();
                    break;
                case '5':
                    console.log(`\n\tSaldo atual: R$ ${usuario.saldo}`)
                    await reader.esperar();
                    break;
                default:
                    if(catalogo.produtos[op]){
                        if(catalogo.verificaEstoque(op)){
                            catalogo.reduzEstoque(op);
                            carrinho.adicionarProduto(op, catalogo.produtos[op].nome, catalogo.produtos[op].preco);
                            console.log('\n\tProduto adicionado com sucesso!');
                            await reader.esperar();
                        }
                    }
                    else{
                        console.log('\n\tOpção inválida');
                    }
                    break;
            }
        } while(true);
}

menu();