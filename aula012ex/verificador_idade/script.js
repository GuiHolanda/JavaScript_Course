function verificar () {
    var ano = Number(document.getElementById('ano').value)
    var sex = document.getElementsByName('sex')
    var result = document.getElementById('result')
    var anoHoje = new Date().getFullYear()
    var img = document.getElementById('img').style
    
    if (ano == 0 || ano > anoHoje){
       window.alert('[ERRO!] Verifique o ano preenchido')
    } else {
        var idade = anoHoje - ano
        var gen = ''
        img.display = "block"
        if (sex[0].checked) {
            gen = 'Homem'
            if (idade >=0 && idade < 10) {
                img.backgroundImage = "url('images/menino.jpg')"
                img.backgroundPosition = "center center"
            } else if (idade < 21) {
                img.backgroundImage = "url('images/jovem_h.jpg')"
                img.backgroundPosition = "top center"
            } else if (idade < 45 ) {
                img.backgroundImage = "url('images/homem.jpg')"
                img.backgroundPosition = "center center"
            } else {
                img.backgroundImage = "url('images/idoso.jpg')"
                img.backgroundPosition = "center center"
            }
        } else {
            gen = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.backgroundImage = "url('images/menina.jpg')"
                img.backgroundPosition = "center center"
            } else if (idade < 21) {
                img.backgroundImage = "url('images/jovem_m.jpg')"
                img.backgroundPosition = "top center"
            } else if (idade < 45 ) {
                img.backgroundImage = "url('images/mulher.jpg')"
                img.backgroundPosition = "center center"
            } else {
                img.backgroundImage = "url('images/idosa.jpg')"
                img.backgroundPosition = "center right"
            }
        }
        result.innerText = `${gen} com ${idade} anos de idade.`
    }

}