import { Field, Formik, Form } from "formik";
import { NavLink } from "react-router-dom";

const initialValue = {
  email: "",
  password: "",
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

const SignUpForm = () => {
  return (
    <>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Email</span>
            <Field type="email" placeholder="Enter your email" name="email" />
          </label>
          <label>
            <span>Password</span>
            <Field type="email" placeholder="Enter your password" name="email" />
          </label>
          <label>
            <span>Repeat password</span>
            <Field type="email" placeholder="Repeat password" name="email" />
          </label>
          <button type="submit">Sign Up</button>
          <div>
            <p>Already have account?</p>
            <NavLink to="/signin">Sign In</NavLink>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default SignUpForm;
