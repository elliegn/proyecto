const numeros = [
    "0", "00", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13",
    "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27",
    "28", "29", "30", "31", "32", "33", "34", "35", "36"
];

const colores = {
    "0": "green", "00": "green",
    "1": "red", "2": "black", "3": "red", "4": "black", "5": "red", "6": "black",
    "7": "red", "8": "black", "9": "red", "10": "black", "11": "black", "12": "red",
    "13": "black", "14": "red", "15": "black", "16": "red", "17": "black", "18": "red",
    "19": "red", "20": "black", "21": "red", "22": "black", "23": "red", "24": "black",
    "25": "red", "26": "black", "27": "red", "28": "black", "29": "black", "30": "red",
    "31": "black", "32": "red", "33": "black", "34": "red", "35": "black", "36": "red"
};

const casillasContainer = document.querySelector('.casillas');
numeros.forEach((num, index) => {
    const casilla = document.createElement('div');
    casilla.classList.add('casilla');
    casilla.textContent = num;
    casilla.style.backgroundColor = colores[num];

    const angulo = (360 / numeros.length) * index;
    casilla.style.transform = `rotate(${angulo}deg) translate(140px) rotate(-${angulo}deg)`;

    casillasContainer.appendChild(casilla);
});

let enMovimiento = false;

let giroTotal = 0; // Variable global para acumular giros

function girarRuleta() {
    if (enMovimiento) return;

    const numeroUsuario = document.getElementById('numero').value;
    if (!numeros.includes(numeroUsuario)) {
        alert("Número inválido. Ingresa un número entre 0-36 o 00.");
        return;
    }

    enMovimiento = true;
    const ruleta = document.querySelector('.ruleta');

    // Incrementar la rotación en cada intento para evitar que se quede estática
    giroTotal += 360 * 5; // Se acumula el giro base de 1800° en cada ejecución

    ruleta.style.transition = "transform 4s ease-out";
    ruleta.style.transform = `rotate(${giroTotal}deg)`;

    setTimeout(() => {
        const numeroGanador = numeros[Math.floor(Math.random() * numeros.length)];

        document.getElementById('resultado').textContent = `Número ganador: ${numeroGanador}`;

        setTimeout(() => {
            alert(numeroUsuario == numeroGanador ? "¡Felicidades! GANADO" : "Sigue intentándolo, tú puedes.");
            enMovimiento = false;
        }, 500);
    }, 4000);
}


function volverAlMenu() {
    window.location.href = "empresa.html"; // Modifica con la ruta correcta al menú principal
}
