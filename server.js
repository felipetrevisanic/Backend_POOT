import app from "./source/app.js";

const port = process.env.port || 3030;

app.listen(port, () => {
  console.log(`servidor aberto na url http://localhost:${port} `);
});
