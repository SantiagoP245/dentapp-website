# 0003 — MCP server local para tokens y scaffolding de secciones

## Estado
Aceptado

## Contexto
El proyecto es también una demo de integración de Claude Code vía MCP
(Model Context Protocol). Se necesitaba una forma de que Claude Code
consultara los design tokens y la estructura de secciones del sitio de
forma estructurada, en vez de depender de que releyera `tokens.css` o
`index.html` completos en cada prompt.

## Decisión
Implementar un MCP server local (`mcp-server/index.js`) con tres tools:
- `get_tokens` — devuelve los design tokens actuales.
- `list_sections` — lista las secciones de la landing.
- `get_section_brief` — devuelve el brief de una sección puntual.

Se registra en Claude Code con
`claude mcp add dentapp-design -- node ./mcp-server/index.js`.

## Consecuencias
- Los prompts en `prompts/` y la skill `section-builder.md` pueden apoyarse
  en el MCP para generar secciones consistentes con los tokens reales,
  en vez de inventar valores.
- Agrega una dependencia de Node/npm al repo (`mcp-server/`), aunque el
  sitio publicado sigue sin build tools (ver [0001](0001-stack-vanilla-sin-build-tools.md)).
- El MCP es tooling de desarrollo/demo, no se despliega junto con la
  landing — si se agregan más tools, mantenerlas alineadas con lo que
  realmente vive en `tokens.css` e `index.html` para que no queden
  desincronizadas.
