import HttpClient from "../../services/HttpClient";
import { ConfirmTokenApiRequestInterface, ConfirmTokenApiResponseInterface } from "./interface";

class ConfirmTokenApi extends HttpClient {

}

const confirmTokenApi = new ConfirmTokenApi

export { confirmTokenApi as ConfirmTokenApi };
