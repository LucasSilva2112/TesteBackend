
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model brands
 * 
 */
export type brands = $Result.DefaultSelection<Prisma.$brandsPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model price_tables
 * 
 */
export type price_tables = $Result.DefaultSelection<Prisma.$price_tablesPayload>
/**
 * Model price_tables_skus
 * 
 */
export type price_tables_skus = $Result.DefaultSelection<Prisma.$price_tables_skusPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model companies
 * 
 */
export type companies = $Result.DefaultSelection<Prisma.$companiesPayload>
/**
 * Model skus
 * 
 */
export type skus = $Result.DefaultSelection<Prisma.$skusPayload>
/**
 * Model subcategories
 * 
 */
export type subcategories = $Result.DefaultSelection<Prisma.$subcategoriesPayload>
/**
 * Model variants
 * 
 */
export type variants = $Result.DefaultSelection<Prisma.$variantsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const products_type: {
  NACIONAL: 'NACIONAL',
  IMPORTADO: 'IMPORTADO'
};

export type products_type = (typeof products_type)[keyof typeof products_type]


export const products_gender: {
  MASCULINO: 'MASCULINO',
  FEMININO: 'FEMININO',
  INFANTIL: 'INFANTIL',
  JUVENIL: 'JUVENIL',
  UNISSEX: 'UNISSEX',
  FAT: 'FAT',
  OUTRO: 'OUTRO'
};

export type products_gender = (typeof products_gender)[keyof typeof products_gender]

}

export type products_type = $Enums.products_type

export const products_type: typeof $Enums.products_type

export type products_gender = $Enums.products_gender

