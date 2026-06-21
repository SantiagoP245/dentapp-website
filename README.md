# DentApp — Website

Landing page de DentApp, software de gestión dental para clínicas pequeñas.

## Demo video
[![DentApp Demo](https://cdn.loom.com/sessions/thumbnails/LOOM_ID-with-play.gif)](https://www.loom.com/share/e4ad9a5ad62546f8a4d8ab2ba41aca74)

> 3 minutos: MCP server, prompts y skill en uso real.

## Stack
HTML5 · CSS3 (custom properties, BEM) · JS vanilla · MCP server

## Levantar el proyecto
```bash
# MCP server
cd mcp-server && npm install && node index.js

# Registrar en Claude Code
claude mcp add dentapp-design -- node ./mcp-server/index.js

# Abrir la página
# Usar Live Server en VS Code sobre src/index.html
```