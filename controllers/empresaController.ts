import { Request, Response } from 'express';
import prisma from '../util/prismaClient';

export class empresaController {
    static async criarEmpresa(req: Request, res: Response) {
      const {
        name, reference, gender, brands, categories, price_tables, products
      } = req.body;
  
      try {
        // Criando a empresa e os relacionamentos em uma transação
        const empresa = await prisma.companies   .create({data: {name, reference, gender,
            brands:       { create: brands       .map((brand: any) => ({ name: brand.name }))}, 
            categories:   { create: categories   .map((categoryId: number) => ({ id: categoryId })),},
            price_tables: { create: price_tables .map((priceTableId: number) => ({ id: priceTableId })),},
            products:     { create: products     .map((product: any) => ({ name: product.name, reference: product.reference, price: product.price, })),
            },
          },
        });
  
        // Responde com a empresa criada
        res.status(201).json(empresa);
      } catch (error) {
        console.error('Erro ao criar empresa:', error);
        res.status(500).json({ error: 'Erro ao criar empresa.' });
      }
    }
  }