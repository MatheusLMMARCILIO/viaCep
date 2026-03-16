const valueCep = document.getElementById('cepId')
const btnSubmit = document.getElementById('btnSubmit')
const form = document.querySelector('.submitForm')
const box = document.querySelector('.box')

btnSubmit.addEventListener("click", (event)=>{

    event.preventDefault()

    const valor = valueCep.value.trim()

    if(valor.length !== 8){
        alert("Digite um CEP válido com 8 números")
        return
    }

    form.style.display = 'flex'
    box.style.display = 'none'

    viaCep(valor)

})

async function viaCep(cep){

const street = document.querySelector('.Rua')
const neighborhood = document.querySelector('.Bairro')
const code = document.querySelector('.Cep')
const city = document.querySelector('.Cidade')

try{

    const api = `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(api)

    const dados = await response.json()

    if(dados.erro){
        alert("CEP não encontrado")
        return
    }

    street.value = dados.logradouro
    neighborhood.value = dados.bairro
    code.value = dados.cep
    city.value = dados.localidade

}catch(error){

    console.log(error)
    alert("Erro ao buscar CEP")

}

}