let num = document.getElementById('num')
let list = document.getElementById('list')
let result = document.getElementById('result')
let valores = []

function isNumber (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else { return false}
}

function inList (n, list) {
    if (list.indexOf(Number(n)) != -1) {
        return true
    } else {return false}
}

function adicionar() {
    if (isNumber(num.value) && !inList(num.value, valores)) {    
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        result.innerHTML = ""

    } else { window.alert ('Valor inválido ou já encontrado na lista') }
    num.value = ""
    num.focus()
}

function finalizar () {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        //let max = Math.max(...valores)
        //let min = Math.min(...valores)
        let max = valores[0]
        let min = valores[0]
        let sum = valores[0]
        let mean = valores[0]
        for(let pos in valores) {
            sum += valores[pos]
            if (valores[pos] > max){
                max = valores[pos]
            } else if (valores[pos] < min) {
                min = valores[pos] 
            }
        }
        result.innerHTML = `<p>Ao todo temo ${tot} números cadastrados</p>`
        result.innerHTML += `<p>O maior número da lista é o ${max}</p>`
        result.innerHTML += `<p>O menor número da lista é o ${min}</p>`
        result.innerHTML += `<p>A soma dos valores é ${sum}</p>`
        result.innerHTML += `<p>E a média deles é ${mean}</p>`
    }
}