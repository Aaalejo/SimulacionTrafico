# SimulacionDardos

Archivo HTML (index.html)
Este archivo define la estructura de la página web y enlaza los archivos de estilo y script.

<!DOCTYPE html>: Define el tipo de documento como HTML5.

<html lang="en">: Define el lenguaje de la página como inglés.

<head>: Contiene metadatos y enlaces a archivos externos.

<meta charset="UTF-8">: Especifica el juego de caracteres UTF-8.
<title>dardos</title>: Define el título de la página.
<link rel="stylesheet" href="./style.css">: Enlaza el archivo de estilo CSS.
<body>: Contiene el contenido visible de la página.

<div class="game-container">: Contenedor principal del juego.
<div class="dartboard">: Contenedor del tablero de dardos.
Elementos <div> para representar los anillos y la diana.
<div class="dart">: Representación visual del dardo.
<div class="controls">: Contenedor de los controles del juego.
<button class="throw-button">Lanzar Dardo</button>: Botón para lanzar el dardo.
<div class="result">: Contenedor de mensajes y puntuación.
<div class="result-message">: Mensaje de resultado.
<div class="score">: Puntuación actual.
<script src="./script.js"></script>: Enlaza el archivo de script JavaScript.

Archivo JavaScript (script.js)
Este archivo contiene el código que controla la lógica del juego de dardos.

const dart = document.querySelector('.dart');: Selecciona el elemento visual del dardo.

const target = document.querySelector('.target');: Selecciona el área de destino en el tablero.

const resultMessage = document.querySelector('.result-message');: Selecciona el elemento para mostrar mensajes de resultado.

const scoreDisplay = document.querySelector('.score');: Selecciona el elemento para mostrar la puntuación actual.

document.querySelector('.throw-button').addEventListener('click', throwDart);: Agrega un evento de clic al botón "Lanzar Dardo" que ejecuta la función throwDart.

function throwDart() { ... }: Función que maneja el lanzamiento del dardo.
Obtiene la posición y dimensiones del área de destino.
Genera coordenadas X e Y aleatorias dentro del área de destino.
Calcula la distancia al centro del área de destino.
Calcula la puntuación y muestra el mensaje de resultado.
Actualiza la posición visual del dardo y lo muestra en la página.
function calculateDistance(x1, y1, x2, y2) { ... }: Función que calcula la distancia entre dos puntos en el tablero.

Archivo de Estilos (style.css)
Este archivo contiene reglas de estilo que determinan la apariencia de la página web del juego de dardos.

Con esta estructura y funcionalidad, el código crea una página web interactiva de un juego de dardos donde el usuario puede lanzar un dardo y obtener una puntuación en función de su precisión en el área de destino. El diseño y los estilos están definidos en el archivo CSS, y la lógica del juego se encuentra en el archivo JavaScript.
