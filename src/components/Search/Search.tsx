import './Search.scss';
import { Autocomplete, Button, Container, TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useBlogs } from "../../providers/BlogsDataProvider/useBlogs";
import { useTranslation } from 'react-i18next';

function Search() {
    const [, setSearchParams] = useSearchParams();
    const { t } = useTranslation("translation", { keyPrefix : "components.search"})
    const blogs = useBlogs();

    const handleClearSearch = () => {
        setSearchParams();
    }

    const handleSelectChange = (_event: React.SyntheticEvent, value: string, reason: string) => {
        if (reason == "selectOption") {
            const paramsObj = { "title" : value}
            const params = new URLSearchParams(paramsObj)
            setSearchParams(params);
        }
    }

    return (
       <Container className='search__container'>
        <Autocomplete
            freeSolo
            id=""
            className='search__autocomplete'
            disableClearable
            options={blogs.map((option) => option.title)}
            onChange={handleSelectChange}
            renderInput={(params) => (
            <TextField
                {...params}
                label={t("search_input_label")}
                InputProps={{
                ...params.InputProps,
                type: 'search',
                }}
            />
            )}
        />
        <Button
         variant="contained"
         onClick={handleClearSearch}
         disableElevation>
            {t("clear")}
        </Button>
       </Container>
    );
}

export default Search;