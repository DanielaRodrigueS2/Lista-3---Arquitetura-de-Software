class Pedidos {
    constructor() {
        this.pedidos = [];
        this.quantPedidos = 0;
    }

    // Adciona um novo pedido, recebe o carrinho e o user ligados ao pedido
    addPedido(carrinho, user) {
        const pedido = {
            id: this.alteraQuantPedidos(),
            user: user,
            produtos: carrinho.carrinho,
            total: carrinho.total,
            status: carrinho.status,
        };
        
        this.pedidos.push(pedido);
    }

    // lista todos os pedidos realizados por um user
    listarPedidos(user) {
        console.log('\nPedidos Realizados');
        this.pedidos.forEach(pedido => {
            if (pedido.user.usuario == user.usuario) {
                console.log(`\nPedido: ${pedido.id}`);
                console.log(pedido.produtos);
                console.log(`Total: ${pedido.total}\nStatus: ${pedido.status}`);
            }
        });
    }

    // Alterar a quantidade total de pedidos (utiliza para criar novos ids de pedidos)
    alteraQuantPedidos() {
        return ++this.quantPedidos;
    }
}

module.exports = Pedidos