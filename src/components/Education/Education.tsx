import './Education.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

function Education() {
    const theme = useTheme();
    const colourModeClasses = `education education-colour-mode--${theme.palette.mode}`;
const { t } = useTranslation("translation", { keyPrefix: "components.education" });

    return (
        <Suspense fallback="loading">
            <section className={colourModeClasses} id="education">
                <div className="education__container">
                    <Typography variant="h2" className="education__heading">
                        <FontAwesomeIcon icon={faGraduationCap} />
                        {t("education__heading")}
                    </Typography>
                    <div className="education__list-container">
                        <div className="education__entry">
                            <div className="education__place-container">
                                <div className="education__place">
                                    <div className="education__place-title">open university</div>
                                    <div className="education__place-location">{t("distance_learning")}</div>
                                </div>
                                <div className="education__place-date">{t("september")} 2017</div>
                            </div>
                            <div className="education__qualification">Bachelor of Science (Honours) &mdash; Computing and I.T.</div>
                        </div>
                        <div className="education__entry">
                            <div className="education__place-container">
                                <div className="education__place">
                                    <div className="education__place-title">kingston university</div>
                                    <div className="education__place-location">kingston, surrey, united kingdom</div>
                                </div>
                                <div className="education__place-date">{t("july")} 2004</div>
                            </div>
                            <div className="education__qualification">Springboard Foundation &mdash; Art &amp; Design</div>
                        </div>
                        <div className="education__entry">
                            <div className="education__place-container">
                                <div className="education__place">
                                    <div className="education__place-title">kingston university</div>
                                    <div className="education__place-location">kingston, surrey, united kingdom</div>
                                </div>
                                <div className="education__place-date">{t("september")} 2003</div>
                            </div>
                            <div className="education__qualification">Certificate of Higher Education &mdash; Computer Science</div>
                        </div>
                        <div className="education__entry">
                            <div className="education__place-container">
                                <div className="education__place">
                                    <div className="education__place-title">collingwood college</div>
                                    <div className="education__place-location">camberley, surrey, united kingdom</div>
                                </div>
                                <div className="education__place-date">{t("summer")} 2001</div>
                            </div>
                            <div className="education__qualification">A &mdash; Levels (Mathematics &amp; Mechanics, I.T. and Art &amp; Design), GCSE (x11)</div>
                        </div>
                    </div>
                </div>
            </section>
        </Suspense>
    );
}
export default Education;