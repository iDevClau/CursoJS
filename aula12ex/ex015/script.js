function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }

    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'img/homem-crianca.png')
            }
            else if (idade < 25) {
                //JOVEM
                img.setAttribute('src', 'img/homem-jovem.png')
            }
            else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'img/homem-adulto.png')
            }
            else {
                //IDOSO
                img.setAttribute('src', 'img/homem-velho.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'img/mulher-crianca.png')
            }
            else if (idade < 25) {
                //JOVEM
                img.setAttribute('src', 'img/mulher-jovem.png')
            }
            else if (idade < 50) {
                //ADULTA
                img.setAttribute('src', 'img/mulher-adulta.png')
            }
            else {
                //IDOSA
                img.setAttribute('src', 'img/mulher-velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}