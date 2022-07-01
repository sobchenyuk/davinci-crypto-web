import HttpClient from "../../services/HttpClient";
import { SendToApiRequestInterface, SendToApiResponseInterface } from "./interface";

class SendToApi extends HttpClient {

}

const sendToApi = new SendToApi

export { sendToApi as SendToApi };
