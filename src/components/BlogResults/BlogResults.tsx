import './BlogResults.scss';
import { Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BlogCard, { BlogData } from '../BlogCard/BlogCard';
import { useBlogs } from '../../providers/BlogsDataProvider/useBlogs';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from '../Search/Search';
import { useSearchParams } from 'react-router-dom';
import { filterBlogs } from '../../features/blogsearchhelpers';
import Loading from '../Loading/Loading';

function BlogResults() {
    const theme = useTheme();
    const { t } = useTranslation("translation", { keyPrefix : "components.blogresults" });
    const blogs = useBlogs();
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const filteredBlogs = title ? filterBlogs(title, blogs) : blogs;

    return (
        <section className='blogresults' data-colour-mode={theme.palette.mode}>
            <div className='blogresults__container'>
                <header className='blogresults__container__header'>
                    <Typography variant='h2'>
                        <FontAwesomeIcon icon={faBlog} />
                        {t("heading")}
                    </Typography>
                </header>
                <Search />
                <div className='blogresults__container__results'>
                    {
                        filteredBlogs.length != 0 ? filteredBlogs.map((blogData: BlogData) => (
                            <BlogCard data={blogData} key={Math.random()} />
                        )) : <Loading />
                    } 
                </div>
            </div>
        </section>
    );
}

export default BlogResults;
