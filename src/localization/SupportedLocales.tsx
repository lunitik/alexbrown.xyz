import {
    enUS as materialLocaleEnglish,
    plPL as materialLocalePolish,
    Localization,
  } from "@mui/material/locale";

  export interface MUILocaleData {
    muiCore: Localization;
    title: string;
    lng: string;
  }

  const english: MUILocaleData = {
    muiCore: materialLocaleEnglish,
    title: "English",
    lng: "en-US"
  };

  const polish: MUILocaleData = {
    muiCore: materialLocalePolish,
    title: "Polska",
    lng: "pl-PL"
  };

  export const supportedLocales: MUILocaleData[] = [
    english,
    polish,
  ];