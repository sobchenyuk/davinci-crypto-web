import HttpClient from "../../services/HttpClient";
import { KApiRequestInterface, KApiResponseInterface } from "./interface";

class KApi extends HttpClient {

}

const kApi = new KApi

export { kApi as KApi };
