module.exports = {
  apps: [
    {
      name: "app",
      script: "server/index.js",
      env: {
        NODE_ENV: "production",
        PORT: process.env.VITE_PORT,
        MONGO_URL: process.env.VITE_MONGO_URL,
        ENDPOINT: process.env.VITE_ENDPOINT,
        COLLECTION: process.env.VITE_COLLECTION,
      },
    },
  ],
}
