function enviar() {

	const requisicao = new XMLHttpRequest();	
    requisicao.addEventListener("load", listener);
    requisicao.open("GET", "https://api.portaldatransparencia.gov.br/api-de-dados/permissionarios?pagina=1");
    requisicao.setRequestHeader("chave-api-dados", "key");
    requisicao.send();   

}

function listener() {
   document.getElementById("resp").innerHTML = this.responseText;
   document.getElementById("resp").style.display = 'block';
   JSON.stringify(resp.load);

   
}