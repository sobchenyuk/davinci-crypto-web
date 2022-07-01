import HttpClient from "../../services/HttpClient";
import { TranslationsApiRequestInterface, TranslationsApiResponseInterface } from "./interface";

class TranslationsApi extends HttpClient {

}

const translationsApi = new TranslationsApi

export { translationsApi as TranslationsApi };
