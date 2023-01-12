{
  "name": "api-contatos",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node ./dist/server.ts",
    "build": "npx tsc --watch",
    "dev": "ts-node-dev ./src/server.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^4.17.15",
    "ts-node-dev": "^2.0.0",
    "typescript": "^4.9.4"
  },
  "dependencies": {
    "@types/cors": "^2.8.13",
    "@types/dotenv": "^8.2.0",
    "@types/node": "^18.11.18",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2"
  },
  // "tsconfing": "tsconfing.json"
}


{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/node"
    }
  ]
}

npx tsc --watch
