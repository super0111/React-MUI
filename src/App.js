import { Routes, Route, Navigate } from "react-router-dom";
import * as Pages from "./pages";
import { SignUpFlowHandler } from "./utils/routesHelper"
import { GetTabSettings } from "./utils/tabsHandler";

export const App = ({ root }) => {
  GetTabSettings()

  return (
    <Routes>
      <Route path="/" element={<Pages.LandingPage />} />
      <Route path="/login" element={<Pages.LoginPage />} />
      <Route path="/reset-password" element={<Pages.ForgetPassword />} />
      <Route path="/signup" element={<SignUpFlowHandler /> } />
      <Route path="/logout" element={<Pages.LogoutPage />} />
      <Route path="/about-us" element={<Pages.AboutUsPage />} />
      <Route path="/pricing" element={<Pages.Pricing />} />
      <Route path="/help-center" element={<Pages.HelpCenter />} />
      <Route path="/help-center-article" element={<Pages.HelpCenterArticle />} >
        <Route path="queen" element={<Pages.HelpCenterArticleBody />} />
      </Route>
      <Route path="/contact-us" element={<Pages.ContactUs />} />
      <Route path="/cancellation" element={<Pages.Cancellation />} />
      <Route path="/cancellation/cancellationContinue" element={<Pages.CancellationContinue />} />
      <Route path="/cancellation/cancellationSuccess" element={<Pages.CancellationSuccess />} />

      <Route path="/dashboard" element={<Pages.Dashboard />} />
      <Route path="/uploadFile" element={<Pages.UploadFile />} />
      <Route path="/newCampaign" element={<Pages.NewCampaign />} />
      <Route path="/campaignA" element={<Pages.CampaignA />} />
      <Route path="/campaignB" element={<Pages.CampaignB />} />
      <Route path="/campaignX" element={<Pages.CampaignX />} />
      <Route path="/myAccount" element={<Pages.MyAccount />} />
      <Route path="/feedback" element={<Pages.Feedback />} />
      <Route path="/feedbackSubmit" element={<Pages.FeedbackSubmit />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
