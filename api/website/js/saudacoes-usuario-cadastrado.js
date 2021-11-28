window.addEventListener('load', function () {
    if (sessionStorage.NOME_USUARIO) {
        document.getElementById("NOME_USUARIO").innerText += "Olá " + sessionStorage.NOME_USUARIO;
    }
})