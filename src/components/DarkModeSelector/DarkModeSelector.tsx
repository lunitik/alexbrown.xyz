import "./DarkModeSelector.scss";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MUIWrapperContext } from "../../context/MUIWrapper";
import React from "react";
import { useTranslation } from "react-i18next";

function DarkModeSelector() {
  const theme = useTheme();
  const muiUtils = React.useContext(MUIWrapperContext);
  const { t } = useTranslation('translation', { keyPrefix: "components.darkmodeselector" });
  const themeLabel = `${theme.palette.mode} mode`;

  const handleChange = () => {
    muiUtils.toggleColorMode();
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch onChange={handleChange} id="themeModeSelector" sx={{ m: 1 }} />}
        label={t(`${themeLabel}`)}
        labelPlacement="start" 
      />
    </FormGroup>
  );
}

export default DarkModeSelector;
