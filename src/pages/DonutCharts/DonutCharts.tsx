import { Suspense, lazy } from 'react';
import Loading from '../../components/Loading/Loading';
import { Seo } from '../../components/SEO/SEO';
const PageBackground = lazy(() => import('../../components/PageBackground/PageBackground'));
const HeroBanner = lazy(() => import('../../components/HeroBanner/HeroBanner'));

function DonutCharts() {
    return (
        <Suspense fallback={<Loading />}>
            <Seo pageKey='donut-charts'/>
            <HeroBanner pageKey='donut-charts' />
            <PageBackground />
        </Suspense>
    );
}

export default DonutCharts;