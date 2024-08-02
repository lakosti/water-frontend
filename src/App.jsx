import { Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import SignInPage from "./pages/SignInPage/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx";
import ResetPage from "./pages/ResetPage/ResetPage.jsx";

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/reset" element={<ResetPage />} />
        {/* <Route path="/" element={<NotFoundPage />} /> */}
      </Routes>
    </SharedLayout>
  );
}

export default App;
