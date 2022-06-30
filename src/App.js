import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import LoginPage from "./components/LoginPage/loadable";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration/loadable";
import UserHomePage from "./components/UserHomePage/loadable";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ToastContainer />
      </div>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<UserHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
