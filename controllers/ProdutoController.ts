import { Request, Response } from 'express';
import prisma from '../util/prismaClient';
import { Prisma } from '@prisma/client';

export default class ProdutoController {

  static async criarProduto            (req: Request, res: Response) {
    try {
      const {
        name,
        reference,
        type,
        gender,
        prompt_delivery,
        companyId,
        brand_id,
        category_id,
        subcategory_id,
        variants,
      } = req.body;

      const produto = await prisma.products.create({
        data: {
          name,
          reference,
          type,
          gender,
          prompt_delivery,
          companyId,
          brand_id,
          category_id,
          subcategory_id,
          variants: {
            create: variants.map((variant: any) => ({
              name: variant.name,
              hex_code: variant.hex_code,
              skus: {
                create: variant.skus.map((sku: any) => ({
                  size: sku.size,
                  stock: sku.stock,
                  price: sku.price,
                  code: sku.code,
                  min_quantity: sku.min_quantity,
                  multiple_quantity: sku.multiple_quantity,
                  erpId: sku.erpId,
                  cest: sku.cest,
                  height: sku.height,
                  length: sku.length,
                  ncm: sku.ncm,
                  weight: sku.weight,
                  width: sku.width,
                  price_tables_skus: {
                    create: sku.price_tables_skus.map((pts: any) => ({
                      price: pts.price,
                      price_table_id: pts.price_table_id,
                    })),
                  },
                })),
              },
            })),
          },
        },
        include: {
          variants: {
            include: {
              skus: {
                include: {
                  price_tables_skus: true,
                },
              },
            },
          },
        },
      });

      console.log(`Produto "${produto.name}" cadastrado com sucesso!!`);
      res.status(201).json(produto);
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      res.status(500).json({ error: 'Erro ao criar produto' });
    }
  }
  static async listarProdutos          (req: Request, res: Response) {
    try {
      const produtos = await prisma.products.findMany({
        where: {
          deleted_at: null, 
        },
        include: {
          variants: {
            include: {
              skus: true,
            },
          },
          categories: true,
          subcategories: true,
          company: true,
          brands: true,
        },
      });

      const resultado = produtos.map((produto: { variants: any[]; id: any; name: any; reference: any; gender: any; categories: { name: any } | null; subcategories: { name: any } | null; prompt_delivery: any; description: any; type: any; company: { id: any; }; brands: { name: any } | null; }) => {
        const variant = produto.variants?.[0];
        return {
          id: produto.id,
          name: produto.name,
          variant_name: variant?.name ?? null,
          hex_code: variant?.hex_code ?? null,
          reference: produto.reference,
          gender: produto.gender,
          category: produto.categories?.name ?? null,
          subcategory: produto.subcategories?.name ?? null,
          prompt_delivery: produto.prompt_delivery,
          description: produto.description,
          type: produto.type,
          skus: variant?.skus.map((sku: { id: any; size: any; price: any; stock: any; min_quantity: any; }) => ({
            id: sku.id,
            size: sku.size,
            price: sku.price,
            stock: sku.stock,
            min_quantity: sku.min_quantity,
          })) ?? [],
          company: {
            key: produto.company?.id ?? null,
          },
          brand: produto.brands?.name ?? null,
        };
      });

      res.json(resultado);
    } catch (error) {
      console.error('Erro ao listar produtos:', error);
      res.status(500).json({ error: 'Erro ao listar produtos' });
    }
  } 
  static async atualizarProduto        (req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        name,
        reference,
        type,
        gender,
        prompt_delivery,
        companyId,
        brand_id,
        category_id,
        subcategory_id,
        variants,
      } = req.body;
  
