import { IconsSizesInterface } from "../../../constants/icons-sizes";
import {CryptoCode, CryptoName} from "../../../constants/currencies";

export type PrecisionType = {
    real: number,
    trade: number
}

export interface CurrenciesApiResponseInterface {
    id: number
    code: CryptoCode
    name: CryptoName
    has_memo: string | null
    // Currency icons. Sizes std and XL
    icons: IconsSizesInterface
    // true for crypto, false for fiat
    coin: boolean
    // URL of corresponding blockchain explorer. Replace #{txid} with actual transaction id
    explorer_link: string | null
    // Smaller number bigger priority
    sort_order: number
    precision: PrecisionType
    privileged: boolean
    fuel: string | null
}