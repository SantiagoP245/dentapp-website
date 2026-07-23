# 0004 — Dashboard mockeado sin datos ni backend real

## Estado
Aceptado

## Contexto
El entregable "Prototipo con Arquitectura Documentada" pide un prototipo
funcional. El riesgo concreto acá es de alcance: es fácil que "dashboard
funcional" derive en empezar a construir el software de gestión dental
real (turnos con lógica, pacientes persistidos, etc.), cuando el propósito
de este repositorio sigue siendo exclusivamente **vender** DentApp, no
**ser** DentApp.

Los diagramas C4 ya tomaron esta dirección de forma implícita: ni el
[Nivel 1](../architecture/c4-nivel1-contexto.md) ni el
[Nivel 2](../architecture/c4-nivel2-contenedores.md) incluyen un
contenedor de backend, API o base de datos — el "Dashboard mockeado" está
modelado como una página más del mismo sitio estático. Esta decisión
formaliza esa elección antes de escribir el código del prototipo.

## Decisión
Construir el dashboard como una maqueta puramente visual e interactiva
en el frontend, sin capa de datos real:

- `dashboard-preview.html` + `dashboard-preview.js`, siguiendo el mismo
  patrón vanilla que el resto del sitio (ver
  [ADR 0001](0001-stack-vanilla-sin-build-tools.md)).
- Todo el contenido de ejemplo (turnos, pacientes, métricas) va
  **hardcodeado** directo en el HTML/JS del prototipo.
- Sin `fetch` a APIs, sin `localStorage`, sin ningún tipo de persistencia.
- Interactividad limitada a comportamiento de UI — cambiar de tab, hover,
  mostrar/ocultar — en la misma línea que `accordion.js` o
  `pricing-toggle.js` ya existentes.
- Cualquier "acción" dentro del dashboard (ej. marcar una cita como
  completada) es cosmética: cambia el DOM en el momento pero no persiste
  ni se sincroniza con nada al recargar la página.

## Consecuencias
- Mantiene el alcance del repo alineado con su propósito real y evita la
  trampa de terminar construyendo el producto real dentro de la landing.
- Consistente con ADR 0001 y con los diagramas C4 vigentes — no se agrega
  ninguna pieza nueva de infraestructura (sin backend, sin base de datos,
  sin dependencias externas).
- Actualizar el contenido mockeado (ej. cambiar nombres de pacientes de
  ejemplo) requiere editar HTML/JS a mano; no hay ningún panel para eso.
  Aceptable porque es contenido de marketing que no cambia seguido.
- Si en algún momento se decide construir el producto real, este
  dashboard mockeado **no es reutilizable como base funcional** — es
  explícitamente descartable, solo sirve como material de venta.
