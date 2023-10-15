import { Suspense, lazy } from "react";
import Loading from "../../components/Loading/Loading";
import { Seo } from "../../components/SEO/SEO";
const MaterialContactForm = lazy(() => import("../../components/ContactForm/MaterialContactForm"));
const HeroBanner = lazy(() => import("../../components/HeroBanner/HeroBanner"));

function Contact() {
    return (
        <Suspense fallback={<Loading />}>
            <Seo pageKey="contact" />
            <HeroBanner pageKey="contact" />
            <MaterialContactForm />        
        </Suspense>
    )
}

export default Contact;