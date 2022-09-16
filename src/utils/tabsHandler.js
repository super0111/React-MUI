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
            case "/help-center":
                title = "Help Center - enablemint";
                break;
            default:
                title = "302 - Redirecting...";
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