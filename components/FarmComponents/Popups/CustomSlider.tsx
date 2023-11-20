import { useCallback, useState } from "react";

import { debounce } from "@mui/material/utils";
import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomSlider = () => {
  const [value, setValue] = useState(0);
  const MySlider = styled(Slider)(() => ({
    "& .MuiSlider-thumb": {
      backgroundColor: "#f49c63",
    },
    "& .MuiSlider-rail": {
      backgroundColor: "#f49c63",
    },
    "& .MuiSlider-track": {
      backgroundColor: "#f49c63",
    },
  }));
  const handleSliderChange = useCallback((event:any, value:any) => {
    debounceSliderChange(value);
  }, []);

  const debounceSliderChange = debounce((val) => {
    console.log(val);
    setValue(val);
  }, 200);
  return (
    <div className="App">
      <h1>{`Balance: ${value}`}</h1>
      <MySlider
        defaultValue={value}
        onChange={(e, v) => handleSliderChange(e, v)}
        min={0}
        max={100}
        step={10}
        valueLabelDisplay="on"
      />
    </div>
  );
}