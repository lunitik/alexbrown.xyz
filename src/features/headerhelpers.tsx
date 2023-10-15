import { Language, Page, languages } from "../assets/data/languages";

export function getAlternateLinks(pageKey: string) {
    return getAlternateLinksOrXDefault(pageKey, false)
}

export function getXDefault(pageKey: string) {
  return getAlternateLinksOrXDefault(pageKey, true)
}

function getAlternateLinksOrXDefault(pageKey: string, xdefault: boolean) {
  return languages.map((language: Language) => {
    return language.details.pages.map((page: Page) => {
      if (xdefault) {
        if ( pageKey == page.name && page.metadata.xdefault ) {
          return <link rel='alternate' hrefLang='x-default' href={page.metadata.canonical} />
        }
      } else {
        if ( pageKey == page.name ) {
          return <link href={page.metadata.canonical} hrefLang={language.details.locale} key={language.details.locale} rel="alternate"></link>
        }
      }
    });
  })
}