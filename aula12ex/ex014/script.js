function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'img/manha.png'
        document.body.style.background = '#ddaa73'
    }
    else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'img/tarde.png'
        document.body.style.background = '#ff9a40'
    }
    else {
        //BOA NOITE!
        img.src = 'img/noite.png'
        document.body.style.background = '#242d3b'
    }
}