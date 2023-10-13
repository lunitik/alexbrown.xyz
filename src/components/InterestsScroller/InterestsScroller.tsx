import { Suspense, useEffect } from 'react';
import './InterestsScroller.scss';
import { Scrollers } from '../../features/scroller';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

function InterestsScroller() {
    const theme = useTheme();
    const { t } = useTranslation('translation', { keyPrefix: "components.interestsscroller" });
    const interestsClassName = `interests interests__color-mode--${theme.palette.mode}`;

    useEffect(() => {
        const scrollers: Scrollers = new Scrollers();
        scrollers.init();

        return (
            scrollers._destroy()
        );
    })

    return (
        <Suspense fallback="loading" >
            <div className={interestsClassName}>
                <h3 className="interests__heading">{t("interests__heading")}:</h3>
                <div className="scroller scroller__container">
                    <ul className="scroller__inner">
                        <li className="scroller__content">{t("technology")}</li>
                        <li className="scroller__content">{t("building computers")}</li>
                        <li className="scroller__content">{t("web design")}</li>
                        <li className="scroller__content">{t("development")}</li>
                        <li className="scroller__content">{t("gaming")}</li>
                        <li className="scroller__content">{t("learning")}</li>
                        <li className="scroller__content">{t("cooking")}</li>
                        <li className="scroller__content">{t("parenting")}</li>
                        <li className="scroller__content">{t("photography")}</li>
                        <li className="scroller__content">{t("sci-fi")}</li>
                        <li className="scroller__content">{t("pool_snooker")}</li>
                        <li className="scroller__content">{t("music")}</li>
                        <li className="scroller__content">{t("guitar")}</li>
                    </ul>
                </div>
            </div>
        </Suspense>
    );
}

export default InterestsScroller;