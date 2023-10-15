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
import { updateBrowserLocation } from "../../features/onLanguageChange";
import i18n from "../../localization/i18n";

function LanguageSelector() {
  const theme = useTheme();
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
                updateBrowserLocation(i18n.language, (data as MUILocaleData).lng);
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
}

export default LanguageSelector;
