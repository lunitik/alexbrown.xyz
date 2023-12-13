import { useState } from "react";
import { useDonutCharts } from "../../providers/DonutChartDataProvider/useDonutCharts";
import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControlLabel,
    TextField,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import "./DonutChartGenerator.scss";
import DonutChartSlider from "../DonutChartSlider/DonutChartSlider";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

function DonutChartGenerator() {
    const [donutCharts, setDonutCharts] = useDonutCharts();
    const theme = useTheme();
    const { t } = useTranslation("translation", { keyPrefix: "components.donutchartgenerator"});
    const [open, setOpen] = useState(false);
    const [enableSpacing, setEnableSpacing] = useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [heading, setHeading] = useState("Demo");
    const [subHeading, setSubHeading] = useState<null | string>(null);
    const [first, setFirst] = useState(40);
    const [second, setSecond] = useState(33);
    const [third, setThird] = useState(12);
    const [forth, setForth] = useState(8);
    const [fifth, setFifth] = useState(7);

    const handleCheckboxChange = () => {
        setEnableSpacing(!enableSpacing);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const convertInputToStyle = (input: number): number => {
        return input / 100;
    };

    const handleHeading = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setHeading(event.target.value);
    };

    const handleSubHeading = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSubHeading(event.target.value);
    };

    const isChartValid = () => {
        return first + second + third + forth + fifth <= 100 ? true : false;
    };

    const handleAddChart = () => {
        if (isChartValid()) {
            setDonutCharts([
                {
                    guid: uuidv4(),
                    style: {
                        "--first": convertInputToStyle(first),
                        "--second": convertInputToStyle(second),
                        "--third": convertInputToStyle(third),
                        "--fourth": convertInputToStyle(forth),
                        "--fifth": convertInputToStyle(fifth),
                        "--donut-spacing": enableSpacing ? 2 : 0,
                    } as React.CSSProperties,
                    heading: heading,
                    sub: subHeading
                        ? subHeading
                        : (null as unknown as undefined),
                },
                ...donutCharts,
            ]);
            setOpen(false);
        } else {
            alert(t("totals-exceeded"));
        }
    };

    return (
        <div className="donut-charts-generator">
            <Button variant="contained" onClick={handleClickOpen}>
                {t("button-add-text")}
            </Button>
            <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
                <DialogTitle>{t("dialog-title")}</DialogTitle>
                <DialogContent>
                    <DialogContentText className="dialog__content__text">
                        {t("dialog-content-text")}
                    </DialogContentText>
                    <TextField
                        required
                        fullWidth
                        margin="normal"
                        id="donut-chart-heading"
                        label={t("heading")}
                        defaultValue={heading}
                        onChange={handleHeading}
                    />
                    <TextField
                        fullWidth
                        id="donut-chart-sub"
                        margin="normal"
                        label={t("sub-heading")}
                        defaultValue={subHeading}
                        onChange={handleSubHeading}
                    />
                    <DonutChartSlider
                        title="first"
                        value={first}
                        setValue={(value: number) => setFirst(value)}
                    />
                    <DonutChartSlider
                        title="second"
                        value={second}
                        setValue={(value: number) => setSecond(value)}
                    />
                    <DonutChartSlider
                        title="third"
                        value={third}
                        setValue={(value: number) => setThird(value)}
                    />
                    <DonutChartSlider
                        title="fourth"
                        value={forth}
                        setValue={(value: number) => setForth(value)}
                    />
                    <DonutChartSlider
                        title="fifth"
                        value={fifth}
                        setValue={(value: number) => setFifth(value)}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={enableSpacing}
                                onChange={handleCheckboxChange}
                                inputProps={{ "aria-label": t("enable-spacing") }}
                            />
                        }
                        label={t("enable-spacing")}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>{t("cancel")}</Button>
                    <Button onClick={handleAddChart}>{t("add")}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DonutChartGenerator;
