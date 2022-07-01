import HttpClient from "../../services/HttpClient";
import { DepositChannelsApiRequestInterface, DepositChannelsApiResponseInterface } from "./interface";

class DepositChannelsApi extends HttpClient {

}

const depositChannelsApi = new DepositChannelsApi

export { depositChannelsApi as DepositChannelsApi };
