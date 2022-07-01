import {FiatCodeEnum, FiatNameEnum } from "./fiat";
import {CryptoCodeEnum, CryptoNameEnum } from "./crypto";

const CryptoCode = { ...FiatCodeEnum, ...CryptoCodeEnum };
const CryptoName = { ...FiatNameEnum, ...CryptoNameEnum };

export type CryptoCode = typeof CryptoCode;
export type CryptoName = typeof CryptoName;

export * from './crypto'
export * from './fiat'
export * from './currencies.interface'