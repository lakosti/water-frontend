import Logo from "../../components/Logo/Logo.jsx";
import css from "./SignInPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";

const SignInPage = () => {
  return (
    <div>
      <div className={css.SignInWrap}>
        <div className={css.LogoPosition}>
          <Logo />
        </div>
        {/* <SignInForm /> */}
        <LoginForm />
      </div>
    </div>
  );
};

export default SignInPage;
