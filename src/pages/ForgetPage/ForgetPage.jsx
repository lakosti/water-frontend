import ForgetPassword from "../../components/ForgetPassword/ForgetPassword.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import AuthTitle from "../../components/AuthTitle/AuthTitle.jsx";

const ForgetPage = () => {
  return (
    <div>
      <Logo />
      <AuthTitle>Reset password</AuthTitle>
      <ForgetPassword />
    </div>
  );
};

export default ForgetPage;
