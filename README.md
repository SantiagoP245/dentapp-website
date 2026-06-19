# DentApp — Website

Landing page de DentApp, software de gestión dental para clínicas pequeñas.

## Demo video
[![DentApp Demo](https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg)](https://youtu.be/VIDEO_ID)

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