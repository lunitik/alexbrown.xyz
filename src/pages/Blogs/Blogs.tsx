import { Suspense, lazy } from 'react';
import Loading from '../../components/Loading/Loading';
import { Seo } from '../../components/SEO/SEO';
const PageBackground = lazy(() => import('../../components/PageBackground/PageBackground'));
const BlogResults = lazy(() => import('../../components/BlogResults/BlogResults'));
const HeroBanner = lazy(() => import('../../components/HeroBanner/HeroBanner'));

function Blogs() {
    return (
        <Suspense fallback={<Loading />}>
            <Seo pageKey='blogs'/>
            <HeroBanner pageKey='blogs' />
            <BlogResults />
            <PageBackground />
        </Suspense>
    );
}

export default Blogs;