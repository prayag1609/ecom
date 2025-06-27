
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model kart
 * 
 */
export type kart = $Result.DefaultSelection<Prisma.$kartPayload>
/**
 * Model productCustomField
 * 
 */
export type productCustomField = $Result.DefaultSelection<Prisma.$productCustomFieldPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const role: {
  seller: 'seller',
  buyer: 'buyer'
};

export type role = (typeof role)[keyof typeof role]

}

export type role = $Enums.role

export const role: typeof $Enums.role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kart`: Exposes CRUD operations for the **kart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Karts
    * const karts = await prisma.kart.findMany()
    * ```
    */
  get kart(): Prisma.kartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productCustomField`: Exposes CRUD operations for the **productCustomField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCustomFields
    * const productCustomFields = await prisma.productCustomField.findMany()
    * ```
    */
  get productCustomField(): Prisma.productCustomFieldDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    user: 'user',
    product: 'product',
    kart: 'kart',
    productCustomField: 'productCustomField'
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
      modelProps: "user" | "product" | "kart" | "productCustomField"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      kart: {
        payload: Prisma.$kartPayload<ExtArgs>
        fields: Prisma.kartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kartPayload>
          }
          findFirst: {
            args: Prisma.kartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kartPayload>
          }
          findMany: {
            args: Prisma.kartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kartPayload>[]
          }
          create: {
            args: Prisma.kartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kartPayload>
          }
          createMany: {
            args: Prisma.kartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.kartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kartPayload>[]
          }
          delete: {
            args: Prisma.kartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kartPayload>
          }
          update: {
            args: Prisma.kartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kartPayload>
          }
          deleteMany: {
            args: Prisma.kartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.kartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kartPayload>[]
          }
          upsert: {
            args: Prisma.kartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kartPayload>
          }
          aggregate: {
            args: Prisma.KartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKart>
          }
          groupBy: {
            args: Prisma.kartGroupByArgs<ExtArgs>
            result: $Utils.Optional<KartGroupByOutputType>[]
          }
          count: {
            args: Prisma.kartCountArgs<ExtArgs>
            result: $Utils.Optional<KartCountAggregateOutputType> | number
          }
        }
      }
      productCustomField: {
        payload: Prisma.$productCustomFieldPayload<ExtArgs>
        fields: Prisma.productCustomFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productCustomFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productCustomFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productCustomFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productCustomFieldPayload>
          }
          findFirst: {
            args: Prisma.productCustomFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productCustomFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productCustomFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productCustomFieldPayload>
          }
          findMany: {
            args: Prisma.productCustomFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productCustomFieldPayload>[]
          }
          create: {
            args: Prisma.productCustomFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productCustomFieldPayload>
          }
          createMany: {
            args: Prisma.productCustomFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productCustomFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productCustomFieldPayload>[]
          }
          delete: {
            args: Prisma.productCustomFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productCustomFieldPayload>
          }
          update: {
            args: Prisma.productCustomFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productCustomFieldPayload>
          }
          deleteMany: {
            args: Prisma.productCustomFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productCustomFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productCustomFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productCustomFieldPayload>[]
          }
          upsert: {
            args: Prisma.productCustomFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productCustomFieldPayload>
          }
          aggregate: {
            args: Prisma.ProductCustomFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductCustomField>
          }
          groupBy: {
            args: Prisma.productCustomFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductCustomFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCustomFieldCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCustomFieldCountAggregateOutputType> | number
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
    user?: userOmit
    product?: productOmit
    kart?: kartOmit
    productCustomField?: productCustomFieldOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    product: number
    kart: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | UserCountOutputTypeCountProductArgs
    kart?: boolean | UserCountOutputTypeCountKartArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountKartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kartWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    kart: number
    productCustomField: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kart?: boolean | ProductCountOutputTypeCountKartArgs
    productCustomField?: boolean | ProductCountOutputTypeCountProductCustomFieldArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountKartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kartWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductCustomFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productCustomFieldWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    googleId: string | null
    name: string | null
    role: $Enums.role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    googleId: string | null
    name: string | null
    role: $Enums.role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    googleId: number
    name: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    googleId?: true
    name?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    googleId?: true
    name?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    googleId?: true
    name?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string | null
    googleId: string | null
    name: string
    role: $Enums.role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    googleId?: boolean
    name?: boolean
    role?: boolean
    product?: boolean | user$productArgs<ExtArgs>
    kart?: boolean | user$kartArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    googleId?: boolean
    name?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    googleId?: boolean
    name?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    googleId?: boolean
    name?: boolean
    role?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "googleId" | "name" | "role", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | user$productArgs<ExtArgs>
    kart?: boolean | user$kartArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      product: Prisma.$productPayload<ExtArgs>[]
      kart: Prisma.$kartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string | null
      googleId: string | null
      name: string
      role: $Enums.role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends user$productArgs<ExtArgs> = {}>(args?: Subset<T, user$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kart<T extends user$kartArgs<ExtArgs> = {}>(args?: Subset<T, user$kartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly googleId: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'role'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.product
   */
  export type user$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    cursor?: productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * user.kart
   */
  export type user$kartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kart
     */
    select?: kartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kart
     */
    omit?: kartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kartInclude<ExtArgs> | null
    where?: kartWhereInput
    orderBy?: kartOrderByWithRelationInput | kartOrderByWithRelationInput[]
    cursor?: kartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KartScalarFieldEnum | KartScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    quantity: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    quantity: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    description: string | null
    category: string | null
    quantity: number | null
    sellerId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    description: string | null
    category: string | null
    quantity: number | null
    sellerId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    price: number
    description: number
    category: number
    features: number
    image: number
    quantity: number
    sellerId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    category?: true
    quantity?: true
    sellerId?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    category?: true
    quantity?: true
    sellerId?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    category?: true
    features?: true
    image?: true
    quantity?: true
    sellerId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
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
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    price: number
    description: string
    category: string
    features: JsonValue
    image: JsonValue
    quantity: number
    sellerId: string
    createAt: Date
    updateAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    category?: boolean
    features?: boolean
    image?: boolean
    quantity?: boolean
    sellerId?: boolean
    createAt?: boolean
    updateAt?: boolean
    seller?: boolean | userDefaultArgs<ExtArgs>
    kart?: boolean | product$kartArgs<ExtArgs>
    productCustomField?: boolean | product$productCustomFieldArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    category?: boolean
    features?: boolean
    image?: boolean
    quantity?: boolean
    sellerId?: boolean
    createAt?: boolean
    updateAt?: boolean
    seller?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    category?: boolean
    features?: boolean
    image?: boolean
    quantity?: boolean
    sellerId?: boolean
    createAt?: boolean
    updateAt?: boolean
    seller?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    category?: boolean
    features?: boolean
    image?: boolean
    quantity?: boolean
    sellerId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type productOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "description" | "category" | "features" | "image" | "quantity" | "sellerId" | "createAt" | "updateAt", ExtArgs["result"]["product"]>
  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | userDefaultArgs<ExtArgs>
    kart?: boolean | product$kartArgs<ExtArgs>
    productCustomField?: boolean | product$productCustomFieldArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | userDefaultArgs<ExtArgs>
  }
  export type productIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      seller: Prisma.$userPayload<ExtArgs>
      kart: Prisma.$kartPayload<ExtArgs>[]
      productCustomField: Prisma.$productCustomFieldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      description: string
      category: string
      features: Prisma.JsonValue
      image: Prisma.JsonValue
      quantity: number
      sellerId: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productCreateManyAndReturnArgs>(args?: SelectSubset<T, productCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productUpdateManyAndReturnArgs>(args: SelectSubset<T, productUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
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
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seller<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kart<T extends product$kartArgs<ExtArgs> = {}>(args?: Subset<T, product$kartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productCustomField<T extends product$productCustomFieldArgs<ExtArgs> = {}>(args?: Subset<T, product$productCustomFieldArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productCustomFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the product model
   */
  interface productFieldRefs {
    readonly id: FieldRef<"product", 'String'>
    readonly name: FieldRef<"product", 'String'>
    readonly price: FieldRef<"product", 'Float'>
    readonly description: FieldRef<"product", 'String'>
    readonly category: FieldRef<"product", 'String'>
    readonly features: FieldRef<"product", 'Json'>
    readonly image: FieldRef<"product", 'Json'>
    readonly quantity: FieldRef<"product", 'Int'>
    readonly sellerId: FieldRef<"product", 'String'>
    readonly createAt: FieldRef<"product", 'DateTime'>
    readonly updateAt: FieldRef<"product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
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
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
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
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
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
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product createManyAndReturn
   */
  export type productCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product updateManyAndReturn
   */
  export type productUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * product.kart
   */
  export type product$kartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kart
     */
    select?: kartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kart
     */
    omit?: kartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kartInclude<ExtArgs> | null
    where?: kartWhereInput
    orderBy?: kartOrderByWithRelationInput | kartOrderByWithRelationInput[]
    cursor?: kartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KartScalarFieldEnum | KartScalarFieldEnum[]
  }

  /**
   * product.productCustomField
   */
  export type product$productCustomFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCustomField
     */
    select?: productCustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productCustomField
     */
    omit?: productCustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productCustomFieldInclude<ExtArgs> | null
    where?: productCustomFieldWhereInput
    orderBy?: productCustomFieldOrderByWithRelationInput | productCustomFieldOrderByWithRelationInput[]
    cursor?: productCustomFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductCustomFieldScalarFieldEnum | ProductCustomFieldScalarFieldEnum[]
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
  }


  /**
   * Model kart
   */

  export type AggregateKart = {
    _count: KartCountAggregateOutputType | null
    _avg: KartAvgAggregateOutputType | null
    _sum: KartSumAggregateOutputType | null
    _min: KartMinAggregateOutputType | null
    _max: KartMaxAggregateOutputType | null
  }

  export type KartAvgAggregateOutputType = {
    quantity: number | null
  }

  export type KartSumAggregateOutputType = {
    quantity: number | null
  }

  export type KartMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    quantity: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type KartMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    quantity: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type KartCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    quantity: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type KartAvgAggregateInputType = {
    quantity?: true
  }

  export type KartSumAggregateInputType = {
    quantity?: true
  }

  export type KartMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    quantity?: true
    createAt?: true
    updateAt?: true
  }

  export type KartMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    quantity?: true
    createAt?: true
    updateAt?: true
  }

  export type KartCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    quantity?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type KartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kart to aggregate.
     */
    where?: kartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of karts to fetch.
     */
    orderBy?: kartOrderByWithRelationInput | kartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` karts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` karts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned karts
    **/
    _count?: true | KartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KartMaxAggregateInputType
  }

  export type GetKartAggregateType<T extends KartAggregateArgs> = {
        [P in keyof T & keyof AggregateKart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKart[P]>
      : GetScalarType<T[P], AggregateKart[P]>
  }




  export type kartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kartWhereInput
    orderBy?: kartOrderByWithAggregationInput | kartOrderByWithAggregationInput[]
    by: KartScalarFieldEnum[] | KartScalarFieldEnum
    having?: kartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KartCountAggregateInputType | true
    _avg?: KartAvgAggregateInputType
    _sum?: KartSumAggregateInputType
    _min?: KartMinAggregateInputType
    _max?: KartMaxAggregateInputType
  }

  export type KartGroupByOutputType = {
    id: string
    userId: string
    productId: string
    quantity: number
    createAt: Date
    updateAt: Date
    _count: KartCountAggregateOutputType | null
    _avg: KartAvgAggregateOutputType | null
    _sum: KartSumAggregateOutputType | null
    _min: KartMinAggregateOutputType | null
    _max: KartMaxAggregateOutputType | null
  }

  type GetKartGroupByPayload<T extends kartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KartGroupByOutputType[P]>
            : GetScalarType<T[P], KartGroupByOutputType[P]>
        }
      >
    >


  export type kartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    quantity?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kart"]>

  export type kartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    quantity?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kart"]>

  export type kartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    quantity?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kart"]>

  export type kartSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    quantity?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type kartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "quantity" | "createAt" | "updateAt", ExtArgs["result"]["kart"]>
  export type kartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type kartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type kartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $kartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kart"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productId: string
      quantity: number
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["kart"]>
    composites: {}
  }

  type kartGetPayload<S extends boolean | null | undefined | kartDefaultArgs> = $Result.GetResult<Prisma.$kartPayload, S>

  type kartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KartCountAggregateInputType | true
    }

  export interface kartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kart'], meta: { name: 'kart' } }
    /**
     * Find zero or one Kart that matches the filter.
     * @param {kartFindUniqueArgs} args - Arguments to find a Kart
     * @example
     * // Get one Kart
     * const kart = await prisma.kart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kartFindUniqueArgs>(args: SelectSubset<T, kartFindUniqueArgs<ExtArgs>>): Prisma__kartClient<$Result.GetResult<Prisma.$kartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kartFindUniqueOrThrowArgs} args - Arguments to find a Kart
     * @example
     * // Get one Kart
     * const kart = await prisma.kart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kartFindUniqueOrThrowArgs>(args: SelectSubset<T, kartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kartClient<$Result.GetResult<Prisma.$kartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kartFindFirstArgs} args - Arguments to find a Kart
     * @example
     * // Get one Kart
     * const kart = await prisma.kart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kartFindFirstArgs>(args?: SelectSubset<T, kartFindFirstArgs<ExtArgs>>): Prisma__kartClient<$Result.GetResult<Prisma.$kartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kartFindFirstOrThrowArgs} args - Arguments to find a Kart
     * @example
     * // Get one Kart
     * const kart = await prisma.kart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kartFindFirstOrThrowArgs>(args?: SelectSubset<T, kartFindFirstOrThrowArgs<ExtArgs>>): Prisma__kartClient<$Result.GetResult<Prisma.$kartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Karts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Karts
     * const karts = await prisma.kart.findMany()
     * 
     * // Get first 10 Karts
     * const karts = await prisma.kart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kartWithIdOnly = await prisma.kart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends kartFindManyArgs>(args?: SelectSubset<T, kartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kart.
     * @param {kartCreateArgs} args - Arguments to create a Kart.
     * @example
     * // Create one Kart
     * const Kart = await prisma.kart.create({
     *   data: {
     *     // ... data to create a Kart
     *   }
     * })
     * 
     */
    create<T extends kartCreateArgs>(args: SelectSubset<T, kartCreateArgs<ExtArgs>>): Prisma__kartClient<$Result.GetResult<Prisma.$kartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Karts.
     * @param {kartCreateManyArgs} args - Arguments to create many Karts.
     * @example
     * // Create many Karts
     * const kart = await prisma.kart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kartCreateManyArgs>(args?: SelectSubset<T, kartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Karts and returns the data saved in the database.
     * @param {kartCreateManyAndReturnArgs} args - Arguments to create many Karts.
     * @example
     * // Create many Karts
     * const kart = await prisma.kart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Karts and only return the `id`
     * const kartWithIdOnly = await prisma.kart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends kartCreateManyAndReturnArgs>(args?: SelectSubset<T, kartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kart.
     * @param {kartDeleteArgs} args - Arguments to delete one Kart.
     * @example
     * // Delete one Kart
     * const Kart = await prisma.kart.delete({
     *   where: {
     *     // ... filter to delete one Kart
     *   }
     * })
     * 
     */
    delete<T extends kartDeleteArgs>(args: SelectSubset<T, kartDeleteArgs<ExtArgs>>): Prisma__kartClient<$Result.GetResult<Prisma.$kartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kart.
     * @param {kartUpdateArgs} args - Arguments to update one Kart.
     * @example
     * // Update one Kart
     * const kart = await prisma.kart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kartUpdateArgs>(args: SelectSubset<T, kartUpdateArgs<ExtArgs>>): Prisma__kartClient<$Result.GetResult<Prisma.$kartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Karts.
     * @param {kartDeleteManyArgs} args - Arguments to filter Karts to delete.
     * @example
     * // Delete a few Karts
     * const { count } = await prisma.kart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kartDeleteManyArgs>(args?: SelectSubset<T, kartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Karts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Karts
     * const kart = await prisma.kart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kartUpdateManyArgs>(args: SelectSubset<T, kartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Karts and returns the data updated in the database.
     * @param {kartUpdateManyAndReturnArgs} args - Arguments to update many Karts.
     * @example
     * // Update many Karts
     * const kart = await prisma.kart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Karts and only return the `id`
     * const kartWithIdOnly = await prisma.kart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends kartUpdateManyAndReturnArgs>(args: SelectSubset<T, kartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kart.
     * @param {kartUpsertArgs} args - Arguments to update or create a Kart.
     * @example
     * // Update or create a Kart
     * const kart = await prisma.kart.upsert({
     *   create: {
     *     // ... data to create a Kart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kart we want to update
     *   }
     * })
     */
    upsert<T extends kartUpsertArgs>(args: SelectSubset<T, kartUpsertArgs<ExtArgs>>): Prisma__kartClient<$Result.GetResult<Prisma.$kartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Karts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kartCountArgs} args - Arguments to filter Karts to count.
     * @example
     * // Count the number of Karts
     * const count = await prisma.kart.count({
     *   where: {
     *     // ... the filter for the Karts we want to count
     *   }
     * })
    **/
    count<T extends kartCountArgs>(
      args?: Subset<T, kartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KartAggregateArgs>(args: Subset<T, KartAggregateArgs>): Prisma.PrismaPromise<GetKartAggregateType<T>>

    /**
     * Group by Kart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kartGroupByArgs} args - Group by arguments.
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
      T extends kartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kartGroupByArgs['orderBy'] }
        : { orderBy?: kartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, kartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kart model
   */
  readonly fields: kartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the kart model
   */
  interface kartFieldRefs {
    readonly id: FieldRef<"kart", 'String'>
    readonly userId: FieldRef<"kart", 'String'>
    readonly productId: FieldRef<"kart", 'String'>
    readonly quantity: FieldRef<"kart", 'Int'>
    readonly createAt: FieldRef<"kart", 'DateTime'>
    readonly updateAt: FieldRef<"kart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * kart findUnique
   */
  export type kartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kart
     */
    select?: kartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kart
     */
    omit?: kartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kartInclude<ExtArgs> | null
    /**
     * Filter, which kart to fetch.
     */
    where: kartWhereUniqueInput
  }

  /**
   * kart findUniqueOrThrow
   */
  export type kartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kart
     */
    select?: kartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kart
     */
    omit?: kartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kartInclude<ExtArgs> | null
    /**
     * Filter, which kart to fetch.
     */
    where: kartWhereUniqueInput
  }

  /**
   * kart findFirst
   */
  export type kartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kart
     */
    select?: kartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kart
     */
    omit?: kartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kartInclude<ExtArgs> | null
    /**
     * Filter, which kart to fetch.
     */
    where?: kartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of karts to fetch.
     */
    orderBy?: kartOrderByWithRelationInput | kartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for karts.
     */
    cursor?: kartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` karts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` karts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of karts.
     */
    distinct?: KartScalarFieldEnum | KartScalarFieldEnum[]
  }

  /**
   * kart findFirstOrThrow
   */
  export type kartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kart
     */
    select?: kartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kart
     */
    omit?: kartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kartInclude<ExtArgs> | null
    /**
     * Filter, which kart to fetch.
     */
    where?: kartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of karts to fetch.
     */
    orderBy?: kartOrderByWithRelationInput | kartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for karts.
     */
    cursor?: kartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` karts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` karts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of karts.
     */
    distinct?: KartScalarFieldEnum | KartScalarFieldEnum[]
  }

  /**
   * kart findMany
   */
  export type kartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kart
     */
    select?: kartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kart
     */
    omit?: kartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kartInclude<ExtArgs> | null
    /**
     * Filter, which karts to fetch.
     */
    where?: kartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of karts to fetch.
     */
    orderBy?: kartOrderByWithRelationInput | kartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing karts.
     */
    cursor?: kartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` karts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` karts.
     */
    skip?: number
    distinct?: KartScalarFieldEnum | KartScalarFieldEnum[]
  }

  /**
   * kart create
   */
  export type kartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kart
     */
    select?: kartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kart
     */
    omit?: kartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kartInclude<ExtArgs> | null
    /**
     * The data needed to create a kart.
     */
    data: XOR<kartCreateInput, kartUncheckedCreateInput>
  }

  /**
   * kart createMany
   */
  export type kartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many karts.
     */
    data: kartCreateManyInput | kartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kart createManyAndReturn
   */
  export type kartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kart
     */
    select?: kartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kart
     */
    omit?: kartOmit<ExtArgs> | null
    /**
     * The data used to create many karts.
     */
    data: kartCreateManyInput | kartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * kart update
   */
  export type kartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kart
     */
    select?: kartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kart
     */
    omit?: kartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kartInclude<ExtArgs> | null
    /**
     * The data needed to update a kart.
     */
    data: XOR<kartUpdateInput, kartUncheckedUpdateInput>
    /**
     * Choose, which kart to update.
     */
    where: kartWhereUniqueInput
  }

  /**
   * kart updateMany
   */
  export type kartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update karts.
     */
    data: XOR<kartUpdateManyMutationInput, kartUncheckedUpdateManyInput>
    /**
     * Filter which karts to update
     */
    where?: kartWhereInput
    /**
     * Limit how many karts to update.
     */
    limit?: number
  }

  /**
   * kart updateManyAndReturn
   */
  export type kartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kart
     */
    select?: kartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kart
     */
    omit?: kartOmit<ExtArgs> | null
    /**
     * The data used to update karts.
     */
    data: XOR<kartUpdateManyMutationInput, kartUncheckedUpdateManyInput>
    /**
     * Filter which karts to update
     */
    where?: kartWhereInput
    /**
     * Limit how many karts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * kart upsert
   */
  export type kartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kart
     */
    select?: kartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kart
     */
    omit?: kartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kartInclude<ExtArgs> | null
    /**
     * The filter to search for the kart to update in case it exists.
     */
    where: kartWhereUniqueInput
    /**
     * In case the kart found by the `where` argument doesn't exist, create a new kart with this data.
     */
    create: XOR<kartCreateInput, kartUncheckedCreateInput>
    /**
     * In case the kart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kartUpdateInput, kartUncheckedUpdateInput>
  }

  /**
   * kart delete
   */
  export type kartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kart
     */
    select?: kartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kart
     */
    omit?: kartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kartInclude<ExtArgs> | null
    /**
     * Filter which kart to delete.
     */
    where: kartWhereUniqueInput
  }

  /**
   * kart deleteMany
   */
  export type kartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which karts to delete
     */
    where?: kartWhereInput
    /**
     * Limit how many karts to delete.
     */
    limit?: number
  }

  /**
   * kart without action
   */
  export type kartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kart
     */
    select?: kartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kart
     */
    omit?: kartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kartInclude<ExtArgs> | null
  }


  /**
   * Model productCustomField
   */

  export type AggregateProductCustomField = {
    _count: ProductCustomFieldCountAggregateOutputType | null
    _min: ProductCustomFieldMinAggregateOutputType | null
    _max: ProductCustomFieldMaxAggregateOutputType | null
  }

  export type ProductCustomFieldMinAggregateOutputType = {
    id: string | null
    seller_id: string | null
    product_id: string | null
    field_name: string | null
    field_type: string | null
    isRequired: boolean | null
    status: boolean | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductCustomFieldMaxAggregateOutputType = {
    id: string | null
    seller_id: string | null
    product_id: string | null
    field_name: string | null
    field_type: string | null
    isRequired: boolean | null
    status: boolean | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductCustomFieldCountAggregateOutputType = {
    id: number
    seller_id: number
    product_id: number
    field_name: number
    field_type: number
    isRequired: number
    options: number
    status: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ProductCustomFieldMinAggregateInputType = {
    id?: true
    seller_id?: true
    product_id?: true
    field_name?: true
    field_type?: true
    isRequired?: true
    status?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductCustomFieldMaxAggregateInputType = {
    id?: true
    seller_id?: true
    product_id?: true
    field_name?: true
    field_type?: true
    isRequired?: true
    status?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductCustomFieldCountAggregateInputType = {
    id?: true
    seller_id?: true
    product_id?: true
    field_name?: true
    field_type?: true
    isRequired?: true
    options?: true
    status?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ProductCustomFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productCustomField to aggregate.
     */
    where?: productCustomFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productCustomFields to fetch.
     */
    orderBy?: productCustomFieldOrderByWithRelationInput | productCustomFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productCustomFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productCustomFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productCustomFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productCustomFields
    **/
    _count?: true | ProductCustomFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCustomFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCustomFieldMaxAggregateInputType
  }

  export type GetProductCustomFieldAggregateType<T extends ProductCustomFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCustomField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCustomField[P]>
      : GetScalarType<T[P], AggregateProductCustomField[P]>
  }




  export type productCustomFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productCustomFieldWhereInput
    orderBy?: productCustomFieldOrderByWithAggregationInput | productCustomFieldOrderByWithAggregationInput[]
    by: ProductCustomFieldScalarFieldEnum[] | ProductCustomFieldScalarFieldEnum
    having?: productCustomFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCustomFieldCountAggregateInputType | true
    _min?: ProductCustomFieldMinAggregateInputType
    _max?: ProductCustomFieldMaxAggregateInputType
  }

  export type ProductCustomFieldGroupByOutputType = {
    id: string
    seller_id: string
    product_id: string
    field_name: string
    field_type: string
    isRequired: boolean
    options: string[]
    status: boolean
    createAt: Date
    updateAt: Date
    _count: ProductCustomFieldCountAggregateOutputType | null
    _min: ProductCustomFieldMinAggregateOutputType | null
    _max: ProductCustomFieldMaxAggregateOutputType | null
  }

  type GetProductCustomFieldGroupByPayload<T extends productCustomFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCustomFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCustomFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCustomFieldGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCustomFieldGroupByOutputType[P]>
        }
      >
    >


  export type productCustomFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seller_id?: boolean
    product_id?: boolean
    field_name?: boolean
    field_type?: boolean
    isRequired?: boolean
    options?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCustomField"]>

  export type productCustomFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seller_id?: boolean
    product_id?: boolean
    field_name?: boolean
    field_type?: boolean
    isRequired?: boolean
    options?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCustomField"]>

  export type productCustomFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seller_id?: boolean
    product_id?: boolean
    field_name?: boolean
    field_type?: boolean
    isRequired?: boolean
    options?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCustomField"]>

  export type productCustomFieldSelectScalar = {
    id?: boolean
    seller_id?: boolean
    product_id?: boolean
    field_name?: boolean
    field_type?: boolean
    isRequired?: boolean
    options?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type productCustomFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seller_id" | "product_id" | "field_name" | "field_type" | "isRequired" | "options" | "status" | "createAt" | "updateAt", ExtArgs["result"]["productCustomField"]>
  export type productCustomFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type productCustomFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type productCustomFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $productCustomFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productCustomField"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      seller_id: string
      product_id: string
      field_name: string
      field_type: string
      isRequired: boolean
      options: string[]
      status: boolean
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["productCustomField"]>
    composites: {}
  }

  type productCustomFieldGetPayload<S extends boolean | null | undefined | productCustomFieldDefaultArgs> = $Result.GetResult<Prisma.$productCustomFieldPayload, S>

  type productCustomFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productCustomFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCustomFieldCountAggregateInputType | true
    }

  export interface productCustomFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productCustomField'], meta: { name: 'productCustomField' } }
    /**
     * Find zero or one ProductCustomField that matches the filter.
     * @param {productCustomFieldFindUniqueArgs} args - Arguments to find a ProductCustomField
     * @example
     * // Get one ProductCustomField
     * const productCustomField = await prisma.productCustomField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productCustomFieldFindUniqueArgs>(args: SelectSubset<T, productCustomFieldFindUniqueArgs<ExtArgs>>): Prisma__productCustomFieldClient<$Result.GetResult<Prisma.$productCustomFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductCustomField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productCustomFieldFindUniqueOrThrowArgs} args - Arguments to find a ProductCustomField
     * @example
     * // Get one ProductCustomField
     * const productCustomField = await prisma.productCustomField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productCustomFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, productCustomFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productCustomFieldClient<$Result.GetResult<Prisma.$productCustomFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCustomField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCustomFieldFindFirstArgs} args - Arguments to find a ProductCustomField
     * @example
     * // Get one ProductCustomField
     * const productCustomField = await prisma.productCustomField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productCustomFieldFindFirstArgs>(args?: SelectSubset<T, productCustomFieldFindFirstArgs<ExtArgs>>): Prisma__productCustomFieldClient<$Result.GetResult<Prisma.$productCustomFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCustomField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCustomFieldFindFirstOrThrowArgs} args - Arguments to find a ProductCustomField
     * @example
     * // Get one ProductCustomField
     * const productCustomField = await prisma.productCustomField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productCustomFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, productCustomFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__productCustomFieldClient<$Result.GetResult<Prisma.$productCustomFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductCustomFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCustomFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCustomFields
     * const productCustomFields = await prisma.productCustomField.findMany()
     * 
     * // Get first 10 ProductCustomFields
     * const productCustomFields = await prisma.productCustomField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCustomFieldWithIdOnly = await prisma.productCustomField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productCustomFieldFindManyArgs>(args?: SelectSubset<T, productCustomFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productCustomFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductCustomField.
     * @param {productCustomFieldCreateArgs} args - Arguments to create a ProductCustomField.
     * @example
     * // Create one ProductCustomField
     * const ProductCustomField = await prisma.productCustomField.create({
     *   data: {
     *     // ... data to create a ProductCustomField
     *   }
     * })
     * 
     */
    create<T extends productCustomFieldCreateArgs>(args: SelectSubset<T, productCustomFieldCreateArgs<ExtArgs>>): Prisma__productCustomFieldClient<$Result.GetResult<Prisma.$productCustomFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductCustomFields.
     * @param {productCustomFieldCreateManyArgs} args - Arguments to create many ProductCustomFields.
     * @example
     * // Create many ProductCustomFields
     * const productCustomField = await prisma.productCustomField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCustomFieldCreateManyArgs>(args?: SelectSubset<T, productCustomFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductCustomFields and returns the data saved in the database.
     * @param {productCustomFieldCreateManyAndReturnArgs} args - Arguments to create many ProductCustomFields.
     * @example
     * // Create many ProductCustomFields
     * const productCustomField = await prisma.productCustomField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductCustomFields and only return the `id`
     * const productCustomFieldWithIdOnly = await prisma.productCustomField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productCustomFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, productCustomFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productCustomFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductCustomField.
     * @param {productCustomFieldDeleteArgs} args - Arguments to delete one ProductCustomField.
     * @example
     * // Delete one ProductCustomField
     * const ProductCustomField = await prisma.productCustomField.delete({
     *   where: {
     *     // ... filter to delete one ProductCustomField
     *   }
     * })
     * 
     */
    delete<T extends productCustomFieldDeleteArgs>(args: SelectSubset<T, productCustomFieldDeleteArgs<ExtArgs>>): Prisma__productCustomFieldClient<$Result.GetResult<Prisma.$productCustomFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductCustomField.
     * @param {productCustomFieldUpdateArgs} args - Arguments to update one ProductCustomField.
     * @example
     * // Update one ProductCustomField
     * const productCustomField = await prisma.productCustomField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productCustomFieldUpdateArgs>(args: SelectSubset<T, productCustomFieldUpdateArgs<ExtArgs>>): Prisma__productCustomFieldClient<$Result.GetResult<Prisma.$productCustomFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductCustomFields.
     * @param {productCustomFieldDeleteManyArgs} args - Arguments to filter ProductCustomFields to delete.
     * @example
     * // Delete a few ProductCustomFields
     * const { count } = await prisma.productCustomField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productCustomFieldDeleteManyArgs>(args?: SelectSubset<T, productCustomFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCustomFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCustomFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCustomFields
     * const productCustomField = await prisma.productCustomField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productCustomFieldUpdateManyArgs>(args: SelectSubset<T, productCustomFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCustomFields and returns the data updated in the database.
     * @param {productCustomFieldUpdateManyAndReturnArgs} args - Arguments to update many ProductCustomFields.
     * @example
     * // Update many ProductCustomFields
     * const productCustomField = await prisma.productCustomField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductCustomFields and only return the `id`
     * const productCustomFieldWithIdOnly = await prisma.productCustomField.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productCustomFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, productCustomFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productCustomFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductCustomField.
     * @param {productCustomFieldUpsertArgs} args - Arguments to update or create a ProductCustomField.
     * @example
     * // Update or create a ProductCustomField
     * const productCustomField = await prisma.productCustomField.upsert({
     *   create: {
     *     // ... data to create a ProductCustomField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCustomField we want to update
     *   }
     * })
     */
    upsert<T extends productCustomFieldUpsertArgs>(args: SelectSubset<T, productCustomFieldUpsertArgs<ExtArgs>>): Prisma__productCustomFieldClient<$Result.GetResult<Prisma.$productCustomFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductCustomFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCustomFieldCountArgs} args - Arguments to filter ProductCustomFields to count.
     * @example
     * // Count the number of ProductCustomFields
     * const count = await prisma.productCustomField.count({
     *   where: {
     *     // ... the filter for the ProductCustomFields we want to count
     *   }
     * })
    **/
    count<T extends productCustomFieldCountArgs>(
      args?: Subset<T, productCustomFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCustomFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCustomField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCustomFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductCustomFieldAggregateArgs>(args: Subset<T, ProductCustomFieldAggregateArgs>): Prisma.PrismaPromise<GetProductCustomFieldAggregateType<T>>

    /**
     * Group by ProductCustomField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCustomFieldGroupByArgs} args - Group by arguments.
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
      T extends productCustomFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productCustomFieldGroupByArgs['orderBy'] }
        : { orderBy?: productCustomFieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productCustomFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCustomFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productCustomField model
   */
  readonly fields: productCustomFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productCustomField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productCustomFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the productCustomField model
   */
  interface productCustomFieldFieldRefs {
    readonly id: FieldRef<"productCustomField", 'String'>
    readonly seller_id: FieldRef<"productCustomField", 'String'>
    readonly product_id: FieldRef<"productCustomField", 'String'>
    readonly field_name: FieldRef<"productCustomField", 'String'>
    readonly field_type: FieldRef<"productCustomField", 'String'>
    readonly isRequired: FieldRef<"productCustomField", 'Boolean'>
    readonly options: FieldRef<"productCustomField", 'String[]'>
    readonly status: FieldRef<"productCustomField", 'Boolean'>
    readonly createAt: FieldRef<"productCustomField", 'DateTime'>
    readonly updateAt: FieldRef<"productCustomField", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * productCustomField findUnique
   */
  export type productCustomFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCustomField
     */
    select?: productCustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productCustomField
     */
    omit?: productCustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productCustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which productCustomField to fetch.
     */
    where: productCustomFieldWhereUniqueInput
  }

  /**
   * productCustomField findUniqueOrThrow
   */
  export type productCustomFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCustomField
     */
    select?: productCustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productCustomField
     */
    omit?: productCustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productCustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which productCustomField to fetch.
     */
    where: productCustomFieldWhereUniqueInput
  }

  /**
   * productCustomField findFirst
   */
  export type productCustomFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCustomField
     */
    select?: productCustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productCustomField
     */
    omit?: productCustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productCustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which productCustomField to fetch.
     */
    where?: productCustomFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productCustomFields to fetch.
     */
    orderBy?: productCustomFieldOrderByWithRelationInput | productCustomFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productCustomFields.
     */
    cursor?: productCustomFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productCustomFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productCustomFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productCustomFields.
     */
    distinct?: ProductCustomFieldScalarFieldEnum | ProductCustomFieldScalarFieldEnum[]
  }

  /**
   * productCustomField findFirstOrThrow
   */
  export type productCustomFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCustomField
     */
    select?: productCustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productCustomField
     */
    omit?: productCustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productCustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which productCustomField to fetch.
     */
    where?: productCustomFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productCustomFields to fetch.
     */
    orderBy?: productCustomFieldOrderByWithRelationInput | productCustomFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productCustomFields.
     */
    cursor?: productCustomFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productCustomFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productCustomFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productCustomFields.
     */
    distinct?: ProductCustomFieldScalarFieldEnum | ProductCustomFieldScalarFieldEnum[]
  }

  /**
   * productCustomField findMany
   */
  export type productCustomFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCustomField
     */
    select?: productCustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productCustomField
     */
    omit?: productCustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productCustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which productCustomFields to fetch.
     */
    where?: productCustomFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productCustomFields to fetch.
     */
    orderBy?: productCustomFieldOrderByWithRelationInput | productCustomFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productCustomFields.
     */
    cursor?: productCustomFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productCustomFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productCustomFields.
     */
    skip?: number
    distinct?: ProductCustomFieldScalarFieldEnum | ProductCustomFieldScalarFieldEnum[]
  }

  /**
   * productCustomField create
   */
  export type productCustomFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCustomField
     */
    select?: productCustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productCustomField
     */
    omit?: productCustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productCustomFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a productCustomField.
     */
    data: XOR<productCustomFieldCreateInput, productCustomFieldUncheckedCreateInput>
  }

  /**
   * productCustomField createMany
   */
  export type productCustomFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productCustomFields.
     */
    data: productCustomFieldCreateManyInput | productCustomFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productCustomField createManyAndReturn
   */
  export type productCustomFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCustomField
     */
    select?: productCustomFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productCustomField
     */
    omit?: productCustomFieldOmit<ExtArgs> | null
    /**
     * The data used to create many productCustomFields.
     */
    data: productCustomFieldCreateManyInput | productCustomFieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productCustomFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * productCustomField update
   */
  export type productCustomFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCustomField
     */
    select?: productCustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productCustomField
     */
    omit?: productCustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productCustomFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a productCustomField.
     */
    data: XOR<productCustomFieldUpdateInput, productCustomFieldUncheckedUpdateInput>
    /**
     * Choose, which productCustomField to update.
     */
    where: productCustomFieldWhereUniqueInput
  }

  /**
   * productCustomField updateMany
   */
  export type productCustomFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productCustomFields.
     */
    data: XOR<productCustomFieldUpdateManyMutationInput, productCustomFieldUncheckedUpdateManyInput>
    /**
     * Filter which productCustomFields to update
     */
    where?: productCustomFieldWhereInput
    /**
     * Limit how many productCustomFields to update.
     */
    limit?: number
  }

  /**
   * productCustomField updateManyAndReturn
   */
  export type productCustomFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCustomField
     */
    select?: productCustomFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productCustomField
     */
    omit?: productCustomFieldOmit<ExtArgs> | null
    /**
     * The data used to update productCustomFields.
     */
    data: XOR<productCustomFieldUpdateManyMutationInput, productCustomFieldUncheckedUpdateManyInput>
    /**
     * Filter which productCustomFields to update
     */
    where?: productCustomFieldWhereInput
    /**
     * Limit how many productCustomFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productCustomFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * productCustomField upsert
   */
  export type productCustomFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCustomField
     */
    select?: productCustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productCustomField
     */
    omit?: productCustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productCustomFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the productCustomField to update in case it exists.
     */
    where: productCustomFieldWhereUniqueInput
    /**
     * In case the productCustomField found by the `where` argument doesn't exist, create a new productCustomField with this data.
     */
    create: XOR<productCustomFieldCreateInput, productCustomFieldUncheckedCreateInput>
    /**
     * In case the productCustomField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productCustomFieldUpdateInput, productCustomFieldUncheckedUpdateInput>
  }

  /**
   * productCustomField delete
   */
  export type productCustomFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCustomField
     */
    select?: productCustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productCustomField
     */
    omit?: productCustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productCustomFieldInclude<ExtArgs> | null
    /**
     * Filter which productCustomField to delete.
     */
    where: productCustomFieldWhereUniqueInput
  }

  /**
   * productCustomField deleteMany
   */
  export type productCustomFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productCustomFields to delete
     */
    where?: productCustomFieldWhereInput
    /**
     * Limit how many productCustomFields to delete.
     */
    limit?: number
  }

  /**
   * productCustomField without action
   */
  export type productCustomFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productCustomField
     */
    select?: productCustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productCustomField
     */
    omit?: productCustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productCustomFieldInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    googleId: 'googleId',
    name: 'name',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description',
    category: 'category',
    features: 'features',
    image: 'image',
    quantity: 'quantity',
    sellerId: 'sellerId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const KartScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    quantity: 'quantity',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type KartScalarFieldEnum = (typeof KartScalarFieldEnum)[keyof typeof KartScalarFieldEnum]


  export const ProductCustomFieldScalarFieldEnum: {
    id: 'id',
    seller_id: 'seller_id',
    product_id: 'product_id',
    field_name: 'field_name',
    field_type: 'field_type',
    isRequired: 'isRequired',
    options: 'options',
    status: 'status',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ProductCustomFieldScalarFieldEnum = (typeof ProductCustomFieldScalarFieldEnum)[keyof typeof ProductCustomFieldScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'role'
   */
  export type EnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role'>
    


  /**
   * Reference to a field of type 'role[]'
   */
  export type ListEnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringNullableFilter<"user"> | string | null
    googleId?: StringNullableFilter<"user"> | string | null
    name?: StringFilter<"user"> | string
    role?: EnumroleFilter<"user"> | $Enums.role
    product?: ProductListRelationFilter
    kart?: KartListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    name?: SortOrder
    role?: SortOrder
    product?: productOrderByRelationAggregateInput
    kart?: kartOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringNullableFilter<"user"> | string | null
    googleId?: StringNullableFilter<"user"> | string | null
    name?: StringFilter<"user"> | string
    role?: EnumroleFilter<"user"> | $Enums.role
    product?: ProductListRelationFilter
    kart?: KartListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    name?: SortOrder
    role?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringNullableWithAggregatesFilter<"user"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"user"> | string | null
    name?: StringWithAggregatesFilter<"user"> | string
    role?: EnumroleWithAggregatesFilter<"user"> | $Enums.role
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    id?: StringFilter<"product"> | string
    name?: StringFilter<"product"> | string
    price?: FloatFilter<"product"> | number
    description?: StringFilter<"product"> | string
    category?: StringFilter<"product"> | string
    features?: JsonFilter<"product">
    image?: JsonFilter<"product">
    quantity?: IntFilter<"product"> | number
    sellerId?: StringFilter<"product"> | string
    createAt?: DateTimeFilter<"product"> | Date | string
    updateAt?: DateTimeFilter<"product"> | Date | string
    seller?: XOR<UserScalarRelationFilter, userWhereInput>
    kart?: KartListRelationFilter
    productCustomField?: ProductCustomFieldListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    category?: SortOrder
    features?: SortOrder
    image?: SortOrder
    quantity?: SortOrder
    sellerId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    seller?: userOrderByWithRelationInput
    kart?: kartOrderByRelationAggregateInput
    productCustomField?: productCustomFieldOrderByRelationAggregateInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    name?: StringFilter<"product"> | string
    price?: FloatFilter<"product"> | number
    description?: StringFilter<"product"> | string
    category?: StringFilter<"product"> | string
    features?: JsonFilter<"product">
    image?: JsonFilter<"product">
    quantity?: IntFilter<"product"> | number
    sellerId?: StringFilter<"product"> | string
    createAt?: DateTimeFilter<"product"> | Date | string
    updateAt?: DateTimeFilter<"product"> | Date | string
    seller?: XOR<UserScalarRelationFilter, userWhereInput>
    kart?: KartListRelationFilter
    productCustomField?: ProductCustomFieldListRelationFilter
  }, "id">

  export type productOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    category?: SortOrder
    features?: SortOrder
    image?: SortOrder
    quantity?: SortOrder
    sellerId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"product"> | string
    name?: StringWithAggregatesFilter<"product"> | string
    price?: FloatWithAggregatesFilter<"product"> | number
    description?: StringWithAggregatesFilter<"product"> | string
    category?: StringWithAggregatesFilter<"product"> | string
    features?: JsonWithAggregatesFilter<"product">
    image?: JsonWithAggregatesFilter<"product">
    quantity?: IntWithAggregatesFilter<"product"> | number
    sellerId?: StringWithAggregatesFilter<"product"> | string
    createAt?: DateTimeWithAggregatesFilter<"product"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"product"> | Date | string
  }

  export type kartWhereInput = {
    AND?: kartWhereInput | kartWhereInput[]
    OR?: kartWhereInput[]
    NOT?: kartWhereInput | kartWhereInput[]
    id?: StringFilter<"kart"> | string
    userId?: StringFilter<"kart"> | string
    productId?: StringFilter<"kart"> | string
    quantity?: IntFilter<"kart"> | number
    createAt?: DateTimeFilter<"kart"> | Date | string
    updateAt?: DateTimeFilter<"kart"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type kartOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    user?: userOrderByWithRelationInput
    product?: productOrderByWithRelationInput
  }

  export type kartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: kartWhereInput | kartWhereInput[]
    OR?: kartWhereInput[]
    NOT?: kartWhereInput | kartWhereInput[]
    userId?: StringFilter<"kart"> | string
    productId?: StringFilter<"kart"> | string
    quantity?: IntFilter<"kart"> | number
    createAt?: DateTimeFilter<"kart"> | Date | string
    updateAt?: DateTimeFilter<"kart"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "id">

  export type kartOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: kartCountOrderByAggregateInput
    _avg?: kartAvgOrderByAggregateInput
    _max?: kartMaxOrderByAggregateInput
    _min?: kartMinOrderByAggregateInput
    _sum?: kartSumOrderByAggregateInput
  }

  export type kartScalarWhereWithAggregatesInput = {
    AND?: kartScalarWhereWithAggregatesInput | kartScalarWhereWithAggregatesInput[]
    OR?: kartScalarWhereWithAggregatesInput[]
    NOT?: kartScalarWhereWithAggregatesInput | kartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"kart"> | string
    userId?: StringWithAggregatesFilter<"kart"> | string
    productId?: StringWithAggregatesFilter<"kart"> | string
    quantity?: IntWithAggregatesFilter<"kart"> | number
    createAt?: DateTimeWithAggregatesFilter<"kart"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"kart"> | Date | string
  }

  export type productCustomFieldWhereInput = {
    AND?: productCustomFieldWhereInput | productCustomFieldWhereInput[]
    OR?: productCustomFieldWhereInput[]
    NOT?: productCustomFieldWhereInput | productCustomFieldWhereInput[]
    id?: StringFilter<"productCustomField"> | string
    seller_id?: StringFilter<"productCustomField"> | string
    product_id?: StringFilter<"productCustomField"> | string
    field_name?: StringFilter<"productCustomField"> | string
    field_type?: StringFilter<"productCustomField"> | string
    isRequired?: BoolFilter<"productCustomField"> | boolean
    options?: StringNullableListFilter<"productCustomField">
    status?: BoolFilter<"productCustomField"> | boolean
    createAt?: DateTimeFilter<"productCustomField"> | Date | string
    updateAt?: DateTimeFilter<"productCustomField"> | Date | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type productCustomFieldOrderByWithRelationInput = {
    id?: SortOrder
    seller_id?: SortOrder
    product_id?: SortOrder
    field_name?: SortOrder
    field_type?: SortOrder
    isRequired?: SortOrder
    options?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    product?: productOrderByWithRelationInput
  }

  export type productCustomFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productCustomFieldWhereInput | productCustomFieldWhereInput[]
    OR?: productCustomFieldWhereInput[]
    NOT?: productCustomFieldWhereInput | productCustomFieldWhereInput[]
    seller_id?: StringFilter<"productCustomField"> | string
    product_id?: StringFilter<"productCustomField"> | string
    field_name?: StringFilter<"productCustomField"> | string
    field_type?: StringFilter<"productCustomField"> | string
    isRequired?: BoolFilter<"productCustomField"> | boolean
    options?: StringNullableListFilter<"productCustomField">
    status?: BoolFilter<"productCustomField"> | boolean
    createAt?: DateTimeFilter<"productCustomField"> | Date | string
    updateAt?: DateTimeFilter<"productCustomField"> | Date | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "id">

  export type productCustomFieldOrderByWithAggregationInput = {
    id?: SortOrder
    seller_id?: SortOrder
    product_id?: SortOrder
    field_name?: SortOrder
    field_type?: SortOrder
    isRequired?: SortOrder
    options?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: productCustomFieldCountOrderByAggregateInput
    _max?: productCustomFieldMaxOrderByAggregateInput
    _min?: productCustomFieldMinOrderByAggregateInput
  }

  export type productCustomFieldScalarWhereWithAggregatesInput = {
    AND?: productCustomFieldScalarWhereWithAggregatesInput | productCustomFieldScalarWhereWithAggregatesInput[]
    OR?: productCustomFieldScalarWhereWithAggregatesInput[]
    NOT?: productCustomFieldScalarWhereWithAggregatesInput | productCustomFieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"productCustomField"> | string
    seller_id?: StringWithAggregatesFilter<"productCustomField"> | string
    product_id?: StringWithAggregatesFilter<"productCustomField"> | string
    field_name?: StringWithAggregatesFilter<"productCustomField"> | string
    field_type?: StringWithAggregatesFilter<"productCustomField"> | string
    isRequired?: BoolWithAggregatesFilter<"productCustomField"> | boolean
    options?: StringNullableListFilter<"productCustomField">
    status?: BoolWithAggregatesFilter<"productCustomField"> | boolean
    createAt?: DateTimeWithAggregatesFilter<"productCustomField"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"productCustomField"> | Date | string
  }

  export type userCreateInput = {
    id?: string
    email: string
    password?: string | null
    googleId?: string | null
    name: string
    role: $Enums.role
    product?: productCreateNestedManyWithoutSellerInput
    kart?: kartCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    email: string
    password?: string | null
    googleId?: string | null
    name: string
    role: $Enums.role
    product?: productUncheckedCreateNestedManyWithoutSellerInput
    kart?: kartUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    product?: productUpdateManyWithoutSellerNestedInput
    kart?: kartUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    product?: productUncheckedUpdateManyWithoutSellerNestedInput
    kart?: kartUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    email: string
    password?: string | null
    googleId?: string | null
    name: string
    role: $Enums.role
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
  }

  export type productCreateInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    features: JsonNullValueInput | InputJsonValue
    image: JsonNullValueInput | InputJsonValue
    quantity: number
    createAt?: Date | string
    updateAt?: Date | string
    seller: userCreateNestedOneWithoutProductInput
    kart?: kartCreateNestedManyWithoutProductInput
    productCustomField?: productCustomFieldCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    features: JsonNullValueInput | InputJsonValue
    image: JsonNullValueInput | InputJsonValue
    quantity: number
    sellerId: string
    createAt?: Date | string
    updateAt?: Date | string
    kart?: kartUncheckedCreateNestedManyWithoutProductInput
    productCustomField?: productCustomFieldUncheckedCreateNestedManyWithoutProductInput
  }

  export type productUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    image?: JsonNullValueInput | InputJsonValue
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: userUpdateOneRequiredWithoutProductNestedInput
    kart?: kartUpdateManyWithoutProductNestedInput
    productCustomField?: productCustomFieldUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    image?: JsonNullValueInput | InputJsonValue
    quantity?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kart?: kartUncheckedUpdateManyWithoutProductNestedInput
    productCustomField?: productCustomFieldUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateManyInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    features: JsonNullValueInput | InputJsonValue
    image: JsonNullValueInput | InputJsonValue
    quantity: number
    sellerId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type productUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    image?: JsonNullValueInput | InputJsonValue
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    image?: JsonNullValueInput | InputJsonValue
    quantity?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kartCreateInput = {
    id?: string
    quantity: number
    createAt?: Date | string
    updateAt?: Date | string
    user: userCreateNestedOneWithoutKartInput
    product: productCreateNestedOneWithoutKartInput
  }

  export type kartUncheckedCreateInput = {
    id?: string
    userId: string
    productId: string
    quantity: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type kartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutKartNestedInput
    product?: productUpdateOneRequiredWithoutKartNestedInput
  }

  export type kartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kartCreateManyInput = {
    id?: string
    userId: string
    productId: string
    quantity: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type kartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productCustomFieldCreateInput = {
    id?: string
    seller_id: string
    field_name: string
    field_type: string
    isRequired?: boolean
    options?: productCustomFieldCreateoptionsInput | string[]
    status?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    product: productCreateNestedOneWithoutProductCustomFieldInput
  }

  export type productCustomFieldUncheckedCreateInput = {
    id?: string
    seller_id: string
    product_id: string
    field_name: string
    field_type: string
    isRequired?: boolean
    options?: productCustomFieldCreateoptionsInput | string[]
    status?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type productCustomFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_type?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    options?: productCustomFieldUpdateoptionsInput | string[]
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateOneRequiredWithoutProductCustomFieldNestedInput
  }

  export type productCustomFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_type?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    options?: productCustomFieldUpdateoptionsInput | string[]
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productCustomFieldCreateManyInput = {
    id?: string
    seller_id: string
    product_id: string
    field_name: string
    field_type: string
    isRequired?: boolean
    options?: productCustomFieldCreateoptionsInput | string[]
    status?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type productCustomFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_type?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    options?: productCustomFieldUpdateoptionsInput | string[]
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productCustomFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_type?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    options?: productCustomFieldUpdateoptionsInput | string[]
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type ProductListRelationFilter = {
    every?: productWhereInput
    some?: productWhereInput
    none?: productWhereInput
  }

  export type KartListRelationFilter = {
    every?: kartWhereInput
    some?: kartWhereInput
    none?: kartWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type productOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type kartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleId?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleId?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleId?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type ProductCustomFieldListRelationFilter = {
    every?: productCustomFieldWhereInput
    some?: productCustomFieldWhereInput
    none?: productCustomFieldWhereInput
  }

  export type productCustomFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    category?: SortOrder
    features?: SortOrder
    image?: SortOrder
    quantity?: SortOrder
    sellerId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    sellerId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
    sellerId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type kartCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type kartAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type kartMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type kartMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type kartSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type productCustomFieldCountOrderByAggregateInput = {
    id?: SortOrder
    seller_id?: SortOrder
    product_id?: SortOrder
    field_name?: SortOrder
    field_type?: SortOrder
    isRequired?: SortOrder
    options?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type productCustomFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    seller_id?: SortOrder
    product_id?: SortOrder
    field_name?: SortOrder
    field_type?: SortOrder
    isRequired?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type productCustomFieldMinOrderByAggregateInput = {
    id?: SortOrder
    seller_id?: SortOrder
    product_id?: SortOrder
    field_name?: SortOrder
    field_type?: SortOrder
    isRequired?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type productCreateNestedManyWithoutSellerInput = {
    create?: XOR<productCreateWithoutSellerInput, productUncheckedCreateWithoutSellerInput> | productCreateWithoutSellerInput[] | productUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: productCreateOrConnectWithoutSellerInput | productCreateOrConnectWithoutSellerInput[]
    createMany?: productCreateManySellerInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type kartCreateNestedManyWithoutUserInput = {
    create?: XOR<kartCreateWithoutUserInput, kartUncheckedCreateWithoutUserInput> | kartCreateWithoutUserInput[] | kartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: kartCreateOrConnectWithoutUserInput | kartCreateOrConnectWithoutUserInput[]
    createMany?: kartCreateManyUserInputEnvelope
    connect?: kartWhereUniqueInput | kartWhereUniqueInput[]
  }

  export type productUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<productCreateWithoutSellerInput, productUncheckedCreateWithoutSellerInput> | productCreateWithoutSellerInput[] | productUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: productCreateOrConnectWithoutSellerInput | productCreateOrConnectWithoutSellerInput[]
    createMany?: productCreateManySellerInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type kartUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<kartCreateWithoutUserInput, kartUncheckedCreateWithoutUserInput> | kartCreateWithoutUserInput[] | kartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: kartCreateOrConnectWithoutUserInput | kartCreateOrConnectWithoutUserInput[]
    createMany?: kartCreateManyUserInputEnvelope
    connect?: kartWhereUniqueInput | kartWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumroleFieldUpdateOperationsInput = {
    set?: $Enums.role
  }

  export type productUpdateManyWithoutSellerNestedInput = {
    create?: XOR<productCreateWithoutSellerInput, productUncheckedCreateWithoutSellerInput> | productCreateWithoutSellerInput[] | productUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: productCreateOrConnectWithoutSellerInput | productCreateOrConnectWithoutSellerInput[]
    upsert?: productUpsertWithWhereUniqueWithoutSellerInput | productUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: productCreateManySellerInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutSellerInput | productUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: productUpdateManyWithWhereWithoutSellerInput | productUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type kartUpdateManyWithoutUserNestedInput = {
    create?: XOR<kartCreateWithoutUserInput, kartUncheckedCreateWithoutUserInput> | kartCreateWithoutUserInput[] | kartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: kartCreateOrConnectWithoutUserInput | kartCreateOrConnectWithoutUserInput[]
    upsert?: kartUpsertWithWhereUniqueWithoutUserInput | kartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: kartCreateManyUserInputEnvelope
    set?: kartWhereUniqueInput | kartWhereUniqueInput[]
    disconnect?: kartWhereUniqueInput | kartWhereUniqueInput[]
    delete?: kartWhereUniqueInput | kartWhereUniqueInput[]
    connect?: kartWhereUniqueInput | kartWhereUniqueInput[]
    update?: kartUpdateWithWhereUniqueWithoutUserInput | kartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: kartUpdateManyWithWhereWithoutUserInput | kartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: kartScalarWhereInput | kartScalarWhereInput[]
  }

  export type productUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<productCreateWithoutSellerInput, productUncheckedCreateWithoutSellerInput> | productCreateWithoutSellerInput[] | productUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: productCreateOrConnectWithoutSellerInput | productCreateOrConnectWithoutSellerInput[]
    upsert?: productUpsertWithWhereUniqueWithoutSellerInput | productUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: productCreateManySellerInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutSellerInput | productUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: productUpdateManyWithWhereWithoutSellerInput | productUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type kartUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<kartCreateWithoutUserInput, kartUncheckedCreateWithoutUserInput> | kartCreateWithoutUserInput[] | kartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: kartCreateOrConnectWithoutUserInput | kartCreateOrConnectWithoutUserInput[]
    upsert?: kartUpsertWithWhereUniqueWithoutUserInput | kartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: kartCreateManyUserInputEnvelope
    set?: kartWhereUniqueInput | kartWhereUniqueInput[]
    disconnect?: kartWhereUniqueInput | kartWhereUniqueInput[]
    delete?: kartWhereUniqueInput | kartWhereUniqueInput[]
    connect?: kartWhereUniqueInput | kartWhereUniqueInput[]
    update?: kartUpdateWithWhereUniqueWithoutUserInput | kartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: kartUpdateManyWithWhereWithoutUserInput | kartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: kartScalarWhereInput | kartScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutProductInput = {
    create?: XOR<userCreateWithoutProductInput, userUncheckedCreateWithoutProductInput>
    connectOrCreate?: userCreateOrConnectWithoutProductInput
    connect?: userWhereUniqueInput
  }

  export type kartCreateNestedManyWithoutProductInput = {
    create?: XOR<kartCreateWithoutProductInput, kartUncheckedCreateWithoutProductInput> | kartCreateWithoutProductInput[] | kartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: kartCreateOrConnectWithoutProductInput | kartCreateOrConnectWithoutProductInput[]
    createMany?: kartCreateManyProductInputEnvelope
    connect?: kartWhereUniqueInput | kartWhereUniqueInput[]
  }

  export type productCustomFieldCreateNestedManyWithoutProductInput = {
    create?: XOR<productCustomFieldCreateWithoutProductInput, productCustomFieldUncheckedCreateWithoutProductInput> | productCustomFieldCreateWithoutProductInput[] | productCustomFieldUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productCustomFieldCreateOrConnectWithoutProductInput | productCustomFieldCreateOrConnectWithoutProductInput[]
    createMany?: productCustomFieldCreateManyProductInputEnvelope
    connect?: productCustomFieldWhereUniqueInput | productCustomFieldWhereUniqueInput[]
  }

  export type kartUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<kartCreateWithoutProductInput, kartUncheckedCreateWithoutProductInput> | kartCreateWithoutProductInput[] | kartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: kartCreateOrConnectWithoutProductInput | kartCreateOrConnectWithoutProductInput[]
    createMany?: kartCreateManyProductInputEnvelope
    connect?: kartWhereUniqueInput | kartWhereUniqueInput[]
  }

  export type productCustomFieldUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<productCustomFieldCreateWithoutProductInput, productCustomFieldUncheckedCreateWithoutProductInput> | productCustomFieldCreateWithoutProductInput[] | productCustomFieldUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productCustomFieldCreateOrConnectWithoutProductInput | productCustomFieldCreateOrConnectWithoutProductInput[]
    createMany?: productCustomFieldCreateManyProductInputEnvelope
    connect?: productCustomFieldWhereUniqueInput | productCustomFieldWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
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

  export type userUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<userCreateWithoutProductInput, userUncheckedCreateWithoutProductInput>
    connectOrCreate?: userCreateOrConnectWithoutProductInput
    upsert?: userUpsertWithoutProductInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutProductInput, userUpdateWithoutProductInput>, userUncheckedUpdateWithoutProductInput>
  }

  export type kartUpdateManyWithoutProductNestedInput = {
    create?: XOR<kartCreateWithoutProductInput, kartUncheckedCreateWithoutProductInput> | kartCreateWithoutProductInput[] | kartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: kartCreateOrConnectWithoutProductInput | kartCreateOrConnectWithoutProductInput[]
    upsert?: kartUpsertWithWhereUniqueWithoutProductInput | kartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: kartCreateManyProductInputEnvelope
    set?: kartWhereUniqueInput | kartWhereUniqueInput[]
    disconnect?: kartWhereUniqueInput | kartWhereUniqueInput[]
    delete?: kartWhereUniqueInput | kartWhereUniqueInput[]
    connect?: kartWhereUniqueInput | kartWhereUniqueInput[]
    update?: kartUpdateWithWhereUniqueWithoutProductInput | kartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: kartUpdateManyWithWhereWithoutProductInput | kartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: kartScalarWhereInput | kartScalarWhereInput[]
  }

  export type productCustomFieldUpdateManyWithoutProductNestedInput = {
    create?: XOR<productCustomFieldCreateWithoutProductInput, productCustomFieldUncheckedCreateWithoutProductInput> | productCustomFieldCreateWithoutProductInput[] | productCustomFieldUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productCustomFieldCreateOrConnectWithoutProductInput | productCustomFieldCreateOrConnectWithoutProductInput[]
    upsert?: productCustomFieldUpsertWithWhereUniqueWithoutProductInput | productCustomFieldUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: productCustomFieldCreateManyProductInputEnvelope
    set?: productCustomFieldWhereUniqueInput | productCustomFieldWhereUniqueInput[]
    disconnect?: productCustomFieldWhereUniqueInput | productCustomFieldWhereUniqueInput[]
    delete?: productCustomFieldWhereUniqueInput | productCustomFieldWhereUniqueInput[]
    connect?: productCustomFieldWhereUniqueInput | productCustomFieldWhereUniqueInput[]
    update?: productCustomFieldUpdateWithWhereUniqueWithoutProductInput | productCustomFieldUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: productCustomFieldUpdateManyWithWhereWithoutProductInput | productCustomFieldUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: productCustomFieldScalarWhereInput | productCustomFieldScalarWhereInput[]
  }

  export type kartUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<kartCreateWithoutProductInput, kartUncheckedCreateWithoutProductInput> | kartCreateWithoutProductInput[] | kartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: kartCreateOrConnectWithoutProductInput | kartCreateOrConnectWithoutProductInput[]
    upsert?: kartUpsertWithWhereUniqueWithoutProductInput | kartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: kartCreateManyProductInputEnvelope
    set?: kartWhereUniqueInput | kartWhereUniqueInput[]
    disconnect?: kartWhereUniqueInput | kartWhereUniqueInput[]
    delete?: kartWhereUniqueInput | kartWhereUniqueInput[]
    connect?: kartWhereUniqueInput | kartWhereUniqueInput[]
    update?: kartUpdateWithWhereUniqueWithoutProductInput | kartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: kartUpdateManyWithWhereWithoutProductInput | kartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: kartScalarWhereInput | kartScalarWhereInput[]
  }

  export type productCustomFieldUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<productCustomFieldCreateWithoutProductInput, productCustomFieldUncheckedCreateWithoutProductInput> | productCustomFieldCreateWithoutProductInput[] | productCustomFieldUncheckedCreateWithoutProductInput[]
    connectOrCreate?: productCustomFieldCreateOrConnectWithoutProductInput | productCustomFieldCreateOrConnectWithoutProductInput[]
    upsert?: productCustomFieldUpsertWithWhereUniqueWithoutProductInput | productCustomFieldUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: productCustomFieldCreateManyProductInputEnvelope
    set?: productCustomFieldWhereUniqueInput | productCustomFieldWhereUniqueInput[]
    disconnect?: productCustomFieldWhereUniqueInput | productCustomFieldWhereUniqueInput[]
    delete?: productCustomFieldWhereUniqueInput | productCustomFieldWhereUniqueInput[]
    connect?: productCustomFieldWhereUniqueInput | productCustomFieldWhereUniqueInput[]
    update?: productCustomFieldUpdateWithWhereUniqueWithoutProductInput | productCustomFieldUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: productCustomFieldUpdateManyWithWhereWithoutProductInput | productCustomFieldUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: productCustomFieldScalarWhereInput | productCustomFieldScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutKartInput = {
    create?: XOR<userCreateWithoutKartInput, userUncheckedCreateWithoutKartInput>
    connectOrCreate?: userCreateOrConnectWithoutKartInput
    connect?: userWhereUniqueInput
  }

  export type productCreateNestedOneWithoutKartInput = {
    create?: XOR<productCreateWithoutKartInput, productUncheckedCreateWithoutKartInput>
    connectOrCreate?: productCreateOrConnectWithoutKartInput
    connect?: productWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutKartNestedInput = {
    create?: XOR<userCreateWithoutKartInput, userUncheckedCreateWithoutKartInput>
    connectOrCreate?: userCreateOrConnectWithoutKartInput
    upsert?: userUpsertWithoutKartInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutKartInput, userUpdateWithoutKartInput>, userUncheckedUpdateWithoutKartInput>
  }

  export type productUpdateOneRequiredWithoutKartNestedInput = {
    create?: XOR<productCreateWithoutKartInput, productUncheckedCreateWithoutKartInput>
    connectOrCreate?: productCreateOrConnectWithoutKartInput
    upsert?: productUpsertWithoutKartInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutKartInput, productUpdateWithoutKartInput>, productUncheckedUpdateWithoutKartInput>
  }

  export type productCustomFieldCreateoptionsInput = {
    set: string[]
  }

  export type productCreateNestedOneWithoutProductCustomFieldInput = {
    create?: XOR<productCreateWithoutProductCustomFieldInput, productUncheckedCreateWithoutProductCustomFieldInput>
    connectOrCreate?: productCreateOrConnectWithoutProductCustomFieldInput
    connect?: productWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type productCustomFieldUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type productUpdateOneRequiredWithoutProductCustomFieldNestedInput = {
    create?: XOR<productCreateWithoutProductCustomFieldInput, productUncheckedCreateWithoutProductCustomFieldInput>
    connectOrCreate?: productCreateOrConnectWithoutProductCustomFieldInput
    upsert?: productUpsertWithoutProductCustomFieldInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutProductCustomFieldInput, productUpdateWithoutProductCustomFieldInput>, productUncheckedUpdateWithoutProductCustomFieldInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type productCreateWithoutSellerInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    features: JsonNullValueInput | InputJsonValue
    image: JsonNullValueInput | InputJsonValue
    quantity: number
    createAt?: Date | string
    updateAt?: Date | string
    kart?: kartCreateNestedManyWithoutProductInput
    productCustomField?: productCustomFieldCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutSellerInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    features: JsonNullValueInput | InputJsonValue
    image: JsonNullValueInput | InputJsonValue
    quantity: number
    createAt?: Date | string
    updateAt?: Date | string
    kart?: kartUncheckedCreateNestedManyWithoutProductInput
    productCustomField?: productCustomFieldUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutSellerInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutSellerInput, productUncheckedCreateWithoutSellerInput>
  }

  export type productCreateManySellerInputEnvelope = {
    data: productCreateManySellerInput | productCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type kartCreateWithoutUserInput = {
    id?: string
    quantity: number
    createAt?: Date | string
    updateAt?: Date | string
    product: productCreateNestedOneWithoutKartInput
  }

  export type kartUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    quantity: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type kartCreateOrConnectWithoutUserInput = {
    where: kartWhereUniqueInput
    create: XOR<kartCreateWithoutUserInput, kartUncheckedCreateWithoutUserInput>
  }

  export type kartCreateManyUserInputEnvelope = {
    data: kartCreateManyUserInput | kartCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type productUpsertWithWhereUniqueWithoutSellerInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutSellerInput, productUncheckedUpdateWithoutSellerInput>
    create: XOR<productCreateWithoutSellerInput, productUncheckedCreateWithoutSellerInput>
  }

  export type productUpdateWithWhereUniqueWithoutSellerInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutSellerInput, productUncheckedUpdateWithoutSellerInput>
  }

  export type productUpdateManyWithWhereWithoutSellerInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutSellerInput>
  }

  export type productScalarWhereInput = {
    AND?: productScalarWhereInput | productScalarWhereInput[]
    OR?: productScalarWhereInput[]
    NOT?: productScalarWhereInput | productScalarWhereInput[]
    id?: StringFilter<"product"> | string
    name?: StringFilter<"product"> | string
    price?: FloatFilter<"product"> | number
    description?: StringFilter<"product"> | string
    category?: StringFilter<"product"> | string
    features?: JsonFilter<"product">
    image?: JsonFilter<"product">
    quantity?: IntFilter<"product"> | number
    sellerId?: StringFilter<"product"> | string
    createAt?: DateTimeFilter<"product"> | Date | string
    updateAt?: DateTimeFilter<"product"> | Date | string
  }

  export type kartUpsertWithWhereUniqueWithoutUserInput = {
    where: kartWhereUniqueInput
    update: XOR<kartUpdateWithoutUserInput, kartUncheckedUpdateWithoutUserInput>
    create: XOR<kartCreateWithoutUserInput, kartUncheckedCreateWithoutUserInput>
  }

  export type kartUpdateWithWhereUniqueWithoutUserInput = {
    where: kartWhereUniqueInput
    data: XOR<kartUpdateWithoutUserInput, kartUncheckedUpdateWithoutUserInput>
  }

  export type kartUpdateManyWithWhereWithoutUserInput = {
    where: kartScalarWhereInput
    data: XOR<kartUpdateManyMutationInput, kartUncheckedUpdateManyWithoutUserInput>
  }

  export type kartScalarWhereInput = {
    AND?: kartScalarWhereInput | kartScalarWhereInput[]
    OR?: kartScalarWhereInput[]
    NOT?: kartScalarWhereInput | kartScalarWhereInput[]
    id?: StringFilter<"kart"> | string
    userId?: StringFilter<"kart"> | string
    productId?: StringFilter<"kart"> | string
    quantity?: IntFilter<"kart"> | number
    createAt?: DateTimeFilter<"kart"> | Date | string
    updateAt?: DateTimeFilter<"kart"> | Date | string
  }

  export type userCreateWithoutProductInput = {
    id?: string
    email: string
    password?: string | null
    googleId?: string | null
    name: string
    role: $Enums.role
    kart?: kartCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutProductInput = {
    id?: string
    email: string
    password?: string | null
    googleId?: string | null
    name: string
    role: $Enums.role
    kart?: kartUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutProductInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutProductInput, userUncheckedCreateWithoutProductInput>
  }

  export type kartCreateWithoutProductInput = {
    id?: string
    quantity: number
    createAt?: Date | string
    updateAt?: Date | string
    user: userCreateNestedOneWithoutKartInput
  }

  export type kartUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    quantity: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type kartCreateOrConnectWithoutProductInput = {
    where: kartWhereUniqueInput
    create: XOR<kartCreateWithoutProductInput, kartUncheckedCreateWithoutProductInput>
  }

  export type kartCreateManyProductInputEnvelope = {
    data: kartCreateManyProductInput | kartCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type productCustomFieldCreateWithoutProductInput = {
    id?: string
    seller_id: string
    field_name: string
    field_type: string
    isRequired?: boolean
    options?: productCustomFieldCreateoptionsInput | string[]
    status?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type productCustomFieldUncheckedCreateWithoutProductInput = {
    id?: string
    seller_id: string
    field_name: string
    field_type: string
    isRequired?: boolean
    options?: productCustomFieldCreateoptionsInput | string[]
    status?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type productCustomFieldCreateOrConnectWithoutProductInput = {
    where: productCustomFieldWhereUniqueInput
    create: XOR<productCustomFieldCreateWithoutProductInput, productCustomFieldUncheckedCreateWithoutProductInput>
  }

  export type productCustomFieldCreateManyProductInputEnvelope = {
    data: productCustomFieldCreateManyProductInput | productCustomFieldCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutProductInput = {
    update: XOR<userUpdateWithoutProductInput, userUncheckedUpdateWithoutProductInput>
    create: XOR<userCreateWithoutProductInput, userUncheckedCreateWithoutProductInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutProductInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutProductInput, userUncheckedUpdateWithoutProductInput>
  }

  export type userUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    kart?: kartUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    kart?: kartUncheckedUpdateManyWithoutUserNestedInput
  }

  export type kartUpsertWithWhereUniqueWithoutProductInput = {
    where: kartWhereUniqueInput
    update: XOR<kartUpdateWithoutProductInput, kartUncheckedUpdateWithoutProductInput>
    create: XOR<kartCreateWithoutProductInput, kartUncheckedCreateWithoutProductInput>
  }

  export type kartUpdateWithWhereUniqueWithoutProductInput = {
    where: kartWhereUniqueInput
    data: XOR<kartUpdateWithoutProductInput, kartUncheckedUpdateWithoutProductInput>
  }

  export type kartUpdateManyWithWhereWithoutProductInput = {
    where: kartScalarWhereInput
    data: XOR<kartUpdateManyMutationInput, kartUncheckedUpdateManyWithoutProductInput>
  }

  export type productCustomFieldUpsertWithWhereUniqueWithoutProductInput = {
    where: productCustomFieldWhereUniqueInput
    update: XOR<productCustomFieldUpdateWithoutProductInput, productCustomFieldUncheckedUpdateWithoutProductInput>
    create: XOR<productCustomFieldCreateWithoutProductInput, productCustomFieldUncheckedCreateWithoutProductInput>
  }

  export type productCustomFieldUpdateWithWhereUniqueWithoutProductInput = {
    where: productCustomFieldWhereUniqueInput
    data: XOR<productCustomFieldUpdateWithoutProductInput, productCustomFieldUncheckedUpdateWithoutProductInput>
  }

  export type productCustomFieldUpdateManyWithWhereWithoutProductInput = {
    where: productCustomFieldScalarWhereInput
    data: XOR<productCustomFieldUpdateManyMutationInput, productCustomFieldUncheckedUpdateManyWithoutProductInput>
  }

  export type productCustomFieldScalarWhereInput = {
    AND?: productCustomFieldScalarWhereInput | productCustomFieldScalarWhereInput[]
    OR?: productCustomFieldScalarWhereInput[]
    NOT?: productCustomFieldScalarWhereInput | productCustomFieldScalarWhereInput[]
    id?: StringFilter<"productCustomField"> | string
    seller_id?: StringFilter<"productCustomField"> | string
    product_id?: StringFilter<"productCustomField"> | string
    field_name?: StringFilter<"productCustomField"> | string
    field_type?: StringFilter<"productCustomField"> | string
    isRequired?: BoolFilter<"productCustomField"> | boolean
    options?: StringNullableListFilter<"productCustomField">
    status?: BoolFilter<"productCustomField"> | boolean
    createAt?: DateTimeFilter<"productCustomField"> | Date | string
    updateAt?: DateTimeFilter<"productCustomField"> | Date | string
  }

  export type userCreateWithoutKartInput = {
    id?: string
    email: string
    password?: string | null
    googleId?: string | null
    name: string
    role: $Enums.role
    product?: productCreateNestedManyWithoutSellerInput
  }

  export type userUncheckedCreateWithoutKartInput = {
    id?: string
    email: string
    password?: string | null
    googleId?: string | null
    name: string
    role: $Enums.role
    product?: productUncheckedCreateNestedManyWithoutSellerInput
  }

  export type userCreateOrConnectWithoutKartInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutKartInput, userUncheckedCreateWithoutKartInput>
  }

  export type productCreateWithoutKartInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    features: JsonNullValueInput | InputJsonValue
    image: JsonNullValueInput | InputJsonValue
    quantity: number
    createAt?: Date | string
    updateAt?: Date | string
    seller: userCreateNestedOneWithoutProductInput
    productCustomField?: productCustomFieldCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutKartInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    features: JsonNullValueInput | InputJsonValue
    image: JsonNullValueInput | InputJsonValue
    quantity: number
    sellerId: string
    createAt?: Date | string
    updateAt?: Date | string
    productCustomField?: productCustomFieldUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutKartInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutKartInput, productUncheckedCreateWithoutKartInput>
  }

  export type userUpsertWithoutKartInput = {
    update: XOR<userUpdateWithoutKartInput, userUncheckedUpdateWithoutKartInput>
    create: XOR<userCreateWithoutKartInput, userUncheckedCreateWithoutKartInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutKartInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutKartInput, userUncheckedUpdateWithoutKartInput>
  }

  export type userUpdateWithoutKartInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    product?: productUpdateManyWithoutSellerNestedInput
  }

  export type userUncheckedUpdateWithoutKartInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    product?: productUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type productUpsertWithoutKartInput = {
    update: XOR<productUpdateWithoutKartInput, productUncheckedUpdateWithoutKartInput>
    create: XOR<productCreateWithoutKartInput, productUncheckedCreateWithoutKartInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutKartInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutKartInput, productUncheckedUpdateWithoutKartInput>
  }

  export type productUpdateWithoutKartInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    image?: JsonNullValueInput | InputJsonValue
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: userUpdateOneRequiredWithoutProductNestedInput
    productCustomField?: productCustomFieldUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutKartInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    image?: JsonNullValueInput | InputJsonValue
    quantity?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productCustomField?: productCustomFieldUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateWithoutProductCustomFieldInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    features: JsonNullValueInput | InputJsonValue
    image: JsonNullValueInput | InputJsonValue
    quantity: number
    createAt?: Date | string
    updateAt?: Date | string
    seller: userCreateNestedOneWithoutProductInput
    kart?: kartCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutProductCustomFieldInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    features: JsonNullValueInput | InputJsonValue
    image: JsonNullValueInput | InputJsonValue
    quantity: number
    sellerId: string
    createAt?: Date | string
    updateAt?: Date | string
    kart?: kartUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutProductCustomFieldInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutProductCustomFieldInput, productUncheckedCreateWithoutProductCustomFieldInput>
  }

  export type productUpsertWithoutProductCustomFieldInput = {
    update: XOR<productUpdateWithoutProductCustomFieldInput, productUncheckedUpdateWithoutProductCustomFieldInput>
    create: XOR<productCreateWithoutProductCustomFieldInput, productUncheckedCreateWithoutProductCustomFieldInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutProductCustomFieldInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutProductCustomFieldInput, productUncheckedUpdateWithoutProductCustomFieldInput>
  }

  export type productUpdateWithoutProductCustomFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    image?: JsonNullValueInput | InputJsonValue
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: userUpdateOneRequiredWithoutProductNestedInput
    kart?: kartUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutProductCustomFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    image?: JsonNullValueInput | InputJsonValue
    quantity?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kart?: kartUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateManySellerInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    features: JsonNullValueInput | InputJsonValue
    image: JsonNullValueInput | InputJsonValue
    quantity: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type kartCreateManyUserInput = {
    id?: string
    productId: string
    quantity: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type productUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    image?: JsonNullValueInput | InputJsonValue
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kart?: kartUpdateManyWithoutProductNestedInput
    productCustomField?: productCustomFieldUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    image?: JsonNullValueInput | InputJsonValue
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kart?: kartUncheckedUpdateManyWithoutProductNestedInput
    productCustomField?: productCustomFieldUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    image?: JsonNullValueInput | InputJsonValue
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kartUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateOneRequiredWithoutKartNestedInput
  }

  export type kartUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kartUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kartCreateManyProductInput = {
    id?: string
    userId: string
    quantity: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type productCustomFieldCreateManyProductInput = {
    id?: string
    seller_id: string
    field_name: string
    field_type: string
    isRequired?: boolean
    options?: productCustomFieldCreateoptionsInput | string[]
    status?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type kartUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutKartNestedInput
  }

  export type kartUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kartUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productCustomFieldUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_type?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    options?: productCustomFieldUpdateoptionsInput | string[]
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productCustomFieldUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_type?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    options?: productCustomFieldUpdateoptionsInput | string[]
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productCustomFieldUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_type?: StringFieldUpdateOperationsInput | string
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    options?: productCustomFieldUpdateoptionsInput | string[]
    status?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
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