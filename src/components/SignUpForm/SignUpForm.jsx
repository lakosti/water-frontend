import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoading } from "../../redux/auth/selectors.js";
import { signUp } from "../../redux/auth/operations.js";
import { useState } from "react";
// import Loader from "../Loader/Loader.jsx";
import * as Yup from "yup";
import css from "./SignUpForm.module.css";

const initialValue = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const validationSchemas = Yup.object({
  name: Yup.string().min(2, "Name must be at least 6 characters").required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("Required"),
});

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handelClickPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handelClickRepeatPassword = () => {
    setShowRepeatPassword((prevState) => !prevState);
  };

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
        {({ isValid, dirty, errors, touched }) => (
          <Form className={css.SignUpForm}>
            <label className={css.SignUpLabel}>
              <span className={css.SignUpName}>Name</span>
              <Field
                className={`${css.SignUpInput} ${errors.name && touched.name ? css.error : ""}`}
                type="text"
                placeholder="Enter your name"
                name="name"
              />
              <ErrorMessage className={css.SignUpError} name="name" component="div" />
            </label>
            <label className={css.SignUpLabel}>
              <span className={css.SignUpName}>Email</span>
              <Field
                className={`${css.SignUpInput} ${errors.email && touched.email ? css.error : ""}`}
                type="email"
                placeholder="Enter your email"
                name="email"
              />
              <ErrorMessage className={css.SignUpError} name="email" component="div" />
            </label>
            <label className={css.SignUpLabel}>
              <span className={css.SignUpName}>Password</span>
              <div className={css.inputWrap}>
                <Field
                  className={`${css.SignUpInput} ${
                    errors.password && touched.password ? css.error : ""
                  }`}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                />
                <button className={css.SignUpCheckbox} type="button" onClick={handelClickPassword}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <ErrorMessage className={css.SignUpError} name="password" component="div" />
              {/* {showPassword ? (
              <button type="button" onClick={handelClickPassword}>
                Hide
              </button>
            ) : (
              <button type="button" onClick={handelClickPassword}>
                Show
              </button>
            )} */}
            </label>
            <label className={css.SignUpLabel}>
              <span className={css.SignUpName}>Repeat password</span>
              <div className={css.inputWrap}>
                <Field
                  className={`${css.SignUpInput} ${
                    errors.repeatPassword && touched.repeatPassword ? css.error : ""
                  }`}
                  type={showRepeatPassword ? "text" : "password"}
                  placeholder="Repeat password"
                  name="repeatPassword"
                />
                <button
                  className={css.SignUpCheckbox}
                  type="button"
                  onClick={handelClickRepeatPassword}
                >
                  {showRepeatPassword ? "Hide" : "Show"}
                </button>
              </div>
              <ErrorMessage className={css.SignUpError} name="repeatPassword" component="div" />
            </label>
            <button className={css.SignUpBtn} disabled={!(isValid && dirty)} type="submit">
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
            <div className={css.SignUpText}>
              <p>Already have account?</p>
              <NavLink className={css.SignUpLink} to="/signin">
                Sign In
              </NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
