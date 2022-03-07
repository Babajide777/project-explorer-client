import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";
import CreateProject from "./pages/CreateProject";
import EditProfile from "./pages/EditProfile";

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
        <Route
          path="/projects/submit"
          element={<CreateProject></CreateProject>}
        />
        <Route path="/editprofile/:id" element={<EditProfile></EditProfile>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
