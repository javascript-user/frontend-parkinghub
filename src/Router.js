import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RentOut from "./components/Tabs/RentOut";
import FindOut from "./components/Tabs/FindOut";
import RegistrationForm from "./components/Forms/RegistrationForm";
import ResetPasswordForm from "./components/Forms/ResetPasswordForm";
import LoginForm from "./components/Forms/LoginForm";

function Router() {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<RegistrationForm />} />
      <Route path="/rentout" element={<RentOut />} />
      <Route path="/findout" element={<FindOut />} />
      <Route path="/reset" element={<ResetPasswordForm />} />
    </Routes>
  );
}

export default Router;
