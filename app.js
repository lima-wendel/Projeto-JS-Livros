// importando a biblioteca
const livros = require('./database')


// input: escolhendo o livro por categoria
const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro? S/N')

//se sim, exibir categorias disponíveis e perguntar qual categoria deseja escolher



// se não, exibir todos os livros em ordem crescente pela quantidade de páginas