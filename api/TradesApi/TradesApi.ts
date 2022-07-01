import HttpClient from "../../services/HttpClient";
import { TradesApiRequestInterface, TradesApiResponseInterface } from "./interface";

class TradesApi extends HttpClient {

}

const tradesApi = new TradesApi

export { tradesApi as TradesApi };
