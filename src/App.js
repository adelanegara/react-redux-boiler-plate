import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import EditCar from "./components/EditCar/loadable";
import LoginPage from "./components/LoginPage/loadable";
import Navbar from "./components/Navbar";
import OwnerLandingPage from "./components/OwnerLandingPage/loadable";
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
        <Route path="/owner" element={<OwnerLandingPage />} />
        <Route path="/home" element={<UserHomePage />} />
        <Route path="/edit/:id" element={<EditCar />} />
      </Routes>
    </Router>
  );
}

export default App;
