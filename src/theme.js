// import { createTheme } from "@mui/material/styles";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
const Theme = extendTheme({
  spacing: (factor) => `${0.25 * factor}rem`,
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {},
  //     },
  //   },
  //   // MuiOutlinedInput: {
  //   //   styleOverrides: {
  //   //     root: {
  //   //       "& fieldset": {
  //   //         boderWidth: "0.5px !important",
  //   //       },
  //   //       "&:hover fieldset": {
  //   //         boderWidth: "1px !important",
  //   //       },
  //   //     },
  //   //   },
  //   // },
  // },
});
export default Theme;
