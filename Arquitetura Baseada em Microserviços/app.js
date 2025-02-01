// Importação das classes de serviço
import Autenticacao from "./src/Autenticacao";
import Catalogo from "./src/Catalogo";
import Pedidos from "./src/Carrinho";
import Pagamento from "./src/Pagamento";

// Importação da classe User
import User from "./src/User";

userPadrao = User(1,'Daisy', 'daisy@gmail.com', 'abacaxi', Pedidos())
Autenticacao.adicionaUser()

function menu(){
    console.log('\n\tAplicativo de compras')


}