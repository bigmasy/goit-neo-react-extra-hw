import { Formik, Form } from "formik";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();

  const initialValues = { email: "", password: "" };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Box
      maxWidth={400}
      margin="auto"
      mt={5}
      padding={3}
      borderRadius={2}
      boxShadow={3}
    >
      <Typography variant="h5" textAlign="center" mb={3}>
        Login
      </Typography>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleChange, values }) => (
          <Form>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginPage;
