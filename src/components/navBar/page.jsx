import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  TextField,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import SelectTheme from "../SelectTheme/Page";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
const settings = ["Profile", "Account", "Dashboard", "Logout"];
function Navbar() {
  const pages = [
    { name: "home" },
    { name: "products" },
    { name: "pricing" },
    { name: "blog" },
  ];
  const [searchValue, setSearchValue] = useState("");
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#f5f6fa",
        position: "sticky",
        top: "0px",
        color: "blakc",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          {/* logo desktop */}
          <Typography
            variant="h6"
            noWrap
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",

              color: (theme) =>
                theme.palette.mode === "dark" ? "white" : "black",
              textDecoration: "none",
            }}
          >
            THAG
          </Typography>
          {/* menu mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(e) => setAnchorElNav(e.currentTarget)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((i, index) => (
                <MenuItem key={index} onClick={() => setAnchorElNav(null)}>
                  <Typography textAlign="center">{i.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* logo mobile */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: (theme) =>
                theme.palette.mode === "light" ? "black" : "white",
              textDecoration: "none",
            }}
          >
            THAG
          </Typography>
          {/* menu desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: { md: "space-around" },
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              {pages.map((i, index) => (
                <Button
                  key={index}
                  sx={{
                    my: 2,
                    display: "block",
                    gap: "10px",
                  }}
                >
                  <NavLink
                    to={`${i.name}`}
                    style={{
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    <Typography
                      sx={{
                        color: (theme) =>
                          theme.palette.mode === "light" ? "black" : "white",
                      }}
                    >
                      {i.name}
                    </Typography>
                  </NavLink>
                </Button>
              ))}
            </Box>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1 },
                display: { xs: "none", md: "flex" },
                width: "30%",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                type="text"
                label="Search"
                size="small"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon
                        sx={{
                          color: (theme) =>
                            theme.palette.mode === "light" ? "black" : "white",
                        }}
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <CloseIcon
                      fontSize="small"
                      onClick={() => setSearchValue("")}
                      sx={{
                        color: (theme) =>
                          searchValue
                            ? theme.palette.mode === "light"
                              ? "black"
                              : "white"
                            : "transparent",
                        cursor: "pointer",
                      }}
                    />
                  ),
                }}
                sx={{
                  width: "100%",
                  "& label": {
                    color: (theme) =>
                      theme.palette.mode === "light" ? "black" : "white",
                  },
                  "& input": {
                    color: (theme) =>
                      theme.palette.mode === "light" ? "black" : "white",
                  },
                  "& label.Mui-focused": {
                    color: (theme) =>
                      theme.palette.mode === "light" ? "black" : "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: (theme) =>
                        theme.palette.mode === "light" ? "black" : "white",
                    },
                    "&:hover fieldset": {
                      borderColor: (theme) =>
                        theme.palette.mode === "light" ? "black" : "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: (theme) =>
                        theme.palette.mode === "light" ? "black" : "white",
                    },
                  },
                }}
              />
            </Box>
          </Box>
          {/* profile mobile and desktop */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={(e) => setAnchorElUser(e.currentTarget)}
                sx={{ p: 0 }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                  sx={{
                    bgcolor: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "dark",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClose={() => setAnchorElUser(null)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              {/* <SelectTheme></SelectTheme> */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
