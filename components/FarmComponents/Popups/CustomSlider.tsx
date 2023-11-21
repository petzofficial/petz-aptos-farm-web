import { useCallback, useState } from "react";

import { debounce } from "@mui/material/utils";
import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomSlider = () => {
  const [value, setValue] = useState(500);
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
  const bal = 500 * value / 100
  return (
    <div className="App">
      <p>{`Balance: ${bal}`}</p>
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