import { Routes, Route, Navigate } from "react-router-dom";
import * as Pages from "./pages";
import { SignUpFlowHandler } from "./utils/routesHelper"
import { GetTabSettings } from "./utils/tabsHandler";
import PrivateRoutes from "./utils/privateRoutes";
import { AppProvider } from "./context/AppContext";

export const App = ({ root }) => {
  GetTabSettings()

  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Pages.LandingPage />} />
        <Route path="/login" element={<Pages.LoginPage />} />
        <Route path="/forgot-password" element={<Pages.ForgetPassword />} />
        <Route path="/reset-password/:id" element={<Pages.ResetPassword />} />
        <Route path="/signUp" element={<SignUpFlowHandler /> } />
        <Route path="/logout" element={<Pages.LogoutPage />} />
        <Route path="/about-us" element={<Pages.AboutUsPage />} />
        <Route path="/pricing" element={<Pages.Pricing />} />
        <Route path="/help-center" element={<Pages.HelpCenter />} />
        <Route path="/help-center-article" element={<Pages.HelpCenterArticle />} />
        <Route path="/contact-us" element={<Pages.ContactUs />} />
        <Route path="/cancellation" element={<Pages.Cancellation />} />
        <Route path="/cancellation/cancellationContinue" element={<Pages.CancellationContinue />} />
        <Route path="/cancellation/cancellationSuccess" element={<Pages.CancellationSuccess />} />

        <Route exact path='/' element={<PrivateRoutes/>}>
          <Route path="/dashboard" element={<Pages.Dashboard />} />
          <Route path="/uploadFile" element={<Pages.UploadFile />} />
          <Route path="/newCampaign" element={<Pages.NewCampaign />} />
          <Route path="/campaign" element={<Pages.Campaign />} />
          <Route path="/campaignX" element={<Pages.CampaignX />} />
          <Route path="/myAccount" element={<Pages.MyAccount />} />
          <Route path="/feedback" element={<Pages.Feedback />} />
          <Route path="/feedbackSubmit" element={<Pages.FeedbackSubmit />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AppProvider>
  );
};
