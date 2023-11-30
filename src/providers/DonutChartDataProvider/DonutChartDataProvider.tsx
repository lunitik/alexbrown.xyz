import {
    ReactNode,
    useEffect,
    useState,
} from "react";
import { DonutChartProps } from "../../components/DonutChart/DonutChart";
import { DonutChartContext } from "./DonutChartContext";

interface Props {
    children?: ReactNode
}

export const DonutChartDataProvider = ({children} : Props) => {
    const [donutCharts, setDonutCharts] = useState<DonutChartProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`/data/donutcharts.json`)
                .then((data) => data.json())
                .then((data) => setDonutCharts(data))
        }
        fetchData();
    }, []);

    return (
        <DonutChartContext.Provider value={donutCharts}>
            {children}
        </DonutChartContext.Provider>
    );
};

export default DonutChartDataProvider;