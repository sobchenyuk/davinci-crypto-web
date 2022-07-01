import HttpClient from "../../services/HttpClient";
import { TradesHistoryApiRequestInterface, TradesHistoryApiResponseInterface } from "./interface";

class TradesHistoryApi extends HttpClient {

}

const tradesHistoryApi = new TradesHistoryApi

export { tradesHistoryApi as TradesHistoryApi };
