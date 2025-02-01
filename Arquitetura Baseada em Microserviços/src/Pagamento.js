export default class Pagamento {

    processarPagamento(pedido) {
        if (saldo < pedido.total){
            console.log('Falha no pagamento: Saldo insuficiente');
            return false;
        }
        else {
            pedido.status = 'pago';
            console.log('Pagamento do pedido aprovado!');
            return true;
        }
    }
}