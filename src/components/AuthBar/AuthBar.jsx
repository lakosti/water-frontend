import { NavLink } from "react-router-dom";

const AuthBar = () => {
  return (
    <div>
      <NavLink to="/signup">Try tracker</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
    </div>
  );
};

export default AuthBar;
