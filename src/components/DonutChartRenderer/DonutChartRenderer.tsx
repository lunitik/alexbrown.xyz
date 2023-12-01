import { lazy } from "react";
import { useTheme } from "@mui/material";
import { useDonutCharts } from "../../providers/DonutChartDataProvider/useDonutCharts";
const DonutChart = lazy(() => import("../DonutChart/DonutChart"));
const DonutChartGenerator = lazy(
    () => import("../DonutChartGenerator/DonutChartGenerator")
);

function DonutChartRenderer() {
    const theme = useTheme();
    const donutChartsColourModeClass = `donut-charts donut-charts-colour-mode--${theme.palette.mode}`;
    const [donutCharts] = useDonutCharts();

    return (
        <section className={donutChartsColourModeClass}>
            <DonutChartGenerator />
            <div className="donut-charts__container">
                {donutCharts.map((chartData) => {
                    return (
                        <DonutChart
                            key={chartData.guid}
                            guid={chartData.guid}
                            style={chartData.style}
                            heading={chartData.heading}
                            sub={chartData.sub}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default DonutChartRenderer;
