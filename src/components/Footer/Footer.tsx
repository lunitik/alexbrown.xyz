import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import './Footer.scss';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation('translation', { keyPrefix: "components.footer" });

    return (
        <Suspense fallback="loading">
            <footer id="site-footer">
                <div className="footer__social-media">
                    <a href="https://www.linkedin.com/in/alexbrownxyz" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} />linkedin</a>
                    <a href="https://www.github.com/lunitik" target="_blank"><FontAwesomeIcon icon={faGithub} />github</a>
                </div>
                <p className="footer__sign-off">
                    {t("footer__sign-off--start")} <FontAwesomeIcon icon={faHeart} /> {t("footer__sign-off--end")}
                </p>
            </footer>
        </Suspense>
    );
}

export default Footer;