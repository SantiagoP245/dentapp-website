# CONTEXT.md — historial de decisiones

## Qué es este proyecto
Primer entregable de un curso de AI. Landing page de DentApp construida
con Claude Code para demostrar el uso de CLAUDE.md, prompts, skill y MCP.

## Decisiones tomadas en esta sesión
- HTML vanilla sin frameworks — simplicidad para el entregable
- BEM para naming de clases — consistencia sin framework CSS
- Copy en español formal (usted) — público objetivo: dentistas adultos
- MCP server local con 3 tools: get_tokens, list_sections, get_section_brief
- Skill project-scoped en .claude/skills/section-builder.md
- 6 secciones: hero / features / demo / pricing / faq / footer

## Lo que NO hacer
- No mencionar marcas anteriores — DentApp es marca nueva desde cero
- No usar hex crudo en CSS — siempre var(--color-*)
- No lorem ipsum — todo el copy es real y en español formal (usted)
- No jQuery, no inline styles, no !important

## Estado actual del proyecto
- CLAUDE.md ✓
- 5 prompts en prompts/ ✓
- Skill en .claude/skills/section-builder.md ✓
- MCP server conectado con 3 tools ✓
- src/index.html vacío — listo para generar en la demo
- Video demo pendiente de grabar