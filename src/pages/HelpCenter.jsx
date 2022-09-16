import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Navbar, Footer } from "../components";
import "../assets/styles/HelpCenter.css";

const HelpCenter = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {

    }

    return <>
        <Navbar currentPage="help-center" />
        <div className="hc_help-center-div">
            <img className="hc_ellipse-icon" alt="" src="assets/help_center/ellipse-37.svg" />
            <img className="hc_ellipse-icon1" alt="" src="assets/help_center/ellipse-38.svg" />
            <div className="hc_group-div">
                <div className="hc_group-div1">
                    <b className="hc_welcome-to-help-center">Welcome to Help Center</b>
                </div>
            </div>
            <div className="hc_group-div2">
                <div className="hc_rectangle-div" />
                <b className="hc_getting-started-b">Getting Started</b>
                <img className="hc_rocket-icon" alt="" src="assets/help_center/rocket@2x.png" />
                <div className="hc_lorem-ipsum-dolor-sit-amet-co">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
            <div className="hc_group-div3">
                <div className="hc_rectangle-div" />
                <b className="hc_getting-started-b">Getting Started</b>
                <img className="hc_rocket-icon" alt="" src="assets/help_center/rocket@2x.png" />
                <div className="hc_lorem-ipsum-dolor-sit-amet-co">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
            <form className="hc_group-form" id="contact-form" onSubmit={handleSubmit}>
                <div className="hc_frame-div">
                    <div className="hc_group-div4">
                        <div className="hc_group-div5">
                            <div className="hc_group-div6">
                                <div className="hc_message-div">Message</div>
                                <TextField
                                    className="hc_rectangle-textfield"
                                    sx={{ width: 440 }}
                                    color="success"
                                    variant="outlined"
                                    multiline
                                    rows={5}
                                    margin="none"
                                    required
                                />
                                <div className="hc_what-are-you-say">What are you say ?</div>
                            </div>
                        </div>
                        <Button
                            className="hc_group-button"
                            sx={{ width: 440 }}
                            variant="contained"
                            color="success"
                        >
                            Contact Us
                        </Button>
                        <div className="hc_group-div7">
                            <div className="hc_email-div">Email</div>
                            <div className="hc_rectangle-div2" />
                            <div className="hc_enter-your-email">Enter your email</div>
                        </div>
                        <div className="hc_group-div7">
                            <div className="hc_email-div">Email</div>
                            <TextField
                                className="hc_rectangle-textfield1"
                                sx={{ width: 440 }}
                                color="success"
                                variant="outlined"
                                type="email"
                                placeholder="Enter your email"
                                size="medium"
                                margin="none"
                                required
                            />
                            <div className="hc_enter-your-email">Enter your email</div>
                        </div>
                        <div className="hc_group-div9">
                            <div className="hc_email-div">Name</div>
                            <TextField
                                className="hc_rectangle-textfield1"
                                sx={{ width: 440 }}
                                color="success"
                                variant="outlined"
                                type="text"
                                placeholder="Enter your name"
                                size="medium"
                                margin="none"
                                required
                            />
                            <div className="hc_enter-your-email">Enter your email</div>
                        </div>
                    </div>
                    <div className="hc_group-div10">
                        <div className="hc_get-in-touch-with-us">Get in touch with us</div>
                    </div>
                </div>
            </form>
            <img className="hc_ellipse-icon2" alt="" src="assets/help_center/ellipse-36.svg" />
            <img className="hc_ellipse-icon3" alt="" src="assets/help_center/ellipse-39.svg" />
            <img className="hc_ellipse-icon3" alt="" src="assets/help_center/ellipse-42.svg" />

            <div className="hc_group-div18">
                <div className="hc_group-div19">
                    <b className="hc_welcome-to-help-center1">Welcome to Help Center</b>
                </div>
            </div>
            <a href="/" className="hc_group-a">
                <div className="hc_rectangle-div" />
                <b className="hc_getting-started-b">Getting Started</b>
                <img className="hc_rocket-icon" alt="" src="assets/help_center/rocket@2x.png" />
                <div className="hc_lorem-ipsum-dolor-sit-amet-co">
                    Learn more about how to get started with enablemint with our quick
                    tips and guides to all that you can do on our platform.
                </div>
            </a>
            <a href="/" className="hc_group-a1">
                <div className="hc_rectangle-div" />
                <b className="hc_account-settings-b">Account Settings</b>
                <img className="hc_rocket-icon" alt="" src="assets/help_center/settings.svg" />
                <div className="hc_learn-more-about-your-account">
                    Learn more about your account and how to navigate, change or update
                    your account settings to your prefernces.
                </div>
            </a>
            <a href="/" className="hc_group-a2">
                <div className="hc_rectangle-div" />
                <b className="hc_getting-started-b">Billing</b>
                <img className="hc_rocket-icon" alt="" src="assets/help_center/billing.svg" />
                <div className="hc_learn-more-about-your-account">
                    Questions about Billing or your Subscription? We got you covered.
                    Learn more about our policies and plans.
                </div>
            </a>
            <a href="/" className="hc_group-a3">
                <div className="hc_rectangle-div" />
                <b className="hc_getting-started-b">Tutorials</b>
                <div className="hc_learn-more-about-your-account">
                    Check out video tutorials with step-by-step instructions for setting
                    up and using various tools that enablemint offers.
                </div>
            </a>
            <img className="hc_ondemand-video-icon" alt="" src="assets/help_center/ondemand-video.svg" />
            <TextField
                className="hc_group-textfield"
                color="success"
                variant="outlined"
                type="text"
                placeholder="What can we help you with today?"
                size="medium"
                margin="none"
            />
            <Button
                className="hc_group-button1"
                variant="contained"
                color="success"
            >
                Search
            </Button>
            <Footer />
        </div>
    </>;
};

export default HelpCenter;
