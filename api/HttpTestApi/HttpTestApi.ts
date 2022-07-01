import HttpClient from "../../services/HttpClient";
import { HttpTestApiRequestInterface, HttpTestApiResponseInterface } from "./interface";

class HttpTestApi extends HttpClient {

    async _invoke()
    {
        try {
            const { data } = await this.http.post('/http_test');
            console.log(data);
        } catch (e) {
            // @ts-ignore
            console.error(e?.message);
        }

    }
}

const httpTestApi = new HttpTestApi;

export { httpTestApi as HttpTestApi };
