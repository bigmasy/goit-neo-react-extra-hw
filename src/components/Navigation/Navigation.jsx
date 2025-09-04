import { NavLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const getButtonStyle = ({ isActive }) => ({
    textTransform: "none",
    color: "white",
    fontWeight: isActive ? "bold" : "normal",
    backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
    borderRadius: 4,
  });

  return (
    <Stack direction="row" spacing={2}>
      <Button component={NavLink} to="/" style={getButtonStyle}>
        Home
      </Button>

      {isLoggedIn && (
        <Button component={NavLink} to="/contacts" style={getButtonStyle}>
          Contacts
        </Button>
      )}
    </Stack>
  );
};

export default Navigation;
