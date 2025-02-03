class Pagamento {
    constructor(){
        this.quantPedidos = 0
    }

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

    alteraQuantPedidos(){
        return ++this.quantPedidos;
    }
}

module.exports = Pagamento;