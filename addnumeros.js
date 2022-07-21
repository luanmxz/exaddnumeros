var mulnum = []
var divres = document.querySelector('div#res')

function addNumber() {
    let num = Number(document.querySelector('#num').value)
    divres.style.display = 'none'
    if (num < 1 || num > 100 || num.length === 0) {
        alert('Favor inserir os dados corretamente')
    } else if (mulnum.indexOf(num) !==  -1){
        alert('Este número já está na lista de números adicionados!')
    } else {
        mulnum.push(num)
        let tag = document.createElement('option')
        let text = document.createTextNode(`Valor ${num} adicionado.`)
        tag.appendChild(text)
        let element = document.getElementById('selectdata')
        element.appendChild(tag)
    }
}

function calcularDados() {
    var ma = 0
    var me = 0
    var sum = 0    
    var qtdnum = document.getElementById("qtdnum")
    var maior = document.getElementById("maior")
    var menor = document.getElementById("menor")
    var soma = document.getElementById("soma")
    var medi = document.getElementById("media")
    
    if (mulnum.length == 0){
        alert('Campos vazios!')
    }else {
        for (let c = 0; c < mulnum.length; c++) {
            if (c == 0){
                ma = mulnum[c]
                me = mulnum[c]
            } else {
                if (mulnum[c] > ma){
                    ma = mulnum[c]
                } else if (mulnum[c] < me){
                    me = mulnum[c]
                } 
            } sum = sum + mulnum[c]
        } 

        var media = sum / mulnum.length
        qtdnum.innerHTML = `Ao todo temos ${mulnum.length} números!`
        maior.innerHTML = `O maior dos números adicionados foi ${ma}`
        menor.innerHTML = `O menor dos números adicionados foi ${me}`
        soma.innerHTML = `A soma entre todos os números adicionados é ${sum}`
        medi.innerHTML = `A média de todos os números adicionados é ${media}`
        divres.style.display = 'block'
    }
}
