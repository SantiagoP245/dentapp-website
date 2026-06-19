# prompt: hero-section
# cuándo: primera tarea del proyecto — establece la base visual de toda la página
# variables: $HEADLINE, $SUBHEADLINE, $CTA_PRIMARY, $CTA_SECONDARY

Construí la sección portada de DentApp en `src/index.html`.

Leé `CLAUDE.md` y `src/styles/tokens.css` antes de escribir una línea.

Contenido
* Nav: logo "Dent<rojo>App</rojo>" izquierda, enlaces Funciones / Demo /
  Precios / Preguntas centro, CTA derecha.
* Titular: $HEADLINE
* Subtítulo: $SUBHEADLINE
* CTAs: $CTA_PRIMARY (fondo rojo, texto blanco) · $CTA_SECONDARY (outline rojo)
* Visual derecha: rectángulo redondeado con gradiente rojo simulando
  un dashboard — solo CSS, sin imágenes.

Restricciones
* Min-height 90vh. Layout dos columnas (60/40),
  colapsa a una en mobile.
* Hamburger menu bajo 768px — JS en `src/scripts/nav.js`.
* Sin hex crudo. Sin inline styles. Copy en español formal.

Ejemplo real
$HEADLINE = "La gestión de su clínica, simplificada."
$SUBHEADLINE = "DentApp organiza sus pacientes, turnos y facturación
en un solo lugar. Sin complicaciones."
$CTA_PRIMARY = "Comenzar gratis"
$CTA_SECONDARY = "Ver cómo funciona"