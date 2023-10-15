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
                    },
                },
                {
                    name: "contact",
                    path: "/contact",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/contact",
                        xdefault: true,
                    },
                },
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
                    path: "/pl-pl/contact",
                    metadata: {
                        canonical: "https://www.alexbrown.xyz/pl-pl/contact",
                        xdefault: false,
                    },
                },
            ],
        },
    },
];
