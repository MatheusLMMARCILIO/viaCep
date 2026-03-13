

const valueCep = document.getElementById('cepId')
const  btnSubmit = document.getElementById('btnSubmit')
const form = document.querySelector('.submitForm')
const box = document.querySelector('.box')


btnSubmit.addEventListener("click", ()=>{

    const valor = valueCep.value.trim()
    form.style.display = 'flex'
    box.style.display = 'none'

viaCep(valor)

})



async function viaCep(cep) {

const street = document.querySelector('.Rua')
const neighborhood = document.querySelector('.Bairro')
const code = document.querySelector('.Cep')
const city = document.querySelector('.Cidade')


try{
    const api = `https://viacep.com.br/ws/${cep}/json/`
const apiCode = await fetch(api)
const dados = await apiCode.json()

street.value = dados.logradouro
neighborhood.value = dados.bairro
code.value = dados.cep
city.value = dados.localidade


}catch(error) {
    console.log(error)
}



}
