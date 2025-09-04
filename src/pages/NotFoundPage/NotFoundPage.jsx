import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      textAlign="center"
      gap={2}
    >
      <Typography variant="h2" color="error">
        404
      </Typography>
      <Typography variant="h5">Page Not Found</Typography>
      <Typography variant="body1">
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button component={RouterLink} to="/" variant="contained" color="primary">
        Go back to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
