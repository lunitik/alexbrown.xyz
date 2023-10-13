import { useTranslation } from 'react-i18next';
import './HeroBanner.scss';
import { Typography, useTheme } from '@mui/material';
import { Suspense } from 'react';

function HeroBanner(props: { pageKey: string }) {
    const theme = useTheme();
    const colourModeClasses= `herobanner__container herobanner__container-colour-mode--${theme.palette.mode}`;
    const { t } = useTranslation('translation', { keyPrefix: `components.herobanner.${props.pageKey}`});

    return (
        <Suspense fallback="loading">
            <section className={colourModeClasses}>
                <Typography variant="h1" className="herobanner__heading">{t("herobanner__heading")}</Typography>
                <Typography variant='subtitle1' className="herobanner__sub-heading">{t("herobanner__sub-heading")}</Typography>
                <div className="herobanner__background" data-color-mode={theme.palette.mode} aria-hidden="true"></div>
            </section>
        </Suspense>
    );
}

export default HeroBanner;