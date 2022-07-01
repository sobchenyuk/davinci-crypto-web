import { AxiosClient } from "../AxiosClient";
import { API_KUNA_URL } from "../../constants/environment-variables";

abstract class HttpClient {
    protected http: AxiosClient;

    constructor() {
        this.http = new AxiosClient({
            baseURL: API_KUNA_URL,
            headers: {
                Accept: 'application/json'
            }
        })
    }

    protected _invoke(value?: any): any {}
}

export default HttpClient
