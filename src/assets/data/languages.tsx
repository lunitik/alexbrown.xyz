export type Language = {
    name: string;
    details: LanguageDetails;
}

export type LanguageDetails = {
    locale: string;
    pages: Array<Page>;
}

export type Page = {
    name: string;
    path: string;
    metadata: PageProperties;
}

export type PageProperties = {
    canonical: string;
    xdefault: boolean;
}

export const languages: Array<Language> = [
    {
        name: "en",
        details: {
            locale: "en",
            pages: [
                {
                    name: "home",
                    path: "/",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/",
                        xdefault: true,
                    }
                },
                {
                    name: "contact",
                    path: "/contact",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/contact",
                        xdefault: true,
                    }
                },
                {
                    name: "blogs",
                    path: "/blogs",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/blogs",
                        xdefault: true,
                    }
                },
                {
                    name: "blog.how-to-search",
                    path: "/blogs/how-to-search",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/blogs/how-to-search",
                        xdefault: true,
                    }
                },
                {
                    name: "blog.dark-mode",
                    path: "/blogs/dark-mode",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/blogs/dark-mode",
                        xdefault: true,
                    }
                },
                {
                    name: "blog.language-selection",
                    path: "/blogs/language-selection",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/blogs/language-selection",
                        xdefault: true,
                    }
                },
                {
                    name: "blog.dynamically-initialised-state",
                    path: "/blogs/dynamically-initialised-state",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/blogs/dynamically-initialised-state",
                        xdefault: true,
                    }
                },
                {
                    name: "game",
                    path: "/rock-paper-scissors",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/rock-paper-scissors",
                        xdefault: true,
                    }
                },
                {
                    name: "donut-charts",
                    path: "/donut-charts",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/donut-charts",
                        xdefault: true,
                    }
                }
            ],
        },
    },
    {
        name: "en-us",
        details: {
            locale: "en-US",
            pages: [
                {
                    name: "home",
                    path: "/en-us/",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/en-us/",
                        xdefault: false,
                    },
                },
                {
                    name: "contact",
                    path: "/en-us/contact/",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/en-us/contact",
                        xdefault: false,
                    },
                },
                {
                    name: "blogs",
                    path: "/en-us/blogs",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/en-us/blogs",
                        xdefault: false,
                    }
                },
                {
                    name: "blog.how-to-search",
                    path: "/en-us/blogs/how-to-search",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/en-us/blogs/how-to-search",
                        xdefault: false,
                    }
                },
                {
                    name: "blog.dark-mode",
                    path: "/en-us/blogs/dark-mode",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/en-us/blogs/dark-mode",
                        xdefault: false,
                    }
                },
                {
                    name: "blog.language-selection",
                    path: "/en-us/blogs/language-selection",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/en-us/blogs/language-selection",
                        xdefault: false,
                    }
                },
                {
                    name: "blog.dynamically-initialised-state",
                    path: "/en-us/blogs/dynamically-initialised-state",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/en-us/blogs/dynamically-initialised-state",
                        xdefault: false,
                    }
                },
                {
                    name: "game",
                    path: "/en-us/rock-paper-scissors",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/en-us/rock-paper-scissors",
                        xdefault: false,
                    }
                },
                {
                    name: "donut-charts",
                    path: "/en-us/donut-charts",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/en-us/donut-charts",
                        xdefault: false,
                    }
                }
            ],
        },
    },
    {
        name: "pl-pl",
        details: {
            locale: "pl-PL",
            pages: [
                {
                    name: "home",
                    path: "/pl-pl/",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/pl-pl/",
                        xdefault: false,
                    },
                },
                {
                    name: "contact",
                    path: "/pl-pl/kontakt",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/pl-pl/kontakt",
                        xdefault: false,
                    },
                },
                {
                    name: "blogs",
                    path: "/pl-pl/blogi",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/pl-pl/blogi",
                        xdefault: false,
                    }
                },
                {
                    name: "blog.how-to-search",
                    path: "/pl-pl/blogi/jak-szukac",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/pl-pl/blogi/jak-szukac",
                        xdefault: false,
                    }
                },
                {
                    name: "blog.dark-mode",
                    path: "/pl-pl/blogi/tryb-ciemny",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/pl-pl/blogi/tryb-ciemny",
                        xdefault: false,
                    }
                },
                {
                    name: "blog.language-selection",
                    path: "/pl-pl/blogi/wybor-jezyka",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/pl-pl/blogi/wybor-jezyka",
                        xdefault: false,
                    }
                },
                {
                    name: "blog.dynamically-initialised-state",
                    path: "/pl-pl/blogi/stan-zainicjowany-dynamicznie",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/pl-pl/blogi/stan-zainicjowany-dynamicznie",
                        xdefault: false,
                    }
                },
                {
                    name: "game",
                    path: "/pl-pl/rock-paper-scissors",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/pl-pl/rock-paper-scissors",
                        xdefault: false,
                    }
                },
                {
                    name: "donutcharts",
                    path: "/pl-pl/wykresy-paczkow",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/pl-pl/wykresy-paczkow",
                        xdefault: false,
                    }
                }
            ],
        },
    },
];
