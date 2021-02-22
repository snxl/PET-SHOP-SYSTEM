module.exports = [{
    name:'lista',
    type: 'list',
    message: 'Escolha uma das opções',
    choices: [{
        name: 'Cadastrar novo PET',
        value: 0
    },{
        name: "Listar PET's",
        value: 1
    },{
        name:`Busca por nome


`,
        value: 2
    }
    ]
},{
    name: 'nomeDoPet',
    type: 'input',
    message: 'Digite o nome do seu Pet:',
    when: (resposta) => resposta.lista === 0 
},{
    name: 'nomeDaRaca',
    type: 'input',
    message: 'Digite o nome da raça de seu Pet:',
    when: (resposta) => resposta.lista === 0
},{
    name: 'nomeDoDono',
    type: 'input',
    message: 'Digite o nome do Dono:',
    when: (resposta) => resposta.lista === 0
},{
    name: 'listaPet',
    type: 'input',
    message: 'Escreva o nome do PET que está buscando',
    default:"",
    when: (resposta) => resposta.lista === 2

}]
