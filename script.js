function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
    var minuto = addZero(data.getMinutes());

    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#dca360'
        msg2.innerHTML = 'Tenha um Bom Dia!'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
        msg2.innerHTML = 'Tenha uma Boa Tarde!'
    } else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#58425f'
        msg2.innerHTML = 'Tenha uma Boa Noite!'
    }


}