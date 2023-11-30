import { useTheme } from "@mui/material";
import { useDonutCharts } from "../../providers/DonutChartDataProvider/useDonutCharts";
import DonutChart from "../DonutChart/DonutChart";

function DonutChartRenderer() {
    const theme = useTheme();
    const donutChartsColourModeClass = `donut-charts donut-charts-colour-mode--${theme.palette.mode}`
    const donutCharts = useDonutCharts();
    
    return (
        <section className={donutChartsColourModeClass}>
                {donutCharts.map((chartData) => {
                    return <DonutChart key={chartData.guid} guid={chartData.guid} style={chartData.style} heading={chartData.heading} sub={chartData.sub} />
                })}
        </section>
    );
}

export default DonutChartRenderer;