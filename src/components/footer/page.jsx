import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
export const Footer = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#34495e" }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {new Date().toDateString()}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
