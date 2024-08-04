import SignInForm from "../../components/SignInForm/SignInForm.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import AuthTitle from "../../components/AuthTitle/AuthTitle.jsx";
import css from "./SignInPage.module.css";

const SignInPage = () => {
  return (
    <div>
      <div className={css.SignInWrap}>
        <Logo />
        <AuthTitle>Sign In</AuthTitle>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
