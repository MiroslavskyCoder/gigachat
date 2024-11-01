import axios, { AxiosInstance } from "axios";
import uuid4 from "uuid4";
// import FormData from "form-data";
import { IGigaChatOptions } from "index";

export class GigaChat {
    public options: IGigaChatOptions & { Interface: AxiosInstance; [key: string]: any };
    constructor(options: Omit<Partial<IGigaChatOptions>, "BasicKey"> & string) {
        const interface_ = axios.create({
            headers: {
                Accept: "application/json"
            },
            url: "https://gigachat.devices.sberbank.ru",
            method: options.MethodRequest || "GET",
        });

        this.options = {
            AutoCallRequestGetBearerToken: true,
            MethodRequest: "GET",
            Model: "GigaChat",
            UUID4: uuid4(),
            ScopeUser: "GIGACHAT_API_PERS",
            MaxBodyLength: Infinity,
            Interface: interface_,
            ...(options as any),
        }; 
    } 

    async auth() {
        const url = "https://ngw.devices.sberbank.ru:9443/api/v2/oauth";

        this.options.Interface.get(url, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', 
                'Accept': 'application/json',
                'RqUID': this.options.UUID4,
            }
        });
    }

    // buildFormFiles(paylaods: Array<Buffer | string | ReadableStream>) { 
    //     const form = new FormData();
        
        
    // }

}