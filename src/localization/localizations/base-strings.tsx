const baseStrings = {
    'routes.home' : '/',
    'routes.contact' : '/contact',
    'routes.blogs' : '/blogs',
    'routes.blog.howtosearch' : '/blogs/how-to-search',
    'routes.blog.darkmode' : '/blogs/dark-mode',
    'routes.blog.languageselection' : '/blogs/language-selection',
    'routes.blog.dynamicstate' : '/blogs/dynamically-initialised-state',
    'routes.game' : '/rock-paper-scissors',
    'routes.donutcharts' : '/donut-charts'
};

export type LanguageStrings = typeof baseStrings;
export const en = baseStrings;