import HttpClient from "../../services/HttpClient";
import { DepositApiRequestInterface, DepositApiResponseInterface } from "./interface";

class DepositApi extends HttpClient {

}

const depositApi = new DepositApi

export { depositApi as DepositApi };
