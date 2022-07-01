import HttpClient from "../../services/HttpClient";
import { WithdrawChannelsApiRequestInterface, WithdrawChannelsApiResponseInterface } from "./interface";

class WithdrawChannelsApi extends HttpClient {

}

const withdrawChannelsApi = new WithdrawChannelsApi

export { withdrawChannelsApi as WithdrawChannelsApi };
