import { ZodError, TypeOf, ZodObject, ZodType } from 'zod';

declare const CLIENT_PREFIX: "NEXT_PUBLIC_";
type TPrefix = typeof CLIENT_PREFIX;
type TRecord = Record<string, ZodType>;
type ErrorMessage<T extends string> = T;
type Simplify<T> = {
    [P in keyof T]: T[P];
} & {};
type Mutable<T> = T extends Readonly<infer U> ? U : T;
type Impossible<T extends Record<string, any>> = Partial<Record<keyof T, never>>;
type Reduce<TArr extends Array<Record<string, unknown>>, TAcc = {}> = TArr extends [] ? TAcc : TArr extends [infer Head, ...infer Tail] ? Tail extends Array<Record<string, unknown>> ? Head & Reduce<Tail, TAcc> : never : never;
interface BaseOptions<TShared extends TRecord, TExtends extends Array<Record<string, unknown>>> {
    /**
     * How to determine whether the app is running on the server or the client.
     *
     * @default typeof window === "undefined"
     */
    isServer?: boolean;
    /**
     * Shared variables, often those that are provided by build tools and is
     * available to both client and server, but isn't prefixed and doesn't require
     * to be manually supplied. For example `NODE_ENV`, `VERCEL_URL` etc.
     */
    shared?: TShared;
    /** Extend presets */
    extends?: TExtends;
    /**
     * Called when validation fails. By default the error is logged, and an error
     * is thrown telling what environment variables are invalid.
     */
    onValidationError?: (error: ZodError) => never;
    /**
     * Called when a server-side environment variable is accessed on the client.
     * By default an error is thrown.
     */
    onInvalidAccess?: (variable: string) => never;
    /**
     * Whether to skip validation of environment variables.
     *
     * @default false
     */
    skipValidation?: boolean;
}
interface StrictOptions<TServer extends TRecord, TClient extends TRecord, TShared extends TRecord, TExtends extends Array<Record<string, unknown>>> extends BaseOptions<TShared, TExtends> {
    runtimeEnv: Record<{
        [TKey in keyof TClient]: TKey extends `${TPrefix}${string}` ? TKey : never;
    }[keyof TClient] | {
        [TKey in keyof TServer]: TKey extends `${TPrefix}${string}` ? never : TKey;
    }[keyof TServer] | {
        [TKey in keyof TShared]: TKey extends string ? TKey : never;
    }[keyof TShared], string | boolean | number | undefined>;
}
interface ClientOptions<TClient extends TRecord> {
    /**
     * Specify your client-side environment variables schema here. This way you
     * can ensure the app isn't built with invalid env vars.
     */
    client: Partial<{
        [TKey in keyof TClient]: TKey extends `${TPrefix}${string}` ? TClient[TKey] : ErrorMessage<`${TKey extends string ? TKey : never} is not prefixed with ${TPrefix}.`>;
    }>;
}
interface ServerOptions<TServer extends TRecord> {
    /**
     * Specify your server-side environment variables schema here. This way you
     * can ensure the app isn't built with invalid env vars.
     */
    server: Partial<{
        [TKey in keyof TServer]: TKey extends `${TPrefix}${string}` ? ErrorMessage<`${TKey extends `${TPrefix}${string}` ? TKey : never} should not prefixed with ${TPrefix}.`> : TServer[TKey];
    }>;
}
type ServerClientOptions<TServer extends TRecord, TClient extends TRecord> = (ClientOptions<TClient> & ServerOptions<TServer>) | (ServerOptions<TServer> & Impossible<ClientOptions<never>>) | (ClientOptions<TClient> & Impossible<ServerOptions<never>>);
type EnvOptions<TServer extends TRecord, TClient extends TRecord, TShared extends TRecord, TExtends extends Array<Record<string, unknown>>> = StrictOptions<TServer, TClient, TShared, TExtends> & ServerClientOptions<TServer, TClient>;
type TServerFormat = TRecord;
type TClientFormat = TRecord;
type TSharedFormat = TRecord;
type TExtendsFormat = Array<Record<string, unknown>>;
type CreateEnv<TServer extends TServerFormat, TClient extends TClientFormat, TShared extends TSharedFormat, TExtends extends TExtendsFormat> = Readonly<Simplify<TypeOf<ZodObject<TServer>> & TypeOf<ZodObject<TClient>> & TypeOf<ZodObject<TShared>> & Mutable<Reduce<TExtends>>>>;
declare function envalid<TServer extends TServerFormat = NonNullable<unknown>, TClient extends TClientFormat = NonNullable<unknown>, TShared extends TSharedFormat = NonNullable<unknown>, const TExtends extends TExtendsFormat = []>(opts: EnvOptions<TServer, TClient, TShared, TExtends>): CreateEnv<TServer, TClient, TShared, TExtends>;

export { type BaseOptions, type ClientOptions, type CreateEnv, type EnvOptions, type ServerClientOptions, type ServerOptions, envalid };
