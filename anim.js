// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hola mi terroncito.", time: 10 },
  { text: "En este dia de San Valentín,", time: 13 },
  { text: "quiero recordarte lo agradecido que estoy", time: 16 },
  { text: "por tenerte en mi vida.", time: 19 },
  { text: "Las flores amarrillas", time: 21 },
  { text: "siempre han simbolizado el amor y la amistad,", time: 23 },
  { text: "y tu, mi amor,", time: 27 },
  { text: "eres la personificación de estos sentimientos.", time: 32 },
  { text: "Cada momento esta lleno de luz y color,", time: 35 },
  { text: "Y no puedo evitar sonreir", time: 38 },
  { text: "en pensar en todos los recuerdos maravillosos", time: 41 },
  { text: "que hemos creado juntos.", time: 46 },
  { text: "Al igual que las flores amarillas", time: 48 },
  { text: "iluminan el mundo con su brillante color,", time: 52 },
  { text: "tu iluminas mi vida con tu amor,", time: 55 },
  { text: "tu risa y tu belleza.", time: 58 },
  { text: "No solo eres mi novia,", time: 60 },
  { text: "sino también mi mejor amiga", time: 63 },
  { text: "y mi confidente.", time: 65 },
  { text: "Te amo con todo mi corazón", time: 67 },
  { text: "y estoy emocionado", time: 69 },
  { text: "por todos los dias", time: 71 },
  { text: "que tenemos adelante.", time: 73 },
  { text: "Feliz San Valentín mi amor,", time: 75 },
  { text: "Gracias por ser mi sol", time: 77 },
  { text: "en mis dias nublados", time: 79 },
  { text: "y por compartir esta aventura.", time: 81 },
  { text: "que es la vida.", time: 83},
  { text: "Con todo mi amor,", time: 85},
  { text: "Tu Zapito", time: 87},
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);