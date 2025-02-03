class Pedidos {
    constructor() {
        this.pedidos = [];
        this.quantPedidos = 0;
    }

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

    alteraQuantPedidos() {
        return ++this.quantPedidos;
    }
}

module.exports = Pedidos