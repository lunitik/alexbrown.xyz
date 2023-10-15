import { Language, Page, languages } from "../assets/data/languages";

export function getAlternateLinks(pageKey: string) {
    return languages.map((language: Language) => {
        return language.details.pages.map((page: Page) => {
          if ( pageKey == page.name ) {
            return <link href={page.metadata.canonical} hrefLang={language.details.locale} key={language.details.locale} rel="alternate"></link>
          }
        });
      })
}

export function getXDefault(pageKey: string) {
  return languages.map((language: Language) => {
    return language.details.pages.map((page: Page) => {
      if ( pageKey == page.name && page.metadata.xdefault ) {
        return <link rel='alternate' hrefLang='x-default' href={page.metadata.canonical} />
      }
    });
  })
}