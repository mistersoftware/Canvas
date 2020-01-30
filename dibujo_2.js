var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var xxx = parseInt(texto.value);
  var lineas = xxx;
  var l = 0;
  var yi, xf;
  var colorcito = "#004466"
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("LInea " + l);
  }

  dibujarLinea(colorcito, 1, 1, 1, 300);
  dibujarLinea(colorcito, 1, 299, 299, 299);
}
