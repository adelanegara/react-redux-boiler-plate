import { Login } from "@mui/icons-material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
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
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<UserHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
