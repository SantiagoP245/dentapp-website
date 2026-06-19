# prompt: faq-footer
# cuándo: cierre de página — resuelve objeciones y provee contacto
# variables: $FAQ_ITEMS, $FOOTER_COLS

Construí el FAQ y el footer de DentApp. Son las últimas dos secciones
de `src/index.html`. Estilos bajo `/* section: faq */` y
`/* section: footer */` en `main.css`.

FAQ
* Título: "Preguntas frecuentes"
* Accordion con los ítems de $FAQ_ITEMS —
  JS en `src/scripts/accordion.js`.
* Click expande respuesta con transición max-height 300ms ease.
* Flecha SVG rota 180° al abrir.
* Separador: `1px solid var(--color-accent)`. Sin librerías JS.

Footer
* Fondo `#1A1A1A`, texto `#CCCCCC`, links hover `var(--color-primary)`.
* 4 columnas según $FOOTER_COLS.
  Colapsa a 2 col en 768px, 1 col en mobile.
* Línea inferior: "© 2025 DentApp. Todos los derechos reservados."

Ejemplo real
$FAQ_ITEMS =
  ¿Necesito instalar algo? · No. Funciona desde el navegador.
  ¿Mis datos están seguros? · Sí. SSL y respaldo diario automático.
  ¿Puedo importar mis pacientes? · Sí. Excel y CSV. Le ayudamos.
  ¿Qué pasa si cancelo? · Exportá sus datos en cualquier momento.
  ¿Tienen soporte en español? · Sí. WhatsApp y email, lun a vie.

$FOOTER_COLS =
  DentApp · logo + tagline + copyright
  Producto · Funciones / Precios / Demo / Seguridad
  Soporte · Centro de ayuda / WhatsApp / Contacto
  Legal · Términos / Privacidad / Cookies