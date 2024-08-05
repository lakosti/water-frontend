// import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import AuthTitle from "../../components/AuthTitle/AuthTitle.jsx";
import css from "./SignUpPage.module.css";

const SignUpPage = () => {
  return (
    <div>
      <div className={css.SignUpWrap}>
        <div className={css.LogoPosition}>
          <Logo />
        </div>
        <AuthTitle>Sign Up</AuthTitle>
        {/* <SignUpForm /> */}
      </div>
    </div>
  );
};

export default SignUpPage;
