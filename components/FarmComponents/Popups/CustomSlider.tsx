import { useEffect, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import { styled } from '@mui/system';

export const CustomSlider = (props: any) => {
  const [value, setValue] = useState(0);
  const [textValue, setTextValue] = useState<any>("");
  const handleSliderChange = (e:any)=>{
    setValue(e.target.value);
  }
  const Span = styled('span')({
    cursor:"pointer",
    color:"red",
    '&:hover': {
      backgroundColor: '#f49c63 !important',
   },
  });
  useEffect(()=>{
    setTextValue((value*Number(props?.moonValue)) / 100)
  },[value])
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
            ref={props.myRef}
            value={textValue}
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
            ~{textValue} USD
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
      <p>{`Balance: ${props?.moonValue}`}</p>
      <Slider
        defaultValue={value}
        onChange={(e) => handleSliderChange(e)}
        min={0}
        max={100}
        value={value}
        valueLabelDisplay="on"
      />
      <Box>
        <Span
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
        </Span>
        <Span
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
        </Span>
        <Span
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
        </Span>
        <Span
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
        </Span>
      </Box>
    </div>
  );
}