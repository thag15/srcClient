import {
  FormGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import theme from "~/theme";

const SelectTheme = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <FormGroup>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Mode</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={mode}
          label="Mode"
          onChange={(e) => setMode(e.target.value)}
        >
          <MenuItem value={"light"} className="">
            <Box
              sx={{
                display: "flex",
                justifyItems: "center",
                gap: theme.spacing(),
              }}
            >
              <WbSunnyOutlinedIcon size="small" />
              Light
            </Box>
          </MenuItem>
          <MenuItem value={"system"}>
            <Box
              sx={{
                display: "flex",
                justifyItems: "center",
                gap: theme.spacing(),
              }}
            >
              <SettingsBrightnessOutlinedIcon size="small" />
              System
            </Box>
          </MenuItem>
          <MenuItem value={"dark"}>
            <Box
              sx={{
                display: "flex",
                justifyItems: "center",
                gap: theme.spacing(),
              }}
            >
              <DarkModeOutlinedIcon size="small" />
              Dark
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </FormGroup>
  );
};

export default SelectTheme;
