import { useCallback, useEffect, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { debounce } from "@mui/material/utils";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
export const CustomSlider = (props: any) => {
  const [value, setValue] = useState(0);
  const [textValue, setTextValue] = useState<any>(0);
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
  const handleSliderChange = useCallback((event: any, value: any) => {
    debounceSliderChange(value);
  }, []);

  const debounceSliderChange = debounce((val) => {
    setValue(val);
  }, 200);
  //const bal = props.moonValue * value / 100
  const valueUSD = (value*Number(textValue)) / 100
  return (
    <div className="App">
      <Box>
        <Box
          sx={{
            height: "100px",
            backgroundColor: "#f1e9e7",
            borderRadius: "20px",
          }}
        >
          <input
            type="text"
            placeholder="0.000"
            style={{
              border: "none",
              color: "#000",
              fontSize: "13px",
              textAlign: "right",
              padding: "25px 15px 0px 0px",
              fontWeight: "600",
              width: "100%",
              backgroundColor: "transparent",
              outline: "none",
              appearance: "textfield",
              WebkitAppearance: "textfield",
              MozAppearance: "textfield",
            }}
            //value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <p
            style={{
              color: "#000",
              fontSize: "13px",
              textAlign: "right",
              padding: "0px 15px 0px 0px",
              fontWeight: "600",
            }}
          >
            ~{valueUSD} USD
          </p>
        </Box>
        <DialogTitle
          style={{
            textAlign: "right",
            color: "#000",
            padding: "5px 3px",
            fontWeight: "bolder",
            fontSize: "13px",
          }}
        >
          {/* Balance: 2 */}
        </DialogTitle>
      </Box>
      <p>{`Balance: ${props.moonValue}`}</p>
      <MySlider
        defaultValue={value}
        onChange={(e, v) => handleSliderChange(e, v)}
        min={0}
        max={100}
        //step={10}
        valueLabelDisplay="on"
      />
      <Box>
        <span
          style={{
            display: "inline-block",
            width: "23%",
            height: "30px",
            margin: "10px 2% 10px 0px",
            backgroundColor: "#eff4f5",
            textAlign: "center",
            lineHeight: "32px",
            borderRadius: "50px",
            fontSize: "13px",
            fontWeight: "600",
            color: "#000",
          }}
          onClick={() => setValue(25)}
        >
          25%
        </span>
        <span
          style={{
            display: "inline-block",
            width: "23%",
            height: "30px",
            margin: "10px 2% 10px 0px",
            backgroundColor: "#eff4f5",
            textAlign: "center",
            lineHeight: "32px",
            borderRadius: "50px",
            fontSize: "13px",
            fontWeight: "600",
            color: "#000",
          }}
          onClick={() => setValue(50)}
        >
          50%
        </span>
        <span
          style={{
            display: "inline-block",
            width: "23%",
            height: "30px",
            margin: "10px 2% 10px 0px",
            backgroundColor: "#eff4f5",
            textAlign: "center",
            lineHeight: "32px",
            borderRadius: "50px",
            fontSize: "13px",
            fontWeight: "600",
            color: "#000",
          }}
          onClick={() => setValue(75)}
        >
          75%
        </span>
        <span
          style={{
            display: "inline-block",
            width: "23%",
            height: "30px",
            margin: "10px 2% 10px 0px",
            backgroundColor: "#eff4f5",
            textAlign: "center",
            lineHeight: "32px",
            borderRadius: "50px",
            fontSize: "13px",
            fontWeight: "600",
            color: "#000",
          }}
          onClick={() => setValue(100)}
        >
          MAX
        </span>
      </Box>
    </div>
  );
}