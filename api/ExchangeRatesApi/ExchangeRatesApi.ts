import HttpClient from "../../services/HttpClient";
import { ExchangeRatesApiRequestInterface, ExchangeRatesApiResponseInterface } from "./interface";

class ExchangeRatesApi extends HttpClient {

}

const exchangeRatesApi = new ExchangeRatesApi

export { exchangeRatesApi as ExchangeRatesApi };
