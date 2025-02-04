// Importação das classes de serviço
const Autenticacao = require("./src/Autenticacao");
const Catalogo = require("./src/Catalogo");
const Carrinho = require("./src/Carrinho");
const Pagamento = require("./src/Pagamento");
const Pedidos = require("./src/Pedidos");
const ReadInput = require("./src/ReadInput");
// Importação da classe User
const User = require("./src/User");

// Implementação das classes de serviço
const auth = new Autenticacao();
const reader = new ReadInput();
const catalogo = new Catalogo();
const carrinho = new Carrinho();
const pagamento = new Pagamento();
const pedidos = new Pedidos();

let userPadrao = new User('a', 'a', 100, carrinho) // Criação do userPadrão User,senha,saldo,carrinho
auth.adicionarUser(userPadrao) // Autenticação do usuário padrão
userPadrao = new User('b', 'b', 100, carrinho) // Criação do userPadrão User,senha,saldo,carrinho
auth.adicionarUser(userPadrao) // Autenticação do usuário padrão

async function menu(){
    let user = '';
    let senha = '';
    let op;

    do{
        console.log('\n\tAPLICATIVO DE COMPRAS');
        do{
            user = await reader.read('Informe o usuário: ');
            senha = await reader.read('informe a senha: ');
        } while(!auth.authentication(user, senha));1

        let usuario = auth.getUser(user);
        await reader.esperar();
        catalogo.listarProdutos();

        do{
            console.log('\n1 - Listar produtos do carrinho\n2 - Ir para pagamento\n3 - Listar pedidos\n4 - Listar Catalogo de Produtos\n5 - Ver saldo\n6 - Adicionar Saldo\n0 - Sair da conta');
            op = await reader.read('Informe um código para adicionar o produto ao carrinho ou uma das opções acima: ');

            switch(op){
                case '0':
                    break;
                case '1':
                    carrinho.listarProdutos();
                    await reader.esperar();
                    break;
                case '2':
                    if(carrinho.carrinho.length === 0){
                        console.log('\n\tCarrinho Vazio');
                    }
                    else{
                        if(pagamento.processarPagamento(usuario.saldo, carrinho)){
                            pedidos.addPedido(user, carrinho.carrinho, carrinho.total.toFixed(2), carrinho.status);
                            usuario.saldo -= carrinho.total;
                            carrinho.carrinho = [];
                            carrinho.total = 0;
                            carrinho.status = 'pagamento pendente';
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
                    console.log(`\n\tSaldo atual: R$ ${usuario.saldo}`);
                    await reader.esperar();
                    break;
                case '6':
                    valor = await reader.read('\nAdicione o valor a ser inserido: ')
                    valor = parseFloat(valor)
                    usuario.alteraSaldo(valor)
                    await reader.esperar();
                default:
                    if(catalogo.produtos[op]){
                        if(catalogo.verificaEstoque(op)){
                            catalogo.reduzEstoque(op);
                            carrinho.adicionarProduto(op, catalogo.produtos[op].nome, catalogo.produtos[op].preco);
                            console.log('\n\tProduto adicionado com sucesso!');
                        }
                        else{
                            console.log('\n\tEstoque indisponível para o produto solicitado');
                        }
                        await reader.esperar();
                    }
                    else{
                        console.log('\n\tOpção inválida');
                    }
                    break;
            }
        } while(op != 0);
    } while(true);
}

menu();