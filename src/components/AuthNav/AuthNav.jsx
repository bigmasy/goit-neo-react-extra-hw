import { NavLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";

const AuthNav = () => {
  const getButtonStyle = ({ isActive }) => ({
    textTransform: "none",
    color: "white",
    fontWeight: isActive ? "bold" : "normal",
    backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
    borderRadius: 4,
  });

  return (
    <Stack direction="row" spacing={2}>
      <Button component={NavLink} to="/login" style={getButtonStyle}>
        Log in
      </Button>

      <Button component={NavLink} to="/register" style={getButtonStyle}>
        Register
      </Button>
    </Stack>
  );
};

export default AuthNav;
