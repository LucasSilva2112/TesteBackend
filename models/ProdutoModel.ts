export interface VariantComProdutoESkus {
    id: number;
    cor: string;
    produto: {
      nome: string;
    };
    skus: {
      tamanho: string;
      price_table_id: number;
    }[];
  }
  