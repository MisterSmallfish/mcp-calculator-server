# MCP Calculator Server

This project implements a Model Context Protocol (MCP) server that exposes basic calculator operations (add, subtract, multiply, divide) as MCP tools.

## Features
- MCP-compliant server using the [TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- Tools: add, subtract, multiply, divide
- Easily connectable to Claude Desktop, VS Code, and other MCP clients

## Quickstart

### Prerequisites
- Node.js 18+ and npm

### Setup
```bash
npm install
npm run build
```

### Run the server (for MCP clients)
```bash
node build/index.js
```

### MCP Integration
To connect this server to an MCP client (e.g., Claude Desktop, VS Code):
1. Add an entry to your `mcp.json` or client config:
   ```json
   {
     "servers": {
       "calculator": {
         "type": "stdio",
         "command": "node",
         "args": ["/ABSOLUTE/PATH/TO/build/index.js"]
       }
     }
   }
   ```
2. Restart your MCP client and enable the "calculator" server.

## References
- [MCP Protocol Documentation](https://modelcontextprotocol.io/)
- [TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)

---

## Development
- TypeScript source in `src/`
- Build output in `build/`
- Add new tools in `src/index.ts`

## License
MIT
