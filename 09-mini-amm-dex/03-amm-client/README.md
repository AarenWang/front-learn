# 03-amm-client

This package contains example Mina AMM clients and a small React + TypeScript demo for Cardano wallets.

## Layout

- `java-client/`: A Java 17 HTTP client wrapper with examples for quoting and swapping.
- `ts-client/`: A reusable TypeScript client that mirrors the Java API.
- `web-app/`: A Vite-powered React site demonstrating wallet connection and swap flow using the TypeScript client.

## Getting started

### TypeScript client

```bash
cd ts-client
npm install
npm run build
```

### React web app

```bash
cd web-app
npm install
npm run dev
```

The site uses the CIP-30 Cardano wallet API (e.g., Nami, Eternl, or Flint). Open the browser at the printed local address and connect a wallet to try quotes and swaps against the AMM HTTP endpoints configured in `src/lib/minaAmmClient.ts`.

### Java client

```bash
cd java-client
mvn test
```

Update the `baseUrl` in `MinaAmmClient` to point at your Mina swap service before use.
