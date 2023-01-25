
function verificar() {
    var titulo = document.getElementById('msg')
    var img = document.getElementById("img")

    var hora = new Date()
    var h = hora.getHours() 

    
    if (h >= 0 && h < 12) {
        titulo.innerHTML = `Agora são ${h} horas da manhã.`
        img.src = "/img/manha.jpg";
        document.body.style.background = '#F5DEB3'
    }
    if (h >= 12 && h < 18) {
        titulo.innerHTML = `Agora são ${h} horas da tarde.`
        img.src = "/img/foto tarde.jpg";
        document.body.style.background = '#F4A460'
    }
    if (h >= 18) {
        titulo.innerHTML = `Agora são ${h} horas da noite.`
        img.src = "/img/foto noite.jpg";
        document.body.style.background = '	#8B4513'
    }
    if (h >= 00 && h < 5) {
        titulo.innerHTML = `Agora são ${h} horas da madrugada.`
        img.src = "https://github.com/emanuelvictor1/Hora-do-dia/blob/master/img/foto%20madrugada.jpg";
        document.body.style.background = '#363636'
        
    }

}



