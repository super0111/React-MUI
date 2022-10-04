import { useState } from "react";
import { TextField, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { Navbar, Footer } from "../components";
import "../assets/styles/AboutUs.css";


export const AboutUsPage = () => {
    const currentReviews = [
        {
            img: 'assets/ellipse-58@2x.png',
            name: 'Reeves Roger',
            desc: 'Before enablemint, we used to spend hours month over month manually searching and qualifying B2B leads. enablemint has become our #1 go to tool for lead generation on LinkedIn.',
            ratings: {
                img: 'assets/group-152.svg',
                num: '4.9'
            }
        },
        {
            img: 'assets/ellipse-58@2x.png',
            name: 'Jones Mark',
            desc: 'enablemint is super easy to use and no coding experience is needed at all! Our marketing team loves using enablemint. Now that we’ve implemented it - we can’t go a day without it!',
            ratings: {
                img: 'assets/group-152.svg',
                num: '4.9'
            }
        }
    ]

    const nextReviews = [
        {
            img: 'assets/ellipse-58@2x.png',
            name: 'John Wick',
            desc: 'Before enablemint, we used to spend hours month over month manually searching and qualifying B2B leads. enablemint has become our #1 go to tool for lead generation on LinkedIn.',
            ratings: {
                img: 'assets/group-152.svg',
                num: '4.9'
            }
        },
        {
            img: 'assets/ellipse-58@2x.png',
            name: 'Tony Stark',
            desc: 'enablemint is super easy to use and no coding experience is needed at all! Our marketing team loves using enablemint. Now that we’ve implemented it - we can’t go a day without it!',
            ratings: {
                img: 'assets/group-152.svg',
                num: '4.9'
            }
        }
    ]

    const [reviews, setReviews] = useState(currentReviews)


    return <>
        <div className="about-us-div2">
            <Navbar currentPage="about-us" />
            <img className="ellipse-icon8" alt="" src="assets/ellipse-371.svg" />
            <img className="ellipse-icon9" alt="" src="assets/ellipse-40.svg" />
            <img className="ellipse-icon10" alt="" src="assets/ellipse-381.svg" />
            <b className="we-love-your-feedback">We love your feedback!</b>
            <div className="rectangle-div12">
                <div className="group-div50">
                    <div className="group-div51">
                        <div className="how-we-help-our-users-automate">
                            How we help our users automate lead generation
                        </div>
                    </div>
                    <div className="reviews">
                        <button className="left-arrow" onClick={(event) => { setReviews(currentReviews) }} />
                        {reviews.map((rev) => {
                            return (
                                <div key={rev.name} className="review">
                                    <div className="review-info">
                                        <img className="review-img" alt="" src={rev.img} />
                                        <div className="review-info-2">
                                            <b className="full-name-b">{rev.name}</b>
                                            <img className="group-icon9" alt="" src={rev.ratings.img} />
                                            <div className="group-div55">
                                                <div className="rating-div2">
                                                    <b>{rev.ratings.num}</b>
                                                    <span>{` / `}</span>
                                                    <span className="rating-span2">5 rating</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-desc">{rev.desc}</div>
                                </div>
                            )
                        })}
                        <button className="right-arrow" onClick={(event) => { setReviews(nextReviews) }} />
                    </div>
                </div>
            </div>
            <div className="group-div60">
                <div className="frame-div3">
                    <div className="group-div61">
                        {/* <FeedbackForm /> */}
                        <div className="group-div62">
                            <div className="group-div63">
                                <div className="message-div">Message</div>
                                <TextField
                                    className="rectangle-textfield"
                                    sx={{ width: 440 }}
                                    color="primary"
                                    variant="outlined"
                                    type="text"
                                    placeholder="What would you like to say?"
                                    size="medium"
                                    margin="none"
                                    required
                                />
                                {/* <div className="what-would-you-like-to-say">
                                    What would you like to say ?
                                </div> */}
                            </div>
                        </div>
                        <div className="group-div64">
                            <Button
                                className="group-button3"
                                sx={{ width: 440, borderRadius: "10px", backgroundColor: "#388E3C" }}
                                variant="contained"
                                href="/submit-feedback"
                            >
                                Contact Us
                            </Button>
                        </div>
                        <div className="group-div65">
                            <div className="email-div">Email</div>
                            <TextField
                                className="rectangle-textfield"
                                sx={{ width: 440 }}
                                color="primary"
                                variant="outlined"
                                type="email"
                                placeholder="Enter your email"
                                size="medium"
                                margin="none"
                                required
                            />
                            {/* <div className="enter-your-email">Enter your email</div> */}
                        </div>
                        <div className="group-div67">
                            <div className="email-div">Name</div>
                            <TextField
                                className="rectangle-textfield"
                                sx={{ width: 440 }}
                                color="primary"
                                variant="outlined"
                                type="text"
                                placeholder="Enter your name"
                                size="medium"
                                margin="none"
                                required
                            />
                            {/* <div className="enter-your-email">Enter your name</div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="client-stories-product-improv">
                Client stories, product improvements, new features, we aim to make
                enablemint better everyday. Get in touch with us today!
            </div>
            <img className="ellipse-icon13" alt="" src="assets/ellipse-361.svg" />
            <img className="ellipse-icon14" alt="" src="assets/ellipse-391.svg" />
            <img className="ellipse-icon14" alt="" src="assets/ellipse-421.svg" />
            <div className="group-div74">
                <div className="group-div75">
                    <b className="enablemint-is-the-no-code-lea">{`Enablemint is the no-code, lead automation platform powering Sales & Marketing teams`}</b>
                    <img className="vector-icon7" alt="" src="assets/vector-32.svg" />
                    <div className="frame-div4">
                        <b className="k-b">500k+</b>
                    </div>
                    <div className="our-mission-getting-your-messa">
                        <p className="our-mission-p">
                            <b>Our mission</b>
                        </p>
                        <p className="getting-your-message-to-the-ri">
                            <span>
                                Getting your message to the right people is just as important as
                                the message itself. enablemint supports marketing professionals
                                by unlocking the potential of their LinkedIn Premium Account
                                data. enablemint allows marketers to access this company and
                                contact data at scale to create more accurate and higher quality
                                leads lists in a fraction of the time.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <img className="asset-2-1" alt="" src="assets/asset-2-1@2x.png" />
            <div className="frame-div5">
                <b className="k-b">57%</b>
            </div>
            <div className="frame-div6">
                <b className="k-b">1000s</b>
            </div>
            <div className="frame-div7">
                <b className="k-b">$100s</b>
            </div>
            <div className="qualified-leads-div">qualified leads</div>
            <div className="more-leads-identified">more leads identified</div>
            <div className="of-hours-saved-prospecting">
                <p className="our-mission-p">{`of hours saved `}</p>
                <p className="prospecting">prospecting</p>
            </div>
            <div className="saved-on-ad-spend">saved on Ad Spend</div>
            <Footer />
        </div>
    </>;
};
