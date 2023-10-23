import {
    createTheme,
    CssBaseline,
    PaletteMode,
    responsiveFontSizes,
    ThemeProvider,
    useMediaQuery,
} from "@mui/material";
import { createContext, useEffect, useMemo, useState } from "react";
import {
    MUILocaleData,
    supportedLocales,
} from "../localization/SupportedLocales";
import i18n from "../localization/i18n";

/**
  TypeScript and React inconvenience:
  These functions are in here purely for types! 
  They will be overwritten - it's just that
  createContext must have an initial value.
  Providing a type that could be 'null | something' 
  and initiating it with *null* would be uncomfortable :)
*/
export const MUIWrapperContext = createContext({
    toggleColorMode: () => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setLocale: (_locale: MUILocaleData) => {},
    locale: supportedLocales[0], // defaults to the first item - English
});

const getCurrentLanguageIndex = (lang: string) => {
    return supportedLocales.findIndex((x) => x.lng == lang);
};

export default function MUIWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
        ? "dark"
        : "light";
    const currentLocaleIndex: number = getCurrentLanguageIndex(i18n.language);
    const [mode, setMode] = useState<PaletteMode>(prefersDarkMode);
    const [locale, setLocale] = useState<MUILocaleData>(
        supportedLocales[0]
    );

    useEffect(() => {
      setLocale(supportedLocales[currentLocaleIndex])
    }, [currentLocaleIndex])

    const muiWrapperUtils = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const theme = useMemo(
        () =>
            responsiveFontSizes(
                createTheme(
                    {
                        palette: {
                            mode,
                        },
                        typography: {
                            fontFamily: ["Open Sans", "sans-serif"].join(","),
                        },
                    },
                    locale.muiCore
                )
            ),
        [mode, locale.muiCore]
    );

    return (
        <MUIWrapperContext.Provider
            value={{
                toggleColorMode: muiWrapperUtils.toggleColorMode,
                locale,
                setLocale,
            }}
        >
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                {children}
            </ThemeProvider>
        </MUIWrapperContext.Provider>
    );
}
