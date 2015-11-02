declare module "decorator-routes-base-client" {
    export abstract class BaseClient {
        protected baseUrl: string;
        constructor(baseUrl: string);
        protected abstract get<ReturnType>(url: string, args?: Object): Promise<ReturnType>;
        protected abstract post<SendType, ReturnType>(url: string, sendObj: SendType, args?: Object): Promise<ReturnType>;
    }
}
