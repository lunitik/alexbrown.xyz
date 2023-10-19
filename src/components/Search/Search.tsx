import "./Search.scss";
import { Autocomplete, Button, Container, TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useBlogs } from "../../providers/BlogsDataProvider/useBlogs";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { t } = useTranslation("translation", {
        keyPrefix: "components.search",
    });
    const blogs = useBlogs();
    const [disabled, setDisabled] = useState<boolean>(!searchParams ? true : false);

    const handleClearSearch = () => {
        setSearchParams();
        setDisabled(true);
    };

    const handleSelectChange = (
        _event: React.SyntheticEvent,
        value: string,
        reason: string
    ) => {
        if (reason == "selectOption") {
            const paramsObj = { title: value };
            const params = new URLSearchParams(paramsObj);
            setSearchParams(params);
            setDisabled(false);
        }
    };

    return (
        <Container className="search__container">
            <Autocomplete
                freeSolo
                id=""
                className="search__autocomplete"
                disableClearable
                options={blogs.map((option) => option.title)}
                onChange={handleSelectChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={t("search_input_label")}
                        InputProps={{
                            ...params.InputProps,
                            type: "search",
                        }}
                    />
                )}
            />
            <Button
                variant="contained"
                onClick={handleClearSearch}
                disabled={disabled}
                disableElevation
            >
                {t("clear")}
            </Button>
        </Container>
    );
}

export default Search;
