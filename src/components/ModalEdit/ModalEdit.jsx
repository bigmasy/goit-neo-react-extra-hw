import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "react-modal";
import css from "./ModalEdit.module.css";

Modal.setAppElement("#root");

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

const ModalEdit = ({ isOpen, onClose, onConfirm, initialData }) => {
  const handleSubmit = (values) => {
    onConfirm(values);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Contact"
      style={{
        overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
        content: {
          maxWidth: "400px",
          margin: "auto",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
        },
      }}
    >
      <h2>Edit Contact</h2>
      <Formik
        initialValues={initialData}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.contactForm}>
          <label htmlFor="name" className={css.contactLabel}>
            Name
          </label>
          <Field
            id="name"
            type="text"
            name="name"
            className={css.contactInput}
          />
          <ErrorMessage name="name" component="span" className={css.error} />

          <label htmlFor="number" className={css.contactLabel}>
            Number
          </label>
          <Field
            id="number"
            type="text"
            name="number"
            className={css.contactInput}
            pattern="\+?\d*"
          />
          <ErrorMessage name="number" component="span" className={css.error} />

          <div className={css.buttons}>
            <button type="submit" className={css.contactButton}>
              Save changes
            </button>
            <button
              type="button"
              onClick={onClose}
              className={css.cancelButton}
            >
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default ModalEdit;
