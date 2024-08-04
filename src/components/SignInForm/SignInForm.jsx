import { Field, Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoading } from "../../redux/auth/selectors.js";
import { useState } from "react";
import { logIn } from "../../redux/auth/operations.js";
import * as Yup from "yup";
import toast from "react-hot-toast";
import css from "./SignInForm.module.css";

const initialValue = {
  email: "",
  password: "",
};

const validationSchemas = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [showPassword, setShowPassword] = useState(false);

  const handelClickPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("Successfully logged in");
      })
      .catch(() => {
        toast.error("Incorrect email or password");
      });
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchemas}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className={css.SignInForm}>
            <label className={css.SignInLabel}>
              <span className={css.SignInName}>Email</span>
              <Field
                className={css.SignInInput}
                type="email"
                placeholder="Enter your email"
                name="email"
              />
            </label>
            <label className={css.SignInLabel}>
              <span className={css.SignInName}>Password</span>
              <div className={css.inputWrap}>
                <Field
                  className={css.SignInInput}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                />
                <button className={css.SignInCheckbox} type="button" onClick={handelClickPassword}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>
            <button className={css.SignInBtn} disabled={!(isValid && dirty)} type="submit">
              {isLoading ? "Loading" : <span className={css.SignInBtnText}>Sign In</span>}
            </button>
            <div className={css.SignInText}>
              <p>Don’t have an account?</p>
              <NavLink className={css.SignInLink} to="/signup">
                Sign Up
              </NavLink>
            </div>
            <div className={css.SignInText}>
              <p>Forget your password?</p>
              <NavLink className={css.SignInLink} to="/forget">
                Reset password
              </NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignInForm;
