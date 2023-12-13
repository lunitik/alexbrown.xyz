import { useContext } from "react";
import { DonutChartContext } from "./DonutChartContext";

export const useDonutCharts = () => useContext(DonutChartContext);