import { useState } from "react";
import { useDonutCharts } from "../../providers/DonutChartDataProvider/useDonutCharts";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, TextField, useMediaQuery, useTheme } from "@mui/material";
import './DonutChartGenerator.scss';
import DonutChartSlider from "../DonutChartSlider/DonutChartSlider";
import { v4 as uuidv4 } from 'uuid';

function DonutChartGenerator() {
    const [donutCharts, setDonutCharts] = useDonutCharts();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [enableSpacing, setEnableSpacing] = useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [heading, setHeading] = useState("Demo");
    const [subHeading, setSubHeading] = useState(null);
    const [first, setFirst] = useState(40);
    const [second, setSecond] = useState(33);
    const [third, setThird] = useState(12);
    const [forth, setForth] = useState(8);
    const [fifth, setFifth] = useState(7);
    
    const handleCheckboxChange = () => {
      setEnableSpacing(!enableSpacing);
    }

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
  }

  const handleHeading = (event) => {
    setHeading(event.target.value)
  }

  const handleSubHeading = (event) => {
    setSubHeading(event.target.value)
  }

  const handleAddChart = () => {
    setDonutCharts([{
      guid: uuidv4(),
      style: {
        "--first": convertInputToStyle(first),
        "--second": convertInputToStyle(second),
        "--third": convertInputToStyle(third),
        "--fourth": convertInputToStyle(forth),
        "--fifth": convertInputToStyle(fifth),
        "--donut-spacing" : enableSpacing ? 2 : 0
      } as React.CSSProperties,
      heading: heading,
      sub: subHeading ? subHeading : null as unknown as undefined
    }, ...donutCharts]);
    setOpen(false);
  }

  return (
    <div className="donut-charts-generator">
        <Button variant="contained" onClick={handleClickOpen}>
        Create chart
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
        <DialogTitle>Create chart</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            required
            id="donut-chart-heading"
            label="Heading"
            defaultValue={heading}
            onChange={handleHeading}
          />
          <TextField
            id="donut-chart-sub"
            label="Optional Sub Heading"
            defaultValue={subHeading}
            onChange={handleSubHeading}
          />
          <DonutChartSlider title="first" value={first} setValue={(value: number) => setFirst(value)} />
          <DonutChartSlider title="second" value={second} setValue={(value: number) => setSecond(value)} />
          <DonutChartSlider title="third" value={third} setValue={(value: number) => setThird(value)} />
          <DonutChartSlider title="fourth" value={forth} setValue={(value: number) => setForth(value)} />
          <DonutChartSlider title="fifth" value={fifth} setValue={(value: number) => setFifth(value)} />
          <FormControlLabel control={<Checkbox
            checked={enableSpacing}
            onChange={handleCheckboxChange}
            inputProps={{ 'aria-label' : 'enable spacing',}} />} label="Enable spacing" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleAddChart}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DonutChartGenerator;
