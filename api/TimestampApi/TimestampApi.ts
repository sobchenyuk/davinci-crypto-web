import HttpClient from "../../services/HttpClient";
import { TimestampApiRequestInterface, TimestampApiResponseInterface } from "./interface";

class TimestampApi extends HttpClient {

    async _invoke()
    {
        const { data } = await this.http.get('/timestamp', {});
        console.log(data);
    }
}

const timestampApi = new TimestampApi;

export { timestampApi as TimestampApi };
