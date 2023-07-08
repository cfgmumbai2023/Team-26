import { TextField } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useEffect, useState } from "react";

const DatePickers = (props) => {
    const [value, setValue] = useState();
  
    useEffect(()=>{
     if(value)
      props.dateHandler(value.toDate())
  
      
  
    },[value])
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label=""
        value={value}
        disablePast={true}
        disableHighlightToday={true}
        closeOnSelect={true}
        minDate={new Date()}
        className="text-black  bg-tertiaryblue-100  py-0 focus:outline-none border-b-2 border-purple-600 rounded-lg font-title w-[100%]  text-sm font-bold "
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
export default DatePickers
