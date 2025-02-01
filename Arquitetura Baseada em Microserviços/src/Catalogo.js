export default class Catalogo {
    constructor(){
        this.produtos = {
            'p1' : {nome :'sabonete', preco: 2.40, estoque: 10},
            'p2' : {nome :'licor', preco: 109.90, estoque: 7},
            'p3' : {nome :'esponja', preco: 1.90, estoque: 9},
            'p4' : {nome :'leite', preco: 7.50, estoque: 12},
            'p5' : {nome :'azeite', preco: 49.90, estoque: 7}
        };
    }

    listarProdutos(){
        console.log('Catálogo de Produtos');
        for (let produto in this.produtos) {
            console.log(`\n\tCódigo: ${produto} Nome: ${produto.nome} R$ ${produto.preco}  Estoque: ${produto.estoque}`);
        }
    }

    verificaEstoque(codigo){
        return this.produto[codigo] ? this.produtos[codigo].estoque == 0 : false;
    }

    reduzEstoque(codigo){
        this.produto[codigo].estoque -= 1;
    }


}