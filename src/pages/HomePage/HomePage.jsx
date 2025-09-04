import { Box, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      textAlign="center"
      bgcolor="#f5f5f5"
    >
      <Typography variant="h3" component="h1">
        Welcome to your contacts
      </Typography>
    </Box>
  );
};

export default HomePage;
