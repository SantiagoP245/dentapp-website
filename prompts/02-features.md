# prompt: features-grid
# cuándo: después de la portada — presenta las funcionalidades del producto
# variables: $SECTION_TITLE, $SECTION_SUBTITLE, $FEATURES_LIST

Construí la sección de funciones de DentApp. Insertala en `src/index.html`
después del bloque `.hero`. Agregá los estilos en `src/styles/main.css`
bajo el comentario `/* section: features */`.

Contenido
* Título: $SECTION_TITLE
* Subtítulo: $SECTION_SUBTITLE
* Grid de 6 tarjetas con los ítems de $FEATURES_LIST.
  Cada tarjeta: ícono SVG inline + título + descripción de una línea.

Diseño de tarjeta
* Fondo blanco, radius 12px, sombra `var(--shadow-default)`.
* Hover: sombra `var(--shadow-hover)` + translateY(-3px), transición 200ms.
* Ícono: círculo 40px fondo `var(--color-primary-light)`,
  SVG `var(--color-primary)`.
* Grid: 3 col desktop / 2 col 768px / 1 col mobile.
* Fondo de sección: `var(--color-bg)`.

Ejemplo real
$SECTION_TITLE = "Todo lo que su clínica necesita"
$SECTION_SUBTITLE = "Diseñado para dentistas que prefieren atender
pacientes, no administrar sistemas."
$FEATURES_LIST =
  Pacientes · "Historial clínico completo, siempre a mano."
  Turnos · "Agenda online que sus pacientes pueden ver 24/7."
  Facturación · "Emita comprobantes en segundos."
  Recordatorios · "Avisos automáticos por WhatsApp y email."
  Reportes · "Métricas de su clínica en tiempo real."
  Multi-dispositivo · "Desde el celular, tablet o computadora."