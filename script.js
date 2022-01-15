//Variables para obtener los datos que mete el usuario
var diaFecha = document.getElementById("dia");
var mesFecha = document.getElementById("mes");
var añoFecha = document.getElementById("año");
var horasFecha = document.getElementById("horas");
var minutosFecha = document.getElementById("minutos");
var botonFecha = document.getElementById("getDate");
var actualizar = document.getElementById("update");

//Al presionar el botón, calcula el tiempo restante hasta la fecha introducida por el usuario
botonFecha.addEventListener('click', () => {
  diaFecha = diaFecha.value;
  mesFecha = mesFecha.value;
  añoFecha = añoFecha.value;
  horasFecha = horasFecha.value;
  minutosFecha = minutosFecha.value;
  
  console.log(diaFecha);
  console.log(mesFecha);
  console.log(añoFecha);
  console.log(horasFecha);
  console.log(minutosFecha);

  if (diaFecha > 28 && mesFecha == "Feb") {
    document.getElementById("countdownTimer").innerHTML = "Esa fecha no es posible";
  } else {
    if (horasFecha == "" && minutosFecha == "") {
      let fechaCompleta = `${mesFecha} ${diaFecha}, ${añoFecha} 00:00:00`;
      console.log(fechaCompleta);
      calcularTiempoRestante(fechaCompleta);
    } else {
      let fechaCompleta = `${mesFecha} ${diaFecha}, ${añoFecha} ${horasFecha}:${minutosFecha}:00`;
      console.log(fechaCompleta);
      calcularTiempoRestante(fechaCompleta);
    }
  }
});

actualizar.addEventListener('click', () => {
  location.reload();
});


function calcularTiempoRestante(fecha) {
  // Set the date we're counting down to
  var countDownDate = new Date(fecha).getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("countdownTimer").innerHTML = days + " d " + hours + " h "
    + minutes + " m " + seconds + " s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownTimer").innerHTML = "Se terminó el tiempo";
    }
  }, 1000);
}



function calcularTiempoRestante1() {
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 01, 2023 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("countdownTimer1").innerHTML = days + " d " + hours + " h "
    + minutes + " m " + seconds + " s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownTimer1").innerHTML = "EXPIRED";
    }
  }, 1000);
}

calcularTiempoRestante1();