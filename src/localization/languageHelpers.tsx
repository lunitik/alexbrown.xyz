import { AppLanguage, AppRoute, appStrings } from "./AppLanguages";

export function getPathFromCurrentLanguage(currentAppLanguage: AppLanguage, page: AppRoute) : string {
    const handleDefaultLanguage = currentAppLanguage == AppLanguage.English ? "" : currentAppLanguage;
    return `${handleDefaultLanguage}` + appStrings[currentAppLanguage][page];
}