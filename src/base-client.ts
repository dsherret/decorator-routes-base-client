export abstract class BaseClient {
    constructor(protected baseUrl: string) {
    }

    protected abstract get<ReturnType>(url: string, args?: Object): Promise<ReturnType>;
    protected abstract post<SendType, ReturnType>(url: string, sendObj: SendType, args?: Object): Promise<ReturnType>;
}
