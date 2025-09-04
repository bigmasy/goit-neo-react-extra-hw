import { useId } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { addContact } from "../../redux/contacts/operations";
import { TextField, Button, Box, Typography } from "@mui/material";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\+?\d*$/, "Only digits allowed")
    .min(3, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const initialValues = { name: "", number: "" };

  const handleSubmit = (values, actions) => {
    toast.promise(dispatch(addContact(values)).unwrap(), {
      loading: "Saving...",
      success: <b>Contact saved!</b>,
      error: <b>Could not save contact.</b>,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, errors, touched }) => (
        <Form>
          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            maxWidth={400}
            margin="auto"
          >
            <Typography variant="h6" textAlign="center">
              Add Contact
            </Typography>

            <TextField
              id={nameFieldId}
              name="name"
              label="Name"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              fullWidth
            />

            <TextField
              id={phoneFieldId}
              name="number"
              label="Number"
              value={values.number}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/[^\d+]/g, "");
                handleChange(e);
              }}
              error={touched.number && Boolean(errors.number)}
              helperText={touched.number && errors.number}
              fullWidth
            />

            <Button type="submit" variant="contained" color="primary">
              Add Contact
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
