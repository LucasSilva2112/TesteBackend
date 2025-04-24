import { Request, Response, RequestHandler } from 'express';
import   prisma                 from '../util/prismaClient';
import { $Enums               } from '../prisma/prisma-client';
import * as ProdutoModel        from '../models/ProdutoModel';

export default class ProdutoController {

  static async criarProduto         (req: Request, res: Response): Promise<Response> {
    try {
      const produto = await ProdutoModel.criarProduto(req.body);
      if (!produto) {
        return res.status(400).json({ error: 'erro ao cadastrar produto' });
      }
      console.log(`Produto "${produto.name}" cadastrado com sucesso!`);
        return res.status(201).json(produto);
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
        return res.status(500).json({ error: "Erro ao cadastrar produto" });
    }
  }
  static async listarProdutos       (req: Request, res: Response): Promise<Response> {
    try {
      const {
        page = '1',
        limit = '10',
        category_id,
        brand_id,
        type,
        gender,
        prompt_delivery,
      } = req.query;
  
      const pageNumber = parseInt(page as string, 10) || 1;
      const limitNumber = parseInt(limit as string, 10) || 10;
      const skip = (pageNumber - 1) * limitNumber;
  
      const companyId = req.user?.companyId;
      if (!companyId) {
        return res.status(401).json({ error: 'Usuário não autenticado ou sem empresa associada' });
      }
  
      const filtros: any = {
        deleted_at: null,
        companyId,
      };
  
      if (category_id) filtros.category_id = Number(category_id);
      if (brand_id) filtros.brand_id = Number(brand_id);
  
      if (
        type &&
        typeof type === 'string' &&
        Object.values($Enums.products_type).includes(type as $Enums.products_type)
      ) {
        filtros.type = type as $Enums.products_type;
      }
  
      if (
        gender &&
        typeof gender === 'string' &&
        Object.values($Enums.products_gender).includes(gender as $Enums.products_gender)
      ) {
        filtros.gender = gender as $Enums.products_gender;
      }
  
      if (prompt_delivery === 'true' || prompt_delivery === 'false') {
        filtros.prompt_delivery = prompt_delivery === 'true';
      }
  
      const { produtos, total } = await ProdutoModel.listarProdutos(filtros, skip, limitNumber, companyId);
  
      return res.status(200).json({
        data: produtos,
        meta: {
          total,
          page: pageNumber,
          limit: limitNumber,
          pages: Math.ceil(total / limitNumber),
        },
      });
    } catch (error) {
      console.error('Erro ao listar produtos:', error);
      return res.status(500).json({ error: 'Erro ao listar produtos' });
    }
  }
  static async atualizarProduto     (req: Request,  res: Response): Promise<Response> {
     try {
    const { id } = req.params;
    const data = req.body;

    const atualizar = await ProdutoModel.atualizarProduto (Number(id), data);

    return res.status(200).json(atualizar);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    return res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
}
  static async excluirProduto       (req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const result = await ProdutoModel.excluirProduto(id);
      if (!result) return res.status(404).json({ message: 'Produto não encontrado' });
      res.status(200).json({ message: 'Produto excluído com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir produto', error);
      res.status(500).json({ error: 'Erro ao excluir produto' });
    }
  }
  static async ProdutosExcluidos    (req: Request, res: Response) {
    try {
      const companyId = req.user?.companyId;
      if (!companyId) return res.status(401).json({ error: "Usuário não autenticado" });
  
      const excluidos = await ProdutoModel.produtosExcluidos(companyId);
      res.json(excluidos);
    } catch (error) {
      console.error('Erro ao listar produtos excluídos:', error);
      res.status(500).json({ error: 'Erro ao listar produtos excluídos' });
    }
  }
  static async buscarProdutosQuerys (req: Request, res: Response) {
    try {
      const companyId = req.user?.companyId;
      if (!companyId) {
        return res.status(401).json({ error: "Usuário não autenticado" });
      }
  
      const result = await ProdutoModel.buscarProdutosQuerys(req.query, companyId);
  
      return res.status(200).json({
        data: result.produtos,
        meta: {
          total: result.total,
          page: result.page,
          limit: result.limit,
          pages: Math.ceil(result.total / result.limit),
        },
      });
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      return res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  }
  static async ProntaEntrega        (req: Request, res: Response) {
    try {
      const companyId = req.user?.companyId;
      if (!companyId) return res.status(400).json({ error: "CompanyId não encontrado" });
  
      const produtos = await ProdutoModel.getProntaEntrega(companyId);
      return res.json(produtos);
    } catch (error) {
      console.error("Erro ao buscar produtos de pronta entrega:", error);
      return res.status(500).json({ error: "Erro ao buscar produtos" });
    }
  }
  static async countProdutos        (req: Request, res: Response) {
    try {
      const companyId = req.user?.companyId;
      if (!companyId) return res.status(401).json({ error: "Usuário não autenticado" });
  
      const totalCount = await ProdutoModel.countProdutos(req.query, companyId);
      res.status(200).json({ totalCount });
    } catch (error) {
      console.error('Erro ao contar produtos:', error);
      res.status(500).json({ error: 'Erro ao contar produtos' });
    }
  }
}


