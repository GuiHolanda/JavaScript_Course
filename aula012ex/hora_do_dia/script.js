function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
 

    if (hora > 0 && hora < 12) {
        msg.innerHTML = `Bom dia, agora são ${hora} horas`
        img.style.backgroundImage = "url('imagens/manha.jpg')"
        img.style.backgroundPosition = "bottom left"
        document.body.style.backgroundColor = "#fde687"
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde, agora são ${hora} horas`
        img.style.backgroundImage = "url('imagens/tarde.jpg')"
        img.style.backgroundPosition = "bottom left"
        document.body.style.backgroundColor = "#9cb8c6"
    } else {
        msg.innerHTML = `Boa noite, agora são ${hora} horas`
        img.style.backgroundImage = "url('imagens/noite.jpg')"
        img.style.backgroundPosition = "bottom left"
        document.body.style.backgroundColor = "#2a3b45"
    }
}
