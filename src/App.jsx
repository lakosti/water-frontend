import { Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import SignInPage from "./pages/SignInPage/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx";

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<TrackerPage />} /> */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route path="/" element={<NotFoundPage />} /> */}
      </Routes>
    </SharedLayout>
  );
}

export default App;
