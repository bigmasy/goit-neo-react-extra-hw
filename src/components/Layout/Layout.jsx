import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { Container, Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <AppBar />

      <Box component="main" sx={{ width: "100%", p: 2 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
