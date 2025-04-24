import { $Enums } from "../prisma/prisma-client";
import prisma from "../util/prismaClient";
import { Prisma, products_gender, products_type } from '@prisma/client';

export interface CriarProdutoDTO      {
  name: string;
  reference?: string;
  type?: string;
  gender?: string;
  prompt_delivery?: boolean;
  companyId: number;
  brand_id: number;
  category_id: number;
  subcategory_id?: number;

  variants: VariantDTO[];
}
export interface ListarProdutosDTO    {
  page?: string;
  limit?: string;
  category_id?: string;
  brand_id?: string;
  type?: string;
  gender?: string;
  prompt_delivery?: string;
}
export interface VariantDTO           {
  name: string;
  hex_code?: string;
  skus: SkuDTO[];
}
export interface SkuDTO               {
  size: string;
  stock: number;
  price: number;
  code: string;
  min_quantity?: number;
  multiple_quantity?: number;
  erpId?: string;
  cest?: string;
  height?: number;
  length?: number;
  ncm?: string;
  weight?: number;
  width?: number;
  price_tables_skus: PriceTableSkuDTO[];
}
export interface PriceTableSkuDTO     {
  price: number;
  price_table_id: number;
}
interface SkuInput                    {
  id: any;
  size: string;
  stock: number;
  price: number;
  code: string;
  min_quantity: number;
  multiple_quantity: number;
  erpId: string;
  cest: string;
  height: number;
  length: number;
  ncm: string;
  weight: number;
  width: number;
  price_tables_skus: {
    price: number;
    price_table_id: number;
  }[];
}
interface VariantInput                {
  erpId: any;
  id: number;
  name: string;
  hex_code: string;
  skus: SkuInput[];
}
interface ProductInput                {
  name: string;
  reference: string;
  type: string;
  gender: string;
  prompt_delivery: boolean;
  companyId: number;
  brand_id: number;
  category_id: number;
  subcategory_id: number;
  variants: VariantInput[];
}
interface BuscarProdutosQuery {
  name?: string;
  reference?: string;
  category_id?: string;
  brand_id?: string;
  type?: string;
  gender?: string;
  prompt_delivery?: string;
  incluirExcluidos?: string;
  page?: string;
  limit?: string;
}
export async function criarProduto          (data: CriarProdutoDTO) {
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
        } = data;
      
        if (!name || !companyId || !brand_id || !category_id || !Array.isArray(variants)) {
          throw new Error("Dados obrigatórios ausentes ou inválidos.");
        }
      
        try {
          const produto = await prisma.products.create({
            data: {
              name,
              reference: reference ?? '',
              type: type as $Enums.products_type,
              gender: gender as $Enums.products_gender,
              prompt_delivery: prompt_delivery ?? false,
              companyId,
              brand_id,
              category_id,
              subcategory_id,
              variants: {
                create: variants.map((variant) => ({
                  name: variant.name,
                  hex_code: variant.hex_code ?? '',
                  skus: {
                    create: variant.skus.map((sku) => ({
                      size: sku.size,
                      stock: sku.stock,
                      price: sku.price,
                      code: sku.code,
                      min_quantity: sku.min_quantity ?? 1,
                      multiple_quantity: sku.multiple_quantity ?? 1,
                      erpId: sku.erpId ?? '',
                      cest: sku.cest ?? '',
                      height: sku.height ?? 0,
                      length: sku.length ?? 0,
                      ncm: sku.ncm ?? '',
                      weight: sku.weight ?? 0,
                      width: sku.width ?? 0,
                      price_tables_skus: sku.price_tables_skus
                        ? {
                            create: sku.price_tables_skus.map((pts) => ({
                              price: pts.price,
                              price_table_id: pts.price_table_id,
                            })),
                          }
                        : undefined,
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
      
          console.log('Produto criado:', produto);
          return produto;
      
        } catch (err: any) {
          if (err.code === 'P2003') {
            console.error("Erro de chave estrangeira (FK):", err.meta?.field_name);
            throw new Error(`Erro de chave estrangeira: verifique se ${err.meta?.field_name} existe.`);
          }
      
          console.error("Erro ao cadastrar produto:", err);
          throw new Error("Erro ao cadastrar produto.");
        }
}
export async function atualizarProduto      (productId: number, data: ProductInput) {
  await prisma.products.update({
    where: { id: productId },
    data: {
      name: data.name,
      reference: data.reference,
      type: data.type as products_type,
      gender: data.gender as products_gender,
      prompt_delivery: data.prompt_delivery,
      companyId: data.companyId,
      brand_id: data.brand_id,
      category_id: data.category_id,
      subcategory_id: data.subcategory_id,
    },
  });

  for (const variant of data.variants) {
    const existingVariant = await prisma.variants.findFirst({
      where: {
        name: variant.name,
        product_id: productId,
      },
    });

    let variantRecord;

    if (existingVariant) {
      variantRecord = await prisma.variants.update({
        where: { id: existingVariant.id },
        data: {
          name: variant.name,
          hex_code: variant.hex_code,
        },
      });
    } else {
      variantRecord = await prisma.variants.create({
        data: {
          name: variant.name,
          hex_code: variant.hex_code,
          product_id: productId,
        },
      });
    }

    for (const sku of variant.skus) {
      const skuRecord = await prisma.skus.upsert({
        where: { erpId: sku.erpId },
        update: {
          size: sku.size,
          stock: sku.stock,
          price: sku.price,
          code: sku.code,
          min_quantity: sku.min_quantity,
          multiple_quantity: sku.multiple_quantity,
          cest: sku.cest,
          height: sku.height,
          length: sku.length,
          ncm: sku.ncm,
          weight: sku.weight,
          width: sku.width,
          variant_id: variantRecord.id,
        },
        create: {
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
          variant_id: variantRecord.id,
        },
      });

      for (const pts of sku.price_tables_skus) {
        await prisma.price_tables_skus.upsert({
          where: {
            sku_id_price_table_id: {
              sku_id: skuRecord.id,
              price_table_id: pts.price_table_id,
            },
          },
          update: {
            price: pts.price,
          },
          create: {
            price: pts.price,
            price_table_id: pts.price_table_id,
            sku_id: skuRecord.id,
          },
        });
      }
    }
  }
}
export async function listarProdutos        (
  filtros: any,
  skip: number,
  limitNumber: number,
  companyId: number
) {
  try {
    const where: any = {
      ...filtros,
      companyId,
      deleted_at: null,
    };

    const produtos = await prisma.products.findMany({
      where,
      skip,
      take: limitNumber,
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

    const total = await prisma.products.count({ where });

    const produtosFormatados = produtos.map(produto => ({
      id: produto.id,
      name: produto.name,
      reference: produto.reference,
      type: produto.type,
      gender: produto.gender,
      prompt_delivery: produto.prompt_delivery,
      companyId: produto.companyId,
      brand_id: produto.brand_id,
      category_id: produto.category_id,
      subcategory_id: produto.subcategory_id,
      variants: produto.variants.map(variant => ({
        name: variant.name,
        hex_code: variant.hex_code,
        skus: variant.skus.map(sku => ({
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
          price_tables_skus: sku.price_tables_skus.map(priceTableSku => ({
            price: priceTableSku.price,
            price_table_id: priceTableSku.price_table_id,
          })),
        })),
      })),
    }));

    return { produtos: produtosFormatados, total };
  } catch (error) {
    console.error('Erro ao listar produtos no Model:', error);
    throw new Error('Erro ao listar produtos');
  }
}
export async function excluirProduto        (id: number) {
    const prod = await prisma.products.findUnique({ where: { id } });
    if (!prod) return null;
    await prisma.products.update({
      where: { id },
      data: { deleted_at: new Date() },
    });
    return true;
}
export async function produtosExcluidos     (companyId: number) {
  return prisma.products.findMany({
    where: {
      deleted_at: {
        not: null,
      },
      companyId,
    },
  });
}
export async function buscarProdutosQuerys  (
  query: any,
  companyId: number
): Promise<{
  page: number;
  limit: number;
  produtos: any[];
  total: number;
  pageNumber: number;
  limitNumber: number;
}> {
  const {
    name,
    reference,
    category_id,
    brand_id,
    type,
    gender,
    prompt_delivery,
    incluirExcluidos,
    page: pageQuery = '1',
    limit: limitQuery = '10'
  } = query;

  console.log('[LOG] Query recebida:', query);

  const pageNumber = parseInt(pageQuery, 10);
  const limitNumber = parseInt(limitQuery, 10);
  const skip = (pageNumber - 1) * limitNumber;

  const enumTypeValues = ['MASCULINO', 'FEMININO', 'UNISSEX'];
  const enumGenderValues = ['M', 'F', 'U'];

  // Montagem manual do filtro (sem spreads condicionalmente perigosos)
  const where: any = {
    companyId,
  };

  // Filtra excluídos, apenas se NÃO for incluir os excluídos
  if (incluirExcluidos !== 'true') {
    where.deleted_at = null;
  }

  if (name && typeof name === 'string') {
    where.name = { contains: name };
  }

  if (reference && typeof reference === 'string') {
    where.reference = { contains: reference };
  }

  if (category_id && !isNaN(Number(category_id))) {
    where.category_id = Number(category_id);
  }

  if (brand_id && !isNaN(Number(brand_id))) {
    where.brand_id = Number(brand_id);
  }

  if (type && enumTypeValues.includes(type)) {
    where.type = type;
  }

  if (gender && enumGenderValues.includes(gender)) {
    where.gender = gender;
  }

  if (prompt_delivery !== undefined) {
    where.prompt_delivery = prompt_delivery === 'true';
  }

  console.log('[LOG] Filtros aplicados no WHERE:', where);

  const [produtos, total] = await Promise.all([
    prisma.products.findMany({
      where,
      skip,
      take: limitNumber,
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
    }),
    prisma.products.count({ where }),
  ]);

  return {
    produtos,
    total,
    pageNumber,
    limitNumber,
    page: pageNumber,
    limit: limitNumber,
  };
}
export async function getProntaEntrega      (companyId:number) {
  return prisma.products.findMany({
    where: {
      prompt_delivery: true,
      companyId,
      deleted_at: { equals: null },
      
    },
    select: {
      id: true,
      name: true,
    },
  });
}
export async function countProdutos         (query: any, CompanyId:number) {
  const {
    name, reference, category_id, brand_id,
    type, gender, prompt_delivery
  } = query;

  const where: any = {
    ...(name && {
      name: { contains: name, mode: 'insensitive' },
    }),
    ...(reference && {
      reference: { contains: reference, mode: 'insensitive' },
    }),
    ...(category_id && { category_id: Number(category_id) }),
    ...(brand_id && { brand_id: Number(brand_id) }),
    ...(type && { type: { equals: type } }),
    ...(gender && { gender: { equals: gender } }),
    ...(prompt_delivery !== undefined && {
      prompt_delivery: prompt_delivery === 'true',
    }),
    CompanyId,
  };
}





