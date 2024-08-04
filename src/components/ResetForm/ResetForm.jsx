import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ResetForm.module.css";

const initialValue = {
  password: "",
  repeatPassword: "",
};
const validationSchemas = Yup.object({
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("Required"),
});

const ResetForm = () => {
  const handleSubmit = () => {
    // dispatch(resetPassword(values))
    //   .unwrap()
    //   .then(() => {
    //     toast.success("Successfully logged in");
    //   })
    //   .catch(() => {
    //     toast.error("Incorrect email or password");
    //   });
    // actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchemas}
        onSubmit={handleSubmit}
      >
        <Form className={css.ResetForm}>
          <label className={css.ResetFormLabel}>
            <span className={css.ResetFormName}>Enter new password</span>
            <Field
              className={css.ResetFormInput}
              type="passwprd"
              placeholder="Enter your password"
              name="email"
            />
          </label>
          <label>
            <span>Repeat your new password</span>
            <Field type="password" placeholder="Repeat your email" name="repeatPassword" />
          </label>
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </>
  );
};

export default ResetForm;
