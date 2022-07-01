import HttpClient from "../../services/HttpClient";
import { CurrenciesApiRequestInterface, CurrenciesApiResponseInterface } from "./interface";

class CurrenciesApi extends HttpClient {
    /**
     * Get currencies listed
     * @param dto: { CurrenciesApiRequestInterface }
     * @return CurrenciesApiResponseInterface[]
     */
    async _invoke(dto?: CurrenciesApiRequestInterface): Promise<CurrenciesApiResponseInterface[]>
    {
        const url = `/currencies${dto?.privileged !== undefined ? `?privileged=${dto?.privileged}` : ''}`;

        try {
            const { data } = await this.http.get(url);

            return data
        } catch (e) {
            // @ts-ignore
            console.error(e?.message);
            return []
        }
    }
}

const currenciesApi = new CurrenciesApi

export { currenciesApi as CurrenciesApi };
