window.onload
var domElement = document.getElementById("alert-message");
var texto = domElement.innerHTML;
var falso = ""
var longitud = String(texto).length;

var caracteres = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";

for(var i = 0; i < longitud; i++){
	falso += caracteres.charAt(Math.floor(Math.random() * 37));
}
falso = String(falso);
domElement.innerHTML = falso
var i = 0;
function cambiar(){
    if(i <= longitud) {
   		falso = texto.substr(0,i) + falso.substr(i);
	  	console.log(falso);
		  domElement.innerHTML = falso;
      i++;
      setTimeout(cambiar, 50);
    }
};
// Esperar un segundo antes de iniciar
setTimeout(cambiar, 50000);