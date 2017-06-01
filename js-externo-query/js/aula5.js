		//Programa: armazena hora é diz o período
		//Autor: Letícia e Rafael
		//Versão: 1.0
		function menor(){
		var h = parseInt(document.querySelector("#h").value);
		if(h>=6 && h<=12){
		alert("É manhã");
		
		}else if(h>=13 && h<=18){
		alert("É tarde");
		
		}else if(h>=19 && h<=23){
		alert("É noite");
		
		}else
		alert("Inválido");
		}
	