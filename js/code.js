// ============================================
// 1. REFERENCIAS AL DOM
// ============================================
const botonConsultar = document.querySelector("#consultar");
const textoResultado = document.querySelector("#resultado");
const inputCantidad = document.querySelector("#cantidad");
const selectOrigen = document.querySelector("#origen");
const selectDestino = document.querySelector("#destino");

// ============================================
// 2. EVENTOS
// ============================================
if (botonConsultar) {
  botonConsultar.addEventListener("click", obtenerTipoCambio);
}

// ============================================
// 3. FUNCIONES DE LA APLICACIÓN
// ============================================
async function obtenerTipoCambio() {
  const cantidad = Number(inputCantidad.value);
  const origen = selectOrigen.value.toLowerCase();
  const destino = selectDestino.value.toLowerCase();

  // Misión 04: Construcción dinámica de la URL con template literals
  const url = `https://api.frankfurter.dev/v2/rate/${origen}/${destino}`;

  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    // Misión 05: Cálculo de la conversión y actualización del DOM
    const tasa = datos.rate;
    const conversion = cantidad * tasa;

    textoResultado.textContent = `${cantidad} ${origen.toUpperCase()} = ${conversion.toFixed(2)} ${destino.toUpperCase()}`;

  } catch (error) {
    console.error("Error al consultar la API:", error);
    textoResultado.textContent = "Error al obtener el tipo de cambio.";
  }
}