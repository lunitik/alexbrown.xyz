import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../localization/AppLanguages";
import { MUIWrapperContext } from "../../context/MUIWrapper";
import React from "react";
import { getPathFromCurrentLanguage } from "../../localization/languageHelpers";

function BackButton(props: { page: AppRoute}) {
    const navigate = useNavigate();
    const muiUtils = React.useContext(MUIWrapperContext);

    const link = (
        getPathFromCurrentLanguage(muiUtils.locale.lng, props.page)
    );

    const onClickHandler = () => {
        navigate(link);
    }

    return (
        <Button size="large" onClick={onClickHandler}>
            <FontAwesomeIcon icon={faCircleLeft} />
        </Button>
    );
}

export default BackButton;