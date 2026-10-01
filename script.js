function registrarMaquina() {
  // 1. Obtener los datos ingresados
  const nombre = document.getElementById("nombre").value.trim();
  const tipo = document.getElementById("tipo").value;
  const horas = document.getElementById("horas").value;

  if (nombre === "") {
    alert("Por favor, ingresá el nombre de la máquina.");
    return;
  }

  console.log("Nombre:", nombre);
  console.log("Tipo:", tipo);
  console.log("Horas de uso:", horas);

  const resultado = document.getElementById("resultado");
  resultado.style.display = "block";
  resultado.innerHTML =
    "<p><strong>Nombre:</strong> " + nombre + "</p>" +
    "<p><strong>Tipo:</strong> " + tipo + "</p>" +
    "<p><strong>Horas de uso:</strong> " + horas + "</p>" +
    '<button onclick="borrarRegistro()">Borrar Registro</button>';
}

function borrarRegistro() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  resultado.style.display = "none";
}

function cambiarPagina(pagina) {
  window.location.href = pagina;
}
