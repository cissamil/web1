btn_ola = document.getElementById("botao-ola");
btn_mudarTitulo = document.getElementById("btn-mudar-titulo");
btn_mudarFrases = document.getElementById("btn-mudar-frases");


frase = document.getElementsByClassName("mensagem2"); 



btn_ola.addEventListener("click", ()=>{
    alert("OLÁ");
});

btn_mudarTitulo.addEventListener("click", ()=>{
    document.getElementById("titulo").textContent = "Título alterado com SUCESSO";
});

btn_mudarFrases.addEventListener("click", ()=>{
    for(i=0; i<frase.length; i++){
        frase[i].textContent = `Frase ${i + 1} alterada com SUCESSO`;
    }
});