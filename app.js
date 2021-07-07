// importando a biblioteca
const livros = require('./database')

// input: escolhendo o livro por categoria
//se sim, exibir categorias disponíveis e perguntar qual categoria deseja escolher
// se não, exibir todos os livros em ordem crescente pela quantidade de páginas

const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro? S/N')
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade e estilo de vida', '/ Religião', '/ Tecnologia')

    const entradaCategoria = readline.question('Qual categoria você escolhe?')
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria) 
    console.table(retorno)
}

