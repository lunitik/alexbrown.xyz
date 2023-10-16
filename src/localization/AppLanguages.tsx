export enum AppLanguage {
    English = 'en',
    American = 'en-us',
    Polish = 'pl-pl'
}

export enum AppRoute {
    Home = 'routes.home',
    Contact = 'routes.contact'
}

import { LanguageStrings, en } from './localizations/base-strings';
import { enUS } from './localizations/enus';
import { plPL } from './localizations/plpl';

export type localizations = {
    [key: string] : LanguageStrings;
}

const betterLocalizations: localizations = {
    "en" : en,
    "en-us" : enUS,
    "pl-pl" : plPL
};
export const betterAppStrings = betterLocalizations;

const localizations = {
    "en" : en,
    "en-us" : enUS,
    "pl-pl" : plPL
};
export const appStrings = localizations;