import HttpClient from "../../services/HttpClient";
import { MarketsApiRequestInterface, MarketsApiResponseInterface } from "./interface";

class MarketsApi extends HttpClient {

}

const marketsApi = new MarketsApi

export { marketsApi as MarketsApi };
