class Catalogo {
    constructor(){
        this.produtos = {
            'p1' : {nome :'sabonete', preco: 2.40, estoque: 10},
            'p2' : {nome :'licor', preco: 10.90, estoque: 5},
            'p3' : {nome :'esponja', preco: 1.90, estoque: 9},
            'p4' : {nome :'leite', preco: 7.50, estoque: 12},
            'p5' : {nome :'azeite', preco: 9.90, estoque: 1}
        };
    }

    // Lista todos os produtos cadastrados
    listarProdutos(){
        console.log('\nCatálogo de Produtos');
        for (let produto in this.produtos) {
            console.log(`\n\tCódigo: ${produto} Nome: ${this.produtos[produto].nome} R$ ${this.produtos[produto].preco}  Estoque: ${this.produtos[produto].estoque}`);
        }
    }

    // Verifica o estoque de um pedido especifico
    verificaEstoque(codigo){
        return this.produtos[codigo] ? this.produtos[codigo].estoque > 0 : false;
    }

    // Reduz o estoque de um pedido em -1 quando necessário
    reduzEstoque(codigo){
        this.produtos[codigo].estoque -= 1;
    }
}

module.exports = Catalogo;