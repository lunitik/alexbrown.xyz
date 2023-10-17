import { AppLanguage, AppRoute, appStrings } from "./AppLanguages";

export function getPathFromCurrentLanguage(currentAppLanguage: AppLanguage, page: AppRoute) : string {
  if (currentAppLanguage == AppLanguage.English) {
    // AppLanguage.English will be /en/ so we need to replace that with ""
    return appStrings[currentAppLanguage][page];
  } else {
    return `/${currentAppLanguage}` + appStrings[currentAppLanguage][page];
  }    
}