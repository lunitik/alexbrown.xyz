import { createContext } from "react";
import { DonutChartProps } from "../../components/DonutChart/DonutChart";

export const DonutChartContext = createContext<[DonutChartProps[], React.Dispatch<React.SetStateAction<DonutChartProps[]>>]>([[], () => {}]);