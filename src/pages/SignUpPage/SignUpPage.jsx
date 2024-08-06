// import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import css from "./SignUpPage.module.css";
import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx";

const SignUpPage = () => {
  return (
    <div>
      <div className={css.SignUpWrap}>
        <div className={css.LogoPosition}>
          <Logo />
        </div>
        {/* <SignUpForm /> */}
        <RegisterForm />
      </div>
    </div>
  );
};

export default SignUpPage;
