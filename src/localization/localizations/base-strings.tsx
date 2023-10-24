const baseStrings = {
    'routes.home' : '/',
    'routes.contact' : '/contact',
    'routes.blogs' : '/blogs',
    'routes.blog.howtosearch' : '/blogs/how-to-search',
    'routes.blog.darkmode' : '/blogs/dark-mode'
};

export type LanguageStrings = typeof baseStrings;
export const en = baseStrings;