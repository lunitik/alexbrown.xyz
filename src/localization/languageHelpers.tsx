import { AppLanguage, AppRoute, appStrings } from "./AppLanguages";

export function getPathFromCurrentLanguage(currentAppLanguage: AppLanguage, page: AppRoute) : string {
    const handleDefaultLanguage = currentAppLanguage == AppLanguage.English ? "" : currentAppLanguage;
    return `${handleDefaultLanguage}` + appStrings[currentAppLanguage][page];
}

// export function generateRoutesFromRoute(path: string) {
//     return Object.keys(betterAppStrings).map((key) => {
//         return Object.values(betterAppStrings[key]).map((route) => {
//             return (
//                 // <Route path={`${key + route}`} element={<Home />} />

//             )
//         })
//     })
// }


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