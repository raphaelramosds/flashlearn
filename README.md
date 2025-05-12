# Flashlearn


## Setup

```bash
npm i
npm run dev
```

Identify proccesses attached to 5173 (vite) and 3000 (JS server) with

```bash
ss -tunelp
```

Then, you restart the node server with

```bash
fuser -k 3000/tcp
node src/api/index.js
```