const mudarCor = document.getElementById('mudarCor')
mudarCor.addEventListener('click', function() {

    document.body.style.backgroundColor = '#caf0f8'
})

function enviarForms(){
    var msg = document.getElementById("mensagem").value

    const newItem = document.createElement("li")
      newItem.innerHTML = "Mensagem: " +msg

    lista.appendChild(newItem);
    document.getElementById("mensagem").value = "";
}

function trocarImg(){
    var img = document.getElementById("img")

    if(img.src.endsWith("img/flor.png")){
        img.src = "img/abelha.png"
    }else{
        img.src = "img/flor.png"
    }

}

function inserirMsg(){
    var elemento = document.getElementById("mensagem_1")
    var mensagem_2 = "Olá, como vai?";

      elemento.innerHTML = mensagem_2;
}

function ocultar(){
    document.getElementById("ocultar").style.display = "none";
}