import { Suspense, lazy } from 'react';
import Loading from '../../components/Loading/Loading';
import { Seo } from '../../components/SEO/SEO';
import PageBackground from '../../components/PageBackground/PageBackground';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
const HeroBanner = lazy(() => import('../../components/HeroBanner/HeroBanner'));

function Blogs() {
    return (
        <Suspense fallback={<Loading />}>
            <Seo pageKey='blogs'/>
            <HeroBanner pageKey='blogs' />
            <ComingSoon />
            <PageBackground />
        </Suspense>
    );
}

export default Blogs;