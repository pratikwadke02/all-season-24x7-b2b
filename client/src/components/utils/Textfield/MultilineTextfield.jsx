import React from "react";
import { styled, TextField } from "@mui/material";
import { theme } from "../../../theme";

const BorderMultilineTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: theme.palette.secondary.main,
  },
  "& .Mui-underline:after": {
    borderBottomColor: theme.palette.secondary.main,
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: theme.palette.secondary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main,
    },
  },
});

const MultilineTextfield = (props) => {

    const {label} = props;

  return (
    <BorderMultilineTextField
      type={"text"}
      label={label}
      cols={30}
      rows={2}
      multiline
      sx={{width:'100%'}}
    />
  );
};

export default MultilineTextfield;
