// ============================================
// 1. REFERENCIAS AL DOM
// ============================================
const botonConsultar = document.querySelector("#consultar");
const botonSwap = document.querySelector("#swap");
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

// Misión 06: Evento para intercambiar divisas
if (botonSwap) {
  botonSwap.addEventListener("click", intercambiarDivisas);
}

// ============================================
// 3. FUNCIONES DE LA APLICACIÓN
// ============================================

/**
 * Misión 06: Intercambia los valores de los selectores de origen y destino.
 */
function intercambiarDivisas() {
  const temp = selectOrigen.value;
  selectOrigen.value = selectDestino.value;
  selectDestino.value = temp;
}

/**
 * Consulta la API y calcula la conversión.
 */
async function obtenerTipoCambio() {
  const cantidad = Number(inputCantidad.value);

  // Misión 07: Validación de entradas
  if (isNaN(cantidad) || cantidad <= 0) {
    textoResultado.textContent = "Por favor, ingresa una cantidad válida mayor a cero.";
    return;
  }

  const origen = selectOrigen.value.toLowerCase();
  const destino = selectDestino.value.toLowerCase();

  const url = `https://api.frankfurter.dev/v2/rate/${origen}/${destino}`;

  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    const tasa = datos.rate;
    const conversion = cantidad * tasa;

    textoResultado.textContent = `${cantidad} ${origen.toUpperCase()} = ${conversion.toFixed(2)} ${destino.toUpperCase()}`;

  } catch (error) {
    console.error("Error al consultar la API:", error);
    textoResultado.textContent = "Error al obtener el tipo de cambio.";
  }
}