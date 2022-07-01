import HttpClient from "../../services/HttpClient";
import { SigninApiRequestInterface, SigninApiResponseInterface } from "./interface";

class SigninApi extends HttpClient {

}

const signingApi = new SigninApi

export { signingApi as SigninApi };
