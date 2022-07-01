import HttpClient from "../../services/HttpClient";
import { KunaidApiRequestInterface, KunaidApiResponseInterface } from "./interface";

class KunaidApi extends HttpClient {

}

const kunaidApi = new KunaidApi

export { kunaidApi as KunaidApi };
