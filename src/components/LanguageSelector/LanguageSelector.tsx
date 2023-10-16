import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from "@mui/material";
import { MUIWrapperContext } from "../../context/MUIWrapper";
import React from "react";
import {
  MUILocaleData,
  supportedLocales,
} from "../../localization/SupportedLocales";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { updateBrowserLocation } from "../../features/onLanguageChange";
import { appStrings } from "../../localization/AppLanguages";
import { LanguageStrings } from "../../localization/localizations/base-strings";

function LanguageSelector() {
  const theme = useTheme();
  const { pathname } = useLocation();
  const colourModeClasses = `languageselector languageselector-colour-mode-${theme.palette.mode}`;
  const { t } = useTranslation("translation", {
    keyPrefix: "components.languageselector",
  });
  const muiUtils = React.useContext(MUIWrapperContext);

  return (
    <>
      {muiUtils.locale?.title && (
      <Box className={colourModeClasses} sx={{ minWidth: 120, color: "inherit" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{t("label-language")}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-selectd"
              value={muiUtils.locale}
              renderValue={(val) => val.title}
              label="language"
              onChange={(event: SelectChangeEvent<MUILocaleData>) => {
                const data = event.target.value;
                const targetLang = (data as MUILocaleData).lng;
                updateBrowserLocation(getMatchingRoute(targetLang));
              }}
            >
              {supportedLocales.map((item) => {
                return (
                  // @ts-ignore - necessary to load object into value
                  <MenuItem key={item.title} value={item}>
                    {item.title}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      )}
    </>
  );

  function getMatchingRoute(language: string) {
      /**
       * Get the key of the route the user is currently on
       */
      const splitpath = pathname.split(muiUtils.locale.lng);
      const route = splitpath[(splitpath.length - 1)];      
      let routeKey: string = "";
      Object.keys(appStrings).forEach(languageKey => {
        const routes: (LanguageStrings | undefined) = Object.getOwnPropertyDescriptor(appStrings, languageKey)?.value;
        if ( routes !== undefined ) {
          for (const [key, value] of Object.entries(routes)) {
            if (value == route) {
              routeKey = key;
            }
          }
        }
      })

      /**
       * Find the matching route for the new language
       */
      const matchingLanguage = Object.getOwnPropertyDescriptor(appStrings, language)?.value;
      const matchingRoute = Object.getOwnPropertyDescriptor(matchingLanguage, routeKey)?.value;

      /**
       * handle en as language
       */
      const handledLanguage = language == "en" ? matchingRoute : `/${language}` + matchingRoute;

      /**
       * Return localized route
       */
      return handledLanguage;
    }
}

export default LanguageSelector;
