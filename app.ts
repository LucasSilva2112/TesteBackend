import   express from "express";
import   produtoRoutes from "./routes/ProdutoRoutes";
import { errorHandler } from "./middlewares/errorHandler";
import   authRoutes from './routes/auth';
import   dotenv from 'dotenv';

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use('/auth',     authRoutes); 
app.use('/produtos', produtoRoutes);


dotenv.config();

app.listen(3000, () => {
  console.log('SUCESSO FULL');
});

export default app;
