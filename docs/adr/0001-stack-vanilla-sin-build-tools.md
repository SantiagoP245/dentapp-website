# 0001 — Stack vanilla sin frameworks ni build tools

## Estado
Aceptado

## Contexto
DentApp landing es el primer entregable de un curso de AI: una página única
para demostrar el uso de CLAUDE.md, prompts, skills y MCP con Claude Code.
No hay necesidad de estado complejo, ruteo, ni componentes reutilizables
entre páginas — es una sola landing con seis secciones estáticas.

## Decisión
Construir con HTML5 semántico + CSS3 (custom properties) + JS vanilla,
sin frameworks (React, Vue, etc.) ni herramientas de build (bundlers,
transpilers, npm scripts para el sitio en sí).

## Consecuencias
- Cero configuración: se abre `src/index.html` directo en el browser o con
  Live Server. No hay paso de compilación que pueda romperse.
- El código generado por Claude Code es más fácil de auditar línea por línea
  para el propósito del curso.
- Si el proyecto creciera a múltiples páginas o necesitara estado complejo,
  esta decisión habría que revisarla — el vanilla stack no escala bien más
  allá de una landing simple.
- El único build tool del repo es el MCP server (Node), que es tooling de
  desarrollo, no parte del sitio publicado.
