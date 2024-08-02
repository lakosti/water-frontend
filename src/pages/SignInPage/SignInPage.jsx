import SignInForm from "../../components/SignInForm/SignInForm.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import AuthTitle from "../../components/AuthTitle/AuthTitle.jsx";

const SignInPage = () => {
  return (
    <div>
      <Logo />
      <AuthTitle>Sign In</AuthTitle>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
