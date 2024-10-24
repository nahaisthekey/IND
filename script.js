// Definir la fecha para la cuenta regresiva
var countDownDate = new Date("Oct 31, 2024 00:00:00").getTime();

// Actualizar la cuenta regresiva cada 1 segundo
var countdownfunction = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Cálculos para días, horas, minutos y segundos
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar el resultado
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Cuando la cuenta regresiva termine
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown").innerHTML = "¡Lanzado!";
  }
}, 1000);
