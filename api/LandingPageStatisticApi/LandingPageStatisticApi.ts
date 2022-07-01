import HttpClient from "../../services/HttpClient";
import { LandingPageStatisticApiRequestInterface, LandingPageStatisticApiResponseInterface } from "./interface";

class LandingPageStatisticApi extends HttpClient {

}

const landingPageStatisticApi = new LandingPageStatisticApi

export { landingPageStatisticApi as LandingPageStatisticApi };
