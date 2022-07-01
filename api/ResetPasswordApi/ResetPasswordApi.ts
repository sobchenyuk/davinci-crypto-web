import HttpClient from "../../services/HttpClient";
import { ResetPasswordApiRequestInterface, ResetPasswordApiResponseInterface } from "./interface";

class ResetPasswordApi extends HttpClient {

}

const resetPasswordApi = new ResetPasswordApi

export { resetPasswordApi as ResetPasswordApi };
