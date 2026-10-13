# Currency Explorer · Starter Project

## Integrantes
- Leonardo Rodríguez Gutiérrez (Control: 23030391)
- Oscar Uriel Montalvo Cano (Control: 22030755)

## Pair Programming
## Pair Programming
| Misión | Driver | Navigator | Commit / evidencia |
|---|---|---|---|
| 01 | Leonardo | Uriel | `ecf6cf7` |
| 02 | Leonardo | Uriel | `62942b6` |
| 03 | Leonardo | Uriel | `62942b6` |
| 04 | Uriel | Leonardo | `e3ed043` |
| 05 | Uriel | Leonardo | `e3ed043` |
| 06 | Uriel | Leonardo | `bfeb40e` |
| 07 | Uriel | Leonardo | `bfeb40e` |
| 08 | Leonardo | Uriel | `9bfe9d0` |

## Objetivo
Completar una aplicación frontend que consuma Frankfurter API para convertir divisas y demostrar comprensión de eventos, DOM, `fetch()`, JSON, asincronía, validación y manejo de errores.

## Ejecución
1. Clona o descarga el repositorio.
2. Abre la carpeta en VS Code.
3. Ejecuta `index.html` con Live Server o abriéndolo directamente en un navegador web.
4. Abre DevTools → Console y Network para observar el comportamiento de las peticiones.

## API
Endpoint de referencia:
`https://api.frankfurter.dev/v2/rate/{origen}/{destino}`

## Decisiones técnicas
Registra aquí al menos dos decisiones tomadas por la pareja y explica por qué.

1. **Uso de asincronía con `async/await` y `fetch`**: Se decidió utilizar funciones asíncronas para manejar la respuesta de la API de manera limpia y legible, permitiendo capturar errores de red mediante bloques `try/catch` sin bloquear la interfaz del usuario.
2. **Validación previa de entradas en el cliente**: Se implementó una validación estricta para evitar enviar peticiones a la API cuando el valor ingresado es menor o igual a cero o no es numérico, ahorrando recursos y mejorando la experiencia de usuario.

## Revisión cruzada
- Aspecto bien resuelto: La modularidad en la lectura de los selectores del DOM y la construcción dinámica de las URLs mediante *Template Literals*.
- Error o comportamiento mejorable: Al inicio, si la red fallaba, la aplicación no mostraba un mensaje claro al usuario, lo cual se corrigió actualizando el texto del DOM en el bloque `catch`.
- Propuesta de mejora: Agregar un indicador de carga (*spinner*) mientras se espera la respuesta de la API Frankfurter.
- Cambio incorporado después de la revisión: Se añadió la validación de montos vacíos/negativos (Misión 07) y el diseño responsivo final.

## Reflexión final (150–200 palabras)
Durante el desarrollo del proyecto Currency Explorer, aplicamos la metodología de Pair Programming para implementar el consumo asíncrono de la API de Frankfurter con JavaScript Vanilla. El mayor desafío técnico consistió en sincronizar dinámicamente la construcción de las URLs con los valores de los selectores del DOM y manejar adecuadamente los estados de la interfaz al realizar peticiones con `fetch`. Tomamos la decisión colaborativa de separar responsabilidades, validando las entradas antes de ejecutar peticiones innecesarias y agregando la función de intercambio (Swap) para mejorar la usabilidad. Esta práctica fortaleció nuestra comprensión sobre el control de versiones con Git, el manejo de llamadas a servicios web externos y la estructuración modular de proyectos web sin dependencias de frameworks externos.
