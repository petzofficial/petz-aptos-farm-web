export const shortenString = (inputString: string) => {
  if (inputString.length <= 9) {
    return inputString;
  } else {
    return (
      inputString.substring(0, 5) +
      "..." +
      inputString.substring(inputString.length - 4)
    );
  }
};

export const formatTimestamp = (timestamp: string) => {
  const microsecondsPerMillisecond = BigInt(1000);
  const timestampAsBigInt = BigInt(timestamp);
  const milliseconds = timestampAsBigInt / microsecondsPerMillisecond;

  const date = new Date(Number(milliseconds));
  const formattedDate = `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} 
    ${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;

  return formattedDate;
};

export const convertToDecimalString = (value: string) => {
  if (value?.includes(".")) {
    return value;
  } else {
    const updatedValue = value?.slice(0, 1) + "." + value?.slice(1);
    return updatedValue;
  }
};

export const convertNumberToDecimal = (value: number) => {
  if (typeof value === "number" && !Number.isInteger(value)) {
    return value;
  }

  const stringValue = value.toString();
  const updatedValueStr = stringValue.slice(0, 1) + "." + stringValue.slice(1);
  const updatedValue = parseFloat(updatedValueStr);
  return updatedValue;
};

// export const convertToDecimal = (value: any) => {
//   const decimalValue = parseFloat(value);
//   return decimalValue;
// };

// export const convertToDecimal1 = (value: any) => {
//   const decimalValue = (value / 1000000).toFixed(6);
//   return decimalValue;
// };

// export const convertToDecimal2 = (value: any) => {
//   const divisor = Math.pow(10, 8);
//   return (value / divisor).toFixed(6);
// };
