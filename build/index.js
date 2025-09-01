import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
const server = new McpServer({
    name: "calculator",
    version: "1.0.0",
    capabilities: { tools: {} },
});
// Tool: Add
server.addTool({
    name: "add",
    description: "Add two numbers.",
    inputSchema: z.object({ a: z.number(), b: z.number() }),
    async call({ a, b }) {
        return { result: a + b };
    },
});
// Tool: Subtract
server.addTool({
    name: "subtract",
    description: "Subtract b from a.",
    inputSchema: z.object({ a: z.number(), b: z.number() }),
    async call({ a, b }) {
        return { result: a - b };
    },
});
// Tool: Multiply
server.addTool({
    name: "multiply",
    description: "Multiply two numbers.",
    inputSchema: z.object({ a: z.number(), b: z.number() }),
    async call({ a, b }) {
        return { result: a * b };
    },
});
// Tool: Divide
server.addTool({
    name: "divide",
    description: "Divide a by b.",
    inputSchema: z.object({ a: z.number(), b: z.number().refine((b) => b !== 0, { message: "b must not be zero" }) }),
    async call({ a, b }) {
        return { result: a / b };
    },
});
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Calculator MCP Server running on stdio");
}
main().catch((err) => {
    console.error("Fatal error in main():", err);
    process.exit(1);
});
