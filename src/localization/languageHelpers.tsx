import { AppLanguage, AppRoute, appStrings } from "./AppLanguages";

export function getPathFromCurrentLanguage(currentAppLanguage: AppLanguage, page: AppRoute) : string {
  if (currentAppLanguage == AppLanguage.English) {
    // AppLanguage.English will be /en/ so we need to replace that with ""
    return appStrings[currentAppLanguage][page];
  } else {
    return `/${currentAppLanguage}` + appStrings[currentAppLanguage][page];
  }    
}

export function localizeRoutePath(path?: string | string[]) {
       switch (typeof path) {
        case 'undefined':
          return undefined;
        case 'object':
          return routePathLookUp(path);
        default:
          // eslint-disable-next-line no-case-declarations
          const isFallbackRoute = path === '*';
          return isFallbackRoute
            ? path
            : "";
      }
}

function routePathLookUp(path: string[]) {
    path.map(key => {
        console.log("key: ", key);
    })

    return "";
}