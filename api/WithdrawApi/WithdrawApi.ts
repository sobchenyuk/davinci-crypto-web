import HttpClient from "../../services/HttpClient";
import { WithdrawApiRequestInterface, WithdrawApiResponseInterface } from "./interface";

class WithdrawApi extends HttpClient {

}

const withdrawApi = new WithdrawApi

export { withdrawApi as WithdrawApi };
