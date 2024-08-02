import AuthBar from "../../components/AuthBar/AuthBar.jsx";
import Logo from "../../components/Logo/Logo.jsx";

const HomePage = () => {
  return (
    <div>
      <Logo />
      <p>Record daily water intake and track</p>
      <h1> Water consumption tracker</h1>
      <AuthBar />
    </div>
  );
};

export default HomePage;
