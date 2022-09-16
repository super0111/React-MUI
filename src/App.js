import { Routes, Route, Navigate } from "react-router-dom";
import * as Pages from "./pages";
import { SignUpFlowHandler } from "./utils/routesHelper"
import { GetTabSettings } from "./utils/tabsHandler";

export const App = ({ root }) => {
  GetTabSettings()

  return (
    <Routes>
      <Route path="/" element={<Pages.LandingPage />} />
      <Route path="/about-us" element={<Pages.AboutUsPage />} />
      <Route path="/pricing" element={<Pages.Pricing />} />
      <Route path="/login" element={<Pages.LoginPage />} />
      <Route path="/reset-password" element={<Pages.ForgetPassword />} />
      <Route path="/signup" element={<SignUpFlowHandler /> } />
      <Route path="/help-center" element={<Pages.HelpCenter />} />

      <Route path="/contact-us" element={<Pages.ContactUs />} />

      <Route path="/dashboard" element={<Pages.Dashboard />} />
      <Route path="/uploadFile" element={<Pages.UploadFile />} />
      <Route path="/newCampaign" element={<Pages.NewCampaign />} />
      <Route path="/myAccount" element={<Pages.MyAccount />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
