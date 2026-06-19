dentapp — convenciones
Landing page de DentApp, software de gestión dental para clínicas pequeñas.
Construida con HTML5 + CSS3 + JS vanilla. Sin frameworks ni build tools.

Stack
* HTML5 semántico. Página única en `src/index.html`.
* CSS con custom properties. Tokens en `src/styles/tokens.css`,
  estilos en `src/styles/main.css`.
* JS vanilla en `src/scripts/`. Sin dependencias externas.
* MCP server en `mcp-server/index.js` (design tokens + scaffolding).

Convenciones
* Todos los tokens de color/tipografía viven en `tokens.css`.
  Nunca hex crudo en `main.css`.
* Clases BEM: `.block__element--modifier`.
  Identificadores en inglés, copy visible en español formal (usted).
* Cada sección tiene su bloque en `main.css`
  con comentario `/* section: nombre */`.
* Sin jQuery, sin inline styles, sin `!important`
  salvo override de terceros.
* Imágenes con alt en español.
  Elementos interactivos con roles ARIA.

Estructura
src/
  index.html            # página principal — todas las secciones
  styles/
    tokens.css          # :root con custom properties de diseño
    main.css            # estilos por sección (BEM)
  scripts/
    nav.js              # hamburger menu mobile
    accordion.js        # lógica del FAQ accordion
    pricing-toggle.js   # toggle mensual/anual en precios
mcp-server/
  index.js              # herramientas: get_tokens / list_sections / get_section_brief
  package.json
prompts/                # plantillas de prompt reutilizables
.claude/
  skills/
    section-builder.md

Comandos
* Abrir `src/index.html` en browser o con Live Server (VS Code).
* `cd mcp-server && npm install && node index.js` — levanta el MCP.
* `claude mcp add dentapp-design -- node ./mcp-server/index.js`
  — registra el MCP en Claude Code.