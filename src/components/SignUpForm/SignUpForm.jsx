import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoading } from "../../redux/auth/selectors.js";
import { signUp } from "../../redux/auth/operations.js";
import Loader from "../Loader/Loader.jsx";
import * as Yup from "yup";
// import { useState } from "react";

const initialValue = {
  email: "",
  password: "",
  repeatPassword: "",
};

const validationSchemas = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("Required"),
});

const SignUpForm = () => {
  // const [showPassword, setShowPassword] = useState(false);
  // const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, actions) => {
    delete values.repeatPassword;

    try {
      dispatch(signUp(values));
    } catch (error) {
      console.log(error.message);
    }
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchemas}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <span>Email</span>
            <Field type="email" placeholder="Enter your email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            <span>Password</span>
            <Field type="password" placeholder="Enter your password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>
          <label>
            <span>Repeat password</span>
            <Field type="password" placeholder="Repeat password" name="repeatPassword" />
            <ErrorMessage name="repeatPassword" component="div" />
          </label>
          <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
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
