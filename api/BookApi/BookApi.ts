import HttpClient from "../../services/HttpClient";
import { BookApiRequestInterface, BookApiResponseInterface } from "./interface";

class BookApi extends HttpClient {

}

const bookApi = new BookApi

export { bookApi as BookApi };
