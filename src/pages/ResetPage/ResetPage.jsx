import AuthTitle from "../../components/AuthTitle/AuthTitle.jsx";
import ResetForm from "../../components/ResetForm/ResetForm.jsx";
import Logo from "../../components/Logo/Logo.jsx";

const ResetPage = () => {
  return (
    <div>
      <Logo />
      <AuthTitle>Reset your password</AuthTitle>
      <ResetForm />
    </div>
  );
};

export default ResetPage;
