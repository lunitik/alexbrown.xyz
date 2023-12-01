import { Checkbox } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { MuiColorInput } from "mui-color-input";
import { useState } from "react";
import DonutChartSlider from "../DonutChartSlider/DonutChartSlider";

function DonutChartGeneratorElement(props: { title: string}) {
    const [colorValue, setColorValue] = useState('#ffffff')

    const handleColorChange = (newValue) => {
      setColorValue(newValue)
    }

    return (
        <Grid container spacing={4}>
            <Grid xs={1} display={"flex"} justifyContent={"center"}>
                <Checkbox defaultChecked />
            </Grid>
            <Grid xs={8}>
                <DonutChartSlider title={props.title} />
            </Grid>
            <Grid xs={3}>
                <MuiColorInput value={colorValue} onChange={handleColorChange} />
            </Grid>
        </Grid>
    );
}

export default DonutChartGeneratorElement;