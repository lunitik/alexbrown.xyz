import { Suspense, lazy } from "react";
import Loading from "../../components/Loading/Loading";
import { Seo } from "../../components/SEO/SEO";
import PageBackground from "../../components/PageBackground/PageBackground";
const MaterialContactForm = lazy(() => import("../../components/ContactForm/MaterialContactForm"));
const HeroBanner = lazy(() => import("../../components/HeroBanner/HeroBanner"));

function Contact() {
    return (
        <Suspense fallback={<Loading />}>
            <Seo pageKey="contact" />
            <HeroBanner pageKey="contact" />
            <MaterialContactForm />
            <PageBackground />        
        </Suspense>
    )
}

export default Contact;