export const products_gender: typeof $Enums.products_gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Brands
 * const brands = await prisma.brands.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Brands
   * const brands = await prisma.brands.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.brands`: Exposes CRUD operations for the **brands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brands.findMany()
    * ```
    */
  get brands(): Prisma.brandsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.price_tables`: Exposes CRUD operations for the **price_tables** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Price_tables
    * const price_tables = await prisma.price_tables.findMany()
    * ```
    */
  get price_tables(): Prisma.price_tablesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.price_tables_skus`: Exposes CRUD operations for the **price_tables_skus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Price_tables_skuses
    * const price_tables_skuses = await prisma.price_tables_skus.findMany()
    * ```
    */
  get price_tables_skus(): Prisma.price_tables_skusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companies`: Exposes CRUD operations for the **companies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.companies.findMany()
    * ```
    */
  get companies(): Prisma.companiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skus`: Exposes CRUD operations for the **skus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skuses
    * const skuses = await prisma.skus.findMany()
    * ```
    */
  get skus(): Prisma.skusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subcategories`: Exposes CRUD operations for the **subcategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subcategories
    * const subcategories = await prisma.subcategories.findMany()
    * ```
    */
  get subcategories(): Prisma.subcategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variants`: Exposes CRUD operations for the **variants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variants
    * const variants = await prisma.variants.findMany()
    * ```
    */
  get variants(): Prisma.variantsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "brands" | "categories" | "price_tables" | "price_tables_skus" | "products" | "companies" | "skus" | "subcategories" | "variants"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      brands: {
        payload: Prisma.$brandsPayload<ExtArgs>
        fields: Prisma.brandsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.brandsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.brandsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          findFirst: {
            args: Prisma.brandsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.brandsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          findMany: {
            args: Prisma.brandsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>[]
          }
          create: {
            args: Prisma.brandsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          createMany: {
            args: Prisma.brandsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.brandsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          update: {
            args: Prisma.brandsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          deleteMany: {
            args: Prisma.brandsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.brandsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.brandsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          aggregate: {
            args: Prisma.BrandsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrands>
          }
          groupBy: {
            args: Prisma.brandsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandsGroupByOutputType>[]
          }
          count: {
            args: Prisma.brandsCountArgs<ExtArgs>
            result: $Utils.Optional<BrandsCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      price_tables: {
        payload: Prisma.$price_tablesPayload<ExtArgs>
        fields: Prisma.price_tablesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.price_tablesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tablesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.price_tablesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tablesPayload>
          }
          findFirst: {
            args: Prisma.price_tablesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tablesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.price_tablesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tablesPayload>
          }
          findMany: {
            args: Prisma.price_tablesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tablesPayload>[]
          }
          create: {
            args: Prisma.price_tablesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tablesPayload>
          }
          createMany: {
            args: Prisma.price_tablesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.price_tablesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tablesPayload>
          }
          update: {
            args: Prisma.price_tablesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tablesPayload>
          }
          deleteMany: {
            args: Prisma.price_tablesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.price_tablesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.price_tablesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tablesPayload>
          }
          aggregate: {
            args: Prisma.Price_tablesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrice_tables>
          }
          groupBy: {
            args: Prisma.price_tablesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Price_tablesGroupByOutputType>[]
          }
          count: {
            args: Prisma.price_tablesCountArgs<ExtArgs>
            result: $Utils.Optional<Price_tablesCountAggregateOutputType> | number
          }
        }
      }
      price_tables_skus: {
        payload: Prisma.$price_tables_skusPayload<ExtArgs>
        fields: Prisma.price_tables_skusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.price_tables_skusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tables_skusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.price_tables_skusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tables_skusPayload>
          }
          findFirst: {
            args: Prisma.price_tables_skusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tables_skusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.price_tables_skusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tables_skusPayload>
          }
          findMany: {
            args: Prisma.price_tables_skusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tables_skusPayload>[]
          }
          create: {
            args: Prisma.price_tables_skusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tables_skusPayload>
          }
          createMany: {
            args: Prisma.price_tables_skusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.price_tables_skusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tables_skusPayload>
          }
          update: {
            args: Prisma.price_tables_skusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tables_skusPayload>
          }
          deleteMany: {
            args: Prisma.price_tables_skusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.price_tables_skusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.price_tables_skusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$price_tables_skusPayload>
          }
          aggregate: {
            args: Prisma.Price_tables_skusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrice_tables_skus>
          }
          groupBy: {
            args: Prisma.price_tables_skusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Price_tables_skusGroupByOutputType>[]
          }
          count: {
            args: Prisma.price_tables_skusCountArgs<ExtArgs>
            result: $Utils.Optional<Price_tables_skusCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      companies: {
        payload: Prisma.$companiesPayload<ExtArgs>
        fields: Prisma.companiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          findFirst: {
            args: Prisma.companiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          findMany: {
            args: Prisma.companiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>[]
          }
          create: {
            args: Prisma.companiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          createMany: {
            args: Prisma.companiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.companiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          update: {
            args: Prisma.companiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          deleteMany: {
            args: Prisma.companiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.companiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          aggregate: {
            args: Prisma.CompaniesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanies>
          }
          groupBy: {
            args: Prisma.companiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompaniesGroupByOutputType>[]
          }
          count: {
            args: Prisma.companiesCountArgs<ExtArgs>
            result: $Utils.Optional<CompaniesCountAggregateOutputType> | number
          }
        }
      }
      skus: {
        payload: Prisma.$skusPayload<ExtArgs>
        fields: Prisma.skusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skusPayload>
          }
          findFirst: {
            args: Prisma.skusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skusPayload>
          }
          findMany: {
            args: Prisma.skusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skusPayload>[]
          }
          create: {
            args: Prisma.skusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skusPayload>
          }
          createMany: {
            args: Prisma.skusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.skusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skusPayload>
          }
          update: {
            args: Prisma.skusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skusPayload>
          }
          deleteMany: {
            args: Prisma.skusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.skusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skusPayload>
          }
          aggregate: {
            args: Prisma.SkusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkus>
          }
          groupBy: {
            args: Prisma.skusGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkusGroupByOutputType>[]
          }
          count: {
            args: Prisma.skusCountArgs<ExtArgs>
            result: $Utils.Optional<SkusCountAggregateOutputType> | number
          }
        }
      }
      subcategories: {
        payload: Prisma.$subcategoriesPayload<ExtArgs>
        fields: Prisma.subcategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subcategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subcategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload>
          }
          findFirst: {
            args: Prisma.subcategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subcategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload>
          }
          findMany: {
            args: Prisma.subcategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload>[]
          }
          create: {
            args: Prisma.subcategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload>
          }
          createMany: {
            args: Prisma.subcategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.subcategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload>
          }
          update: {
            args: Prisma.subcategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload>
          }
          deleteMany: {
            args: Prisma.subcategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subcategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.subcategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriesPayload>
          }
          aggregate: {
            args: Prisma.SubcategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubcategories>
          }
          groupBy: {
            args: Prisma.subcategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubcategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.subcategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<SubcategoriesCountAggregateOutputType> | number
          }
        }
      }
      variants: {
        payload: Prisma.$variantsPayload<ExtArgs>
        fields: Prisma.variantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.variantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.variantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload>
          }
          findFirst: {
            args: Prisma.variantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.variantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload>
          }
          findMany: {
            args: Prisma.variantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload>[]
          }
          create: {
            args: Prisma.variantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload>
          }
          createMany: {
            args: Prisma.variantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.variantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload>
          }
          update: {
            args: Prisma.variantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload>
          }
          deleteMany: {
            args: Prisma.variantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.variantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.variantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantsPayload>
          }
          aggregate: {
            args: Prisma.VariantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariants>
          }
          groupBy: {
            args: Prisma.variantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.variantsCountArgs<ExtArgs>
            result: $Utils.Optional<VariantsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    brands?: brandsOmit
    categories?: categoriesOmit
    price_tables?: price_tablesOmit
    price_tables_skus?: price_tables_skusOmit
    products?: productsOmit
    companies?: companiesOmit
    skus?: skusOmit
    subcategories?: subcategoriesOmit
    variants?: variantsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BrandsCountOutputType
   */

  export type BrandsCountOutputType = {
    products: number
  }

  export type BrandsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | BrandsCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * BrandsCountOutputType without action
   */
  export type BrandsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsCountOutputType
     */
    select?: BrandsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandsCountOutputType without action
   */
  export type BrandsCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    products: number
    subcategories: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs
    subcategories?: boolean | CategoriesCountOutputTypeCountSubcategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountSubcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subcategoriesWhereInput
  }


  /**
   * Count Type Price_tablesCountOutputType
   */

  export type Price_tablesCountOutputType = {
    price_tables_skus: number
  }

  export type Price_tablesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    price_tables_skus?: boolean | Price_tablesCountOutputTypeCountPrice_tables_skusArgs
  }

  // Custom InputTypes
  /**
   * Price_tablesCountOutputType without action
   */
  export type Price_tablesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price_tablesCountOutputType
     */
    select?: Price_tablesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Price_tablesCountOutputType without action
   */
  export type Price_tablesCountOutputTypeCountPrice_tables_skusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: price_tables_skusWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    variants: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | ProductsCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: variantsWhereInput
  }


  /**
   * Count Type CompaniesCountOutputType
   */

  export type CompaniesCountOutputType = {
    products: number
    brands: number
    categories: number
    price_tables: number
  }

  export type CompaniesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CompaniesCountOutputTypeCountProductsArgs
    brands?: boolean | CompaniesCountOutputTypeCountBrandsArgs
    categories?: boolean | CompaniesCountOutputTypeCountCategoriesArgs
    price_tables?: boolean | CompaniesCountOutputTypeCountPrice_tablesArgs
  }

  // Custom InputTypes
  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesCountOutputType
     */
    select?: CompaniesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountBrandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: brandsWhereInput
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountPrice_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: price_tablesWhereInput
  }


  /**
   * Count Type SkusCountOutputType
   */

  export type SkusCountOutputType = {
    price_tables_skus: number
  }

  export type SkusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    price_tables_skus?: boolean | SkusCountOutputTypeCountPrice_tables_skusArgs
  }

  // Custom InputTypes
  /**
   * SkusCountOutputType without action
   */
  export type SkusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkusCountOutputType
     */
    select?: SkusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkusCountOutputType without action
   */
  export type SkusCountOutputTypeCountPrice_tables_skusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: price_tables_skusWhereInput
  }


  /**
   * Count Type SubcategoriesCountOutputType
   */

  export type SubcategoriesCountOutputType = {
    products: number
  }

  export type SubcategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SubcategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * SubcategoriesCountOutputType without action
   */
  export type SubcategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoriesCountOutputType
     */
    select?: SubcategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubcategoriesCountOutputType without action
   */
  export type SubcategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type VariantsCountOutputType
   */

  export type VariantsCountOutputType = {
    skus: number
  }

  export type VariantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skus?: boolean | VariantsCountOutputTypeCountSkusArgs
  }

  // Custom InputTypes
  /**
   * VariantsCountOutputType without action
   */
  export type VariantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantsCountOutputType
     */
    select?: VariantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VariantsCountOutputType without action
   */
  export type VariantsCountOutputTypeCountSkusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skusWhereInput
  }


  /**
   * Models
   */

  /**
   * Model brands
   */

  export type AggregateBrands = {
    _count: BrandsCountAggregateOutputType | null
    _avg: BrandsAvgAggregateOutputType | null
    _sum: BrandsSumAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  export type BrandsAvgAggregateOutputType = {
    id: number | null
    min_value: Decimal | null
    min_installments_value: Decimal | null
    address_id: number | null
    business_id: number | null
    company_Id: number | null
  }

  export type BrandsSumAggregateOutputType = {
    id: number | null
    min_value: Decimal | null
    min_installments_value: Decimal | null
    address_id: number | null
    business_id: number | null
    company_Id: number | null
  }

  export type BrandsMinAggregateOutputType = {
    id: number | null
    name: string | null
    logo_img: string | null
    min_value: Decimal | null
    min_installments_value: Decimal | null
    visible: boolean | null
    sku_order: string | null
    address_id: number | null
    business_id: number | null
    company_Id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type BrandsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    logo_img: string | null
    min_value: Decimal | null
    min_installments_value: Decimal | null
    visible: boolean | null
    sku_order: string | null
    address_id: number | null
    business_id: number | null
    company_Id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type BrandsCountAggregateOutputType = {
    id: number
    name: number
    logo_img: number
    min_value: number
    min_installments_value: number
    visible: number
    sku_order: number
    address_id: number
    business_id: number
    company_Id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type BrandsAvgAggregateInputType = {
    id?: true
    min_value?: true
    min_installments_value?: true
    address_id?: true
    business_id?: true
    company_Id?: true
  }

  export type BrandsSumAggregateInputType = {
    id?: true
    min_value?: true
    min_installments_value?: true
    address_id?: true
    business_id?: true
    company_Id?: true
  }

  export type BrandsMinAggregateInputType = {
    id?: true
    name?: true
    logo_img?: true
    min_value?: true
    min_installments_value?: true
    visible?: true
    sku_order?: true
    address_id?: true
    business_id?: true
    company_Id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type BrandsMaxAggregateInputType = {
    id?: true
    name?: true
    logo_img?: true
    min_value?: true
    min_installments_value?: true
    visible?: true
    sku_order?: true
    address_id?: true
    business_id?: true
    company_Id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type BrandsCountAggregateInputType = {
    id?: true
    name?: true
    logo_img?: true
    min_value?: true
    min_installments_value?: true
    visible?: true
    sku_order?: true
    address_id?: true
    business_id?: true
    company_Id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type BrandsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which brands to aggregate.
     */
    where?: brandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brands to fetch.
     */
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: brandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned brands
    **/
    _count?: true | BrandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandsMaxAggregateInputType
  }

  export type GetBrandsAggregateType<T extends BrandsAggregateArgs> = {
        [P in keyof T & keyof AggregateBrands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrands[P]>
      : GetScalarType<T[P], AggregateBrands[P]>
  }




  export type brandsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: brandsWhereInput
    orderBy?: brandsOrderByWithAggregationInput | brandsOrderByWithAggregationInput[]
    by: BrandsScalarFieldEnum[] | BrandsScalarFieldEnum
    having?: brandsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandsCountAggregateInputType | true
    _avg?: BrandsAvgAggregateInputType
    _sum?: BrandsSumAggregateInputType
    _min?: BrandsMinAggregateInputType
    _max?: BrandsMaxAggregateInputType
  }

  export type BrandsGroupByOutputType = {
    id: number
    name: string
    logo_img: string | null
    min_value: Decimal
    min_installments_value: Decimal
    visible: boolean | null
    sku_order: string | null
    address_id: number | null
    business_id: number
    company_Id: number
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: BrandsCountAggregateOutputType | null
    _avg: BrandsAvgAggregateOutputType | null
    _sum: BrandsSumAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  type GetBrandsGroupByPayload<T extends brandsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandsGroupByOutputType[P]>
            : GetScalarType<T[P], BrandsGroupByOutputType[P]>
        }
      >
    >


  export type brandsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo_img?: boolean
    min_value?: boolean
    min_installments_value?: boolean
    visible?: boolean
    sku_order?: boolean
    address_id?: boolean
    business_id?: boolean
    company_Id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
    products?: boolean | brands$productsArgs<ExtArgs>
    _count?: boolean | BrandsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brands"]>



  export type brandsSelectScalar = {
    id?: boolean
    name?: boolean
    logo_img?: boolean
    min_value?: boolean
    min_installments_value?: boolean
    visible?: boolean
    sku_order?: boolean
    address_id?: boolean
    business_id?: boolean
    company_Id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type brandsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo_img" | "min_value" | "min_installments_value" | "visible" | "sku_order" | "address_id" | "business_id" | "company_Id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["brands"]>
  export type brandsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
    products?: boolean | brands$productsArgs<ExtArgs>
    _count?: boolean | BrandsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $brandsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "brands"
    objects: {
      company: Prisma.$companiesPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      logo_img: string | null
      min_value: Prisma.Decimal
      min_installments_value: Prisma.Decimal
      visible: boolean | null
      sku_order: string | null
      address_id: number | null
      business_id: number
      company_Id: number
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["brands"]>
    composites: {}
  }

  type brandsGetPayload<S extends boolean | null | undefined | brandsDefaultArgs> = $Result.GetResult<Prisma.$brandsPayload, S>

  type brandsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<brandsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandsCountAggregateInputType | true
    }

  export interface brandsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['brands'], meta: { name: 'brands' } }
    /**
     * Find zero or one Brands that matches the filter.
     * @param {brandsFindUniqueArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends brandsFindUniqueArgs>(args: SelectSubset<T, brandsFindUniqueArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brands that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {brandsFindUniqueOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends brandsFindUniqueOrThrowArgs>(args: SelectSubset<T, brandsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsFindFirstArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends brandsFindFirstArgs>(args?: SelectSubset<T, brandsFindFirstArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brands that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsFindFirstOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends brandsFindFirstOrThrowArgs>(args?: SelectSubset<T, brandsFindFirstOrThrowArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brands.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandsWithIdOnly = await prisma.brands.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends brandsFindManyArgs>(args?: SelectSubset<T, brandsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brands.
     * @param {brandsCreateArgs} args - Arguments to create a Brands.
     * @example
     * // Create one Brands
     * const Brands = await prisma.brands.create({
     *   data: {
     *     // ... data to create a Brands
     *   }
     * })
     * 
     */
    create<T extends brandsCreateArgs>(args: SelectSubset<T, brandsCreateArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {brandsCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brands = await prisma.brands.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends brandsCreateManyArgs>(args?: SelectSubset<T, brandsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Brands.
     * @param {brandsDeleteArgs} args - Arguments to delete one Brands.
     * @example
     * // Delete one Brands
     * const Brands = await prisma.brands.delete({
     *   where: {
     *     // ... filter to delete one Brands
     *   }
     * })
     * 
     */
    delete<T extends brandsDeleteArgs>(args: SelectSubset<T, brandsDeleteArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brands.
     * @param {brandsUpdateArgs} args - Arguments to update one Brands.
     * @example
     * // Update one Brands
     * const brands = await prisma.brands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends brandsUpdateArgs>(args: SelectSubset<T, brandsUpdateArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {brandsDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends brandsDeleteManyArgs>(args?: SelectSubset<T, brandsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brands = await prisma.brands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends brandsUpdateManyArgs>(args: SelectSubset<T, brandsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brands.
     * @param {brandsUpsertArgs} args - Arguments to update or create a Brands.
     * @example
     * // Update or create a Brands
     * const brands = await prisma.brands.upsert({
     *   create: {
     *     // ... data to create a Brands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brands we want to update
     *   }
     * })
     */
    upsert<T extends brandsUpsertArgs>(args: SelectSubset<T, brandsUpsertArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brands.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends brandsCountArgs>(
      args?: Subset<T, brandsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandsAggregateArgs>(args: Subset<T, BrandsAggregateArgs>): Prisma.PrismaPromise<GetBrandsAggregateType<T>>

    /**
     * Group by Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends brandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: brandsGroupByArgs['orderBy'] }
        : { orderBy?: brandsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, brandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the brands model
   */
  readonly fields: brandsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for brands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__brandsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends companiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companiesDefaultArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends brands$productsArgs<ExtArgs> = {}>(args?: Subset<T, brands$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the brands model
   */
  interface brandsFieldRefs {
    readonly id: FieldRef<"brands", 'Int'>
    readonly name: FieldRef<"brands", 'String'>
    readonly logo_img: FieldRef<"brands", 'String'>
    readonly min_value: FieldRef<"brands", 'Decimal'>
    readonly min_installments_value: FieldRef<"brands", 'Decimal'>
    readonly visible: FieldRef<"brands", 'Boolean'>
    readonly sku_order: FieldRef<"brands", 'String'>
    readonly address_id: FieldRef<"brands", 'Int'>
    readonly business_id: FieldRef<"brands", 'Int'>
    readonly company_Id: FieldRef<"brands", 'Int'>
    readonly created_at: FieldRef<"brands", 'DateTime'>
    readonly updated_at: FieldRef<"brands", 'DateTime'>
    readonly deleted_at: FieldRef<"brands", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * brands findUnique
   */
  export type brandsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where: brandsWhereUniqueInput
  }

  /**
   * brands findUniqueOrThrow
   */
  export type brandsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where: brandsWhereUniqueInput
  }

  /**
   * brands findFirst
   */
  export type brandsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where?: brandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brands to fetch.
     */
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for brands.
     */
    cursor?: brandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * brands findFirstOrThrow
   */
  export type brandsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where?: brandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brands to fetch.
     */
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for brands.
     */
    cursor?: brandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * brands findMany
   */
  export type brandsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where?: brandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brands to fetch.
     */
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing brands.
     */
    cursor?: brandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brands.
     */
    skip?: number
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * brands create
   */
  export type brandsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * The data needed to create a brands.
     */
    data: XOR<brandsCreateInput, brandsUncheckedCreateInput>
  }

  /**
   * brands createMany
   */
  export type brandsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many brands.
     */
    data: brandsCreateManyInput | brandsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * brands update
   */
  export type brandsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * The data needed to update a brands.
     */
    data: XOR<brandsUpdateInput, brandsUncheckedUpdateInput>
    /**
     * Choose, which brands to update.
     */
    where: brandsWhereUniqueInput
  }

  /**
   * brands updateMany
   */
  export type brandsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update brands.
     */
    data: XOR<brandsUpdateManyMutationInput, brandsUncheckedUpdateManyInput>
    /**
     * Filter which brands to update
     */
    where?: brandsWhereInput
    /**
     * Limit how many brands to update.
     */
    limit?: number
  }

  /**
   * brands upsert
   */
  export type brandsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * The filter to search for the brands to update in case it exists.
     */
    where: brandsWhereUniqueInput
    /**
     * In case the brands found by the `where` argument doesn't exist, create a new brands with this data.
     */
    create: XOR<brandsCreateInput, brandsUncheckedCreateInput>
    /**
     * In case the brands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<brandsUpdateInput, brandsUncheckedUpdateInput>
  }

  /**
   * brands delete
   */
  export type brandsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter which brands to delete.
     */
    where: brandsWhereUniqueInput
  }

  /**
   * brands deleteMany
   */
  export type brandsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which brands to delete
     */
    where?: brandsWhereInput
    /**
     * Limit how many brands to delete.
     */
    limit?: number
  }

  /**
   * brands.products
   */
  export type brands$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * brands without action
   */
  export type brandsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
    company_Id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
    company_Id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    company_Id: number | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    company_Id: number | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    company_Id: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
    company_Id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
    company_Id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    company_Id?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    company_Id?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    company_Id?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    created_at: Date | null
    company_Id: number
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    company_Id?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
    products?: boolean | categories$productsArgs<ExtArgs>
    subcategories?: boolean | categories$subcategoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>



  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    company_Id?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "company_Id", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
    products?: boolean | categories$productsArgs<ExtArgs>
    subcategories?: boolean | categories$subcategoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      company: Prisma.$companiesPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>[]
      subcategories: Prisma.$subcategoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date | null
      company_Id: number
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends companiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companiesDefaultArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subcategories<T extends categories$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, categories$subcategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
    readonly created_at: FieldRef<"categories", 'DateTime'>
    readonly company_Id: FieldRef<"categories", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.products
   */
  export type categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * categories.subcategories
   */
  export type categories$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    where?: subcategoriesWhereInput
    orderBy?: subcategoriesOrderByWithRelationInput | subcategoriesOrderByWithRelationInput[]
    cursor?: subcategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubcategoriesScalarFieldEnum | SubcategoriesScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model price_tables
   */

  export type AggregatePrice_tables = {
    _count: Price_tablesCountAggregateOutputType | null
    _avg: Price_tablesAvgAggregateOutputType | null
    _sum: Price_tablesSumAggregateOutputType | null
    _min: Price_tablesMinAggregateOutputType | null
    _max: Price_tablesMaxAggregateOutputType | null
  }

  export type Price_tablesAvgAggregateOutputType = {
    id: number | null
    price_adjustment: Decimal | null
    minimum_value: Decimal | null
    company_Id: number | null
  }

  export type Price_tablesSumAggregateOutputType = {
    id: number | null
    price_adjustment: Decimal | null
    minimum_value: Decimal | null
    company_Id: number | null
  }

  export type Price_tablesMinAggregateOutputType = {
    id: number | null
    description: string | null
    price_adjustment: Decimal | null
    minimum_value: Decimal | null
    visible: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    company_Id: number | null
  }

  export type Price_tablesMaxAggregateOutputType = {
    id: number | null
    description: string | null
    price_adjustment: Decimal | null
    minimum_value: Decimal | null
    visible: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    company_Id: number | null
  }

  export type Price_tablesCountAggregateOutputType = {
    id: number
    description: number
    price_adjustment: number
    minimum_value: number
    visible: number
    created_at: number
    updated_at: number
    deleted_at: number
    company_Id: number
    _all: number
  }


  export type Price_tablesAvgAggregateInputType = {
    id?: true
    price_adjustment?: true
    minimum_value?: true
    company_Id?: true
  }

  export type Price_tablesSumAggregateInputType = {
    id?: true
    price_adjustment?: true
    minimum_value?: true
    company_Id?: true
  }

  export type Price_tablesMinAggregateInputType = {
    id?: true
    description?: true
    price_adjustment?: true
    minimum_value?: true
    visible?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    company_Id?: true
  }

  export type Price_tablesMaxAggregateInputType = {
    id?: true
    description?: true
    price_adjustment?: true
    minimum_value?: true
    visible?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    company_Id?: true
  }

  export type Price_tablesCountAggregateInputType = {
    id?: true
    description?: true
    price_adjustment?: true
    minimum_value?: true
    visible?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    company_Id?: true
    _all?: true
  }

  export type Price_tablesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which price_tables to aggregate.
     */
    where?: price_tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of price_tables to fetch.
     */
    orderBy?: price_tablesOrderByWithRelationInput | price_tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: price_tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` price_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` price_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned price_tables
    **/
    _count?: true | Price_tablesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Price_tablesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Price_tablesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Price_tablesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Price_tablesMaxAggregateInputType
  }

  export type GetPrice_tablesAggregateType<T extends Price_tablesAggregateArgs> = {
        [P in keyof T & keyof AggregatePrice_tables]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrice_tables[P]>
      : GetScalarType<T[P], AggregatePrice_tables[P]>
  }




  export type price_tablesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: price_tablesWhereInput
    orderBy?: price_tablesOrderByWithAggregationInput | price_tablesOrderByWithAggregationInput[]
    by: Price_tablesScalarFieldEnum[] | Price_tablesScalarFieldEnum
    having?: price_tablesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Price_tablesCountAggregateInputType | true
    _avg?: Price_tablesAvgAggregateInputType
    _sum?: Price_tablesSumAggregateInputType
    _min?: Price_tablesMinAggregateInputType
    _max?: Price_tablesMaxAggregateInputType
  }

  export type Price_tablesGroupByOutputType = {
    id: number
    description: string
    price_adjustment: Decimal
    minimum_value: Decimal
    visible: boolean
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    company_Id: number
    _count: Price_tablesCountAggregateOutputType | null
    _avg: Price_tablesAvgAggregateOutputType | null
    _sum: Price_tablesSumAggregateOutputType | null
    _min: Price_tablesMinAggregateOutputType | null
    _max: Price_tablesMaxAggregateOutputType | null
  }

  type GetPrice_tablesGroupByPayload<T extends price_tablesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Price_tablesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Price_tablesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Price_tablesGroupByOutputType[P]>
            : GetScalarType<T[P], Price_tablesGroupByOutputType[P]>
        }
      >
    >


  export type price_tablesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    price_adjustment?: boolean
    minimum_value?: boolean
    visible?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    company_Id?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
    price_tables_skus?: boolean | price_tables$price_tables_skusArgs<ExtArgs>
    _count?: boolean | Price_tablesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price_tables"]>



  export type price_tablesSelectScalar = {
    id?: boolean
    description?: boolean
    price_adjustment?: boolean
    minimum_value?: boolean
    visible?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    company_Id?: boolean
  }

  export type price_tablesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "price_adjustment" | "minimum_value" | "visible" | "created_at" | "updated_at" | "deleted_at" | "company_Id", ExtArgs["result"]["price_tables"]>
  export type price_tablesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
    price_tables_skus?: boolean | price_tables$price_tables_skusArgs<ExtArgs>
    _count?: boolean | Price_tablesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $price_tablesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "price_tables"
    objects: {
      company: Prisma.$companiesPayload<ExtArgs>
      price_tables_skus: Prisma.$price_tables_skusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      price_adjustment: Prisma.Decimal
      minimum_value: Prisma.Decimal
      visible: boolean
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
      company_Id: number
    }, ExtArgs["result"]["price_tables"]>
    composites: {}
  }

  type price_tablesGetPayload<S extends boolean | null | undefined | price_tablesDefaultArgs> = $Result.GetResult<Prisma.$price_tablesPayload, S>

  type price_tablesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<price_tablesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Price_tablesCountAggregateInputType | true
    }

  export interface price_tablesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['price_tables'], meta: { name: 'price_tables' } }
    /**
     * Find zero or one Price_tables that matches the filter.
     * @param {price_tablesFindUniqueArgs} args - Arguments to find a Price_tables
     * @example
     * // Get one Price_tables
     * const price_tables = await prisma.price_tables.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends price_tablesFindUniqueArgs>(args: SelectSubset<T, price_tablesFindUniqueArgs<ExtArgs>>): Prisma__price_tablesClient<$Result.GetResult<Prisma.$price_tablesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Price_tables that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {price_tablesFindUniqueOrThrowArgs} args - Arguments to find a Price_tables
     * @example
     * // Get one Price_tables
     * const price_tables = await prisma.price_tables.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends price_tablesFindUniqueOrThrowArgs>(args: SelectSubset<T, price_tablesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__price_tablesClient<$Result.GetResult<Prisma.$price_tablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Price_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_tablesFindFirstArgs} args - Arguments to find a Price_tables
     * @example
     * // Get one Price_tables
     * const price_tables = await prisma.price_tables.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends price_tablesFindFirstArgs>(args?: SelectSubset<T, price_tablesFindFirstArgs<ExtArgs>>): Prisma__price_tablesClient<$Result.GetResult<Prisma.$price_tablesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Price_tables that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_tablesFindFirstOrThrowArgs} args - Arguments to find a Price_tables
     * @example
     * // Get one Price_tables
     * const price_tables = await prisma.price_tables.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends price_tablesFindFirstOrThrowArgs>(args?: SelectSubset<T, price_tablesFindFirstOrThrowArgs<ExtArgs>>): Prisma__price_tablesClient<$Result.GetResult<Prisma.$price_tablesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Price_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_tablesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Price_tables
     * const price_tables = await prisma.price_tables.findMany()
     * 
     * // Get first 10 Price_tables
     * const price_tables = await prisma.price_tables.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const price_tablesWithIdOnly = await prisma.price_tables.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends price_tablesFindManyArgs>(args?: SelectSubset<T, price_tablesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$price_tablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Price_tables.
     * @param {price_tablesCreateArgs} args - Arguments to create a Price_tables.
     * @example
     * // Create one Price_tables
     * const Price_tables = await prisma.price_tables.create({
     *   data: {
     *     // ... data to create a Price_tables
     *   }
     * })
     * 
     */
    create<T extends price_tablesCreateArgs>(args: SelectSubset<T, price_tablesCreateArgs<ExtArgs>>): Prisma__price_tablesClient<$Result.GetResult<Prisma.$price_tablesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Price_tables.
     * @param {price_tablesCreateManyArgs} args - Arguments to create many Price_tables.
     * @example
     * // Create many Price_tables
     * const price_tables = await prisma.price_tables.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends price_tablesCreateManyArgs>(args?: SelectSubset<T, price_tablesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Price_tables.
     * @param {price_tablesDeleteArgs} args - Arguments to delete one Price_tables.
     * @example
     * // Delete one Price_tables
     * const Price_tables = await prisma.price_tables.delete({
     *   where: {
     *     // ... filter to delete one Price_tables
     *   }
     * })
     * 
     */
    delete<T extends price_tablesDeleteArgs>(args: SelectSubset<T, price_tablesDeleteArgs<ExtArgs>>): Prisma__price_tablesClient<$Result.GetResult<Prisma.$price_tablesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Price_tables.
     * @param {price_tablesUpdateArgs} args - Arguments to update one Price_tables.
     * @example
     * // Update one Price_tables
     * const price_tables = await prisma.price_tables.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends price_tablesUpdateArgs>(args: SelectSubset<T, price_tablesUpdateArgs<ExtArgs>>): Prisma__price_tablesClient<$Result.GetResult<Prisma.$price_tablesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Price_tables.
     * @param {price_tablesDeleteManyArgs} args - Arguments to filter Price_tables to delete.
     * @example
     * // Delete a few Price_tables
     * const { count } = await prisma.price_tables.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends price_tablesDeleteManyArgs>(args?: SelectSubset<T, price_tablesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Price_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_tablesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Price_tables
     * const price_tables = await prisma.price_tables.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends price_tablesUpdateManyArgs>(args: SelectSubset<T, price_tablesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Price_tables.
     * @param {price_tablesUpsertArgs} args - Arguments to update or create a Price_tables.
     * @example
     * // Update or create a Price_tables
     * const price_tables = await prisma.price_tables.upsert({
     *   create: {
     *     // ... data to create a Price_tables
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Price_tables we want to update
     *   }
     * })
     */
    upsert<T extends price_tablesUpsertArgs>(args: SelectSubset<T, price_tablesUpsertArgs<ExtArgs>>): Prisma__price_tablesClient<$Result.GetResult<Prisma.$price_tablesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Price_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_tablesCountArgs} args - Arguments to filter Price_tables to count.
     * @example
     * // Count the number of Price_tables
     * const count = await prisma.price_tables.count({
     *   where: {
     *     // ... the filter for the Price_tables we want to count
     *   }
     * })
    **/
    count<T extends price_tablesCountArgs>(
      args?: Subset<T, price_tablesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Price_tablesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Price_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Price_tablesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Price_tablesAggregateArgs>(args: Subset<T, Price_tablesAggregateArgs>): Prisma.PrismaPromise<GetPrice_tablesAggregateType<T>>

    /**
     * Group by Price_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_tablesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends price_tablesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: price_tablesGroupByArgs['orderBy'] }
        : { orderBy?: price_tablesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, price_tablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrice_tablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the price_tables model
   */
  readonly fields: price_tablesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for price_tables.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__price_tablesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends companiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companiesDefaultArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    price_tables_skus<T extends price_tables$price_tables_skusArgs<ExtArgs> = {}>(args?: Subset<T, price_tables$price_tables_skusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$price_tables_skusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the price_tables model
   */
  interface price_tablesFieldRefs {
    readonly id: FieldRef<"price_tables", 'Int'>
    readonly description: FieldRef<"price_tables", 'String'>
    readonly price_adjustment: FieldRef<"price_tables", 'Decimal'>
    readonly minimum_value: FieldRef<"price_tables", 'Decimal'>
    readonly visible: FieldRef<"price_tables", 'Boolean'>
    readonly created_at: FieldRef<"price_tables", 'DateTime'>
    readonly updated_at: FieldRef<"price_tables", 'DateTime'>
    readonly deleted_at: FieldRef<"price_tables", 'DateTime'>
    readonly company_Id: FieldRef<"price_tables", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * price_tables findUnique
   */
  export type price_tablesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables
     */
    select?: price_tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables
     */
    omit?: price_tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tablesInclude<ExtArgs> | null
    /**
     * Filter, which price_tables to fetch.
     */
    where: price_tablesWhereUniqueInput
  }

  /**
   * price_tables findUniqueOrThrow
   */
  export type price_tablesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables
     */
    select?: price_tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables
     */
    omit?: price_tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tablesInclude<ExtArgs> | null
    /**
     * Filter, which price_tables to fetch.
     */
    where: price_tablesWhereUniqueInput
  }

  /**
   * price_tables findFirst
   */
  export type price_tablesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables
     */
    select?: price_tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables
     */
    omit?: price_tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tablesInclude<ExtArgs> | null
    /**
     * Filter, which price_tables to fetch.
     */
    where?: price_tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of price_tables to fetch.
     */
    orderBy?: price_tablesOrderByWithRelationInput | price_tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for price_tables.
     */
    cursor?: price_tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` price_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` price_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of price_tables.
     */
    distinct?: Price_tablesScalarFieldEnum | Price_tablesScalarFieldEnum[]
  }

  /**
   * price_tables findFirstOrThrow
   */
  export type price_tablesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables
     */
    select?: price_tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables
     */
    omit?: price_tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tablesInclude<ExtArgs> | null
    /**
     * Filter, which price_tables to fetch.
     */
    where?: price_tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of price_tables to fetch.
     */
    orderBy?: price_tablesOrderByWithRelationInput | price_tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for price_tables.
     */
    cursor?: price_tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` price_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` price_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of price_tables.
     */
    distinct?: Price_tablesScalarFieldEnum | Price_tablesScalarFieldEnum[]
  }

  /**
   * price_tables findMany
   */
  export type price_tablesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables
     */
    select?: price_tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables
     */
    omit?: price_tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tablesInclude<ExtArgs> | null
    /**
     * Filter, which price_tables to fetch.
     */
    where?: price_tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of price_tables to fetch.
     */
    orderBy?: price_tablesOrderByWithRelationInput | price_tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing price_tables.
     */
    cursor?: price_tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` price_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` price_tables.
     */
    skip?: number
    distinct?: Price_tablesScalarFieldEnum | Price_tablesScalarFieldEnum[]
  }

  /**
   * price_tables create
   */
  export type price_tablesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables
     */
    select?: price_tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables
     */
    omit?: price_tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tablesInclude<ExtArgs> | null
    /**
     * The data needed to create a price_tables.
     */
    data: XOR<price_tablesCreateInput, price_tablesUncheckedCreateInput>
  }

  /**
   * price_tables createMany
   */
  export type price_tablesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many price_tables.
     */
    data: price_tablesCreateManyInput | price_tablesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * price_tables update
   */
  export type price_tablesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables
     */
    select?: price_tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables
     */
    omit?: price_tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tablesInclude<ExtArgs> | null
    /**
     * The data needed to update a price_tables.
     */
    data: XOR<price_tablesUpdateInput, price_tablesUncheckedUpdateInput>
    /**
     * Choose, which price_tables to update.
     */
    where: price_tablesWhereUniqueInput
  }

  /**
   * price_tables updateMany
   */
  export type price_tablesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update price_tables.
     */
    data: XOR<price_tablesUpdateManyMutationInput, price_tablesUncheckedUpdateManyInput>
    /**
     * Filter which price_tables to update
     */
    where?: price_tablesWhereInput
    /**
     * Limit how many price_tables to update.
     */
    limit?: number
  }

  /**
   * price_tables upsert
   */
  export type price_tablesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables
     */
    select?: price_tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables
     */
    omit?: price_tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tablesInclude<ExtArgs> | null
    /**
     * The filter to search for the price_tables to update in case it exists.
     */
    where: price_tablesWhereUniqueInput
    /**
     * In case the price_tables found by the `where` argument doesn't exist, create a new price_tables with this data.
     */
    create: XOR<price_tablesCreateInput, price_tablesUncheckedCreateInput>
    /**
     * In case the price_tables was found with the provided `where` argument, update it with this data.
     */
    update: XOR<price_tablesUpdateInput, price_tablesUncheckedUpdateInput>
  }

  /**
   * price_tables delete
   */
  export type price_tablesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables
     */
    select?: price_tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables
     */
    omit?: price_tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tablesInclude<ExtArgs> | null
    /**
     * Filter which price_tables to delete.
     */
    where: price_tablesWhereUniqueInput
  }

  /**
   * price_tables deleteMany
   */
  export type price_tablesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which price_tables to delete
     */
    where?: price_tablesWhereInput
    /**
     * Limit how many price_tables to delete.
     */
    limit?: number
  }

  /**
   * price_tables.price_tables_skus
   */
  export type price_tables$price_tables_skusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables_skus
     */
    select?: price_tables_skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables_skus
     */
    omit?: price_tables_skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tables_skusInclude<ExtArgs> | null
    where?: price_tables_skusWhereInput
    orderBy?: price_tables_skusOrderByWithRelationInput | price_tables_skusOrderByWithRelationInput[]
    cursor?: price_tables_skusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Price_tables_skusScalarFieldEnum | Price_tables_skusScalarFieldEnum[]
  }

  /**
   * price_tables without action
   */
  export type price_tablesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables
     */
    select?: price_tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables
     */
    omit?: price_tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tablesInclude<ExtArgs> | null
  }


  /**
   * Model price_tables_skus
   */

  export type AggregatePrice_tables_skus = {
    _count: Price_tables_skusCountAggregateOutputType | null
    _avg: Price_tables_skusAvgAggregateOutputType | null
    _sum: Price_tables_skusSumAggregateOutputType | null
    _min: Price_tables_skusMinAggregateOutputType | null
    _max: Price_tables_skusMaxAggregateOutputType | null
  }

  export type Price_tables_skusAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    sku_id: number | null
    price_table_id: number | null
  }

  export type Price_tables_skusSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    sku_id: number | null
    price_table_id: number | null
  }

  export type Price_tables_skusMinAggregateOutputType = {
    id: number | null
    price: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    sku_id: number | null
    price_table_id: number | null
  }

  export type Price_tables_skusMaxAggregateOutputType = {
    id: number | null
    price: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    sku_id: number | null
    price_table_id: number | null
  }

  export type Price_tables_skusCountAggregateOutputType = {
    id: number
    price: number
    created_at: number
    updated_at: number
    sku_id: number
    price_table_id: number
    _all: number
  }


  export type Price_tables_skusAvgAggregateInputType = {
    id?: true
    price?: true
    sku_id?: true
    price_table_id?: true
  }

  export type Price_tables_skusSumAggregateInputType = {
    id?: true
    price?: true
    sku_id?: true
    price_table_id?: true
  }

  export type Price_tables_skusMinAggregateInputType = {
    id?: true
    price?: true
    created_at?: true
    updated_at?: true
    sku_id?: true
    price_table_id?: true
  }

  export type Price_tables_skusMaxAggregateInputType = {
    id?: true
    price?: true
    created_at?: true
    updated_at?: true
    sku_id?: true
    price_table_id?: true
  }

  export type Price_tables_skusCountAggregateInputType = {
    id?: true
    price?: true
    created_at?: true
    updated_at?: true
    sku_id?: true
    price_table_id?: true
    _all?: true
  }

  export type Price_tables_skusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which price_tables_skus to aggregate.
     */
    where?: price_tables_skusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of price_tables_skuses to fetch.
     */
    orderBy?: price_tables_skusOrderByWithRelationInput | price_tables_skusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: price_tables_skusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` price_tables_skuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` price_tables_skuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned price_tables_skuses
    **/
    _count?: true | Price_tables_skusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Price_tables_skusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Price_tables_skusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Price_tables_skusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Price_tables_skusMaxAggregateInputType
  }

  export type GetPrice_tables_skusAggregateType<T extends Price_tables_skusAggregateArgs> = {
        [P in keyof T & keyof AggregatePrice_tables_skus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrice_tables_skus[P]>
      : GetScalarType<T[P], AggregatePrice_tables_skus[P]>
  }




  export type price_tables_skusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: price_tables_skusWhereInput
    orderBy?: price_tables_skusOrderByWithAggregationInput | price_tables_skusOrderByWithAggregationInput[]
    by: Price_tables_skusScalarFieldEnum[] | Price_tables_skusScalarFieldEnum
    having?: price_tables_skusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Price_tables_skusCountAggregateInputType | true
    _avg?: Price_tables_skusAvgAggregateInputType
    _sum?: Price_tables_skusSumAggregateInputType
    _min?: Price_tables_skusMinAggregateInputType
    _max?: Price_tables_skusMaxAggregateInputType
  }

  export type Price_tables_skusGroupByOutputType = {
    id: number
    price: Decimal
    created_at: Date
    updated_at: Date | null
    sku_id: number
    price_table_id: number
    _count: Price_tables_skusCountAggregateOutputType | null
    _avg: Price_tables_skusAvgAggregateOutputType | null
    _sum: Price_tables_skusSumAggregateOutputType | null
    _min: Price_tables_skusMinAggregateOutputType | null
    _max: Price_tables_skusMaxAggregateOutputType | null
  }

  type GetPrice_tables_skusGroupByPayload<T extends price_tables_skusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Price_tables_skusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Price_tables_skusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Price_tables_skusGroupByOutputType[P]>
            : GetScalarType<T[P], Price_tables_skusGroupByOutputType[P]>
        }
      >
    >


  export type price_tables_skusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
    sku_id?: boolean
    price_table_id?: boolean
    price_tables?: boolean | price_tablesDefaultArgs<ExtArgs>
    skus?: boolean | skusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price_tables_skus"]>



  export type price_tables_skusSelectScalar = {
    id?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
    sku_id?: boolean
    price_table_id?: boolean
  }

  export type price_tables_skusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "created_at" | "updated_at" | "sku_id" | "price_table_id", ExtArgs["result"]["price_tables_skus"]>
  export type price_tables_skusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    price_tables?: boolean | price_tablesDefaultArgs<ExtArgs>
    skus?: boolean | skusDefaultArgs<ExtArgs>
  }

  export type $price_tables_skusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "price_tables_skus"
    objects: {
      price_tables: Prisma.$price_tablesPayload<ExtArgs>
      skus: Prisma.$skusPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      price: Prisma.Decimal
      created_at: Date
      updated_at: Date | null
      sku_id: number
      price_table_id: number
    }, ExtArgs["result"]["price_tables_skus"]>
    composites: {}
  }

  type price_tables_skusGetPayload<S extends boolean | null | undefined | price_tables_skusDefaultArgs> = $Result.GetResult<Prisma.$price_tables_skusPayload, S>

  type price_tables_skusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<price_tables_skusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Price_tables_skusCountAggregateInputType | true
    }

  export interface price_tables_skusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['price_tables_skus'], meta: { name: 'price_tables_skus' } }
    /**
     * Find zero or one Price_tables_skus that matches the filter.
     * @param {price_tables_skusFindUniqueArgs} args - Arguments to find a Price_tables_skus
     * @example
     * // Get one Price_tables_skus
     * const price_tables_skus = await prisma.price_tables_skus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends price_tables_skusFindUniqueArgs>(args: SelectSubset<T, price_tables_skusFindUniqueArgs<ExtArgs>>): Prisma__price_tables_skusClient<$Result.GetResult<Prisma.$price_tables_skusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Price_tables_skus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {price_tables_skusFindUniqueOrThrowArgs} args - Arguments to find a Price_tables_skus
     * @example
     * // Get one Price_tables_skus
     * const price_tables_skus = await prisma.price_tables_skus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends price_tables_skusFindUniqueOrThrowArgs>(args: SelectSubset<T, price_tables_skusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__price_tables_skusClient<$Result.GetResult<Prisma.$price_tables_skusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Price_tables_skus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_tables_skusFindFirstArgs} args - Arguments to find a Price_tables_skus
     * @example
     * // Get one Price_tables_skus
     * const price_tables_skus = await prisma.price_tables_skus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends price_tables_skusFindFirstArgs>(args?: SelectSubset<T, price_tables_skusFindFirstArgs<ExtArgs>>): Prisma__price_tables_skusClient<$Result.GetResult<Prisma.$price_tables_skusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Price_tables_skus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_tables_skusFindFirstOrThrowArgs} args - Arguments to find a Price_tables_skus
     * @example
     * // Get one Price_tables_skus
     * const price_tables_skus = await prisma.price_tables_skus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends price_tables_skusFindFirstOrThrowArgs>(args?: SelectSubset<T, price_tables_skusFindFirstOrThrowArgs<ExtArgs>>): Prisma__price_tables_skusClient<$Result.GetResult<Prisma.$price_tables_skusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Price_tables_skuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_tables_skusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Price_tables_skuses
     * const price_tables_skuses = await prisma.price_tables_skus.findMany()
     * 
     * // Get first 10 Price_tables_skuses
     * const price_tables_skuses = await prisma.price_tables_skus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const price_tables_skusWithIdOnly = await prisma.price_tables_skus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends price_tables_skusFindManyArgs>(args?: SelectSubset<T, price_tables_skusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$price_tables_skusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Price_tables_skus.
     * @param {price_tables_skusCreateArgs} args - Arguments to create a Price_tables_skus.
     * @example
     * // Create one Price_tables_skus
     * const Price_tables_skus = await prisma.price_tables_skus.create({
     *   data: {
     *     // ... data to create a Price_tables_skus
     *   }
     * })
     * 
     */
    create<T extends price_tables_skusCreateArgs>(args: SelectSubset<T, price_tables_skusCreateArgs<ExtArgs>>): Prisma__price_tables_skusClient<$Result.GetResult<Prisma.$price_tables_skusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Price_tables_skuses.
     * @param {price_tables_skusCreateManyArgs} args - Arguments to create many Price_tables_skuses.
     * @example
     * // Create many Price_tables_skuses
     * const price_tables_skus = await prisma.price_tables_skus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends price_tables_skusCreateManyArgs>(args?: SelectSubset<T, price_tables_skusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Price_tables_skus.
     * @param {price_tables_skusDeleteArgs} args - Arguments to delete one Price_tables_skus.
     * @example
     * // Delete one Price_tables_skus
     * const Price_tables_skus = await prisma.price_tables_skus.delete({
     *   where: {
     *     // ... filter to delete one Price_tables_skus
     *   }
     * })
     * 
     */
    delete<T extends price_tables_skusDeleteArgs>(args: SelectSubset<T, price_tables_skusDeleteArgs<ExtArgs>>): Prisma__price_tables_skusClient<$Result.GetResult<Prisma.$price_tables_skusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Price_tables_skus.
     * @param {price_tables_skusUpdateArgs} args - Arguments to update one Price_tables_skus.
     * @example
     * // Update one Price_tables_skus
     * const price_tables_skus = await prisma.price_tables_skus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends price_tables_skusUpdateArgs>(args: SelectSubset<T, price_tables_skusUpdateArgs<ExtArgs>>): Prisma__price_tables_skusClient<$Result.GetResult<Prisma.$price_tables_skusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Price_tables_skuses.
     * @param {price_tables_skusDeleteManyArgs} args - Arguments to filter Price_tables_skuses to delete.
     * @example
     * // Delete a few Price_tables_skuses
     * const { count } = await prisma.price_tables_skus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends price_tables_skusDeleteManyArgs>(args?: SelectSubset<T, price_tables_skusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Price_tables_skuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_tables_skusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Price_tables_skuses
     * const price_tables_skus = await prisma.price_tables_skus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends price_tables_skusUpdateManyArgs>(args: SelectSubset<T, price_tables_skusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Price_tables_skus.
     * @param {price_tables_skusUpsertArgs} args - Arguments to update or create a Price_tables_skus.
     * @example
     * // Update or create a Price_tables_skus
     * const price_tables_skus = await prisma.price_tables_skus.upsert({
     *   create: {
     *     // ... data to create a Price_tables_skus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Price_tables_skus we want to update
     *   }
     * })
     */
    upsert<T extends price_tables_skusUpsertArgs>(args: SelectSubset<T, price_tables_skusUpsertArgs<ExtArgs>>): Prisma__price_tables_skusClient<$Result.GetResult<Prisma.$price_tables_skusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Price_tables_skuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_tables_skusCountArgs} args - Arguments to filter Price_tables_skuses to count.
     * @example
     * // Count the number of Price_tables_skuses
     * const count = await prisma.price_tables_skus.count({
     *   where: {
     *     // ... the filter for the Price_tables_skuses we want to count
     *   }
     * })
    **/
    count<T extends price_tables_skusCountArgs>(
      args?: Subset<T, price_tables_skusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Price_tables_skusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Price_tables_skus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Price_tables_skusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Price_tables_skusAggregateArgs>(args: Subset<T, Price_tables_skusAggregateArgs>): Prisma.PrismaPromise<GetPrice_tables_skusAggregateType<T>>

    /**
     * Group by Price_tables_skus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_tables_skusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends price_tables_skusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: price_tables_skusGroupByArgs['orderBy'] }
        : { orderBy?: price_tables_skusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, price_tables_skusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrice_tables_skusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the price_tables_skus model
   */
  readonly fields: price_tables_skusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for price_tables_skus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__price_tables_skusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    price_tables<T extends price_tablesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, price_tablesDefaultArgs<ExtArgs>>): Prisma__price_tablesClient<$Result.GetResult<Prisma.$price_tablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skus<T extends skusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, skusDefaultArgs<ExtArgs>>): Prisma__skusClient<$Result.GetResult<Prisma.$skusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the price_tables_skus model
   */
  interface price_tables_skusFieldRefs {
    readonly id: FieldRef<"price_tables_skus", 'Int'>
    readonly price: FieldRef<"price_tables_skus", 'Decimal'>
    readonly created_at: FieldRef<"price_tables_skus", 'DateTime'>
    readonly updated_at: FieldRef<"price_tables_skus", 'DateTime'>
    readonly sku_id: FieldRef<"price_tables_skus", 'Int'>
    readonly price_table_id: FieldRef<"price_tables_skus", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * price_tables_skus findUnique
   */
  export type price_tables_skusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables_skus
     */
    select?: price_tables_skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables_skus
     */
    omit?: price_tables_skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tables_skusInclude<ExtArgs> | null
    /**
     * Filter, which price_tables_skus to fetch.
     */
    where: price_tables_skusWhereUniqueInput
  }

  /**
   * price_tables_skus findUniqueOrThrow
   */
  export type price_tables_skusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables_skus
     */
    select?: price_tables_skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables_skus
     */
    omit?: price_tables_skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tables_skusInclude<ExtArgs> | null
    /**
     * Filter, which price_tables_skus to fetch.
     */
    where: price_tables_skusWhereUniqueInput
  }

  /**
   * price_tables_skus findFirst
   */
  export type price_tables_skusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables_skus
     */
    select?: price_tables_skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables_skus
     */
    omit?: price_tables_skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tables_skusInclude<ExtArgs> | null
    /**
     * Filter, which price_tables_skus to fetch.
     */
    where?: price_tables_skusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of price_tables_skuses to fetch.
     */
    orderBy?: price_tables_skusOrderByWithRelationInput | price_tables_skusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for price_tables_skuses.
     */
    cursor?: price_tables_skusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` price_tables_skuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` price_tables_skuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of price_tables_skuses.
     */
    distinct?: Price_tables_skusScalarFieldEnum | Price_tables_skusScalarFieldEnum[]
  }

  /**
   * price_tables_skus findFirstOrThrow
   */
  export type price_tables_skusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables_skus
     */
    select?: price_tables_skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables_skus
     */
    omit?: price_tables_skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tables_skusInclude<ExtArgs> | null
    /**
     * Filter, which price_tables_skus to fetch.
     */
    where?: price_tables_skusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of price_tables_skuses to fetch.
     */
    orderBy?: price_tables_skusOrderByWithRelationInput | price_tables_skusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for price_tables_skuses.
     */
    cursor?: price_tables_skusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` price_tables_skuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` price_tables_skuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of price_tables_skuses.
     */
    distinct?: Price_tables_skusScalarFieldEnum | Price_tables_skusScalarFieldEnum[]
  }

  /**
   * price_tables_skus findMany
   */
  export type price_tables_skusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables_skus
     */
    select?: price_tables_skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables_skus
     */
    omit?: price_tables_skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tables_skusInclude<ExtArgs> | null
    /**
     * Filter, which price_tables_skuses to fetch.
     */
    where?: price_tables_skusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of price_tables_skuses to fetch.
     */
    orderBy?: price_tables_skusOrderByWithRelationInput | price_tables_skusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing price_tables_skuses.
     */
    cursor?: price_tables_skusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` price_tables_skuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` price_tables_skuses.
     */
    skip?: number
    distinct?: Price_tables_skusScalarFieldEnum | Price_tables_skusScalarFieldEnum[]
  }

  /**
   * price_tables_skus create
   */
  export type price_tables_skusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables_skus
     */
    select?: price_tables_skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables_skus
     */
    omit?: price_tables_skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tables_skusInclude<ExtArgs> | null
    /**
     * The data needed to create a price_tables_skus.
     */
    data: XOR<price_tables_skusCreateInput, price_tables_skusUncheckedCreateInput>
  }

  /**
   * price_tables_skus createMany
   */
  export type price_tables_skusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many price_tables_skuses.
     */
    data: price_tables_skusCreateManyInput | price_tables_skusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * price_tables_skus update
   */
  export type price_tables_skusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables_skus
     */
    select?: price_tables_skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables_skus
     */
    omit?: price_tables_skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tables_skusInclude<ExtArgs> | null
    /**
     * The data needed to update a price_tables_skus.
     */
    data: XOR<price_tables_skusUpdateInput, price_tables_skusUncheckedUpdateInput>
    /**
     * Choose, which price_tables_skus to update.
     */
    where: price_tables_skusWhereUniqueInput
  }

  /**
   * price_tables_skus updateMany
   */
  export type price_tables_skusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update price_tables_skuses.
     */
    data: XOR<price_tables_skusUpdateManyMutationInput, price_tables_skusUncheckedUpdateManyInput>
    /**
     * Filter which price_tables_skuses to update
     */
    where?: price_tables_skusWhereInput
    /**
     * Limit how many price_tables_skuses to update.
     */
    limit?: number
  }

  /**
   * price_tables_skus upsert
   */
  export type price_tables_skusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables_skus
     */
    select?: price_tables_skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables_skus
     */
    omit?: price_tables_skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tables_skusInclude<ExtArgs> | null
    /**
     * The filter to search for the price_tables_skus to update in case it exists.
     */
    where: price_tables_skusWhereUniqueInput
    /**
     * In case the price_tables_skus found by the `where` argument doesn't exist, create a new price_tables_skus with this data.
     */
    create: XOR<price_tables_skusCreateInput, price_tables_skusUncheckedCreateInput>
    /**
     * In case the price_tables_skus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<price_tables_skusUpdateInput, price_tables_skusUncheckedUpdateInput>
  }

  /**
   * price_tables_skus delete
   */
  export type price_tables_skusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables_skus
     */
    select?: price_tables_skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables_skus
     */
    omit?: price_tables_skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tables_skusInclude<ExtArgs> | null
    /**
     * Filter which price_tables_skus to delete.
     */
    where: price_tables_skusWhereUniqueInput
  }

  /**
   * price_tables_skus deleteMany
   */
  export type price_tables_skusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which price_tables_skuses to delete
     */
    where?: price_tables_skusWhereInput
    /**
     * Limit how many price_tables_skuses to delete.
     */
    limit?: number
  }

  /**
   * price_tables_skus without action
   */
  export type price_tables_skusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables_skus
     */
    select?: price_tables_skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables_skus
     */
    omit?: price_tables_skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tables_skusInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    company_Id: number | null
    brand_id: number | null
    deadline_id: number | null
    category_id: number | null
    subcategory_id: number | null
    category_order: number | null
    ipi: Decimal | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    company_Id: number | null
    brand_id: number | null
    deadline_id: number | null
    category_id: number | null
    subcategory_id: number | null
    category_order: number | null
    ipi: Decimal | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    name: string | null
    reference: string | null
    type: $Enums.products_type | null
    gender: $Enums.products_gender | null
    prompt_delivery: boolean | null
    description: string | null
    company_Id: number | null
    erp_id: string | null
    brand_id: number | null
    deadline_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    category_id: number | null
    subcategory_id: number | null
    category_order: number | null
    composition_data: string | null
    technical_information: string | null
    open_grid: boolean | null
    ipi: Decimal | null
    is_discontinued: boolean | null
    is_launch: boolean | null
    is_visible: boolean | null
    colection: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    reference: string | null
    type: $Enums.products_type | null
    gender: $Enums.products_gender | null
    prompt_delivery: boolean | null
    description: string | null
    company_Id: number | null
    erp_id: string | null
    brand_id: number | null
    deadline_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    category_id: number | null
    subcategory_id: number | null
    category_order: number | null
    composition_data: string | null
    technical_information: string | null
    open_grid: boolean | null
    ipi: Decimal | null
    is_discontinued: boolean | null
    is_launch: boolean | null
    is_visible: boolean | null
    colection: string | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    reference: number
    type: number
    gender: number
    prompt_delivery: number
    description: number
    company_Id: number
    erp_id: number
    brand_id: number
    deadline_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    category_id: number
    subcategory_id: number
    category_order: number
    composition_data: number
    technical_information: number
    open_grid: number
    ipi: number
    is_discontinued: number
    is_launch: number
    is_visible: number
    colection: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    company_Id?: true
    brand_id?: true
    deadline_id?: true
    category_id?: true
    subcategory_id?: true
    category_order?: true
    ipi?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    company_Id?: true
    brand_id?: true
    deadline_id?: true
    category_id?: true
    subcategory_id?: true
    category_order?: true
    ipi?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    reference?: true
    type?: true
    gender?: true
    prompt_delivery?: true
    description?: true
    company_Id?: true
    erp_id?: true
    brand_id?: true
    deadline_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    category_id?: true
    subcategory_id?: true
    category_order?: true
    composition_data?: true
    technical_information?: true
    open_grid?: true
    ipi?: true
    is_discontinued?: true
    is_launch?: true
    is_visible?: true
    colection?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    reference?: true
    type?: true
    gender?: true
    prompt_delivery?: true
    description?: true
    company_Id?: true
    erp_id?: true
    brand_id?: true
    deadline_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    category_id?: true
    subcategory_id?: true
    category_order?: true
    composition_data?: true
    technical_information?: true
    open_grid?: true
    ipi?: true
    is_discontinued?: true
    is_launch?: true
    is_visible?: true
    colection?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    reference?: true
    type?: true
    gender?: true
    prompt_delivery?: true
    description?: true
    company_Id?: true
    erp_id?: true
    brand_id?: true
    deadline_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    category_id?: true
    subcategory_id?: true
    category_order?: true
    composition_data?: true
    technical_information?: true
    open_grid?: true
    ipi?: true
    is_discontinued?: true
    is_launch?: true
    is_visible?: true
    colection?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description: string | null
    company_Id: number
    erp_id: string | null
    brand_id: number
    deadline_id: number | null
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    category_id: number
    subcategory_id: number | null
    category_order: number | null
    composition_data: string | null
    technical_information: string | null
    open_grid: boolean
    ipi: Decimal | null
    is_discontinued: boolean
    is_launch: boolean
    is_visible: boolean
    colection: string | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    reference?: boolean
    type?: boolean
    gender?: boolean
    prompt_delivery?: boolean
    description?: boolean
    company_Id?: boolean
    erp_id?: boolean
    brand_id?: boolean
    deadline_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    category_id?: boolean
    subcategory_id?: boolean
    category_order?: boolean
    composition_data?: boolean
    technical_information?: boolean
    open_grid?: boolean
    ipi?: boolean
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: boolean
    company?: boolean | companiesDefaultArgs<ExtArgs>
    brands?: boolean | brandsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    subcategories?: boolean | products$subcategoriesArgs<ExtArgs>
    variants?: boolean | products$variantsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>



  export type productsSelectScalar = {
    id?: boolean
    name?: boolean
    reference?: boolean
    type?: boolean
    gender?: boolean
    prompt_delivery?: boolean
    description?: boolean
    company_Id?: boolean
    erp_id?: boolean
    brand_id?: boolean
    deadline_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    category_id?: boolean
    subcategory_id?: boolean
    category_order?: boolean
    composition_data?: boolean
    technical_information?: boolean
    open_grid?: boolean
    ipi?: boolean
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "reference" | "type" | "gender" | "prompt_delivery" | "description" | "company_Id" | "erp_id" | "brand_id" | "deadline_id" | "created_at" | "updated_at" | "deleted_at" | "category_id" | "subcategory_id" | "category_order" | "composition_data" | "technical_information" | "open_grid" | "ipi" | "is_discontinued" | "is_launch" | "is_visible" | "colection", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companiesDefaultArgs<ExtArgs>
    brands?: boolean | brandsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    subcategories?: boolean | products$subcategoriesArgs<ExtArgs>
    variants?: boolean | products$variantsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      company: Prisma.$companiesPayload<ExtArgs>
      brands: Prisma.$brandsPayload<ExtArgs>
      categories: Prisma.$categoriesPayload<ExtArgs>
      subcategories: Prisma.$subcategoriesPayload<ExtArgs> | null
      variants: Prisma.$variantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      reference: string
      type: $Enums.products_type
      gender: $Enums.products_gender
      prompt_delivery: boolean
      description: string | null
      company_Id: number
      erp_id: string | null
      brand_id: number
      deadline_id: number | null
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
      category_id: number
      subcategory_id: number | null
      category_order: number | null
      composition_data: string | null
      technical_information: string | null
      open_grid: boolean
      ipi: Prisma.Decimal | null
      is_discontinued: boolean
      is_launch: boolean
      is_visible: boolean
      colection: string | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends companiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companiesDefaultArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    brands<T extends brandsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, brandsDefaultArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subcategories<T extends products$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, products$subcategoriesArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    variants<T extends products$variantsArgs<ExtArgs> = {}>(args?: Subset<T, products$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'Int'>
    readonly name: FieldRef<"products", 'String'>
    readonly reference: FieldRef<"products", 'String'>
    readonly type: FieldRef<"products", 'products_type'>
    readonly gender: FieldRef<"products", 'products_gender'>
    readonly prompt_delivery: FieldRef<"products", 'Boolean'>
    readonly description: FieldRef<"products", 'String'>
    readonly company_Id: FieldRef<"products", 'Int'>
    readonly erp_id: FieldRef<"products", 'String'>
    readonly brand_id: FieldRef<"products", 'Int'>
    readonly deadline_id: FieldRef<"products", 'Int'>
    readonly created_at: FieldRef<"products", 'DateTime'>
    readonly updated_at: FieldRef<"products", 'DateTime'>
    readonly deleted_at: FieldRef<"products", 'DateTime'>
    readonly category_id: FieldRef<"products", 'Int'>
    readonly subcategory_id: FieldRef<"products", 'Int'>
    readonly category_order: FieldRef<"products", 'Int'>
    readonly composition_data: FieldRef<"products", 'String'>
    readonly technical_information: FieldRef<"products", 'String'>
    readonly open_grid: FieldRef<"products", 'Boolean'>
    readonly ipi: FieldRef<"products", 'Decimal'>
    readonly is_discontinued: FieldRef<"products", 'Boolean'>
    readonly is_launch: FieldRef<"products", 'Boolean'>
    readonly is_visible: FieldRef<"products", 'Boolean'>
    readonly colection: FieldRef<"products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.subcategories
   */
  export type products$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    where?: subcategoriesWhereInput
  }

  /**
   * products.variants
   */
  export type products$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    where?: variantsWhereInput
    orderBy?: variantsOrderByWithRelationInput | variantsOrderByWithRelationInput[]
    cursor?: variantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantsScalarFieldEnum | VariantsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model companies
   */

  export type AggregateCompanies = {
    _count: CompaniesCountAggregateOutputType | null
    _avg: CompaniesAvgAggregateOutputType | null
    _sum: CompaniesSumAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  export type CompaniesAvgAggregateOutputType = {
    id: number | null
  }

  export type CompaniesSumAggregateOutputType = {
    id: number | null
  }

  export type CompaniesMinAggregateOutputType = {
    id: number | null
    name: string | null
    reated_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CompaniesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    reated_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CompaniesCountAggregateOutputType = {
    id: number
    name: number
    reated_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type CompaniesAvgAggregateInputType = {
    id?: true
  }

  export type CompaniesSumAggregateInputType = {
    id?: true
  }

  export type CompaniesMinAggregateInputType = {
    id?: true
    name?: true
    reated_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CompaniesMaxAggregateInputType = {
    id?: true
    name?: true
    reated_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CompaniesCountAggregateInputType = {
    id?: true
    name?: true
    reated_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type CompaniesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to aggregate.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompaniesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompaniesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompaniesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompaniesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompaniesMaxAggregateInputType
  }

  export type GetCompaniesAggregateType<T extends CompaniesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanies[P]>
      : GetScalarType<T[P], AggregateCompanies[P]>
  }




  export type companiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companiesWhereInput
    orderBy?: companiesOrderByWithAggregationInput | companiesOrderByWithAggregationInput[]
    by: CompaniesScalarFieldEnum[] | CompaniesScalarFieldEnum
    having?: companiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompaniesCountAggregateInputType | true
    _avg?: CompaniesAvgAggregateInputType
    _sum?: CompaniesSumAggregateInputType
    _min?: CompaniesMinAggregateInputType
    _max?: CompaniesMaxAggregateInputType
  }

  export type CompaniesGroupByOutputType = {
    id: number
    name: string
    reated_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: CompaniesCountAggregateOutputType | null
    _avg: CompaniesAvgAggregateOutputType | null
    _sum: CompaniesSumAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  type GetCompaniesGroupByPayload<T extends companiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompaniesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompaniesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
            : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
        }
      >
    >


  export type companiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    reated_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    products?: boolean | companies$productsArgs<ExtArgs>
    brands?: boolean | companies$brandsArgs<ExtArgs>
    categories?: boolean | companies$categoriesArgs<ExtArgs>
    price_tables?: boolean | companies$price_tablesArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>



  export type companiesSelectScalar = {
    id?: boolean
    name?: boolean
    reated_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type companiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "reated_at" | "updated_at" | "deleted_at", ExtArgs["result"]["companies"]>
  export type companiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | companies$productsArgs<ExtArgs>
    brands?: boolean | companies$brandsArgs<ExtArgs>
    categories?: boolean | companies$categoriesArgs<ExtArgs>
    price_tables?: boolean | companies$price_tablesArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $companiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "companies"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
      brands: Prisma.$brandsPayload<ExtArgs>[]
      categories: Prisma.$categoriesPayload<ExtArgs>[]
      price_tables: Prisma.$price_tablesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      reated_at: Date
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["companies"]>
    composites: {}
  }

  type companiesGetPayload<S extends boolean | null | undefined | companiesDefaultArgs> = $Result.GetResult<Prisma.$companiesPayload, S>

  type companiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompaniesCountAggregateInputType | true
    }

  export interface companiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['companies'], meta: { name: 'companies' } }
    /**
     * Find zero or one Companies that matches the filter.
     * @param {companiesFindUniqueArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companiesFindUniqueArgs>(args: SelectSubset<T, companiesFindUniqueArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companiesFindUniqueOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companiesFindUniqueOrThrowArgs>(args: SelectSubset<T, companiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companiesFindFirstArgs>(args?: SelectSubset<T, companiesFindFirstArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companiesFindFirstOrThrowArgs>(args?: SelectSubset<T, companiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.companies.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.companies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companiesWithIdOnly = await prisma.companies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companiesFindManyArgs>(args?: SelectSubset<T, companiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companies.
     * @param {companiesCreateArgs} args - Arguments to create a Companies.
     * @example
     * // Create one Companies
     * const Companies = await prisma.companies.create({
     *   data: {
     *     // ... data to create a Companies
     *   }
     * })
     * 
     */
    create<T extends companiesCreateArgs>(args: SelectSubset<T, companiesCreateArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companiesCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companiesCreateManyArgs>(args?: SelectSubset<T, companiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Companies.
     * @param {companiesDeleteArgs} args - Arguments to delete one Companies.
     * @example
     * // Delete one Companies
     * const Companies = await prisma.companies.delete({
     *   where: {
     *     // ... filter to delete one Companies
     *   }
     * })
     * 
     */
    delete<T extends companiesDeleteArgs>(args: SelectSubset<T, companiesDeleteArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companies.
     * @param {companiesUpdateArgs} args - Arguments to update one Companies.
     * @example
     * // Update one Companies
     * const companies = await prisma.companies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companiesUpdateArgs>(args: SelectSubset<T, companiesUpdateArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companiesDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.companies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companiesDeleteManyArgs>(args?: SelectSubset<T, companiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companiesUpdateManyArgs>(args: SelectSubset<T, companiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Companies.
     * @param {companiesUpsertArgs} args - Arguments to update or create a Companies.
     * @example
     * // Update or create a Companies
     * const companies = await prisma.companies.upsert({
     *   create: {
     *     // ... data to create a Companies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companies we want to update
     *   }
     * })
     */
    upsert<T extends companiesUpsertArgs>(args: SelectSubset<T, companiesUpsertArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.companies.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companiesCountArgs>(
      args?: Subset<T, companiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompaniesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompaniesAggregateArgs>(args: Subset<T, CompaniesAggregateArgs>): Prisma.PrismaPromise<GetCompaniesAggregateType<T>>

    /**
     * Group by Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends companiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companiesGroupByArgs['orderBy'] }
        : { orderBy?: companiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, companiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the companies model
   */
  readonly fields: companiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for companies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends companies$productsArgs<ExtArgs> = {}>(args?: Subset<T, companies$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    brands<T extends companies$brandsArgs<ExtArgs> = {}>(args?: Subset<T, companies$brandsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends companies$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, companies$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    price_tables<T extends companies$price_tablesArgs<ExtArgs> = {}>(args?: Subset<T, companies$price_tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$price_tablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the companies model
   */
  interface companiesFieldRefs {
    readonly id: FieldRef<"companies", 'Int'>
    readonly name: FieldRef<"companies", 'String'>
    readonly reated_at: FieldRef<"companies", 'DateTime'>
    readonly updated_at: FieldRef<"companies", 'DateTime'>
    readonly deleted_at: FieldRef<"companies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * companies findUnique
   */
  export type companiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findUniqueOrThrow
   */
  export type companiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findFirst
   */
  export type companiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies findFirstOrThrow
   */
  export type companiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies findMany
   */
  export type companiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies create
   */
  export type companiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The data needed to create a companies.
     */
    data: XOR<companiesCreateInput, companiesUncheckedCreateInput>
  }

  /**
   * companies createMany
   */
  export type companiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companiesCreateManyInput | companiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * companies update
   */
  export type companiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The data needed to update a companies.
     */
    data: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
    /**
     * Choose, which companies to update.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies updateMany
   */
  export type companiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companiesUpdateManyMutationInput, companiesUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * companies upsert
   */
  export type companiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The filter to search for the companies to update in case it exists.
     */
    where: companiesWhereUniqueInput
    /**
     * In case the companies found by the `where` argument doesn't exist, create a new companies with this data.
     */
    create: XOR<companiesCreateInput, companiesUncheckedCreateInput>
    /**
     * In case the companies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
  }

  /**
   * companies delete
   */
  export type companiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter which companies to delete.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies deleteMany
   */
  export type companiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * companies.products
   */
  export type companies$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * companies.brands
   */
  export type companies$brandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    where?: brandsWhereInput
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    cursor?: brandsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * companies.categories
   */
  export type companies$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    cursor?: categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * companies.price_tables
   */
  export type companies$price_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables
     */
    select?: price_tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables
     */
    omit?: price_tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tablesInclude<ExtArgs> | null
    where?: price_tablesWhereInput
    orderBy?: price_tablesOrderByWithRelationInput | price_tablesOrderByWithRelationInput[]
    cursor?: price_tablesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Price_tablesScalarFieldEnum | Price_tablesScalarFieldEnum[]
  }

  /**
   * companies without action
   */
  export type companiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
  }


  /**
   * Model skus
   */

  export type AggregateSkus = {
    _count: SkusCountAggregateOutputType | null
    _avg: SkusAvgAggregateOutputType | null
    _sum: SkusSumAggregateOutputType | null
    _min: SkusMinAggregateOutputType | null
    _max: SkusMaxAggregateOutputType | null
  }

  export type SkusAvgAggregateOutputType = {
    id: number | null
    stock: number | null
    price: Decimal | null
    min_quantity: number | null
    multiple_quantity: number | null
    variant_id: number | null
    height: number | null
    length: number | null
    weight: number | null
    width: number | null
  }

  export type SkusSumAggregateOutputType = {
    id: number | null
    stock: number | null
    price: Decimal | null
    min_quantity: number | null
    multiple_quantity: number | null
    variant_id: number | null
    height: number | null
    length: number | null
    weight: number | null
    width: number | null
  }

  export type SkusMinAggregateOutputType = {
    id: number | null
    size: string | null
    stock: number | null
    price: Decimal | null
    code: string | null
    min_quantity: number | null
    multiple_quantity: number | null
    erpId: string | null
    variant_id: number | null
    cest: string | null
    height: number | null
    length: number | null
    ncm: string | null
    weight: number | null
    width: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type SkusMaxAggregateOutputType = {
    id: number | null
    size: string | null
    stock: number | null
    price: Decimal | null
    code: string | null
    min_quantity: number | null
    multiple_quantity: number | null
    erpId: string | null
    variant_id: number | null
    cest: string | null
    height: number | null
    length: number | null
    ncm: string | null
    weight: number | null
    width: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type SkusCountAggregateOutputType = {
    id: number
    size: number
    stock: number
    price: number
    code: number
    min_quantity: number
    multiple_quantity: number
    erpId: number
    variant_id: number
    cest: number
    height: number
    length: number
    ncm: number
    weight: number
    width: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type SkusAvgAggregateInputType = {
    id?: true
    stock?: true
    price?: true
    min_quantity?: true
    multiple_quantity?: true
    variant_id?: true
    height?: true
    length?: true
    weight?: true
    width?: true
  }

  export type SkusSumAggregateInputType = {
    id?: true
    stock?: true
    price?: true
    min_quantity?: true
    multiple_quantity?: true
    variant_id?: true
    height?: true
    length?: true
    weight?: true
    width?: true
  }

  export type SkusMinAggregateInputType = {
    id?: true
    size?: true
    stock?: true
    price?: true
    code?: true
    min_quantity?: true
    multiple_quantity?: true
    erpId?: true
    variant_id?: true
    cest?: true
    height?: true
    length?: true
    ncm?: true
    weight?: true
    width?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type SkusMaxAggregateInputType = {
    id?: true
    size?: true
    stock?: true
    price?: true
    code?: true
    min_quantity?: true
    multiple_quantity?: true
    erpId?: true
    variant_id?: true
    cest?: true
    height?: true
    length?: true
    ncm?: true
    weight?: true
    width?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type SkusCountAggregateInputType = {
    id?: true
    size?: true
    stock?: true
    price?: true
    code?: true
    min_quantity?: true
    multiple_quantity?: true
    erpId?: true
    variant_id?: true
    cest?: true
    height?: true
    length?: true
    ncm?: true
    weight?: true
    width?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type SkusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skus to aggregate.
     */
    where?: skusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skuses to fetch.
     */
    orderBy?: skusOrderByWithRelationInput | skusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skuses
    **/
    _count?: true | SkusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkusMaxAggregateInputType
  }

  export type GetSkusAggregateType<T extends SkusAggregateArgs> = {
        [P in keyof T & keyof AggregateSkus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkus[P]>
      : GetScalarType<T[P], AggregateSkus[P]>
  }




  export type skusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skusWhereInput
    orderBy?: skusOrderByWithAggregationInput | skusOrderByWithAggregationInput[]
    by: SkusScalarFieldEnum[] | SkusScalarFieldEnum
    having?: skusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkusCountAggregateInputType | true
    _avg?: SkusAvgAggregateInputType
    _sum?: SkusSumAggregateInputType
    _min?: SkusMinAggregateInputType
    _max?: SkusMaxAggregateInputType
  }

  export type SkusGroupByOutputType = {
    id: number
    size: string
    stock: number
    price: Decimal
    code: string
    min_quantity: number | null
    multiple_quantity: number
    erpId: string | null
    variant_id: number
    cest: string | null
    height: number | null
    length: number | null
    ncm: string | null
    weight: number | null
    width: number | null
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: SkusCountAggregateOutputType | null
    _avg: SkusAvgAggregateOutputType | null
    _sum: SkusSumAggregateOutputType | null
    _min: SkusMinAggregateOutputType | null
    _max: SkusMaxAggregateOutputType | null
  }

  type GetSkusGroupByPayload<T extends skusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkusGroupByOutputType[P]>
            : GetScalarType<T[P], SkusGroupByOutputType[P]>
        }
      >
    >


  export type skusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    size?: boolean
    stock?: boolean
    price?: boolean
    code?: boolean
    min_quantity?: boolean
    multiple_quantity?: boolean
    erpId?: boolean
    variant_id?: boolean
    cest?: boolean
    height?: boolean
    length?: boolean
    ncm?: boolean
    weight?: boolean
    width?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    price_tables_skus?: boolean | skus$price_tables_skusArgs<ExtArgs>
    variants?: boolean | variantsDefaultArgs<ExtArgs>
    _count?: boolean | SkusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skus"]>



  export type skusSelectScalar = {
    id?: boolean
    size?: boolean
    stock?: boolean
    price?: boolean
    code?: boolean
    min_quantity?: boolean
    multiple_quantity?: boolean
    erpId?: boolean
    variant_id?: boolean
    cest?: boolean
    height?: boolean
    length?: boolean
    ncm?: boolean
    weight?: boolean
    width?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type skusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "size" | "stock" | "price" | "code" | "min_quantity" | "multiple_quantity" | "erpId" | "variant_id" | "cest" | "height" | "length" | "ncm" | "weight" | "width" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["skus"]>
  export type skusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    price_tables_skus?: boolean | skus$price_tables_skusArgs<ExtArgs>
    variants?: boolean | variantsDefaultArgs<ExtArgs>
    _count?: boolean | SkusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $skusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skus"
    objects: {
      price_tables_skus: Prisma.$price_tables_skusPayload<ExtArgs>[]
      variants: Prisma.$variantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      size: string
      stock: number
      price: Prisma.Decimal
      code: string
      min_quantity: number | null
      multiple_quantity: number
      erpId: string | null
      variant_id: number
      cest: string | null
      height: number | null
      length: number | null
      ncm: string | null
      weight: number | null
      width: number | null
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["skus"]>
    composites: {}
  }

  type skusGetPayload<S extends boolean | null | undefined | skusDefaultArgs> = $Result.GetResult<Prisma.$skusPayload, S>

  type skusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkusCountAggregateInputType | true
    }

  export interface skusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skus'], meta: { name: 'skus' } }
    /**
     * Find zero or one Skus that matches the filter.
     * @param {skusFindUniqueArgs} args - Arguments to find a Skus
     * @example
     * // Get one Skus
     * const skus = await prisma.skus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skusFindUniqueArgs>(args: SelectSubset<T, skusFindUniqueArgs<ExtArgs>>): Prisma__skusClient<$Result.GetResult<Prisma.$skusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skusFindUniqueOrThrowArgs} args - Arguments to find a Skus
     * @example
     * // Get one Skus
     * const skus = await prisma.skus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skusFindUniqueOrThrowArgs>(args: SelectSubset<T, skusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skusClient<$Result.GetResult<Prisma.$skusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skusFindFirstArgs} args - Arguments to find a Skus
     * @example
     * // Get one Skus
     * const skus = await prisma.skus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skusFindFirstArgs>(args?: SelectSubset<T, skusFindFirstArgs<ExtArgs>>): Prisma__skusClient<$Result.GetResult<Prisma.$skusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skusFindFirstOrThrowArgs} args - Arguments to find a Skus
     * @example
     * // Get one Skus
     * const skus = await prisma.skus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skusFindFirstOrThrowArgs>(args?: SelectSubset<T, skusFindFirstOrThrowArgs<ExtArgs>>): Prisma__skusClient<$Result.GetResult<Prisma.$skusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skuses
     * const skuses = await prisma.skus.findMany()
     * 
     * // Get first 10 Skuses
     * const skuses = await prisma.skus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skusWithIdOnly = await prisma.skus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends skusFindManyArgs>(args?: SelectSubset<T, skusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skus.
     * @param {skusCreateArgs} args - Arguments to create a Skus.
     * @example
     * // Create one Skus
     * const Skus = await prisma.skus.create({
     *   data: {
     *     // ... data to create a Skus
     *   }
     * })
     * 
     */
    create<T extends skusCreateArgs>(args: SelectSubset<T, skusCreateArgs<ExtArgs>>): Prisma__skusClient<$Result.GetResult<Prisma.$skusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skuses.
     * @param {skusCreateManyArgs} args - Arguments to create many Skuses.
     * @example
     * // Create many Skuses
     * const skus = await prisma.skus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skusCreateManyArgs>(args?: SelectSubset<T, skusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skus.
     * @param {skusDeleteArgs} args - Arguments to delete one Skus.
     * @example
     * // Delete one Skus
     * const Skus = await prisma.skus.delete({
     *   where: {
     *     // ... filter to delete one Skus
     *   }
     * })
     * 
     */
    delete<T extends skusDeleteArgs>(args: SelectSubset<T, skusDeleteArgs<ExtArgs>>): Prisma__skusClient<$Result.GetResult<Prisma.$skusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skus.
     * @param {skusUpdateArgs} args - Arguments to update one Skus.
     * @example
     * // Update one Skus
     * const skus = await prisma.skus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skusUpdateArgs>(args: SelectSubset<T, skusUpdateArgs<ExtArgs>>): Prisma__skusClient<$Result.GetResult<Prisma.$skusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skuses.
     * @param {skusDeleteManyArgs} args - Arguments to filter Skuses to delete.
     * @example
     * // Delete a few Skuses
     * const { count } = await prisma.skus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skusDeleteManyArgs>(args?: SelectSubset<T, skusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skuses
     * const skus = await prisma.skus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skusUpdateManyArgs>(args: SelectSubset<T, skusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skus.
     * @param {skusUpsertArgs} args - Arguments to update or create a Skus.
     * @example
     * // Update or create a Skus
     * const skus = await prisma.skus.upsert({
     *   create: {
     *     // ... data to create a Skus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skus we want to update
     *   }
     * })
     */
    upsert<T extends skusUpsertArgs>(args: SelectSubset<T, skusUpsertArgs<ExtArgs>>): Prisma__skusClient<$Result.GetResult<Prisma.$skusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skusCountArgs} args - Arguments to filter Skuses to count.
     * @example
     * // Count the number of Skuses
     * const count = await prisma.skus.count({
     *   where: {
     *     // ... the filter for the Skuses we want to count
     *   }
     * })
    **/
    count<T extends skusCountArgs>(
      args?: Subset<T, skusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkusAggregateArgs>(args: Subset<T, SkusAggregateArgs>): Prisma.PrismaPromise<GetSkusAggregateType<T>>

    /**
     * Group by Skus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends skusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skusGroupByArgs['orderBy'] }
        : { orderBy?: skusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, skusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skus model
   */
  readonly fields: skusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    price_tables_skus<T extends skus$price_tables_skusArgs<ExtArgs> = {}>(args?: Subset<T, skus$price_tables_skusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$price_tables_skusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    variants<T extends variantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, variantsDefaultArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the skus model
   */
  interface skusFieldRefs {
    readonly id: FieldRef<"skus", 'Int'>
    readonly size: FieldRef<"skus", 'String'>
    readonly stock: FieldRef<"skus", 'Int'>
    readonly price: FieldRef<"skus", 'Decimal'>
    readonly code: FieldRef<"skus", 'String'>
    readonly min_quantity: FieldRef<"skus", 'Int'>
    readonly multiple_quantity: FieldRef<"skus", 'Int'>
    readonly erpId: FieldRef<"skus", 'String'>
    readonly variant_id: FieldRef<"skus", 'Int'>
    readonly cest: FieldRef<"skus", 'String'>
    readonly height: FieldRef<"skus", 'Float'>
    readonly length: FieldRef<"skus", 'Float'>
    readonly ncm: FieldRef<"skus", 'String'>
    readonly weight: FieldRef<"skus", 'Float'>
    readonly width: FieldRef<"skus", 'Float'>
    readonly created_at: FieldRef<"skus", 'DateTime'>
    readonly updated_at: FieldRef<"skus", 'DateTime'>
    readonly deleted_at: FieldRef<"skus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * skus findUnique
   */
  export type skusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skus
     */
    select?: skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skus
     */
    omit?: skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skusInclude<ExtArgs> | null
    /**
     * Filter, which skus to fetch.
     */
    where: skusWhereUniqueInput
  }

  /**
   * skus findUniqueOrThrow
   */
  export type skusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skus
     */
    select?: skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skus
     */
    omit?: skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skusInclude<ExtArgs> | null
    /**
     * Filter, which skus to fetch.
     */
    where: skusWhereUniqueInput
  }

  /**
   * skus findFirst
   */
  export type skusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skus
     */
    select?: skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skus
     */
    omit?: skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skusInclude<ExtArgs> | null
    /**
     * Filter, which skus to fetch.
     */
    where?: skusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skuses to fetch.
     */
    orderBy?: skusOrderByWithRelationInput | skusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skuses.
     */
    cursor?: skusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skuses.
     */
    distinct?: SkusScalarFieldEnum | SkusScalarFieldEnum[]
  }

  /**
   * skus findFirstOrThrow
   */
  export type skusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skus
     */
    select?: skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skus
     */
    omit?: skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skusInclude<ExtArgs> | null
    /**
     * Filter, which skus to fetch.
     */
    where?: skusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skuses to fetch.
     */
    orderBy?: skusOrderByWithRelationInput | skusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skuses.
     */
    cursor?: skusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skuses.
     */
    distinct?: SkusScalarFieldEnum | SkusScalarFieldEnum[]
  }

  /**
   * skus findMany
   */
  export type skusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skus
     */
    select?: skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skus
     */
    omit?: skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skusInclude<ExtArgs> | null
    /**
     * Filter, which skuses to fetch.
     */
    where?: skusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skuses to fetch.
     */
    orderBy?: skusOrderByWithRelationInput | skusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skuses.
     */
    cursor?: skusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skuses.
     */
    skip?: number
    distinct?: SkusScalarFieldEnum | SkusScalarFieldEnum[]
  }

  /**
   * skus create
   */
  export type skusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skus
     */
    select?: skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skus
     */
    omit?: skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skusInclude<ExtArgs> | null
    /**
     * The data needed to create a skus.
     */
    data: XOR<skusCreateInput, skusUncheckedCreateInput>
  }

  /**
   * skus createMany
   */
  export type skusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skuses.
     */
    data: skusCreateManyInput | skusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skus update
   */
  export type skusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skus
     */
    select?: skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skus
     */
    omit?: skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skusInclude<ExtArgs> | null
    /**
     * The data needed to update a skus.
     */
    data: XOR<skusUpdateInput, skusUncheckedUpdateInput>
    /**
     * Choose, which skus to update.
     */
    where: skusWhereUniqueInput
  }

  /**
   * skus updateMany
   */
  export type skusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skuses.
     */
    data: XOR<skusUpdateManyMutationInput, skusUncheckedUpdateManyInput>
    /**
     * Filter which skuses to update
     */
    where?: skusWhereInput
    /**
     * Limit how many skuses to update.
     */
    limit?: number
  }

  /**
   * skus upsert
   */
  export type skusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skus
     */
    select?: skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skus
     */
    omit?: skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skusInclude<ExtArgs> | null
    /**
     * The filter to search for the skus to update in case it exists.
     */
    where: skusWhereUniqueInput
    /**
     * In case the skus found by the `where` argument doesn't exist, create a new skus with this data.
     */
    create: XOR<skusCreateInput, skusUncheckedCreateInput>
    /**
     * In case the skus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skusUpdateInput, skusUncheckedUpdateInput>
  }

  /**
   * skus delete
   */
  export type skusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skus
     */
    select?: skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skus
     */
    omit?: skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skusInclude<ExtArgs> | null
    /**
     * Filter which skus to delete.
     */
    where: skusWhereUniqueInput
  }

  /**
   * skus deleteMany
   */
  export type skusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skuses to delete
     */
    where?: skusWhereInput
    /**
     * Limit how many skuses to delete.
     */
    limit?: number
  }

  /**
   * skus.price_tables_skus
   */
  export type skus$price_tables_skusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_tables_skus
     */
    select?: price_tables_skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the price_tables_skus
     */
    omit?: price_tables_skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: price_tables_skusInclude<ExtArgs> | null
    where?: price_tables_skusWhereInput
    orderBy?: price_tables_skusOrderByWithRelationInput | price_tables_skusOrderByWithRelationInput[]
    cursor?: price_tables_skusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Price_tables_skusScalarFieldEnum | Price_tables_skusScalarFieldEnum[]
  }

  /**
   * skus without action
   */
  export type skusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skus
     */
    select?: skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skus
     */
    omit?: skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skusInclude<ExtArgs> | null
  }


  /**
   * Model subcategories
   */

  export type AggregateSubcategories = {
    _count: SubcategoriesCountAggregateOutputType | null
    _avg: SubcategoriesAvgAggregateOutputType | null
    _sum: SubcategoriesSumAggregateOutputType | null
    _min: SubcategoriesMinAggregateOutputType | null
    _max: SubcategoriesMaxAggregateOutputType | null
  }

  export type SubcategoriesAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
  }

  export type SubcategoriesSumAggregateOutputType = {
    id: number | null
    category_id: number | null
  }

  export type SubcategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    category_id: number | null
    created_at: Date | null
  }

  export type SubcategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category_id: number | null
    created_at: Date | null
  }

  export type SubcategoriesCountAggregateOutputType = {
    id: number
    name: number
    category_id: number
    created_at: number
    _all: number
  }


  export type SubcategoriesAvgAggregateInputType = {
    id?: true
    category_id?: true
  }

  export type SubcategoriesSumAggregateInputType = {
    id?: true
    category_id?: true
  }

  export type SubcategoriesMinAggregateInputType = {
    id?: true
    name?: true
    category_id?: true
    created_at?: true
  }

  export type SubcategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    category_id?: true
    created_at?: true
  }

  export type SubcategoriesCountAggregateInputType = {
    id?: true
    name?: true
    category_id?: true
    created_at?: true
    _all?: true
  }

  export type SubcategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subcategories to aggregate.
     */
    where?: subcategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcategories to fetch.
     */
    orderBy?: subcategoriesOrderByWithRelationInput | subcategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subcategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subcategories
    **/
    _count?: true | SubcategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubcategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubcategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubcategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubcategoriesMaxAggregateInputType
  }

  export type GetSubcategoriesAggregateType<T extends SubcategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateSubcategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubcategories[P]>
      : GetScalarType<T[P], AggregateSubcategories[P]>
  }




  export type subcategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subcategoriesWhereInput
    orderBy?: subcategoriesOrderByWithAggregationInput | subcategoriesOrderByWithAggregationInput[]
    by: SubcategoriesScalarFieldEnum[] | SubcategoriesScalarFieldEnum
    having?: subcategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubcategoriesCountAggregateInputType | true
    _avg?: SubcategoriesAvgAggregateInputType
    _sum?: SubcategoriesSumAggregateInputType
    _min?: SubcategoriesMinAggregateInputType
    _max?: SubcategoriesMaxAggregateInputType
  }

  export type SubcategoriesGroupByOutputType = {
    id: number
    name: string
    category_id: number
    created_at: Date | null
    _count: SubcategoriesCountAggregateOutputType | null
    _avg: SubcategoriesAvgAggregateOutputType | null
    _sum: SubcategoriesSumAggregateOutputType | null
    _min: SubcategoriesMinAggregateOutputType | null
    _max: SubcategoriesMaxAggregateOutputType | null
  }

  type GetSubcategoriesGroupByPayload<T extends subcategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubcategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubcategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubcategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], SubcategoriesGroupByOutputType[P]>
        }
      >
    >


  export type subcategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category_id?: boolean
    created_at?: boolean
    products?: boolean | subcategories$productsArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    _count?: boolean | SubcategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategories"]>



  export type subcategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    category_id?: boolean
    created_at?: boolean
  }

  export type subcategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category_id" | "created_at", ExtArgs["result"]["subcategories"]>
  export type subcategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | subcategories$productsArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    _count?: boolean | SubcategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $subcategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subcategories"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
      categories: Prisma.$categoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category_id: number
      created_at: Date | null
    }, ExtArgs["result"]["subcategories"]>
    composites: {}
  }

  type subcategoriesGetPayload<S extends boolean | null | undefined | subcategoriesDefaultArgs> = $Result.GetResult<Prisma.$subcategoriesPayload, S>

  type subcategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subcategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubcategoriesCountAggregateInputType | true
    }

  export interface subcategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subcategories'], meta: { name: 'subcategories' } }
    /**
     * Find zero or one Subcategories that matches the filter.
     * @param {subcategoriesFindUniqueArgs} args - Arguments to find a Subcategories
     * @example
     * // Get one Subcategories
     * const subcategories = await prisma.subcategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subcategoriesFindUniqueArgs>(args: SelectSubset<T, subcategoriesFindUniqueArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subcategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subcategoriesFindUniqueOrThrowArgs} args - Arguments to find a Subcategories
     * @example
     * // Get one Subcategories
     * const subcategories = await prisma.subcategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subcategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, subcategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriesFindFirstArgs} args - Arguments to find a Subcategories
     * @example
     * // Get one Subcategories
     * const subcategories = await prisma.subcategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subcategoriesFindFirstArgs>(args?: SelectSubset<T, subcategoriesFindFirstArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriesFindFirstOrThrowArgs} args - Arguments to find a Subcategories
     * @example
     * // Get one Subcategories
     * const subcategories = await prisma.subcategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subcategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, subcategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subcategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subcategories
     * const subcategories = await prisma.subcategories.findMany()
     * 
     * // Get first 10 Subcategories
     * const subcategories = await prisma.subcategories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subcategoriesWithIdOnly = await prisma.subcategories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subcategoriesFindManyArgs>(args?: SelectSubset<T, subcategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subcategories.
     * @param {subcategoriesCreateArgs} args - Arguments to create a Subcategories.
     * @example
     * // Create one Subcategories
     * const Subcategories = await prisma.subcategories.create({
     *   data: {
     *     // ... data to create a Subcategories
     *   }
     * })
     * 
     */
    create<T extends subcategoriesCreateArgs>(args: SelectSubset<T, subcategoriesCreateArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subcategories.
     * @param {subcategoriesCreateManyArgs} args - Arguments to create many Subcategories.
     * @example
     * // Create many Subcategories
     * const subcategories = await prisma.subcategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subcategoriesCreateManyArgs>(args?: SelectSubset<T, subcategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subcategories.
     * @param {subcategoriesDeleteArgs} args - Arguments to delete one Subcategories.
     * @example
     * // Delete one Subcategories
     * const Subcategories = await prisma.subcategories.delete({
     *   where: {
     *     // ... filter to delete one Subcategories
     *   }
     * })
     * 
     */
    delete<T extends subcategoriesDeleteArgs>(args: SelectSubset<T, subcategoriesDeleteArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subcategories.
     * @param {subcategoriesUpdateArgs} args - Arguments to update one Subcategories.
     * @example
     * // Update one Subcategories
     * const subcategories = await prisma.subcategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subcategoriesUpdateArgs>(args: SelectSubset<T, subcategoriesUpdateArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subcategories.
     * @param {subcategoriesDeleteManyArgs} args - Arguments to filter Subcategories to delete.
     * @example
     * // Delete a few Subcategories
     * const { count } = await prisma.subcategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subcategoriesDeleteManyArgs>(args?: SelectSubset<T, subcategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subcategories
     * const subcategories = await prisma.subcategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subcategoriesUpdateManyArgs>(args: SelectSubset<T, subcategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subcategories.
     * @param {subcategoriesUpsertArgs} args - Arguments to update or create a Subcategories.
     * @example
     * // Update or create a Subcategories
     * const subcategories = await prisma.subcategories.upsert({
     *   create: {
     *     // ... data to create a Subcategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subcategories we want to update
     *   }
     * })
     */
    upsert<T extends subcategoriesUpsertArgs>(args: SelectSubset<T, subcategoriesUpsertArgs<ExtArgs>>): Prisma__subcategoriesClient<$Result.GetResult<Prisma.$subcategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriesCountArgs} args - Arguments to filter Subcategories to count.
     * @example
     * // Count the number of Subcategories
     * const count = await prisma.subcategories.count({
     *   where: {
     *     // ... the filter for the Subcategories we want to count
     *   }
     * })
    **/
    count<T extends subcategoriesCountArgs>(
      args?: Subset<T, subcategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubcategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubcategoriesAggregateArgs>(args: Subset<T, SubcategoriesAggregateArgs>): Prisma.PrismaPromise<GetSubcategoriesAggregateType<T>>

    /**
     * Group by Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends subcategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subcategoriesGroupByArgs['orderBy'] }
        : { orderBy?: subcategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, subcategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubcategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subcategories model
   */
  readonly fields: subcategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subcategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subcategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends subcategories$productsArgs<ExtArgs> = {}>(args?: Subset<T, subcategories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the subcategories model
   */
  interface subcategoriesFieldRefs {
    readonly id: FieldRef<"subcategories", 'Int'>
    readonly name: FieldRef<"subcategories", 'String'>
    readonly category_id: FieldRef<"subcategories", 'Int'>
    readonly created_at: FieldRef<"subcategories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * subcategories findUnique
   */
  export type subcategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * Filter, which subcategories to fetch.
     */
    where: subcategoriesWhereUniqueInput
  }

  /**
   * subcategories findUniqueOrThrow
   */
  export type subcategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * Filter, which subcategories to fetch.
     */
    where: subcategoriesWhereUniqueInput
  }

  /**
   * subcategories findFirst
   */
  export type subcategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * Filter, which subcategories to fetch.
     */
    where?: subcategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcategories to fetch.
     */
    orderBy?: subcategoriesOrderByWithRelationInput | subcategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subcategories.
     */
    cursor?: subcategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subcategories.
     */
    distinct?: SubcategoriesScalarFieldEnum | SubcategoriesScalarFieldEnum[]
  }

  /**
   * subcategories findFirstOrThrow
   */
  export type subcategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * Filter, which subcategories to fetch.
     */
    where?: subcategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcategories to fetch.
     */
    orderBy?: subcategoriesOrderByWithRelationInput | subcategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subcategories.
     */
    cursor?: subcategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subcategories.
     */
    distinct?: SubcategoriesScalarFieldEnum | SubcategoriesScalarFieldEnum[]
  }

  /**
   * subcategories findMany
   */
  export type subcategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * Filter, which subcategories to fetch.
     */
    where?: subcategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcategories to fetch.
     */
    orderBy?: subcategoriesOrderByWithRelationInput | subcategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subcategories.
     */
    cursor?: subcategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcategories.
     */
    skip?: number
    distinct?: SubcategoriesScalarFieldEnum | SubcategoriesScalarFieldEnum[]
  }

  /**
   * subcategories create
   */
  export type subcategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a subcategories.
     */
    data: XOR<subcategoriesCreateInput, subcategoriesUncheckedCreateInput>
  }

  /**
   * subcategories createMany
   */
  export type subcategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subcategories.
     */
    data: subcategoriesCreateManyInput | subcategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subcategories update
   */
  export type subcategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a subcategories.
     */
    data: XOR<subcategoriesUpdateInput, subcategoriesUncheckedUpdateInput>
    /**
     * Choose, which subcategories to update.
     */
    where: subcategoriesWhereUniqueInput
  }

  /**
   * subcategories updateMany
   */
  export type subcategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subcategories.
     */
    data: XOR<subcategoriesUpdateManyMutationInput, subcategoriesUncheckedUpdateManyInput>
    /**
     * Filter which subcategories to update
     */
    where?: subcategoriesWhereInput
    /**
     * Limit how many subcategories to update.
     */
    limit?: number
  }

  /**
   * subcategories upsert
   */
  export type subcategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the subcategories to update in case it exists.
     */
    where: subcategoriesWhereUniqueInput
    /**
     * In case the subcategories found by the `where` argument doesn't exist, create a new subcategories with this data.
     */
    create: XOR<subcategoriesCreateInput, subcategoriesUncheckedCreateInput>
    /**
     * In case the subcategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subcategoriesUpdateInput, subcategoriesUncheckedUpdateInput>
  }

  /**
   * subcategories delete
   */
  export type subcategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
    /**
     * Filter which subcategories to delete.
     */
    where: subcategoriesWhereUniqueInput
  }

  /**
   * subcategories deleteMany
   */
  export type subcategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subcategories to delete
     */
    where?: subcategoriesWhereInput
    /**
     * Limit how many subcategories to delete.
     */
    limit?: number
  }

  /**
   * subcategories.products
   */
  export type subcategories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * subcategories without action
   */
  export type subcategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategories
     */
    select?: subcategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategories
     */
    omit?: subcategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriesInclude<ExtArgs> | null
  }


  /**
   * Model variants
   */

  export type AggregateVariants = {
    _count: VariantsCountAggregateOutputType | null
    _avg: VariantsAvgAggregateOutputType | null
    _sum: VariantsSumAggregateOutputType | null
    _min: VariantsMinAggregateOutputType | null
    _max: VariantsMaxAggregateOutputType | null
  }

  export type VariantsAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type VariantsSumAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type VariantsMinAggregateOutputType = {
    id: number | null
    name: string | null
    hex_code: string | null
    product_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type VariantsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    hex_code: string | null
    product_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type VariantsCountAggregateOutputType = {
    id: number
    name: number
    hex_code: number
    product_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type VariantsAvgAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type VariantsSumAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type VariantsMinAggregateInputType = {
    id?: true
    name?: true
    hex_code?: true
    product_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type VariantsMaxAggregateInputType = {
    id?: true
    name?: true
    hex_code?: true
    product_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type VariantsCountAggregateInputType = {
    id?: true
    name?: true
    hex_code?: true
    product_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type VariantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which variants to aggregate.
     */
    where?: variantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variants to fetch.
     */
    orderBy?: variantsOrderByWithRelationInput | variantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: variantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned variants
    **/
    _count?: true | VariantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantsMaxAggregateInputType
  }

  export type GetVariantsAggregateType<T extends VariantsAggregateArgs> = {
        [P in keyof T & keyof AggregateVariants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariants[P]>
      : GetScalarType<T[P], AggregateVariants[P]>
  }




  export type variantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: variantsWhereInput
    orderBy?: variantsOrderByWithAggregationInput | variantsOrderByWithAggregationInput[]
    by: VariantsScalarFieldEnum[] | VariantsScalarFieldEnum
    having?: variantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantsCountAggregateInputType | true
    _avg?: VariantsAvgAggregateInputType
    _sum?: VariantsSumAggregateInputType
    _min?: VariantsMinAggregateInputType
    _max?: VariantsMaxAggregateInputType
  }

  export type VariantsGroupByOutputType = {
    id: number
    name: string
    hex_code: string | null
    product_id: number
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: VariantsCountAggregateOutputType | null
    _avg: VariantsAvgAggregateOutputType | null
    _sum: VariantsSumAggregateOutputType | null
    _min: VariantsMinAggregateOutputType | null
    _max: VariantsMaxAggregateOutputType | null
  }

  type GetVariantsGroupByPayload<T extends variantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantsGroupByOutputType[P]>
            : GetScalarType<T[P], VariantsGroupByOutputType[P]>
        }
      >
    >


  export type variantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    hex_code?: boolean
    product_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    skus?: boolean | variants$skusArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
    _count?: boolean | VariantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variants"]>



  export type variantsSelectScalar = {
    id?: boolean
    name?: boolean
    hex_code?: boolean
    product_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type variantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "hex_code" | "product_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["variants"]>
  export type variantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skus?: boolean | variants$skusArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
    _count?: boolean | VariantsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $variantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "variants"
    objects: {
      skus: Prisma.$skusPayload<ExtArgs>[]
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      hex_code: string | null
      product_id: number
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["variants"]>
    composites: {}
  }

  type variantsGetPayload<S extends boolean | null | undefined | variantsDefaultArgs> = $Result.GetResult<Prisma.$variantsPayload, S>

  type variantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<variantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariantsCountAggregateInputType | true
    }

  export interface variantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['variants'], meta: { name: 'variants' } }
    /**
     * Find zero or one Variants that matches the filter.
     * @param {variantsFindUniqueArgs} args - Arguments to find a Variants
     * @example
     * // Get one Variants
     * const variants = await prisma.variants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends variantsFindUniqueArgs>(args: SelectSubset<T, variantsFindUniqueArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {variantsFindUniqueOrThrowArgs} args - Arguments to find a Variants
     * @example
     * // Get one Variants
     * const variants = await prisma.variants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends variantsFindUniqueOrThrowArgs>(args: SelectSubset<T, variantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantsFindFirstArgs} args - Arguments to find a Variants
     * @example
     * // Get one Variants
     * const variants = await prisma.variants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends variantsFindFirstArgs>(args?: SelectSubset<T, variantsFindFirstArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantsFindFirstOrThrowArgs} args - Arguments to find a Variants
     * @example
     * // Get one Variants
     * const variants = await prisma.variants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends variantsFindFirstOrThrowArgs>(args?: SelectSubset<T, variantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variants
     * const variants = await prisma.variants.findMany()
     * 
     * // Get first 10 Variants
     * const variants = await prisma.variants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantsWithIdOnly = await prisma.variants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends variantsFindManyArgs>(args?: SelectSubset<T, variantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variants.
     * @param {variantsCreateArgs} args - Arguments to create a Variants.
     * @example
     * // Create one Variants
     * const Variants = await prisma.variants.create({
     *   data: {
     *     // ... data to create a Variants
     *   }
     * })
     * 
     */
    create<T extends variantsCreateArgs>(args: SelectSubset<T, variantsCreateArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variants.
     * @param {variantsCreateManyArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variants = await prisma.variants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends variantsCreateManyArgs>(args?: SelectSubset<T, variantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Variants.
     * @param {variantsDeleteArgs} args - Arguments to delete one Variants.
     * @example
     * // Delete one Variants
     * const Variants = await prisma.variants.delete({
     *   where: {
     *     // ... filter to delete one Variants
     *   }
     * })
     * 
     */
    delete<T extends variantsDeleteArgs>(args: SelectSubset<T, variantsDeleteArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variants.
     * @param {variantsUpdateArgs} args - Arguments to update one Variants.
     * @example
     * // Update one Variants
     * const variants = await prisma.variants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends variantsUpdateArgs>(args: SelectSubset<T, variantsUpdateArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variants.
     * @param {variantsDeleteManyArgs} args - Arguments to filter Variants to delete.
     * @example
     * // Delete a few Variants
     * const { count } = await prisma.variants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends variantsDeleteManyArgs>(args?: SelectSubset<T, variantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variants
     * const variants = await prisma.variants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends variantsUpdateManyArgs>(args: SelectSubset<T, variantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Variants.
     * @param {variantsUpsertArgs} args - Arguments to update or create a Variants.
     * @example
     * // Update or create a Variants
     * const variants = await prisma.variants.upsert({
     *   create: {
     *     // ... data to create a Variants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variants we want to update
     *   }
     * })
     */
    upsert<T extends variantsUpsertArgs>(args: SelectSubset<T, variantsUpsertArgs<ExtArgs>>): Prisma__variantsClient<$Result.GetResult<Prisma.$variantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantsCountArgs} args - Arguments to filter Variants to count.
     * @example
     * // Count the number of Variants
     * const count = await prisma.variants.count({
     *   where: {
     *     // ... the filter for the Variants we want to count
     *   }
     * })
    **/
    count<T extends variantsCountArgs>(
      args?: Subset<T, variantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VariantsAggregateArgs>(args: Subset<T, VariantsAggregateArgs>): Prisma.PrismaPromise<GetVariantsAggregateType<T>>

    /**
     * Group by Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends variantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: variantsGroupByArgs['orderBy'] }
        : { orderBy?: variantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, variantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the variants model
   */
  readonly fields: variantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for variants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__variantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skus<T extends variants$skusArgs<ExtArgs> = {}>(args?: Subset<T, variants$skusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the variants model
   */
  interface variantsFieldRefs {
    readonly id: FieldRef<"variants", 'Int'>
    readonly name: FieldRef<"variants", 'String'>
    readonly hex_code: FieldRef<"variants", 'String'>
    readonly product_id: FieldRef<"variants", 'Int'>
    readonly created_at: FieldRef<"variants", 'DateTime'>
    readonly updated_at: FieldRef<"variants", 'DateTime'>
    readonly deleted_at: FieldRef<"variants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * variants findUnique
   */
  export type variantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * Filter, which variants to fetch.
     */
    where: variantsWhereUniqueInput
  }

  /**
   * variants findUniqueOrThrow
   */
  export type variantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * Filter, which variants to fetch.
     */
    where: variantsWhereUniqueInput
  }

  /**
   * variants findFirst
   */
  export type variantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * Filter, which variants to fetch.
     */
    where?: variantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variants to fetch.
     */
    orderBy?: variantsOrderByWithRelationInput | variantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for variants.
     */
    cursor?: variantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variants.
     */
    distinct?: VariantsScalarFieldEnum | VariantsScalarFieldEnum[]
  }

  /**
   * variants findFirstOrThrow
   */
  export type variantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * Filter, which variants to fetch.
     */
    where?: variantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variants to fetch.
     */
    orderBy?: variantsOrderByWithRelationInput | variantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for variants.
     */
    cursor?: variantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variants.
     */
    distinct?: VariantsScalarFieldEnum | VariantsScalarFieldEnum[]
  }

  /**
   * variants findMany
   */
  export type variantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * Filter, which variants to fetch.
     */
    where?: variantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variants to fetch.
     */
    orderBy?: variantsOrderByWithRelationInput | variantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing variants.
     */
    cursor?: variantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variants.
     */
    skip?: number
    distinct?: VariantsScalarFieldEnum | VariantsScalarFieldEnum[]
  }

  /**
   * variants create
   */
  export type variantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * The data needed to create a variants.
     */
    data: XOR<variantsCreateInput, variantsUncheckedCreateInput>
  }

  /**
   * variants createMany
   */
  export type variantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many variants.
     */
    data: variantsCreateManyInput | variantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * variants update
   */
  export type variantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * The data needed to update a variants.
     */
    data: XOR<variantsUpdateInput, variantsUncheckedUpdateInput>
    /**
     * Choose, which variants to update.
     */
    where: variantsWhereUniqueInput
  }

  /**
   * variants updateMany
   */
  export type variantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update variants.
     */
    data: XOR<variantsUpdateManyMutationInput, variantsUncheckedUpdateManyInput>
    /**
     * Filter which variants to update
     */
    where?: variantsWhereInput
    /**
     * Limit how many variants to update.
     */
    limit?: number
  }

  /**
   * variants upsert
   */
  export type variantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * The filter to search for the variants to update in case it exists.
     */
    where: variantsWhereUniqueInput
    /**
     * In case the variants found by the `where` argument doesn't exist, create a new variants with this data.
     */
    create: XOR<variantsCreateInput, variantsUncheckedCreateInput>
    /**
     * In case the variants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<variantsUpdateInput, variantsUncheckedUpdateInput>
  }

  /**
   * variants delete
   */
  export type variantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
    /**
     * Filter which variants to delete.
     */
    where: variantsWhereUniqueInput
  }

  /**
   * variants deleteMany
   */
  export type variantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which variants to delete
     */
    where?: variantsWhereInput
    /**
     * Limit how many variants to delete.
     */
    limit?: number
  }

  /**
   * variants.skus
   */
  export type variants$skusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skus
     */
    select?: skusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skus
     */
    omit?: skusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skusInclude<ExtArgs> | null
    where?: skusWhereInput
    orderBy?: skusOrderByWithRelationInput | skusOrderByWithRelationInput[]
    cursor?: skusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkusScalarFieldEnum | SkusScalarFieldEnum[]
  }

  /**
   * variants without action
   */
  export type variantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variants
     */
    select?: variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variants
     */
    omit?: variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BrandsScalarFieldEnum: {
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

  export type BrandsScalarFieldEnum = (typeof BrandsScalarFieldEnum)[keyof typeof BrandsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    company_Id: 'company_Id'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const Price_tablesScalarFieldEnum: {
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

  export type Price_tablesScalarFieldEnum = (typeof Price_tablesScalarFieldEnum)[keyof typeof Price_tablesScalarFieldEnum]


  export const Price_tables_skusScalarFieldEnum: {
    id: 'id',
    price: 'price',
    created_at: 'created_at',
    updated_at: 'updated_at',
    sku_id: 'sku_id',
    price_table_id: 'price_table_id'
  };

  export type Price_tables_skusScalarFieldEnum = (typeof Price_tables_skusScalarFieldEnum)[keyof typeof Price_tables_skusScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
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

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const CompaniesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    reated_at: 'reated_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type CompaniesScalarFieldEnum = (typeof CompaniesScalarFieldEnum)[keyof typeof CompaniesScalarFieldEnum]


  export const SkusScalarFieldEnum: {
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

  export type SkusScalarFieldEnum = (typeof SkusScalarFieldEnum)[keyof typeof SkusScalarFieldEnum]


  export const SubcategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category_id: 'category_id',
    created_at: 'created_at'
  };

  export type SubcategoriesScalarFieldEnum = (typeof SubcategoriesScalarFieldEnum)[keyof typeof SubcategoriesScalarFieldEnum]


  export const VariantsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    hex_code: 'hex_code',
    product_id: 'product_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type VariantsScalarFieldEnum = (typeof VariantsScalarFieldEnum)[keyof typeof VariantsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const brandsOrderByRelevanceFieldEnum: {
    name: 'name',
    logo_img: 'logo_img',
    sku_order: 'sku_order'
  };

  export type brandsOrderByRelevanceFieldEnum = (typeof brandsOrderByRelevanceFieldEnum)[keyof typeof brandsOrderByRelevanceFieldEnum]


  export const categoriesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type categoriesOrderByRelevanceFieldEnum = (typeof categoriesOrderByRelevanceFieldEnum)[keyof typeof categoriesOrderByRelevanceFieldEnum]


  export const price_tablesOrderByRelevanceFieldEnum: {
    description: 'description'
  };

  export type price_tablesOrderByRelevanceFieldEnum = (typeof price_tablesOrderByRelevanceFieldEnum)[keyof typeof price_tablesOrderByRelevanceFieldEnum]


  export const productsOrderByRelevanceFieldEnum: {
    name: 'name',
    reference: 'reference',
    description: 'description',
    erp_id: 'erp_id',
    composition_data: 'composition_data',
    technical_information: 'technical_information',
    colection: 'colection'
  };

  export type productsOrderByRelevanceFieldEnum = (typeof productsOrderByRelevanceFieldEnum)[keyof typeof productsOrderByRelevanceFieldEnum]


  export const companiesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type companiesOrderByRelevanceFieldEnum = (typeof companiesOrderByRelevanceFieldEnum)[keyof typeof companiesOrderByRelevanceFieldEnum]


  export const skusOrderByRelevanceFieldEnum: {
    size: 'size',
    code: 'code',
    erpId: 'erpId',
    cest: 'cest',
    ncm: 'ncm'
  };

  export type skusOrderByRelevanceFieldEnum = (typeof skusOrderByRelevanceFieldEnum)[keyof typeof skusOrderByRelevanceFieldEnum]


  export const subcategoriesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type subcategoriesOrderByRelevanceFieldEnum = (typeof subcategoriesOrderByRelevanceFieldEnum)[keyof typeof subcategoriesOrderByRelevanceFieldEnum]


  export const variantsOrderByRelevanceFieldEnum: {
    name: 'name',
    hex_code: 'hex_code'
  };

  export type variantsOrderByRelevanceFieldEnum = (typeof variantsOrderByRelevanceFieldEnum)[keyof typeof variantsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'products_type'
   */
  export type Enumproducts_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'products_type'>
    


  /**
   * Reference to a field of type 'products_gender'
   */
  export type Enumproducts_genderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'products_gender'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type brandsWhereInput = {
    AND?: brandsWhereInput | brandsWhereInput[]
    OR?: brandsWhereInput[]
    NOT?: brandsWhereInput | brandsWhereInput[]
    id?: IntFilter<"brands"> | number
    name?: StringFilter<"brands"> | string
    logo_img?: StringNullableFilter<"brands"> | string | null
    min_value?: DecimalFilter<"brands"> | Decimal | DecimalJsLike | number | string
    min_installments_value?: DecimalFilter<"brands"> | Decimal | DecimalJsLike | number | string
    visible?: BoolNullableFilter<"brands"> | boolean | null
    sku_order?: StringNullableFilter<"brands"> | string | null
    address_id?: IntNullableFilter<"brands"> | number | null
    business_id?: IntFilter<"brands"> | number
    company_Id?: IntFilter<"brands"> | number
    created_at?: DateTimeFilter<"brands"> | Date | string
    updated_at?: DateTimeNullableFilter<"brands"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"brands"> | Date | string | null
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    products?: ProductsListRelationFilter
  }

  export type brandsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo_img?: SortOrderInput | SortOrder
    min_value?: SortOrder
    min_installments_value?: SortOrder
    visible?: SortOrderInput | SortOrder
    sku_order?: SortOrderInput | SortOrder
    address_id?: SortOrderInput | SortOrder
    business_id?: SortOrder
    company_Id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    company?: companiesOrderByWithRelationInput
    products?: productsOrderByRelationAggregateInput
    _relevance?: brandsOrderByRelevanceInput
  }

  export type brandsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    address_id?: number
    name_company_Id?: brandsNameCompany_IdCompoundUniqueInput
    AND?: brandsWhereInput | brandsWhereInput[]
    OR?: brandsWhereInput[]
    NOT?: brandsWhereInput | brandsWhereInput[]
    name?: StringFilter<"brands"> | string
    logo_img?: StringNullableFilter<"brands"> | string | null
    min_value?: DecimalFilter<"brands"> | Decimal | DecimalJsLike | number | string
    min_installments_value?: DecimalFilter<"brands"> | Decimal | DecimalJsLike | number | string
    visible?: BoolNullableFilter<"brands"> | boolean | null
    sku_order?: StringNullableFilter<"brands"> | string | null
    business_id?: IntFilter<"brands"> | number
    company_Id?: IntFilter<"brands"> | number
    created_at?: DateTimeFilter<"brands"> | Date | string
    updated_at?: DateTimeNullableFilter<"brands"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"brands"> | Date | string | null
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    products?: ProductsListRelationFilter
  }, "id" | "address_id" | "name_company_Id">

  export type brandsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo_img?: SortOrderInput | SortOrder
    min_value?: SortOrder
    min_installments_value?: SortOrder
    visible?: SortOrderInput | SortOrder
    sku_order?: SortOrderInput | SortOrder
    address_id?: SortOrderInput | SortOrder
    business_id?: SortOrder
    company_Id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: brandsCountOrderByAggregateInput
    _avg?: brandsAvgOrderByAggregateInput
    _max?: brandsMaxOrderByAggregateInput
    _min?: brandsMinOrderByAggregateInput
    _sum?: brandsSumOrderByAggregateInput
  }

  export type brandsScalarWhereWithAggregatesInput = {
    AND?: brandsScalarWhereWithAggregatesInput | brandsScalarWhereWithAggregatesInput[]
    OR?: brandsScalarWhereWithAggregatesInput[]
    NOT?: brandsScalarWhereWithAggregatesInput | brandsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"brands"> | number
    name?: StringWithAggregatesFilter<"brands"> | string
    logo_img?: StringNullableWithAggregatesFilter<"brands"> | string | null
    min_value?: DecimalWithAggregatesFilter<"brands"> | Decimal | DecimalJsLike | number | string
    min_installments_value?: DecimalWithAggregatesFilter<"brands"> | Decimal | DecimalJsLike | number | string
    visible?: BoolNullableWithAggregatesFilter<"brands"> | boolean | null
    sku_order?: StringNullableWithAggregatesFilter<"brands"> | string | null
    address_id?: IntNullableWithAggregatesFilter<"brands"> | number | null
    business_id?: IntWithAggregatesFilter<"brands"> | number
    company_Id?: IntWithAggregatesFilter<"brands"> | number
    created_at?: DateTimeWithAggregatesFilter<"brands"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"brands"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"brands"> | Date | string | null
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    company_Id?: IntFilter<"categories"> | number
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    products?: ProductsListRelationFilter
    subcategories?: SubcategoriesListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    company_Id?: SortOrder
    company?: companiesOrderByWithRelationInput
    products?: productsOrderByRelationAggregateInput
    subcategories?: subcategoriesOrderByRelationAggregateInput
    _relevance?: categoriesOrderByRelevanceInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_company_Id?: categoriesNameCompany_IdCompoundUniqueInput
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    name?: StringFilter<"categories"> | string
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    company_Id?: IntFilter<"categories"> | number
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    products?: ProductsListRelationFilter
    subcategories?: SubcategoriesListRelationFilter
  }, "id" | "name_company_Id">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    company_Id?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
    company_Id?: IntWithAggregatesFilter<"categories"> | number
  }

  export type price_tablesWhereInput = {
    AND?: price_tablesWhereInput | price_tablesWhereInput[]
    OR?: price_tablesWhereInput[]
    NOT?: price_tablesWhereInput | price_tablesWhereInput[]
    id?: IntFilter<"price_tables"> | number
    description?: StringFilter<"price_tables"> | string
    price_adjustment?: DecimalFilter<"price_tables"> | Decimal | DecimalJsLike | number | string
    minimum_value?: DecimalFilter<"price_tables"> | Decimal | DecimalJsLike | number | string
    visible?: BoolFilter<"price_tables"> | boolean
    created_at?: DateTimeFilter<"price_tables"> | Date | string
    updated_at?: DateTimeNullableFilter<"price_tables"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"price_tables"> | Date | string | null
    company_Id?: IntFilter<"price_tables"> | number
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    price_tables_skus?: Price_tables_skusListRelationFilter
  }

  export type price_tablesOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    price_adjustment?: SortOrder
    minimum_value?: SortOrder
    visible?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    company_Id?: SortOrder
    company?: companiesOrderByWithRelationInput
    price_tables_skus?: price_tables_skusOrderByRelationAggregateInput
    _relevance?: price_tablesOrderByRelevanceInput
  }

  export type price_tablesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: price_tablesWhereInput | price_tablesWhereInput[]
    OR?: price_tablesWhereInput[]
    NOT?: price_tablesWhereInput | price_tablesWhereInput[]
    description?: StringFilter<"price_tables"> | string
    price_adjustment?: DecimalFilter<"price_tables"> | Decimal | DecimalJsLike | number | string
    minimum_value?: DecimalFilter<"price_tables"> | Decimal | DecimalJsLike | number | string
    visible?: BoolFilter<"price_tables"> | boolean
    created_at?: DateTimeFilter<"price_tables"> | Date | string
    updated_at?: DateTimeNullableFilter<"price_tables"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"price_tables"> | Date | string | null
    company_Id?: IntFilter<"price_tables"> | number
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    price_tables_skus?: Price_tables_skusListRelationFilter
  }, "id">

  export type price_tablesOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    price_adjustment?: SortOrder
    minimum_value?: SortOrder
    visible?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    company_Id?: SortOrder
    _count?: price_tablesCountOrderByAggregateInput
    _avg?: price_tablesAvgOrderByAggregateInput
    _max?: price_tablesMaxOrderByAggregateInput
    _min?: price_tablesMinOrderByAggregateInput
    _sum?: price_tablesSumOrderByAggregateInput
  }

  export type price_tablesScalarWhereWithAggregatesInput = {
    AND?: price_tablesScalarWhereWithAggregatesInput | price_tablesScalarWhereWithAggregatesInput[]
    OR?: price_tablesScalarWhereWithAggregatesInput[]
    NOT?: price_tablesScalarWhereWithAggregatesInput | price_tablesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"price_tables"> | number
    description?: StringWithAggregatesFilter<"price_tables"> | string
    price_adjustment?: DecimalWithAggregatesFilter<"price_tables"> | Decimal | DecimalJsLike | number | string
    minimum_value?: DecimalWithAggregatesFilter<"price_tables"> | Decimal | DecimalJsLike | number | string
    visible?: BoolWithAggregatesFilter<"price_tables"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"price_tables"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"price_tables"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"price_tables"> | Date | string | null
    company_Id?: IntWithAggregatesFilter<"price_tables"> | number
  }

  export type price_tables_skusWhereInput = {
    AND?: price_tables_skusWhereInput | price_tables_skusWhereInput[]
    OR?: price_tables_skusWhereInput[]
    NOT?: price_tables_skusWhereInput | price_tables_skusWhereInput[]
    id?: IntFilter<"price_tables_skus"> | number
    price?: DecimalFilter<"price_tables_skus"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"price_tables_skus"> | Date | string
    updated_at?: DateTimeNullableFilter<"price_tables_skus"> | Date | string | null
    sku_id?: IntFilter<"price_tables_skus"> | number
    price_table_id?: IntFilter<"price_tables_skus"> | number
    price_tables?: XOR<Price_tablesScalarRelationFilter, price_tablesWhereInput>
    skus?: XOR<SkusScalarRelationFilter, skusWhereInput>
  }

  export type price_tables_skusOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    sku_id?: SortOrder
    price_table_id?: SortOrder
    price_tables?: price_tablesOrderByWithRelationInput
    skus?: skusOrderByWithRelationInput
  }

  export type price_tables_skusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sku_id_price_table_id?: price_tables_skusSku_idPrice_table_idCompoundUniqueInput
    AND?: price_tables_skusWhereInput | price_tables_skusWhereInput[]
    OR?: price_tables_skusWhereInput[]
    NOT?: price_tables_skusWhereInput | price_tables_skusWhereInput[]
    price?: DecimalFilter<"price_tables_skus"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"price_tables_skus"> | Date | string
    updated_at?: DateTimeNullableFilter<"price_tables_skus"> | Date | string | null
    sku_id?: IntFilter<"price_tables_skus"> | number
    price_table_id?: IntFilter<"price_tables_skus"> | number
    price_tables?: XOR<Price_tablesScalarRelationFilter, price_tablesWhereInput>
    skus?: XOR<SkusScalarRelationFilter, skusWhereInput>
  }, "id" | "sku_id_price_table_id">

  export type price_tables_skusOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    sku_id?: SortOrder
    price_table_id?: SortOrder
    _count?: price_tables_skusCountOrderByAggregateInput
    _avg?: price_tables_skusAvgOrderByAggregateInput
    _max?: price_tables_skusMaxOrderByAggregateInput
    _min?: price_tables_skusMinOrderByAggregateInput
    _sum?: price_tables_skusSumOrderByAggregateInput
  }

  export type price_tables_skusScalarWhereWithAggregatesInput = {
    AND?: price_tables_skusScalarWhereWithAggregatesInput | price_tables_skusScalarWhereWithAggregatesInput[]
    OR?: price_tables_skusScalarWhereWithAggregatesInput[]
    NOT?: price_tables_skusScalarWhereWithAggregatesInput | price_tables_skusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"price_tables_skus"> | number
    price?: DecimalWithAggregatesFilter<"price_tables_skus"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"price_tables_skus"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"price_tables_skus"> | Date | string | null
    sku_id?: IntWithAggregatesFilter<"price_tables_skus"> | number
    price_table_id?: IntWithAggregatesFilter<"price_tables_skus"> | number
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: IntFilter<"products"> | number
    name?: StringFilter<"products"> | string
    reference?: StringFilter<"products"> | string
    type?: Enumproducts_typeFilter<"products"> | $Enums.products_type
    gender?: Enumproducts_genderFilter<"products"> | $Enums.products_gender
    prompt_delivery?: BoolFilter<"products"> | boolean
    description?: StringNullableFilter<"products"> | string | null
    company_Id?: IntFilter<"products"> | number
    erp_id?: StringNullableFilter<"products"> | string | null
    brand_id?: IntFilter<"products"> | number
    deadline_id?: IntNullableFilter<"products"> | number | null
    created_at?: DateTimeFilter<"products"> | Date | string
    updated_at?: DateTimeNullableFilter<"products"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"products"> | Date | string | null
    category_id?: IntFilter<"products"> | number
    subcategory_id?: IntNullableFilter<"products"> | number | null
    category_order?: IntNullableFilter<"products"> | number | null
    composition_data?: StringNullableFilter<"products"> | string | null
    technical_information?: StringNullableFilter<"products"> | string | null
    open_grid?: BoolFilter<"products"> | boolean
    ipi?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFilter<"products"> | boolean
    is_launch?: BoolFilter<"products"> | boolean
    is_visible?: BoolFilter<"products"> | boolean
    colection?: StringNullableFilter<"products"> | string | null
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    brands?: XOR<BrandsScalarRelationFilter, brandsWhereInput>
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    subcategories?: XOR<SubcategoriesNullableScalarRelationFilter, subcategoriesWhereInput> | null
    variants?: VariantsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    prompt_delivery?: SortOrder
    description?: SortOrderInput | SortOrder
    company_Id?: SortOrder
    erp_id?: SortOrderInput | SortOrder
    brand_id?: SortOrder
    deadline_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    category_id?: SortOrder
    subcategory_id?: SortOrderInput | SortOrder
    category_order?: SortOrderInput | SortOrder
    composition_data?: SortOrderInput | SortOrder
    technical_information?: SortOrderInput | SortOrder
    open_grid?: SortOrder
    ipi?: SortOrderInput | SortOrder
    is_discontinued?: SortOrder
    is_launch?: SortOrder
    is_visible?: SortOrder
    colection?: SortOrderInput | SortOrder
    company?: companiesOrderByWithRelationInput
    brands?: brandsOrderByWithRelationInput
    categories?: categoriesOrderByWithRelationInput
    subcategories?: subcategoriesOrderByWithRelationInput
    variants?: variantsOrderByRelationAggregateInput
    _relevance?: productsOrderByRelevanceInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    erp_id_company_Id?: productsErp_idCompany_IdCompoundUniqueInput
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringFilter<"products"> | string
    reference?: StringFilter<"products"> | string
    type?: Enumproducts_typeFilter<"products"> | $Enums.products_type
    gender?: Enumproducts_genderFilter<"products"> | $Enums.products_gender
    prompt_delivery?: BoolFilter<"products"> | boolean
    description?: StringNullableFilter<"products"> | string | null
    company_Id?: IntFilter<"products"> | number
    erp_id?: StringNullableFilter<"products"> | string | null
    brand_id?: IntFilter<"products"> | number
    deadline_id?: IntNullableFilter<"products"> | number | null
    created_at?: DateTimeFilter<"products"> | Date | string
    updated_at?: DateTimeNullableFilter<"products"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"products"> | Date | string | null
    category_id?: IntFilter<"products"> | number
    subcategory_id?: IntNullableFilter<"products"> | number | null
    category_order?: IntNullableFilter<"products"> | number | null
    composition_data?: StringNullableFilter<"products"> | string | null
    technical_information?: StringNullableFilter<"products"> | string | null
    open_grid?: BoolFilter<"products"> | boolean
    ipi?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFilter<"products"> | boolean
    is_launch?: BoolFilter<"products"> | boolean
    is_visible?: BoolFilter<"products"> | boolean
    colection?: StringNullableFilter<"products"> | string | null
    company?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    brands?: XOR<BrandsScalarRelationFilter, brandsWhereInput>
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    subcategories?: XOR<SubcategoriesNullableScalarRelationFilter, subcategoriesWhereInput> | null
    variants?: VariantsListRelationFilter
  }, "id" | "erp_id_company_Id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    prompt_delivery?: SortOrder
    description?: SortOrderInput | SortOrder
    company_Id?: SortOrder
    erp_id?: SortOrderInput | SortOrder
    brand_id?: SortOrder
    deadline_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    category_id?: SortOrder
    subcategory_id?: SortOrderInput | SortOrder
    category_order?: SortOrderInput | SortOrder
    composition_data?: SortOrderInput | SortOrder
    technical_information?: SortOrderInput | SortOrder
    open_grid?: SortOrder
    ipi?: SortOrderInput | SortOrder
    is_discontinued?: SortOrder
    is_launch?: SortOrder
    is_visible?: SortOrder
    colection?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products"> | number
    name?: StringWithAggregatesFilter<"products"> | string
    reference?: StringWithAggregatesFilter<"products"> | string
    type?: Enumproducts_typeWithAggregatesFilter<"products"> | $Enums.products_type
    gender?: Enumproducts_genderWithAggregatesFilter<"products"> | $Enums.products_gender
    prompt_delivery?: BoolWithAggregatesFilter<"products"> | boolean
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
    company_Id?: IntWithAggregatesFilter<"products"> | number
    erp_id?: StringNullableWithAggregatesFilter<"products"> | string | null
    brand_id?: IntWithAggregatesFilter<"products"> | number
    deadline_id?: IntNullableWithAggregatesFilter<"products"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"products"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
    category_id?: IntWithAggregatesFilter<"products"> | number
    subcategory_id?: IntNullableWithAggregatesFilter<"products"> | number | null
    category_order?: IntNullableWithAggregatesFilter<"products"> | number | null
    composition_data?: StringNullableWithAggregatesFilter<"products"> | string | null
    technical_information?: StringNullableWithAggregatesFilter<"products"> | string | null
    open_grid?: BoolWithAggregatesFilter<"products"> | boolean
    ipi?: DecimalNullableWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolWithAggregatesFilter<"products"> | boolean
    is_launch?: BoolWithAggregatesFilter<"products"> | boolean
    is_visible?: BoolWithAggregatesFilter<"products"> | boolean
    colection?: StringNullableWithAggregatesFilter<"products"> | string | null
  }

  export type companiesWhereInput = {
    AND?: companiesWhereInput | companiesWhereInput[]
    OR?: companiesWhereInput[]
    NOT?: companiesWhereInput | companiesWhereInput[]
    id?: IntFilter<"companies"> | number
    name?: StringFilter<"companies"> | string
    reated_at?: DateTimeFilter<"companies"> | Date | string
    updated_at?: DateTimeNullableFilter<"companies"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"companies"> | Date | string | null
    products?: ProductsListRelationFilter
    brands?: BrandsListRelationFilter
    categories?: CategoriesListRelationFilter
    price_tables?: Price_tablesListRelationFilter
  }

  export type companiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    reated_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    products?: productsOrderByRelationAggregateInput
    brands?: brandsOrderByRelationAggregateInput
    categories?: categoriesOrderByRelationAggregateInput
    price_tables?: price_tablesOrderByRelationAggregateInput
    _relevance?: companiesOrderByRelevanceInput
  }

  export type companiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: companiesWhereInput | companiesWhereInput[]
    OR?: companiesWhereInput[]
    NOT?: companiesWhereInput | companiesWhereInput[]
    name?: StringFilter<"companies"> | string
    reated_at?: DateTimeFilter<"companies"> | Date | string
    updated_at?: DateTimeNullableFilter<"companies"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"companies"> | Date | string | null
    products?: ProductsListRelationFilter
    brands?: BrandsListRelationFilter
    categories?: CategoriesListRelationFilter
    price_tables?: Price_tablesListRelationFilter
  }, "id">

  export type companiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    reated_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: companiesCountOrderByAggregateInput
    _avg?: companiesAvgOrderByAggregateInput
    _max?: companiesMaxOrderByAggregateInput
    _min?: companiesMinOrderByAggregateInput
    _sum?: companiesSumOrderByAggregateInput
  }

  export type companiesScalarWhereWithAggregatesInput = {
    AND?: companiesScalarWhereWithAggregatesInput | companiesScalarWhereWithAggregatesInput[]
    OR?: companiesScalarWhereWithAggregatesInput[]
    NOT?: companiesScalarWhereWithAggregatesInput | companiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"companies"> | number
    name?: StringWithAggregatesFilter<"companies"> | string
    reated_at?: DateTimeWithAggregatesFilter<"companies"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"companies"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"companies"> | Date | string | null
  }

  export type skusWhereInput = {
    AND?: skusWhereInput | skusWhereInput[]
    OR?: skusWhereInput[]
    NOT?: skusWhereInput | skusWhereInput[]
    id?: IntFilter<"skus"> | number
    size?: StringFilter<"skus"> | string
    stock?: IntFilter<"skus"> | number
    price?: DecimalFilter<"skus"> | Decimal | DecimalJsLike | number | string
    code?: StringFilter<"skus"> | string
    min_quantity?: IntNullableFilter<"skus"> | number | null
    multiple_quantity?: IntFilter<"skus"> | number
    erpId?: StringNullableFilter<"skus"> | string | null
    variant_id?: IntFilter<"skus"> | number
    cest?: StringNullableFilter<"skus"> | string | null
    height?: FloatNullableFilter<"skus"> | number | null
    length?: FloatNullableFilter<"skus"> | number | null
    ncm?: StringNullableFilter<"skus"> | string | null
    weight?: FloatNullableFilter<"skus"> | number | null
    width?: FloatNullableFilter<"skus"> | number | null
    created_at?: DateTimeFilter<"skus"> | Date | string
    updated_at?: DateTimeNullableFilter<"skus"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"skus"> | Date | string | null
    price_tables_skus?: Price_tables_skusListRelationFilter
    variants?: XOR<VariantsScalarRelationFilter, variantsWhereInput>
  }

  export type skusOrderByWithRelationInput = {
    id?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    code?: SortOrder
    min_quantity?: SortOrderInput | SortOrder
    multiple_quantity?: SortOrder
    erpId?: SortOrderInput | SortOrder
    variant_id?: SortOrder
    cest?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    ncm?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    price_tables_skus?: price_tables_skusOrderByRelationAggregateInput
    variants?: variantsOrderByWithRelationInput
    _relevance?: skusOrderByRelevanceInput
  }

  export type skusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    erpId?: string
    AND?: skusWhereInput | skusWhereInput[]
    OR?: skusWhereInput[]
    NOT?: skusWhereInput | skusWhereInput[]
    size?: StringFilter<"skus"> | string
    stock?: IntFilter<"skus"> | number
    price?: DecimalFilter<"skus"> | Decimal | DecimalJsLike | number | string
    code?: StringFilter<"skus"> | string
    min_quantity?: IntNullableFilter<"skus"> | number | null
    multiple_quantity?: IntFilter<"skus"> | number
    variant_id?: IntFilter<"skus"> | number
    cest?: StringNullableFilter<"skus"> | string | null
    height?: FloatNullableFilter<"skus"> | number | null
    length?: FloatNullableFilter<"skus"> | number | null
    ncm?: StringNullableFilter<"skus"> | string | null
    weight?: FloatNullableFilter<"skus"> | number | null
    width?: FloatNullableFilter<"skus"> | number | null
    created_at?: DateTimeFilter<"skus"> | Date | string
    updated_at?: DateTimeNullableFilter<"skus"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"skus"> | Date | string | null
    price_tables_skus?: Price_tables_skusListRelationFilter
    variants?: XOR<VariantsScalarRelationFilter, variantsWhereInput>
  }, "id" | "erpId">

  export type skusOrderByWithAggregationInput = {
    id?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    code?: SortOrder
    min_quantity?: SortOrderInput | SortOrder
    multiple_quantity?: SortOrder
    erpId?: SortOrderInput | SortOrder
    variant_id?: SortOrder
    cest?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    ncm?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: skusCountOrderByAggregateInput
    _avg?: skusAvgOrderByAggregateInput
    _max?: skusMaxOrderByAggregateInput
    _min?: skusMinOrderByAggregateInput
    _sum?: skusSumOrderByAggregateInput
  }

  export type skusScalarWhereWithAggregatesInput = {
    AND?: skusScalarWhereWithAggregatesInput | skusScalarWhereWithAggregatesInput[]
    OR?: skusScalarWhereWithAggregatesInput[]
    NOT?: skusScalarWhereWithAggregatesInput | skusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"skus"> | number
    size?: StringWithAggregatesFilter<"skus"> | string
    stock?: IntWithAggregatesFilter<"skus"> | number
    price?: DecimalWithAggregatesFilter<"skus"> | Decimal | DecimalJsLike | number | string
    code?: StringWithAggregatesFilter<"skus"> | string
    min_quantity?: IntNullableWithAggregatesFilter<"skus"> | number | null
    multiple_quantity?: IntWithAggregatesFilter<"skus"> | number
    erpId?: StringNullableWithAggregatesFilter<"skus"> | string | null
    variant_id?: IntWithAggregatesFilter<"skus"> | number
    cest?: StringNullableWithAggregatesFilter<"skus"> | string | null
    height?: FloatNullableWithAggregatesFilter<"skus"> | number | null
    length?: FloatNullableWithAggregatesFilter<"skus"> | number | null
    ncm?: StringNullableWithAggregatesFilter<"skus"> | string | null
    weight?: FloatNullableWithAggregatesFilter<"skus"> | number | null
    width?: FloatNullableWithAggregatesFilter<"skus"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"skus"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"skus"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"skus"> | Date | string | null
  }

  export type subcategoriesWhereInput = {
    AND?: subcategoriesWhereInput | subcategoriesWhereInput[]
    OR?: subcategoriesWhereInput[]
    NOT?: subcategoriesWhereInput | subcategoriesWhereInput[]
    id?: IntFilter<"subcategories"> | number
    name?: StringFilter<"subcategories"> | string
    category_id?: IntFilter<"subcategories"> | number
    created_at?: DateTimeNullableFilter<"subcategories"> | Date | string | null
    products?: ProductsListRelationFilter
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
  }

  export type subcategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    products?: productsOrderByRelationAggregateInput
    categories?: categoriesOrderByWithRelationInput
    _relevance?: subcategoriesOrderByRelevanceInput
  }

  export type subcategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_category_id?: subcategoriesNameCategory_idCompoundUniqueInput
    AND?: subcategoriesWhereInput | subcategoriesWhereInput[]
    OR?: subcategoriesWhereInput[]
    NOT?: subcategoriesWhereInput | subcategoriesWhereInput[]
    name?: StringFilter<"subcategories"> | string
    category_id?: IntFilter<"subcategories"> | number
    created_at?: DateTimeNullableFilter<"subcategories"> | Date | string | null
    products?: ProductsListRelationFilter
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
  }, "id" | "name_category_id">

  export type subcategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: subcategoriesCountOrderByAggregateInput
    _avg?: subcategoriesAvgOrderByAggregateInput
    _max?: subcategoriesMaxOrderByAggregateInput
    _min?: subcategoriesMinOrderByAggregateInput
    _sum?: subcategoriesSumOrderByAggregateInput
  }

  export type subcategoriesScalarWhereWithAggregatesInput = {
    AND?: subcategoriesScalarWhereWithAggregatesInput | subcategoriesScalarWhereWithAggregatesInput[]
    OR?: subcategoriesScalarWhereWithAggregatesInput[]
    NOT?: subcategoriesScalarWhereWithAggregatesInput | subcategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"subcategories"> | number
    name?: StringWithAggregatesFilter<"subcategories"> | string
    category_id?: IntWithAggregatesFilter<"subcategories"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"subcategories"> | Date | string | null
  }

  export type variantsWhereInput = {
    AND?: variantsWhereInput | variantsWhereInput[]
    OR?: variantsWhereInput[]
    NOT?: variantsWhereInput | variantsWhereInput[]
    id?: IntFilter<"variants"> | number
    name?: StringFilter<"variants"> | string
    hex_code?: StringNullableFilter<"variants"> | string | null
    product_id?: IntFilter<"variants"> | number
    created_at?: DateTimeNullableFilter<"variants"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"variants"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"variants"> | Date | string | null
    skus?: SkusListRelationFilter
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type variantsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    hex_code?: SortOrderInput | SortOrder
    product_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    skus?: skusOrderByRelationAggregateInput
    products?: productsOrderByWithRelationInput
    _relevance?: variantsOrderByRelevanceInput
  }

  export type variantsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: variantsWhereInput | variantsWhereInput[]
    OR?: variantsWhereInput[]
    NOT?: variantsWhereInput | variantsWhereInput[]
    name?: StringFilter<"variants"> | string
    hex_code?: StringNullableFilter<"variants"> | string | null
    product_id?: IntFilter<"variants"> | number
    created_at?: DateTimeNullableFilter<"variants"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"variants"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"variants"> | Date | string | null
    skus?: SkusListRelationFilter
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type variantsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    hex_code?: SortOrderInput | SortOrder
    product_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: variantsCountOrderByAggregateInput
    _avg?: variantsAvgOrderByAggregateInput
    _max?: variantsMaxOrderByAggregateInput
    _min?: variantsMinOrderByAggregateInput
    _sum?: variantsSumOrderByAggregateInput
  }

  export type variantsScalarWhereWithAggregatesInput = {
    AND?: variantsScalarWhereWithAggregatesInput | variantsScalarWhereWithAggregatesInput[]
    OR?: variantsScalarWhereWithAggregatesInput[]
    NOT?: variantsScalarWhereWithAggregatesInput | variantsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"variants"> | number
    name?: StringWithAggregatesFilter<"variants"> | string
    hex_code?: StringNullableWithAggregatesFilter<"variants"> | string | null
    product_id?: IntWithAggregatesFilter<"variants"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"variants"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"variants"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"variants"> | Date | string | null
  }

  export type brandsCreateInput = {
    name: string
    logo_img?: string | null
    min_value?: Decimal | DecimalJsLike | number | string
    min_installments_value?: Decimal | DecimalJsLike | number | string
    visible?: boolean | null
    sku_order?: string | null
    address_id?: number | null
    business_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    company: companiesCreateNestedOneWithoutBrandsInput
    products?: productsCreateNestedManyWithoutBrandsInput
  }

  export type brandsUncheckedCreateInput = {
    id?: number
    name: string
    logo_img?: string | null
    min_value?: Decimal | DecimalJsLike | number | string
    min_installments_value?: Decimal | DecimalJsLike | number | string
    visible?: boolean | null
    sku_order?: string | null
    address_id?: number | null
    business_id: number
    company_Id: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutBrandsInput
  }

  export type brandsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo_img?: NullableStringFieldUpdateOperationsInput | string | null
    min_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_installments_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sku_order?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    business_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: companiesUpdateOneRequiredWithoutBrandsNestedInput
    products?: productsUpdateManyWithoutBrandsNestedInput
  }

  export type brandsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo_img?: NullableStringFieldUpdateOperationsInput | string | null
    min_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_installments_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sku_order?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    business_id?: IntFieldUpdateOperationsInput | number
    company_Id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutBrandsNestedInput
  }

  export type brandsCreateManyInput = {
    id?: number
    name: string
    logo_img?: string | null
    min_value?: Decimal | DecimalJsLike | number | string
    min_installments_value?: Decimal | DecimalJsLike | number | string
    visible?: boolean | null
    sku_order?: string | null
    address_id?: number | null
    business_id: number
    company_Id: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type brandsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo_img?: NullableStringFieldUpdateOperationsInput | string | null
    min_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_installments_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sku_order?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    business_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type brandsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo_img?: NullableStringFieldUpdateOperationsInput | string | null
    min_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_installments_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sku_order?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    business_id?: IntFieldUpdateOperationsInput | number
    company_Id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesCreateInput = {
    name: string
    created_at?: Date | string | null
    company: companiesCreateNestedOneWithoutCategoriesInput
    products?: productsCreateNestedManyWithoutCategoriesInput
    subcategories?: subcategoriesCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    company_Id: number
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
    subcategories?: subcategoriesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: companiesUpdateOneRequiredWithoutCategoriesNestedInput
    products?: productsUpdateManyWithoutCategoriesNestedInput
    subcategories?: subcategoriesUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_Id?: IntFieldUpdateOperationsInput | number
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
    subcategories?: subcategoriesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    company_Id: number
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_Id?: IntFieldUpdateOperationsInput | number
  }

  export type price_tablesCreateInput = {
    description: string
    price_adjustment?: Decimal | DecimalJsLike | number | string
    minimum_value: Decimal | DecimalJsLike | number | string
    visible?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    company: companiesCreateNestedOneWithoutPrice_tablesInput
    price_tables_skus?: price_tables_skusCreateNestedManyWithoutPrice_tablesInput
  }

  export type price_tablesUncheckedCreateInput = {
    id?: number
    description: string
    price_adjustment?: Decimal | DecimalJsLike | number | string
    minimum_value: Decimal | DecimalJsLike | number | string
    visible?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    company_Id: number
    price_tables_skus?: price_tables_skusUncheckedCreateNestedManyWithoutPrice_tablesInput
  }

  export type price_tablesUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    price_adjustment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimum_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: companiesUpdateOneRequiredWithoutPrice_tablesNestedInput
    price_tables_skus?: price_tables_skusUpdateManyWithoutPrice_tablesNestedInput
  }

  export type price_tablesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price_adjustment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimum_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_Id?: IntFieldUpdateOperationsInput | number
    price_tables_skus?: price_tables_skusUncheckedUpdateManyWithoutPrice_tablesNestedInput
  }

  export type price_tablesCreateManyInput = {
    id?: number
    description: string
    price_adjustment?: Decimal | DecimalJsLike | number | string
    minimum_value: Decimal | DecimalJsLike | number | string
    visible?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    company_Id: number
  }

  export type price_tablesUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    price_adjustment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimum_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type price_tablesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price_adjustment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimum_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_Id?: IntFieldUpdateOperationsInput | number
  }

  export type price_tables_skusCreateInput = {
    price?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string | null
    price_tables: price_tablesCreateNestedOneWithoutPrice_tables_skusInput
    skus: skusCreateNestedOneWithoutPrice_tables_skusInput
  }

  export type price_tables_skusUncheckedCreateInput = {
    id?: number
    price?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string | null
    sku_id: number
    price_table_id: number
  }

  export type price_tables_skusUpdateInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_tables?: price_tablesUpdateOneRequiredWithoutPrice_tables_skusNestedInput
    skus?: skusUpdateOneRequiredWithoutPrice_tables_skusNestedInput
  }

  export type price_tables_skusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sku_id?: IntFieldUpdateOperationsInput | number
    price_table_id?: IntFieldUpdateOperationsInput | number
  }

  export type price_tables_skusCreateManyInput = {
    id?: number
    price?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string | null
    sku_id: number
    price_table_id: number
  }

  export type price_tables_skusUpdateManyMutationInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type price_tables_skusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sku_id?: IntFieldUpdateOperationsInput | number
    price_table_id?: IntFieldUpdateOperationsInput | number
  }

  export type productsCreateInput = {
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    erp_id?: string | null
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
    company: companiesCreateNestedOneWithoutProductsInput
    brands: brandsCreateNestedOneWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
    subcategories?: subcategoriesCreateNestedOneWithoutProductsInput
    variants?: variantsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    company_Id: number
    erp_id?: string | null
    brand_id: number
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    category_id: number
    subcategory_id?: number | null
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
    variants?: variantsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
    company?: companiesUpdateOneRequiredWithoutProductsNestedInput
    brands?: brandsUpdateOneRequiredWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    subcategories?: subcategoriesUpdateOneWithoutProductsNestedInput
    variants?: variantsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    company_Id?: IntFieldUpdateOperationsInput | number
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    brand_id?: IntFieldUpdateOperationsInput | number
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
    variants?: variantsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id?: number
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    company_Id: number
    erp_id?: string | null
    brand_id: number
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    category_id: number
    subcategory_id?: number | null
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
  }

  export type productsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    company_Id?: IntFieldUpdateOperationsInput | number
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    brand_id?: IntFieldUpdateOperationsInput | number
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companiesCreateInput = {
    name: string
    reated_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products?: productsCreateNestedManyWithoutCompanyInput
    brands?: brandsCreateNestedManyWithoutCompanyInput
    categories?: categoriesCreateNestedManyWithoutCompanyInput
    price_tables?: price_tablesCreateNestedManyWithoutCompanyInput
  }

  export type companiesUncheckedCreateInput = {
    id?: number
    name: string
    reated_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutCompanyInput
    brands?: brandsUncheckedCreateNestedManyWithoutCompanyInput
    categories?: categoriesUncheckedCreateNestedManyWithoutCompanyInput
    price_tables?: price_tablesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    reated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateManyWithoutCompanyNestedInput
    brands?: brandsUpdateManyWithoutCompanyNestedInput
    categories?: categoriesUpdateManyWithoutCompanyNestedInput
    price_tables?: price_tablesUpdateManyWithoutCompanyNestedInput
  }

  export type companiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutCompanyNestedInput
    brands?: brandsUncheckedUpdateManyWithoutCompanyNestedInput
    categories?: categoriesUncheckedUpdateManyWithoutCompanyNestedInput
    price_tables?: price_tablesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companiesCreateManyInput = {
    id?: number
    name: string
    reated_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type companiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    reated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type companiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type skusCreateInput = {
    size: string
    stock: number
    price: Decimal | DecimalJsLike | number | string
    code: string
    min_quantity?: number | null
    multiple_quantity: number
    erpId?: string | null
    cest?: string | null
    height?: number | null
    length?: number | null
    ncm?: string | null
    weight?: number | null
    width?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    price_tables_skus?: price_tables_skusCreateNestedManyWithoutSkusInput
    variants: variantsCreateNestedOneWithoutSkusInput
  }

  export type skusUncheckedCreateInput = {
    id?: number
    size: string
    stock: number
    price: Decimal | DecimalJsLike | number | string
    code: string
    min_quantity?: number | null
    multiple_quantity: number
    erpId?: string | null
    variant_id: number
    cest?: string | null
    height?: number | null
    length?: number | null
    ncm?: string | null
    weight?: number | null
    width?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    price_tables_skus?: price_tables_skusUncheckedCreateNestedManyWithoutSkusInput
  }

  export type skusUpdateInput = {
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    code?: StringFieldUpdateOperationsInput | string
    min_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    multiple_quantity?: IntFieldUpdateOperationsInput | number
    erpId?: NullableStringFieldUpdateOperationsInput | string | null
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    ncm?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_tables_skus?: price_tables_skusUpdateManyWithoutSkusNestedInput
    variants?: variantsUpdateOneRequiredWithoutSkusNestedInput
  }

  export type skusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    code?: StringFieldUpdateOperationsInput | string
    min_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    multiple_quantity?: IntFieldUpdateOperationsInput | number
    erpId?: NullableStringFieldUpdateOperationsInput | string | null
    variant_id?: IntFieldUpdateOperationsInput | number
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    ncm?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_tables_skus?: price_tables_skusUncheckedUpdateManyWithoutSkusNestedInput
  }

  export type skusCreateManyInput = {
    id?: number
    size: string
    stock: number
    price: Decimal | DecimalJsLike | number | string
    code: string
    min_quantity?: number | null
    multiple_quantity: number
    erpId?: string | null
    variant_id: number
    cest?: string | null
    height?: number | null
    length?: number | null
    ncm?: string | null
    weight?: number | null
    width?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type skusUpdateManyMutationInput = {
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    code?: StringFieldUpdateOperationsInput | string
    min_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    multiple_quantity?: IntFieldUpdateOperationsInput | number
    erpId?: NullableStringFieldUpdateOperationsInput | string | null
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    ncm?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type skusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    code?: StringFieldUpdateOperationsInput | string
    min_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    multiple_quantity?: IntFieldUpdateOperationsInput | number
    erpId?: NullableStringFieldUpdateOperationsInput | string | null
    variant_id?: IntFieldUpdateOperationsInput | number
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    ncm?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subcategoriesCreateInput = {
    name: string
    created_at?: Date | string | null
    products?: productsCreateNestedManyWithoutSubcategoriesInput
    categories: categoriesCreateNestedOneWithoutSubcategoriesInput
  }

  export type subcategoriesUncheckedCreateInput = {
    id?: number
    name: string
    category_id: number
    created_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutSubcategoriesInput
  }

  export type subcategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateManyWithoutSubcategoriesNestedInput
    categories?: categoriesUpdateOneRequiredWithoutSubcategoriesNestedInput
  }

  export type subcategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutSubcategoriesNestedInput
  }

  export type subcategoriesCreateManyInput = {
    id?: number
    name: string
    category_id: number
    created_at?: Date | string | null
  }

  export type subcategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subcategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type variantsCreateInput = {
    name: string
    hex_code?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    skus?: skusCreateNestedManyWithoutVariantsInput
    products: productsCreateNestedOneWithoutVariantsInput
  }

  export type variantsUncheckedCreateInput = {
    id?: number
    name: string
    hex_code?: string | null
    product_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    skus?: skusUncheckedCreateNestedManyWithoutVariantsInput
  }

  export type variantsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    hex_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skus?: skusUpdateManyWithoutVariantsNestedInput
    products?: productsUpdateOneRequiredWithoutVariantsNestedInput
  }

  export type variantsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hex_code?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skus?: skusUncheckedUpdateManyWithoutVariantsNestedInput
  }

  export type variantsCreateManyInput = {
    id?: number
    name: string
    hex_code?: string | null
    product_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type variantsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    hex_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type variantsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hex_code?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CompaniesScalarRelationFilter = {
    is?: companiesWhereInput
    isNot?: companiesWhereInput
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type brandsOrderByRelevanceInput = {
    fields: brandsOrderByRelevanceFieldEnum | brandsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type brandsNameCompany_IdCompoundUniqueInput = {
    name: string
    company_Id: number
  }

  export type brandsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo_img?: SortOrder
    min_value?: SortOrder
    min_installments_value?: SortOrder
    visible?: SortOrder
    sku_order?: SortOrder
    address_id?: SortOrder
    business_id?: SortOrder
    company_Id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type brandsAvgOrderByAggregateInput = {
    id?: SortOrder
    min_value?: SortOrder
    min_installments_value?: SortOrder
    address_id?: SortOrder
    business_id?: SortOrder
    company_Id?: SortOrder
  }

  export type brandsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo_img?: SortOrder
    min_value?: SortOrder
    min_installments_value?: SortOrder
    visible?: SortOrder
    sku_order?: SortOrder
    address_id?: SortOrder
    business_id?: SortOrder
    company_Id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type brandsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo_img?: SortOrder
    min_value?: SortOrder
    min_installments_value?: SortOrder
    visible?: SortOrder
    sku_order?: SortOrder
    address_id?: SortOrder
    business_id?: SortOrder
    company_Id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type brandsSumOrderByAggregateInput = {
    id?: SortOrder
    min_value?: SortOrder
    min_installments_value?: SortOrder
    address_id?: SortOrder
    business_id?: SortOrder
    company_Id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SubcategoriesListRelationFilter = {
    every?: subcategoriesWhereInput
    some?: subcategoriesWhereInput
    none?: subcategoriesWhereInput
  }

  export type subcategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesOrderByRelevanceInput = {
    fields: categoriesOrderByRelevanceFieldEnum | categoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoriesNameCompany_IdCompoundUniqueInput = {
    name: string
    company_Id: number
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    company_Id?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    company_Id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    company_Id?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    company_Id?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
    company_Id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Price_tables_skusListRelationFilter = {
    every?: price_tables_skusWhereInput
    some?: price_tables_skusWhereInput
    none?: price_tables_skusWhereInput
  }

  export type price_tables_skusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type price_tablesOrderByRelevanceInput = {
    fields: price_tablesOrderByRelevanceFieldEnum | price_tablesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type price_tablesCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    price_adjustment?: SortOrder
    minimum_value?: SortOrder
    visible?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    company_Id?: SortOrder
  }

  export type price_tablesAvgOrderByAggregateInput = {
    id?: SortOrder
    price_adjustment?: SortOrder
    minimum_value?: SortOrder
    company_Id?: SortOrder
  }

  export type price_tablesMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    price_adjustment?: SortOrder
    minimum_value?: SortOrder
    visible?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    company_Id?: SortOrder
  }

  export type price_tablesMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    price_adjustment?: SortOrder
    minimum_value?: SortOrder
    visible?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    company_Id?: SortOrder
  }

  export type price_tablesSumOrderByAggregateInput = {
    id?: SortOrder
    price_adjustment?: SortOrder
    minimum_value?: SortOrder
    company_Id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Price_tablesScalarRelationFilter = {
    is?: price_tablesWhereInput
    isNot?: price_tablesWhereInput
  }

  export type SkusScalarRelationFilter = {
    is?: skusWhereInput
    isNot?: skusWhereInput
  }

  export type price_tables_skusSku_idPrice_table_idCompoundUniqueInput = {
    sku_id: number
    price_table_id: number
  }

  export type price_tables_skusCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sku_id?: SortOrder
    price_table_id?: SortOrder
  }

  export type price_tables_skusAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    sku_id?: SortOrder
    price_table_id?: SortOrder
  }

  export type price_tables_skusMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sku_id?: SortOrder
    price_table_id?: SortOrder
  }

  export type price_tables_skusMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sku_id?: SortOrder
    price_table_id?: SortOrder
  }

  export type price_tables_skusSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    sku_id?: SortOrder
    price_table_id?: SortOrder
  }

  export type Enumproducts_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.products_type | Enumproducts_typeFieldRefInput<$PrismaModel>
    in?: $Enums.products_type[]
    notIn?: $Enums.products_type[]
    not?: NestedEnumproducts_typeFilter<$PrismaModel> | $Enums.products_type
  }

  export type Enumproducts_genderFilter<$PrismaModel = never> = {
    equals?: $Enums.products_gender | Enumproducts_genderFieldRefInput<$PrismaModel>
    in?: $Enums.products_gender[]
    notIn?: $Enums.products_gender[]
    not?: NestedEnumproducts_genderFilter<$PrismaModel> | $Enums.products_gender
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BrandsScalarRelationFilter = {
    is?: brandsWhereInput
    isNot?: brandsWhereInput
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type SubcategoriesNullableScalarRelationFilter = {
    is?: subcategoriesWhereInput | null
    isNot?: subcategoriesWhereInput | null
  }

  export type VariantsListRelationFilter = {
    every?: variantsWhereInput
    some?: variantsWhereInput
    none?: variantsWhereInput
  }

  export type variantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsOrderByRelevanceInput = {
    fields: productsOrderByRelevanceFieldEnum | productsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productsErp_idCompany_IdCompoundUniqueInput = {
    erp_id: string
    company_Id: number
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    prompt_delivery?: SortOrder
    description?: SortOrder
    company_Id?: SortOrder
    erp_id?: SortOrder
    brand_id?: SortOrder
    deadline_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    category_id?: SortOrder
    subcategory_id?: SortOrder
    category_order?: SortOrder
    composition_data?: SortOrder
    technical_information?: SortOrder
    open_grid?: SortOrder
    ipi?: SortOrder
    is_discontinued?: SortOrder
    is_launch?: SortOrder
    is_visible?: SortOrder
    colection?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    company_Id?: SortOrder
    brand_id?: SortOrder
    deadline_id?: SortOrder
    category_id?: SortOrder
    subcategory_id?: SortOrder
    category_order?: SortOrder
    ipi?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    prompt_delivery?: SortOrder
    description?: SortOrder
    company_Id?: SortOrder
    erp_id?: SortOrder
    brand_id?: SortOrder
    deadline_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    category_id?: SortOrder
    subcategory_id?: SortOrder
    category_order?: SortOrder
    composition_data?: SortOrder
    technical_information?: SortOrder
    open_grid?: SortOrder
    ipi?: SortOrder
    is_discontinued?: SortOrder
    is_launch?: SortOrder
    is_visible?: SortOrder
    colection?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    prompt_delivery?: SortOrder
    description?: SortOrder
    company_Id?: SortOrder
    erp_id?: SortOrder
    brand_id?: SortOrder
    deadline_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    category_id?: SortOrder
    subcategory_id?: SortOrder
    category_order?: SortOrder
    composition_data?: SortOrder
    technical_information?: SortOrder
    open_grid?: SortOrder
    ipi?: SortOrder
    is_discontinued?: SortOrder
    is_launch?: SortOrder
    is_visible?: SortOrder
    colection?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    company_Id?: SortOrder
    brand_id?: SortOrder
    deadline_id?: SortOrder
    category_id?: SortOrder
    subcategory_id?: SortOrder
    category_order?: SortOrder
    ipi?: SortOrder
  }

  export type Enumproducts_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.products_type | Enumproducts_typeFieldRefInput<$PrismaModel>
    in?: $Enums.products_type[]
    notIn?: $Enums.products_type[]
    not?: NestedEnumproducts_typeWithAggregatesFilter<$PrismaModel> | $Enums.products_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproducts_typeFilter<$PrismaModel>
    _max?: NestedEnumproducts_typeFilter<$PrismaModel>
  }

  export type Enumproducts_genderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.products_gender | Enumproducts_genderFieldRefInput<$PrismaModel>
    in?: $Enums.products_gender[]
    notIn?: $Enums.products_gender[]
    not?: NestedEnumproducts_genderWithAggregatesFilter<$PrismaModel> | $Enums.products_gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproducts_genderFilter<$PrismaModel>
    _max?: NestedEnumproducts_genderFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BrandsListRelationFilter = {
    every?: brandsWhereInput
    some?: brandsWhereInput
    none?: brandsWhereInput
  }

  export type CategoriesListRelationFilter = {
    every?: categoriesWhereInput
    some?: categoriesWhereInput
    none?: categoriesWhereInput
  }

  export type Price_tablesListRelationFilter = {
    every?: price_tablesWhereInput
    some?: price_tablesWhereInput
    none?: price_tablesWhereInput
  }

  export type brandsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type price_tablesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companiesOrderByRelevanceInput = {
    fields: companiesOrderByRelevanceFieldEnum | companiesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type companiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    reated_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type companiesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type companiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    reated_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type companiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    reated_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type companiesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type VariantsScalarRelationFilter = {
    is?: variantsWhereInput
    isNot?: variantsWhereInput
  }

  export type skusOrderByRelevanceInput = {
    fields: skusOrderByRelevanceFieldEnum | skusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type skusCountOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    code?: SortOrder
    min_quantity?: SortOrder
    multiple_quantity?: SortOrder
    erpId?: SortOrder
    variant_id?: SortOrder
    cest?: SortOrder
    height?: SortOrder
    length?: SortOrder
    ncm?: SortOrder
    weight?: SortOrder
    width?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type skusAvgOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    min_quantity?: SortOrder
    multiple_quantity?: SortOrder
    variant_id?: SortOrder
    height?: SortOrder
    length?: SortOrder
    weight?: SortOrder
    width?: SortOrder
  }

  export type skusMaxOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    code?: SortOrder
    min_quantity?: SortOrder
    multiple_quantity?: SortOrder
    erpId?: SortOrder
    variant_id?: SortOrder
    cest?: SortOrder
    height?: SortOrder
    length?: SortOrder
    ncm?: SortOrder
    weight?: SortOrder
    width?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type skusMinOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    code?: SortOrder
    min_quantity?: SortOrder
    multiple_quantity?: SortOrder
    erpId?: SortOrder
    variant_id?: SortOrder
    cest?: SortOrder
    height?: SortOrder
    length?: SortOrder
    ncm?: SortOrder
    weight?: SortOrder
    width?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type skusSumOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    min_quantity?: SortOrder
    multiple_quantity?: SortOrder
    variant_id?: SortOrder
    height?: SortOrder
    length?: SortOrder
    weight?: SortOrder
    width?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type subcategoriesOrderByRelevanceInput = {
    fields: subcategoriesOrderByRelevanceFieldEnum | subcategoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type subcategoriesNameCategory_idCompoundUniqueInput = {
    name: string
    category_id: number
  }

  export type subcategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
  }

  export type subcategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type subcategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
  }

  export type subcategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
  }

  export type subcategoriesSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
  }

  export type SkusListRelationFilter = {
    every?: skusWhereInput
    some?: skusWhereInput
    none?: skusWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type skusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type variantsOrderByRelevanceInput = {
    fields: variantsOrderByRelevanceFieldEnum | variantsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type variantsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hex_code?: SortOrder
    product_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type variantsAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
  }

  export type variantsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hex_code?: SortOrder
    product_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type variantsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hex_code?: SortOrder
    product_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type variantsSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
  }

  export type companiesCreateNestedOneWithoutBrandsInput = {
    create?: XOR<companiesCreateWithoutBrandsInput, companiesUncheckedCreateWithoutBrandsInput>
    connectOrCreate?: companiesCreateOrConnectWithoutBrandsInput
    connect?: companiesWhereUniqueInput
  }

  export type productsCreateNestedManyWithoutBrandsInput = {
    create?: XOR<productsCreateWithoutBrandsInput, productsUncheckedCreateWithoutBrandsInput> | productsCreateWithoutBrandsInput[] | productsUncheckedCreateWithoutBrandsInput[]
    connectOrCreate?: productsCreateOrConnectWithoutBrandsInput | productsCreateOrConnectWithoutBrandsInput[]
    createMany?: productsCreateManyBrandsInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutBrandsInput = {
    create?: XOR<productsCreateWithoutBrandsInput, productsUncheckedCreateWithoutBrandsInput> | productsCreateWithoutBrandsInput[] | productsUncheckedCreateWithoutBrandsInput[]
    connectOrCreate?: productsCreateOrConnectWithoutBrandsInput | productsCreateOrConnectWithoutBrandsInput[]
    createMany?: productsCreateManyBrandsInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type companiesUpdateOneRequiredWithoutBrandsNestedInput = {
    create?: XOR<companiesCreateWithoutBrandsInput, companiesUncheckedCreateWithoutBrandsInput>
    connectOrCreate?: companiesCreateOrConnectWithoutBrandsInput
    upsert?: companiesUpsertWithoutBrandsInput
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutBrandsInput, companiesUpdateWithoutBrandsInput>, companiesUncheckedUpdateWithoutBrandsInput>
  }

  export type productsUpdateManyWithoutBrandsNestedInput = {
    create?: XOR<productsCreateWithoutBrandsInput, productsUncheckedCreateWithoutBrandsInput> | productsCreateWithoutBrandsInput[] | productsUncheckedCreateWithoutBrandsInput[]
    connectOrCreate?: productsCreateOrConnectWithoutBrandsInput | productsCreateOrConnectWithoutBrandsInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutBrandsInput | productsUpsertWithWhereUniqueWithoutBrandsInput[]
    createMany?: productsCreateManyBrandsInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutBrandsInput | productsUpdateWithWhereUniqueWithoutBrandsInput[]
    updateMany?: productsUpdateManyWithWhereWithoutBrandsInput | productsUpdateManyWithWhereWithoutBrandsInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutBrandsNestedInput = {
    create?: XOR<productsCreateWithoutBrandsInput, productsUncheckedCreateWithoutBrandsInput> | productsCreateWithoutBrandsInput[] | productsUncheckedCreateWithoutBrandsInput[]
    connectOrCreate?: productsCreateOrConnectWithoutBrandsInput | productsCreateOrConnectWithoutBrandsInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutBrandsInput | productsUpsertWithWhereUniqueWithoutBrandsInput[]
    createMany?: productsCreateManyBrandsInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutBrandsInput | productsUpdateWithWhereUniqueWithoutBrandsInput[]
    updateMany?: productsUpdateManyWithWhereWithoutBrandsInput | productsUpdateManyWithWhereWithoutBrandsInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type companiesCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<companiesCreateWithoutCategoriesInput, companiesUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: companiesCreateOrConnectWithoutCategoriesInput
    connect?: companiesWhereUniqueInput
  }

  export type productsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type subcategoriesCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<subcategoriesCreateWithoutCategoriesInput, subcategoriesUncheckedCreateWithoutCategoriesInput> | subcategoriesCreateWithoutCategoriesInput[] | subcategoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: subcategoriesCreateOrConnectWithoutCategoriesInput | subcategoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: subcategoriesCreateManyCategoriesInputEnvelope
    connect?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type subcategoriesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<subcategoriesCreateWithoutCategoriesInput, subcategoriesUncheckedCreateWithoutCategoriesInput> | subcategoriesCreateWithoutCategoriesInput[] | subcategoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: subcategoriesCreateOrConnectWithoutCategoriesInput | subcategoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: subcategoriesCreateManyCategoriesInputEnvelope
    connect?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
  }

  export type companiesUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<companiesCreateWithoutCategoriesInput, companiesUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: companiesCreateOrConnectWithoutCategoriesInput
    upsert?: companiesUpsertWithoutCategoriesInput
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutCategoriesInput, companiesUpdateWithoutCategoriesInput>, companiesUncheckedUpdateWithoutCategoriesInput>
  }

  export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type subcategoriesUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<subcategoriesCreateWithoutCategoriesInput, subcategoriesUncheckedCreateWithoutCategoriesInput> | subcategoriesCreateWithoutCategoriesInput[] | subcategoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: subcategoriesCreateOrConnectWithoutCategoriesInput | subcategoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: subcategoriesUpsertWithWhereUniqueWithoutCategoriesInput | subcategoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: subcategoriesCreateManyCategoriesInputEnvelope
    set?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
    disconnect?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
    delete?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
    connect?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
    update?: subcategoriesUpdateWithWhereUniqueWithoutCategoriesInput | subcategoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: subcategoriesUpdateManyWithWhereWithoutCategoriesInput | subcategoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: subcategoriesScalarWhereInput | subcategoriesScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type subcategoriesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<subcategoriesCreateWithoutCategoriesInput, subcategoriesUncheckedCreateWithoutCategoriesInput> | subcategoriesCreateWithoutCategoriesInput[] | subcategoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: subcategoriesCreateOrConnectWithoutCategoriesInput | subcategoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: subcategoriesUpsertWithWhereUniqueWithoutCategoriesInput | subcategoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: subcategoriesCreateManyCategoriesInputEnvelope
    set?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
    disconnect?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
    delete?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
    connect?: subcategoriesWhereUniqueInput | subcategoriesWhereUniqueInput[]
    update?: subcategoriesUpdateWithWhereUniqueWithoutCategoriesInput | subcategoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: subcategoriesUpdateManyWithWhereWithoutCategoriesInput | subcategoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: subcategoriesScalarWhereInput | subcategoriesScalarWhereInput[]
  }

  export type companiesCreateNestedOneWithoutPrice_tablesInput = {
    create?: XOR<companiesCreateWithoutPrice_tablesInput, companiesUncheckedCreateWithoutPrice_tablesInput>
    connectOrCreate?: companiesCreateOrConnectWithoutPrice_tablesInput
    connect?: companiesWhereUniqueInput
  }

  export type price_tables_skusCreateNestedManyWithoutPrice_tablesInput = {
    create?: XOR<price_tables_skusCreateWithoutPrice_tablesInput, price_tables_skusUncheckedCreateWithoutPrice_tablesInput> | price_tables_skusCreateWithoutPrice_tablesInput[] | price_tables_skusUncheckedCreateWithoutPrice_tablesInput[]
    connectOrCreate?: price_tables_skusCreateOrConnectWithoutPrice_tablesInput | price_tables_skusCreateOrConnectWithoutPrice_tablesInput[]
    createMany?: price_tables_skusCreateManyPrice_tablesInputEnvelope
    connect?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
  }

  export type price_tables_skusUncheckedCreateNestedManyWithoutPrice_tablesInput = {
    create?: XOR<price_tables_skusCreateWithoutPrice_tablesInput, price_tables_skusUncheckedCreateWithoutPrice_tablesInput> | price_tables_skusCreateWithoutPrice_tablesInput[] | price_tables_skusUncheckedCreateWithoutPrice_tablesInput[]
    connectOrCreate?: price_tables_skusCreateOrConnectWithoutPrice_tablesInput | price_tables_skusCreateOrConnectWithoutPrice_tablesInput[]
    createMany?: price_tables_skusCreateManyPrice_tablesInputEnvelope
    connect?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type companiesUpdateOneRequiredWithoutPrice_tablesNestedInput = {
    create?: XOR<companiesCreateWithoutPrice_tablesInput, companiesUncheckedCreateWithoutPrice_tablesInput>
    connectOrCreate?: companiesCreateOrConnectWithoutPrice_tablesInput
    upsert?: companiesUpsertWithoutPrice_tablesInput
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutPrice_tablesInput, companiesUpdateWithoutPrice_tablesInput>, companiesUncheckedUpdateWithoutPrice_tablesInput>
  }

  export type price_tables_skusUpdateManyWithoutPrice_tablesNestedInput = {
    create?: XOR<price_tables_skusCreateWithoutPrice_tablesInput, price_tables_skusUncheckedCreateWithoutPrice_tablesInput> | price_tables_skusCreateWithoutPrice_tablesInput[] | price_tables_skusUncheckedCreateWithoutPrice_tablesInput[]
    connectOrCreate?: price_tables_skusCreateOrConnectWithoutPrice_tablesInput | price_tables_skusCreateOrConnectWithoutPrice_tablesInput[]
    upsert?: price_tables_skusUpsertWithWhereUniqueWithoutPrice_tablesInput | price_tables_skusUpsertWithWhereUniqueWithoutPrice_tablesInput[]
    createMany?: price_tables_skusCreateManyPrice_tablesInputEnvelope
    set?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
    disconnect?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
    delete?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
    connect?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
    update?: price_tables_skusUpdateWithWhereUniqueWithoutPrice_tablesInput | price_tables_skusUpdateWithWhereUniqueWithoutPrice_tablesInput[]
    updateMany?: price_tables_skusUpdateManyWithWhereWithoutPrice_tablesInput | price_tables_skusUpdateManyWithWhereWithoutPrice_tablesInput[]
    deleteMany?: price_tables_skusScalarWhereInput | price_tables_skusScalarWhereInput[]
  }

  export type price_tables_skusUncheckedUpdateManyWithoutPrice_tablesNestedInput = {
    create?: XOR<price_tables_skusCreateWithoutPrice_tablesInput, price_tables_skusUncheckedCreateWithoutPrice_tablesInput> | price_tables_skusCreateWithoutPrice_tablesInput[] | price_tables_skusUncheckedCreateWithoutPrice_tablesInput[]
    connectOrCreate?: price_tables_skusCreateOrConnectWithoutPrice_tablesInput | price_tables_skusCreateOrConnectWithoutPrice_tablesInput[]
    upsert?: price_tables_skusUpsertWithWhereUniqueWithoutPrice_tablesInput | price_tables_skusUpsertWithWhereUniqueWithoutPrice_tablesInput[]
    createMany?: price_tables_skusCreateManyPrice_tablesInputEnvelope
    set?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
    disconnect?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
    delete?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
    connect?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
    update?: price_tables_skusUpdateWithWhereUniqueWithoutPrice_tablesInput | price_tables_skusUpdateWithWhereUniqueWithoutPrice_tablesInput[]
    updateMany?: price_tables_skusUpdateManyWithWhereWithoutPrice_tablesInput | price_tables_skusUpdateManyWithWhereWithoutPrice_tablesInput[]
    deleteMany?: price_tables_skusScalarWhereInput | price_tables_skusScalarWhereInput[]
  }

  export type price_tablesCreateNestedOneWithoutPrice_tables_skusInput = {
    create?: XOR<price_tablesCreateWithoutPrice_tables_skusInput, price_tablesUncheckedCreateWithoutPrice_tables_skusInput>
    connectOrCreate?: price_tablesCreateOrConnectWithoutPrice_tables_skusInput
    connect?: price_tablesWhereUniqueInput
  }

  export type skusCreateNestedOneWithoutPrice_tables_skusInput = {
    create?: XOR<skusCreateWithoutPrice_tables_skusInput, skusUncheckedCreateWithoutPrice_tables_skusInput>
    connectOrCreate?: skusCreateOrConnectWithoutPrice_tables_skusInput
    connect?: skusWhereUniqueInput
  }

  export type price_tablesUpdateOneRequiredWithoutPrice_tables_skusNestedInput = {
    create?: XOR<price_tablesCreateWithoutPrice_tables_skusInput, price_tablesUncheckedCreateWithoutPrice_tables_skusInput>
    connectOrCreate?: price_tablesCreateOrConnectWithoutPrice_tables_skusInput
    upsert?: price_tablesUpsertWithoutPrice_tables_skusInput
    connect?: price_tablesWhereUniqueInput
    update?: XOR<XOR<price_tablesUpdateToOneWithWhereWithoutPrice_tables_skusInput, price_tablesUpdateWithoutPrice_tables_skusInput>, price_tablesUncheckedUpdateWithoutPrice_tables_skusInput>
  }

  export type skusUpdateOneRequiredWithoutPrice_tables_skusNestedInput = {
    create?: XOR<skusCreateWithoutPrice_tables_skusInput, skusUncheckedCreateWithoutPrice_tables_skusInput>
    connectOrCreate?: skusCreateOrConnectWithoutPrice_tables_skusInput
    upsert?: skusUpsertWithoutPrice_tables_skusInput
    connect?: skusWhereUniqueInput
    update?: XOR<XOR<skusUpdateToOneWithWhereWithoutPrice_tables_skusInput, skusUpdateWithoutPrice_tables_skusInput>, skusUncheckedUpdateWithoutPrice_tables_skusInput>
  }

  export type companiesCreateNestedOneWithoutProductsInput = {
    create?: XOR<companiesCreateWithoutProductsInput, companiesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: companiesCreateOrConnectWithoutProductsInput
    connect?: companiesWhereUniqueInput
  }

  export type brandsCreateNestedOneWithoutProductsInput = {
    create?: XOR<brandsCreateWithoutProductsInput, brandsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: brandsCreateOrConnectWithoutProductsInput
    connect?: brandsWhereUniqueInput
  }

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    connect?: categoriesWhereUniqueInput
  }

  export type subcategoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<subcategoriesCreateWithoutProductsInput, subcategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: subcategoriesCreateOrConnectWithoutProductsInput
    connect?: subcategoriesWhereUniqueInput
  }

  export type variantsCreateNestedManyWithoutProductsInput = {
    create?: XOR<variantsCreateWithoutProductsInput, variantsUncheckedCreateWithoutProductsInput> | variantsCreateWithoutProductsInput[] | variantsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: variantsCreateOrConnectWithoutProductsInput | variantsCreateOrConnectWithoutProductsInput[]
    createMany?: variantsCreateManyProductsInputEnvelope
    connect?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
  }

  export type variantsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<variantsCreateWithoutProductsInput, variantsUncheckedCreateWithoutProductsInput> | variantsCreateWithoutProductsInput[] | variantsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: variantsCreateOrConnectWithoutProductsInput | variantsCreateOrConnectWithoutProductsInput[]
    createMany?: variantsCreateManyProductsInputEnvelope
    connect?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
  }

  export type Enumproducts_typeFieldUpdateOperationsInput = {
    set?: $Enums.products_type
  }

  export type Enumproducts_genderFieldUpdateOperationsInput = {
    set?: $Enums.products_gender
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type companiesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<companiesCreateWithoutProductsInput, companiesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: companiesCreateOrConnectWithoutProductsInput
    upsert?: companiesUpsertWithoutProductsInput
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutProductsInput, companiesUpdateWithoutProductsInput>, companiesUncheckedUpdateWithoutProductsInput>
  }

  export type brandsUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<brandsCreateWithoutProductsInput, brandsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: brandsCreateOrConnectWithoutProductsInput
    upsert?: brandsUpsertWithoutProductsInput
    connect?: brandsWhereUniqueInput
    update?: XOR<XOR<brandsUpdateToOneWithWhereWithoutProductsInput, brandsUpdateWithoutProductsInput>, brandsUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    upsert?: categoriesUpsertWithoutProductsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProductsInput, categoriesUpdateWithoutProductsInput>, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type subcategoriesUpdateOneWithoutProductsNestedInput = {
    create?: XOR<subcategoriesCreateWithoutProductsInput, subcategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: subcategoriesCreateOrConnectWithoutProductsInput
    upsert?: subcategoriesUpsertWithoutProductsInput
    disconnect?: subcategoriesWhereInput | boolean
    delete?: subcategoriesWhereInput | boolean
    connect?: subcategoriesWhereUniqueInput
    update?: XOR<XOR<subcategoriesUpdateToOneWithWhereWithoutProductsInput, subcategoriesUpdateWithoutProductsInput>, subcategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type variantsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<variantsCreateWithoutProductsInput, variantsUncheckedCreateWithoutProductsInput> | variantsCreateWithoutProductsInput[] | variantsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: variantsCreateOrConnectWithoutProductsInput | variantsCreateOrConnectWithoutProductsInput[]
    upsert?: variantsUpsertWithWhereUniqueWithoutProductsInput | variantsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: variantsCreateManyProductsInputEnvelope
    set?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
    disconnect?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
    delete?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
    connect?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
    update?: variantsUpdateWithWhereUniqueWithoutProductsInput | variantsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: variantsUpdateManyWithWhereWithoutProductsInput | variantsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: variantsScalarWhereInput | variantsScalarWhereInput[]
  }

  export type variantsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<variantsCreateWithoutProductsInput, variantsUncheckedCreateWithoutProductsInput> | variantsCreateWithoutProductsInput[] | variantsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: variantsCreateOrConnectWithoutProductsInput | variantsCreateOrConnectWithoutProductsInput[]
    upsert?: variantsUpsertWithWhereUniqueWithoutProductsInput | variantsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: variantsCreateManyProductsInputEnvelope
    set?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
    disconnect?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
    delete?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
    connect?: variantsWhereUniqueInput | variantsWhereUniqueInput[]
    update?: variantsUpdateWithWhereUniqueWithoutProductsInput | variantsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: variantsUpdateManyWithWhereWithoutProductsInput | variantsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: variantsScalarWhereInput | variantsScalarWhereInput[]
  }

  export type productsCreateNestedManyWithoutCompanyInput = {
    create?: XOR<productsCreateWithoutCompanyInput, productsUncheckedCreateWithoutCompanyInput> | productsCreateWithoutCompanyInput[] | productsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCompanyInput | productsCreateOrConnectWithoutCompanyInput[]
    createMany?: productsCreateManyCompanyInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type brandsCreateNestedManyWithoutCompanyInput = {
    create?: XOR<brandsCreateWithoutCompanyInput, brandsUncheckedCreateWithoutCompanyInput> | brandsCreateWithoutCompanyInput[] | brandsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: brandsCreateOrConnectWithoutCompanyInput | brandsCreateOrConnectWithoutCompanyInput[]
    createMany?: brandsCreateManyCompanyInputEnvelope
    connect?: brandsWhereUniqueInput | brandsWhereUniqueInput[]
  }

  export type categoriesCreateNestedManyWithoutCompanyInput = {
    create?: XOR<categoriesCreateWithoutCompanyInput, categoriesUncheckedCreateWithoutCompanyInput> | categoriesCreateWithoutCompanyInput[] | categoriesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutCompanyInput | categoriesCreateOrConnectWithoutCompanyInput[]
    createMany?: categoriesCreateManyCompanyInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type price_tablesCreateNestedManyWithoutCompanyInput = {
    create?: XOR<price_tablesCreateWithoutCompanyInput, price_tablesUncheckedCreateWithoutCompanyInput> | price_tablesCreateWithoutCompanyInput[] | price_tablesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: price_tablesCreateOrConnectWithoutCompanyInput | price_tablesCreateOrConnectWithoutCompanyInput[]
    createMany?: price_tablesCreateManyCompanyInputEnvelope
    connect?: price_tablesWhereUniqueInput | price_tablesWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<productsCreateWithoutCompanyInput, productsUncheckedCreateWithoutCompanyInput> | productsCreateWithoutCompanyInput[] | productsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCompanyInput | productsCreateOrConnectWithoutCompanyInput[]
    createMany?: productsCreateManyCompanyInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type brandsUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<brandsCreateWithoutCompanyInput, brandsUncheckedCreateWithoutCompanyInput> | brandsCreateWithoutCompanyInput[] | brandsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: brandsCreateOrConnectWithoutCompanyInput | brandsCreateOrConnectWithoutCompanyInput[]
    createMany?: brandsCreateManyCompanyInputEnvelope
    connect?: brandsWhereUniqueInput | brandsWhereUniqueInput[]
  }

  export type categoriesUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<categoriesCreateWithoutCompanyInput, categoriesUncheckedCreateWithoutCompanyInput> | categoriesCreateWithoutCompanyInput[] | categoriesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutCompanyInput | categoriesCreateOrConnectWithoutCompanyInput[]
    createMany?: categoriesCreateManyCompanyInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type price_tablesUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<price_tablesCreateWithoutCompanyInput, price_tablesUncheckedCreateWithoutCompanyInput> | price_tablesCreateWithoutCompanyInput[] | price_tablesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: price_tablesCreateOrConnectWithoutCompanyInput | price_tablesCreateOrConnectWithoutCompanyInput[]
    createMany?: price_tablesCreateManyCompanyInputEnvelope
    connect?: price_tablesWhereUniqueInput | price_tablesWhereUniqueInput[]
  }

  export type productsUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<productsCreateWithoutCompanyInput, productsUncheckedCreateWithoutCompanyInput> | productsCreateWithoutCompanyInput[] | productsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCompanyInput | productsCreateOrConnectWithoutCompanyInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCompanyInput | productsUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: productsCreateManyCompanyInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCompanyInput | productsUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCompanyInput | productsUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type brandsUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<brandsCreateWithoutCompanyInput, brandsUncheckedCreateWithoutCompanyInput> | brandsCreateWithoutCompanyInput[] | brandsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: brandsCreateOrConnectWithoutCompanyInput | brandsCreateOrConnectWithoutCompanyInput[]
    upsert?: brandsUpsertWithWhereUniqueWithoutCompanyInput | brandsUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: brandsCreateManyCompanyInputEnvelope
    set?: brandsWhereUniqueInput | brandsWhereUniqueInput[]
    disconnect?: brandsWhereUniqueInput | brandsWhereUniqueInput[]
    delete?: brandsWhereUniqueInput | brandsWhereUniqueInput[]
    connect?: brandsWhereUniqueInput | brandsWhereUniqueInput[]
    update?: brandsUpdateWithWhereUniqueWithoutCompanyInput | brandsUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: brandsUpdateManyWithWhereWithoutCompanyInput | brandsUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: brandsScalarWhereInput | brandsScalarWhereInput[]
  }

  export type categoriesUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<categoriesCreateWithoutCompanyInput, categoriesUncheckedCreateWithoutCompanyInput> | categoriesCreateWithoutCompanyInput[] | categoriesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutCompanyInput | categoriesCreateOrConnectWithoutCompanyInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutCompanyInput | categoriesUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: categoriesCreateManyCompanyInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutCompanyInput | categoriesUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutCompanyInput | categoriesUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type price_tablesUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<price_tablesCreateWithoutCompanyInput, price_tablesUncheckedCreateWithoutCompanyInput> | price_tablesCreateWithoutCompanyInput[] | price_tablesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: price_tablesCreateOrConnectWithoutCompanyInput | price_tablesCreateOrConnectWithoutCompanyInput[]
    upsert?: price_tablesUpsertWithWhereUniqueWithoutCompanyInput | price_tablesUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: price_tablesCreateManyCompanyInputEnvelope
    set?: price_tablesWhereUniqueInput | price_tablesWhereUniqueInput[]
    disconnect?: price_tablesWhereUniqueInput | price_tablesWhereUniqueInput[]
    delete?: price_tablesWhereUniqueInput | price_tablesWhereUniqueInput[]
    connect?: price_tablesWhereUniqueInput | price_tablesWhereUniqueInput[]
    update?: price_tablesUpdateWithWhereUniqueWithoutCompanyInput | price_tablesUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: price_tablesUpdateManyWithWhereWithoutCompanyInput | price_tablesUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: price_tablesScalarWhereInput | price_tablesScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<productsCreateWithoutCompanyInput, productsUncheckedCreateWithoutCompanyInput> | productsCreateWithoutCompanyInput[] | productsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCompanyInput | productsCreateOrConnectWithoutCompanyInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCompanyInput | productsUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: productsCreateManyCompanyInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCompanyInput | productsUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCompanyInput | productsUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type brandsUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<brandsCreateWithoutCompanyInput, brandsUncheckedCreateWithoutCompanyInput> | brandsCreateWithoutCompanyInput[] | brandsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: brandsCreateOrConnectWithoutCompanyInput | brandsCreateOrConnectWithoutCompanyInput[]
    upsert?: brandsUpsertWithWhereUniqueWithoutCompanyInput | brandsUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: brandsCreateManyCompanyInputEnvelope
    set?: brandsWhereUniqueInput | brandsWhereUniqueInput[]
    disconnect?: brandsWhereUniqueInput | brandsWhereUniqueInput[]
    delete?: brandsWhereUniqueInput | brandsWhereUniqueInput[]
    connect?: brandsWhereUniqueInput | brandsWhereUniqueInput[]
    update?: brandsUpdateWithWhereUniqueWithoutCompanyInput | brandsUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: brandsUpdateManyWithWhereWithoutCompanyInput | brandsUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: brandsScalarWhereInput | brandsScalarWhereInput[]
  }

  export type categoriesUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<categoriesCreateWithoutCompanyInput, categoriesUncheckedCreateWithoutCompanyInput> | categoriesCreateWithoutCompanyInput[] | categoriesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutCompanyInput | categoriesCreateOrConnectWithoutCompanyInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutCompanyInput | categoriesUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: categoriesCreateManyCompanyInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutCompanyInput | categoriesUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutCompanyInput | categoriesUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type price_tablesUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<price_tablesCreateWithoutCompanyInput, price_tablesUncheckedCreateWithoutCompanyInput> | price_tablesCreateWithoutCompanyInput[] | price_tablesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: price_tablesCreateOrConnectWithoutCompanyInput | price_tablesCreateOrConnectWithoutCompanyInput[]
    upsert?: price_tablesUpsertWithWhereUniqueWithoutCompanyInput | price_tablesUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: price_tablesCreateManyCompanyInputEnvelope
    set?: price_tablesWhereUniqueInput | price_tablesWhereUniqueInput[]
    disconnect?: price_tablesWhereUniqueInput | price_tablesWhereUniqueInput[]
    delete?: price_tablesWhereUniqueInput | price_tablesWhereUniqueInput[]
    connect?: price_tablesWhereUniqueInput | price_tablesWhereUniqueInput[]
    update?: price_tablesUpdateWithWhereUniqueWithoutCompanyInput | price_tablesUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: price_tablesUpdateManyWithWhereWithoutCompanyInput | price_tablesUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: price_tablesScalarWhereInput | price_tablesScalarWhereInput[]
  }

  export type price_tables_skusCreateNestedManyWithoutSkusInput = {
    create?: XOR<price_tables_skusCreateWithoutSkusInput, price_tables_skusUncheckedCreateWithoutSkusInput> | price_tables_skusCreateWithoutSkusInput[] | price_tables_skusUncheckedCreateWithoutSkusInput[]
    connectOrCreate?: price_tables_skusCreateOrConnectWithoutSkusInput | price_tables_skusCreateOrConnectWithoutSkusInput[]
    createMany?: price_tables_skusCreateManySkusInputEnvelope
    connect?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
  }

  export type variantsCreateNestedOneWithoutSkusInput = {
    create?: XOR<variantsCreateWithoutSkusInput, variantsUncheckedCreateWithoutSkusInput>
    connectOrCreate?: variantsCreateOrConnectWithoutSkusInput
    connect?: variantsWhereUniqueInput
  }

  export type price_tables_skusUncheckedCreateNestedManyWithoutSkusInput = {
    create?: XOR<price_tables_skusCreateWithoutSkusInput, price_tables_skusUncheckedCreateWithoutSkusInput> | price_tables_skusCreateWithoutSkusInput[] | price_tables_skusUncheckedCreateWithoutSkusInput[]
    connectOrCreate?: price_tables_skusCreateOrConnectWithoutSkusInput | price_tables_skusCreateOrConnectWithoutSkusInput[]
    createMany?: price_tables_skusCreateManySkusInputEnvelope
    connect?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type price_tables_skusUpdateManyWithoutSkusNestedInput = {
    create?: XOR<price_tables_skusCreateWithoutSkusInput, price_tables_skusUncheckedCreateWithoutSkusInput> | price_tables_skusCreateWithoutSkusInput[] | price_tables_skusUncheckedCreateWithoutSkusInput[]
    connectOrCreate?: price_tables_skusCreateOrConnectWithoutSkusInput | price_tables_skusCreateOrConnectWithoutSkusInput[]
    upsert?: price_tables_skusUpsertWithWhereUniqueWithoutSkusInput | price_tables_skusUpsertWithWhereUniqueWithoutSkusInput[]
    createMany?: price_tables_skusCreateManySkusInputEnvelope
    set?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
    disconnect?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
    delete?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
    connect?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
    update?: price_tables_skusUpdateWithWhereUniqueWithoutSkusInput | price_tables_skusUpdateWithWhereUniqueWithoutSkusInput[]
    updateMany?: price_tables_skusUpdateManyWithWhereWithoutSkusInput | price_tables_skusUpdateManyWithWhereWithoutSkusInput[]
    deleteMany?: price_tables_skusScalarWhereInput | price_tables_skusScalarWhereInput[]
  }

  export type variantsUpdateOneRequiredWithoutSkusNestedInput = {
    create?: XOR<variantsCreateWithoutSkusInput, variantsUncheckedCreateWithoutSkusInput>
    connectOrCreate?: variantsCreateOrConnectWithoutSkusInput
    upsert?: variantsUpsertWithoutSkusInput
    connect?: variantsWhereUniqueInput
    update?: XOR<XOR<variantsUpdateToOneWithWhereWithoutSkusInput, variantsUpdateWithoutSkusInput>, variantsUncheckedUpdateWithoutSkusInput>
  }

  export type price_tables_skusUncheckedUpdateManyWithoutSkusNestedInput = {
    create?: XOR<price_tables_skusCreateWithoutSkusInput, price_tables_skusUncheckedCreateWithoutSkusInput> | price_tables_skusCreateWithoutSkusInput[] | price_tables_skusUncheckedCreateWithoutSkusInput[]
    connectOrCreate?: price_tables_skusCreateOrConnectWithoutSkusInput | price_tables_skusCreateOrConnectWithoutSkusInput[]
    upsert?: price_tables_skusUpsertWithWhereUniqueWithoutSkusInput | price_tables_skusUpsertWithWhereUniqueWithoutSkusInput[]
    createMany?: price_tables_skusCreateManySkusInputEnvelope
    set?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
    disconnect?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
    delete?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
    connect?: price_tables_skusWhereUniqueInput | price_tables_skusWhereUniqueInput[]
    update?: price_tables_skusUpdateWithWhereUniqueWithoutSkusInput | price_tables_skusUpdateWithWhereUniqueWithoutSkusInput[]
    updateMany?: price_tables_skusUpdateManyWithWhereWithoutSkusInput | price_tables_skusUpdateManyWithWhereWithoutSkusInput[]
    deleteMany?: price_tables_skusScalarWhereInput | price_tables_skusScalarWhereInput[]
  }

  export type productsCreateNestedManyWithoutSubcategoriesInput = {
    create?: XOR<productsCreateWithoutSubcategoriesInput, productsUncheckedCreateWithoutSubcategoriesInput> | productsCreateWithoutSubcategoriesInput[] | productsUncheckedCreateWithoutSubcategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutSubcategoriesInput | productsCreateOrConnectWithoutSubcategoriesInput[]
    createMany?: productsCreateManySubcategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type categoriesCreateNestedOneWithoutSubcategoriesInput = {
    create?: XOR<categoriesCreateWithoutSubcategoriesInput, categoriesUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutSubcategoriesInput
    connect?: categoriesWhereUniqueInput
  }

  export type productsUncheckedCreateNestedManyWithoutSubcategoriesInput = {
    create?: XOR<productsCreateWithoutSubcategoriesInput, productsUncheckedCreateWithoutSubcategoriesInput> | productsCreateWithoutSubcategoriesInput[] | productsUncheckedCreateWithoutSubcategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutSubcategoriesInput | productsCreateOrConnectWithoutSubcategoriesInput[]
    createMany?: productsCreateManySubcategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUpdateManyWithoutSubcategoriesNestedInput = {
    create?: XOR<productsCreateWithoutSubcategoriesInput, productsUncheckedCreateWithoutSubcategoriesInput> | productsCreateWithoutSubcategoriesInput[] | productsUncheckedCreateWithoutSubcategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutSubcategoriesInput | productsCreateOrConnectWithoutSubcategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutSubcategoriesInput | productsUpsertWithWhereUniqueWithoutSubcategoriesInput[]
    createMany?: productsCreateManySubcategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutSubcategoriesInput | productsUpdateWithWhereUniqueWithoutSubcategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutSubcategoriesInput | productsUpdateManyWithWhereWithoutSubcategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type categoriesUpdateOneRequiredWithoutSubcategoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutSubcategoriesInput, categoriesUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutSubcategoriesInput
    upsert?: categoriesUpsertWithoutSubcategoriesInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutSubcategoriesInput, categoriesUpdateWithoutSubcategoriesInput>, categoriesUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type productsUncheckedUpdateManyWithoutSubcategoriesNestedInput = {
    create?: XOR<productsCreateWithoutSubcategoriesInput, productsUncheckedCreateWithoutSubcategoriesInput> | productsCreateWithoutSubcategoriesInput[] | productsUncheckedCreateWithoutSubcategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutSubcategoriesInput | productsCreateOrConnectWithoutSubcategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutSubcategoriesInput | productsUpsertWithWhereUniqueWithoutSubcategoriesInput[]
    createMany?: productsCreateManySubcategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutSubcategoriesInput | productsUpdateWithWhereUniqueWithoutSubcategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutSubcategoriesInput | productsUpdateManyWithWhereWithoutSubcategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type skusCreateNestedManyWithoutVariantsInput = {
    create?: XOR<skusCreateWithoutVariantsInput, skusUncheckedCreateWithoutVariantsInput> | skusCreateWithoutVariantsInput[] | skusUncheckedCreateWithoutVariantsInput[]
    connectOrCreate?: skusCreateOrConnectWithoutVariantsInput | skusCreateOrConnectWithoutVariantsInput[]
    createMany?: skusCreateManyVariantsInputEnvelope
    connect?: skusWhereUniqueInput | skusWhereUniqueInput[]
  }

  export type productsCreateNestedOneWithoutVariantsInput = {
    create?: XOR<productsCreateWithoutVariantsInput, productsUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: productsCreateOrConnectWithoutVariantsInput
    connect?: productsWhereUniqueInput
  }

  export type skusUncheckedCreateNestedManyWithoutVariantsInput = {
    create?: XOR<skusCreateWithoutVariantsInput, skusUncheckedCreateWithoutVariantsInput> | skusCreateWithoutVariantsInput[] | skusUncheckedCreateWithoutVariantsInput[]
    connectOrCreate?: skusCreateOrConnectWithoutVariantsInput | skusCreateOrConnectWithoutVariantsInput[]
    createMany?: skusCreateManyVariantsInputEnvelope
    connect?: skusWhereUniqueInput | skusWhereUniqueInput[]
  }

  export type skusUpdateManyWithoutVariantsNestedInput = {
    create?: XOR<skusCreateWithoutVariantsInput, skusUncheckedCreateWithoutVariantsInput> | skusCreateWithoutVariantsInput[] | skusUncheckedCreateWithoutVariantsInput[]
    connectOrCreate?: skusCreateOrConnectWithoutVariantsInput | skusCreateOrConnectWithoutVariantsInput[]
    upsert?: skusUpsertWithWhereUniqueWithoutVariantsInput | skusUpsertWithWhereUniqueWithoutVariantsInput[]
    createMany?: skusCreateManyVariantsInputEnvelope
    set?: skusWhereUniqueInput | skusWhereUniqueInput[]
    disconnect?: skusWhereUniqueInput | skusWhereUniqueInput[]
    delete?: skusWhereUniqueInput | skusWhereUniqueInput[]
    connect?: skusWhereUniqueInput | skusWhereUniqueInput[]
    update?: skusUpdateWithWhereUniqueWithoutVariantsInput | skusUpdateWithWhereUniqueWithoutVariantsInput[]
    updateMany?: skusUpdateManyWithWhereWithoutVariantsInput | skusUpdateManyWithWhereWithoutVariantsInput[]
    deleteMany?: skusScalarWhereInput | skusScalarWhereInput[]
  }

  export type productsUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<productsCreateWithoutVariantsInput, productsUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: productsCreateOrConnectWithoutVariantsInput
    upsert?: productsUpsertWithoutVariantsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutVariantsInput, productsUpdateWithoutVariantsInput>, productsUncheckedUpdateWithoutVariantsInput>
  }

  export type skusUncheckedUpdateManyWithoutVariantsNestedInput = {
    create?: XOR<skusCreateWithoutVariantsInput, skusUncheckedCreateWithoutVariantsInput> | skusCreateWithoutVariantsInput[] | skusUncheckedCreateWithoutVariantsInput[]
    connectOrCreate?: skusCreateOrConnectWithoutVariantsInput | skusCreateOrConnectWithoutVariantsInput[]
    upsert?: skusUpsertWithWhereUniqueWithoutVariantsInput | skusUpsertWithWhereUniqueWithoutVariantsInput[]
    createMany?: skusCreateManyVariantsInputEnvelope
    set?: skusWhereUniqueInput | skusWhereUniqueInput[]
    disconnect?: skusWhereUniqueInput | skusWhereUniqueInput[]
    delete?: skusWhereUniqueInput | skusWhereUniqueInput[]
    connect?: skusWhereUniqueInput | skusWhereUniqueInput[]
    update?: skusUpdateWithWhereUniqueWithoutVariantsInput | skusUpdateWithWhereUniqueWithoutVariantsInput[]
    updateMany?: skusUpdateManyWithWhereWithoutVariantsInput | skusUpdateManyWithWhereWithoutVariantsInput[]
    deleteMany?: skusScalarWhereInput | skusScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumproducts_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.products_type | Enumproducts_typeFieldRefInput<$PrismaModel>
    in?: $Enums.products_type[]
    notIn?: $Enums.products_type[]
    not?: NestedEnumproducts_typeFilter<$PrismaModel> | $Enums.products_type
  }

  export type NestedEnumproducts_genderFilter<$PrismaModel = never> = {
    equals?: $Enums.products_gender | Enumproducts_genderFieldRefInput<$PrismaModel>
    in?: $Enums.products_gender[]
    notIn?: $Enums.products_gender[]
    not?: NestedEnumproducts_genderFilter<$PrismaModel> | $Enums.products_gender
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumproducts_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.products_type | Enumproducts_typeFieldRefInput<$PrismaModel>
    in?: $Enums.products_type[]
    notIn?: $Enums.products_type[]
    not?: NestedEnumproducts_typeWithAggregatesFilter<$PrismaModel> | $Enums.products_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproducts_typeFilter<$PrismaModel>
    _max?: NestedEnumproducts_typeFilter<$PrismaModel>
  }

  export type NestedEnumproducts_genderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.products_gender | Enumproducts_genderFieldRefInput<$PrismaModel>
    in?: $Enums.products_gender[]
    notIn?: $Enums.products_gender[]
    not?: NestedEnumproducts_genderWithAggregatesFilter<$PrismaModel> | $Enums.products_gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproducts_genderFilter<$PrismaModel>
    _max?: NestedEnumproducts_genderFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type companiesCreateWithoutBrandsInput = {
    name: string
    reated_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products?: productsCreateNestedManyWithoutCompanyInput
    categories?: categoriesCreateNestedManyWithoutCompanyInput
    price_tables?: price_tablesCreateNestedManyWithoutCompanyInput
  }

  export type companiesUncheckedCreateWithoutBrandsInput = {
    id?: number
    name: string
    reated_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutCompanyInput
    categories?: categoriesUncheckedCreateNestedManyWithoutCompanyInput
    price_tables?: price_tablesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companiesCreateOrConnectWithoutBrandsInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutBrandsInput, companiesUncheckedCreateWithoutBrandsInput>
  }

  export type productsCreateWithoutBrandsInput = {
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    erp_id?: string | null
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
    company: companiesCreateNestedOneWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
    subcategories?: subcategoriesCreateNestedOneWithoutProductsInput
    variants?: variantsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutBrandsInput = {
    id?: number
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    company_Id: number
    erp_id?: string | null
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    category_id: number
    subcategory_id?: number | null
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
    variants?: variantsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutBrandsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutBrandsInput, productsUncheckedCreateWithoutBrandsInput>
  }

  export type productsCreateManyBrandsInputEnvelope = {
    data: productsCreateManyBrandsInput | productsCreateManyBrandsInput[]
    skipDuplicates?: boolean
  }

  export type companiesUpsertWithoutBrandsInput = {
    update: XOR<companiesUpdateWithoutBrandsInput, companiesUncheckedUpdateWithoutBrandsInput>
    create: XOR<companiesCreateWithoutBrandsInput, companiesUncheckedCreateWithoutBrandsInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutBrandsInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutBrandsInput, companiesUncheckedUpdateWithoutBrandsInput>
  }

  export type companiesUpdateWithoutBrandsInput = {
    name?: StringFieldUpdateOperationsInput | string
    reated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateManyWithoutCompanyNestedInput
    categories?: categoriesUpdateManyWithoutCompanyNestedInput
    price_tables?: price_tablesUpdateManyWithoutCompanyNestedInput
  }

  export type companiesUncheckedUpdateWithoutBrandsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutCompanyNestedInput
    categories?: categoriesUncheckedUpdateManyWithoutCompanyNestedInput
    price_tables?: price_tablesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type productsUpsertWithWhereUniqueWithoutBrandsInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutBrandsInput, productsUncheckedUpdateWithoutBrandsInput>
    create: XOR<productsCreateWithoutBrandsInput, productsUncheckedCreateWithoutBrandsInput>
  }

  export type productsUpdateWithWhereUniqueWithoutBrandsInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutBrandsInput, productsUncheckedUpdateWithoutBrandsInput>
  }

  export type productsUpdateManyWithWhereWithoutBrandsInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutBrandsInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    id?: IntFilter<"products"> | number
    name?: StringFilter<"products"> | string
    reference?: StringFilter<"products"> | string
    type?: Enumproducts_typeFilter<"products"> | $Enums.products_type
    gender?: Enumproducts_genderFilter<"products"> | $Enums.products_gender
    prompt_delivery?: BoolFilter<"products"> | boolean
    description?: StringNullableFilter<"products"> | string | null
    company_Id?: IntFilter<"products"> | number
    erp_id?: StringNullableFilter<"products"> | string | null
    brand_id?: IntFilter<"products"> | number
    deadline_id?: IntNullableFilter<"products"> | number | null
    created_at?: DateTimeFilter<"products"> | Date | string
    updated_at?: DateTimeNullableFilter<"products"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"products"> | Date | string | null
    category_id?: IntFilter<"products"> | number
    subcategory_id?: IntNullableFilter<"products"> | number | null
    category_order?: IntNullableFilter<"products"> | number | null
    composition_data?: StringNullableFilter<"products"> | string | null
    technical_information?: StringNullableFilter<"products"> | string | null
    open_grid?: BoolFilter<"products"> | boolean
    ipi?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFilter<"products"> | boolean
    is_launch?: BoolFilter<"products"> | boolean
    is_visible?: BoolFilter<"products"> | boolean
    colection?: StringNullableFilter<"products"> | string | null
  }

  export type companiesCreateWithoutCategoriesInput = {
    name: string
    reated_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products?: productsCreateNestedManyWithoutCompanyInput
    brands?: brandsCreateNestedManyWithoutCompanyInput
    price_tables?: price_tablesCreateNestedManyWithoutCompanyInput
  }

  export type companiesUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    reated_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutCompanyInput
    brands?: brandsUncheckedCreateNestedManyWithoutCompanyInput
    price_tables?: price_tablesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companiesCreateOrConnectWithoutCategoriesInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutCategoriesInput, companiesUncheckedCreateWithoutCategoriesInput>
  }

  export type productsCreateWithoutCategoriesInput = {
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    erp_id?: string | null
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
    company: companiesCreateNestedOneWithoutProductsInput
    brands: brandsCreateNestedOneWithoutProductsInput
    subcategories?: subcategoriesCreateNestedOneWithoutProductsInput
    variants?: variantsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    company_Id: number
    erp_id?: string | null
    brand_id: number
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    subcategory_id?: number | null
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
    variants?: variantsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsCreateManyCategoriesInputEnvelope = {
    data: productsCreateManyCategoriesInput | productsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type subcategoriesCreateWithoutCategoriesInput = {
    name: string
    created_at?: Date | string | null
    products?: productsCreateNestedManyWithoutSubcategoriesInput
  }

  export type subcategoriesUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutSubcategoriesInput
  }

  export type subcategoriesCreateOrConnectWithoutCategoriesInput = {
    where: subcategoriesWhereUniqueInput
    create: XOR<subcategoriesCreateWithoutCategoriesInput, subcategoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type subcategoriesCreateManyCategoriesInputEnvelope = {
    data: subcategoriesCreateManyCategoriesInput | subcategoriesCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type companiesUpsertWithoutCategoriesInput = {
    update: XOR<companiesUpdateWithoutCategoriesInput, companiesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<companiesCreateWithoutCategoriesInput, companiesUncheckedCreateWithoutCategoriesInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutCategoriesInput, companiesUncheckedUpdateWithoutCategoriesInput>
  }

  export type companiesUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    reated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateManyWithoutCompanyNestedInput
    brands?: brandsUpdateManyWithoutCompanyNestedInput
    price_tables?: price_tablesUpdateManyWithoutCompanyNestedInput
  }

  export type companiesUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutCompanyNestedInput
    brands?: brandsUncheckedUpdateManyWithoutCompanyNestedInput
    price_tables?: price_tablesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
  }

  export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type subcategoriesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: subcategoriesWhereUniqueInput
    update: XOR<subcategoriesUpdateWithoutCategoriesInput, subcategoriesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<subcategoriesCreateWithoutCategoriesInput, subcategoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type subcategoriesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: subcategoriesWhereUniqueInput
    data: XOR<subcategoriesUpdateWithoutCategoriesInput, subcategoriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type subcategoriesUpdateManyWithWhereWithoutCategoriesInput = {
    where: subcategoriesScalarWhereInput
    data: XOR<subcategoriesUpdateManyMutationInput, subcategoriesUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type subcategoriesScalarWhereInput = {
    AND?: subcategoriesScalarWhereInput | subcategoriesScalarWhereInput[]
    OR?: subcategoriesScalarWhereInput[]
    NOT?: subcategoriesScalarWhereInput | subcategoriesScalarWhereInput[]
    id?: IntFilter<"subcategories"> | number
    name?: StringFilter<"subcategories"> | string
    category_id?: IntFilter<"subcategories"> | number
    created_at?: DateTimeNullableFilter<"subcategories"> | Date | string | null
  }

  export type companiesCreateWithoutPrice_tablesInput = {
    name: string
    reated_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products?: productsCreateNestedManyWithoutCompanyInput
    brands?: brandsCreateNestedManyWithoutCompanyInput
    categories?: categoriesCreateNestedManyWithoutCompanyInput
  }

  export type companiesUncheckedCreateWithoutPrice_tablesInput = {
    id?: number
    name: string
    reated_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutCompanyInput
    brands?: brandsUncheckedCreateNestedManyWithoutCompanyInput
    categories?: categoriesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companiesCreateOrConnectWithoutPrice_tablesInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutPrice_tablesInput, companiesUncheckedCreateWithoutPrice_tablesInput>
  }

  export type price_tables_skusCreateWithoutPrice_tablesInput = {
    price?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string | null
    skus: skusCreateNestedOneWithoutPrice_tables_skusInput
  }

  export type price_tables_skusUncheckedCreateWithoutPrice_tablesInput = {
    id?: number
    price?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string | null
    sku_id: number
  }

  export type price_tables_skusCreateOrConnectWithoutPrice_tablesInput = {
    where: price_tables_skusWhereUniqueInput
    create: XOR<price_tables_skusCreateWithoutPrice_tablesInput, price_tables_skusUncheckedCreateWithoutPrice_tablesInput>
  }

  export type price_tables_skusCreateManyPrice_tablesInputEnvelope = {
    data: price_tables_skusCreateManyPrice_tablesInput | price_tables_skusCreateManyPrice_tablesInput[]
    skipDuplicates?: boolean
  }

  export type companiesUpsertWithoutPrice_tablesInput = {
    update: XOR<companiesUpdateWithoutPrice_tablesInput, companiesUncheckedUpdateWithoutPrice_tablesInput>
    create: XOR<companiesCreateWithoutPrice_tablesInput, companiesUncheckedCreateWithoutPrice_tablesInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutPrice_tablesInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutPrice_tablesInput, companiesUncheckedUpdateWithoutPrice_tablesInput>
  }

  export type companiesUpdateWithoutPrice_tablesInput = {
    name?: StringFieldUpdateOperationsInput | string
    reated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateManyWithoutCompanyNestedInput
    brands?: brandsUpdateManyWithoutCompanyNestedInput
    categories?: categoriesUpdateManyWithoutCompanyNestedInput
  }

  export type companiesUncheckedUpdateWithoutPrice_tablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutCompanyNestedInput
    brands?: brandsUncheckedUpdateManyWithoutCompanyNestedInput
    categories?: categoriesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type price_tables_skusUpsertWithWhereUniqueWithoutPrice_tablesInput = {
    where: price_tables_skusWhereUniqueInput
    update: XOR<price_tables_skusUpdateWithoutPrice_tablesInput, price_tables_skusUncheckedUpdateWithoutPrice_tablesInput>
    create: XOR<price_tables_skusCreateWithoutPrice_tablesInput, price_tables_skusUncheckedCreateWithoutPrice_tablesInput>
  }

  export type price_tables_skusUpdateWithWhereUniqueWithoutPrice_tablesInput = {
    where: price_tables_skusWhereUniqueInput
    data: XOR<price_tables_skusUpdateWithoutPrice_tablesInput, price_tables_skusUncheckedUpdateWithoutPrice_tablesInput>
  }

  export type price_tables_skusUpdateManyWithWhereWithoutPrice_tablesInput = {
    where: price_tables_skusScalarWhereInput
    data: XOR<price_tables_skusUpdateManyMutationInput, price_tables_skusUncheckedUpdateManyWithoutPrice_tablesInput>
  }

  export type price_tables_skusScalarWhereInput = {
    AND?: price_tables_skusScalarWhereInput | price_tables_skusScalarWhereInput[]
    OR?: price_tables_skusScalarWhereInput[]
    NOT?: price_tables_skusScalarWhereInput | price_tables_skusScalarWhereInput[]
    id?: IntFilter<"price_tables_skus"> | number
    price?: DecimalFilter<"price_tables_skus"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"price_tables_skus"> | Date | string
    updated_at?: DateTimeNullableFilter<"price_tables_skus"> | Date | string | null
    sku_id?: IntFilter<"price_tables_skus"> | number
    price_table_id?: IntFilter<"price_tables_skus"> | number
  }

  export type price_tablesCreateWithoutPrice_tables_skusInput = {
    description: string
    price_adjustment?: Decimal | DecimalJsLike | number | string
    minimum_value: Decimal | DecimalJsLike | number | string
    visible?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    company: companiesCreateNestedOneWithoutPrice_tablesInput
  }

  export type price_tablesUncheckedCreateWithoutPrice_tables_skusInput = {
    id?: number
    description: string
    price_adjustment?: Decimal | DecimalJsLike | number | string
    minimum_value: Decimal | DecimalJsLike | number | string
    visible?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    company_Id: number
  }

  export type price_tablesCreateOrConnectWithoutPrice_tables_skusInput = {
    where: price_tablesWhereUniqueInput
    create: XOR<price_tablesCreateWithoutPrice_tables_skusInput, price_tablesUncheckedCreateWithoutPrice_tables_skusInput>
  }

  export type skusCreateWithoutPrice_tables_skusInput = {
    size: string
    stock: number
    price: Decimal | DecimalJsLike | number | string
    code: string
    min_quantity?: number | null
    multiple_quantity: number
    erpId?: string | null
    cest?: string | null
    height?: number | null
    length?: number | null
    ncm?: string | null
    weight?: number | null
    width?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    variants: variantsCreateNestedOneWithoutSkusInput
  }

  export type skusUncheckedCreateWithoutPrice_tables_skusInput = {
    id?: number
    size: string
    stock: number
    price: Decimal | DecimalJsLike | number | string
    code: string
    min_quantity?: number | null
    multiple_quantity: number
    erpId?: string | null
    variant_id: number
    cest?: string | null
    height?: number | null
    length?: number | null
    ncm?: string | null
    weight?: number | null
    width?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type skusCreateOrConnectWithoutPrice_tables_skusInput = {
    where: skusWhereUniqueInput
    create: XOR<skusCreateWithoutPrice_tables_skusInput, skusUncheckedCreateWithoutPrice_tables_skusInput>
  }

  export type price_tablesUpsertWithoutPrice_tables_skusInput = {
    update: XOR<price_tablesUpdateWithoutPrice_tables_skusInput, price_tablesUncheckedUpdateWithoutPrice_tables_skusInput>
    create: XOR<price_tablesCreateWithoutPrice_tables_skusInput, price_tablesUncheckedCreateWithoutPrice_tables_skusInput>
    where?: price_tablesWhereInput
  }

  export type price_tablesUpdateToOneWithWhereWithoutPrice_tables_skusInput = {
    where?: price_tablesWhereInput
    data: XOR<price_tablesUpdateWithoutPrice_tables_skusInput, price_tablesUncheckedUpdateWithoutPrice_tables_skusInput>
  }

  export type price_tablesUpdateWithoutPrice_tables_skusInput = {
    description?: StringFieldUpdateOperationsInput | string
    price_adjustment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimum_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: companiesUpdateOneRequiredWithoutPrice_tablesNestedInput
  }

  export type price_tablesUncheckedUpdateWithoutPrice_tables_skusInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price_adjustment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimum_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_Id?: IntFieldUpdateOperationsInput | number
  }

  export type skusUpsertWithoutPrice_tables_skusInput = {
    update: XOR<skusUpdateWithoutPrice_tables_skusInput, skusUncheckedUpdateWithoutPrice_tables_skusInput>
    create: XOR<skusCreateWithoutPrice_tables_skusInput, skusUncheckedCreateWithoutPrice_tables_skusInput>
    where?: skusWhereInput
  }

  export type skusUpdateToOneWithWhereWithoutPrice_tables_skusInput = {
    where?: skusWhereInput
    data: XOR<skusUpdateWithoutPrice_tables_skusInput, skusUncheckedUpdateWithoutPrice_tables_skusInput>
  }

  export type skusUpdateWithoutPrice_tables_skusInput = {
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    code?: StringFieldUpdateOperationsInput | string
    min_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    multiple_quantity?: IntFieldUpdateOperationsInput | number
    erpId?: NullableStringFieldUpdateOperationsInput | string | null
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    ncm?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    variants?: variantsUpdateOneRequiredWithoutSkusNestedInput
  }

  export type skusUncheckedUpdateWithoutPrice_tables_skusInput = {
    id?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    code?: StringFieldUpdateOperationsInput | string
    min_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    multiple_quantity?: IntFieldUpdateOperationsInput | number
    erpId?: NullableStringFieldUpdateOperationsInput | string | null
    variant_id?: IntFieldUpdateOperationsInput | number
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    ncm?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type companiesCreateWithoutProductsInput = {
    name: string
    reated_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    brands?: brandsCreateNestedManyWithoutCompanyInput
    categories?: categoriesCreateNestedManyWithoutCompanyInput
    price_tables?: price_tablesCreateNestedManyWithoutCompanyInput
  }

  export type companiesUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    reated_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    brands?: brandsUncheckedCreateNestedManyWithoutCompanyInput
    categories?: categoriesUncheckedCreateNestedManyWithoutCompanyInput
    price_tables?: price_tablesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companiesCreateOrConnectWithoutProductsInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutProductsInput, companiesUncheckedCreateWithoutProductsInput>
  }

  export type brandsCreateWithoutProductsInput = {
    name: string
    logo_img?: string | null
    min_value?: Decimal | DecimalJsLike | number | string
    min_installments_value?: Decimal | DecimalJsLike | number | string
    visible?: boolean | null
    sku_order?: string | null
    address_id?: number | null
    business_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    company: companiesCreateNestedOneWithoutBrandsInput
  }

  export type brandsUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    logo_img?: string | null
    min_value?: Decimal | DecimalJsLike | number | string
    min_installments_value?: Decimal | DecimalJsLike | number | string
    visible?: boolean | null
    sku_order?: string | null
    address_id?: number | null
    business_id: number
    company_Id: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type brandsCreateOrConnectWithoutProductsInput = {
    where: brandsWhereUniqueInput
    create: XOR<brandsCreateWithoutProductsInput, brandsUncheckedCreateWithoutProductsInput>
  }

  export type categoriesCreateWithoutProductsInput = {
    name: string
    created_at?: Date | string | null
    company: companiesCreateNestedOneWithoutCategoriesInput
    subcategories?: subcategoriesCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    company_Id: number
    subcategories?: subcategoriesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type subcategoriesCreateWithoutProductsInput = {
    name: string
    created_at?: Date | string | null
    categories: categoriesCreateNestedOneWithoutSubcategoriesInput
  }

  export type subcategoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    category_id: number
    created_at?: Date | string | null
  }

  export type subcategoriesCreateOrConnectWithoutProductsInput = {
    where: subcategoriesWhereUniqueInput
    create: XOR<subcategoriesCreateWithoutProductsInput, subcategoriesUncheckedCreateWithoutProductsInput>
  }

  export type variantsCreateWithoutProductsInput = {
    name: string
    hex_code?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    skus?: skusCreateNestedManyWithoutVariantsInput
  }

  export type variantsUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    hex_code?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    skus?: skusUncheckedCreateNestedManyWithoutVariantsInput
  }

  export type variantsCreateOrConnectWithoutProductsInput = {
    where: variantsWhereUniqueInput
    create: XOR<variantsCreateWithoutProductsInput, variantsUncheckedCreateWithoutProductsInput>
  }

  export type variantsCreateManyProductsInputEnvelope = {
    data: variantsCreateManyProductsInput | variantsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type companiesUpsertWithoutProductsInput = {
    update: XOR<companiesUpdateWithoutProductsInput, companiesUncheckedUpdateWithoutProductsInput>
    create: XOR<companiesCreateWithoutProductsInput, companiesUncheckedCreateWithoutProductsInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutProductsInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutProductsInput, companiesUncheckedUpdateWithoutProductsInput>
  }

  export type companiesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    reated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    brands?: brandsUpdateManyWithoutCompanyNestedInput
    categories?: categoriesUpdateManyWithoutCompanyNestedInput
    price_tables?: price_tablesUpdateManyWithoutCompanyNestedInput
  }

  export type companiesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    brands?: brandsUncheckedUpdateManyWithoutCompanyNestedInput
    categories?: categoriesUncheckedUpdateManyWithoutCompanyNestedInput
    price_tables?: price_tablesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type brandsUpsertWithoutProductsInput = {
    update: XOR<brandsUpdateWithoutProductsInput, brandsUncheckedUpdateWithoutProductsInput>
    create: XOR<brandsCreateWithoutProductsInput, brandsUncheckedCreateWithoutProductsInput>
    where?: brandsWhereInput
  }

  export type brandsUpdateToOneWithWhereWithoutProductsInput = {
    where?: brandsWhereInput
    data: XOR<brandsUpdateWithoutProductsInput, brandsUncheckedUpdateWithoutProductsInput>
  }

  export type brandsUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo_img?: NullableStringFieldUpdateOperationsInput | string | null
    min_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_installments_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sku_order?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    business_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: companiesUpdateOneRequiredWithoutBrandsNestedInput
  }

  export type brandsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo_img?: NullableStringFieldUpdateOperationsInput | string | null
    min_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_installments_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sku_order?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    business_id?: IntFieldUpdateOperationsInput | number
    company_Id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: companiesUpdateOneRequiredWithoutCategoriesNestedInput
    subcategories?: subcategoriesUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_Id?: IntFieldUpdateOperationsInput | number
    subcategories?: subcategoriesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type subcategoriesUpsertWithoutProductsInput = {
    update: XOR<subcategoriesUpdateWithoutProductsInput, subcategoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<subcategoriesCreateWithoutProductsInput, subcategoriesUncheckedCreateWithoutProductsInput>
    where?: subcategoriesWhereInput
  }

  export type subcategoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: subcategoriesWhereInput
    data: XOR<subcategoriesUpdateWithoutProductsInput, subcategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type subcategoriesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: categoriesUpdateOneRequiredWithoutSubcategoriesNestedInput
  }

  export type subcategoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type variantsUpsertWithWhereUniqueWithoutProductsInput = {
    where: variantsWhereUniqueInput
    update: XOR<variantsUpdateWithoutProductsInput, variantsUncheckedUpdateWithoutProductsInput>
    create: XOR<variantsCreateWithoutProductsInput, variantsUncheckedCreateWithoutProductsInput>
  }

  export type variantsUpdateWithWhereUniqueWithoutProductsInput = {
    where: variantsWhereUniqueInput
    data: XOR<variantsUpdateWithoutProductsInput, variantsUncheckedUpdateWithoutProductsInput>
  }

  export type variantsUpdateManyWithWhereWithoutProductsInput = {
    where: variantsScalarWhereInput
    data: XOR<variantsUpdateManyMutationInput, variantsUncheckedUpdateManyWithoutProductsInput>
  }

  export type variantsScalarWhereInput = {
    AND?: variantsScalarWhereInput | variantsScalarWhereInput[]
    OR?: variantsScalarWhereInput[]
    NOT?: variantsScalarWhereInput | variantsScalarWhereInput[]
    id?: IntFilter<"variants"> | number
    name?: StringFilter<"variants"> | string
    hex_code?: StringNullableFilter<"variants"> | string | null
    product_id?: IntFilter<"variants"> | number
    created_at?: DateTimeNullableFilter<"variants"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"variants"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"variants"> | Date | string | null
  }

  export type productsCreateWithoutCompanyInput = {
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    erp_id?: string | null
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
    brands: brandsCreateNestedOneWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
    subcategories?: subcategoriesCreateNestedOneWithoutProductsInput
    variants?: variantsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    erp_id?: string | null
    brand_id: number
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    category_id: number
    subcategory_id?: number | null
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
    variants?: variantsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCompanyInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCompanyInput, productsUncheckedCreateWithoutCompanyInput>
  }

  export type productsCreateManyCompanyInputEnvelope = {
    data: productsCreateManyCompanyInput | productsCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type brandsCreateWithoutCompanyInput = {
    name: string
    logo_img?: string | null
    min_value?: Decimal | DecimalJsLike | number | string
    min_installments_value?: Decimal | DecimalJsLike | number | string
    visible?: boolean | null
    sku_order?: string | null
    address_id?: number | null
    business_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products?: productsCreateNestedManyWithoutBrandsInput
  }

  export type brandsUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    logo_img?: string | null
    min_value?: Decimal | DecimalJsLike | number | string
    min_installments_value?: Decimal | DecimalJsLike | number | string
    visible?: boolean | null
    sku_order?: string | null
    address_id?: number | null
    business_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutBrandsInput
  }

  export type brandsCreateOrConnectWithoutCompanyInput = {
    where: brandsWhereUniqueInput
    create: XOR<brandsCreateWithoutCompanyInput, brandsUncheckedCreateWithoutCompanyInput>
  }

  export type brandsCreateManyCompanyInputEnvelope = {
    data: brandsCreateManyCompanyInput | brandsCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutCompanyInput = {
    name: string
    created_at?: Date | string | null
    products?: productsCreateNestedManyWithoutCategoriesInput
    subcategories?: subcategoriesCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
    subcategories?: subcategoriesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutCompanyInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutCompanyInput, categoriesUncheckedCreateWithoutCompanyInput>
  }

  export type categoriesCreateManyCompanyInputEnvelope = {
    data: categoriesCreateManyCompanyInput | categoriesCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type price_tablesCreateWithoutCompanyInput = {
    description: string
    price_adjustment?: Decimal | DecimalJsLike | number | string
    minimum_value: Decimal | DecimalJsLike | number | string
    visible?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    price_tables_skus?: price_tables_skusCreateNestedManyWithoutPrice_tablesInput
  }

  export type price_tablesUncheckedCreateWithoutCompanyInput = {
    id?: number
    description: string
    price_adjustment?: Decimal | DecimalJsLike | number | string
    minimum_value: Decimal | DecimalJsLike | number | string
    visible?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    price_tables_skus?: price_tables_skusUncheckedCreateNestedManyWithoutPrice_tablesInput
  }

  export type price_tablesCreateOrConnectWithoutCompanyInput = {
    where: price_tablesWhereUniqueInput
    create: XOR<price_tablesCreateWithoutCompanyInput, price_tablesUncheckedCreateWithoutCompanyInput>
  }

  export type price_tablesCreateManyCompanyInputEnvelope = {
    data: price_tablesCreateManyCompanyInput | price_tablesCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutCompanyInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCompanyInput, productsUncheckedUpdateWithoutCompanyInput>
    create: XOR<productsCreateWithoutCompanyInput, productsUncheckedCreateWithoutCompanyInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCompanyInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCompanyInput, productsUncheckedUpdateWithoutCompanyInput>
  }

  export type productsUpdateManyWithWhereWithoutCompanyInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutCompanyInput>
  }

  export type brandsUpsertWithWhereUniqueWithoutCompanyInput = {
    where: brandsWhereUniqueInput
    update: XOR<brandsUpdateWithoutCompanyInput, brandsUncheckedUpdateWithoutCompanyInput>
    create: XOR<brandsCreateWithoutCompanyInput, brandsUncheckedCreateWithoutCompanyInput>
  }

  export type brandsUpdateWithWhereUniqueWithoutCompanyInput = {
    where: brandsWhereUniqueInput
    data: XOR<brandsUpdateWithoutCompanyInput, brandsUncheckedUpdateWithoutCompanyInput>
  }

  export type brandsUpdateManyWithWhereWithoutCompanyInput = {
    where: brandsScalarWhereInput
    data: XOR<brandsUpdateManyMutationInput, brandsUncheckedUpdateManyWithoutCompanyInput>
  }

  export type brandsScalarWhereInput = {
    AND?: brandsScalarWhereInput | brandsScalarWhereInput[]
    OR?: brandsScalarWhereInput[]
    NOT?: brandsScalarWhereInput | brandsScalarWhereInput[]
    id?: IntFilter<"brands"> | number
    name?: StringFilter<"brands"> | string
    logo_img?: StringNullableFilter<"brands"> | string | null
    min_value?: DecimalFilter<"brands"> | Decimal | DecimalJsLike | number | string
    min_installments_value?: DecimalFilter<"brands"> | Decimal | DecimalJsLike | number | string
    visible?: BoolNullableFilter<"brands"> | boolean | null
    sku_order?: StringNullableFilter<"brands"> | string | null
    address_id?: IntNullableFilter<"brands"> | number | null
    business_id?: IntFilter<"brands"> | number
    company_Id?: IntFilter<"brands"> | number
    created_at?: DateTimeFilter<"brands"> | Date | string
    updated_at?: DateTimeNullableFilter<"brands"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"brands"> | Date | string | null
  }

  export type categoriesUpsertWithWhereUniqueWithoutCompanyInput = {
    where: categoriesWhereUniqueInput
    update: XOR<categoriesUpdateWithoutCompanyInput, categoriesUncheckedUpdateWithoutCompanyInput>
    create: XOR<categoriesCreateWithoutCompanyInput, categoriesUncheckedCreateWithoutCompanyInput>
  }

  export type categoriesUpdateWithWhereUniqueWithoutCompanyInput = {
    where: categoriesWhereUniqueInput
    data: XOR<categoriesUpdateWithoutCompanyInput, categoriesUncheckedUpdateWithoutCompanyInput>
  }

  export type categoriesUpdateManyWithWhereWithoutCompanyInput = {
    where: categoriesScalarWhereInput
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyWithoutCompanyInput>
  }

  export type categoriesScalarWhereInput = {
    AND?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    OR?: categoriesScalarWhereInput[]
    NOT?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    company_Id?: IntFilter<"categories"> | number
  }

  export type price_tablesUpsertWithWhereUniqueWithoutCompanyInput = {
    where: price_tablesWhereUniqueInput
    update: XOR<price_tablesUpdateWithoutCompanyInput, price_tablesUncheckedUpdateWithoutCompanyInput>
    create: XOR<price_tablesCreateWithoutCompanyInput, price_tablesUncheckedCreateWithoutCompanyInput>
  }

  export type price_tablesUpdateWithWhereUniqueWithoutCompanyInput = {
    where: price_tablesWhereUniqueInput
    data: XOR<price_tablesUpdateWithoutCompanyInput, price_tablesUncheckedUpdateWithoutCompanyInput>
  }

  export type price_tablesUpdateManyWithWhereWithoutCompanyInput = {
    where: price_tablesScalarWhereInput
    data: XOR<price_tablesUpdateManyMutationInput, price_tablesUncheckedUpdateManyWithoutCompanyInput>
  }

  export type price_tablesScalarWhereInput = {
    AND?: price_tablesScalarWhereInput | price_tablesScalarWhereInput[]
    OR?: price_tablesScalarWhereInput[]
    NOT?: price_tablesScalarWhereInput | price_tablesScalarWhereInput[]
    id?: IntFilter<"price_tables"> | number
    description?: StringFilter<"price_tables"> | string
    price_adjustment?: DecimalFilter<"price_tables"> | Decimal | DecimalJsLike | number | string
    minimum_value?: DecimalFilter<"price_tables"> | Decimal | DecimalJsLike | number | string
    visible?: BoolFilter<"price_tables"> | boolean
    created_at?: DateTimeFilter<"price_tables"> | Date | string
    updated_at?: DateTimeNullableFilter<"price_tables"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"price_tables"> | Date | string | null
    company_Id?: IntFilter<"price_tables"> | number
  }

  export type price_tables_skusCreateWithoutSkusInput = {
    price?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string | null
    price_tables: price_tablesCreateNestedOneWithoutPrice_tables_skusInput
  }

  export type price_tables_skusUncheckedCreateWithoutSkusInput = {
    id?: number
    price?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string | null
    price_table_id: number
  }

  export type price_tables_skusCreateOrConnectWithoutSkusInput = {
    where: price_tables_skusWhereUniqueInput
    create: XOR<price_tables_skusCreateWithoutSkusInput, price_tables_skusUncheckedCreateWithoutSkusInput>
  }

  export type price_tables_skusCreateManySkusInputEnvelope = {
    data: price_tables_skusCreateManySkusInput | price_tables_skusCreateManySkusInput[]
    skipDuplicates?: boolean
  }

  export type variantsCreateWithoutSkusInput = {
    name: string
    hex_code?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    products: productsCreateNestedOneWithoutVariantsInput
  }

  export type variantsUncheckedCreateWithoutSkusInput = {
    id?: number
    name: string
    hex_code?: string | null
    product_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type variantsCreateOrConnectWithoutSkusInput = {
    where: variantsWhereUniqueInput
    create: XOR<variantsCreateWithoutSkusInput, variantsUncheckedCreateWithoutSkusInput>
  }

  export type price_tables_skusUpsertWithWhereUniqueWithoutSkusInput = {
    where: price_tables_skusWhereUniqueInput
    update: XOR<price_tables_skusUpdateWithoutSkusInput, price_tables_skusUncheckedUpdateWithoutSkusInput>
    create: XOR<price_tables_skusCreateWithoutSkusInput, price_tables_skusUncheckedCreateWithoutSkusInput>
  }

  export type price_tables_skusUpdateWithWhereUniqueWithoutSkusInput = {
    where: price_tables_skusWhereUniqueInput
    data: XOR<price_tables_skusUpdateWithoutSkusInput, price_tables_skusUncheckedUpdateWithoutSkusInput>
  }

  export type price_tables_skusUpdateManyWithWhereWithoutSkusInput = {
    where: price_tables_skusScalarWhereInput
    data: XOR<price_tables_skusUpdateManyMutationInput, price_tables_skusUncheckedUpdateManyWithoutSkusInput>
  }

  export type variantsUpsertWithoutSkusInput = {
    update: XOR<variantsUpdateWithoutSkusInput, variantsUncheckedUpdateWithoutSkusInput>
    create: XOR<variantsCreateWithoutSkusInput, variantsUncheckedCreateWithoutSkusInput>
    where?: variantsWhereInput
  }

  export type variantsUpdateToOneWithWhereWithoutSkusInput = {
    where?: variantsWhereInput
    data: XOR<variantsUpdateWithoutSkusInput, variantsUncheckedUpdateWithoutSkusInput>
  }

  export type variantsUpdateWithoutSkusInput = {
    name?: StringFieldUpdateOperationsInput | string
    hex_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneRequiredWithoutVariantsNestedInput
  }

  export type variantsUncheckedUpdateWithoutSkusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hex_code?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateWithoutSubcategoriesInput = {
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    erp_id?: string | null
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
    company: companiesCreateNestedOneWithoutProductsInput
    brands: brandsCreateNestedOneWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
    variants?: variantsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutSubcategoriesInput = {
    id?: number
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    company_Id: number
    erp_id?: string | null
    brand_id: number
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    category_id: number
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
    variants?: variantsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutSubcategoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutSubcategoriesInput, productsUncheckedCreateWithoutSubcategoriesInput>
  }

  export type productsCreateManySubcategoriesInputEnvelope = {
    data: productsCreateManySubcategoriesInput | productsCreateManySubcategoriesInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutSubcategoriesInput = {
    name: string
    created_at?: Date | string | null
    company: companiesCreateNestedOneWithoutCategoriesInput
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutSubcategoriesInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    company_Id: number
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutSubcategoriesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutSubcategoriesInput, categoriesUncheckedCreateWithoutSubcategoriesInput>
  }

  export type productsUpsertWithWhereUniqueWithoutSubcategoriesInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutSubcategoriesInput, productsUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<productsCreateWithoutSubcategoriesInput, productsUncheckedCreateWithoutSubcategoriesInput>
  }

  export type productsUpdateWithWhereUniqueWithoutSubcategoriesInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutSubcategoriesInput, productsUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type productsUpdateManyWithWhereWithoutSubcategoriesInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutSubcategoriesInput>
  }

  export type categoriesUpsertWithoutSubcategoriesInput = {
    update: XOR<categoriesUpdateWithoutSubcategoriesInput, categoriesUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<categoriesCreateWithoutSubcategoriesInput, categoriesUncheckedCreateWithoutSubcategoriesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutSubcategoriesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutSubcategoriesInput, categoriesUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type categoriesUpdateWithoutSubcategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: companiesUpdateOneRequiredWithoutCategoriesNestedInput
    products?: productsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutSubcategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_Id?: IntFieldUpdateOperationsInput | number
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type skusCreateWithoutVariantsInput = {
    size: string
    stock: number
    price: Decimal | DecimalJsLike | number | string
    code: string
    min_quantity?: number | null
    multiple_quantity: number
    erpId?: string | null
    cest?: string | null
    height?: number | null
    length?: number | null
    ncm?: string | null
    weight?: number | null
    width?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    price_tables_skus?: price_tables_skusCreateNestedManyWithoutSkusInput
  }

  export type skusUncheckedCreateWithoutVariantsInput = {
    id?: number
    size: string
    stock: number
    price: Decimal | DecimalJsLike | number | string
    code: string
    min_quantity?: number | null
    multiple_quantity: number
    erpId?: string | null
    cest?: string | null
    height?: number | null
    length?: number | null
    ncm?: string | null
    weight?: number | null
    width?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    price_tables_skus?: price_tables_skusUncheckedCreateNestedManyWithoutSkusInput
  }

  export type skusCreateOrConnectWithoutVariantsInput = {
    where: skusWhereUniqueInput
    create: XOR<skusCreateWithoutVariantsInput, skusUncheckedCreateWithoutVariantsInput>
  }

  export type skusCreateManyVariantsInputEnvelope = {
    data: skusCreateManyVariantsInput | skusCreateManyVariantsInput[]
    skipDuplicates?: boolean
  }

  export type productsCreateWithoutVariantsInput = {
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    erp_id?: string | null
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
    company: companiesCreateNestedOneWithoutProductsInput
    brands: brandsCreateNestedOneWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
    subcategories?: subcategoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutVariantsInput = {
    id?: number
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    company_Id: number
    erp_id?: string | null
    brand_id: number
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    category_id: number
    subcategory_id?: number | null
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
  }

  export type productsCreateOrConnectWithoutVariantsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutVariantsInput, productsUncheckedCreateWithoutVariantsInput>
  }

  export type skusUpsertWithWhereUniqueWithoutVariantsInput = {
    where: skusWhereUniqueInput
    update: XOR<skusUpdateWithoutVariantsInput, skusUncheckedUpdateWithoutVariantsInput>
    create: XOR<skusCreateWithoutVariantsInput, skusUncheckedCreateWithoutVariantsInput>
  }

  export type skusUpdateWithWhereUniqueWithoutVariantsInput = {
    where: skusWhereUniqueInput
    data: XOR<skusUpdateWithoutVariantsInput, skusUncheckedUpdateWithoutVariantsInput>
  }

  export type skusUpdateManyWithWhereWithoutVariantsInput = {
    where: skusScalarWhereInput
    data: XOR<skusUpdateManyMutationInput, skusUncheckedUpdateManyWithoutVariantsInput>
  }

  export type skusScalarWhereInput = {
    AND?: skusScalarWhereInput | skusScalarWhereInput[]
    OR?: skusScalarWhereInput[]
    NOT?: skusScalarWhereInput | skusScalarWhereInput[]
    id?: IntFilter<"skus"> | number
    size?: StringFilter<"skus"> | string
    stock?: IntFilter<"skus"> | number
    price?: DecimalFilter<"skus"> | Decimal | DecimalJsLike | number | string
    code?: StringFilter<"skus"> | string
    min_quantity?: IntNullableFilter<"skus"> | number | null
    multiple_quantity?: IntFilter<"skus"> | number
    erpId?: StringNullableFilter<"skus"> | string | null
    variant_id?: IntFilter<"skus"> | number
    cest?: StringNullableFilter<"skus"> | string | null
    height?: FloatNullableFilter<"skus"> | number | null
    length?: FloatNullableFilter<"skus"> | number | null
    ncm?: StringNullableFilter<"skus"> | string | null
    weight?: FloatNullableFilter<"skus"> | number | null
    width?: FloatNullableFilter<"skus"> | number | null
    created_at?: DateTimeFilter<"skus"> | Date | string
    updated_at?: DateTimeNullableFilter<"skus"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"skus"> | Date | string | null
  }

  export type productsUpsertWithoutVariantsInput = {
    update: XOR<productsUpdateWithoutVariantsInput, productsUncheckedUpdateWithoutVariantsInput>
    create: XOR<productsCreateWithoutVariantsInput, productsUncheckedCreateWithoutVariantsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutVariantsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutVariantsInput, productsUncheckedUpdateWithoutVariantsInput>
  }

  export type productsUpdateWithoutVariantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
    company?: companiesUpdateOneRequiredWithoutProductsNestedInput
    brands?: brandsUpdateOneRequiredWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    subcategories?: subcategoriesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutVariantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    company_Id?: IntFieldUpdateOperationsInput | number
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    brand_id?: IntFieldUpdateOperationsInput | number
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsCreateManyBrandsInput = {
    id?: number
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    company_Id: number
    erp_id?: string | null
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    category_id: number
    subcategory_id?: number | null
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
  }

  export type productsUpdateWithoutBrandsInput = {
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
    company?: companiesUpdateOneRequiredWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    subcategories?: subcategoriesUpdateOneWithoutProductsNestedInput
    variants?: variantsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutBrandsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    company_Id?: IntFieldUpdateOperationsInput | number
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
    variants?: variantsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutBrandsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    company_Id?: IntFieldUpdateOperationsInput | number
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsCreateManyCategoriesInput = {
    id?: number
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    company_Id: number
    erp_id?: string | null
    brand_id: number
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    subcategory_id?: number | null
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
  }

  export type subcategoriesCreateManyCategoriesInput = {
    id?: number
    name: string
    created_at?: Date | string | null
  }

  export type productsUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
    company?: companiesUpdateOneRequiredWithoutProductsNestedInput
    brands?: brandsUpdateOneRequiredWithoutProductsNestedInput
    subcategories?: subcategoriesUpdateOneWithoutProductsNestedInput
    variants?: variantsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    company_Id?: IntFieldUpdateOperationsInput | number
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    brand_id?: IntFieldUpdateOperationsInput | number
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
    variants?: variantsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    company_Id?: IntFieldUpdateOperationsInput | number
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    brand_id?: IntFieldUpdateOperationsInput | number
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type subcategoriesUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateManyWithoutSubcategoriesNestedInput
  }

  export type subcategoriesUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutSubcategoriesNestedInput
  }

  export type subcategoriesUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type price_tables_skusCreateManyPrice_tablesInput = {
    id?: number
    price?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string | null
    sku_id: number
  }

  export type price_tables_skusUpdateWithoutPrice_tablesInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skus?: skusUpdateOneRequiredWithoutPrice_tables_skusNestedInput
  }

  export type price_tables_skusUncheckedUpdateWithoutPrice_tablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sku_id?: IntFieldUpdateOperationsInput | number
  }

  export type price_tables_skusUncheckedUpdateManyWithoutPrice_tablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sku_id?: IntFieldUpdateOperationsInput | number
  }

  export type variantsCreateManyProductsInput = {
    id?: number
    name: string
    hex_code?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type variantsUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    hex_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skus?: skusUpdateManyWithoutVariantsNestedInput
  }

  export type variantsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hex_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skus?: skusUncheckedUpdateManyWithoutVariantsNestedInput
  }

  export type variantsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hex_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateManyCompanyInput = {
    id?: number
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    erp_id?: string | null
    brand_id: number
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    category_id: number
    subcategory_id?: number | null
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
  }

  export type brandsCreateManyCompanyInput = {
    id?: number
    name: string
    logo_img?: string | null
    min_value?: Decimal | DecimalJsLike | number | string
    min_installments_value?: Decimal | DecimalJsLike | number | string
    visible?: boolean | null
    sku_order?: string | null
    address_id?: number | null
    business_id: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type categoriesCreateManyCompanyInput = {
    id?: number
    name: string
    created_at?: Date | string | null
  }

  export type price_tablesCreateManyCompanyInput = {
    id?: number
    description: string
    price_adjustment?: Decimal | DecimalJsLike | number | string
    minimum_value: Decimal | DecimalJsLike | number | string
    visible?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type productsUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
    brands?: brandsUpdateOneRequiredWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    subcategories?: subcategoriesUpdateOneWithoutProductsNestedInput
    variants?: variantsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    brand_id?: IntFieldUpdateOperationsInput | number
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
    variants?: variantsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    brand_id?: IntFieldUpdateOperationsInput | number
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    subcategory_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type brandsUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo_img?: NullableStringFieldUpdateOperationsInput | string | null
    min_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_installments_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sku_order?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    business_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateManyWithoutBrandsNestedInput
  }

  export type brandsUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo_img?: NullableStringFieldUpdateOperationsInput | string | null
    min_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_installments_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sku_order?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    business_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutBrandsNestedInput
  }

  export type brandsUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo_img?: NullableStringFieldUpdateOperationsInput | string | null
    min_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_installments_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sku_order?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    business_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateManyWithoutCategoriesNestedInput
    subcategories?: subcategoriesUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
    subcategories?: subcategoriesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type price_tablesUpdateWithoutCompanyInput = {
    description?: StringFieldUpdateOperationsInput | string
    price_adjustment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimum_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_tables_skus?: price_tables_skusUpdateManyWithoutPrice_tablesNestedInput
  }

  export type price_tablesUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price_adjustment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimum_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_tables_skus?: price_tables_skusUncheckedUpdateManyWithoutPrice_tablesNestedInput
  }

  export type price_tablesUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price_adjustment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimum_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type price_tables_skusCreateManySkusInput = {
    id?: number
    price?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string | null
    price_table_id: number
  }

  export type price_tables_skusUpdateWithoutSkusInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_tables?: price_tablesUpdateOneRequiredWithoutPrice_tables_skusNestedInput
  }

  export type price_tables_skusUncheckedUpdateWithoutSkusInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_table_id?: IntFieldUpdateOperationsInput | number
  }

  export type price_tables_skusUncheckedUpdateManyWithoutSkusInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_table_id?: IntFieldUpdateOperationsInput | number
  }

  export type productsCreateManySubcategoriesInput = {
    id?: number
    name: string
    reference: string
    type: $Enums.products_type
    gender: $Enums.products_gender
    prompt_delivery: boolean
    description?: string | null
    company_Id: number
    erp_id?: string | null
    brand_id: number
    deadline_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    category_id: number
    category_order?: number | null
    composition_data?: string | null
    technical_information?: string | null
    open_grid?: boolean
    ipi?: Decimal | DecimalJsLike | number | string | null
    is_discontinued?: boolean
    is_launch?: boolean
    is_visible?: boolean
    colection?: string | null
  }

  export type productsUpdateWithoutSubcategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
    company?: companiesUpdateOneRequiredWithoutProductsNestedInput
    brands?: brandsUpdateOneRequiredWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    variants?: variantsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutSubcategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    company_Id?: IntFieldUpdateOperationsInput | number
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    brand_id?: IntFieldUpdateOperationsInput | number
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
    variants?: variantsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutSubcategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    type?: Enumproducts_typeFieldUpdateOperationsInput | $Enums.products_type
    gender?: Enumproducts_genderFieldUpdateOperationsInput | $Enums.products_gender
    prompt_delivery?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    company_Id?: IntFieldUpdateOperationsInput | number
    erp_id?: NullableStringFieldUpdateOperationsInput | string | null
    brand_id?: IntFieldUpdateOperationsInput | number
    deadline_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: IntFieldUpdateOperationsInput | number
    category_order?: NullableIntFieldUpdateOperationsInput | number | null
    composition_data?: NullableStringFieldUpdateOperationsInput | string | null
    technical_information?: NullableStringFieldUpdateOperationsInput | string | null
    open_grid?: BoolFieldUpdateOperationsInput | boolean
    ipi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_discontinued?: BoolFieldUpdateOperationsInput | boolean
    is_launch?: BoolFieldUpdateOperationsInput | boolean
    is_visible?: BoolFieldUpdateOperationsInput | boolean
    colection?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skusCreateManyVariantsInput = {
    id?: number
    size: string
    stock: number
    price: Decimal | DecimalJsLike | number | string
    code: string
    min_quantity?: number | null
    multiple_quantity: number
    erpId?: string | null
    cest?: string | null
    height?: number | null
    length?: number | null
    ncm?: string | null
    weight?: number | null
    width?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type skusUpdateWithoutVariantsInput = {
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    code?: StringFieldUpdateOperationsInput | string
    min_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    multiple_quantity?: IntFieldUpdateOperationsInput | number
    erpId?: NullableStringFieldUpdateOperationsInput | string | null
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    ncm?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_tables_skus?: price_tables_skusUpdateManyWithoutSkusNestedInput
  }

  export type skusUncheckedUpdateWithoutVariantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    code?: StringFieldUpdateOperationsInput | string
    min_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    multiple_quantity?: IntFieldUpdateOperationsInput | number
    erpId?: NullableStringFieldUpdateOperationsInput | string | null
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    ncm?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price_tables_skus?: price_tables_skusUncheckedUpdateManyWithoutSkusNestedInput
  }

  export type skusUncheckedUpdateManyWithoutVariantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    code?: StringFieldUpdateOperationsInput | string
    min_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    multiple_quantity?: IntFieldUpdateOperationsInput | number
    erpId?: NullableStringFieldUpdateOperationsInput | string | null
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    ncm?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    width?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}