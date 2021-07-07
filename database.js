const livros = [
    {
        id: 1,
        nome: "Digital Minimalism",
        autor: "Cal Newport",
        categoria: "Produtividade e estilo de vida",
        paginas: 254,
        recomenda: false,
        leu: false
    },
    {
        id: 2,
        nome: "O Desejado de Todas as Nações",
        autor: "Ellen G White",
        categoria: "Religião",
        paginas: 600,
        recomenda: true,
        leu: true
    },
    {
        id: 3,
        nome: "JavaScript Guia do Programador",
        autor: "Mauricio Samy Silva",
        categoria: "Tecnologia",
        paginas: 580,
        recomenda: true,
        leu: true
    },
    {
        id: 4,
        nome: "ALgoritmos para viver",
        autor: "Brian Christian",
        categoria: "Tecnologia",
        paginas: 412,
        recomenda: true,
        leu: true
    }
]
// o nodeJS peermite a exportação desses dados
module.exports = livros