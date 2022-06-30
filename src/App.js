import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoutes from "./PrivateRoutes";
import "./App.css";
import BookingCar from "./components/BookingCar";
import EditCar from "./components/EditCar/loadable";
import LoginPage from "./components/LoginPage/loadable";
import Navbar from "./components/Navbar";
import OwnerLandingPage from "./components/OwnerLandingPage/loadable";
import Registration from "./components/Registration/loadable";
import RequestBooking from "./components/RequestBooking/loadable";
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
        <Route
          path="/owner"
          element={<PrivateRoutes component={OwnerLandingPage} />}
        />
        <Route
          path="/home"
          element={<PrivateRoutes component={UserHomePage} />}
        />
        <Route path="/edit/:id" element={<EditCar />} />
        <Route path="/booking/:id" element={<BookingCar />} />
        <Route path="/request" element={<RequestBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
