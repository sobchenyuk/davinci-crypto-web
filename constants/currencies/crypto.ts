import { CurrenciesInterface } from "./currencies.interface";

export enum CryptoCodeEnum {
    BTC = 'btc',
    ETH = 'eth',
    USDT = 'usdt',
    BCH = 'bch',
    BNB = 'bnb',
    DAI = 'dai',
    DASH = 'dash',
    DOGE = 'doge',
    EOS = 'eos',
    KUN = 'kun',
    LINK = 'link',
    LTC = 'ltc',
    SHIB = 'shib',
    EVER = 'ever',
    TRX = 'trx',
    TUSD = 'tusd',
    UNI = 'uni',
    USDC = 'usdc',
    WAVES = 'waves',
    XML = 'xlm',
    XRP = 'xrp',
    ZEC = 'zec',
    UAX = 'uax',
}

export enum CryptoNameEnum {
    UAX = "UAX",
    ZEC = 'Zcash',
    XRP = 'Ripple',
    XML = 'Stellar',
    WAVES = 'WAVES',
    USDC = 'USD Coin',
    UNI = 'UNI',
    TUSD = 'TrueUSD',
    TRX = 'TRX',
    EVER = 'Everscale',
    SHIB = 'Shiba Inu',
    LTC = 'Litecoin',
    LINK = 'Chainlink',
    KUN = 'KUN',
    EOS = 'EOS',
    DOGE = 'Dogecoin',
    DASH = 'Dash',
    DAI = 'Dai',
    BNB = 'Binance Coin',
    BCH = 'Bitcoin Cash',
    USDT = 'Tether',
    ETH = 'Ethereum',
    BTC = 'Bitcoin',
}

export let Crypto: CurrenciesInterface[] = [];

for(const key in CryptoCodeEnum) {
    Crypto.push({
        code: key,
        // @ts-ignore
        name: CryptoNameEnum[key]
    });
}
