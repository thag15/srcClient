import "./App.css";
import NavBar from "./components/navBar/page";
import { useRoutes, Outlet } from "react-router-dom";
// import SignIn from "./pages/Auth/Sign-in/Page";
import { Container, Box } from "@mui/material";
// import Customer from "~/pages/Customer/Page";
import { Footer } from "./components/footer/page";
import NotFound from "./components/notFound/page";
function App() {
  const Layout = () => {
    return (
      <>
        <NavBar />
        <Box
          sx={{
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#8395a7" : "#c8d6e5",
          }}
        >
          <Container>
            <Box
              sx={{
                minHeight: "77vh",
              }}
            >
              <Outlet />
            </Box>
          </Container>
          <Box>
            <Footer />
          </Box>
        </Box>
      </>
    );
  };
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        // { path: "/", element: <Customer /> },
        // { path: "/home", element: <Customer /> },
      ],
    },
    // { path: "/sign-in", element: <SignIn /> },
    // { path: "/sign-up", element: <h1>sign-up</h1> },
    { path: "/*", element: <NotFound /> },
  ]);
}

export default App;
