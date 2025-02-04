class Carrinho{
    constructor(){
        this.user = '';
        this.id = 0;
        this.carrinho =[]
        this.total = 0;
        this.status = 'pagamento pendente';
    }

    // Adiciona um produto ao carrinho
    adicionarProduto(codigo, nome, preco){
        this.carrinho.push({
            codigo: codigo,
            nome : nome,
            preco : preco
        })
        this.total += preco;
    }

    // Lista todos os produtos que já foram adicionados ao carrinho
    listarProdutos(){
        console.log('\nProdutos no carrinho:')
        if(this.carrinho.length == 0) {
            console.log('\tCarrinho Vazio\n')
        }
        else{
            for (let produto of this.carrinho){
                console.log(`\tCódigo: ${produto.codigo}  Nome: ${produto.nome}  Preço: ${produto.preco}`)
            }
            console.log(`Total: ${this.total.toFixed(2)}\nStatus: ${this.total.status}`)
        }
    }

    // Remove um produto com base em seu codigo
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