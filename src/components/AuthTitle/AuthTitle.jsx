import css from "./AuthTitle.module.css";

const AuthTitle = ({ children }) => {
  return <h1 className={css.AuthTitle}>{children}</h1>;
};

export default AuthTitle;
