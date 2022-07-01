import HttpClient from "../../services/HttpClient";
import { SignupApiRequestInterface, SignupApiResponseInterface } from "./interface";

class SignupApi extends HttpClient {

}

const signupApi = new SignupApi

export { signupApi as SignupApi };
