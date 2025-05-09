document.addEventListener("DOMContentLoaded", () => {
    // Configuración de la gráfica
    const ctx = document.getElementById('stockChart').getContext('2d');
    const valorActualEl = document.getElementById('valorActual');
    const victoriaSound = document.getElementById('victoriaSound');
  
    const data = {
      labels: Array.from({ length: 20 }, (_, i) => `PZN${i + 1}`),
      datasets: [{
        label: 'Valor PZN',
        data: Array.from({ length: 20 }, () => 340000 + Math.random() * 10000),
        borderColor: '#00ff88',
        backgroundColor: 'rgba(0, 255, 136, 0.2)',
        fill: true,
        tension: 0.3,
        pointRadius: 0
      }]
    };
  
    const stockChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        animation: {
          duration: 1000
        },
        scales: {
          y: {
            ticks: { color: '#00ff88' },
            grid: { color: 'rgba(0, 255, 136, 0.1)' }
          },
          x: {
            ticks: { color: '#00ff88' },
            grid: { display: false }
          }
        },
        plugins: {
          legend: {
            labels: { color: '#00ff88' }
          }
        }
      }
    });
  
    setInterval(() => {
      const newValue = 340000 + Math.random() * 10000;
      data.labels.push(`PZN${data.labels.length + 1}`);
      data.labels.shift();
      data.datasets[0].data.push(newValue);
      data.datasets[0].data.shift();
      stockChart.update();
  
      const lastValue = Math.round(data.datasets[0].data.at(-1));
      valorActualEl.innerHTML = `Valor actual: <strong>$${lastValue.toLocaleString()} USD</strong>`;
    }, 2000);
  
    // Manejo de pasos
    const pasos = document.querySelectorAll(".paso");
    const siguientePaso1 = document.getElementById("siguientePaso1");
    const siguientePaso2 = document.getElementById("siguientePaso2");
    const siguientePaso3 = document.getElementById("siguientePaso3");
    const ticketButton = document.getElementById("ticket");
    const mensajeTicket = document.getElementById("mensajeTicket");
  
    let metodoSeleccionado = "";
  
    function mostrarPaso(indice) {
      pasos.forEach((paso, i) => {
        paso.style.display = i === indice ? "block" : "none";
      });
    }
  
    // Mostrar el primer paso al cargar la página
    mostrarPaso(0);
  
    siguientePaso1.addEventListener("click", () => {
      const cantidadInput = document.getElementById("cantidad");
      if (cantidadInput.value > 0) {
        mostrarPaso(1);
      } else {
        alert("Por favor, ingresa una cantidad válida.");
      }
    });
  
    siguientePaso2.addEventListener("click", () => {
      const metodo = document.querySelector('input[name="pago"]:checked');
      if (metodo) {
        metodoSeleccionado = metodo.value;
        mostrarPaso(2);
  
        // Mostrar los detalles del método seleccionado
        document.querySelectorAll(".detalles").forEach((det) => det.style.display = "none");
        document.getElementById(`detalles${metodoSeleccionado.charAt(0).toUpperCase() + metodoSeleccionado.slice(1)}`).style.display = "block";
      } else {
        alert("Por favor, selecciona un método de pago.");
      }
    });
  
    ticketButton.addEventListener("click", () => {
      mensajeTicket.style.display = "block";
    });
  
    siguientePaso3.addEventListener("click", () => {
      mostrarPaso(3);
      victoriaSound.currentTime = 0;
      victoriaSound.play();
    });
  });