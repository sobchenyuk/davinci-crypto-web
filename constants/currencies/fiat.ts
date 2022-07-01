import {CurrenciesInterface} from "./currencies.interface";

export enum FiatCodeEnum {
    UAH = 'uah',
    // USD = 'usd',
}

export enum FiatNameEnum {
    UAH = 'Hryvnya',
    // USD = 'USD',
}

export let Fiat: CurrenciesInterface[] = [{
    code: FiatNameEnum.UAH,
    name: FiatNameEnum.UAH
}];