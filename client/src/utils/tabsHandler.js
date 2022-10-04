import { useNavigationType, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const GetTabSettings = () => {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        if (action !== "POP") {
            window.scrollTo(0, 0);
        }
    }, [action]);

    useEffect(() => {
        let title = "";
        let metaDescription =
            "Enablemint is the no-code, lead automation platform powering Sales & Marketing teams";

        switch (pathname) {
            case "/":
                title = "Home - enablemint";
                break;
            case "/home":
                title = "Home - enablemint";
                break;
            case "/about-us":
                title = "AboutUs - enablemint";
                break;
            case "/pricing":
                title = "Pricing - enablemint";
                break;
            case "/login":
                title = "Log In - enablemint";
                break;
            case "/reset-password":
                title = "Password Reset - enablemint";
                break;
            case "/signup":
                title = "Sign Up - enablemint";
                break;
            case "/signUp":
                title = "Sign Up - enablemint";
                break;
            case "/help-center":
                title = "Help Center - enablemint";
                break;
            case "/logout":
                title = "You're logged out";
                break;
            case "/help-center-article":
                title = "Help Center - enablemint";
                break;
            case "/contact-us":
                title = "Contact Us - enablemint";
                break;
            case "/cancellation":
                title = "Cancellation - enablemint";
                break;
            case "/cancellation/cancellationContinue":
                title = "Cancellation - enablemint";
                break;
            case "/cancellation/cancellationSuccess":
                title = "Cancellation - enablemint";
                break;
            case "/dashboard":
                title = "Dashboard - enablemint";
                break;
            case "/dashboard":
                title = "Dashboard - enablemint";
                break;
            case "/uploadFile":
                title = "Upload File";
                break;
            case "/newCampaign":
                title = "Create new Campaign";
                break;
            case "/myAccount":
                title = "Account";
                break;
            case "/feedback":
                title = "Feedback";
                break;
            case "/feedbackSubmit":
                title = "Feedback Sumbitted";
                break;
            default:
                title = "enablemint";
        }

        if (title) {
            document.title = title;
        }

        if (metaDescription) {
            const metaDescriptionTag = document.querySelector(
                'head > meta[name="description"]'
            );
            if (metaDescriptionTag) {
                metaDescriptionTag.content = metaDescription;
            }
        }
    }, [pathname]);
}