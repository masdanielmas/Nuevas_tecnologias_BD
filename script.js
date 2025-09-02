// ====== 1. Mostrar / Ocultar Resumen ======
function toggleResumen(id) {
  const resumen = document.getElementById(id);
  if (resumen.style.display === "none") {
    resumen.style.display = "block";
  } else {
    resumen.style.display = "none";
  }
}

// ====== 2. Buscador de Artículos ======
function buscarArticulos() {
  let input = document.getElementById("buscador").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    let texto = cards[i].innerText.toLowerCase();
    if (texto.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

// ====== 3. Contador de Visitas ======
function contarVisitas() {
  let visitas = localStorage.getItem("visitas") || 0;
  visitas++;
  localStorage.setItem("visitas", visitas);
  document.getElementById("contador").innerText = visitas;
}

// ====== Ejecutar contador al cargar ======
window.onload = contarVisitas;
