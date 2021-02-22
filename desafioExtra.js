const petShop = require('./petShop')
const inquirer = require('inquirer')
const fs = require('fs')
const { forEach } = require('./petShop')

function cadastro() {
    inquirer.prompt(petShop).then((resposta) => {
        if (resposta.lista === 0) {
             
            fs.readFile('./pets.json', 'utf-8', (err, jsonAnimais) => {
                if (err) throw err;

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

                fs.writeFile('./pets.json',JSON.stringify(objetoDoJson,null,2), 'utf-8', err => {
                if(err) throw err
            })
            })
        }else if(resposta.lista === 1){
            fs.readFile('./pets.json', 'utf-8', (err, jsonInteiro) =>{

                var carregarJson = JSON.parse(jsonInteiro)
                
                console.clear()

                console.table(carregarJson.arrayPet)

                return cadastro()
            })
        } else if(resposta.lista === 2){
            fs.readFile('./pets.json', 'utf-8', (err, procurarJson) =>{
                if(err) throw err

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
            })
        }
        cadastro()
    })
}
cadastro()


