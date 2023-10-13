import "./Experience.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece, faBug, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import ExperienceLists from "../ExperienceLists/ExperienceLists";
import { experiencelists } from "../../assets/data/experienclists";

function Experience() {
    const theme = useTheme();
    const colourModeClassName = `experience experience-colour-mode--${theme.palette.mode}`;
    const { t } = useTranslation("translation", {
        keyPrefix: "components.experience",
    });

    return (
        <Suspense fallback="loading">
            <section className={colourModeClassName}>
                <section className="experience__container__inner">
                    <section className="experience__container__track">
                        <section className="experience__container experience__container--skills" id="skills">
                            <Typography variant="h2" className="experience__heading experience__heading--skills">
                                <FontAwesomeIcon icon={faPuzzlePiece} />
                                {t("experience__heading--skills")}
                            </Typography>
                            <div className="lists">
                                <div className="primary">
                                    <ExperienceLists heading={t("primary")} listItems={experiencelists.skills.primary} />
                                </div>
                                <div className="auxiliary">
                                    <ExperienceLists heading={t("auxiliary")} listItems={experiencelists.skills.auxiliary} />
                                </div>
                            </div>
                        </section>

                        <section className="experience__container experience__container--programming" id="programming">
                            <Typography variant="h2" className="experience__heading experience__heading--programming">
                                <FontAwesomeIcon icon={faBug} />
                                {t("experience__heading--programming")}
                            </Typography>
                            <div className="lists">
                                <div className="primary">
                                    <ExperienceLists heading={t("primary")} listItems={experiencelists.programming.primary} />
                                </div>
                                <div className="auxiliary">
                                    <ExperienceLists heading={t("auxiliary")} listItems={experiencelists.programming.auxiliary} />
                                </div>
                            </div>
                        </section>

                        <section className="experience__container experience__container--software" id="software">
                            <Typography variant="h2" className="experience__heading experience__heading--software">
                                <FontAwesomeIcon icon={faKeyboard} />
                                {t("experience__heading--software")}
                            </Typography>
                            <div className="lists">
                                <div className="primary">
                                    <ExperienceLists heading={t("primary")} listItems={experiencelists.software.primary} />
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
        </Suspense>
    );
}

export default Experience;
