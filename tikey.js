function obtenerDatos() {
    const params = new URLSearchParams(window.location.search);
    document.getElementById("recibo-nombre").textContent = params.get("nombre") || "No ingresado";
    document.getElementById("recibo-edad").textContent = params.get("edad") || "No ingresado";
    document.getElementById("recibo-puesto").textContent = params.get("puesto") || "No ingresado";
    document.getElementById("recibo-sangre").textContent = params.get("sangre") || "No ingresado";
    document.getElementById("recibo-curp").textContent = params.get("curp") || "No ingresado";
    document.getElementById("recibo-postal").textContent = params.get("postal") || "No ingresado";

    // Obtener fecha y hora desde la URL
    document.getElementById("fecha").textContent = params.get("fecha") || "Fecha no registrada";
    document.getElementById("hora").textContent = params.get("hora") || "Hora no registrada";
}

obtenerDatos();