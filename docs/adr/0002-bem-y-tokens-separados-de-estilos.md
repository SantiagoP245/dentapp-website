# 0002 — BEM + tokens de diseño separados de los estilos

## Estado
Aceptado

## Contexto
Sin un framework CSS (Tailwind, Bootstrap), el proyecto necesita una
convención propia para mantener el naming de clases consistente y evitar
que los valores de diseño (colores, tipografía) queden hardcodeados y
dispersos por todo `main.css`.

## Decisión
- Naming de clases en BEM (`.block__element--modifier`).
- Todos los tokens de color y tipografía viven en `tokens.css` (`:root`
  con custom properties). Nunca hex crudo en `main.css`.
- Cada sección de la página tiene su propio bloque en `main.css`,
  delimitado con un comentario `/* section: nombre */`.

## Consecuencias
- Cualquier cambio de paleta o tipografía se hace en un solo archivo
  (`tokens.css`) sin tocar `main.css`.
- BEM hace el HTML más verboso, pero evita colisiones de especificidad
  sin necesidad de una metodología más pesada (CSS Modules, CSS-in-JS).
- El comentario `/* section: nombre */` funciona como índice manual de
  `main.css` — hay que mantenerlo si se agregan o reordenan secciones.
- Un lint o script que verifique "no hex crudo fuera de tokens.css" sería
  una mejora natural si el archivo crece, pero hoy se aplica por revisión
  manual.
