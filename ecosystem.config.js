module.exports = {
  apps: [
    {
      name: "fepick",
      script: "server/index.js",
      env: {
        NODE_ENV: "production",
        VITE_MONGO_URL: process.env.VITE_MONGO_URL,
        VITE_PORT: process.env.VITE_PORT,
      },
    },
  ],
}
