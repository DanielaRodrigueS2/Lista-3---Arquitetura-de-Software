class Pagamento {
    constructor(){
        this.quantPedidos = 0
    }

    // Processa um pagamento com base no saldo total do usuario - total do carrinho
    processarPagamento(saldo, carrinho) {
        if (saldo < carrinho.total){
            console.log('\n\tFalha no pagamento: Saldo insuficiente');
            return false;
        }
        else {
            carrinho.status = 'pago';
            carrinho.id = this.alteraQuantPedidos();
            console.log('\n\tPagamento do pedido aprovado!');
            return true;
        }
    }

    // Altera a quantidade de pedidos ativos
    alteraQuantPedidos(){
        return ++this.quantPedidos;
    }
}

module.exports = Pagamento;