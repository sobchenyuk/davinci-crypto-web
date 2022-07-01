import HttpClient from "../../services/HttpClient";
import { SubscriptionPlansApiRequestInterface, SubscriptionPlansApiResponseInterface } from "./interface";

class SubscriptionPlansApi extends HttpClient {

}

const subscriptionPlansApi = new SubscriptionPlansApi

export { subscriptionPlansApi as SubscriptionPlansApi };
