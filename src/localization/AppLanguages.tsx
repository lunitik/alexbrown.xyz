export enum AppLanguage {
    English = 'en',
    American = 'en-us',
    Polish = 'pl-pl'
}

export enum AppRoute {
    Home = 'routes.home',
    Contact = 'routes.contact'
}

import { en } from './localizations/base-strings';
import { enUS } from './localizations/enus';
import { plPL } from './localizations/plpl';

const localizations = {
    "en" : en,
    "en-us" : enUS,
    "pl-pl" : plPL
};
export const appStrings = localizations;