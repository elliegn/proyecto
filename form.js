function updateClock() {
    const now = new Date();
    const options = { timeZone: 'America/Tijuana', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const formatter = new Intl.DateTimeFormat('es-ES', options);
    document.getElementById('clock').textContent = formatter.format(now);
  }

  setInterval(updateClock, 1000);
  updateClock();

  function guardarYRedirigir() {
    const campos = ['nombre', 'edad', 'puesto', 'sangre', 'curp', 'postal'];
    let datos = {};

    campos.forEach(id => {
      const valor = document.getElementById(id).value;
      if (valor) {
        datos[id] = valor;
        localStorage.setItem(id, valor);
      }
    });

    console.log("Datos guardados:", datos);

    // Redirigir al recibo con los datos en la URL
    const url = `tikey.html?nombre=${encodeURIComponent(datos.nombre)}&edad=${encodeURIComponent(datos.edad)}&puesto=${encodeURIComponent(datos.puesto)}&sangre=${encodeURIComponent(datos.sangre)}&curp=${encodeURIComponent(datos.curp)}&postal=${encodeURIComponent(datos.postal)}`;
    window.location.href = url;
  }

  window.onload = function() {
    ['nombre', 'edad', 'puesto', 'sangre', 'curp', 'postal'].forEach(id => {
      const valor = localStorage.getItem(id);
      if (valor) document.getElementById(id).value = valor;
    });
  };