      const produto = await prisma.products.update({
        where: { id: Number(id) },
        data: {
          name,
          reference,
          type,
          gender,
          prompt_delivery,
          companyId,
          brand_id,
          category_id,
          subcategory_id,
          variants: {
            upsert: variants.map((variant: any) => ({
              where: { id: variant.id || 0 },
              create: {
                name: variant.name,
                hex_code: variant.hex_code,
                skus: {
                  create: variant.skus.map((sku: any) => ({
                    size: sku.size,
                    stock: sku.stock,
                    price: sku.price,
                    code: sku.code,
                    min_quantity: sku.min_quantity,
                    multiple_quantity: sku.multiple_quantity,
                    erpId: sku.erpId,
                    cest: sku.cest,
                    height: sku.height,
                    length: sku.length,
                    ncm: sku.ncm,
                    weight: sku.weight,
                    width: sku.width,
                    price_tables_skus: {
                      create: sku.price_tables_skus.map((pts: any) => ({
                        price: pts.price,
                        price_table_id: pts.price_table_id,
                      })),
                    },
                  })),
                },
              },
              update: {
                name: variant.name,
                hex_code: variant.hex_code,
                skus: {
                  create: variant.skus.map((sku: any) => ({
                    size: sku.size,
                    stock: sku.stock,
                    price: sku.price,
                    code: sku.code,
                    min_quantity: sku.min_quantity,
                    multiple_quantity: sku.multiple_quantity,
                    erpId: sku.erpId,
                    cest: sku.cest,
                    height: sku.height,
                    length: sku.length,
                    ncm: sku.ncm,
                    weight: sku.weight,
                    width: sku.width,
                    price_tables_skus: {
                      create: sku.price_tables_skus.map((pts: any) => ({
                        price: pts.price,
                        price_table_id: pts.price_table_id,
                      })),
                    },
                  })),
                },
              },
            })),
          },
        },
        include: {
          variants: {
            include: {
              skus: {
                include: {
                  price_tables_skus: true,
                },
              },
            },
          },
        },
      });
  
