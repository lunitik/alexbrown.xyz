import { lazy, useState } from "react";
import { Button, Checkbox, useTheme } from "@mui/material";
import { useDonutCharts } from "../../providers/DonutChartDataProvider/useDonutCharts";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useTranslation } from "react-i18next";
const DonutChart = lazy(() => import("../DonutChart/DonutChart"));
const DonutChartGenerator = lazy(
    () => import("../DonutChartGenerator/DonutChartGenerator")
);

function DonutChartRenderer() {
    const theme = useTheme();
    const { t } = useTranslation("translation", { keyPrefix: "components.donutchartrenderer"});
    const donutChartsColourModeClass = `donut-charts donut-charts-colour-mode--${theme.palette.mode}`;
    const [showDeleteOption, setShowDeleteOptions] = useState(false);
    const [donutCharts, setDonutCharts] = useDonutCharts();
    const [marked, setMarked] = useState<Set<string>>(new Set());

    const handleClickShowDeleteOption = () => {
        if (showDeleteOption && confirm(t("confirmation-dialog"))) {
            removeDeleted();
        }
        setShowDeleteOptions(() => !showDeleteOption);
    };

    const removeDeleted = () => {
        setDonutCharts(donutCharts.filter((chart) => !marked.has(chart.guid)));
    };

    const handleChecked = (event) => {
        if (marked.has(event.target.value)) {
            setMarked(
                (prev) =>
                    new Set([...prev].filter((x) => x !== event.target.value))
            );
        } else {
            setMarked((prev) => new Set([...prev, event.target.value]));
        }
    };

    return (
        <section className={donutChartsColourModeClass}>
            <Grid2
                container
                justifyContent={"flex-end"}
                maxWidth={1080}
                margin={"0 auto"}
                spacing={2}
                gap={2}
            >
                <DonutChartGenerator />
                {donutCharts.length ? (
                    <Button
                        variant="outlined"
                        onClick={handleClickShowDeleteOption}
                    >
                        {showDeleteOption
                            ? t("confirm-deletion")
                            : t("delete-charts")}
                    </Button>
                ) : null}
            </Grid2>
            <div className="donut-charts__container">
                {donutCharts.map((chartData) => {
                    return (
                        <Grid2
                            container
                            key={chartData.guid}
                            position={"relative"}
                        >
                            <DonutChart
                                guid={chartData.guid}
                                style={chartData.style}
                                heading={chartData.heading}
                                sub={chartData.sub}
                            />
                            <Checkbox
                                className={`delete-option ${
                                    showDeleteOption ? "" : "hidden"
                                }`}
                                onChange={handleChecked}
                                value={chartData.guid}
                            />
                        </Grid2>
                    );
                })}
            </div>
        </section>
    );
}

export default DonutChartRenderer;
