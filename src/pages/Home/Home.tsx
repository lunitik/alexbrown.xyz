import { Suspense, lazy } from 'react';
import Loading from '../../components/Loading/Loading';
import { Seo } from '../../components/SEO/SEO';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { MUIWrapperContext } from '../../context/MUIWrapper';
import { AppRoute } from '../../localization/AppLanguages';
import { getPathFromCurrentLanguage } from '../../localization/languageHelpers';
import PageBackground from '../../components/PageBackground/PageBackground';
const HeroBanner = lazy(() => import('../../components/HeroBanner/HeroBanner'));
const About = lazy(() => import ('../../components/About/About'));
const Experience = lazy(() => import('../../components/Experience/Experience'));
const Education = lazy(() => import('../../components/Education/Education'));

function Home() {
    const { t } = useTranslation("translation", { keyPrefix: "pages.home.components.herobanner"});
    const muiUtils = React.useContext(MUIWrapperContext);
    const primaryLink = (
        getPathFromCurrentLanguage(muiUtils.locale.lng, AppRoute.Contact)
    );
    const secondaryLink = (
        getPathFromCurrentLanguage(muiUtils.locale.lng, AppRoute.Blogs)
    );

    return (
        <Suspense fallback={<Loading />}>
            <Seo pageKey='home'/>
            <HeroBanner pageKey='home'>
                <Button className="herobanner__cta--primary" variant="contained" size="large"><Link to={primaryLink}>{t("cta.primary")}</Link></Button>
                <Button className="herobanner__cta--secondary" variant="outlined" size="large"><Link to={secondaryLink}>{t("cta.secondary")}</Link></Button>
            </HeroBanner>
            <About />
            <Experience />
            <Education />
            <PageBackground />
        </Suspense>
    );
}

export default Home;