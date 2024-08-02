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

const SignInForm = () => {
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
            <Field type="password" placeholder="Enter your password" name="password" />
          </label>
          <button type="submit">Sign In</button>
          <div>
            <p>Don’t have an account?</p>
            <NavLink to="/signup">Sign Up</NavLink>
            <p>Forgot your password?</p>
            <NavLink to="/reset">Reset password</NavLink>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default SignInForm;
