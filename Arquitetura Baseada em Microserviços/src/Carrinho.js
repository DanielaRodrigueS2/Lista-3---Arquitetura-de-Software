class Carrinho{
    constructor(){
        this.carrinho =[]
        this.total = 0;
    }

    adicionarProduto(codigo, nome, preco){
        this.carrinho.push({
            codigo: codigo,
            nome : nome,
            preco : preco
        })
        this.total += preco;
    }

    listarProdutos(){
        for (let produto of this.carrinho){
            console.log(`\n\tCódigo: ${produto.codigo} nome: ${produto.nome} preço: ${produto.preco}`)
        }
    }

    removerProduto(codigo) {
        for (let i = 0; i < this.carrinho.length; i++) {
            if (this.carrinho[i].codigo === codigo) {
                this.total -= this.carrinho[i].preco;
                this.carrinho.splice(i, 1); 
                console.log('\n\tProduto Removido');
                return;
            }
        }
        console.log('\n\tProduto não encontrado');
    }
}

module.exports = Carrinho;