declare module "server-bridge-base-client" {
    export abstract class BaseClient {
        protected baseUrl: string;
        constructor(baseUrl: string);
        protected abstract get<ReturnType>(url: string, args?: Object): Promise<ReturnType>;
        protected abstract post<ReturnType>(url: string, sendObj: any, args?: Object): Promise<ReturnType>;
    }
}
