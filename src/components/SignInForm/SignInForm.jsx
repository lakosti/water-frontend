import { Field, Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { selectIsLoading } from "../../redux/auth/selectors.js";
import { useState } from "react";
import toast from "react-hot-toast";
import { logIn } from "../../redux/auth/operations.js";

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
          <Form>
            <label>
              <span>Email</span>
              <Field type="email" placeholder="Enter your email" name="email" />
            </label>
            <label>
              <span>Password</span>
              <Field
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
              />
              <button type="button" onClick={handelClickPassword}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </label>
            <button disabled={!(isValid && dirty)} type="submit">
              {isLoading ? "Loading" : "Sign In"}
            </button>
            <div>
              <p>Don’t have an account?</p>
              <NavLink to="/signup">Sign Up</NavLink>
              <p>Forgot your password?</p>
              <NavLink to="/reset">Reset password</NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignInForm;
