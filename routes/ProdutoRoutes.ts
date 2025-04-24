import { RequestHandler, Router }   from 'express';
import   ProdutoController          from '../controllers/ProdutoController';
import { LoggerMiddleware }         from '../middlewares/logger.middleware';
import { authMiddleware }           from '../middlewares/auth.middleware';

const produtoRoutes = Router();

produtoRoutes.get   ('/excluidos',          authMiddleware, LoggerMiddleware, ProdutoController.ProdutosExcluidos    as unknown as RequestHandler);
produtoRoutes.get   ('/listar',             authMiddleware, LoggerMiddleware, ProdutoController.listarProdutos       as unknown as RequestHandler);
produtoRoutes.post  ('/cadastro',               authMiddleware, LoggerMiddleware, ProdutoController.criarProduto         as unknown as RequestHandler);
produtoRoutes.put   ('/atualizar/:id',          authMiddleware, LoggerMiddleware, ProdutoController.atualizarProduto     as unknown as RequestHandler);
produtoRoutes.delete('/excluir/:id',            authMiddleware, LoggerMiddleware, ProdutoController.excluirProduto       as unknown as RequestHandler);
produtoRoutes.get   ('/entrega/:id',            authMiddleware, LoggerMiddleware, ProdutoController.ProntaEntrega        as unknown as RequestHandler);
produtoRoutes.get   ('/contar',                 authMiddleware, LoggerMiddleware, ProdutoController.countProdutos        as unknown as RequestHandler);
produtoRoutes.get   ('/filtros',                authMiddleware, LoggerMiddleware, ProdutoController.buscarProdutosQuerys as unknown as RequestHandler);


export default produtoRoutes;
