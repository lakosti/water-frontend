import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      Home Page
      <NavLink to="/signin">Sign In</NavLink>
    </div>
  );
};

export default HomePage;
