import SignInForm from "../../components/SignInForm/SignInForm.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import AuthTitle from "../../components/AuthTitle/AuthTitle.jsx";
import css from "./SignInPage.module.css";

const SignInPage = () => {
  return (
    <div>
      <Logo />
      <div className={css.SignInWrap}>
        <div className={css.SignInCenter}>
          <AuthTitle>Sign In</AuthTitle>
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
