import { useNavigate, createSearchParams } from "react-router-dom";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import logo from "../assets/images/logo.png";
import "../assets/styles/LandingPage.css";

export const Footer = () => {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.isSubmitting = true;
      setTimeout(() => {
        navigate(`/signup?${createSearchParams({ email: values.email })}`);
      }, 700);
    },
  });

  return (
    <>
      <div className="footer">
        <div className="group-div16">
          <img className="logo-1-icon1" alt="enablemint logo" src={logo} />
          <div className="enablemint-div1">enablemint</div>
        </div>
        <div className="group-div8">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="vector-icon2" alt="" src="assets/vector2.svg" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="twitter-icon" alt="" src="assets/twitter@2x.png" />
          </a>
          <a
            href="https://www.linkedin.com/company/enablemint-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="linkedin-icon"
              alt=""
              src="assets/linkedin@2x.png"
            />
          </a>
        </div>
        <div className="group-div9">
          <div className="get-started-now-claim-your-fr">
            Get started now, claim your free trial
          </div>y666
          <div className="group-div10">
            <form onSubmit={formik.handleSubmit}>
              <TextField
                className="enter-your-email-here"
                color="success"
                variant="outlined"
                id="__footer_email_input"
                name="email"
                type="email"
                autoComplete="off"
                placeholder="Enter your email here"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                label={formik.touched.email && formik.errors.email}
                margin="none"
                InputLabelProps={{ shrink: true }}
                required
              />
              {/* <input className="enter-your-email-here" type="email" placeholder="Enter your email here" name="email" id="__footer_email_input" /> */}
              <button type="submit" className="form-btn" disabled={formik.isSubmitting}>
                <img className="arrow-right1-1-icon" alt="" src="assets/arrowright1-1.svg" />
              </button>
            </form>
          </div>
        </div>
        <div className="group-div11">
          <div className="copyright-and-rights-reserved">
            © 2020 Copyright and rights reserved
          </div>
        </div>
        <div className="group-div12">
          <div className="group-div13">
            <div className="group-div13">
              <div className="group-div15">
                <div className="account-div">Account</div>
                <div
                  className="home-div1 footer-nav-link"
                >
                  <a href="/">Home</a>
                </div>
                <div
                  className="about-us-div1 footer-nav-link"
                >
                  <a href="/about-us">About us</a>
                </div>
                <div
                  className="pricing-div1 footer-nav-link"
                >
                  <a href="/pricing">Pricing</a>
                </div>
                <div
                  className="sign-in-div footer-nav-link"
                >
                  <a href="/login">Sign in</a>
                </div>
                <div
                  className="sign-up-div footer-nav-link"
                >
                  <a href="/signup">Sign up</a>
                </div>
              </div>
              <div
                className="help-center-div footer-nav-link"
              // onClick={onHelpCenterTextClick}
              >
                <a href="/help-center">Help Center</a>
              </div>
              <div
                className="contact-us-div footer-nav-link"
              // onClick={onContactUsTextClick}
              >
                <a href="/contact">Contact us</a>
              </div>
              <div
                className="cancellation-policy-div footer-nav-link"
              // onClick={onCancellationPolicyTextClick}
              >
                <a href="/cancellation-policy">Cancellation Policy</a>
              </div>
              <div className="support-div">
                Support
              </div>
              <div
                className="terms-of-use footer-nav-link"
              // onClick={onTermsOfUseClick}
              >
                <a href="/terms-of-use">Terms of Use</a>
              </div>
              <div
                className="privacy-policy-div footer-nav-link"
              // onClick={onPrivacyPolicyTextClick}
              >
                <a href="/privacy-policy">Privacy Policy</a>
              </div>
              <div className="legal-div">
                Legal
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
