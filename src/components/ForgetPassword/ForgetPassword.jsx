import { Field, Form, Formik } from "formik";

const initialValue = {
  email: "",
};

const ForgetPassword = () => {
  const handleSubmit = (values, actions) => {
    //
  };
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

export default ForgetPassword;
