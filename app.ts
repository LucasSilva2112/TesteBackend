import express from "express";
import  produtoRoutes  from "./routes/ProdutoRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use(produtoRoutes);

app.listen(3000, () => {
    console.log('SUCESSO FULL');
});

export default app;
