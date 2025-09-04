import { useDispatch, useSelector } from "react-redux";
import { Button, Stack, Typography } from "@mui/material";
import { logout } from "../../redux/auth/operations";
import { selectName } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectName);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="body1">Welcome, {username || "User"}</Typography>
      <Button
        variant="contained"
        color="error"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </Stack>
  );
};

export default UserMenu;
