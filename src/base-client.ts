export abstract class BaseClient {
    constructor(protected baseUrl: string) {
    }

    protected abstract get<ReturnType>(url: string, args?: Object): Promise<ReturnType>;
    protected abstract post<ReturnType>(url: string, sendObj: any, args?: Object): Promise<ReturnType>;
}
