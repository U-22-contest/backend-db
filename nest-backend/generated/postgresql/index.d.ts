
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Follow
 * 
 */
export type Follow = $Result.DefaultSelection<Prisma.$FollowPayload>
/**
 * Model ViewHistory
 * 
 */
export type ViewHistory = $Result.DefaultSelection<Prisma.$ViewHistoryPayload>
/**
 * Model Novel
 * 
 */
export type Novel = $Result.DefaultSelection<Prisma.$NovelPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model LikeNovel
 * 
 */
export type LikeNovel = $Result.DefaultSelection<Prisma.$LikeNovelPayload>
/**
 * Model LikeSentence
 * 
 */
export type LikeSentence = $Result.DefaultSelection<Prisma.$LikeSentencePayload>
/**
 * Model Bookmark
 * 
 */
export type Bookmark = $Result.DefaultSelection<Prisma.$BookmarkPayload>

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follow`: Exposes CRUD operations for the **Follow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follow.findMany()
    * ```
    */
  get follow(): Prisma.FollowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viewHistory`: Exposes CRUD operations for the **ViewHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViewHistories
    * const viewHistories = await prisma.viewHistory.findMany()
    * ```
    */
  get viewHistory(): Prisma.ViewHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.novel`: Exposes CRUD operations for the **Novel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Novels
    * const novels = await prisma.novel.findMany()
    * ```
    */
  get novel(): Prisma.NovelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likeNovel`: Exposes CRUD operations for the **LikeNovel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikeNovels
    * const likeNovels = await prisma.likeNovel.findMany()
    * ```
    */
  get likeNovel(): Prisma.LikeNovelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likeSentence`: Exposes CRUD operations for the **LikeSentence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikeSentences
    * const likeSentences = await prisma.likeSentence.findMany()
    * ```
    */
  get likeSentence(): Prisma.LikeSentenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookmark`: Exposes CRUD operations for the **Bookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookmarks
    * const bookmarks = await prisma.bookmark.findMany()
    * ```
    */
  get bookmark(): Prisma.BookmarkDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    User: 'User',
    Follow: 'Follow',
    ViewHistory: 'ViewHistory',
    Novel: 'Novel',
    Category: 'Category',
    Comment: 'Comment',
    LikeNovel: 'LikeNovel',
    LikeSentence: 'LikeSentence',
    Bookmark: 'Bookmark'
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
      modelProps: "user" | "follow" | "viewHistory" | "novel" | "category" | "comment" | "likeNovel" | "likeSentence" | "bookmark"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Follow: {
        payload: Prisma.$FollowPayload<ExtArgs>
        fields: Prisma.FollowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findFirst: {
            args: Prisma.FollowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findMany: {
            args: Prisma.FollowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          create: {
            args: Prisma.FollowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          createMany: {
            args: Prisma.FollowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          delete: {
            args: Prisma.FollowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          update: {
            args: Prisma.FollowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          deleteMany: {
            args: Prisma.FollowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FollowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          upsert: {
            args: Prisma.FollowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          aggregate: {
            args: Prisma.FollowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollow>
          }
          groupBy: {
            args: Prisma.FollowGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowCountArgs<ExtArgs>
            result: $Utils.Optional<FollowCountAggregateOutputType> | number
          }
        }
      }
      ViewHistory: {
        payload: Prisma.$ViewHistoryPayload<ExtArgs>
        fields: Prisma.ViewHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewHistoryPayload>
          }
          findFirst: {
            args: Prisma.ViewHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewHistoryPayload>
          }
          findMany: {
            args: Prisma.ViewHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewHistoryPayload>[]
          }
          create: {
            args: Prisma.ViewHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewHistoryPayload>
          }
          createMany: {
            args: Prisma.ViewHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewHistoryPayload>[]
          }
          delete: {
            args: Prisma.ViewHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewHistoryPayload>
          }
          update: {
            args: Prisma.ViewHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ViewHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ViewHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewHistoryPayload>
          }
          aggregate: {
            args: Prisma.ViewHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViewHistory>
          }
          groupBy: {
            args: Prisma.ViewHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ViewHistoryCountAggregateOutputType> | number
          }
        }
      }
      Novel: {
        payload: Prisma.$NovelPayload<ExtArgs>
        fields: Prisma.NovelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NovelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NovelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>
          }
          findFirst: {
            args: Prisma.NovelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NovelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>
          }
          findMany: {
            args: Prisma.NovelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>[]
          }
          create: {
            args: Prisma.NovelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>
          }
          createMany: {
            args: Prisma.NovelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NovelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>[]
          }
          delete: {
            args: Prisma.NovelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>
          }
          update: {
            args: Prisma.NovelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>
          }
          deleteMany: {
            args: Prisma.NovelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NovelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NovelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>[]
          }
          upsert: {
            args: Prisma.NovelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovelPayload>
          }
          aggregate: {
            args: Prisma.NovelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNovel>
          }
          groupBy: {
            args: Prisma.NovelGroupByArgs<ExtArgs>
            result: $Utils.Optional<NovelGroupByOutputType>[]
          }
          count: {
            args: Prisma.NovelCountArgs<ExtArgs>
            result: $Utils.Optional<NovelCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      LikeNovel: {
        payload: Prisma.$LikeNovelPayload<ExtArgs>
        fields: Prisma.LikeNovelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeNovelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeNovelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeNovelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeNovelPayload>
          }
          findFirst: {
            args: Prisma.LikeNovelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeNovelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeNovelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeNovelPayload>
          }
          findMany: {
            args: Prisma.LikeNovelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeNovelPayload>[]
          }
          create: {
            args: Prisma.LikeNovelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeNovelPayload>
          }
          createMany: {
            args: Prisma.LikeNovelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeNovelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeNovelPayload>[]
          }
          delete: {
            args: Prisma.LikeNovelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeNovelPayload>
          }
          update: {
            args: Prisma.LikeNovelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeNovelPayload>
          }
          deleteMany: {
            args: Prisma.LikeNovelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeNovelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikeNovelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeNovelPayload>[]
          }
          upsert: {
            args: Prisma.LikeNovelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeNovelPayload>
          }
          aggregate: {
            args: Prisma.LikeNovelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikeNovel>
          }
          groupBy: {
            args: Prisma.LikeNovelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeNovelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeNovelCountArgs<ExtArgs>
            result: $Utils.Optional<LikeNovelCountAggregateOutputType> | number
          }
        }
      }
      LikeSentence: {
        payload: Prisma.$LikeSentencePayload<ExtArgs>
        fields: Prisma.LikeSentenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeSentenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeSentencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeSentenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeSentencePayload>
          }
          findFirst: {
            args: Prisma.LikeSentenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeSentencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeSentenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeSentencePayload>
          }
          findMany: {
            args: Prisma.LikeSentenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeSentencePayload>[]
          }
          create: {
            args: Prisma.LikeSentenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeSentencePayload>
          }
          createMany: {
            args: Prisma.LikeSentenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeSentenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeSentencePayload>[]
          }
          delete: {
            args: Prisma.LikeSentenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeSentencePayload>
          }
          update: {
            args: Prisma.LikeSentenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeSentencePayload>
          }
          deleteMany: {
            args: Prisma.LikeSentenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeSentenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikeSentenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeSentencePayload>[]
          }
          upsert: {
            args: Prisma.LikeSentenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikeSentencePayload>
          }
          aggregate: {
            args: Prisma.LikeSentenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikeSentence>
          }
          groupBy: {
            args: Prisma.LikeSentenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeSentenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeSentenceCountArgs<ExtArgs>
            result: $Utils.Optional<LikeSentenceCountAggregateOutputType> | number
          }
        }
      }
      Bookmark: {
        payload: Prisma.$BookmarkPayload<ExtArgs>
        fields: Prisma.BookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findFirst: {
            args: Prisma.BookmarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findMany: {
            args: Prisma.BookmarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          create: {
            args: Prisma.BookmarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          createMany: {
            args: Prisma.BookmarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookmarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          delete: {
            args: Prisma.BookmarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          update: {
            args: Prisma.BookmarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          deleteMany: {
            args: Prisma.BookmarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookmarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          upsert: {
            args: Prisma.BookmarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          aggregate: {
            args: Prisma.BookmarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmark>
          }
          groupBy: {
            args: Prisma.BookmarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarkCountArgs<ExtArgs>
            result: $Utils.Optional<BookmarkCountAggregateOutputType> | number
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
    user?: UserOmit
    follow?: FollowOmit
    viewHistory?: ViewHistoryOmit
    novel?: NovelOmit
    category?: CategoryOmit
    comment?: CommentOmit
    likeNovel?: LikeNovelOmit
    likeSentence?: LikeSentenceOmit
    bookmark?: BookmarkOmit
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
    novels: number
    comments: number
    likeNovels: number
    likeSentence: number
    viewHistory: number
    bookMark: number
    followers: number
    followees: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novels?: boolean | UserCountOutputTypeCountNovelsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    likeNovels?: boolean | UserCountOutputTypeCountLikeNovelsArgs
    likeSentence?: boolean | UserCountOutputTypeCountLikeSentenceArgs
    viewHistory?: boolean | UserCountOutputTypeCountViewHistoryArgs
    bookMark?: boolean | UserCountOutputTypeCountBookMarkArgs
    followers?: boolean | UserCountOutputTypeCountFollowersArgs
    followees?: boolean | UserCountOutputTypeCountFolloweesArgs
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
  export type UserCountOutputTypeCountNovelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NovelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikeNovelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeNovelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikeSentenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeSentenceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountViewHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookMarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFolloweesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }


  /**
   * Count Type NovelCountOutputType
   */

  export type NovelCountOutputType = {
    categories: number
    comments: number
    likes: number
    LikeSentence: number
    viewHistory: number
    bookmark: number
  }

  export type NovelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | NovelCountOutputTypeCountCategoriesArgs
    comments?: boolean | NovelCountOutputTypeCountCommentsArgs
    likes?: boolean | NovelCountOutputTypeCountLikesArgs
    LikeSentence?: boolean | NovelCountOutputTypeCountLikeSentenceArgs
    viewHistory?: boolean | NovelCountOutputTypeCountViewHistoryArgs
    bookmark?: boolean | NovelCountOutputTypeCountBookmarkArgs
  }

  // Custom InputTypes
  /**
   * NovelCountOutputType without action
   */
  export type NovelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NovelCountOutputType
     */
    select?: NovelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NovelCountOutputType without action
   */
  export type NovelCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * NovelCountOutputType without action
   */
  export type NovelCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * NovelCountOutputType without action
   */
  export type NovelCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeNovelWhereInput
  }

  /**
   * NovelCountOutputType without action
   */
  export type NovelCountOutputTypeCountLikeSentenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeSentenceWhereInput
  }

  /**
   * NovelCountOutputType without action
   */
  export type NovelCountOutputTypeCountViewHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewHistoryWhereInput
  }

  /**
   * NovelCountOutputType without action
   */
  export type NovelCountOutputTypeCountBookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    novel: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novel?: boolean | CategoryCountOutputTypeCountNovelArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountNovelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NovelWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    profileImagePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    profileImagePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    profileImagePath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    profileImagePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    profileImagePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    profileImagePath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    profileImagePath: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    profileImagePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    novels?: boolean | User$novelsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    likeNovels?: boolean | User$likeNovelsArgs<ExtArgs>
    likeSentence?: boolean | User$likeSentenceArgs<ExtArgs>
    viewHistory?: boolean | User$viewHistoryArgs<ExtArgs>
    bookMark?: boolean | User$bookMarkArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    followees?: boolean | User$followeesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    profileImagePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    profileImagePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    profileImagePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "profileImagePath" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novels?: boolean | User$novelsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    likeNovels?: boolean | User$likeNovelsArgs<ExtArgs>
    likeSentence?: boolean | User$likeSentenceArgs<ExtArgs>
    viewHistory?: boolean | User$viewHistoryArgs<ExtArgs>
    bookMark?: boolean | User$bookMarkArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    followees?: boolean | User$followeesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      novels: Prisma.$NovelPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      likeNovels: Prisma.$LikeNovelPayload<ExtArgs>[]
      likeSentence: Prisma.$LikeSentencePayload<ExtArgs>[]
      viewHistory: Prisma.$ViewHistoryPayload<ExtArgs>[]
      bookMark: Prisma.$BookmarkPayload<ExtArgs>[]
      followers: Prisma.$FollowPayload<ExtArgs>[]
      followees: Prisma.$FollowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      profileImagePath: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    novels<T extends User$novelsArgs<ExtArgs> = {}>(args?: Subset<T, User$novelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likeNovels<T extends User$likeNovelsArgs<ExtArgs> = {}>(args?: Subset<T, User$likeNovelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeNovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likeSentence<T extends User$likeSentenceArgs<ExtArgs> = {}>(args?: Subset<T, User$likeSentenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeSentencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewHistory<T extends User$viewHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$viewHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookMark<T extends User$bookMarkArgs<ExtArgs> = {}>(args?: Subset<T, User$bookMarkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends User$followersArgs<ExtArgs> = {}>(args?: Subset<T, User$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followees<T extends User$followeesArgs<ExtArgs> = {}>(args?: Subset<T, User$followeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profileImagePath: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.novels
   */
  export type User$novelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    where?: NovelWhereInput
    orderBy?: NovelOrderByWithRelationInput | NovelOrderByWithRelationInput[]
    cursor?: NovelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NovelScalarFieldEnum | NovelScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.likeNovels
   */
  export type User$likeNovelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeNovel
     */
    select?: LikeNovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeNovel
     */
    omit?: LikeNovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeNovelInclude<ExtArgs> | null
    where?: LikeNovelWhereInput
    orderBy?: LikeNovelOrderByWithRelationInput | LikeNovelOrderByWithRelationInput[]
    cursor?: LikeNovelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeNovelScalarFieldEnum | LikeNovelScalarFieldEnum[]
  }

  /**
   * User.likeSentence
   */
  export type User$likeSentenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeSentence
     */
    select?: LikeSentenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeSentence
     */
    omit?: LikeSentenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeSentenceInclude<ExtArgs> | null
    where?: LikeSentenceWhereInput
    orderBy?: LikeSentenceOrderByWithRelationInput | LikeSentenceOrderByWithRelationInput[]
    cursor?: LikeSentenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeSentenceScalarFieldEnum | LikeSentenceScalarFieldEnum[]
  }

  /**
   * User.viewHistory
   */
  export type User$viewHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewHistory
     */
    select?: ViewHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewHistory
     */
    omit?: ViewHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewHistoryInclude<ExtArgs> | null
    where?: ViewHistoryWhereInput
    orderBy?: ViewHistoryOrderByWithRelationInput | ViewHistoryOrderByWithRelationInput[]
    cursor?: ViewHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewHistoryScalarFieldEnum | ViewHistoryScalarFieldEnum[]
  }

  /**
   * User.bookMark
   */
  export type User$bookMarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * User.followers
   */
  export type User$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * User.followees
   */
  export type User$followeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Follow
   */

  export type AggregateFollow = {
    _count: FollowCountAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  export type FollowMinAggregateOutputType = {
    id: string | null
    followerId: string | null
    followeeId: string | null
    createdAt: Date | null
  }

  export type FollowMaxAggregateOutputType = {
    id: string | null
    followerId: string | null
    followeeId: string | null
    createdAt: Date | null
  }

  export type FollowCountAggregateOutputType = {
    id: number
    followerId: number
    followeeId: number
    createdAt: number
    _all: number
  }


  export type FollowMinAggregateInputType = {
    id?: true
    followerId?: true
    followeeId?: true
    createdAt?: true
  }

  export type FollowMaxAggregateInputType = {
    id?: true
    followerId?: true
    followeeId?: true
    createdAt?: true
  }

  export type FollowCountAggregateInputType = {
    id?: true
    followerId?: true
    followeeId?: true
    createdAt?: true
    _all?: true
  }

  export type FollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follow to aggregate.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Follows
    **/
    _count?: true | FollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowMaxAggregateInputType
  }

  export type GetFollowAggregateType<T extends FollowAggregateArgs> = {
        [P in keyof T & keyof AggregateFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollow[P]>
      : GetScalarType<T[P], AggregateFollow[P]>
  }




  export type FollowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithAggregationInput | FollowOrderByWithAggregationInput[]
    by: FollowScalarFieldEnum[] | FollowScalarFieldEnum
    having?: FollowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowCountAggregateInputType | true
    _min?: FollowMinAggregateInputType
    _max?: FollowMaxAggregateInputType
  }

  export type FollowGroupByOutputType = {
    id: string
    followerId: string
    followeeId: string
    createdAt: Date
    _count: FollowCountAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  type GetFollowGroupByPayload<T extends FollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowGroupByOutputType[P]>
            : GetScalarType<T[P], FollowGroupByOutputType[P]>
        }
      >
    >


  export type FollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    followerId?: boolean
    followeeId?: boolean
    createdAt?: boolean
    follower?: boolean | UserDefaultArgs<ExtArgs>
    followee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    followerId?: boolean
    followeeId?: boolean
    createdAt?: boolean
    follower?: boolean | UserDefaultArgs<ExtArgs>
    followee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    followerId?: boolean
    followeeId?: boolean
    createdAt?: boolean
    follower?: boolean | UserDefaultArgs<ExtArgs>
    followee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectScalar = {
    id?: boolean
    followerId?: boolean
    followeeId?: boolean
    createdAt?: boolean
  }

  export type FollowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "followerId" | "followeeId" | "createdAt", ExtArgs["result"]["follow"]>
  export type FollowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs>
    followee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FollowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs>
    followee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FollowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs>
    followee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FollowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follow"
    objects: {
      follower: Prisma.$UserPayload<ExtArgs>
      followee: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      followerId: string
      followeeId: string
      createdAt: Date
    }, ExtArgs["result"]["follow"]>
    composites: {}
  }

  type FollowGetPayload<S extends boolean | null | undefined | FollowDefaultArgs> = $Result.GetResult<Prisma.$FollowPayload, S>

  type FollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowCountAggregateInputType | true
    }

  export interface FollowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follow'], meta: { name: 'Follow' } }
    /**
     * Find zero or one Follow that matches the filter.
     * @param {FollowFindUniqueArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowFindUniqueArgs>(args: SelectSubset<T, FollowFindUniqueArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowFindUniqueOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowFindFirstArgs>(args?: SelectSubset<T, FollowFindFirstArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follow.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followWithIdOnly = await prisma.follow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowFindManyArgs>(args?: SelectSubset<T, FollowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follow.
     * @param {FollowCreateArgs} args - Arguments to create a Follow.
     * @example
     * // Create one Follow
     * const Follow = await prisma.follow.create({
     *   data: {
     *     // ... data to create a Follow
     *   }
     * })
     * 
     */
    create<T extends FollowCreateArgs>(args: SelectSubset<T, FollowCreateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Follows.
     * @param {FollowCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowCreateManyArgs>(args?: SelectSubset<T, FollowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Follows and returns the data saved in the database.
     * @param {FollowCreateManyAndReturnArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Follows and only return the `id`
     * const followWithIdOnly = await prisma.follow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Follow.
     * @param {FollowDeleteArgs} args - Arguments to delete one Follow.
     * @example
     * // Delete one Follow
     * const Follow = await prisma.follow.delete({
     *   where: {
     *     // ... filter to delete one Follow
     *   }
     * })
     * 
     */
    delete<T extends FollowDeleteArgs>(args: SelectSubset<T, FollowDeleteArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follow.
     * @param {FollowUpdateArgs} args - Arguments to update one Follow.
     * @example
     * // Update one Follow
     * const follow = await prisma.follow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowUpdateArgs>(args: SelectSubset<T, FollowUpdateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Follows.
     * @param {FollowDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowDeleteManyArgs>(args?: SelectSubset<T, FollowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowUpdateManyArgs>(args: SelectSubset<T, FollowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows and returns the data updated in the database.
     * @param {FollowUpdateManyAndReturnArgs} args - Arguments to update many Follows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Follows and only return the `id`
     * const followWithIdOnly = await prisma.follow.updateManyAndReturn({
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
    updateManyAndReturn<T extends FollowUpdateManyAndReturnArgs>(args: SelectSubset<T, FollowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Follow.
     * @param {FollowUpsertArgs} args - Arguments to update or create a Follow.
     * @example
     * // Update or create a Follow
     * const follow = await prisma.follow.upsert({
     *   create: {
     *     // ... data to create a Follow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follow we want to update
     *   }
     * })
     */
    upsert<T extends FollowUpsertArgs>(args: SelectSubset<T, FollowUpsertArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follow.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends FollowCountArgs>(
      args?: Subset<T, FollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowAggregateArgs>(args: Subset<T, FollowAggregateArgs>): Prisma.PrismaPromise<GetFollowAggregateType<T>>

    /**
     * Group by Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowGroupByArgs} args - Group by arguments.
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
      T extends FollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowGroupByArgs['orderBy'] }
        : { orderBy?: FollowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follow model
   */
  readonly fields: FollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    follower<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    followee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Follow model
   */ 
  interface FollowFieldRefs {
    readonly id: FieldRef<"Follow", 'String'>
    readonly followerId: FieldRef<"Follow", 'String'>
    readonly followeeId: FieldRef<"Follow", 'String'>
    readonly createdAt: FieldRef<"Follow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Follow findUnique
   */
  export type FollowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findUniqueOrThrow
   */
  export type FollowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findFirst
   */
  export type FollowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findFirstOrThrow
   */
  export type FollowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findMany
   */
  export type FollowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow create
   */
  export type FollowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to create a Follow.
     */
    data: XOR<FollowCreateInput, FollowUncheckedCreateInput>
  }

  /**
   * Follow createMany
   */
  export type FollowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Follow createManyAndReturn
   */
  export type FollowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Follow update
   */
  export type FollowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to update a Follow.
     */
    data: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
    /**
     * Choose, which Follow to update.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow updateMany
   */
  export type FollowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
  }

  /**
   * Follow updateManyAndReturn
   */
  export type FollowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Follow upsert
   */
  export type FollowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The filter to search for the Follow to update in case it exists.
     */
    where: FollowWhereUniqueInput
    /**
     * In case the Follow found by the `where` argument doesn't exist, create a new Follow with this data.
     */
    create: XOR<FollowCreateInput, FollowUncheckedCreateInput>
    /**
     * In case the Follow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
  }

  /**
   * Follow delete
   */
  export type FollowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter which Follow to delete.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow deleteMany
   */
  export type FollowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to delete.
     */
    limit?: number
  }

  /**
   * Follow without action
   */
  export type FollowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
  }


  /**
   * Model ViewHistory
   */

  export type AggregateViewHistory = {
    _count: ViewHistoryCountAggregateOutputType | null
    _min: ViewHistoryMinAggregateOutputType | null
    _max: ViewHistoryMaxAggregateOutputType | null
  }

  export type ViewHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    novelId: string | null
  }

  export type ViewHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    novelId: string | null
  }

  export type ViewHistoryCountAggregateOutputType = {
    id: number
    userId: number
    novelId: number
    _all: number
  }


  export type ViewHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
  }

  export type ViewHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
  }

  export type ViewHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
    _all?: true
  }

  export type ViewHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewHistory to aggregate.
     */
    where?: ViewHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewHistories to fetch.
     */
    orderBy?: ViewHistoryOrderByWithRelationInput | ViewHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViewHistories
    **/
    _count?: true | ViewHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewHistoryMaxAggregateInputType
  }

  export type GetViewHistoryAggregateType<T extends ViewHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateViewHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewHistory[P]>
      : GetScalarType<T[P], AggregateViewHistory[P]>
  }




  export type ViewHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewHistoryWhereInput
    orderBy?: ViewHistoryOrderByWithAggregationInput | ViewHistoryOrderByWithAggregationInput[]
    by: ViewHistoryScalarFieldEnum[] | ViewHistoryScalarFieldEnum
    having?: ViewHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewHistoryCountAggregateInputType | true
    _min?: ViewHistoryMinAggregateInputType
    _max?: ViewHistoryMaxAggregateInputType
  }

  export type ViewHistoryGroupByOutputType = {
    id: string
    userId: string
    novelId: string
    _count: ViewHistoryCountAggregateOutputType | null
    _min: ViewHistoryMinAggregateOutputType | null
    _max: ViewHistoryMaxAggregateOutputType | null
  }

  type GetViewHistoryGroupByPayload<T extends ViewHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ViewHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ViewHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewHistory"]>

  export type ViewHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewHistory"]>

  export type ViewHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewHistory"]>

  export type ViewHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    novelId?: boolean
  }

  export type ViewHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "novelId", ExtArgs["result"]["viewHistory"]>
  export type ViewHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }
  export type ViewHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }
  export type ViewHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }

  export type $ViewHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViewHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      novel: Prisma.$NovelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      novelId: string
    }, ExtArgs["result"]["viewHistory"]>
    composites: {}
  }

  type ViewHistoryGetPayload<S extends boolean | null | undefined | ViewHistoryDefaultArgs> = $Result.GetResult<Prisma.$ViewHistoryPayload, S>

  type ViewHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewHistoryCountAggregateInputType | true
    }

  export interface ViewHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViewHistory'], meta: { name: 'ViewHistory' } }
    /**
     * Find zero or one ViewHistory that matches the filter.
     * @param {ViewHistoryFindUniqueArgs} args - Arguments to find a ViewHistory
     * @example
     * // Get one ViewHistory
     * const viewHistory = await prisma.viewHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewHistoryFindUniqueArgs>(args: SelectSubset<T, ViewHistoryFindUniqueArgs<ExtArgs>>): Prisma__ViewHistoryClient<$Result.GetResult<Prisma.$ViewHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ViewHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewHistoryFindUniqueOrThrowArgs} args - Arguments to find a ViewHistory
     * @example
     * // Get one ViewHistory
     * const viewHistory = await prisma.viewHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewHistoryClient<$Result.GetResult<Prisma.$ViewHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewHistoryFindFirstArgs} args - Arguments to find a ViewHistory
     * @example
     * // Get one ViewHistory
     * const viewHistory = await prisma.viewHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewHistoryFindFirstArgs>(args?: SelectSubset<T, ViewHistoryFindFirstArgs<ExtArgs>>): Prisma__ViewHistoryClient<$Result.GetResult<Prisma.$ViewHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewHistoryFindFirstOrThrowArgs} args - Arguments to find a ViewHistory
     * @example
     * // Get one ViewHistory
     * const viewHistory = await prisma.viewHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewHistoryClient<$Result.GetResult<Prisma.$ViewHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ViewHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViewHistories
     * const viewHistories = await prisma.viewHistory.findMany()
     * 
     * // Get first 10 ViewHistories
     * const viewHistories = await prisma.viewHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewHistoryWithIdOnly = await prisma.viewHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewHistoryFindManyArgs>(args?: SelectSubset<T, ViewHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ViewHistory.
     * @param {ViewHistoryCreateArgs} args - Arguments to create a ViewHistory.
     * @example
     * // Create one ViewHistory
     * const ViewHistory = await prisma.viewHistory.create({
     *   data: {
     *     // ... data to create a ViewHistory
     *   }
     * })
     * 
     */
    create<T extends ViewHistoryCreateArgs>(args: SelectSubset<T, ViewHistoryCreateArgs<ExtArgs>>): Prisma__ViewHistoryClient<$Result.GetResult<Prisma.$ViewHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ViewHistories.
     * @param {ViewHistoryCreateManyArgs} args - Arguments to create many ViewHistories.
     * @example
     * // Create many ViewHistories
     * const viewHistory = await prisma.viewHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewHistoryCreateManyArgs>(args?: SelectSubset<T, ViewHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ViewHistories and returns the data saved in the database.
     * @param {ViewHistoryCreateManyAndReturnArgs} args - Arguments to create many ViewHistories.
     * @example
     * // Create many ViewHistories
     * const viewHistory = await prisma.viewHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ViewHistories and only return the `id`
     * const viewHistoryWithIdOnly = await prisma.viewHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ViewHistory.
     * @param {ViewHistoryDeleteArgs} args - Arguments to delete one ViewHistory.
     * @example
     * // Delete one ViewHistory
     * const ViewHistory = await prisma.viewHistory.delete({
     *   where: {
     *     // ... filter to delete one ViewHistory
     *   }
     * })
     * 
     */
    delete<T extends ViewHistoryDeleteArgs>(args: SelectSubset<T, ViewHistoryDeleteArgs<ExtArgs>>): Prisma__ViewHistoryClient<$Result.GetResult<Prisma.$ViewHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ViewHistory.
     * @param {ViewHistoryUpdateArgs} args - Arguments to update one ViewHistory.
     * @example
     * // Update one ViewHistory
     * const viewHistory = await prisma.viewHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewHistoryUpdateArgs>(args: SelectSubset<T, ViewHistoryUpdateArgs<ExtArgs>>): Prisma__ViewHistoryClient<$Result.GetResult<Prisma.$ViewHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ViewHistories.
     * @param {ViewHistoryDeleteManyArgs} args - Arguments to filter ViewHistories to delete.
     * @example
     * // Delete a few ViewHistories
     * const { count } = await prisma.viewHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewHistoryDeleteManyArgs>(args?: SelectSubset<T, ViewHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViewHistories
     * const viewHistory = await prisma.viewHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewHistoryUpdateManyArgs>(args: SelectSubset<T, ViewHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewHistories and returns the data updated in the database.
     * @param {ViewHistoryUpdateManyAndReturnArgs} args - Arguments to update many ViewHistories.
     * @example
     * // Update many ViewHistories
     * const viewHistory = await prisma.viewHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ViewHistories and only return the `id`
     * const viewHistoryWithIdOnly = await prisma.viewHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ViewHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ViewHistory.
     * @param {ViewHistoryUpsertArgs} args - Arguments to update or create a ViewHistory.
     * @example
     * // Update or create a ViewHistory
     * const viewHistory = await prisma.viewHistory.upsert({
     *   create: {
     *     // ... data to create a ViewHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViewHistory we want to update
     *   }
     * })
     */
    upsert<T extends ViewHistoryUpsertArgs>(args: SelectSubset<T, ViewHistoryUpsertArgs<ExtArgs>>): Prisma__ViewHistoryClient<$Result.GetResult<Prisma.$ViewHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ViewHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewHistoryCountArgs} args - Arguments to filter ViewHistories to count.
     * @example
     * // Count the number of ViewHistories
     * const count = await prisma.viewHistory.count({
     *   where: {
     *     // ... the filter for the ViewHistories we want to count
     *   }
     * })
    **/
    count<T extends ViewHistoryCountArgs>(
      args?: Subset<T, ViewHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViewHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViewHistoryAggregateArgs>(args: Subset<T, ViewHistoryAggregateArgs>): Prisma.PrismaPromise<GetViewHistoryAggregateType<T>>

    /**
     * Group by ViewHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewHistoryGroupByArgs} args - Group by arguments.
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
      T extends ViewHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ViewHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViewHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViewHistory model
   */
  readonly fields: ViewHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViewHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    novel<T extends NovelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NovelDefaultArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ViewHistory model
   */ 
  interface ViewHistoryFieldRefs {
    readonly id: FieldRef<"ViewHistory", 'String'>
    readonly userId: FieldRef<"ViewHistory", 'String'>
    readonly novelId: FieldRef<"ViewHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ViewHistory findUnique
   */
  export type ViewHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewHistory
     */
    select?: ViewHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewHistory
     */
    omit?: ViewHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ViewHistory to fetch.
     */
    where: ViewHistoryWhereUniqueInput
  }

  /**
   * ViewHistory findUniqueOrThrow
   */
  export type ViewHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewHistory
     */
    select?: ViewHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewHistory
     */
    omit?: ViewHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ViewHistory to fetch.
     */
    where: ViewHistoryWhereUniqueInput
  }

  /**
   * ViewHistory findFirst
   */
  export type ViewHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewHistory
     */
    select?: ViewHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewHistory
     */
    omit?: ViewHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ViewHistory to fetch.
     */
    where?: ViewHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewHistories to fetch.
     */
    orderBy?: ViewHistoryOrderByWithRelationInput | ViewHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewHistories.
     */
    cursor?: ViewHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewHistories.
     */
    distinct?: ViewHistoryScalarFieldEnum | ViewHistoryScalarFieldEnum[]
  }

  /**
   * ViewHistory findFirstOrThrow
   */
  export type ViewHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewHistory
     */
    select?: ViewHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewHistory
     */
    omit?: ViewHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ViewHistory to fetch.
     */
    where?: ViewHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewHistories to fetch.
     */
    orderBy?: ViewHistoryOrderByWithRelationInput | ViewHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewHistories.
     */
    cursor?: ViewHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewHistories.
     */
    distinct?: ViewHistoryScalarFieldEnum | ViewHistoryScalarFieldEnum[]
  }

  /**
   * ViewHistory findMany
   */
  export type ViewHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewHistory
     */
    select?: ViewHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewHistory
     */
    omit?: ViewHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ViewHistories to fetch.
     */
    where?: ViewHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewHistories to fetch.
     */
    orderBy?: ViewHistoryOrderByWithRelationInput | ViewHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViewHistories.
     */
    cursor?: ViewHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewHistories.
     */
    skip?: number
    distinct?: ViewHistoryScalarFieldEnum | ViewHistoryScalarFieldEnum[]
  }

  /**
   * ViewHistory create
   */
  export type ViewHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewHistory
     */
    select?: ViewHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewHistory
     */
    omit?: ViewHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ViewHistory.
     */
    data: XOR<ViewHistoryCreateInput, ViewHistoryUncheckedCreateInput>
  }

  /**
   * ViewHistory createMany
   */
  export type ViewHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViewHistories.
     */
    data: ViewHistoryCreateManyInput | ViewHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViewHistory createManyAndReturn
   */
  export type ViewHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewHistory
     */
    select?: ViewHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewHistory
     */
    omit?: ViewHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ViewHistories.
     */
    data: ViewHistoryCreateManyInput | ViewHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewHistory update
   */
  export type ViewHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewHistory
     */
    select?: ViewHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewHistory
     */
    omit?: ViewHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ViewHistory.
     */
    data: XOR<ViewHistoryUpdateInput, ViewHistoryUncheckedUpdateInput>
    /**
     * Choose, which ViewHistory to update.
     */
    where: ViewHistoryWhereUniqueInput
  }

  /**
   * ViewHistory updateMany
   */
  export type ViewHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViewHistories.
     */
    data: XOR<ViewHistoryUpdateManyMutationInput, ViewHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ViewHistories to update
     */
    where?: ViewHistoryWhereInput
    /**
     * Limit how many ViewHistories to update.
     */
    limit?: number
  }

  /**
   * ViewHistory updateManyAndReturn
   */
  export type ViewHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewHistory
     */
    select?: ViewHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewHistory
     */
    omit?: ViewHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ViewHistories.
     */
    data: XOR<ViewHistoryUpdateManyMutationInput, ViewHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ViewHistories to update
     */
    where?: ViewHistoryWhereInput
    /**
     * Limit how many ViewHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewHistory upsert
   */
  export type ViewHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewHistory
     */
    select?: ViewHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewHistory
     */
    omit?: ViewHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ViewHistory to update in case it exists.
     */
    where: ViewHistoryWhereUniqueInput
    /**
     * In case the ViewHistory found by the `where` argument doesn't exist, create a new ViewHistory with this data.
     */
    create: XOR<ViewHistoryCreateInput, ViewHistoryUncheckedCreateInput>
    /**
     * In case the ViewHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewHistoryUpdateInput, ViewHistoryUncheckedUpdateInput>
  }

  /**
   * ViewHistory delete
   */
  export type ViewHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewHistory
     */
    select?: ViewHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewHistory
     */
    omit?: ViewHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewHistoryInclude<ExtArgs> | null
    /**
     * Filter which ViewHistory to delete.
     */
    where: ViewHistoryWhereUniqueInput
  }

  /**
   * ViewHistory deleteMany
   */
  export type ViewHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewHistories to delete
     */
    where?: ViewHistoryWhereInput
    /**
     * Limit how many ViewHistories to delete.
     */
    limit?: number
  }

  /**
   * ViewHistory without action
   */
  export type ViewHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewHistory
     */
    select?: ViewHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewHistory
     */
    omit?: ViewHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Novel
   */

  export type AggregateNovel = {
    _count: NovelCountAggregateOutputType | null
    _min: NovelMinAggregateOutputType | null
    _max: NovelMaxAggregateOutputType | null
  }

  export type NovelMinAggregateOutputType = {
    id: string | null
    sharedId: string | null
    title: string | null
    authorId: string | null
    coverImagePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NovelMaxAggregateOutputType = {
    id: string | null
    sharedId: string | null
    title: string | null
    authorId: string | null
    coverImagePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NovelCountAggregateOutputType = {
    id: number
    sharedId: number
    title: number
    authorId: number
    coverImagePath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NovelMinAggregateInputType = {
    id?: true
    sharedId?: true
    title?: true
    authorId?: true
    coverImagePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NovelMaxAggregateInputType = {
    id?: true
    sharedId?: true
    title?: true
    authorId?: true
    coverImagePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NovelCountAggregateInputType = {
    id?: true
    sharedId?: true
    title?: true
    authorId?: true
    coverImagePath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NovelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Novel to aggregate.
     */
    where?: NovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Novels to fetch.
     */
    orderBy?: NovelOrderByWithRelationInput | NovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Novels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Novels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Novels
    **/
    _count?: true | NovelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NovelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NovelMaxAggregateInputType
  }

  export type GetNovelAggregateType<T extends NovelAggregateArgs> = {
        [P in keyof T & keyof AggregateNovel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNovel[P]>
      : GetScalarType<T[P], AggregateNovel[P]>
  }




  export type NovelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NovelWhereInput
    orderBy?: NovelOrderByWithAggregationInput | NovelOrderByWithAggregationInput[]
    by: NovelScalarFieldEnum[] | NovelScalarFieldEnum
    having?: NovelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NovelCountAggregateInputType | true
    _min?: NovelMinAggregateInputType
    _max?: NovelMaxAggregateInputType
  }

  export type NovelGroupByOutputType = {
    id: string
    sharedId: string
    title: string
    authorId: string | null
    coverImagePath: string | null
    createdAt: Date
    updatedAt: Date
    _count: NovelCountAggregateOutputType | null
    _min: NovelMinAggregateOutputType | null
    _max: NovelMaxAggregateOutputType | null
  }

  type GetNovelGroupByPayload<T extends NovelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NovelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NovelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NovelGroupByOutputType[P]>
            : GetScalarType<T[P], NovelGroupByOutputType[P]>
        }
      >
    >


  export type NovelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sharedId?: boolean
    title?: boolean
    authorId?: boolean
    coverImagePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | Novel$authorArgs<ExtArgs>
    categories?: boolean | Novel$categoriesArgs<ExtArgs>
    comments?: boolean | Novel$commentsArgs<ExtArgs>
    likes?: boolean | Novel$likesArgs<ExtArgs>
    LikeSentence?: boolean | Novel$LikeSentenceArgs<ExtArgs>
    viewHistory?: boolean | Novel$viewHistoryArgs<ExtArgs>
    bookmark?: boolean | Novel$bookmarkArgs<ExtArgs>
    _count?: boolean | NovelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["novel"]>

  export type NovelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sharedId?: boolean
    title?: boolean
    authorId?: boolean
    coverImagePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | Novel$authorArgs<ExtArgs>
  }, ExtArgs["result"]["novel"]>

  export type NovelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sharedId?: boolean
    title?: boolean
    authorId?: boolean
    coverImagePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | Novel$authorArgs<ExtArgs>
  }, ExtArgs["result"]["novel"]>

  export type NovelSelectScalar = {
    id?: boolean
    sharedId?: boolean
    title?: boolean
    authorId?: boolean
    coverImagePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NovelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sharedId" | "title" | "authorId" | "coverImagePath" | "createdAt" | "updatedAt", ExtArgs["result"]["novel"]>
  export type NovelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Novel$authorArgs<ExtArgs>
    categories?: boolean | Novel$categoriesArgs<ExtArgs>
    comments?: boolean | Novel$commentsArgs<ExtArgs>
    likes?: boolean | Novel$likesArgs<ExtArgs>
    LikeSentence?: boolean | Novel$LikeSentenceArgs<ExtArgs>
    viewHistory?: boolean | Novel$viewHistoryArgs<ExtArgs>
    bookmark?: boolean | Novel$bookmarkArgs<ExtArgs>
    _count?: boolean | NovelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NovelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Novel$authorArgs<ExtArgs>
  }
  export type NovelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Novel$authorArgs<ExtArgs>
  }

  export type $NovelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Novel"
    objects: {
      author: Prisma.$UserPayload<ExtArgs> | null
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      likes: Prisma.$LikeNovelPayload<ExtArgs>[]
      LikeSentence: Prisma.$LikeSentencePayload<ExtArgs>[]
      viewHistory: Prisma.$ViewHistoryPayload<ExtArgs>[]
      bookmark: Prisma.$BookmarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sharedId: string
      title: string
      authorId: string | null
      coverImagePath: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["novel"]>
    composites: {}
  }

  type NovelGetPayload<S extends boolean | null | undefined | NovelDefaultArgs> = $Result.GetResult<Prisma.$NovelPayload, S>

  type NovelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NovelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NovelCountAggregateInputType | true
    }

  export interface NovelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Novel'], meta: { name: 'Novel' } }
    /**
     * Find zero or one Novel that matches the filter.
     * @param {NovelFindUniqueArgs} args - Arguments to find a Novel
     * @example
     * // Get one Novel
     * const novel = await prisma.novel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NovelFindUniqueArgs>(args: SelectSubset<T, NovelFindUniqueArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Novel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NovelFindUniqueOrThrowArgs} args - Arguments to find a Novel
     * @example
     * // Get one Novel
     * const novel = await prisma.novel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NovelFindUniqueOrThrowArgs>(args: SelectSubset<T, NovelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Novel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovelFindFirstArgs} args - Arguments to find a Novel
     * @example
     * // Get one Novel
     * const novel = await prisma.novel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NovelFindFirstArgs>(args?: SelectSubset<T, NovelFindFirstArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Novel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovelFindFirstOrThrowArgs} args - Arguments to find a Novel
     * @example
     * // Get one Novel
     * const novel = await prisma.novel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NovelFindFirstOrThrowArgs>(args?: SelectSubset<T, NovelFindFirstOrThrowArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Novels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Novels
     * const novels = await prisma.novel.findMany()
     * 
     * // Get first 10 Novels
     * const novels = await prisma.novel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const novelWithIdOnly = await prisma.novel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NovelFindManyArgs>(args?: SelectSubset<T, NovelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Novel.
     * @param {NovelCreateArgs} args - Arguments to create a Novel.
     * @example
     * // Create one Novel
     * const Novel = await prisma.novel.create({
     *   data: {
     *     // ... data to create a Novel
     *   }
     * })
     * 
     */
    create<T extends NovelCreateArgs>(args: SelectSubset<T, NovelCreateArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Novels.
     * @param {NovelCreateManyArgs} args - Arguments to create many Novels.
     * @example
     * // Create many Novels
     * const novel = await prisma.novel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NovelCreateManyArgs>(args?: SelectSubset<T, NovelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Novels and returns the data saved in the database.
     * @param {NovelCreateManyAndReturnArgs} args - Arguments to create many Novels.
     * @example
     * // Create many Novels
     * const novel = await prisma.novel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Novels and only return the `id`
     * const novelWithIdOnly = await prisma.novel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NovelCreateManyAndReturnArgs>(args?: SelectSubset<T, NovelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Novel.
     * @param {NovelDeleteArgs} args - Arguments to delete one Novel.
     * @example
     * // Delete one Novel
     * const Novel = await prisma.novel.delete({
     *   where: {
     *     // ... filter to delete one Novel
     *   }
     * })
     * 
     */
    delete<T extends NovelDeleteArgs>(args: SelectSubset<T, NovelDeleteArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Novel.
     * @param {NovelUpdateArgs} args - Arguments to update one Novel.
     * @example
     * // Update one Novel
     * const novel = await prisma.novel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NovelUpdateArgs>(args: SelectSubset<T, NovelUpdateArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Novels.
     * @param {NovelDeleteManyArgs} args - Arguments to filter Novels to delete.
     * @example
     * // Delete a few Novels
     * const { count } = await prisma.novel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NovelDeleteManyArgs>(args?: SelectSubset<T, NovelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Novels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Novels
     * const novel = await prisma.novel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NovelUpdateManyArgs>(args: SelectSubset<T, NovelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Novels and returns the data updated in the database.
     * @param {NovelUpdateManyAndReturnArgs} args - Arguments to update many Novels.
     * @example
     * // Update many Novels
     * const novel = await prisma.novel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Novels and only return the `id`
     * const novelWithIdOnly = await prisma.novel.updateManyAndReturn({
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
    updateManyAndReturn<T extends NovelUpdateManyAndReturnArgs>(args: SelectSubset<T, NovelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Novel.
     * @param {NovelUpsertArgs} args - Arguments to update or create a Novel.
     * @example
     * // Update or create a Novel
     * const novel = await prisma.novel.upsert({
     *   create: {
     *     // ... data to create a Novel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Novel we want to update
     *   }
     * })
     */
    upsert<T extends NovelUpsertArgs>(args: SelectSubset<T, NovelUpsertArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Novels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovelCountArgs} args - Arguments to filter Novels to count.
     * @example
     * // Count the number of Novels
     * const count = await prisma.novel.count({
     *   where: {
     *     // ... the filter for the Novels we want to count
     *   }
     * })
    **/
    count<T extends NovelCountArgs>(
      args?: Subset<T, NovelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NovelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Novel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NovelAggregateArgs>(args: Subset<T, NovelAggregateArgs>): Prisma.PrismaPromise<GetNovelAggregateType<T>>

    /**
     * Group by Novel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovelGroupByArgs} args - Group by arguments.
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
      T extends NovelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NovelGroupByArgs['orderBy'] }
        : { orderBy?: NovelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NovelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNovelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Novel model
   */
  readonly fields: NovelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Novel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NovelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends Novel$authorArgs<ExtArgs> = {}>(args?: Subset<T, Novel$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    categories<T extends Novel$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Novel$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Novel$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Novel$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Novel$likesArgs<ExtArgs> = {}>(args?: Subset<T, Novel$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeNovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LikeSentence<T extends Novel$LikeSentenceArgs<ExtArgs> = {}>(args?: Subset<T, Novel$LikeSentenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeSentencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewHistory<T extends Novel$viewHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Novel$viewHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookmark<T extends Novel$bookmarkArgs<ExtArgs> = {}>(args?: Subset<T, Novel$bookmarkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Novel model
   */ 
  interface NovelFieldRefs {
    readonly id: FieldRef<"Novel", 'String'>
    readonly sharedId: FieldRef<"Novel", 'String'>
    readonly title: FieldRef<"Novel", 'String'>
    readonly authorId: FieldRef<"Novel", 'String'>
    readonly coverImagePath: FieldRef<"Novel", 'String'>
    readonly createdAt: FieldRef<"Novel", 'DateTime'>
    readonly updatedAt: FieldRef<"Novel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Novel findUnique
   */
  export type NovelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * Filter, which Novel to fetch.
     */
    where: NovelWhereUniqueInput
  }

  /**
   * Novel findUniqueOrThrow
   */
  export type NovelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * Filter, which Novel to fetch.
     */
    where: NovelWhereUniqueInput
  }

  /**
   * Novel findFirst
   */
  export type NovelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * Filter, which Novel to fetch.
     */
    where?: NovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Novels to fetch.
     */
    orderBy?: NovelOrderByWithRelationInput | NovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Novels.
     */
    cursor?: NovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Novels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Novels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Novels.
     */
    distinct?: NovelScalarFieldEnum | NovelScalarFieldEnum[]
  }

  /**
   * Novel findFirstOrThrow
   */
  export type NovelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * Filter, which Novel to fetch.
     */
    where?: NovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Novels to fetch.
     */
    orderBy?: NovelOrderByWithRelationInput | NovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Novels.
     */
    cursor?: NovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Novels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Novels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Novels.
     */
    distinct?: NovelScalarFieldEnum | NovelScalarFieldEnum[]
  }

  /**
   * Novel findMany
   */
  export type NovelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * Filter, which Novels to fetch.
     */
    where?: NovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Novels to fetch.
     */
    orderBy?: NovelOrderByWithRelationInput | NovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Novels.
     */
    cursor?: NovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Novels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Novels.
     */
    skip?: number
    distinct?: NovelScalarFieldEnum | NovelScalarFieldEnum[]
  }

  /**
   * Novel create
   */
  export type NovelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * The data needed to create a Novel.
     */
    data: XOR<NovelCreateInput, NovelUncheckedCreateInput>
  }

  /**
   * Novel createMany
   */
  export type NovelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Novels.
     */
    data: NovelCreateManyInput | NovelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Novel createManyAndReturn
   */
  export type NovelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * The data used to create many Novels.
     */
    data: NovelCreateManyInput | NovelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Novel update
   */
  export type NovelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * The data needed to update a Novel.
     */
    data: XOR<NovelUpdateInput, NovelUncheckedUpdateInput>
    /**
     * Choose, which Novel to update.
     */
    where: NovelWhereUniqueInput
  }

  /**
   * Novel updateMany
   */
  export type NovelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Novels.
     */
    data: XOR<NovelUpdateManyMutationInput, NovelUncheckedUpdateManyInput>
    /**
     * Filter which Novels to update
     */
    where?: NovelWhereInput
    /**
     * Limit how many Novels to update.
     */
    limit?: number
  }

  /**
   * Novel updateManyAndReturn
   */
  export type NovelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * The data used to update Novels.
     */
    data: XOR<NovelUpdateManyMutationInput, NovelUncheckedUpdateManyInput>
    /**
     * Filter which Novels to update
     */
    where?: NovelWhereInput
    /**
     * Limit how many Novels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Novel upsert
   */
  export type NovelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * The filter to search for the Novel to update in case it exists.
     */
    where: NovelWhereUniqueInput
    /**
     * In case the Novel found by the `where` argument doesn't exist, create a new Novel with this data.
     */
    create: XOR<NovelCreateInput, NovelUncheckedCreateInput>
    /**
     * In case the Novel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NovelUpdateInput, NovelUncheckedUpdateInput>
  }

  /**
   * Novel delete
   */
  export type NovelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    /**
     * Filter which Novel to delete.
     */
    where: NovelWhereUniqueInput
  }

  /**
   * Novel deleteMany
   */
  export type NovelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Novels to delete
     */
    where?: NovelWhereInput
    /**
     * Limit how many Novels to delete.
     */
    limit?: number
  }

  /**
   * Novel.author
   */
  export type Novel$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Novel.categories
   */
  export type Novel$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Novel.comments
   */
  export type Novel$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Novel.likes
   */
  export type Novel$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeNovel
     */
    select?: LikeNovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeNovel
     */
    omit?: LikeNovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeNovelInclude<ExtArgs> | null
    where?: LikeNovelWhereInput
    orderBy?: LikeNovelOrderByWithRelationInput | LikeNovelOrderByWithRelationInput[]
    cursor?: LikeNovelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeNovelScalarFieldEnum | LikeNovelScalarFieldEnum[]
  }

  /**
   * Novel.LikeSentence
   */
  export type Novel$LikeSentenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeSentence
     */
    select?: LikeSentenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeSentence
     */
    omit?: LikeSentenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeSentenceInclude<ExtArgs> | null
    where?: LikeSentenceWhereInput
    orderBy?: LikeSentenceOrderByWithRelationInput | LikeSentenceOrderByWithRelationInput[]
    cursor?: LikeSentenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeSentenceScalarFieldEnum | LikeSentenceScalarFieldEnum[]
  }

  /**
   * Novel.viewHistory
   */
  export type Novel$viewHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewHistory
     */
    select?: ViewHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewHistory
     */
    omit?: ViewHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewHistoryInclude<ExtArgs> | null
    where?: ViewHistoryWhereInput
    orderBy?: ViewHistoryOrderByWithRelationInput | ViewHistoryOrderByWithRelationInput[]
    cursor?: ViewHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewHistoryScalarFieldEnum | ViewHistoryScalarFieldEnum[]
  }

  /**
   * Novel.bookmark
   */
  export type Novel$bookmarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Novel without action
   */
  export type NovelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    categoryId: string | null
    categoryName: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    categoryId: string | null
    categoryName: string | null
  }

  export type CategoryCountAggregateOutputType = {
    categoryId: number
    categoryName: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    categoryId?: true
    categoryName?: true
  }

  export type CategoryMaxAggregateInputType = {
    categoryId?: true
    categoryName?: true
  }

  export type CategoryCountAggregateInputType = {
    categoryId?: true
    categoryName?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    categoryId: string
    categoryName: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryId?: boolean
    categoryName?: boolean
    novel?: boolean | Category$novelArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryId?: boolean
    categoryName?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryId?: boolean
    categoryName?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    categoryId?: boolean
    categoryName?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"categoryId" | "categoryName", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novel?: boolean | Category$novelArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      novel: Prisma.$NovelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      categoryId: string
      categoryName: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `categoryId`
     * const categoryWithCategoryIdOnly = await prisma.category.findMany({ select: { categoryId: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `categoryId`
     * const categoryWithCategoryIdOnly = await prisma.category.createManyAndReturn({
     *   select: { categoryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `categoryId`
     * const categoryWithCategoryIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { categoryId: true },
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    novel<T extends Category$novelArgs<ExtArgs> = {}>(args?: Subset<T, Category$novelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly categoryId: FieldRef<"Category", 'String'>
    readonly categoryName: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.novel
   */
  export type Category$novelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novel
     */
    select?: NovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novel
     */
    omit?: NovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovelInclude<ExtArgs> | null
    where?: NovelWhereInput
    orderBy?: NovelOrderByWithRelationInput | NovelOrderByWithRelationInput[]
    cursor?: NovelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NovelScalarFieldEnum | NovelScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    startIndex: number | null
    endIndex: number | null
  }

  export type CommentSumAggregateOutputType = {
    startIndex: number | null
    endIndex: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    sharedId: string | null
    userId: string | null
    novelId: string | null
    startIndex: number | null
    endIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    sharedId: string | null
    userId: string | null
    novelId: string | null
    startIndex: number | null
    endIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    sharedId: number
    userId: number
    novelId: number
    startIndex: number
    endIndex: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    startIndex?: true
    endIndex?: true
  }

  export type CommentSumAggregateInputType = {
    startIndex?: true
    endIndex?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    sharedId?: true
    userId?: true
    novelId?: true
    startIndex?: true
    endIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    sharedId?: true
    userId?: true
    novelId?: true
    startIndex?: true
    endIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    sharedId?: true
    userId?: true
    novelId?: true
    startIndex?: true
    endIndex?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    sharedId: string
    userId: string | null
    novelId: string
    startIndex: number
    endIndex: number
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sharedId?: boolean
    userId?: boolean
    novelId?: boolean
    startIndex?: boolean
    endIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Comment$userArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sharedId?: boolean
    userId?: boolean
    novelId?: boolean
    startIndex?: boolean
    endIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Comment$userArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sharedId?: boolean
    userId?: boolean
    novelId?: boolean
    startIndex?: boolean
    endIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Comment$userArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    sharedId?: boolean
    userId?: boolean
    novelId?: boolean
    startIndex?: boolean
    endIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sharedId" | "userId" | "novelId" | "startIndex" | "endIndex" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Comment$userArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Comment$userArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Comment$userArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      novel: Prisma.$NovelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sharedId: string
      userId: string | null
      novelId: string
      startIndex: number
      endIndex: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Comment$userArgs<ExtArgs> = {}>(args?: Subset<T, Comment$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    novel<T extends NovelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NovelDefaultArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly sharedId: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly novelId: FieldRef<"Comment", 'String'>
    readonly startIndex: FieldRef<"Comment", 'Int'>
    readonly endIndex: FieldRef<"Comment", 'Int'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.user
   */
  export type Comment$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model LikeNovel
   */

  export type AggregateLikeNovel = {
    _count: LikeNovelCountAggregateOutputType | null
    _min: LikeNovelMinAggregateOutputType | null
    _max: LikeNovelMaxAggregateOutputType | null
  }

  export type LikeNovelMinAggregateOutputType = {
    id: string | null
    userId: string | null
    novelId: string | null
    createdAt: Date | null
  }

  export type LikeNovelMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    novelId: string | null
    createdAt: Date | null
  }

  export type LikeNovelCountAggregateOutputType = {
    id: number
    userId: number
    novelId: number
    createdAt: number
    _all: number
  }


  export type LikeNovelMinAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
    createdAt?: true
  }

  export type LikeNovelMaxAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
    createdAt?: true
  }

  export type LikeNovelCountAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
    createdAt?: true
    _all?: true
  }

  export type LikeNovelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikeNovel to aggregate.
     */
    where?: LikeNovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeNovels to fetch.
     */
    orderBy?: LikeNovelOrderByWithRelationInput | LikeNovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeNovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeNovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeNovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikeNovels
    **/
    _count?: true | LikeNovelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeNovelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeNovelMaxAggregateInputType
  }

  export type GetLikeNovelAggregateType<T extends LikeNovelAggregateArgs> = {
        [P in keyof T & keyof AggregateLikeNovel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikeNovel[P]>
      : GetScalarType<T[P], AggregateLikeNovel[P]>
  }




  export type LikeNovelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeNovelWhereInput
    orderBy?: LikeNovelOrderByWithAggregationInput | LikeNovelOrderByWithAggregationInput[]
    by: LikeNovelScalarFieldEnum[] | LikeNovelScalarFieldEnum
    having?: LikeNovelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeNovelCountAggregateInputType | true
    _min?: LikeNovelMinAggregateInputType
    _max?: LikeNovelMaxAggregateInputType
  }

  export type LikeNovelGroupByOutputType = {
    id: string
    userId: string
    novelId: string
    createdAt: Date
    _count: LikeNovelCountAggregateOutputType | null
    _min: LikeNovelMinAggregateOutputType | null
    _max: LikeNovelMaxAggregateOutputType | null
  }

  type GetLikeNovelGroupByPayload<T extends LikeNovelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeNovelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeNovelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeNovelGroupByOutputType[P]>
            : GetScalarType<T[P], LikeNovelGroupByOutputType[P]>
        }
      >
    >


  export type LikeNovelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likeNovel"]>

  export type LikeNovelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likeNovel"]>

  export type LikeNovelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likeNovel"]>

  export type LikeNovelSelectScalar = {
    id?: boolean
    userId?: boolean
    novelId?: boolean
    createdAt?: boolean
  }

  export type LikeNovelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "novelId" | "createdAt", ExtArgs["result"]["likeNovel"]>
  export type LikeNovelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }
  export type LikeNovelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }
  export type LikeNovelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }

  export type $LikeNovelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikeNovel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      novel: Prisma.$NovelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      novelId: string
      createdAt: Date
    }, ExtArgs["result"]["likeNovel"]>
    composites: {}
  }

  type LikeNovelGetPayload<S extends boolean | null | undefined | LikeNovelDefaultArgs> = $Result.GetResult<Prisma.$LikeNovelPayload, S>

  type LikeNovelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeNovelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeNovelCountAggregateInputType | true
    }

  export interface LikeNovelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikeNovel'], meta: { name: 'LikeNovel' } }
    /**
     * Find zero or one LikeNovel that matches the filter.
     * @param {LikeNovelFindUniqueArgs} args - Arguments to find a LikeNovel
     * @example
     * // Get one LikeNovel
     * const likeNovel = await prisma.likeNovel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeNovelFindUniqueArgs>(args: SelectSubset<T, LikeNovelFindUniqueArgs<ExtArgs>>): Prisma__LikeNovelClient<$Result.GetResult<Prisma.$LikeNovelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LikeNovel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeNovelFindUniqueOrThrowArgs} args - Arguments to find a LikeNovel
     * @example
     * // Get one LikeNovel
     * const likeNovel = await prisma.likeNovel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeNovelFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeNovelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeNovelClient<$Result.GetResult<Prisma.$LikeNovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikeNovel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeNovelFindFirstArgs} args - Arguments to find a LikeNovel
     * @example
     * // Get one LikeNovel
     * const likeNovel = await prisma.likeNovel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeNovelFindFirstArgs>(args?: SelectSubset<T, LikeNovelFindFirstArgs<ExtArgs>>): Prisma__LikeNovelClient<$Result.GetResult<Prisma.$LikeNovelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikeNovel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeNovelFindFirstOrThrowArgs} args - Arguments to find a LikeNovel
     * @example
     * // Get one LikeNovel
     * const likeNovel = await prisma.likeNovel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeNovelFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeNovelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeNovelClient<$Result.GetResult<Prisma.$LikeNovelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LikeNovels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeNovelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikeNovels
     * const likeNovels = await prisma.likeNovel.findMany()
     * 
     * // Get first 10 LikeNovels
     * const likeNovels = await prisma.likeNovel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeNovelWithIdOnly = await prisma.likeNovel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeNovelFindManyArgs>(args?: SelectSubset<T, LikeNovelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeNovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LikeNovel.
     * @param {LikeNovelCreateArgs} args - Arguments to create a LikeNovel.
     * @example
     * // Create one LikeNovel
     * const LikeNovel = await prisma.likeNovel.create({
     *   data: {
     *     // ... data to create a LikeNovel
     *   }
     * })
     * 
     */
    create<T extends LikeNovelCreateArgs>(args: SelectSubset<T, LikeNovelCreateArgs<ExtArgs>>): Prisma__LikeNovelClient<$Result.GetResult<Prisma.$LikeNovelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LikeNovels.
     * @param {LikeNovelCreateManyArgs} args - Arguments to create many LikeNovels.
     * @example
     * // Create many LikeNovels
     * const likeNovel = await prisma.likeNovel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeNovelCreateManyArgs>(args?: SelectSubset<T, LikeNovelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LikeNovels and returns the data saved in the database.
     * @param {LikeNovelCreateManyAndReturnArgs} args - Arguments to create many LikeNovels.
     * @example
     * // Create many LikeNovels
     * const likeNovel = await prisma.likeNovel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LikeNovels and only return the `id`
     * const likeNovelWithIdOnly = await prisma.likeNovel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeNovelCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeNovelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeNovelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LikeNovel.
     * @param {LikeNovelDeleteArgs} args - Arguments to delete one LikeNovel.
     * @example
     * // Delete one LikeNovel
     * const LikeNovel = await prisma.likeNovel.delete({
     *   where: {
     *     // ... filter to delete one LikeNovel
     *   }
     * })
     * 
     */
    delete<T extends LikeNovelDeleteArgs>(args: SelectSubset<T, LikeNovelDeleteArgs<ExtArgs>>): Prisma__LikeNovelClient<$Result.GetResult<Prisma.$LikeNovelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LikeNovel.
     * @param {LikeNovelUpdateArgs} args - Arguments to update one LikeNovel.
     * @example
     * // Update one LikeNovel
     * const likeNovel = await prisma.likeNovel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeNovelUpdateArgs>(args: SelectSubset<T, LikeNovelUpdateArgs<ExtArgs>>): Prisma__LikeNovelClient<$Result.GetResult<Prisma.$LikeNovelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LikeNovels.
     * @param {LikeNovelDeleteManyArgs} args - Arguments to filter LikeNovels to delete.
     * @example
     * // Delete a few LikeNovels
     * const { count } = await prisma.likeNovel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeNovelDeleteManyArgs>(args?: SelectSubset<T, LikeNovelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikeNovels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeNovelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikeNovels
     * const likeNovel = await prisma.likeNovel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeNovelUpdateManyArgs>(args: SelectSubset<T, LikeNovelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikeNovels and returns the data updated in the database.
     * @param {LikeNovelUpdateManyAndReturnArgs} args - Arguments to update many LikeNovels.
     * @example
     * // Update many LikeNovels
     * const likeNovel = await prisma.likeNovel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LikeNovels and only return the `id`
     * const likeNovelWithIdOnly = await prisma.likeNovel.updateManyAndReturn({
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
    updateManyAndReturn<T extends LikeNovelUpdateManyAndReturnArgs>(args: SelectSubset<T, LikeNovelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeNovelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LikeNovel.
     * @param {LikeNovelUpsertArgs} args - Arguments to update or create a LikeNovel.
     * @example
     * // Update or create a LikeNovel
     * const likeNovel = await prisma.likeNovel.upsert({
     *   create: {
     *     // ... data to create a LikeNovel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikeNovel we want to update
     *   }
     * })
     */
    upsert<T extends LikeNovelUpsertArgs>(args: SelectSubset<T, LikeNovelUpsertArgs<ExtArgs>>): Prisma__LikeNovelClient<$Result.GetResult<Prisma.$LikeNovelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LikeNovels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeNovelCountArgs} args - Arguments to filter LikeNovels to count.
     * @example
     * // Count the number of LikeNovels
     * const count = await prisma.likeNovel.count({
     *   where: {
     *     // ... the filter for the LikeNovels we want to count
     *   }
     * })
    **/
    count<T extends LikeNovelCountArgs>(
      args?: Subset<T, LikeNovelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeNovelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikeNovel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeNovelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeNovelAggregateArgs>(args: Subset<T, LikeNovelAggregateArgs>): Prisma.PrismaPromise<GetLikeNovelAggregateType<T>>

    /**
     * Group by LikeNovel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeNovelGroupByArgs} args - Group by arguments.
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
      T extends LikeNovelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeNovelGroupByArgs['orderBy'] }
        : { orderBy?: LikeNovelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikeNovelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeNovelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikeNovel model
   */
  readonly fields: LikeNovelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikeNovel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeNovelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    novel<T extends NovelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NovelDefaultArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LikeNovel model
   */ 
  interface LikeNovelFieldRefs {
    readonly id: FieldRef<"LikeNovel", 'String'>
    readonly userId: FieldRef<"LikeNovel", 'String'>
    readonly novelId: FieldRef<"LikeNovel", 'String'>
    readonly createdAt: FieldRef<"LikeNovel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LikeNovel findUnique
   */
  export type LikeNovelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeNovel
     */
    select?: LikeNovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeNovel
     */
    omit?: LikeNovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeNovelInclude<ExtArgs> | null
    /**
     * Filter, which LikeNovel to fetch.
     */
    where: LikeNovelWhereUniqueInput
  }

  /**
   * LikeNovel findUniqueOrThrow
   */
  export type LikeNovelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeNovel
     */
    select?: LikeNovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeNovel
     */
    omit?: LikeNovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeNovelInclude<ExtArgs> | null
    /**
     * Filter, which LikeNovel to fetch.
     */
    where: LikeNovelWhereUniqueInput
  }

  /**
   * LikeNovel findFirst
   */
  export type LikeNovelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeNovel
     */
    select?: LikeNovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeNovel
     */
    omit?: LikeNovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeNovelInclude<ExtArgs> | null
    /**
     * Filter, which LikeNovel to fetch.
     */
    where?: LikeNovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeNovels to fetch.
     */
    orderBy?: LikeNovelOrderByWithRelationInput | LikeNovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikeNovels.
     */
    cursor?: LikeNovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeNovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeNovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikeNovels.
     */
    distinct?: LikeNovelScalarFieldEnum | LikeNovelScalarFieldEnum[]
  }

  /**
   * LikeNovel findFirstOrThrow
   */
  export type LikeNovelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeNovel
     */
    select?: LikeNovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeNovel
     */
    omit?: LikeNovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeNovelInclude<ExtArgs> | null
    /**
     * Filter, which LikeNovel to fetch.
     */
    where?: LikeNovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeNovels to fetch.
     */
    orderBy?: LikeNovelOrderByWithRelationInput | LikeNovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikeNovels.
     */
    cursor?: LikeNovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeNovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeNovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikeNovels.
     */
    distinct?: LikeNovelScalarFieldEnum | LikeNovelScalarFieldEnum[]
  }

  /**
   * LikeNovel findMany
   */
  export type LikeNovelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeNovel
     */
    select?: LikeNovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeNovel
     */
    omit?: LikeNovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeNovelInclude<ExtArgs> | null
    /**
     * Filter, which LikeNovels to fetch.
     */
    where?: LikeNovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeNovels to fetch.
     */
    orderBy?: LikeNovelOrderByWithRelationInput | LikeNovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikeNovels.
     */
    cursor?: LikeNovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeNovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeNovels.
     */
    skip?: number
    distinct?: LikeNovelScalarFieldEnum | LikeNovelScalarFieldEnum[]
  }

  /**
   * LikeNovel create
   */
  export type LikeNovelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeNovel
     */
    select?: LikeNovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeNovel
     */
    omit?: LikeNovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeNovelInclude<ExtArgs> | null
    /**
     * The data needed to create a LikeNovel.
     */
    data: XOR<LikeNovelCreateInput, LikeNovelUncheckedCreateInput>
  }

  /**
   * LikeNovel createMany
   */
  export type LikeNovelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikeNovels.
     */
    data: LikeNovelCreateManyInput | LikeNovelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LikeNovel createManyAndReturn
   */
  export type LikeNovelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeNovel
     */
    select?: LikeNovelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikeNovel
     */
    omit?: LikeNovelOmit<ExtArgs> | null
    /**
     * The data used to create many LikeNovels.
     */
    data: LikeNovelCreateManyInput | LikeNovelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeNovelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikeNovel update
   */
  export type LikeNovelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeNovel
     */
    select?: LikeNovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeNovel
     */
    omit?: LikeNovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeNovelInclude<ExtArgs> | null
    /**
     * The data needed to update a LikeNovel.
     */
    data: XOR<LikeNovelUpdateInput, LikeNovelUncheckedUpdateInput>
    /**
     * Choose, which LikeNovel to update.
     */
    where: LikeNovelWhereUniqueInput
  }

  /**
   * LikeNovel updateMany
   */
  export type LikeNovelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikeNovels.
     */
    data: XOR<LikeNovelUpdateManyMutationInput, LikeNovelUncheckedUpdateManyInput>
    /**
     * Filter which LikeNovels to update
     */
    where?: LikeNovelWhereInput
    /**
     * Limit how many LikeNovels to update.
     */
    limit?: number
  }

  /**
   * LikeNovel updateManyAndReturn
   */
  export type LikeNovelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeNovel
     */
    select?: LikeNovelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikeNovel
     */
    omit?: LikeNovelOmit<ExtArgs> | null
    /**
     * The data used to update LikeNovels.
     */
    data: XOR<LikeNovelUpdateManyMutationInput, LikeNovelUncheckedUpdateManyInput>
    /**
     * Filter which LikeNovels to update
     */
    where?: LikeNovelWhereInput
    /**
     * Limit how many LikeNovels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeNovelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikeNovel upsert
   */
  export type LikeNovelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeNovel
     */
    select?: LikeNovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeNovel
     */
    omit?: LikeNovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeNovelInclude<ExtArgs> | null
    /**
     * The filter to search for the LikeNovel to update in case it exists.
     */
    where: LikeNovelWhereUniqueInput
    /**
     * In case the LikeNovel found by the `where` argument doesn't exist, create a new LikeNovel with this data.
     */
    create: XOR<LikeNovelCreateInput, LikeNovelUncheckedCreateInput>
    /**
     * In case the LikeNovel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeNovelUpdateInput, LikeNovelUncheckedUpdateInput>
  }

  /**
   * LikeNovel delete
   */
  export type LikeNovelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeNovel
     */
    select?: LikeNovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeNovel
     */
    omit?: LikeNovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeNovelInclude<ExtArgs> | null
    /**
     * Filter which LikeNovel to delete.
     */
    where: LikeNovelWhereUniqueInput
  }

  /**
   * LikeNovel deleteMany
   */
  export type LikeNovelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikeNovels to delete
     */
    where?: LikeNovelWhereInput
    /**
     * Limit how many LikeNovels to delete.
     */
    limit?: number
  }

  /**
   * LikeNovel without action
   */
  export type LikeNovelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeNovel
     */
    select?: LikeNovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeNovel
     */
    omit?: LikeNovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeNovelInclude<ExtArgs> | null
  }


  /**
   * Model LikeSentence
   */

  export type AggregateLikeSentence = {
    _count: LikeSentenceCountAggregateOutputType | null
    _avg: LikeSentenceAvgAggregateOutputType | null
    _sum: LikeSentenceSumAggregateOutputType | null
    _min: LikeSentenceMinAggregateOutputType | null
    _max: LikeSentenceMaxAggregateOutputType | null
  }

  export type LikeSentenceAvgAggregateOutputType = {
    startIndex: number | null
    endIndex: number | null
  }

  export type LikeSentenceSumAggregateOutputType = {
    startIndex: number | null
    endIndex: number | null
  }

  export type LikeSentenceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    novelId: string | null
    startIndex: number | null
    endIndex: number | null
    createdAt: Date | null
  }

  export type LikeSentenceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    novelId: string | null
    startIndex: number | null
    endIndex: number | null
    createdAt: Date | null
  }

  export type LikeSentenceCountAggregateOutputType = {
    id: number
    userId: number
    novelId: number
    startIndex: number
    endIndex: number
    createdAt: number
    _all: number
  }


  export type LikeSentenceAvgAggregateInputType = {
    startIndex?: true
    endIndex?: true
  }

  export type LikeSentenceSumAggregateInputType = {
    startIndex?: true
    endIndex?: true
  }

  export type LikeSentenceMinAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
    startIndex?: true
    endIndex?: true
    createdAt?: true
  }

  export type LikeSentenceMaxAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
    startIndex?: true
    endIndex?: true
    createdAt?: true
  }

  export type LikeSentenceCountAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
    startIndex?: true
    endIndex?: true
    createdAt?: true
    _all?: true
  }

  export type LikeSentenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikeSentence to aggregate.
     */
    where?: LikeSentenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeSentences to fetch.
     */
    orderBy?: LikeSentenceOrderByWithRelationInput | LikeSentenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeSentenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeSentences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeSentences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikeSentences
    **/
    _count?: true | LikeSentenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeSentenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSentenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeSentenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeSentenceMaxAggregateInputType
  }

  export type GetLikeSentenceAggregateType<T extends LikeSentenceAggregateArgs> = {
        [P in keyof T & keyof AggregateLikeSentence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikeSentence[P]>
      : GetScalarType<T[P], AggregateLikeSentence[P]>
  }




  export type LikeSentenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeSentenceWhereInput
    orderBy?: LikeSentenceOrderByWithAggregationInput | LikeSentenceOrderByWithAggregationInput[]
    by: LikeSentenceScalarFieldEnum[] | LikeSentenceScalarFieldEnum
    having?: LikeSentenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeSentenceCountAggregateInputType | true
    _avg?: LikeSentenceAvgAggregateInputType
    _sum?: LikeSentenceSumAggregateInputType
    _min?: LikeSentenceMinAggregateInputType
    _max?: LikeSentenceMaxAggregateInputType
  }

  export type LikeSentenceGroupByOutputType = {
    id: string
    userId: string
    novelId: string
    startIndex: number
    endIndex: number
    createdAt: Date
    _count: LikeSentenceCountAggregateOutputType | null
    _avg: LikeSentenceAvgAggregateOutputType | null
    _sum: LikeSentenceSumAggregateOutputType | null
    _min: LikeSentenceMinAggregateOutputType | null
    _max: LikeSentenceMaxAggregateOutputType | null
  }

  type GetLikeSentenceGroupByPayload<T extends LikeSentenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeSentenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeSentenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeSentenceGroupByOutputType[P]>
            : GetScalarType<T[P], LikeSentenceGroupByOutputType[P]>
        }
      >
    >


  export type LikeSentenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    startIndex?: boolean
    endIndex?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likeSentence"]>

  export type LikeSentenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    startIndex?: boolean
    endIndex?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likeSentence"]>

  export type LikeSentenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    startIndex?: boolean
    endIndex?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likeSentence"]>

  export type LikeSentenceSelectScalar = {
    id?: boolean
    userId?: boolean
    novelId?: boolean
    startIndex?: boolean
    endIndex?: boolean
    createdAt?: boolean
  }

  export type LikeSentenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "novelId" | "startIndex" | "endIndex" | "createdAt", ExtArgs["result"]["likeSentence"]>
  export type LikeSentenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }
  export type LikeSentenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }
  export type LikeSentenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }

  export type $LikeSentencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikeSentence"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      novel: Prisma.$NovelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      novelId: string
      startIndex: number
      endIndex: number
      createdAt: Date
    }, ExtArgs["result"]["likeSentence"]>
    composites: {}
  }

  type LikeSentenceGetPayload<S extends boolean | null | undefined | LikeSentenceDefaultArgs> = $Result.GetResult<Prisma.$LikeSentencePayload, S>

  type LikeSentenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeSentenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeSentenceCountAggregateInputType | true
    }

  export interface LikeSentenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikeSentence'], meta: { name: 'LikeSentence' } }
    /**
     * Find zero or one LikeSentence that matches the filter.
     * @param {LikeSentenceFindUniqueArgs} args - Arguments to find a LikeSentence
     * @example
     * // Get one LikeSentence
     * const likeSentence = await prisma.likeSentence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeSentenceFindUniqueArgs>(args: SelectSubset<T, LikeSentenceFindUniqueArgs<ExtArgs>>): Prisma__LikeSentenceClient<$Result.GetResult<Prisma.$LikeSentencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LikeSentence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeSentenceFindUniqueOrThrowArgs} args - Arguments to find a LikeSentence
     * @example
     * // Get one LikeSentence
     * const likeSentence = await prisma.likeSentence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeSentenceFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeSentenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeSentenceClient<$Result.GetResult<Prisma.$LikeSentencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikeSentence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeSentenceFindFirstArgs} args - Arguments to find a LikeSentence
     * @example
     * // Get one LikeSentence
     * const likeSentence = await prisma.likeSentence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeSentenceFindFirstArgs>(args?: SelectSubset<T, LikeSentenceFindFirstArgs<ExtArgs>>): Prisma__LikeSentenceClient<$Result.GetResult<Prisma.$LikeSentencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LikeSentence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeSentenceFindFirstOrThrowArgs} args - Arguments to find a LikeSentence
     * @example
     * // Get one LikeSentence
     * const likeSentence = await prisma.likeSentence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeSentenceFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeSentenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeSentenceClient<$Result.GetResult<Prisma.$LikeSentencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LikeSentences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeSentenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikeSentences
     * const likeSentences = await prisma.likeSentence.findMany()
     * 
     * // Get first 10 LikeSentences
     * const likeSentences = await prisma.likeSentence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeSentenceWithIdOnly = await prisma.likeSentence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeSentenceFindManyArgs>(args?: SelectSubset<T, LikeSentenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeSentencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LikeSentence.
     * @param {LikeSentenceCreateArgs} args - Arguments to create a LikeSentence.
     * @example
     * // Create one LikeSentence
     * const LikeSentence = await prisma.likeSentence.create({
     *   data: {
     *     // ... data to create a LikeSentence
     *   }
     * })
     * 
     */
    create<T extends LikeSentenceCreateArgs>(args: SelectSubset<T, LikeSentenceCreateArgs<ExtArgs>>): Prisma__LikeSentenceClient<$Result.GetResult<Prisma.$LikeSentencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LikeSentences.
     * @param {LikeSentenceCreateManyArgs} args - Arguments to create many LikeSentences.
     * @example
     * // Create many LikeSentences
     * const likeSentence = await prisma.likeSentence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeSentenceCreateManyArgs>(args?: SelectSubset<T, LikeSentenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LikeSentences and returns the data saved in the database.
     * @param {LikeSentenceCreateManyAndReturnArgs} args - Arguments to create many LikeSentences.
     * @example
     * // Create many LikeSentences
     * const likeSentence = await prisma.likeSentence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LikeSentences and only return the `id`
     * const likeSentenceWithIdOnly = await prisma.likeSentence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeSentenceCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeSentenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeSentencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LikeSentence.
     * @param {LikeSentenceDeleteArgs} args - Arguments to delete one LikeSentence.
     * @example
     * // Delete one LikeSentence
     * const LikeSentence = await prisma.likeSentence.delete({
     *   where: {
     *     // ... filter to delete one LikeSentence
     *   }
     * })
     * 
     */
    delete<T extends LikeSentenceDeleteArgs>(args: SelectSubset<T, LikeSentenceDeleteArgs<ExtArgs>>): Prisma__LikeSentenceClient<$Result.GetResult<Prisma.$LikeSentencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LikeSentence.
     * @param {LikeSentenceUpdateArgs} args - Arguments to update one LikeSentence.
     * @example
     * // Update one LikeSentence
     * const likeSentence = await prisma.likeSentence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeSentenceUpdateArgs>(args: SelectSubset<T, LikeSentenceUpdateArgs<ExtArgs>>): Prisma__LikeSentenceClient<$Result.GetResult<Prisma.$LikeSentencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LikeSentences.
     * @param {LikeSentenceDeleteManyArgs} args - Arguments to filter LikeSentences to delete.
     * @example
     * // Delete a few LikeSentences
     * const { count } = await prisma.likeSentence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeSentenceDeleteManyArgs>(args?: SelectSubset<T, LikeSentenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikeSentences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeSentenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikeSentences
     * const likeSentence = await prisma.likeSentence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeSentenceUpdateManyArgs>(args: SelectSubset<T, LikeSentenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikeSentences and returns the data updated in the database.
     * @param {LikeSentenceUpdateManyAndReturnArgs} args - Arguments to update many LikeSentences.
     * @example
     * // Update many LikeSentences
     * const likeSentence = await prisma.likeSentence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LikeSentences and only return the `id`
     * const likeSentenceWithIdOnly = await prisma.likeSentence.updateManyAndReturn({
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
    updateManyAndReturn<T extends LikeSentenceUpdateManyAndReturnArgs>(args: SelectSubset<T, LikeSentenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeSentencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LikeSentence.
     * @param {LikeSentenceUpsertArgs} args - Arguments to update or create a LikeSentence.
     * @example
     * // Update or create a LikeSentence
     * const likeSentence = await prisma.likeSentence.upsert({
     *   create: {
     *     // ... data to create a LikeSentence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikeSentence we want to update
     *   }
     * })
     */
    upsert<T extends LikeSentenceUpsertArgs>(args: SelectSubset<T, LikeSentenceUpsertArgs<ExtArgs>>): Prisma__LikeSentenceClient<$Result.GetResult<Prisma.$LikeSentencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LikeSentences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeSentenceCountArgs} args - Arguments to filter LikeSentences to count.
     * @example
     * // Count the number of LikeSentences
     * const count = await prisma.likeSentence.count({
     *   where: {
     *     // ... the filter for the LikeSentences we want to count
     *   }
     * })
    **/
    count<T extends LikeSentenceCountArgs>(
      args?: Subset<T, LikeSentenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeSentenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikeSentence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeSentenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeSentenceAggregateArgs>(args: Subset<T, LikeSentenceAggregateArgs>): Prisma.PrismaPromise<GetLikeSentenceAggregateType<T>>

    /**
     * Group by LikeSentence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeSentenceGroupByArgs} args - Group by arguments.
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
      T extends LikeSentenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeSentenceGroupByArgs['orderBy'] }
        : { orderBy?: LikeSentenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikeSentenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeSentenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikeSentence model
   */
  readonly fields: LikeSentenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikeSentence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeSentenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    novel<T extends NovelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NovelDefaultArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LikeSentence model
   */ 
  interface LikeSentenceFieldRefs {
    readonly id: FieldRef<"LikeSentence", 'String'>
    readonly userId: FieldRef<"LikeSentence", 'String'>
    readonly novelId: FieldRef<"LikeSentence", 'String'>
    readonly startIndex: FieldRef<"LikeSentence", 'Int'>
    readonly endIndex: FieldRef<"LikeSentence", 'Int'>
    readonly createdAt: FieldRef<"LikeSentence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LikeSentence findUnique
   */
  export type LikeSentenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeSentence
     */
    select?: LikeSentenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeSentence
     */
    omit?: LikeSentenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeSentenceInclude<ExtArgs> | null
    /**
     * Filter, which LikeSentence to fetch.
     */
    where: LikeSentenceWhereUniqueInput
  }

  /**
   * LikeSentence findUniqueOrThrow
   */
  export type LikeSentenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeSentence
     */
    select?: LikeSentenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeSentence
     */
    omit?: LikeSentenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeSentenceInclude<ExtArgs> | null
    /**
     * Filter, which LikeSentence to fetch.
     */
    where: LikeSentenceWhereUniqueInput
  }

  /**
   * LikeSentence findFirst
   */
  export type LikeSentenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeSentence
     */
    select?: LikeSentenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeSentence
     */
    omit?: LikeSentenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeSentenceInclude<ExtArgs> | null
    /**
     * Filter, which LikeSentence to fetch.
     */
    where?: LikeSentenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeSentences to fetch.
     */
    orderBy?: LikeSentenceOrderByWithRelationInput | LikeSentenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikeSentences.
     */
    cursor?: LikeSentenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeSentences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeSentences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikeSentences.
     */
    distinct?: LikeSentenceScalarFieldEnum | LikeSentenceScalarFieldEnum[]
  }

  /**
   * LikeSentence findFirstOrThrow
   */
  export type LikeSentenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeSentence
     */
    select?: LikeSentenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeSentence
     */
    omit?: LikeSentenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeSentenceInclude<ExtArgs> | null
    /**
     * Filter, which LikeSentence to fetch.
     */
    where?: LikeSentenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeSentences to fetch.
     */
    orderBy?: LikeSentenceOrderByWithRelationInput | LikeSentenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikeSentences.
     */
    cursor?: LikeSentenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeSentences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeSentences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikeSentences.
     */
    distinct?: LikeSentenceScalarFieldEnum | LikeSentenceScalarFieldEnum[]
  }

  /**
   * LikeSentence findMany
   */
  export type LikeSentenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeSentence
     */
    select?: LikeSentenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeSentence
     */
    omit?: LikeSentenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeSentenceInclude<ExtArgs> | null
    /**
     * Filter, which LikeSentences to fetch.
     */
    where?: LikeSentenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeSentences to fetch.
     */
    orderBy?: LikeSentenceOrderByWithRelationInput | LikeSentenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikeSentences.
     */
    cursor?: LikeSentenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeSentences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeSentences.
     */
    skip?: number
    distinct?: LikeSentenceScalarFieldEnum | LikeSentenceScalarFieldEnum[]
  }

  /**
   * LikeSentence create
   */
  export type LikeSentenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeSentence
     */
    select?: LikeSentenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeSentence
     */
    omit?: LikeSentenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeSentenceInclude<ExtArgs> | null
    /**
     * The data needed to create a LikeSentence.
     */
    data: XOR<LikeSentenceCreateInput, LikeSentenceUncheckedCreateInput>
  }

  /**
   * LikeSentence createMany
   */
  export type LikeSentenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikeSentences.
     */
    data: LikeSentenceCreateManyInput | LikeSentenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LikeSentence createManyAndReturn
   */
  export type LikeSentenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeSentence
     */
    select?: LikeSentenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikeSentence
     */
    omit?: LikeSentenceOmit<ExtArgs> | null
    /**
     * The data used to create many LikeSentences.
     */
    data: LikeSentenceCreateManyInput | LikeSentenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeSentenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikeSentence update
   */
  export type LikeSentenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeSentence
     */
    select?: LikeSentenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeSentence
     */
    omit?: LikeSentenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeSentenceInclude<ExtArgs> | null
    /**
     * The data needed to update a LikeSentence.
     */
    data: XOR<LikeSentenceUpdateInput, LikeSentenceUncheckedUpdateInput>
    /**
     * Choose, which LikeSentence to update.
     */
    where: LikeSentenceWhereUniqueInput
  }

  /**
   * LikeSentence updateMany
   */
  export type LikeSentenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikeSentences.
     */
    data: XOR<LikeSentenceUpdateManyMutationInput, LikeSentenceUncheckedUpdateManyInput>
    /**
     * Filter which LikeSentences to update
     */
    where?: LikeSentenceWhereInput
    /**
     * Limit how many LikeSentences to update.
     */
    limit?: number
  }

  /**
   * LikeSentence updateManyAndReturn
   */
  export type LikeSentenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeSentence
     */
    select?: LikeSentenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikeSentence
     */
    omit?: LikeSentenceOmit<ExtArgs> | null
    /**
     * The data used to update LikeSentences.
     */
    data: XOR<LikeSentenceUpdateManyMutationInput, LikeSentenceUncheckedUpdateManyInput>
    /**
     * Filter which LikeSentences to update
     */
    where?: LikeSentenceWhereInput
    /**
     * Limit how many LikeSentences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeSentenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikeSentence upsert
   */
  export type LikeSentenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeSentence
     */
    select?: LikeSentenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeSentence
     */
    omit?: LikeSentenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeSentenceInclude<ExtArgs> | null
    /**
     * The filter to search for the LikeSentence to update in case it exists.
     */
    where: LikeSentenceWhereUniqueInput
    /**
     * In case the LikeSentence found by the `where` argument doesn't exist, create a new LikeSentence with this data.
     */
    create: XOR<LikeSentenceCreateInput, LikeSentenceUncheckedCreateInput>
    /**
     * In case the LikeSentence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeSentenceUpdateInput, LikeSentenceUncheckedUpdateInput>
  }

  /**
   * LikeSentence delete
   */
  export type LikeSentenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeSentence
     */
    select?: LikeSentenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeSentence
     */
    omit?: LikeSentenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeSentenceInclude<ExtArgs> | null
    /**
     * Filter which LikeSentence to delete.
     */
    where: LikeSentenceWhereUniqueInput
  }

  /**
   * LikeSentence deleteMany
   */
  export type LikeSentenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikeSentences to delete
     */
    where?: LikeSentenceWhereInput
    /**
     * Limit how many LikeSentences to delete.
     */
    limit?: number
  }

  /**
   * LikeSentence without action
   */
  export type LikeSentenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeSentence
     */
    select?: LikeSentenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikeSentence
     */
    omit?: LikeSentenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeSentenceInclude<ExtArgs> | null
  }


  /**
   * Model Bookmark
   */

  export type AggregateBookmark = {
    _count: BookmarkCountAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  export type BookmarkMinAggregateOutputType = {
    id: string | null
    userId: string | null
    novelId: string | null
    createdAt: Date | null
  }

  export type BookmarkMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    novelId: string | null
    createdAt: Date | null
  }

  export type BookmarkCountAggregateOutputType = {
    id: number
    userId: number
    novelId: number
    createdAt: number
    _all: number
  }


  export type BookmarkMinAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
    createdAt?: true
  }

  export type BookmarkMaxAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
    createdAt?: true
  }

  export type BookmarkCountAggregateInputType = {
    id?: true
    userId?: true
    novelId?: true
    createdAt?: true
    _all?: true
  }

  export type BookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmark to aggregate.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookmarks
    **/
    _count?: true | BookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkMaxAggregateInputType
  }

  export type GetBookmarkAggregateType<T extends BookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmark[P]>
      : GetScalarType<T[P], AggregateBookmark[P]>
  }




  export type BookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithAggregationInput | BookmarkOrderByWithAggregationInput[]
    by: BookmarkScalarFieldEnum[] | BookmarkScalarFieldEnum
    having?: BookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarkCountAggregateInputType | true
    _min?: BookmarkMinAggregateInputType
    _max?: BookmarkMaxAggregateInputType
  }

  export type BookmarkGroupByOutputType = {
    id: string
    userId: string
    novelId: string
    createdAt: Date
    _count: BookmarkCountAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  type GetBookmarkGroupByPayload<T extends BookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
        }
      >
    >


  export type BookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    novelId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectScalar = {
    id?: boolean
    userId?: boolean
    novelId?: boolean
    createdAt?: boolean
  }

  export type BookmarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "novelId" | "createdAt", ExtArgs["result"]["bookmark"]>
  export type BookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }
  export type BookmarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }
  export type BookmarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    novel?: boolean | NovelDefaultArgs<ExtArgs>
  }

  export type $BookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookmark"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      novel: Prisma.$NovelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      novelId: string
      createdAt: Date
    }, ExtArgs["result"]["bookmark"]>
    composites: {}
  }

  type BookmarkGetPayload<S extends boolean | null | undefined | BookmarkDefaultArgs> = $Result.GetResult<Prisma.$BookmarkPayload, S>

  type BookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookmarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookmarkCountAggregateInputType | true
    }

  export interface BookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookmark'], meta: { name: 'Bookmark' } }
    /**
     * Find zero or one Bookmark that matches the filter.
     * @param {BookmarkFindUniqueArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookmarkFindUniqueArgs>(args: SelectSubset<T, BookmarkFindUniqueArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookmark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookmarkFindUniqueOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookmarkFindUniqueOrThrowArgs>(args: SelectSubset<T, BookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookmarkFindFirstArgs>(args?: SelectSubset<T, BookmarkFindFirstArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookmarkFindFirstOrThrowArgs>(args?: SelectSubset<T, BookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookmarks
     * const bookmarks = await prisma.bookmark.findMany()
     * 
     * // Get first 10 Bookmarks
     * const bookmarks = await prisma.bookmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookmarkFindManyArgs>(args?: SelectSubset<T, BookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookmark.
     * @param {BookmarkCreateArgs} args - Arguments to create a Bookmark.
     * @example
     * // Create one Bookmark
     * const Bookmark = await prisma.bookmark.create({
     *   data: {
     *     // ... data to create a Bookmark
     *   }
     * })
     * 
     */
    create<T extends BookmarkCreateArgs>(args: SelectSubset<T, BookmarkCreateArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookmarks.
     * @param {BookmarkCreateManyArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookmarkCreateManyArgs>(args?: SelectSubset<T, BookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookmarks and returns the data saved in the database.
     * @param {BookmarkCreateManyAndReturnArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookmarks and only return the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookmarkCreateManyAndReturnArgs>(args?: SelectSubset<T, BookmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookmark.
     * @param {BookmarkDeleteArgs} args - Arguments to delete one Bookmark.
     * @example
     * // Delete one Bookmark
     * const Bookmark = await prisma.bookmark.delete({
     *   where: {
     *     // ... filter to delete one Bookmark
     *   }
     * })
     * 
     */
    delete<T extends BookmarkDeleteArgs>(args: SelectSubset<T, BookmarkDeleteArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookmark.
     * @param {BookmarkUpdateArgs} args - Arguments to update one Bookmark.
     * @example
     * // Update one Bookmark
     * const bookmark = await prisma.bookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookmarkUpdateArgs>(args: SelectSubset<T, BookmarkUpdateArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookmarks.
     * @param {BookmarkDeleteManyArgs} args - Arguments to filter Bookmarks to delete.
     * @example
     * // Delete a few Bookmarks
     * const { count } = await prisma.bookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookmarkDeleteManyArgs>(args?: SelectSubset<T, BookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookmarkUpdateManyArgs>(args: SelectSubset<T, BookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks and returns the data updated in the database.
     * @param {BookmarkUpdateManyAndReturnArgs} args - Arguments to update many Bookmarks.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookmarks and only return the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookmarkUpdateManyAndReturnArgs>(args: SelectSubset<T, BookmarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookmark.
     * @param {BookmarkUpsertArgs} args - Arguments to update or create a Bookmark.
     * @example
     * // Update or create a Bookmark
     * const bookmark = await prisma.bookmark.upsert({
     *   create: {
     *     // ... data to create a Bookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookmark we want to update
     *   }
     * })
     */
    upsert<T extends BookmarkUpsertArgs>(args: SelectSubset<T, BookmarkUpsertArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCountArgs} args - Arguments to filter Bookmarks to count.
     * @example
     * // Count the number of Bookmarks
     * const count = await prisma.bookmark.count({
     *   where: {
     *     // ... the filter for the Bookmarks we want to count
     *   }
     * })
    **/
    count<T extends BookmarkCountArgs>(
      args?: Subset<T, BookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookmarkAggregateArgs>(args: Subset<T, BookmarkAggregateArgs>): Prisma.PrismaPromise<GetBookmarkAggregateType<T>>

    /**
     * Group by Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkGroupByArgs} args - Group by arguments.
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
      T extends BookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarkGroupByArgs['orderBy'] }
        : { orderBy?: BookmarkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookmark model
   */
  readonly fields: BookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    novel<T extends NovelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NovelDefaultArgs<ExtArgs>>): Prisma__NovelClient<$Result.GetResult<Prisma.$NovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bookmark model
   */ 
  interface BookmarkFieldRefs {
    readonly id: FieldRef<"Bookmark", 'String'>
    readonly userId: FieldRef<"Bookmark", 'String'>
    readonly novelId: FieldRef<"Bookmark", 'String'>
    readonly createdAt: FieldRef<"Bookmark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bookmark findUnique
   */
  export type BookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findUniqueOrThrow
   */
  export type BookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findFirst
   */
  export type BookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark findFirstOrThrow
   */
  export type BookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark findMany
   */
  export type BookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark create
   */
  export type BookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookmark.
     */
    data: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
  }

  /**
   * Bookmark createMany
   */
  export type BookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookmark createManyAndReturn
   */
  export type BookmarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmark update
   */
  export type BookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookmark.
     */
    data: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
    /**
     * Choose, which Bookmark to update.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark updateMany
   */
  export type BookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput
    /**
     * Limit how many Bookmarks to update.
     */
    limit?: number
  }

  /**
   * Bookmark updateManyAndReturn
   */
  export type BookmarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput
    /**
     * Limit how many Bookmarks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmark upsert
   */
  export type BookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookmark to update in case it exists.
     */
    where: BookmarkWhereUniqueInput
    /**
     * In case the Bookmark found by the `where` argument doesn't exist, create a new Bookmark with this data.
     */
    create: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
    /**
     * In case the Bookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
  }

  /**
   * Bookmark delete
   */
  export type BookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter which Bookmark to delete.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark deleteMany
   */
  export type BookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmarks to delete
     */
    where?: BookmarkWhereInput
    /**
     * Limit how many Bookmarks to delete.
     */
    limit?: number
  }

  /**
   * Bookmark without action
   */
  export type BookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
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
    username: 'username',
    email: 'email',
    password: 'password',
    profileImagePath: 'profileImagePath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FollowScalarFieldEnum: {
    id: 'id',
    followerId: 'followerId',
    followeeId: 'followeeId',
    createdAt: 'createdAt'
  };

  export type FollowScalarFieldEnum = (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum]


  export const ViewHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    novelId: 'novelId'
  };

  export type ViewHistoryScalarFieldEnum = (typeof ViewHistoryScalarFieldEnum)[keyof typeof ViewHistoryScalarFieldEnum]


  export const NovelScalarFieldEnum: {
    id: 'id',
    sharedId: 'sharedId',
    title: 'title',
    authorId: 'authorId',
    coverImagePath: 'coverImagePath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NovelScalarFieldEnum = (typeof NovelScalarFieldEnum)[keyof typeof NovelScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    categoryId: 'categoryId',
    categoryName: 'categoryName'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    sharedId: 'sharedId',
    userId: 'userId',
    novelId: 'novelId',
    startIndex: 'startIndex',
    endIndex: 'endIndex',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const LikeNovelScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    novelId: 'novelId',
    createdAt: 'createdAt'
  };

  export type LikeNovelScalarFieldEnum = (typeof LikeNovelScalarFieldEnum)[keyof typeof LikeNovelScalarFieldEnum]


  export const LikeSentenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    novelId: 'novelId',
    startIndex: 'startIndex',
    endIndex: 'endIndex',
    createdAt: 'createdAt'
  };

  export type LikeSentenceScalarFieldEnum = (typeof LikeSentenceScalarFieldEnum)[keyof typeof LikeSentenceScalarFieldEnum]


  export const BookmarkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    novelId: 'novelId',
    createdAt: 'createdAt'
  };

  export type BookmarkScalarFieldEnum = (typeof BookmarkScalarFieldEnum)[keyof typeof BookmarkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profileImagePath?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    novels?: NovelListRelationFilter
    comments?: CommentListRelationFilter
    likeNovels?: LikeNovelListRelationFilter
    likeSentence?: LikeSentenceListRelationFilter
    viewHistory?: ViewHistoryListRelationFilter
    bookMark?: BookmarkListRelationFilter
    followers?: FollowListRelationFilter
    followees?: FollowListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImagePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    novels?: NovelOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    likeNovels?: LikeNovelOrderByRelationAggregateInput
    likeSentence?: LikeSentenceOrderByRelationAggregateInput
    viewHistory?: ViewHistoryOrderByRelationAggregateInput
    bookMark?: BookmarkOrderByRelationAggregateInput
    followers?: FollowOrderByRelationAggregateInput
    followees?: FollowOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    profileImagePath?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    novels?: NovelListRelationFilter
    comments?: CommentListRelationFilter
    likeNovels?: LikeNovelListRelationFilter
    likeSentence?: LikeSentenceListRelationFilter
    viewHistory?: ViewHistoryListRelationFilter
    bookMark?: BookmarkListRelationFilter
    followers?: FollowListRelationFilter
    followees?: FollowListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImagePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profileImagePath?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FollowWhereInput = {
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    id?: StringFilter<"Follow"> | string
    followerId?: StringFilter<"Follow"> | string
    followeeId?: StringFilter<"Follow"> | string
    createdAt?: DateTimeFilter<"Follow"> | Date | string
    follower?: XOR<UserScalarRelationFilter, UserWhereInput>
    followee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FollowOrderByWithRelationInput = {
    id?: SortOrder
    followerId?: SortOrder
    followeeId?: SortOrder
    createdAt?: SortOrder
    follower?: UserOrderByWithRelationInput
    followee?: UserOrderByWithRelationInput
  }

  export type FollowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    followerId_followeeId?: FollowFollowerIdFolloweeIdCompoundUniqueInput
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    followerId?: StringFilter<"Follow"> | string
    followeeId?: StringFilter<"Follow"> | string
    createdAt?: DateTimeFilter<"Follow"> | Date | string
    follower?: XOR<UserScalarRelationFilter, UserWhereInput>
    followee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "followerId_followeeId">

  export type FollowOrderByWithAggregationInput = {
    id?: SortOrder
    followerId?: SortOrder
    followeeId?: SortOrder
    createdAt?: SortOrder
    _count?: FollowCountOrderByAggregateInput
    _max?: FollowMaxOrderByAggregateInput
    _min?: FollowMinOrderByAggregateInput
  }

  export type FollowScalarWhereWithAggregatesInput = {
    AND?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    OR?: FollowScalarWhereWithAggregatesInput[]
    NOT?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Follow"> | string
    followerId?: StringWithAggregatesFilter<"Follow"> | string
    followeeId?: StringWithAggregatesFilter<"Follow"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Follow"> | Date | string
  }

  export type ViewHistoryWhereInput = {
    AND?: ViewHistoryWhereInput | ViewHistoryWhereInput[]
    OR?: ViewHistoryWhereInput[]
    NOT?: ViewHistoryWhereInput | ViewHistoryWhereInput[]
    id?: StringFilter<"ViewHistory"> | string
    userId?: StringFilter<"ViewHistory"> | string
    novelId?: StringFilter<"ViewHistory"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    novel?: XOR<NovelScalarRelationFilter, NovelWhereInput>
  }

  export type ViewHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    user?: UserOrderByWithRelationInput
    novel?: NovelOrderByWithRelationInput
  }

  export type ViewHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_novelId?: ViewHistoryUserIdNovelIdCompoundUniqueInput
    AND?: ViewHistoryWhereInput | ViewHistoryWhereInput[]
    OR?: ViewHistoryWhereInput[]
    NOT?: ViewHistoryWhereInput | ViewHistoryWhereInput[]
    userId?: StringFilter<"ViewHistory"> | string
    novelId?: StringFilter<"ViewHistory"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    novel?: XOR<NovelScalarRelationFilter, NovelWhereInput>
  }, "id" | "userId_novelId">

  export type ViewHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    _count?: ViewHistoryCountOrderByAggregateInput
    _max?: ViewHistoryMaxOrderByAggregateInput
    _min?: ViewHistoryMinOrderByAggregateInput
  }

  export type ViewHistoryScalarWhereWithAggregatesInput = {
    AND?: ViewHistoryScalarWhereWithAggregatesInput | ViewHistoryScalarWhereWithAggregatesInput[]
    OR?: ViewHistoryScalarWhereWithAggregatesInput[]
    NOT?: ViewHistoryScalarWhereWithAggregatesInput | ViewHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ViewHistory"> | string
    userId?: StringWithAggregatesFilter<"ViewHistory"> | string
    novelId?: StringWithAggregatesFilter<"ViewHistory"> | string
  }

  export type NovelWhereInput = {
    AND?: NovelWhereInput | NovelWhereInput[]
    OR?: NovelWhereInput[]
    NOT?: NovelWhereInput | NovelWhereInput[]
    id?: StringFilter<"Novel"> | string
    sharedId?: StringFilter<"Novel"> | string
    title?: StringFilter<"Novel"> | string
    authorId?: StringNullableFilter<"Novel"> | string | null
    coverImagePath?: StringNullableFilter<"Novel"> | string | null
    createdAt?: DateTimeFilter<"Novel"> | Date | string
    updatedAt?: DateTimeFilter<"Novel"> | Date | string
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    categories?: CategoryListRelationFilter
    comments?: CommentListRelationFilter
    likes?: LikeNovelListRelationFilter
    LikeSentence?: LikeSentenceListRelationFilter
    viewHistory?: ViewHistoryListRelationFilter
    bookmark?: BookmarkListRelationFilter
  }

  export type NovelOrderByWithRelationInput = {
    id?: SortOrder
    sharedId?: SortOrder
    title?: SortOrder
    authorId?: SortOrderInput | SortOrder
    coverImagePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    categories?: CategoryOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    likes?: LikeNovelOrderByRelationAggregateInput
    LikeSentence?: LikeSentenceOrderByRelationAggregateInput
    viewHistory?: ViewHistoryOrderByRelationAggregateInput
    bookmark?: BookmarkOrderByRelationAggregateInput
  }

  export type NovelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sharedId?: string
    AND?: NovelWhereInput | NovelWhereInput[]
    OR?: NovelWhereInput[]
    NOT?: NovelWhereInput | NovelWhereInput[]
    title?: StringFilter<"Novel"> | string
    authorId?: StringNullableFilter<"Novel"> | string | null
    coverImagePath?: StringNullableFilter<"Novel"> | string | null
    createdAt?: DateTimeFilter<"Novel"> | Date | string
    updatedAt?: DateTimeFilter<"Novel"> | Date | string
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    categories?: CategoryListRelationFilter
    comments?: CommentListRelationFilter
    likes?: LikeNovelListRelationFilter
    LikeSentence?: LikeSentenceListRelationFilter
    viewHistory?: ViewHistoryListRelationFilter
    bookmark?: BookmarkListRelationFilter
  }, "id" | "sharedId">

  export type NovelOrderByWithAggregationInput = {
    id?: SortOrder
    sharedId?: SortOrder
    title?: SortOrder
    authorId?: SortOrderInput | SortOrder
    coverImagePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NovelCountOrderByAggregateInput
    _max?: NovelMaxOrderByAggregateInput
    _min?: NovelMinOrderByAggregateInput
  }

  export type NovelScalarWhereWithAggregatesInput = {
    AND?: NovelScalarWhereWithAggregatesInput | NovelScalarWhereWithAggregatesInput[]
    OR?: NovelScalarWhereWithAggregatesInput[]
    NOT?: NovelScalarWhereWithAggregatesInput | NovelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Novel"> | string
    sharedId?: StringWithAggregatesFilter<"Novel"> | string
    title?: StringWithAggregatesFilter<"Novel"> | string
    authorId?: StringNullableWithAggregatesFilter<"Novel"> | string | null
    coverImagePath?: StringNullableWithAggregatesFilter<"Novel"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Novel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Novel"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    categoryId?: StringFilter<"Category"> | string
    categoryName?: StringFilter<"Category"> | string
    novel?: NovelListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    categoryId?: SortOrder
    categoryName?: SortOrder
    novel?: NovelOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    categoryId?: string
    categoryName?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    novel?: NovelListRelationFilter
  }, "categoryId" | "categoryName">

  export type CategoryOrderByWithAggregationInput = {
    categoryId?: SortOrder
    categoryName?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    categoryId?: StringWithAggregatesFilter<"Category"> | string
    categoryName?: StringWithAggregatesFilter<"Category"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    sharedId?: StringFilter<"Comment"> | string
    userId?: StringNullableFilter<"Comment"> | string | null
    novelId?: StringFilter<"Comment"> | string
    startIndex?: IntFilter<"Comment"> | number
    endIndex?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    novel?: XOR<NovelScalarRelationFilter, NovelWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    sharedId?: SortOrder
    userId?: SortOrderInput | SortOrder
    novelId?: SortOrder
    startIndex?: SortOrder
    endIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    novel?: NovelOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sharedId?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    userId?: StringNullableFilter<"Comment"> | string | null
    novelId?: StringFilter<"Comment"> | string
    startIndex?: IntFilter<"Comment"> | number
    endIndex?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    novel?: XOR<NovelScalarRelationFilter, NovelWhereInput>
  }, "id" | "sharedId">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    sharedId?: SortOrder
    userId?: SortOrderInput | SortOrder
    novelId?: SortOrder
    startIndex?: SortOrder
    endIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    sharedId?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    novelId?: StringWithAggregatesFilter<"Comment"> | string
    startIndex?: IntWithAggregatesFilter<"Comment"> | number
    endIndex?: IntWithAggregatesFilter<"Comment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type LikeNovelWhereInput = {
    AND?: LikeNovelWhereInput | LikeNovelWhereInput[]
    OR?: LikeNovelWhereInput[]
    NOT?: LikeNovelWhereInput | LikeNovelWhereInput[]
    id?: StringFilter<"LikeNovel"> | string
    userId?: StringFilter<"LikeNovel"> | string
    novelId?: StringFilter<"LikeNovel"> | string
    createdAt?: DateTimeFilter<"LikeNovel"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    novel?: XOR<NovelScalarRelationFilter, NovelWhereInput>
  }

  export type LikeNovelOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    novel?: NovelOrderByWithRelationInput
  }

  export type LikeNovelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_novelId?: LikeNovelUserIdNovelIdCompoundUniqueInput
    AND?: LikeNovelWhereInput | LikeNovelWhereInput[]
    OR?: LikeNovelWhereInput[]
    NOT?: LikeNovelWhereInput | LikeNovelWhereInput[]
    userId?: StringFilter<"LikeNovel"> | string
    novelId?: StringFilter<"LikeNovel"> | string
    createdAt?: DateTimeFilter<"LikeNovel"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    novel?: XOR<NovelScalarRelationFilter, NovelWhereInput>
  }, "id" | "userId_novelId">

  export type LikeNovelOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    createdAt?: SortOrder
    _count?: LikeNovelCountOrderByAggregateInput
    _max?: LikeNovelMaxOrderByAggregateInput
    _min?: LikeNovelMinOrderByAggregateInput
  }

  export type LikeNovelScalarWhereWithAggregatesInput = {
    AND?: LikeNovelScalarWhereWithAggregatesInput | LikeNovelScalarWhereWithAggregatesInput[]
    OR?: LikeNovelScalarWhereWithAggregatesInput[]
    NOT?: LikeNovelScalarWhereWithAggregatesInput | LikeNovelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LikeNovel"> | string
    userId?: StringWithAggregatesFilter<"LikeNovel"> | string
    novelId?: StringWithAggregatesFilter<"LikeNovel"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LikeNovel"> | Date | string
  }

  export type LikeSentenceWhereInput = {
    AND?: LikeSentenceWhereInput | LikeSentenceWhereInput[]
    OR?: LikeSentenceWhereInput[]
    NOT?: LikeSentenceWhereInput | LikeSentenceWhereInput[]
    id?: StringFilter<"LikeSentence"> | string
    userId?: StringFilter<"LikeSentence"> | string
    novelId?: StringFilter<"LikeSentence"> | string
    startIndex?: IntFilter<"LikeSentence"> | number
    endIndex?: IntFilter<"LikeSentence"> | number
    createdAt?: DateTimeFilter<"LikeSentence"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    novel?: XOR<NovelScalarRelationFilter, NovelWhereInput>
  }

  export type LikeSentenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    startIndex?: SortOrder
    endIndex?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    novel?: NovelOrderByWithRelationInput
  }

  export type LikeSentenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_novelId_startIndex_endIndex?: LikeSentenceUserIdNovelIdStartIndexEndIndexCompoundUniqueInput
    AND?: LikeSentenceWhereInput | LikeSentenceWhereInput[]
    OR?: LikeSentenceWhereInput[]
    NOT?: LikeSentenceWhereInput | LikeSentenceWhereInput[]
    userId?: StringFilter<"LikeSentence"> | string
    novelId?: StringFilter<"LikeSentence"> | string
    startIndex?: IntFilter<"LikeSentence"> | number
    endIndex?: IntFilter<"LikeSentence"> | number
    createdAt?: DateTimeFilter<"LikeSentence"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    novel?: XOR<NovelScalarRelationFilter, NovelWhereInput>
  }, "id" | "userId_novelId_startIndex_endIndex">

  export type LikeSentenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    startIndex?: SortOrder
    endIndex?: SortOrder
    createdAt?: SortOrder
    _count?: LikeSentenceCountOrderByAggregateInput
    _avg?: LikeSentenceAvgOrderByAggregateInput
    _max?: LikeSentenceMaxOrderByAggregateInput
    _min?: LikeSentenceMinOrderByAggregateInput
    _sum?: LikeSentenceSumOrderByAggregateInput
  }

  export type LikeSentenceScalarWhereWithAggregatesInput = {
    AND?: LikeSentenceScalarWhereWithAggregatesInput | LikeSentenceScalarWhereWithAggregatesInput[]
    OR?: LikeSentenceScalarWhereWithAggregatesInput[]
    NOT?: LikeSentenceScalarWhereWithAggregatesInput | LikeSentenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LikeSentence"> | string
    userId?: StringWithAggregatesFilter<"LikeSentence"> | string
    novelId?: StringWithAggregatesFilter<"LikeSentence"> | string
    startIndex?: IntWithAggregatesFilter<"LikeSentence"> | number
    endIndex?: IntWithAggregatesFilter<"LikeSentence"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LikeSentence"> | Date | string
  }

  export type BookmarkWhereInput = {
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    id?: StringFilter<"Bookmark"> | string
    userId?: StringFilter<"Bookmark"> | string
    novelId?: StringFilter<"Bookmark"> | string
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    novel?: XOR<NovelScalarRelationFilter, NovelWhereInput>
  }

  export type BookmarkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    novel?: NovelOrderByWithRelationInput
  }

  export type BookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_novelId?: BookmarkUserIdNovelIdCompoundUniqueInput
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    userId?: StringFilter<"Bookmark"> | string
    novelId?: StringFilter<"Bookmark"> | string
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    novel?: XOR<NovelScalarRelationFilter, NovelWhereInput>
  }, "id" | "userId_novelId">

  export type BookmarkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    createdAt?: SortOrder
    _count?: BookmarkCountOrderByAggregateInput
    _max?: BookmarkMaxOrderByAggregateInput
    _min?: BookmarkMinOrderByAggregateInput
  }

  export type BookmarkScalarWhereWithAggregatesInput = {
    AND?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    OR?: BookmarkScalarWhereWithAggregatesInput[]
    NOT?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bookmark"> | string
    userId?: StringWithAggregatesFilter<"Bookmark"> | string
    novelId?: StringWithAggregatesFilter<"Bookmark"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bookmark"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    novels?: NovelCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likeNovels?: LikeNovelCreateNestedManyWithoutUserInput
    likeSentence?: LikeSentenceCreateNestedManyWithoutUserInput
    viewHistory?: ViewHistoryCreateNestedManyWithoutUserInput
    bookMark?: BookmarkCreateNestedManyWithoutUserInput
    followers?: FollowCreateNestedManyWithoutFolloweeInput
    followees?: FollowCreateNestedManyWithoutFollowerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    novels?: NovelUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likeNovels?: LikeNovelUncheckedCreateNestedManyWithoutUserInput
    likeSentence?: LikeSentenceUncheckedCreateNestedManyWithoutUserInput
    viewHistory?: ViewHistoryUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowUncheckedCreateNestedManyWithoutFolloweeInput
    followees?: FollowUncheckedCreateNestedManyWithoutFollowerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novels?: NovelUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likeNovels?: LikeNovelUpdateManyWithoutUserNestedInput
    likeSentence?: LikeSentenceUpdateManyWithoutUserNestedInput
    viewHistory?: ViewHistoryUpdateManyWithoutUserNestedInput
    bookMark?: BookmarkUpdateManyWithoutUserNestedInput
    followers?: FollowUpdateManyWithoutFolloweeNestedInput
    followees?: FollowUpdateManyWithoutFollowerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novels?: NovelUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likeNovels?: LikeNovelUncheckedUpdateManyWithoutUserNestedInput
    likeSentence?: LikeSentenceUncheckedUpdateManyWithoutUserNestedInput
    viewHistory?: ViewHistoryUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFolloweeNestedInput
    followees?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowCreateInput = {
    id?: string
    createdAt?: Date | string
    follower: UserCreateNestedOneWithoutFolloweesInput
    followee: UserCreateNestedOneWithoutFollowersInput
  }

  export type FollowUncheckedCreateInput = {
    id?: string
    followerId: string
    followeeId: string
    createdAt?: Date | string
  }

  export type FollowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: UserUpdateOneRequiredWithoutFolloweesNestedInput
    followee?: UserUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    followeeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowCreateManyInput = {
    id?: string
    followerId: string
    followeeId: string
    createdAt?: Date | string
  }

  export type FollowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    followeeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewHistoryCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutViewHistoryInput
    novel: NovelCreateNestedOneWithoutViewHistoryInput
  }

  export type ViewHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    novelId: string
  }

  export type ViewHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutViewHistoryNestedInput
    novel?: NovelUpdateOneRequiredWithoutViewHistoryNestedInput
  }

  export type ViewHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
  }

  export type ViewHistoryCreateManyInput = {
    id?: string
    userId: string
    novelId: string
  }

  export type ViewHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ViewHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
  }

  export type NovelCreateInput = {
    id?: string
    sharedId: string
    title: string
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: UserCreateNestedOneWithoutNovelsInput
    categories?: CategoryCreateNestedManyWithoutNovelInput
    comments?: CommentCreateNestedManyWithoutNovelInput
    likes?: LikeNovelCreateNestedManyWithoutNovelInput
    LikeSentence?: LikeSentenceCreateNestedManyWithoutNovelInput
    viewHistory?: ViewHistoryCreateNestedManyWithoutNovelInput
    bookmark?: BookmarkCreateNestedManyWithoutNovelInput
  }

  export type NovelUncheckedCreateInput = {
    id?: string
    sharedId: string
    title: string
    authorId?: string | null
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutNovelInput
    comments?: CommentUncheckedCreateNestedManyWithoutNovelInput
    likes?: LikeNovelUncheckedCreateNestedManyWithoutNovelInput
    LikeSentence?: LikeSentenceUncheckedCreateNestedManyWithoutNovelInput
    viewHistory?: ViewHistoryUncheckedCreateNestedManyWithoutNovelInput
    bookmark?: BookmarkUncheckedCreateNestedManyWithoutNovelInput
  }

  export type NovelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutNovelsNestedInput
    categories?: CategoryUpdateManyWithoutNovelNestedInput
    comments?: CommentUpdateManyWithoutNovelNestedInput
    likes?: LikeNovelUpdateManyWithoutNovelNestedInput
    LikeSentence?: LikeSentenceUpdateManyWithoutNovelNestedInput
    viewHistory?: ViewHistoryUpdateManyWithoutNovelNestedInput
    bookmark?: BookmarkUpdateManyWithoutNovelNestedInput
  }

  export type NovelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutNovelNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNovelNestedInput
    likes?: LikeNovelUncheckedUpdateManyWithoutNovelNestedInput
    LikeSentence?: LikeSentenceUncheckedUpdateManyWithoutNovelNestedInput
    viewHistory?: ViewHistoryUncheckedUpdateManyWithoutNovelNestedInput
    bookmark?: BookmarkUncheckedUpdateManyWithoutNovelNestedInput
  }

  export type NovelCreateManyInput = {
    id?: string
    sharedId: string
    title: string
    authorId?: string | null
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NovelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NovelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    categoryId?: string
    categoryName: string
    novel?: NovelCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    categoryId?: string
    categoryName: string
    novel?: NovelUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUpdateInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    novel?: NovelUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    novel?: NovelUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryCreateManyInput = {
    categoryId?: string
    categoryName: string
  }

  export type CategoryUpdateManyMutationInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    sharedId: string
    startIndex: number
    endIndex: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutCommentsInput
    novel: NovelCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    sharedId: string
    userId?: string | null
    novelId: string
    startIndex: number
    endIndex: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCommentsNestedInput
    novel?: NovelUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    novelId?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    sharedId: string
    userId?: string | null
    novelId: string
    startIndex: number
    endIndex: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    novelId?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeNovelCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikeNovelsInput
    novel: NovelCreateNestedOneWithoutLikesInput
  }

  export type LikeNovelUncheckedCreateInput = {
    id?: string
    userId: string
    novelId: string
    createdAt?: Date | string
  }

  export type LikeNovelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikeNovelsNestedInput
    novel?: NovelUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeNovelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeNovelCreateManyInput = {
    id?: string
    userId: string
    novelId: string
    createdAt?: Date | string
  }

  export type LikeNovelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeNovelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeSentenceCreateInput = {
    id?: string
    startIndex: number
    endIndex: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikeSentenceInput
    novel: NovelCreateNestedOneWithoutLikeSentenceInput
  }

  export type LikeSentenceUncheckedCreateInput = {
    id?: string
    userId: string
    novelId: string
    startIndex: number
    endIndex: number
    createdAt?: Date | string
  }

  export type LikeSentenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikeSentenceNestedInput
    novel?: NovelUpdateOneRequiredWithoutLikeSentenceNestedInput
  }

  export type LikeSentenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeSentenceCreateManyInput = {
    id?: string
    userId: string
    novelId: string
    startIndex: number
    endIndex: number
    createdAt?: Date | string
  }

  export type LikeSentenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeSentenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookMarkInput
    novel: NovelCreateNestedOneWithoutBookmarkInput
  }

  export type BookmarkUncheckedCreateInput = {
    id?: string
    userId: string
    novelId: string
    createdAt?: Date | string
  }

  export type BookmarkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookMarkNestedInput
    novel?: NovelUpdateOneRequiredWithoutBookmarkNestedInput
  }

  export type BookmarkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateManyInput = {
    id?: string
    userId: string
    novelId: string
    createdAt?: Date | string
  }

  export type BookmarkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type NovelListRelationFilter = {
    every?: NovelWhereInput
    some?: NovelWhereInput
    none?: NovelWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type LikeNovelListRelationFilter = {
    every?: LikeNovelWhereInput
    some?: LikeNovelWhereInput
    none?: LikeNovelWhereInput
  }

  export type LikeSentenceListRelationFilter = {
    every?: LikeSentenceWhereInput
    some?: LikeSentenceWhereInput
    none?: LikeSentenceWhereInput
  }

  export type ViewHistoryListRelationFilter = {
    every?: ViewHistoryWhereInput
    some?: ViewHistoryWhereInput
    none?: ViewHistoryWhereInput
  }

  export type BookmarkListRelationFilter = {
    every?: BookmarkWhereInput
    some?: BookmarkWhereInput
    none?: BookmarkWhereInput
  }

  export type FollowListRelationFilter = {
    every?: FollowWhereInput
    some?: FollowWhereInput
    none?: FollowWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NovelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeNovelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeSentenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImagePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImagePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImagePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FollowFollowerIdFolloweeIdCompoundUniqueInput = {
    followerId: string
    followeeId: string
  }

  export type FollowCountOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followeeId?: SortOrder
    createdAt?: SortOrder
  }

  export type FollowMaxOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followeeId?: SortOrder
    createdAt?: SortOrder
  }

  export type FollowMinOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followeeId?: SortOrder
    createdAt?: SortOrder
  }

  export type NovelScalarRelationFilter = {
    is?: NovelWhereInput
    isNot?: NovelWhereInput
  }

  export type ViewHistoryUserIdNovelIdCompoundUniqueInput = {
    userId: string
    novelId: string
  }

  export type ViewHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
  }

  export type ViewHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
  }

  export type ViewHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NovelCountOrderByAggregateInput = {
    id?: SortOrder
    sharedId?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    coverImagePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NovelMaxOrderByAggregateInput = {
    id?: SortOrder
    sharedId?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    coverImagePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NovelMinOrderByAggregateInput = {
    id?: SortOrder
    sharedId?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    coverImagePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    categoryId?: SortOrder
    categoryName?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    categoryId?: SortOrder
    categoryName?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    categoryId?: SortOrder
    categoryName?: SortOrder
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

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    sharedId?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    startIndex?: SortOrder
    endIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    startIndex?: SortOrder
    endIndex?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    sharedId?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    startIndex?: SortOrder
    endIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    sharedId?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    startIndex?: SortOrder
    endIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    startIndex?: SortOrder
    endIndex?: SortOrder
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

  export type LikeNovelUserIdNovelIdCompoundUniqueInput = {
    userId: string
    novelId: string
  }

  export type LikeNovelCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeNovelMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeNovelMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeSentenceUserIdNovelIdStartIndexEndIndexCompoundUniqueInput = {
    userId: string
    novelId: string
    startIndex: number
    endIndex: number
  }

  export type LikeSentenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    startIndex?: SortOrder
    endIndex?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeSentenceAvgOrderByAggregateInput = {
    startIndex?: SortOrder
    endIndex?: SortOrder
  }

  export type LikeSentenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    startIndex?: SortOrder
    endIndex?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeSentenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    startIndex?: SortOrder
    endIndex?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeSentenceSumOrderByAggregateInput = {
    startIndex?: SortOrder
    endIndex?: SortOrder
  }

  export type BookmarkUserIdNovelIdCompoundUniqueInput = {
    userId: string
    novelId: string
  }

  export type BookmarkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    novelId?: SortOrder
    createdAt?: SortOrder
  }

  export type NovelCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NovelCreateWithoutAuthorInput, NovelUncheckedCreateWithoutAuthorInput> | NovelCreateWithoutAuthorInput[] | NovelUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NovelCreateOrConnectWithoutAuthorInput | NovelCreateOrConnectWithoutAuthorInput[]
    createMany?: NovelCreateManyAuthorInputEnvelope
    connect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeNovelCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeNovelCreateWithoutUserInput, LikeNovelUncheckedCreateWithoutUserInput> | LikeNovelCreateWithoutUserInput[] | LikeNovelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeNovelCreateOrConnectWithoutUserInput | LikeNovelCreateOrConnectWithoutUserInput[]
    createMany?: LikeNovelCreateManyUserInputEnvelope
    connect?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
  }

  export type LikeSentenceCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeSentenceCreateWithoutUserInput, LikeSentenceUncheckedCreateWithoutUserInput> | LikeSentenceCreateWithoutUserInput[] | LikeSentenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeSentenceCreateOrConnectWithoutUserInput | LikeSentenceCreateOrConnectWithoutUserInput[]
    createMany?: LikeSentenceCreateManyUserInputEnvelope
    connect?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
  }

  export type ViewHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewHistoryCreateWithoutUserInput, ViewHistoryUncheckedCreateWithoutUserInput> | ViewHistoryCreateWithoutUserInput[] | ViewHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewHistoryCreateOrConnectWithoutUserInput | ViewHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ViewHistoryCreateManyUserInputEnvelope
    connect?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
  }

  export type BookmarkCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type FollowCreateNestedManyWithoutFolloweeInput = {
    create?: XOR<FollowCreateWithoutFolloweeInput, FollowUncheckedCreateWithoutFolloweeInput> | FollowCreateWithoutFolloweeInput[] | FollowUncheckedCreateWithoutFolloweeInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFolloweeInput | FollowCreateOrConnectWithoutFolloweeInput[]
    createMany?: FollowCreateManyFolloweeInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type NovelUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NovelCreateWithoutAuthorInput, NovelUncheckedCreateWithoutAuthorInput> | NovelCreateWithoutAuthorInput[] | NovelUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NovelCreateOrConnectWithoutAuthorInput | NovelCreateOrConnectWithoutAuthorInput[]
    createMany?: NovelCreateManyAuthorInputEnvelope
    connect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeNovelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeNovelCreateWithoutUserInput, LikeNovelUncheckedCreateWithoutUserInput> | LikeNovelCreateWithoutUserInput[] | LikeNovelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeNovelCreateOrConnectWithoutUserInput | LikeNovelCreateOrConnectWithoutUserInput[]
    createMany?: LikeNovelCreateManyUserInputEnvelope
    connect?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
  }

  export type LikeSentenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeSentenceCreateWithoutUserInput, LikeSentenceUncheckedCreateWithoutUserInput> | LikeSentenceCreateWithoutUserInput[] | LikeSentenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeSentenceCreateOrConnectWithoutUserInput | LikeSentenceCreateOrConnectWithoutUserInput[]
    createMany?: LikeSentenceCreateManyUserInputEnvelope
    connect?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
  }

  export type ViewHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewHistoryCreateWithoutUserInput, ViewHistoryUncheckedCreateWithoutUserInput> | ViewHistoryCreateWithoutUserInput[] | ViewHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewHistoryCreateOrConnectWithoutUserInput | ViewHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ViewHistoryCreateManyUserInputEnvelope
    connect?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
  }

  export type BookmarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutFolloweeInput = {
    create?: XOR<FollowCreateWithoutFolloweeInput, FollowUncheckedCreateWithoutFolloweeInput> | FollowCreateWithoutFolloweeInput[] | FollowUncheckedCreateWithoutFolloweeInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFolloweeInput | FollowCreateOrConnectWithoutFolloweeInput[]
    createMany?: FollowCreateManyFolloweeInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NovelUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NovelCreateWithoutAuthorInput, NovelUncheckedCreateWithoutAuthorInput> | NovelCreateWithoutAuthorInput[] | NovelUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NovelCreateOrConnectWithoutAuthorInput | NovelCreateOrConnectWithoutAuthorInput[]
    upsert?: NovelUpsertWithWhereUniqueWithoutAuthorInput | NovelUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NovelCreateManyAuthorInputEnvelope
    set?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    disconnect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    delete?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    connect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    update?: NovelUpdateWithWhereUniqueWithoutAuthorInput | NovelUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NovelUpdateManyWithWhereWithoutAuthorInput | NovelUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NovelScalarWhereInput | NovelScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeNovelUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeNovelCreateWithoutUserInput, LikeNovelUncheckedCreateWithoutUserInput> | LikeNovelCreateWithoutUserInput[] | LikeNovelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeNovelCreateOrConnectWithoutUserInput | LikeNovelCreateOrConnectWithoutUserInput[]
    upsert?: LikeNovelUpsertWithWhereUniqueWithoutUserInput | LikeNovelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeNovelCreateManyUserInputEnvelope
    set?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
    disconnect?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
    delete?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
    connect?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
    update?: LikeNovelUpdateWithWhereUniqueWithoutUserInput | LikeNovelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeNovelUpdateManyWithWhereWithoutUserInput | LikeNovelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeNovelScalarWhereInput | LikeNovelScalarWhereInput[]
  }

  export type LikeSentenceUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeSentenceCreateWithoutUserInput, LikeSentenceUncheckedCreateWithoutUserInput> | LikeSentenceCreateWithoutUserInput[] | LikeSentenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeSentenceCreateOrConnectWithoutUserInput | LikeSentenceCreateOrConnectWithoutUserInput[]
    upsert?: LikeSentenceUpsertWithWhereUniqueWithoutUserInput | LikeSentenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeSentenceCreateManyUserInputEnvelope
    set?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
    disconnect?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
    delete?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
    connect?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
    update?: LikeSentenceUpdateWithWhereUniqueWithoutUserInput | LikeSentenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeSentenceUpdateManyWithWhereWithoutUserInput | LikeSentenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeSentenceScalarWhereInput | LikeSentenceScalarWhereInput[]
  }

  export type ViewHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewHistoryCreateWithoutUserInput, ViewHistoryUncheckedCreateWithoutUserInput> | ViewHistoryCreateWithoutUserInput[] | ViewHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewHistoryCreateOrConnectWithoutUserInput | ViewHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ViewHistoryUpsertWithWhereUniqueWithoutUserInput | ViewHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewHistoryCreateManyUserInputEnvelope
    set?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
    disconnect?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
    delete?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
    connect?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
    update?: ViewHistoryUpdateWithWhereUniqueWithoutUserInput | ViewHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewHistoryUpdateManyWithWhereWithoutUserInput | ViewHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewHistoryScalarWhereInput | ViewHistoryScalarWhereInput[]
  }

  export type BookmarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type FollowUpdateManyWithoutFolloweeNestedInput = {
    create?: XOR<FollowCreateWithoutFolloweeInput, FollowUncheckedCreateWithoutFolloweeInput> | FollowCreateWithoutFolloweeInput[] | FollowUncheckedCreateWithoutFolloweeInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFolloweeInput | FollowCreateOrConnectWithoutFolloweeInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFolloweeInput | FollowUpsertWithWhereUniqueWithoutFolloweeInput[]
    createMany?: FollowCreateManyFolloweeInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFolloweeInput | FollowUpdateWithWhereUniqueWithoutFolloweeInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFolloweeInput | FollowUpdateManyWithWhereWithoutFolloweeInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowerInput | FollowUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowerInput | FollowUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowerInput | FollowUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type NovelUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NovelCreateWithoutAuthorInput, NovelUncheckedCreateWithoutAuthorInput> | NovelCreateWithoutAuthorInput[] | NovelUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NovelCreateOrConnectWithoutAuthorInput | NovelCreateOrConnectWithoutAuthorInput[]
    upsert?: NovelUpsertWithWhereUniqueWithoutAuthorInput | NovelUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NovelCreateManyAuthorInputEnvelope
    set?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    disconnect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    delete?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    connect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    update?: NovelUpdateWithWhereUniqueWithoutAuthorInput | NovelUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NovelUpdateManyWithWhereWithoutAuthorInput | NovelUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NovelScalarWhereInput | NovelScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeNovelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeNovelCreateWithoutUserInput, LikeNovelUncheckedCreateWithoutUserInput> | LikeNovelCreateWithoutUserInput[] | LikeNovelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeNovelCreateOrConnectWithoutUserInput | LikeNovelCreateOrConnectWithoutUserInput[]
    upsert?: LikeNovelUpsertWithWhereUniqueWithoutUserInput | LikeNovelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeNovelCreateManyUserInputEnvelope
    set?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
    disconnect?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
    delete?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
    connect?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
    update?: LikeNovelUpdateWithWhereUniqueWithoutUserInput | LikeNovelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeNovelUpdateManyWithWhereWithoutUserInput | LikeNovelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeNovelScalarWhereInput | LikeNovelScalarWhereInput[]
  }

  export type LikeSentenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeSentenceCreateWithoutUserInput, LikeSentenceUncheckedCreateWithoutUserInput> | LikeSentenceCreateWithoutUserInput[] | LikeSentenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeSentenceCreateOrConnectWithoutUserInput | LikeSentenceCreateOrConnectWithoutUserInput[]
    upsert?: LikeSentenceUpsertWithWhereUniqueWithoutUserInput | LikeSentenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeSentenceCreateManyUserInputEnvelope
    set?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
    disconnect?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
    delete?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
    connect?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
    update?: LikeSentenceUpdateWithWhereUniqueWithoutUserInput | LikeSentenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeSentenceUpdateManyWithWhereWithoutUserInput | LikeSentenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeSentenceScalarWhereInput | LikeSentenceScalarWhereInput[]
  }

  export type ViewHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewHistoryCreateWithoutUserInput, ViewHistoryUncheckedCreateWithoutUserInput> | ViewHistoryCreateWithoutUserInput[] | ViewHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewHistoryCreateOrConnectWithoutUserInput | ViewHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ViewHistoryUpsertWithWhereUniqueWithoutUserInput | ViewHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewHistoryCreateManyUserInputEnvelope
    set?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
    disconnect?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
    delete?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
    connect?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
    update?: ViewHistoryUpdateWithWhereUniqueWithoutUserInput | ViewHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewHistoryUpdateManyWithWhereWithoutUserInput | ViewHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewHistoryScalarWhereInput | ViewHistoryScalarWhereInput[]
  }

  export type BookmarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutFolloweeNestedInput = {
    create?: XOR<FollowCreateWithoutFolloweeInput, FollowUncheckedCreateWithoutFolloweeInput> | FollowCreateWithoutFolloweeInput[] | FollowUncheckedCreateWithoutFolloweeInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFolloweeInput | FollowCreateOrConnectWithoutFolloweeInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFolloweeInput | FollowUpsertWithWhereUniqueWithoutFolloweeInput[]
    createMany?: FollowCreateManyFolloweeInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFolloweeInput | FollowUpdateWithWhereUniqueWithoutFolloweeInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFolloweeInput | FollowUpdateManyWithWhereWithoutFolloweeInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowerInput | FollowUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowerInput | FollowUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowerInput | FollowUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFolloweesInput = {
    create?: XOR<UserCreateWithoutFolloweesInput, UserUncheckedCreateWithoutFolloweesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFolloweesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFolloweesNestedInput = {
    create?: XOR<UserCreateWithoutFolloweesInput, UserUncheckedCreateWithoutFolloweesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFolloweesInput
    upsert?: UserUpsertWithoutFolloweesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFolloweesInput, UserUpdateWithoutFolloweesInput>, UserUncheckedUpdateWithoutFolloweesInput>
  }

  export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    upsert?: UserUpsertWithoutFollowersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowersInput, UserUpdateWithoutFollowersInput>, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserCreateNestedOneWithoutViewHistoryInput = {
    create?: XOR<UserCreateWithoutViewHistoryInput, UserUncheckedCreateWithoutViewHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type NovelCreateNestedOneWithoutViewHistoryInput = {
    create?: XOR<NovelCreateWithoutViewHistoryInput, NovelUncheckedCreateWithoutViewHistoryInput>
    connectOrCreate?: NovelCreateOrConnectWithoutViewHistoryInput
    connect?: NovelWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutViewHistoryNestedInput = {
    create?: XOR<UserCreateWithoutViewHistoryInput, UserUncheckedCreateWithoutViewHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewHistoryInput
    upsert?: UserUpsertWithoutViewHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutViewHistoryInput, UserUpdateWithoutViewHistoryInput>, UserUncheckedUpdateWithoutViewHistoryInput>
  }

  export type NovelUpdateOneRequiredWithoutViewHistoryNestedInput = {
    create?: XOR<NovelCreateWithoutViewHistoryInput, NovelUncheckedCreateWithoutViewHistoryInput>
    connectOrCreate?: NovelCreateOrConnectWithoutViewHistoryInput
    upsert?: NovelUpsertWithoutViewHistoryInput
    connect?: NovelWhereUniqueInput
    update?: XOR<XOR<NovelUpdateToOneWithWhereWithoutViewHistoryInput, NovelUpdateWithoutViewHistoryInput>, NovelUncheckedUpdateWithoutViewHistoryInput>
  }

  export type UserCreateNestedOneWithoutNovelsInput = {
    create?: XOR<UserCreateWithoutNovelsInput, UserUncheckedCreateWithoutNovelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNovelsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutNovelInput = {
    create?: XOR<CategoryCreateWithoutNovelInput, CategoryUncheckedCreateWithoutNovelInput> | CategoryCreateWithoutNovelInput[] | CategoryUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutNovelInput | CategoryCreateOrConnectWithoutNovelInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutNovelInput = {
    create?: XOR<CommentCreateWithoutNovelInput, CommentUncheckedCreateWithoutNovelInput> | CommentCreateWithoutNovelInput[] | CommentUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNovelInput | CommentCreateOrConnectWithoutNovelInput[]
    createMany?: CommentCreateManyNovelInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeNovelCreateNestedManyWithoutNovelInput = {
    create?: XOR<LikeNovelCreateWithoutNovelInput, LikeNovelUncheckedCreateWithoutNovelInput> | LikeNovelCreateWithoutNovelInput[] | LikeNovelUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: LikeNovelCreateOrConnectWithoutNovelInput | LikeNovelCreateOrConnectWithoutNovelInput[]
    createMany?: LikeNovelCreateManyNovelInputEnvelope
    connect?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
  }

  export type LikeSentenceCreateNestedManyWithoutNovelInput = {
    create?: XOR<LikeSentenceCreateWithoutNovelInput, LikeSentenceUncheckedCreateWithoutNovelInput> | LikeSentenceCreateWithoutNovelInput[] | LikeSentenceUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: LikeSentenceCreateOrConnectWithoutNovelInput | LikeSentenceCreateOrConnectWithoutNovelInput[]
    createMany?: LikeSentenceCreateManyNovelInputEnvelope
    connect?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
  }

  export type ViewHistoryCreateNestedManyWithoutNovelInput = {
    create?: XOR<ViewHistoryCreateWithoutNovelInput, ViewHistoryUncheckedCreateWithoutNovelInput> | ViewHistoryCreateWithoutNovelInput[] | ViewHistoryUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: ViewHistoryCreateOrConnectWithoutNovelInput | ViewHistoryCreateOrConnectWithoutNovelInput[]
    createMany?: ViewHistoryCreateManyNovelInputEnvelope
    connect?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
  }

  export type BookmarkCreateNestedManyWithoutNovelInput = {
    create?: XOR<BookmarkCreateWithoutNovelInput, BookmarkUncheckedCreateWithoutNovelInput> | BookmarkCreateWithoutNovelInput[] | BookmarkUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutNovelInput | BookmarkCreateOrConnectWithoutNovelInput[]
    createMany?: BookmarkCreateManyNovelInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutNovelInput = {
    create?: XOR<CategoryCreateWithoutNovelInput, CategoryUncheckedCreateWithoutNovelInput> | CategoryCreateWithoutNovelInput[] | CategoryUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutNovelInput | CategoryCreateOrConnectWithoutNovelInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutNovelInput = {
    create?: XOR<CommentCreateWithoutNovelInput, CommentUncheckedCreateWithoutNovelInput> | CommentCreateWithoutNovelInput[] | CommentUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNovelInput | CommentCreateOrConnectWithoutNovelInput[]
    createMany?: CommentCreateManyNovelInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeNovelUncheckedCreateNestedManyWithoutNovelInput = {
    create?: XOR<LikeNovelCreateWithoutNovelInput, LikeNovelUncheckedCreateWithoutNovelInput> | LikeNovelCreateWithoutNovelInput[] | LikeNovelUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: LikeNovelCreateOrConnectWithoutNovelInput | LikeNovelCreateOrConnectWithoutNovelInput[]
    createMany?: LikeNovelCreateManyNovelInputEnvelope
    connect?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
  }

  export type LikeSentenceUncheckedCreateNestedManyWithoutNovelInput = {
    create?: XOR<LikeSentenceCreateWithoutNovelInput, LikeSentenceUncheckedCreateWithoutNovelInput> | LikeSentenceCreateWithoutNovelInput[] | LikeSentenceUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: LikeSentenceCreateOrConnectWithoutNovelInput | LikeSentenceCreateOrConnectWithoutNovelInput[]
    createMany?: LikeSentenceCreateManyNovelInputEnvelope
    connect?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
  }

  export type ViewHistoryUncheckedCreateNestedManyWithoutNovelInput = {
    create?: XOR<ViewHistoryCreateWithoutNovelInput, ViewHistoryUncheckedCreateWithoutNovelInput> | ViewHistoryCreateWithoutNovelInput[] | ViewHistoryUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: ViewHistoryCreateOrConnectWithoutNovelInput | ViewHistoryCreateOrConnectWithoutNovelInput[]
    createMany?: ViewHistoryCreateManyNovelInputEnvelope
    connect?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
  }

  export type BookmarkUncheckedCreateNestedManyWithoutNovelInput = {
    create?: XOR<BookmarkCreateWithoutNovelInput, BookmarkUncheckedCreateWithoutNovelInput> | BookmarkCreateWithoutNovelInput[] | BookmarkUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutNovelInput | BookmarkCreateOrConnectWithoutNovelInput[]
    createMany?: BookmarkCreateManyNovelInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutNovelsNestedInput = {
    create?: XOR<UserCreateWithoutNovelsInput, UserUncheckedCreateWithoutNovelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNovelsInput
    upsert?: UserUpsertWithoutNovelsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNovelsInput, UserUpdateWithoutNovelsInput>, UserUncheckedUpdateWithoutNovelsInput>
  }

  export type CategoryUpdateManyWithoutNovelNestedInput = {
    create?: XOR<CategoryCreateWithoutNovelInput, CategoryUncheckedCreateWithoutNovelInput> | CategoryCreateWithoutNovelInput[] | CategoryUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutNovelInput | CategoryCreateOrConnectWithoutNovelInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutNovelInput | CategoryUpsertWithWhereUniqueWithoutNovelInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutNovelInput | CategoryUpdateWithWhereUniqueWithoutNovelInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutNovelInput | CategoryUpdateManyWithWhereWithoutNovelInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutNovelNestedInput = {
    create?: XOR<CommentCreateWithoutNovelInput, CommentUncheckedCreateWithoutNovelInput> | CommentCreateWithoutNovelInput[] | CommentUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNovelInput | CommentCreateOrConnectWithoutNovelInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutNovelInput | CommentUpsertWithWhereUniqueWithoutNovelInput[]
    createMany?: CommentCreateManyNovelInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutNovelInput | CommentUpdateWithWhereUniqueWithoutNovelInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutNovelInput | CommentUpdateManyWithWhereWithoutNovelInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeNovelUpdateManyWithoutNovelNestedInput = {
    create?: XOR<LikeNovelCreateWithoutNovelInput, LikeNovelUncheckedCreateWithoutNovelInput> | LikeNovelCreateWithoutNovelInput[] | LikeNovelUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: LikeNovelCreateOrConnectWithoutNovelInput | LikeNovelCreateOrConnectWithoutNovelInput[]
    upsert?: LikeNovelUpsertWithWhereUniqueWithoutNovelInput | LikeNovelUpsertWithWhereUniqueWithoutNovelInput[]
    createMany?: LikeNovelCreateManyNovelInputEnvelope
    set?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
    disconnect?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
    delete?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
    connect?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
    update?: LikeNovelUpdateWithWhereUniqueWithoutNovelInput | LikeNovelUpdateWithWhereUniqueWithoutNovelInput[]
    updateMany?: LikeNovelUpdateManyWithWhereWithoutNovelInput | LikeNovelUpdateManyWithWhereWithoutNovelInput[]
    deleteMany?: LikeNovelScalarWhereInput | LikeNovelScalarWhereInput[]
  }

  export type LikeSentenceUpdateManyWithoutNovelNestedInput = {
    create?: XOR<LikeSentenceCreateWithoutNovelInput, LikeSentenceUncheckedCreateWithoutNovelInput> | LikeSentenceCreateWithoutNovelInput[] | LikeSentenceUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: LikeSentenceCreateOrConnectWithoutNovelInput | LikeSentenceCreateOrConnectWithoutNovelInput[]
    upsert?: LikeSentenceUpsertWithWhereUniqueWithoutNovelInput | LikeSentenceUpsertWithWhereUniqueWithoutNovelInput[]
    createMany?: LikeSentenceCreateManyNovelInputEnvelope
    set?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
    disconnect?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
    delete?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
    connect?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
    update?: LikeSentenceUpdateWithWhereUniqueWithoutNovelInput | LikeSentenceUpdateWithWhereUniqueWithoutNovelInput[]
    updateMany?: LikeSentenceUpdateManyWithWhereWithoutNovelInput | LikeSentenceUpdateManyWithWhereWithoutNovelInput[]
    deleteMany?: LikeSentenceScalarWhereInput | LikeSentenceScalarWhereInput[]
  }

  export type ViewHistoryUpdateManyWithoutNovelNestedInput = {
    create?: XOR<ViewHistoryCreateWithoutNovelInput, ViewHistoryUncheckedCreateWithoutNovelInput> | ViewHistoryCreateWithoutNovelInput[] | ViewHistoryUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: ViewHistoryCreateOrConnectWithoutNovelInput | ViewHistoryCreateOrConnectWithoutNovelInput[]
    upsert?: ViewHistoryUpsertWithWhereUniqueWithoutNovelInput | ViewHistoryUpsertWithWhereUniqueWithoutNovelInput[]
    createMany?: ViewHistoryCreateManyNovelInputEnvelope
    set?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
    disconnect?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
    delete?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
    connect?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
    update?: ViewHistoryUpdateWithWhereUniqueWithoutNovelInput | ViewHistoryUpdateWithWhereUniqueWithoutNovelInput[]
    updateMany?: ViewHistoryUpdateManyWithWhereWithoutNovelInput | ViewHistoryUpdateManyWithWhereWithoutNovelInput[]
    deleteMany?: ViewHistoryScalarWhereInput | ViewHistoryScalarWhereInput[]
  }

  export type BookmarkUpdateManyWithoutNovelNestedInput = {
    create?: XOR<BookmarkCreateWithoutNovelInput, BookmarkUncheckedCreateWithoutNovelInput> | BookmarkCreateWithoutNovelInput[] | BookmarkUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutNovelInput | BookmarkCreateOrConnectWithoutNovelInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutNovelInput | BookmarkUpsertWithWhereUniqueWithoutNovelInput[]
    createMany?: BookmarkCreateManyNovelInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutNovelInput | BookmarkUpdateWithWhereUniqueWithoutNovelInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutNovelInput | BookmarkUpdateManyWithWhereWithoutNovelInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutNovelNestedInput = {
    create?: XOR<CategoryCreateWithoutNovelInput, CategoryUncheckedCreateWithoutNovelInput> | CategoryCreateWithoutNovelInput[] | CategoryUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutNovelInput | CategoryCreateOrConnectWithoutNovelInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutNovelInput | CategoryUpsertWithWhereUniqueWithoutNovelInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutNovelInput | CategoryUpdateWithWhereUniqueWithoutNovelInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutNovelInput | CategoryUpdateManyWithWhereWithoutNovelInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutNovelNestedInput = {
    create?: XOR<CommentCreateWithoutNovelInput, CommentUncheckedCreateWithoutNovelInput> | CommentCreateWithoutNovelInput[] | CommentUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNovelInput | CommentCreateOrConnectWithoutNovelInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutNovelInput | CommentUpsertWithWhereUniqueWithoutNovelInput[]
    createMany?: CommentCreateManyNovelInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutNovelInput | CommentUpdateWithWhereUniqueWithoutNovelInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutNovelInput | CommentUpdateManyWithWhereWithoutNovelInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeNovelUncheckedUpdateManyWithoutNovelNestedInput = {
    create?: XOR<LikeNovelCreateWithoutNovelInput, LikeNovelUncheckedCreateWithoutNovelInput> | LikeNovelCreateWithoutNovelInput[] | LikeNovelUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: LikeNovelCreateOrConnectWithoutNovelInput | LikeNovelCreateOrConnectWithoutNovelInput[]
    upsert?: LikeNovelUpsertWithWhereUniqueWithoutNovelInput | LikeNovelUpsertWithWhereUniqueWithoutNovelInput[]
    createMany?: LikeNovelCreateManyNovelInputEnvelope
    set?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
    disconnect?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
    delete?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
    connect?: LikeNovelWhereUniqueInput | LikeNovelWhereUniqueInput[]
    update?: LikeNovelUpdateWithWhereUniqueWithoutNovelInput | LikeNovelUpdateWithWhereUniqueWithoutNovelInput[]
    updateMany?: LikeNovelUpdateManyWithWhereWithoutNovelInput | LikeNovelUpdateManyWithWhereWithoutNovelInput[]
    deleteMany?: LikeNovelScalarWhereInput | LikeNovelScalarWhereInput[]
  }

  export type LikeSentenceUncheckedUpdateManyWithoutNovelNestedInput = {
    create?: XOR<LikeSentenceCreateWithoutNovelInput, LikeSentenceUncheckedCreateWithoutNovelInput> | LikeSentenceCreateWithoutNovelInput[] | LikeSentenceUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: LikeSentenceCreateOrConnectWithoutNovelInput | LikeSentenceCreateOrConnectWithoutNovelInput[]
    upsert?: LikeSentenceUpsertWithWhereUniqueWithoutNovelInput | LikeSentenceUpsertWithWhereUniqueWithoutNovelInput[]
    createMany?: LikeSentenceCreateManyNovelInputEnvelope
    set?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
    disconnect?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
    delete?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
    connect?: LikeSentenceWhereUniqueInput | LikeSentenceWhereUniqueInput[]
    update?: LikeSentenceUpdateWithWhereUniqueWithoutNovelInput | LikeSentenceUpdateWithWhereUniqueWithoutNovelInput[]
    updateMany?: LikeSentenceUpdateManyWithWhereWithoutNovelInput | LikeSentenceUpdateManyWithWhereWithoutNovelInput[]
    deleteMany?: LikeSentenceScalarWhereInput | LikeSentenceScalarWhereInput[]
  }

  export type ViewHistoryUncheckedUpdateManyWithoutNovelNestedInput = {
    create?: XOR<ViewHistoryCreateWithoutNovelInput, ViewHistoryUncheckedCreateWithoutNovelInput> | ViewHistoryCreateWithoutNovelInput[] | ViewHistoryUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: ViewHistoryCreateOrConnectWithoutNovelInput | ViewHistoryCreateOrConnectWithoutNovelInput[]
    upsert?: ViewHistoryUpsertWithWhereUniqueWithoutNovelInput | ViewHistoryUpsertWithWhereUniqueWithoutNovelInput[]
    createMany?: ViewHistoryCreateManyNovelInputEnvelope
    set?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
    disconnect?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
    delete?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
    connect?: ViewHistoryWhereUniqueInput | ViewHistoryWhereUniqueInput[]
    update?: ViewHistoryUpdateWithWhereUniqueWithoutNovelInput | ViewHistoryUpdateWithWhereUniqueWithoutNovelInput[]
    updateMany?: ViewHistoryUpdateManyWithWhereWithoutNovelInput | ViewHistoryUpdateManyWithWhereWithoutNovelInput[]
    deleteMany?: ViewHistoryScalarWhereInput | ViewHistoryScalarWhereInput[]
  }

  export type BookmarkUncheckedUpdateManyWithoutNovelNestedInput = {
    create?: XOR<BookmarkCreateWithoutNovelInput, BookmarkUncheckedCreateWithoutNovelInput> | BookmarkCreateWithoutNovelInput[] | BookmarkUncheckedCreateWithoutNovelInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutNovelInput | BookmarkCreateOrConnectWithoutNovelInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutNovelInput | BookmarkUpsertWithWhereUniqueWithoutNovelInput[]
    createMany?: BookmarkCreateManyNovelInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutNovelInput | BookmarkUpdateWithWhereUniqueWithoutNovelInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutNovelInput | BookmarkUpdateManyWithWhereWithoutNovelInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type NovelCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<NovelCreateWithoutCategoriesInput, NovelUncheckedCreateWithoutCategoriesInput> | NovelCreateWithoutCategoriesInput[] | NovelUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: NovelCreateOrConnectWithoutCategoriesInput | NovelCreateOrConnectWithoutCategoriesInput[]
    connect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
  }

  export type NovelUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<NovelCreateWithoutCategoriesInput, NovelUncheckedCreateWithoutCategoriesInput> | NovelCreateWithoutCategoriesInput[] | NovelUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: NovelCreateOrConnectWithoutCategoriesInput | NovelCreateOrConnectWithoutCategoriesInput[]
    connect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
  }

  export type NovelUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<NovelCreateWithoutCategoriesInput, NovelUncheckedCreateWithoutCategoriesInput> | NovelCreateWithoutCategoriesInput[] | NovelUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: NovelCreateOrConnectWithoutCategoriesInput | NovelCreateOrConnectWithoutCategoriesInput[]
    upsert?: NovelUpsertWithWhereUniqueWithoutCategoriesInput | NovelUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    disconnect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    delete?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    connect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    update?: NovelUpdateWithWhereUniqueWithoutCategoriesInput | NovelUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: NovelUpdateManyWithWhereWithoutCategoriesInput | NovelUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: NovelScalarWhereInput | NovelScalarWhereInput[]
  }

  export type NovelUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<NovelCreateWithoutCategoriesInput, NovelUncheckedCreateWithoutCategoriesInput> | NovelCreateWithoutCategoriesInput[] | NovelUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: NovelCreateOrConnectWithoutCategoriesInput | NovelCreateOrConnectWithoutCategoriesInput[]
    upsert?: NovelUpsertWithWhereUniqueWithoutCategoriesInput | NovelUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    disconnect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    delete?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    connect?: NovelWhereUniqueInput | NovelWhereUniqueInput[]
    update?: NovelUpdateWithWhereUniqueWithoutCategoriesInput | NovelUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: NovelUpdateManyWithWhereWithoutCategoriesInput | NovelUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: NovelScalarWhereInput | NovelScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type NovelCreateNestedOneWithoutCommentsInput = {
    create?: XOR<NovelCreateWithoutCommentsInput, NovelUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: NovelCreateOrConnectWithoutCommentsInput
    connect?: NovelWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type NovelUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<NovelCreateWithoutCommentsInput, NovelUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: NovelCreateOrConnectWithoutCommentsInput
    upsert?: NovelUpsertWithoutCommentsInput
    connect?: NovelWhereUniqueInput
    update?: XOR<XOR<NovelUpdateToOneWithWhereWithoutCommentsInput, NovelUpdateWithoutCommentsInput>, NovelUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutLikeNovelsInput = {
    create?: XOR<UserCreateWithoutLikeNovelsInput, UserUncheckedCreateWithoutLikeNovelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikeNovelsInput
    connect?: UserWhereUniqueInput
  }

  export type NovelCreateNestedOneWithoutLikesInput = {
    create?: XOR<NovelCreateWithoutLikesInput, NovelUncheckedCreateWithoutLikesInput>
    connectOrCreate?: NovelCreateOrConnectWithoutLikesInput
    connect?: NovelWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikeNovelsNestedInput = {
    create?: XOR<UserCreateWithoutLikeNovelsInput, UserUncheckedCreateWithoutLikeNovelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikeNovelsInput
    upsert?: UserUpsertWithoutLikeNovelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikeNovelsInput, UserUpdateWithoutLikeNovelsInput>, UserUncheckedUpdateWithoutLikeNovelsInput>
  }

  export type NovelUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<NovelCreateWithoutLikesInput, NovelUncheckedCreateWithoutLikesInput>
    connectOrCreate?: NovelCreateOrConnectWithoutLikesInput
    upsert?: NovelUpsertWithoutLikesInput
    connect?: NovelWhereUniqueInput
    update?: XOR<XOR<NovelUpdateToOneWithWhereWithoutLikesInput, NovelUpdateWithoutLikesInput>, NovelUncheckedUpdateWithoutLikesInput>
  }

  export type UserCreateNestedOneWithoutLikeSentenceInput = {
    create?: XOR<UserCreateWithoutLikeSentenceInput, UserUncheckedCreateWithoutLikeSentenceInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikeSentenceInput
    connect?: UserWhereUniqueInput
  }

  export type NovelCreateNestedOneWithoutLikeSentenceInput = {
    create?: XOR<NovelCreateWithoutLikeSentenceInput, NovelUncheckedCreateWithoutLikeSentenceInput>
    connectOrCreate?: NovelCreateOrConnectWithoutLikeSentenceInput
    connect?: NovelWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikeSentenceNestedInput = {
    create?: XOR<UserCreateWithoutLikeSentenceInput, UserUncheckedCreateWithoutLikeSentenceInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikeSentenceInput
    upsert?: UserUpsertWithoutLikeSentenceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikeSentenceInput, UserUpdateWithoutLikeSentenceInput>, UserUncheckedUpdateWithoutLikeSentenceInput>
  }

  export type NovelUpdateOneRequiredWithoutLikeSentenceNestedInput = {
    create?: XOR<NovelCreateWithoutLikeSentenceInput, NovelUncheckedCreateWithoutLikeSentenceInput>
    connectOrCreate?: NovelCreateOrConnectWithoutLikeSentenceInput
    upsert?: NovelUpsertWithoutLikeSentenceInput
    connect?: NovelWhereUniqueInput
    update?: XOR<XOR<NovelUpdateToOneWithWhereWithoutLikeSentenceInput, NovelUpdateWithoutLikeSentenceInput>, NovelUncheckedUpdateWithoutLikeSentenceInput>
  }

  export type UserCreateNestedOneWithoutBookMarkInput = {
    create?: XOR<UserCreateWithoutBookMarkInput, UserUncheckedCreateWithoutBookMarkInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookMarkInput
    connect?: UserWhereUniqueInput
  }

  export type NovelCreateNestedOneWithoutBookmarkInput = {
    create?: XOR<NovelCreateWithoutBookmarkInput, NovelUncheckedCreateWithoutBookmarkInput>
    connectOrCreate?: NovelCreateOrConnectWithoutBookmarkInput
    connect?: NovelWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookMarkNestedInput = {
    create?: XOR<UserCreateWithoutBookMarkInput, UserUncheckedCreateWithoutBookMarkInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookMarkInput
    upsert?: UserUpsertWithoutBookMarkInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookMarkInput, UserUpdateWithoutBookMarkInput>, UserUncheckedUpdateWithoutBookMarkInput>
  }

  export type NovelUpdateOneRequiredWithoutBookmarkNestedInput = {
    create?: XOR<NovelCreateWithoutBookmarkInput, NovelUncheckedCreateWithoutBookmarkInput>
    connectOrCreate?: NovelCreateOrConnectWithoutBookmarkInput
    upsert?: NovelUpsertWithoutBookmarkInput
    connect?: NovelWhereUniqueInput
    update?: XOR<XOR<NovelUpdateToOneWithWhereWithoutBookmarkInput, NovelUpdateWithoutBookmarkInput>, NovelUncheckedUpdateWithoutBookmarkInput>
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

  export type NovelCreateWithoutAuthorInput = {
    id?: string
    sharedId: string
    title: string
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutNovelInput
    comments?: CommentCreateNestedManyWithoutNovelInput
    likes?: LikeNovelCreateNestedManyWithoutNovelInput
    LikeSentence?: LikeSentenceCreateNestedManyWithoutNovelInput
    viewHistory?: ViewHistoryCreateNestedManyWithoutNovelInput
    bookmark?: BookmarkCreateNestedManyWithoutNovelInput
  }

  export type NovelUncheckedCreateWithoutAuthorInput = {
    id?: string
    sharedId: string
    title: string
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutNovelInput
    comments?: CommentUncheckedCreateNestedManyWithoutNovelInput
    likes?: LikeNovelUncheckedCreateNestedManyWithoutNovelInput
    LikeSentence?: LikeSentenceUncheckedCreateNestedManyWithoutNovelInput
    viewHistory?: ViewHistoryUncheckedCreateNestedManyWithoutNovelInput
    bookmark?: BookmarkUncheckedCreateNestedManyWithoutNovelInput
  }

  export type NovelCreateOrConnectWithoutAuthorInput = {
    where: NovelWhereUniqueInput
    create: XOR<NovelCreateWithoutAuthorInput, NovelUncheckedCreateWithoutAuthorInput>
  }

  export type NovelCreateManyAuthorInputEnvelope = {
    data: NovelCreateManyAuthorInput | NovelCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    sharedId: string
    startIndex: number
    endIndex: number
    createdAt?: Date | string
    updatedAt?: Date | string
    novel: NovelCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    sharedId: string
    novelId: string
    startIndex: number
    endIndex: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikeNovelCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    novel: NovelCreateNestedOneWithoutLikesInput
  }

  export type LikeNovelUncheckedCreateWithoutUserInput = {
    id?: string
    novelId: string
    createdAt?: Date | string
  }

  export type LikeNovelCreateOrConnectWithoutUserInput = {
    where: LikeNovelWhereUniqueInput
    create: XOR<LikeNovelCreateWithoutUserInput, LikeNovelUncheckedCreateWithoutUserInput>
  }

  export type LikeNovelCreateManyUserInputEnvelope = {
    data: LikeNovelCreateManyUserInput | LikeNovelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikeSentenceCreateWithoutUserInput = {
    id?: string
    startIndex: number
    endIndex: number
    createdAt?: Date | string
    novel: NovelCreateNestedOneWithoutLikeSentenceInput
  }

  export type LikeSentenceUncheckedCreateWithoutUserInput = {
    id?: string
    novelId: string
    startIndex: number
    endIndex: number
    createdAt?: Date | string
  }

  export type LikeSentenceCreateOrConnectWithoutUserInput = {
    where: LikeSentenceWhereUniqueInput
    create: XOR<LikeSentenceCreateWithoutUserInput, LikeSentenceUncheckedCreateWithoutUserInput>
  }

  export type LikeSentenceCreateManyUserInputEnvelope = {
    data: LikeSentenceCreateManyUserInput | LikeSentenceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ViewHistoryCreateWithoutUserInput = {
    id?: string
    novel: NovelCreateNestedOneWithoutViewHistoryInput
  }

  export type ViewHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    novelId: string
  }

  export type ViewHistoryCreateOrConnectWithoutUserInput = {
    where: ViewHistoryWhereUniqueInput
    create: XOR<ViewHistoryCreateWithoutUserInput, ViewHistoryUncheckedCreateWithoutUserInput>
  }

  export type ViewHistoryCreateManyUserInputEnvelope = {
    data: ViewHistoryCreateManyUserInput | ViewHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    novel: NovelCreateNestedOneWithoutBookmarkInput
  }

  export type BookmarkUncheckedCreateWithoutUserInput = {
    id?: string
    novelId: string
    createdAt?: Date | string
  }

  export type BookmarkCreateOrConnectWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkCreateManyUserInputEnvelope = {
    data: BookmarkCreateManyUserInput | BookmarkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FollowCreateWithoutFolloweeInput = {
    id?: string
    createdAt?: Date | string
    follower: UserCreateNestedOneWithoutFolloweesInput
  }

  export type FollowUncheckedCreateWithoutFolloweeInput = {
    id?: string
    followerId: string
    createdAt?: Date | string
  }

  export type FollowCreateOrConnectWithoutFolloweeInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutFolloweeInput, FollowUncheckedCreateWithoutFolloweeInput>
  }

  export type FollowCreateManyFolloweeInputEnvelope = {
    data: FollowCreateManyFolloweeInput | FollowCreateManyFolloweeInput[]
    skipDuplicates?: boolean
  }

  export type FollowCreateWithoutFollowerInput = {
    id?: string
    createdAt?: Date | string
    followee: UserCreateNestedOneWithoutFollowersInput
  }

  export type FollowUncheckedCreateWithoutFollowerInput = {
    id?: string
    followeeId: string
    createdAt?: Date | string
  }

  export type FollowCreateOrConnectWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
  }

  export type FollowCreateManyFollowerInputEnvelope = {
    data: FollowCreateManyFollowerInput | FollowCreateManyFollowerInput[]
    skipDuplicates?: boolean
  }

  export type NovelUpsertWithWhereUniqueWithoutAuthorInput = {
    where: NovelWhereUniqueInput
    update: XOR<NovelUpdateWithoutAuthorInput, NovelUncheckedUpdateWithoutAuthorInput>
    create: XOR<NovelCreateWithoutAuthorInput, NovelUncheckedCreateWithoutAuthorInput>
  }

  export type NovelUpdateWithWhereUniqueWithoutAuthorInput = {
    where: NovelWhereUniqueInput
    data: XOR<NovelUpdateWithoutAuthorInput, NovelUncheckedUpdateWithoutAuthorInput>
  }

  export type NovelUpdateManyWithWhereWithoutAuthorInput = {
    where: NovelScalarWhereInput
    data: XOR<NovelUpdateManyMutationInput, NovelUncheckedUpdateManyWithoutAuthorInput>
  }

  export type NovelScalarWhereInput = {
    AND?: NovelScalarWhereInput | NovelScalarWhereInput[]
    OR?: NovelScalarWhereInput[]
    NOT?: NovelScalarWhereInput | NovelScalarWhereInput[]
    id?: StringFilter<"Novel"> | string
    sharedId?: StringFilter<"Novel"> | string
    title?: StringFilter<"Novel"> | string
    authorId?: StringNullableFilter<"Novel"> | string | null
    coverImagePath?: StringNullableFilter<"Novel"> | string | null
    createdAt?: DateTimeFilter<"Novel"> | Date | string
    updatedAt?: DateTimeFilter<"Novel"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    sharedId?: StringFilter<"Comment"> | string
    userId?: StringNullableFilter<"Comment"> | string | null
    novelId?: StringFilter<"Comment"> | string
    startIndex?: IntFilter<"Comment"> | number
    endIndex?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type LikeNovelUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeNovelWhereUniqueInput
    update: XOR<LikeNovelUpdateWithoutUserInput, LikeNovelUncheckedUpdateWithoutUserInput>
    create: XOR<LikeNovelCreateWithoutUserInput, LikeNovelUncheckedCreateWithoutUserInput>
  }

  export type LikeNovelUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeNovelWhereUniqueInput
    data: XOR<LikeNovelUpdateWithoutUserInput, LikeNovelUncheckedUpdateWithoutUserInput>
  }

  export type LikeNovelUpdateManyWithWhereWithoutUserInput = {
    where: LikeNovelScalarWhereInput
    data: XOR<LikeNovelUpdateManyMutationInput, LikeNovelUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeNovelScalarWhereInput = {
    AND?: LikeNovelScalarWhereInput | LikeNovelScalarWhereInput[]
    OR?: LikeNovelScalarWhereInput[]
    NOT?: LikeNovelScalarWhereInput | LikeNovelScalarWhereInput[]
    id?: StringFilter<"LikeNovel"> | string
    userId?: StringFilter<"LikeNovel"> | string
    novelId?: StringFilter<"LikeNovel"> | string
    createdAt?: DateTimeFilter<"LikeNovel"> | Date | string
  }

  export type LikeSentenceUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeSentenceWhereUniqueInput
    update: XOR<LikeSentenceUpdateWithoutUserInput, LikeSentenceUncheckedUpdateWithoutUserInput>
    create: XOR<LikeSentenceCreateWithoutUserInput, LikeSentenceUncheckedCreateWithoutUserInput>
  }

  export type LikeSentenceUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeSentenceWhereUniqueInput
    data: XOR<LikeSentenceUpdateWithoutUserInput, LikeSentenceUncheckedUpdateWithoutUserInput>
  }

  export type LikeSentenceUpdateManyWithWhereWithoutUserInput = {
    where: LikeSentenceScalarWhereInput
    data: XOR<LikeSentenceUpdateManyMutationInput, LikeSentenceUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeSentenceScalarWhereInput = {
    AND?: LikeSentenceScalarWhereInput | LikeSentenceScalarWhereInput[]
    OR?: LikeSentenceScalarWhereInput[]
    NOT?: LikeSentenceScalarWhereInput | LikeSentenceScalarWhereInput[]
    id?: StringFilter<"LikeSentence"> | string
    userId?: StringFilter<"LikeSentence"> | string
    novelId?: StringFilter<"LikeSentence"> | string
    startIndex?: IntFilter<"LikeSentence"> | number
    endIndex?: IntFilter<"LikeSentence"> | number
    createdAt?: DateTimeFilter<"LikeSentence"> | Date | string
  }

  export type ViewHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ViewHistoryWhereUniqueInput
    update: XOR<ViewHistoryUpdateWithoutUserInput, ViewHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ViewHistoryCreateWithoutUserInput, ViewHistoryUncheckedCreateWithoutUserInput>
  }

  export type ViewHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ViewHistoryWhereUniqueInput
    data: XOR<ViewHistoryUpdateWithoutUserInput, ViewHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ViewHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ViewHistoryScalarWhereInput
    data: XOR<ViewHistoryUpdateManyMutationInput, ViewHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ViewHistoryScalarWhereInput = {
    AND?: ViewHistoryScalarWhereInput | ViewHistoryScalarWhereInput[]
    OR?: ViewHistoryScalarWhereInput[]
    NOT?: ViewHistoryScalarWhereInput | ViewHistoryScalarWhereInput[]
    id?: StringFilter<"ViewHistory"> | string
    userId?: StringFilter<"ViewHistory"> | string
    novelId?: StringFilter<"ViewHistory"> | string
  }

  export type BookmarkUpsertWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutUserInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutUserInput>
  }

  export type BookmarkScalarWhereInput = {
    AND?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    OR?: BookmarkScalarWhereInput[]
    NOT?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    id?: StringFilter<"Bookmark"> | string
    userId?: StringFilter<"Bookmark"> | string
    novelId?: StringFilter<"Bookmark"> | string
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
  }

  export type FollowUpsertWithWhereUniqueWithoutFolloweeInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutFolloweeInput, FollowUncheckedUpdateWithoutFolloweeInput>
    create: XOR<FollowCreateWithoutFolloweeInput, FollowUncheckedCreateWithoutFolloweeInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutFolloweeInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutFolloweeInput, FollowUncheckedUpdateWithoutFolloweeInput>
  }

  export type FollowUpdateManyWithWhereWithoutFolloweeInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFolloweeInput>
  }

  export type FollowScalarWhereInput = {
    AND?: FollowScalarWhereInput | FollowScalarWhereInput[]
    OR?: FollowScalarWhereInput[]
    NOT?: FollowScalarWhereInput | FollowScalarWhereInput[]
    id?: StringFilter<"Follow"> | string
    followerId?: StringFilter<"Follow"> | string
    followeeId?: StringFilter<"Follow"> | string
    createdAt?: DateTimeFilter<"Follow"> | Date | string
  }

  export type FollowUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>
  }

  export type FollowUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowerInput>
  }

  export type UserCreateWithoutFolloweesInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    novels?: NovelCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likeNovels?: LikeNovelCreateNestedManyWithoutUserInput
    likeSentence?: LikeSentenceCreateNestedManyWithoutUserInput
    viewHistory?: ViewHistoryCreateNestedManyWithoutUserInput
    bookMark?: BookmarkCreateNestedManyWithoutUserInput
    followers?: FollowCreateNestedManyWithoutFolloweeInput
  }

  export type UserUncheckedCreateWithoutFolloweesInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    novels?: NovelUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likeNovels?: LikeNovelUncheckedCreateNestedManyWithoutUserInput
    likeSentence?: LikeSentenceUncheckedCreateNestedManyWithoutUserInput
    viewHistory?: ViewHistoryUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowUncheckedCreateNestedManyWithoutFolloweeInput
  }

  export type UserCreateOrConnectWithoutFolloweesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFolloweesInput, UserUncheckedCreateWithoutFolloweesInput>
  }

  export type UserCreateWithoutFollowersInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    novels?: NovelCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likeNovels?: LikeNovelCreateNestedManyWithoutUserInput
    likeSentence?: LikeSentenceCreateNestedManyWithoutUserInput
    viewHistory?: ViewHistoryCreateNestedManyWithoutUserInput
    bookMark?: BookmarkCreateNestedManyWithoutUserInput
    followees?: FollowCreateNestedManyWithoutFollowerInput
  }

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    novels?: NovelUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likeNovels?: LikeNovelUncheckedCreateNestedManyWithoutUserInput
    likeSentence?: LikeSentenceUncheckedCreateNestedManyWithoutUserInput
    viewHistory?: ViewHistoryUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    followees?: FollowUncheckedCreateNestedManyWithoutFollowerInput
  }

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserUpsertWithoutFolloweesInput = {
    update: XOR<UserUpdateWithoutFolloweesInput, UserUncheckedUpdateWithoutFolloweesInput>
    create: XOR<UserCreateWithoutFolloweesInput, UserUncheckedCreateWithoutFolloweesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFolloweesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFolloweesInput, UserUncheckedUpdateWithoutFolloweesInput>
  }

  export type UserUpdateWithoutFolloweesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novels?: NovelUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likeNovels?: LikeNovelUpdateManyWithoutUserNestedInput
    likeSentence?: LikeSentenceUpdateManyWithoutUserNestedInput
    viewHistory?: ViewHistoryUpdateManyWithoutUserNestedInput
    bookMark?: BookmarkUpdateManyWithoutUserNestedInput
    followers?: FollowUpdateManyWithoutFolloweeNestedInput
  }

  export type UserUncheckedUpdateWithoutFolloweesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novels?: NovelUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likeNovels?: LikeNovelUncheckedUpdateManyWithoutUserNestedInput
    likeSentence?: LikeSentenceUncheckedUpdateManyWithoutUserNestedInput
    viewHistory?: ViewHistoryUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFolloweeNestedInput
  }

  export type UserUpsertWithoutFollowersInput = {
    update: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novels?: NovelUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likeNovels?: LikeNovelUpdateManyWithoutUserNestedInput
    likeSentence?: LikeSentenceUpdateManyWithoutUserNestedInput
    viewHistory?: ViewHistoryUpdateManyWithoutUserNestedInput
    bookMark?: BookmarkUpdateManyWithoutUserNestedInput
    followees?: FollowUpdateManyWithoutFollowerNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novels?: NovelUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likeNovels?: LikeNovelUncheckedUpdateManyWithoutUserNestedInput
    likeSentence?: LikeSentenceUncheckedUpdateManyWithoutUserNestedInput
    viewHistory?: ViewHistoryUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    followees?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
  }

  export type UserCreateWithoutViewHistoryInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    novels?: NovelCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likeNovels?: LikeNovelCreateNestedManyWithoutUserInput
    likeSentence?: LikeSentenceCreateNestedManyWithoutUserInput
    bookMark?: BookmarkCreateNestedManyWithoutUserInput
    followers?: FollowCreateNestedManyWithoutFolloweeInput
    followees?: FollowCreateNestedManyWithoutFollowerInput
  }

  export type UserUncheckedCreateWithoutViewHistoryInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    novels?: NovelUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likeNovels?: LikeNovelUncheckedCreateNestedManyWithoutUserInput
    likeSentence?: LikeSentenceUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowUncheckedCreateNestedManyWithoutFolloweeInput
    followees?: FollowUncheckedCreateNestedManyWithoutFollowerInput
  }

  export type UserCreateOrConnectWithoutViewHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewHistoryInput, UserUncheckedCreateWithoutViewHistoryInput>
  }

  export type NovelCreateWithoutViewHistoryInput = {
    id?: string
    sharedId: string
    title: string
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: UserCreateNestedOneWithoutNovelsInput
    categories?: CategoryCreateNestedManyWithoutNovelInput
    comments?: CommentCreateNestedManyWithoutNovelInput
    likes?: LikeNovelCreateNestedManyWithoutNovelInput
    LikeSentence?: LikeSentenceCreateNestedManyWithoutNovelInput
    bookmark?: BookmarkCreateNestedManyWithoutNovelInput
  }

  export type NovelUncheckedCreateWithoutViewHistoryInput = {
    id?: string
    sharedId: string
    title: string
    authorId?: string | null
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutNovelInput
    comments?: CommentUncheckedCreateNestedManyWithoutNovelInput
    likes?: LikeNovelUncheckedCreateNestedManyWithoutNovelInput
    LikeSentence?: LikeSentenceUncheckedCreateNestedManyWithoutNovelInput
    bookmark?: BookmarkUncheckedCreateNestedManyWithoutNovelInput
  }

  export type NovelCreateOrConnectWithoutViewHistoryInput = {
    where: NovelWhereUniqueInput
    create: XOR<NovelCreateWithoutViewHistoryInput, NovelUncheckedCreateWithoutViewHistoryInput>
  }

  export type UserUpsertWithoutViewHistoryInput = {
    update: XOR<UserUpdateWithoutViewHistoryInput, UserUncheckedUpdateWithoutViewHistoryInput>
    create: XOR<UserCreateWithoutViewHistoryInput, UserUncheckedCreateWithoutViewHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutViewHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutViewHistoryInput, UserUncheckedUpdateWithoutViewHistoryInput>
  }

  export type UserUpdateWithoutViewHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novels?: NovelUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likeNovels?: LikeNovelUpdateManyWithoutUserNestedInput
    likeSentence?: LikeSentenceUpdateManyWithoutUserNestedInput
    bookMark?: BookmarkUpdateManyWithoutUserNestedInput
    followers?: FollowUpdateManyWithoutFolloweeNestedInput
    followees?: FollowUpdateManyWithoutFollowerNestedInput
  }

  export type UserUncheckedUpdateWithoutViewHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novels?: NovelUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likeNovels?: LikeNovelUncheckedUpdateManyWithoutUserNestedInput
    likeSentence?: LikeSentenceUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFolloweeNestedInput
    followees?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
  }

  export type NovelUpsertWithoutViewHistoryInput = {
    update: XOR<NovelUpdateWithoutViewHistoryInput, NovelUncheckedUpdateWithoutViewHistoryInput>
    create: XOR<NovelCreateWithoutViewHistoryInput, NovelUncheckedCreateWithoutViewHistoryInput>
    where?: NovelWhereInput
  }

  export type NovelUpdateToOneWithWhereWithoutViewHistoryInput = {
    where?: NovelWhereInput
    data: XOR<NovelUpdateWithoutViewHistoryInput, NovelUncheckedUpdateWithoutViewHistoryInput>
  }

  export type NovelUpdateWithoutViewHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutNovelsNestedInput
    categories?: CategoryUpdateManyWithoutNovelNestedInput
    comments?: CommentUpdateManyWithoutNovelNestedInput
    likes?: LikeNovelUpdateManyWithoutNovelNestedInput
    LikeSentence?: LikeSentenceUpdateManyWithoutNovelNestedInput
    bookmark?: BookmarkUpdateManyWithoutNovelNestedInput
  }

  export type NovelUncheckedUpdateWithoutViewHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutNovelNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNovelNestedInput
    likes?: LikeNovelUncheckedUpdateManyWithoutNovelNestedInput
    LikeSentence?: LikeSentenceUncheckedUpdateManyWithoutNovelNestedInput
    bookmark?: BookmarkUncheckedUpdateManyWithoutNovelNestedInput
  }

  export type UserCreateWithoutNovelsInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutUserInput
    likeNovels?: LikeNovelCreateNestedManyWithoutUserInput
    likeSentence?: LikeSentenceCreateNestedManyWithoutUserInput
    viewHistory?: ViewHistoryCreateNestedManyWithoutUserInput
    bookMark?: BookmarkCreateNestedManyWithoutUserInput
    followers?: FollowCreateNestedManyWithoutFolloweeInput
    followees?: FollowCreateNestedManyWithoutFollowerInput
  }

  export type UserUncheckedCreateWithoutNovelsInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likeNovels?: LikeNovelUncheckedCreateNestedManyWithoutUserInput
    likeSentence?: LikeSentenceUncheckedCreateNestedManyWithoutUserInput
    viewHistory?: ViewHistoryUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowUncheckedCreateNestedManyWithoutFolloweeInput
    followees?: FollowUncheckedCreateNestedManyWithoutFollowerInput
  }

  export type UserCreateOrConnectWithoutNovelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNovelsInput, UserUncheckedCreateWithoutNovelsInput>
  }

  export type CategoryCreateWithoutNovelInput = {
    categoryId?: string
    categoryName: string
  }

  export type CategoryUncheckedCreateWithoutNovelInput = {
    categoryId?: string
    categoryName: string
  }

  export type CategoryCreateOrConnectWithoutNovelInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutNovelInput, CategoryUncheckedCreateWithoutNovelInput>
  }

  export type CommentCreateWithoutNovelInput = {
    id?: string
    sharedId: string
    startIndex: number
    endIndex: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutNovelInput = {
    id?: string
    sharedId: string
    userId?: string | null
    startIndex: number
    endIndex: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutNovelInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutNovelInput, CommentUncheckedCreateWithoutNovelInput>
  }

  export type CommentCreateManyNovelInputEnvelope = {
    data: CommentCreateManyNovelInput | CommentCreateManyNovelInput[]
    skipDuplicates?: boolean
  }

  export type LikeNovelCreateWithoutNovelInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikeNovelsInput
  }

  export type LikeNovelUncheckedCreateWithoutNovelInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type LikeNovelCreateOrConnectWithoutNovelInput = {
    where: LikeNovelWhereUniqueInput
    create: XOR<LikeNovelCreateWithoutNovelInput, LikeNovelUncheckedCreateWithoutNovelInput>
  }

  export type LikeNovelCreateManyNovelInputEnvelope = {
    data: LikeNovelCreateManyNovelInput | LikeNovelCreateManyNovelInput[]
    skipDuplicates?: boolean
  }

  export type LikeSentenceCreateWithoutNovelInput = {
    id?: string
    startIndex: number
    endIndex: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikeSentenceInput
  }

  export type LikeSentenceUncheckedCreateWithoutNovelInput = {
    id?: string
    userId: string
    startIndex: number
    endIndex: number
    createdAt?: Date | string
  }

  export type LikeSentenceCreateOrConnectWithoutNovelInput = {
    where: LikeSentenceWhereUniqueInput
    create: XOR<LikeSentenceCreateWithoutNovelInput, LikeSentenceUncheckedCreateWithoutNovelInput>
  }

  export type LikeSentenceCreateManyNovelInputEnvelope = {
    data: LikeSentenceCreateManyNovelInput | LikeSentenceCreateManyNovelInput[]
    skipDuplicates?: boolean
  }

  export type ViewHistoryCreateWithoutNovelInput = {
    id?: string
    user: UserCreateNestedOneWithoutViewHistoryInput
  }

  export type ViewHistoryUncheckedCreateWithoutNovelInput = {
    id?: string
    userId: string
  }

  export type ViewHistoryCreateOrConnectWithoutNovelInput = {
    where: ViewHistoryWhereUniqueInput
    create: XOR<ViewHistoryCreateWithoutNovelInput, ViewHistoryUncheckedCreateWithoutNovelInput>
  }

  export type ViewHistoryCreateManyNovelInputEnvelope = {
    data: ViewHistoryCreateManyNovelInput | ViewHistoryCreateManyNovelInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkCreateWithoutNovelInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookMarkInput
  }

  export type BookmarkUncheckedCreateWithoutNovelInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type BookmarkCreateOrConnectWithoutNovelInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutNovelInput, BookmarkUncheckedCreateWithoutNovelInput>
  }

  export type BookmarkCreateManyNovelInputEnvelope = {
    data: BookmarkCreateManyNovelInput | BookmarkCreateManyNovelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNovelsInput = {
    update: XOR<UserUpdateWithoutNovelsInput, UserUncheckedUpdateWithoutNovelsInput>
    create: XOR<UserCreateWithoutNovelsInput, UserUncheckedCreateWithoutNovelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNovelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNovelsInput, UserUncheckedUpdateWithoutNovelsInput>
  }

  export type UserUpdateWithoutNovelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutUserNestedInput
    likeNovels?: LikeNovelUpdateManyWithoutUserNestedInput
    likeSentence?: LikeSentenceUpdateManyWithoutUserNestedInput
    viewHistory?: ViewHistoryUpdateManyWithoutUserNestedInput
    bookMark?: BookmarkUpdateManyWithoutUserNestedInput
    followers?: FollowUpdateManyWithoutFolloweeNestedInput
    followees?: FollowUpdateManyWithoutFollowerNestedInput
  }

  export type UserUncheckedUpdateWithoutNovelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likeNovels?: LikeNovelUncheckedUpdateManyWithoutUserNestedInput
    likeSentence?: LikeSentenceUncheckedUpdateManyWithoutUserNestedInput
    viewHistory?: ViewHistoryUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFolloweeNestedInput
    followees?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutNovelInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutNovelInput, CategoryUncheckedUpdateWithoutNovelInput>
    create: XOR<CategoryCreateWithoutNovelInput, CategoryUncheckedCreateWithoutNovelInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutNovelInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutNovelInput, CategoryUncheckedUpdateWithoutNovelInput>
  }

  export type CategoryUpdateManyWithWhereWithoutNovelInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutNovelInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    categoryId?: StringFilter<"Category"> | string
    categoryName?: StringFilter<"Category"> | string
  }

  export type CommentUpsertWithWhereUniqueWithoutNovelInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutNovelInput, CommentUncheckedUpdateWithoutNovelInput>
    create: XOR<CommentCreateWithoutNovelInput, CommentUncheckedCreateWithoutNovelInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutNovelInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutNovelInput, CommentUncheckedUpdateWithoutNovelInput>
  }

  export type CommentUpdateManyWithWhereWithoutNovelInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutNovelInput>
  }

  export type LikeNovelUpsertWithWhereUniqueWithoutNovelInput = {
    where: LikeNovelWhereUniqueInput
    update: XOR<LikeNovelUpdateWithoutNovelInput, LikeNovelUncheckedUpdateWithoutNovelInput>
    create: XOR<LikeNovelCreateWithoutNovelInput, LikeNovelUncheckedCreateWithoutNovelInput>
  }

  export type LikeNovelUpdateWithWhereUniqueWithoutNovelInput = {
    where: LikeNovelWhereUniqueInput
    data: XOR<LikeNovelUpdateWithoutNovelInput, LikeNovelUncheckedUpdateWithoutNovelInput>
  }

  export type LikeNovelUpdateManyWithWhereWithoutNovelInput = {
    where: LikeNovelScalarWhereInput
    data: XOR<LikeNovelUpdateManyMutationInput, LikeNovelUncheckedUpdateManyWithoutNovelInput>
  }

  export type LikeSentenceUpsertWithWhereUniqueWithoutNovelInput = {
    where: LikeSentenceWhereUniqueInput
    update: XOR<LikeSentenceUpdateWithoutNovelInput, LikeSentenceUncheckedUpdateWithoutNovelInput>
    create: XOR<LikeSentenceCreateWithoutNovelInput, LikeSentenceUncheckedCreateWithoutNovelInput>
  }

  export type LikeSentenceUpdateWithWhereUniqueWithoutNovelInput = {
    where: LikeSentenceWhereUniqueInput
    data: XOR<LikeSentenceUpdateWithoutNovelInput, LikeSentenceUncheckedUpdateWithoutNovelInput>
  }

  export type LikeSentenceUpdateManyWithWhereWithoutNovelInput = {
    where: LikeSentenceScalarWhereInput
    data: XOR<LikeSentenceUpdateManyMutationInput, LikeSentenceUncheckedUpdateManyWithoutNovelInput>
  }

  export type ViewHistoryUpsertWithWhereUniqueWithoutNovelInput = {
    where: ViewHistoryWhereUniqueInput
    update: XOR<ViewHistoryUpdateWithoutNovelInput, ViewHistoryUncheckedUpdateWithoutNovelInput>
    create: XOR<ViewHistoryCreateWithoutNovelInput, ViewHistoryUncheckedCreateWithoutNovelInput>
  }

  export type ViewHistoryUpdateWithWhereUniqueWithoutNovelInput = {
    where: ViewHistoryWhereUniqueInput
    data: XOR<ViewHistoryUpdateWithoutNovelInput, ViewHistoryUncheckedUpdateWithoutNovelInput>
  }

  export type ViewHistoryUpdateManyWithWhereWithoutNovelInput = {
    where: ViewHistoryScalarWhereInput
    data: XOR<ViewHistoryUpdateManyMutationInput, ViewHistoryUncheckedUpdateManyWithoutNovelInput>
  }

  export type BookmarkUpsertWithWhereUniqueWithoutNovelInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutNovelInput, BookmarkUncheckedUpdateWithoutNovelInput>
    create: XOR<BookmarkCreateWithoutNovelInput, BookmarkUncheckedCreateWithoutNovelInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutNovelInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutNovelInput, BookmarkUncheckedUpdateWithoutNovelInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutNovelInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutNovelInput>
  }

  export type NovelCreateWithoutCategoriesInput = {
    id?: string
    sharedId: string
    title: string
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: UserCreateNestedOneWithoutNovelsInput
    comments?: CommentCreateNestedManyWithoutNovelInput
    likes?: LikeNovelCreateNestedManyWithoutNovelInput
    LikeSentence?: LikeSentenceCreateNestedManyWithoutNovelInput
    viewHistory?: ViewHistoryCreateNestedManyWithoutNovelInput
    bookmark?: BookmarkCreateNestedManyWithoutNovelInput
  }

  export type NovelUncheckedCreateWithoutCategoriesInput = {
    id?: string
    sharedId: string
    title: string
    authorId?: string | null
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutNovelInput
    likes?: LikeNovelUncheckedCreateNestedManyWithoutNovelInput
    LikeSentence?: LikeSentenceUncheckedCreateNestedManyWithoutNovelInput
    viewHistory?: ViewHistoryUncheckedCreateNestedManyWithoutNovelInput
    bookmark?: BookmarkUncheckedCreateNestedManyWithoutNovelInput
  }

  export type NovelCreateOrConnectWithoutCategoriesInput = {
    where: NovelWhereUniqueInput
    create: XOR<NovelCreateWithoutCategoriesInput, NovelUncheckedCreateWithoutCategoriesInput>
  }

  export type NovelUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: NovelWhereUniqueInput
    update: XOR<NovelUpdateWithoutCategoriesInput, NovelUncheckedUpdateWithoutCategoriesInput>
    create: XOR<NovelCreateWithoutCategoriesInput, NovelUncheckedCreateWithoutCategoriesInput>
  }

  export type NovelUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: NovelWhereUniqueInput
    data: XOR<NovelUpdateWithoutCategoriesInput, NovelUncheckedUpdateWithoutCategoriesInput>
  }

  export type NovelUpdateManyWithWhereWithoutCategoriesInput = {
    where: NovelScalarWhereInput
    data: XOR<NovelUpdateManyMutationInput, NovelUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    novels?: NovelCreateNestedManyWithoutAuthorInput
    likeNovels?: LikeNovelCreateNestedManyWithoutUserInput
    likeSentence?: LikeSentenceCreateNestedManyWithoutUserInput
    viewHistory?: ViewHistoryCreateNestedManyWithoutUserInput
    bookMark?: BookmarkCreateNestedManyWithoutUserInput
    followers?: FollowCreateNestedManyWithoutFolloweeInput
    followees?: FollowCreateNestedManyWithoutFollowerInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    novels?: NovelUncheckedCreateNestedManyWithoutAuthorInput
    likeNovels?: LikeNovelUncheckedCreateNestedManyWithoutUserInput
    likeSentence?: LikeSentenceUncheckedCreateNestedManyWithoutUserInput
    viewHistory?: ViewHistoryUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowUncheckedCreateNestedManyWithoutFolloweeInput
    followees?: FollowUncheckedCreateNestedManyWithoutFollowerInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type NovelCreateWithoutCommentsInput = {
    id?: string
    sharedId: string
    title: string
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: UserCreateNestedOneWithoutNovelsInput
    categories?: CategoryCreateNestedManyWithoutNovelInput
    likes?: LikeNovelCreateNestedManyWithoutNovelInput
    LikeSentence?: LikeSentenceCreateNestedManyWithoutNovelInput
    viewHistory?: ViewHistoryCreateNestedManyWithoutNovelInput
    bookmark?: BookmarkCreateNestedManyWithoutNovelInput
  }

  export type NovelUncheckedCreateWithoutCommentsInput = {
    id?: string
    sharedId: string
    title: string
    authorId?: string | null
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutNovelInput
    likes?: LikeNovelUncheckedCreateNestedManyWithoutNovelInput
    LikeSentence?: LikeSentenceUncheckedCreateNestedManyWithoutNovelInput
    viewHistory?: ViewHistoryUncheckedCreateNestedManyWithoutNovelInput
    bookmark?: BookmarkUncheckedCreateNestedManyWithoutNovelInput
  }

  export type NovelCreateOrConnectWithoutCommentsInput = {
    where: NovelWhereUniqueInput
    create: XOR<NovelCreateWithoutCommentsInput, NovelUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novels?: NovelUpdateManyWithoutAuthorNestedInput
    likeNovels?: LikeNovelUpdateManyWithoutUserNestedInput
    likeSentence?: LikeSentenceUpdateManyWithoutUserNestedInput
    viewHistory?: ViewHistoryUpdateManyWithoutUserNestedInput
    bookMark?: BookmarkUpdateManyWithoutUserNestedInput
    followers?: FollowUpdateManyWithoutFolloweeNestedInput
    followees?: FollowUpdateManyWithoutFollowerNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novels?: NovelUncheckedUpdateManyWithoutAuthorNestedInput
    likeNovels?: LikeNovelUncheckedUpdateManyWithoutUserNestedInput
    likeSentence?: LikeSentenceUncheckedUpdateManyWithoutUserNestedInput
    viewHistory?: ViewHistoryUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFolloweeNestedInput
    followees?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
  }

  export type NovelUpsertWithoutCommentsInput = {
    update: XOR<NovelUpdateWithoutCommentsInput, NovelUncheckedUpdateWithoutCommentsInput>
    create: XOR<NovelCreateWithoutCommentsInput, NovelUncheckedCreateWithoutCommentsInput>
    where?: NovelWhereInput
  }

  export type NovelUpdateToOneWithWhereWithoutCommentsInput = {
    where?: NovelWhereInput
    data: XOR<NovelUpdateWithoutCommentsInput, NovelUncheckedUpdateWithoutCommentsInput>
  }

  export type NovelUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutNovelsNestedInput
    categories?: CategoryUpdateManyWithoutNovelNestedInput
    likes?: LikeNovelUpdateManyWithoutNovelNestedInput
    LikeSentence?: LikeSentenceUpdateManyWithoutNovelNestedInput
    viewHistory?: ViewHistoryUpdateManyWithoutNovelNestedInput
    bookmark?: BookmarkUpdateManyWithoutNovelNestedInput
  }

  export type NovelUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutNovelNestedInput
    likes?: LikeNovelUncheckedUpdateManyWithoutNovelNestedInput
    LikeSentence?: LikeSentenceUncheckedUpdateManyWithoutNovelNestedInput
    viewHistory?: ViewHistoryUncheckedUpdateManyWithoutNovelNestedInput
    bookmark?: BookmarkUncheckedUpdateManyWithoutNovelNestedInput
  }

  export type UserCreateWithoutLikeNovelsInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    novels?: NovelCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likeSentence?: LikeSentenceCreateNestedManyWithoutUserInput
    viewHistory?: ViewHistoryCreateNestedManyWithoutUserInput
    bookMark?: BookmarkCreateNestedManyWithoutUserInput
    followers?: FollowCreateNestedManyWithoutFolloweeInput
    followees?: FollowCreateNestedManyWithoutFollowerInput
  }

  export type UserUncheckedCreateWithoutLikeNovelsInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    novels?: NovelUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likeSentence?: LikeSentenceUncheckedCreateNestedManyWithoutUserInput
    viewHistory?: ViewHistoryUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowUncheckedCreateNestedManyWithoutFolloweeInput
    followees?: FollowUncheckedCreateNestedManyWithoutFollowerInput
  }

  export type UserCreateOrConnectWithoutLikeNovelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikeNovelsInput, UserUncheckedCreateWithoutLikeNovelsInput>
  }

  export type NovelCreateWithoutLikesInput = {
    id?: string
    sharedId: string
    title: string
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: UserCreateNestedOneWithoutNovelsInput
    categories?: CategoryCreateNestedManyWithoutNovelInput
    comments?: CommentCreateNestedManyWithoutNovelInput
    LikeSentence?: LikeSentenceCreateNestedManyWithoutNovelInput
    viewHistory?: ViewHistoryCreateNestedManyWithoutNovelInput
    bookmark?: BookmarkCreateNestedManyWithoutNovelInput
  }

  export type NovelUncheckedCreateWithoutLikesInput = {
    id?: string
    sharedId: string
    title: string
    authorId?: string | null
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutNovelInput
    comments?: CommentUncheckedCreateNestedManyWithoutNovelInput
    LikeSentence?: LikeSentenceUncheckedCreateNestedManyWithoutNovelInput
    viewHistory?: ViewHistoryUncheckedCreateNestedManyWithoutNovelInput
    bookmark?: BookmarkUncheckedCreateNestedManyWithoutNovelInput
  }

  export type NovelCreateOrConnectWithoutLikesInput = {
    where: NovelWhereUniqueInput
    create: XOR<NovelCreateWithoutLikesInput, NovelUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutLikeNovelsInput = {
    update: XOR<UserUpdateWithoutLikeNovelsInput, UserUncheckedUpdateWithoutLikeNovelsInput>
    create: XOR<UserCreateWithoutLikeNovelsInput, UserUncheckedCreateWithoutLikeNovelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikeNovelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikeNovelsInput, UserUncheckedUpdateWithoutLikeNovelsInput>
  }

  export type UserUpdateWithoutLikeNovelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novels?: NovelUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likeSentence?: LikeSentenceUpdateManyWithoutUserNestedInput
    viewHistory?: ViewHistoryUpdateManyWithoutUserNestedInput
    bookMark?: BookmarkUpdateManyWithoutUserNestedInput
    followers?: FollowUpdateManyWithoutFolloweeNestedInput
    followees?: FollowUpdateManyWithoutFollowerNestedInput
  }

  export type UserUncheckedUpdateWithoutLikeNovelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novels?: NovelUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likeSentence?: LikeSentenceUncheckedUpdateManyWithoutUserNestedInput
    viewHistory?: ViewHistoryUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFolloweeNestedInput
    followees?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
  }

  export type NovelUpsertWithoutLikesInput = {
    update: XOR<NovelUpdateWithoutLikesInput, NovelUncheckedUpdateWithoutLikesInput>
    create: XOR<NovelCreateWithoutLikesInput, NovelUncheckedCreateWithoutLikesInput>
    where?: NovelWhereInput
  }

  export type NovelUpdateToOneWithWhereWithoutLikesInput = {
    where?: NovelWhereInput
    data: XOR<NovelUpdateWithoutLikesInput, NovelUncheckedUpdateWithoutLikesInput>
  }

  export type NovelUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutNovelsNestedInput
    categories?: CategoryUpdateManyWithoutNovelNestedInput
    comments?: CommentUpdateManyWithoutNovelNestedInput
    LikeSentence?: LikeSentenceUpdateManyWithoutNovelNestedInput
    viewHistory?: ViewHistoryUpdateManyWithoutNovelNestedInput
    bookmark?: BookmarkUpdateManyWithoutNovelNestedInput
  }

  export type NovelUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutNovelNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNovelNestedInput
    LikeSentence?: LikeSentenceUncheckedUpdateManyWithoutNovelNestedInput
    viewHistory?: ViewHistoryUncheckedUpdateManyWithoutNovelNestedInput
    bookmark?: BookmarkUncheckedUpdateManyWithoutNovelNestedInput
  }

  export type UserCreateWithoutLikeSentenceInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    novels?: NovelCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likeNovels?: LikeNovelCreateNestedManyWithoutUserInput
    viewHistory?: ViewHistoryCreateNestedManyWithoutUserInput
    bookMark?: BookmarkCreateNestedManyWithoutUserInput
    followers?: FollowCreateNestedManyWithoutFolloweeInput
    followees?: FollowCreateNestedManyWithoutFollowerInput
  }

  export type UserUncheckedCreateWithoutLikeSentenceInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    novels?: NovelUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likeNovels?: LikeNovelUncheckedCreateNestedManyWithoutUserInput
    viewHistory?: ViewHistoryUncheckedCreateNestedManyWithoutUserInput
    bookMark?: BookmarkUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowUncheckedCreateNestedManyWithoutFolloweeInput
    followees?: FollowUncheckedCreateNestedManyWithoutFollowerInput
  }

  export type UserCreateOrConnectWithoutLikeSentenceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikeSentenceInput, UserUncheckedCreateWithoutLikeSentenceInput>
  }

  export type NovelCreateWithoutLikeSentenceInput = {
    id?: string
    sharedId: string
    title: string
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: UserCreateNestedOneWithoutNovelsInput
    categories?: CategoryCreateNestedManyWithoutNovelInput
    comments?: CommentCreateNestedManyWithoutNovelInput
    likes?: LikeNovelCreateNestedManyWithoutNovelInput
    viewHistory?: ViewHistoryCreateNestedManyWithoutNovelInput
    bookmark?: BookmarkCreateNestedManyWithoutNovelInput
  }

  export type NovelUncheckedCreateWithoutLikeSentenceInput = {
    id?: string
    sharedId: string
    title: string
    authorId?: string | null
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutNovelInput
    comments?: CommentUncheckedCreateNestedManyWithoutNovelInput
    likes?: LikeNovelUncheckedCreateNestedManyWithoutNovelInput
    viewHistory?: ViewHistoryUncheckedCreateNestedManyWithoutNovelInput
    bookmark?: BookmarkUncheckedCreateNestedManyWithoutNovelInput
  }

  export type NovelCreateOrConnectWithoutLikeSentenceInput = {
    where: NovelWhereUniqueInput
    create: XOR<NovelCreateWithoutLikeSentenceInput, NovelUncheckedCreateWithoutLikeSentenceInput>
  }

  export type UserUpsertWithoutLikeSentenceInput = {
    update: XOR<UserUpdateWithoutLikeSentenceInput, UserUncheckedUpdateWithoutLikeSentenceInput>
    create: XOR<UserCreateWithoutLikeSentenceInput, UserUncheckedCreateWithoutLikeSentenceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikeSentenceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikeSentenceInput, UserUncheckedUpdateWithoutLikeSentenceInput>
  }

  export type UserUpdateWithoutLikeSentenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novels?: NovelUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likeNovels?: LikeNovelUpdateManyWithoutUserNestedInput
    viewHistory?: ViewHistoryUpdateManyWithoutUserNestedInput
    bookMark?: BookmarkUpdateManyWithoutUserNestedInput
    followers?: FollowUpdateManyWithoutFolloweeNestedInput
    followees?: FollowUpdateManyWithoutFollowerNestedInput
  }

  export type UserUncheckedUpdateWithoutLikeSentenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novels?: NovelUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likeNovels?: LikeNovelUncheckedUpdateManyWithoutUserNestedInput
    viewHistory?: ViewHistoryUncheckedUpdateManyWithoutUserNestedInput
    bookMark?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFolloweeNestedInput
    followees?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
  }

  export type NovelUpsertWithoutLikeSentenceInput = {
    update: XOR<NovelUpdateWithoutLikeSentenceInput, NovelUncheckedUpdateWithoutLikeSentenceInput>
    create: XOR<NovelCreateWithoutLikeSentenceInput, NovelUncheckedCreateWithoutLikeSentenceInput>
    where?: NovelWhereInput
  }

  export type NovelUpdateToOneWithWhereWithoutLikeSentenceInput = {
    where?: NovelWhereInput
    data: XOR<NovelUpdateWithoutLikeSentenceInput, NovelUncheckedUpdateWithoutLikeSentenceInput>
  }

  export type NovelUpdateWithoutLikeSentenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutNovelsNestedInput
    categories?: CategoryUpdateManyWithoutNovelNestedInput
    comments?: CommentUpdateManyWithoutNovelNestedInput
    likes?: LikeNovelUpdateManyWithoutNovelNestedInput
    viewHistory?: ViewHistoryUpdateManyWithoutNovelNestedInput
    bookmark?: BookmarkUpdateManyWithoutNovelNestedInput
  }

  export type NovelUncheckedUpdateWithoutLikeSentenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutNovelNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNovelNestedInput
    likes?: LikeNovelUncheckedUpdateManyWithoutNovelNestedInput
    viewHistory?: ViewHistoryUncheckedUpdateManyWithoutNovelNestedInput
    bookmark?: BookmarkUncheckedUpdateManyWithoutNovelNestedInput
  }

  export type UserCreateWithoutBookMarkInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    novels?: NovelCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likeNovels?: LikeNovelCreateNestedManyWithoutUserInput
    likeSentence?: LikeSentenceCreateNestedManyWithoutUserInput
    viewHistory?: ViewHistoryCreateNestedManyWithoutUserInput
    followers?: FollowCreateNestedManyWithoutFolloweeInput
    followees?: FollowCreateNestedManyWithoutFollowerInput
  }

  export type UserUncheckedCreateWithoutBookMarkInput = {
    id?: string
    username: string
    email: string
    password: string
    profileImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    novels?: NovelUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likeNovels?: LikeNovelUncheckedCreateNestedManyWithoutUserInput
    likeSentence?: LikeSentenceUncheckedCreateNestedManyWithoutUserInput
    viewHistory?: ViewHistoryUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowUncheckedCreateNestedManyWithoutFolloweeInput
    followees?: FollowUncheckedCreateNestedManyWithoutFollowerInput
  }

  export type UserCreateOrConnectWithoutBookMarkInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookMarkInput, UserUncheckedCreateWithoutBookMarkInput>
  }

  export type NovelCreateWithoutBookmarkInput = {
    id?: string
    sharedId: string
    title: string
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: UserCreateNestedOneWithoutNovelsInput
    categories?: CategoryCreateNestedManyWithoutNovelInput
    comments?: CommentCreateNestedManyWithoutNovelInput
    likes?: LikeNovelCreateNestedManyWithoutNovelInput
    LikeSentence?: LikeSentenceCreateNestedManyWithoutNovelInput
    viewHistory?: ViewHistoryCreateNestedManyWithoutNovelInput
  }

  export type NovelUncheckedCreateWithoutBookmarkInput = {
    id?: string
    sharedId: string
    title: string
    authorId?: string | null
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutNovelInput
    comments?: CommentUncheckedCreateNestedManyWithoutNovelInput
    likes?: LikeNovelUncheckedCreateNestedManyWithoutNovelInput
    LikeSentence?: LikeSentenceUncheckedCreateNestedManyWithoutNovelInput
    viewHistory?: ViewHistoryUncheckedCreateNestedManyWithoutNovelInput
  }

  export type NovelCreateOrConnectWithoutBookmarkInput = {
    where: NovelWhereUniqueInput
    create: XOR<NovelCreateWithoutBookmarkInput, NovelUncheckedCreateWithoutBookmarkInput>
  }

  export type UserUpsertWithoutBookMarkInput = {
    update: XOR<UserUpdateWithoutBookMarkInput, UserUncheckedUpdateWithoutBookMarkInput>
    create: XOR<UserCreateWithoutBookMarkInput, UserUncheckedCreateWithoutBookMarkInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookMarkInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookMarkInput, UserUncheckedUpdateWithoutBookMarkInput>
  }

  export type UserUpdateWithoutBookMarkInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novels?: NovelUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likeNovels?: LikeNovelUpdateManyWithoutUserNestedInput
    likeSentence?: LikeSentenceUpdateManyWithoutUserNestedInput
    viewHistory?: ViewHistoryUpdateManyWithoutUserNestedInput
    followers?: FollowUpdateManyWithoutFolloweeNestedInput
    followees?: FollowUpdateManyWithoutFollowerNestedInput
  }

  export type UserUncheckedUpdateWithoutBookMarkInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novels?: NovelUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likeNovels?: LikeNovelUncheckedUpdateManyWithoutUserNestedInput
    likeSentence?: LikeSentenceUncheckedUpdateManyWithoutUserNestedInput
    viewHistory?: ViewHistoryUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFolloweeNestedInput
    followees?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
  }

  export type NovelUpsertWithoutBookmarkInput = {
    update: XOR<NovelUpdateWithoutBookmarkInput, NovelUncheckedUpdateWithoutBookmarkInput>
    create: XOR<NovelCreateWithoutBookmarkInput, NovelUncheckedCreateWithoutBookmarkInput>
    where?: NovelWhereInput
  }

  export type NovelUpdateToOneWithWhereWithoutBookmarkInput = {
    where?: NovelWhereInput
    data: XOR<NovelUpdateWithoutBookmarkInput, NovelUncheckedUpdateWithoutBookmarkInput>
  }

  export type NovelUpdateWithoutBookmarkInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutNovelsNestedInput
    categories?: CategoryUpdateManyWithoutNovelNestedInput
    comments?: CommentUpdateManyWithoutNovelNestedInput
    likes?: LikeNovelUpdateManyWithoutNovelNestedInput
    LikeSentence?: LikeSentenceUpdateManyWithoutNovelNestedInput
    viewHistory?: ViewHistoryUpdateManyWithoutNovelNestedInput
  }

  export type NovelUncheckedUpdateWithoutBookmarkInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutNovelNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNovelNestedInput
    likes?: LikeNovelUncheckedUpdateManyWithoutNovelNestedInput
    LikeSentence?: LikeSentenceUncheckedUpdateManyWithoutNovelNestedInput
    viewHistory?: ViewHistoryUncheckedUpdateManyWithoutNovelNestedInput
  }

  export type NovelCreateManyAuthorInput = {
    id?: string
    sharedId: string
    title: string
    coverImagePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    sharedId: string
    novelId: string
    startIndex: number
    endIndex: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeNovelCreateManyUserInput = {
    id?: string
    novelId: string
    createdAt?: Date | string
  }

  export type LikeSentenceCreateManyUserInput = {
    id?: string
    novelId: string
    startIndex: number
    endIndex: number
    createdAt?: Date | string
  }

  export type ViewHistoryCreateManyUserInput = {
    id?: string
    novelId: string
  }

  export type BookmarkCreateManyUserInput = {
    id?: string
    novelId: string
    createdAt?: Date | string
  }

  export type FollowCreateManyFolloweeInput = {
    id?: string
    followerId: string
    createdAt?: Date | string
  }

  export type FollowCreateManyFollowerInput = {
    id?: string
    followeeId: string
    createdAt?: Date | string
  }

  export type NovelUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutNovelNestedInput
    comments?: CommentUpdateManyWithoutNovelNestedInput
    likes?: LikeNovelUpdateManyWithoutNovelNestedInput
    LikeSentence?: LikeSentenceUpdateManyWithoutNovelNestedInput
    viewHistory?: ViewHistoryUpdateManyWithoutNovelNestedInput
    bookmark?: BookmarkUpdateManyWithoutNovelNestedInput
  }

  export type NovelUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutNovelNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNovelNestedInput
    likes?: LikeNovelUncheckedUpdateManyWithoutNovelNestedInput
    LikeSentence?: LikeSentenceUncheckedUpdateManyWithoutNovelNestedInput
    viewHistory?: ViewHistoryUncheckedUpdateManyWithoutNovelNestedInput
    bookmark?: BookmarkUncheckedUpdateManyWithoutNovelNestedInput
  }

  export type NovelUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novel?: NovelUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeNovelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novel?: NovelUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeNovelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeNovelUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeSentenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novel?: NovelUpdateOneRequiredWithoutLikeSentenceNestedInput
  }

  export type LikeSentenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeSentenceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    novel?: NovelUpdateOneRequiredWithoutViewHistoryNestedInput
  }

  export type ViewHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
  }

  export type ViewHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
  }

  export type BookmarkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    novel?: NovelUpdateOneRequiredWithoutBookmarkNestedInput
  }

  export type BookmarkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    novelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpdateWithoutFolloweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: UserUpdateOneRequiredWithoutFolloweesNestedInput
  }

  export type FollowUncheckedUpdateWithoutFolloweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyWithoutFolloweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpdateWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followee?: UserUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowUncheckedUpdateWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    followeeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    followeeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyNovelInput = {
    id?: string
    sharedId: string
    userId?: string | null
    startIndex: number
    endIndex: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeNovelCreateManyNovelInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type LikeSentenceCreateManyNovelInput = {
    id?: string
    userId: string
    startIndex: number
    endIndex: number
    createdAt?: Date | string
  }

  export type ViewHistoryCreateManyNovelInput = {
    id?: string
    userId: string
  }

  export type BookmarkCreateManyNovelInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type CategoryUpdateWithoutNovelInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutNovelInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyWithoutNovelInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutNovelInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutNovelInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutNovelInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeNovelUpdateWithoutNovelInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikeNovelsNestedInput
  }

  export type LikeNovelUncheckedUpdateWithoutNovelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeNovelUncheckedUpdateManyWithoutNovelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeSentenceUpdateWithoutNovelInput = {
    id?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikeSentenceNestedInput
  }

  export type LikeSentenceUncheckedUpdateWithoutNovelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeSentenceUncheckedUpdateManyWithoutNovelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startIndex?: IntFieldUpdateOperationsInput | number
    endIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewHistoryUpdateWithoutNovelInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutViewHistoryNestedInput
  }

  export type ViewHistoryUncheckedUpdateWithoutNovelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ViewHistoryUncheckedUpdateManyWithoutNovelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BookmarkUpdateWithoutNovelInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookMarkNestedInput
  }

  export type BookmarkUncheckedUpdateWithoutNovelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyWithoutNovelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NovelUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutNovelsNestedInput
    comments?: CommentUpdateManyWithoutNovelNestedInput
    likes?: LikeNovelUpdateManyWithoutNovelNestedInput
    LikeSentence?: LikeSentenceUpdateManyWithoutNovelNestedInput
    viewHistory?: ViewHistoryUpdateManyWithoutNovelNestedInput
    bookmark?: BookmarkUpdateManyWithoutNovelNestedInput
  }

  export type NovelUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutNovelNestedInput
    likes?: LikeNovelUncheckedUpdateManyWithoutNovelNestedInput
    LikeSentence?: LikeSentenceUncheckedUpdateManyWithoutNovelNestedInput
    viewHistory?: ViewHistoryUncheckedUpdateManyWithoutNovelNestedInput
    bookmark?: BookmarkUncheckedUpdateManyWithoutNovelNestedInput
  }

  export type NovelUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sharedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    coverImagePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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