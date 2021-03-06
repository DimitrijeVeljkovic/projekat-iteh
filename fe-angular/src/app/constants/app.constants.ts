import { API_KEY_GOOGLE } from "./api-key.constants";

const domain = 'http://localhost';
const port = '8000';

export const BASE_URL = `${domain}:${port}/api`;

export const LAPTOP_CAT_ID = 1;
export const MOBILE_CAT_ID = 2;
export const TABLET_CAT_ID = 3;

export const LAPTOP_CAT_HEADING = 'LAPTOPS';
export const MOBILE_CAT_HEADING = 'MOBILES';
export const TABLET_CAT_HEADING = 'TABLETS';
export const ALL_PRODUCTS_HEADING = 'ALL PRODUCTS';

export const API_KEY = API_KEY_GOOGLE;

export const SORT = {
    priceAsc: 'PRICE_ASC',
    priceDesc: 'PRICE_DESC',
    nameAsc: 'NAME_ASC',
    nameDesc: 'NAME_DESC'
};

export const PAYMENT = {
    cash: 'CASH',
    card: 'CARD'
}