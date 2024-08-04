import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <NavLink className={css.AuthLogo} to="/">
        AquaTrack
      </NavLink>
    </>
  );
};

export default Logo;