      res.status(200).json(produto);
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
  }
  static async excluirProduto          (req: Request, res: Response) {
    const id = Number(req.params.id);
    try {    
      const prod = await prisma.products.findUnique({ where: { id } });
        if (!prod){
          res.status(201).json({message: 'Produto nao encontrado'});
        }
        await prisma.products.update({
          where: { id },
          data: { deleted_at: new Date() } });
          res.status(201).json({message:'produto excluido com sucesso'});
    }catch (error){
        console.error('erro ao excluir produto',error);
            res.status(500).json({error: ' error ao excluir produto'});
    }
  }
  static async ProdutosExcluidos       (req: Request, res: Response) {
    try {
      const excluidos = await prisma.products.findMany({
        where: {
          deleted_at: {
            not: undefined,
          },
        },
      });

      res.json(excluidos);
    } catch (error) {
      console.error('Erro ao listar produtos excluídos:', error);
      res.status(500).json({ error: 'Erro ao listar produtos excluídos' });
    } 
  }
  static async buscarProdutosQuerys    (req: Request, res: Response) {
    try {
      const {
        name,
        reference,
        category_id,
        brand_id,
        type,
        gender,
        prompt_delivery,
        page = '1',
        limit = '10',
      } = req.query;
  
      const enumTypeValues = ['MASCULINO', 'FEMININO', 'UNISSEX'];
      const enumGenderValues = ['M', 'F', 'U'];
  
      const pageNumber = parseInt(page as string);
      const limitNumber = parseInt(limit as string);
      const skip = (pageNumber - 1) * limitNumber;
  
      const where: any = {
        ...(name && {
          name: {
            contains: name as string,
            mode: 'insensitive',
          },
        }),
        ...(reference && {
          reference: {
            contains: reference as string,
            mode: 'insensitive',
          },
        }),
        ...(category_id && { category_id: parseInt(category_id as string) }),
        ...(brand_id && { brand_id: parseInt(brand_id as string) }),
        ...(type && enumTypeValues.includes(type as string) && {
        }),
        ...(gender && enumGenderValues.includes(gender as string) && {
          gender: gender as any,
        }),
        ...(prompt_delivery && {
          prompt_delivery: prompt_delivery === 'true',
        }),
      };
  
      const [produtos, total] = await Promise.all([
        prisma.products.findMany({
          where,
          skip,
          take: limitNumber,
        }),
        prisma.products.count({ where }),
      ]);
  
       res.status(200).json({
        data: produtos,
        meta: {
          total,
          page: pageNumber,
          limit: limitNumber,
          pages: Math.ceil(total / limitNumber),
        },
      });
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
       res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  }
  static async getCategorias           (req: Request, res: Response) {
    try {
      const categorias = await prisma.categories.findMany({
        select: {
          id: true,
          name: true,
        },
      });
      res.status(200).json(categorias);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
      res.status(500).json({ error: 'Erro ao buscar categorias' });
    }
  }
  static async getSubcategorias        (req: Request, res: Response) {
    try {
      const subcategorias = await prisma.subcategories.findMany({
        select: {
          id: true,
          name: true,
          category_id: true, // Relacionamento com categoria
        },
      });
      res.status(200).json(subcategorias);
    } catch (error) {
      console.error('Erro ao buscar subcategorias:', error);
      res.status(500).json({ error: 'Erro ao buscar subcategorias' });
    }
  }
  static async getMarcas               (req: Request, res: Response) {
    try {
      const marcas = await prisma.brands.findMany({
        select: {
          id: true,
          name: true,
        },
      });
      res.status(200).json(marcas);
    } catch (error) {
      console.error('Erro ao buscar marcas:', error);
      res.status(500).json({ error: 'Erro ao buscar marcas' });
    }
  }
  static async getGeneros              (req: Request, res: Response) {
    try {
      const generos = [
        'MASCULINO',
        'FEMININO',
        'INFANTIL',
        'JUVENIL',
        'UNISSEX',
        'FAT',
        'OUTRO'
      ];
      
      res.status(200).json(generos);
    } catch (error) {
      console.error('Erro ao buscar gêneros:', error);
      res.status(500).json({ error: 'Erro ao buscar gêneros' });
    }
  }
  static async getTipos                (req: Request, res: Response) {
    try {
      const tipos = [
        'NACIONAL',
        'IMPORTADO'
      ];     
      res.status(200).json(tipos);
    } catch (error) {
      console.error('Erro ao buscar tipos:', error);
      res.status(500).json({ error: 'Erro ao buscar tipos' });
    }
  }
  static async getProntaEntrega        (req: Request, res: Response) {
    try {
      const prontaEntrega = await prisma.products.findMany({
        where: {
          prompt_delivery: true,
        },
        select: {
          id: true,
          name: true,
        },
      });
      res.status(200).json(prontaEntrega);
    } catch (error) {
      console.error('Erro ao buscar pronta entrega:', error);
      res.status(500).json({ error: 'Erro ao buscar pronta entrega' });
    }
  }
  static async countProdutos(req: Request, res: Response) {
    try {
      const {
        name,
        reference,
        category_id,
        brand_id,
        type,
        gender,
        prompt_delivery
      } = req.query;

      const where: any = {
        ...(name && {
          name: {
            contains: name as string,
            mode: 'insensitive',
          },
        }),
        ...(reference && {
          reference: {
            contains: reference as string,
            mode: 'insensitive',
          },
        }),
        ...(category_id && { category_id: Number(category_id) }),
        ...(brand_id && { brand_id: Number(brand_id) }),
        ...(type && {
          type: { equals: type as string }
        }),
        ...(gender && {
          gender: { equals: gender as string }
        }),
        ...(prompt_delivery !== undefined && {
          prompt_delivery: prompt_delivery === 'true',
        }),
      };
      const totalCount = await prisma.products.count({ where });

      res.status(200).json({ totalCount });
    } catch (error) {
      console.error('Erro ao contar produtos:', error);
      res.status(500).json({ error: 'Erro ao contar produtos' });
    }
  }
}








     
