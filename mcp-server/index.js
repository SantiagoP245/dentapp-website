import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const TOKENS = `:root {
  --color-primary:       #CC0000;
  --color-primary-dark:  #990000;
  --color-primary-light: #FFE5E5;
  --color-surface:       #FFFFFF;
  --color-bg:            #F8F8F8;
  --color-text:          #1A1A1A;
  --color-text-muted:    #666666;
  --color-accent:        #E8E8E8;
  --radius-card:         12px;
  --radius-btn:          4px;
  --shadow-default:      0 2px 8px rgba(0,0,0,0.08);
  --shadow-hover:        0 4px 16px rgba(0,0,0,0.12);
  --font-heading:        'Inter', sans-serif;
  --font-body:           system-ui, sans-serif;
}`;

const SECTIONS = {
  hero:     "nav + portada con titular, dos CTAs y mockup CSS",
  features: "grid 6 tarjetas con íconos SVG inline",
  demo:     "video placeholder izquierda + lista de beneficios derecha",
  pricing:  "2 planes (Básico gratis / Pro pago) con toggle mensual/anual",
  faq:      "accordion 5 preguntas con transición CSS",
  footer:   "4 columnas sobre fondo oscuro con links y legal"
};

const server = new McpServer({
  name: "dentapp-mcp",
  version: "1.0.0"
});

server.tool("get_tokens", "Devuelve todos los CSS custom properties de DentApp como bloque :root", {}, async () => ({
  content: [{ type: "text", text: TOKENS }]
}));

server.tool("list_sections", "Lista las secciones planificadas de la página con sus descripciones", {}, async () => ({
  content: [{ type: "text", text: Object.entries(SECTIONS).map(([k, v]) => `${k}: ${v}`).join("\n") }]
}));

server.tool(
  "get_section_brief",
  "Devuelve la descripción de una sección específica",
  { name: z.enum(["hero", "features", "demo", "pricing", "faq", "footer"]).describe("Nombre de la sección") },
  async ({ name }) => {
    const desc = SECTIONS[name];
    if (!desc) throw new Error(`Sección desconocida: ${name}`);
    return { content: [{ type: "text", text: `Sección: ${name}\nDescripción: ${desc}\nTokens: ver get_tokens` }] };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);