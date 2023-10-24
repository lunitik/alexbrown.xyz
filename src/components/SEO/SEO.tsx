import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { languages } from '../../assets/data/languages';
import { getAlternateLinks, getXDefault } from '../../features/headerhelpers';

export const Seo = (props: { pageKey: string }) => {
  const { t, i18n } = useTranslation("translation", { keyPrefix : "pages" });
  const currentLanguage: string = i18n.language;
  const title = t(`${props.pageKey}.title`);
  const description = t(`${props.pageKey}.description`);
  const type = t(`${props.pageKey}.type`);
  const name = t(`${props.pageKey}.name`);
  const keywords = t(`${props.pageKey}.keywords`);

  const currentLanguageObect = languages.find(({name}) => name.toLowerCase() == currentLanguage.toLowerCase());
  const currentPageObject = currentLanguageObect?.details.pages.find(({name}) => props.pageKey.toLowerCase() == name.toLowerCase())
  const canonical = currentPageObject?.metadata.canonical;

  return (
    <Helmet
        prioritizeSeoTags
        htmlAttributes={{"lang" : `${currentLanguageObect?.details.locale}`}}>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:creator" content={name} />
        <meta name="twitter:card" content={type} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonical} />
        {/* Handle rel='alternate' links */}
        {
          getAlternateLinks(props.pageKey)
        }
        {/* handle x-default */}
        {
          getXDefault(props.pageKey)
        }        
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon"/>
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon"/>
    </Helmet>
  );
};