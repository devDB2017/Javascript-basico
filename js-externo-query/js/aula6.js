		//Programa: Mostra se é menor ou maior que 10
		//Autor: Letícia e Rafael
		//Versão: 1.0
		function maioroumenor(){
		var n = parseFloat(document.querySelector("#n").value);
		if(n>10){
			alert("É maior que 10");

		}else if(n<10){
			alert("É menor que 10");

		}else{
			alert("Inválido");
		}
		}