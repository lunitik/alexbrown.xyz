import { Suspense, lazy } from 'react';
import Loading from '../../components/Loading/Loading';
import { Seo } from '../../components/SEO/SEO';
const HeroBanner = lazy(() => import('../../components/HeroBanner/HeroBanner'));
const About = lazy(() => import ('../../components/About/About'));
const Experience = lazy(() => import('../../components/Experience/Experience'));
const Education = lazy(() => import('../../components/Education/Education'));

function Home() {
    return (
        <Suspense fallback={<Loading />}>
            <Seo pageKey='home'/>
            <HeroBanner pageKey='home' />
            <About />
            <Experience />
            <Education />
        </Suspense>
    );
}

export default Home;