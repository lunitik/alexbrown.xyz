import { Language, Page, languages } from "../../assets/data/languages";

function CanonicalLink(props: { targetPage: string, hreflang: string, pages: Array<Page> }) {
    return props.pages.map((page: Page) => {
        if ( props.targetPage == page.name) {
            return <link href={page.metadata.canonical} hrefLang={props.hreflang} rel="alternate"></link>
        }
    })
}

function Canonical(props: { page : string }) {
    return languages.map((language: Language) => {
        return <CanonicalLink targetPage={props.page} hreflang={language.details.locale} pages={language.details.pages} />
    })
}

export default Canonical;