import HttpClient from "../../services/HttpClient";
import { FeesApiRequestInterface, FeesApiResponseInterface } from "./interface";

class FeesApi extends HttpClient {

}

const feesApi = new FeesApi

export { feesApi as FeesApi };
