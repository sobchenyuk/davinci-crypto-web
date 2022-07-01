import HttpClient from "../../services/HttpClient";
import { KunaCodesApiRequestInterface, KunaCodesApiResponseInterface } from "./interface";

class KunaCodesApi extends HttpClient {

}

const kunaCodesApi = new KunaCodesApi

export { kunaCodesApi as KunaCodesApi };
