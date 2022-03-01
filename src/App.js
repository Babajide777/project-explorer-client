import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route
          path="/forgotpassword"
          element={<ForgotPassword></ForgotPassword>}
        />
        <Route
          path="/resetpassword/:id"
          element={<ResetPassword></ResetPassword>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
