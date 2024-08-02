import { Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import TrackerPage from "./pages/HomePage/HomePage.jsx";
import SignInPage from "./pages/HomePage/HomePage.jsx";
import SignUpPage from "./pages/HomePage/HomePage.jsx";
import NotFoundPage from "./pages/HomePage/HomePage.jsx";

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<TrackerPage />} />
        <Route path="/" element={<SignInPage />} />
        <Route path="/" element={<SignUpPage />} />
        <Route path="/" element={<NotFoundPage />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
