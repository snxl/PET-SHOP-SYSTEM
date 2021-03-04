const petShop = require('./petShop')
const inquirer = require('inquirer')
const fs = require('fs')
const { forEach } = require('./petShop')

function cadastro() {
    inquirer.prompt(petShop).then((resposta) => {
        if (resposta.lista === 0) {
             
            let jsonAnimais = fs.readFileSync('./pets.json')
                var objetoDoJson = JSON.parse(jsonAnimais)
                
                function Animais(nomeDoPet, raca, nomeDono) {
                    this.nomeDoPet = nomeDoPet
                    this.raca = raca
                    this.nomeDoDono = nomeDono
                    this.identificador = objetoDoJson.arrayID[objetoDoJson.arrayID.length - 1]
                }

                var animal = new Animais(resposta.nomeDoPet.toUpperCase(), resposta.nomeDaRaca.toUpperCase(), resposta.nomeDoDono.toUpperCase())

                objetoDoJson.arrayID.push(objetoDoJson.arrayID[objetoDoJson.arrayID.length - 1] + 1)
                
                objetoDoJson.arrayPet.push(animal)

                let gravar = JSON.stringify(objetoDoJson,null,2)

                let writePets = fs.writeFileSync('./pets.json', gravar)

        }else if(resposta.lista === 1){
            let jsonInteiro = fs.readFileSync('./pets.json')

                var carregarJson = JSON.parse(jsonInteiro)
                
                console.clear()

                console.table(carregarJson.arrayPet)

                return cadastro()

        } else if(resposta.lista === 2){
            let procurarJson = fs.readFileSync('./pets.json')

                var jsonPorNome = JSON.parse(procurarJson)

                let {arrayPet} = jsonPorNome

                let inputNome = resposta.listaPet.toUpperCase()

                for (let pesquisa of arrayPet) {
                    for (let atributo in pesquisa) {
                        let {nomeDoPet, raca, nomeDoDono, identificador} = pesquisa
                        if(nomeDoPet == inputNome){
                            console.log(pesquisa[atributo])
                        }
                    }
                }
                return cadastro()
        }
        cadastro()
    })
}
cadastro()


