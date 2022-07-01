import HttpClient from "../../services/HttpClient";
import { AuthApiRequestInterface, AuthApiResponseInterface } from "./interface";

class AuthApi extends HttpClient {

}

const authApi = new AuthApi

export { authApi as AuthApi };
