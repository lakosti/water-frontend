import { Field, Form, Formik } from "formik";

const initialValue = {
  email: "",
};
const handleSubmit = () => {
  // dispatch(logIn(values))
  //   .unwrap()
  //   .then(() => {
  //     toast.success("Successfully logged in");
  //   })
  //   .catch(() => {
  //     toast.error("Incorrect email or password");
  //   });
  // actions.resetForm();
};
const ResetForm = () => {
  return (
    <>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Enter your email</span>
            <Field type="email" placeholder="Enter your email" name="email" />
          </label>
          <button type="submit"> Send</button>
        </Form>
      </Formik>
    </>
  );
};

export default ResetForm;
