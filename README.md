# Flashlearn

## Setup

```bash
npm i
npm run dev
```

## Restarting services

Identify proccesses attached to 5173 (vite) and 3000 (JS server) with

```bash
ss -tunelp
```

Then, you may restart the services with

```bash
fuser -k 3000/tcp
fuser -k 5173/tcp

vite & node src/api/index.js
```