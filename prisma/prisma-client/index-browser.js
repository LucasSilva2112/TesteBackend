
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BrandsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  logo_img: 'logo_img',
  min_value: 'min_value',
  min_installments_value: 'min_installments_value',
  visible: 'visible',
  sku_order: 'sku_order',
  address_id: 'address_id',
  business_id: 'business_id',
  company_Id: 'company_Id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.CategoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  company_Id: 'company_Id'
};

exports.Prisma.Price_tablesScalarFieldEnum = {
  id: 'id',
  description: 'description',
  price_adjustment: 'price_adjustment',
  minimum_value: 'minimum_value',
  visible: 'visible',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  company_Id: 'company_Id'
};

exports.Prisma.Price_tables_skusScalarFieldEnum = {
  id: 'id',
  price: 'price',
  created_at: 'created_at',
  updated_at: 'updated_at',
  sku_id: 'sku_id',
  price_table_id: 'price_table_id'
};

exports.Prisma.ProductsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  reference: 'reference',
  type: 'type',
  gender: 'gender',
  prompt_delivery: 'prompt_delivery',
  description: 'description',
  company_Id: 'company_Id',
  erp_id: 'erp_id',
  brand_id: 'brand_id',
  deadline_id: 'deadline_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  category_id: 'category_id',
  subcategory_id: 'subcategory_id',
  category_order: 'category_order',
  composition_data: 'composition_data',
  technical_information: 'technical_information',
  open_grid: 'open_grid',
  ipi: 'ipi',
  is_discontinued: 'is_discontinued',
  is_launch: 'is_launch',
  is_visible: 'is_visible',
  colection: 'colection'
};

exports.Prisma.CompaniesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  reated_at: 'reated_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.SkusScalarFieldEnum = {
  id: 'id',
  size: 'size',
  stock: 'stock',
  price: 'price',
  code: 'code',
  min_quantity: 'min_quantity',
  multiple_quantity: 'multiple_quantity',
  erpId: 'erpId',
  variant_id: 'variant_id',
  cest: 'cest',
  height: 'height',
  length: 'length',
  ncm: 'ncm',
  weight: 'weight',
  width: 'width',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.SubcategoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category_id: 'category_id',
  created_at: 'created_at'
};

exports.Prisma.VariantsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  hex_code: 'hex_code',
  product_id: 'product_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.brandsOrderByRelevanceFieldEnum = {
  name: 'name',
  logo_img: 'logo_img',
  sku_order: 'sku_order'
};

exports.Prisma.categoriesOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.price_tablesOrderByRelevanceFieldEnum = {
  description: 'description'
};

exports.Prisma.productsOrderByRelevanceFieldEnum = {
  name: 'name',
  reference: 'reference',
  description: 'description',
  erp_id: 'erp_id',
  composition_data: 'composition_data',
  technical_information: 'technical_information',
  colection: 'colection'
};

exports.Prisma.companiesOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.skusOrderByRelevanceFieldEnum = {
  size: 'size',
  code: 'code',
  erpId: 'erpId',
  cest: 'cest',
  ncm: 'ncm'
};

exports.Prisma.subcategoriesOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.variantsOrderByRelevanceFieldEnum = {
  name: 'name',
  hex_code: 'hex_code'
};
exports.products_type = exports.$Enums.products_type = {
  NACIONAL: 'NACIONAL',
  IMPORTADO: 'IMPORTADO'
};

exports.products_gender = exports.$Enums.products_gender = {
  MASCULINO: 'MASCULINO',
  FEMININO: 'FEMININO',
  INFANTIL: 'INFANTIL',
  JUVENIL: 'JUVENIL',
  UNISSEX: 'UNISSEX',
  FAT: 'FAT',
  OUTRO: 'OUTRO'
};

exports.Prisma.ModelName = {
  brands: 'brands',
  categories: 'categories',
  price_tables: 'price_tables',
  price_tables_skus: 'price_tables_skus',
  products: 'products',
  companies: 'companies',
  skus: 'skus',
  subcategories: 'subcategories',
  variants: 'variants'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
