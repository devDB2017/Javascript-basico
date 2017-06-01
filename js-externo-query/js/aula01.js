
// var botao = document.querySelector("#clicar").addEventListener("click", soma);

function soma(){
	var n1 = parseInt(document.querySelector("#n1").value);
	var n2 = parseInt(document.querySelector("#n2").value);
	var soma = n1+n2;
	// document.querySelector("#resultado").value = soma;
	console.log(soma);
	alert(soma);
}