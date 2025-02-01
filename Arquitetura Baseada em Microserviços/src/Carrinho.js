export default class Carrinho{

    constructor(){
        this.carrinho =[]
    }

    adicionarProduto(codigo, quantidade, nome, preco){
        this.carrinho.append({
            codigo: codigo, 
            quantidade : quantidade, 
            nome : nome,
            preco : preco
        })
    }

    listarProdutos(){
        for (let produto in this.carrinho){
            console.log(`\n\tCódigo: ${produto.codigo} nome: ${produto.nome} preço: ${produto.preco} preçoTotal: ${produto.quantidade * (produto.preco)} `)
        }
    }

    removerProduto(codigo){
        for(let produto in this.carrinho){
            if(produto.codigo == codigo){
                this.carrinho.push(produto)
                console.log('\n\tProduto Removido')
                return
            }
        }
        console.log('\n\tProduto não encontrado')
        return
    }

}