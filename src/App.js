import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";
import CreateProject from "./pages/CreateProject";
import EditProfile from "./pages/EditProfile";
import Project from "./pages/Project";
import Logout from "./pages/Logout";
import ContinueSignUp from "./pages/ContinueSignUp";
import { createContext } from "react";
import { useAuthentication } from "./useAuthentication";

export const AuthContext = createContext();

function App() {
  return (
    <AuthContext.Provider value={useAuthentication()}>
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
        <Route path="/project/:id" element={<Project></Project>} />
        <Route path="/logout" element={<Logout></Logout>} />
        <Route
          path="/continuesignup/:id"
          element={<ContinueSignUp></ContinueSignUp>}
        />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
