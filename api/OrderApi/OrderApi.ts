import HttpClient from "../../services/HttpClient";
import { OrderApiRequestInterface, OrderApiResponseInterface } from "./interface";

class OrderApi extends HttpClient {

}

const orderApi = new OrderApi

export { orderApi as OrderApi };
