import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import AuthTitle from "../../components/AuthTitle/AuthTitle.jsx";

const SignUpPage = () => {
  return (
    <div>
      <Logo />
      <AuthTitle>Sign Up</AuthTitle>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
