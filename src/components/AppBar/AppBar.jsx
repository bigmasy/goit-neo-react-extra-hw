import { AppBar as MuiAppBar, Toolbar, Box, Typography } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MuiAppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" sx={{ mr: 3 }}>
            Phonebook
          </Typography>
          <Navigation />
        </Box>

        <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
