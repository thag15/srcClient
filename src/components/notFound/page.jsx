import { Box, Avatar } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "white",
      }}
    >
      <Avatar
        variant="square"
        sx={{ width: { md: "200px" }, height: { md: "200px" } }}
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"
        alt="404"
      />
    </Box>
  );
};

export default NotFound;
