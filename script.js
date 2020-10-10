function carregar() {
    var msgDia = window.document.getElementById("msg-dia")
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("img")
    
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    msg.innerHTML = `It's now ${hora} hours and ${min} minutes`

    if (hora >= 0 && hora <12) {
        //Bom dia
        msgDia.innerHTML = "Good Morning!"
        img.src = "img-morning.png"
        document.body.style.background = "#d3bf85"

    } else if ( hora >= 12 && hora < 18) {
        //Boa tarde
        msgDia.innerHTML = " Good Afternoon!"
        img.src = "img-afternoon.png"
        document.body.style.background = "#947c72bb"
    } else {
        //Boa noite
        msgDia.innerHTML = "Good Evening!"
        img.src = "img-evening.png"
        document.body.style.background = "#515154"
    }
} 
