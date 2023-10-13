import { Suspense, lazy } from "react";
import Loading from "../../components/Loading/Loading";
const MaterialContactForm = lazy(() => import("../../components/ContactForm/MaterialContactForm"));
const HeroBanner = lazy(() => import("../../components/HeroBanner/HeroBanner"));

function Contact() {
    return (
        <Suspense fallback={<Loading />}>
            <HeroBanner pageKey="contact" />
            <MaterialContactForm />        
        </Suspense>
    )
}

export default Contact;