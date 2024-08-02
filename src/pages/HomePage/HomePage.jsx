import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo.jsx";

const HomePage = () => {
  return (
    <div>
      <Logo />
      <p>Record daily water intake and track</p>
      <h1> Water consumption tracker</h1>
      <NavLink to="/signup">Try tracker</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
    </div>
  );
};

export default HomePage;
