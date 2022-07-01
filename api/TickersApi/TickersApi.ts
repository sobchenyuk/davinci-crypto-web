import HttpClient from "../../services/HttpClient";
import { TickersApiRequestInterface, TickersApiResponseInterface } from "./interface";

class TickersApi extends HttpClient {

}

const tickersApi = new TickersApi

export { tickersApi as TickersApi };
