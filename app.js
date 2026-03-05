const express = require("express");
const app = express();

const port = 3000;

/*
  Middleware per leggere JSON
*/
app.use(express.json());

/*
  Importo il router
*/
const postsRouter = require("./routers/posts");

/*
  Registro il router
  Prefisso: /posts
*/
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
