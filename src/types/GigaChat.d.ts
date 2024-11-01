
export interface IGigaChatOptions {
    BasicKey: string;
    AutoCallRequestGetBearerToken: boolean; // default: true
    MethodRequest: string; // default: GET
    Model: string; // default: GigaChat
    UUID4: string;
    ScopeUser: "GIGACHAT_API_PERS" | "GIGACHAT_API_B2B" | "GIGACHAT_API_CORP",
    MaxBodyLength: number; // default: Infinity
    ClientKey: string;
    ClientSecret: string;
}