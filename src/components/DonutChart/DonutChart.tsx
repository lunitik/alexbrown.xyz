import { useTheme } from "@mui/material";
import "./donutchart.scss";

export type DonutChartProps = {
    guid: string;
    style: React.CSSProperties;
    heading: string;
    sub?: string;
};

function DonutChart(props: DonutChartProps) {
    const { guid, style, heading, sub } = props;
    const theme = useTheme();
    const donutColourModeClass = `donut donut-colour-mode--${theme.palette.mode}`;

    return (
        <div className={donutColourModeClass} style={style} id={guid}>
            {Object.keys(style).map((property) => {
                if (property === "--donut-spacing") return;

                return (
                    <div
                        key={property}
                        className={`donut__slice donut__slice__${property.slice(
                            2
                        )}`}
                    ></div>
                );
            })}
            <div className="donut__label">
                <div className="donut__label__heading">{heading}</div>
                {sub ? <div className="donut__label__sub">{sub}</div> : null}
            </div>
        </div>
    );
}

export default DonutChart;
