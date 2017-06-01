/*
 * Este é o JavaScript Scratchpad.
 *
 * Escreva JavaScript, e depois clique com o botão direito ou selecione no menu Execução:
 * 1. Executar: para avaliar o texto selecionado (Cmd-R),
 * 2. Inspecionar: para abrir o resultado em uma janela de inspeção (Cmd-I)
 * 3. Visualizar: para inserir o resultado em um comentário depois da seleção. (Cmd-L)
 */

var cavalo = function(){
this.element = document.getElementById ("cavalo")
this.altura = 229
this.largura = 358
this.quantidadeDeQuadros = 11
this.correr = function (){
    this.element.style.backgroundPosition = this.quantidadeDeQuadros --* this.largura + "px 0px"
     if(this.quantidadeDeQuadros ==0)
       this.quantidadeDeQuadros =11
  }
}

var $cavalo = new cavalo ()
setInterval(function(){$cavalo.correr()},150)