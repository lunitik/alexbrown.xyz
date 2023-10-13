import './About.scss';
import ProfileImage from "../ProfileImage/ProfileImage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import InterestsScroller from "../InterestsScroller/InterestsScroller";
import { Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

function About() {
    const theme = useTheme();
    const aboutColourModeClass = `about__container about-colour-mode--${theme.palette.mode}`
    const { t } = useTranslation("translation", { keyPrefix: "components.about" });
    return (
        <Suspense fallback="loading">
            <section className={aboutColourModeClass}>
                <div className="about__container__inner">
                    <Typography variant="h2" className="about__heading">
                        <FontAwesomeIcon icon={faCircleUser} />
                        {t("about__heading")}
                    </Typography>
                    <div className="about__details">
                        <ProfileImage />
                        <div className="about__personalstatement">
                            <Typography variant='h3' className="about__personalstatement__heading">{t("about__personalstatement__heading")}:</Typography>
                            <Typography variant='subtitle1' className='about__personalstatement__text'>{t("about__personalstatement__text")}</Typography>
                        </div>
                    </div>
                    <InterestsScroller />
                </div>
            </section>
        </Suspense>
    );
}

export default About;