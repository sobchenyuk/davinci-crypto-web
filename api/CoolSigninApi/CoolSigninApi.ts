import HttpClient from "../../services/HttpClient";
import { CoolSigninApiRequestInterface, CoolSigninApiResponseInterface } from "./interface";

class CoolSigninApi extends HttpClient {

}

const coolSigninApi = new CoolSigninApi

export { coolSigninApi as CoolSigninApi };
