import { Router } from 'express';
import  ProdutoController  from '../controllers/ProdutoController';

const produtoRoutes = Router();

produtoRoutes.get    ('/produtos/excluidos', ProdutoController.ProdutosExcluidos        );
produtoRoutes.get    ('/listar',             ProdutoController.listarProdutos           );
produtoRoutes.post   ('/cadastro',           ProdutoController.criarProduto             );
produtoRoutes.put    ('/atualizar/:id',      ProdutoController.atualizarProduto         );
produtoRoutes.delete ('/excluir/:id',        ProdutoController.excluirProduto           );
produtoRoutes.get    ('/produto/querys',     ProdutoController.buscarProdutosQuerys     );
produtoRoutes.get    ('/tipos',              ProdutoController.getTipos                 );
produtoRoutes.get    ('/entrega',            ProdutoController.getProntaEntrega         );
produtoRoutes.get    ('/genero',             ProdutoController.getGeneros               );
produtoRoutes.get    ('/marcas',             ProdutoController.getMarcas                );
produtoRoutes.get    ('/subcategorias',      ProdutoController.getSubcategorias         );
produtoRoutes.get    ('/categorias',         ProdutoController.getCategorias            );
produtoRoutes.get    ('/contar',             ProdutoController.countProdutos            );


export default produtoRoutes;
