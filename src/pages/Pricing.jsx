import { useCallback, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Footer, FAQs } from "../components";
import "../assets/styles/Pricing.css";


const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => {
    return {
        updateData: (data) =>
            dispatch({
                type: "signup/ADD_DATA",
                data: data,
            }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)((props) => {
    const navigate = useNavigate();
    let { updateData } = props;

    const pricing = {
        monthly: {
            "name": "monthly",
            "starter": 70,
            "growth": 120,
            "accelerator": 200
        },
        yearly: {
            "name": "yearly",
            "starter": 63,
            "growth": 102,
            "accelerator": 170
        },
        free_trial: {
            "name": "free-trial",
            "free-trial": 0
        }
    };

    const [currentPricing, setPricing] = useState(pricing.monthly)

    const changeLocation = useCallback((newLocation = null) => {
        if (newLocation) {
            navigate(`/${newLocation}`);
        } else {
            navigate("/");
        }
    }, [navigate]);

    const selectPlanAndSignup = (plan) => {
        if (plan === 'free-trial') {
            setPricing(pricing.free_trial)
        };

        updateData({ amountToCharge: currentPricing[plan], chargedEvery: currentPricing.name })
        changeLocation('signup');
    };

    const updatePricing = (nextPricing) => {
        let _1_2 = 'rectangle-button_pr';
        let _2_1 = 'bill-yearly-div_pr';

        let monthly_btn = document.getElementById('monthly-btn').classList
        let yearly_btn = document.getElementById('yearly-btn').classList

        if (nextPricing === "monthly") {
            monthly_btn.remove(_2_1);
            monthly_btn.add(_1_2);
            yearly_btn.remove(_1_2);
            yearly_btn.add(_2_1);
        } else {
            monthly_btn.remove(_1_2);
            monthly_btn.add(_2_1);
            yearly_btn.remove(_2_1);
            yearly_btn.add(_1_2);
        }

        setPricing(pricing[nextPricing])
    }

    return <>
        <div className="pricing-div2_pr">
            <Navbar currentPage="pricing" />
            <Button
                className="group-button3_pr"
                onClick={() => { changeLocation('contact') }}
                sx={{ zIndex: 39, ':hover': { backgroundColor: "#1E5620" } }}
            >
                Contact Us
            </Button>
            <div className="playing-big-get-a-custom-plan_pr">
                Playing Big? Get a custom plan
            </div>
            <div className="group-div58_pr" style={{ zIndex: 39 }}>
                <div className="group-div59_pr">
                    <b className="plans-for-companies-big-smal_pr">{`Plans for Companies Big & Small`}</b>
                    <img className="vector-icon5_pr" alt="" src="assets/pricing/vector-32.svg" />
                    <div className="unlimited-leads-no-code-workf_pr">
                        Unlimited leads, no-code workflows, handy dashboard, priority
                        support plans or start your free trial for 7 days
                    </div>
                </div>
            </div>
            <div className="choose-plan-thats-right-for-y_pr" style={{ zIndex: 39 }}>
                <div className="group-div60_pr">
                    <Button
                        id="monthly-btn"
                        className="rectangle-button_pr"
                        onClick={() => { updatePricing("monthly") }}
                    >
                        Bill Monthly
                    </Button>
                    <Button
                        id="yearly-btn"
                        className="bill-yearly-div_pr"
                        onClick={() => { updatePricing("yearly") }}
                    >
                        Bill Yearly
                    </Button>
                    <div className="discount">
                        <div class="roundarrow"><svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"></path></svg></div>
                        <span>Save 15%!</span>
                    </div>
                </div>
                <div className="group-div61_pr">
                    <div className="group-div62_pr">
                        <div className="rectangle-div15_pr" />
                        <div className="group-div63_pr">
                            <div className="group-div64_pr">
                                <div className="group-div65_pr">
                                    <div className="div2_pr">$</div>
                                    <div className="div3_pr">{currentPricing.accelerator}</div>
                                </div>
                            </div>
                            <div className="unveil-new-superpowers-and-joi_pr">
                                Unveil new superpowers and join the Design Leaque
                            </div>
                            <div className="accelerator-div_pr">Accelerator</div>
                        </div>
                        <div className="rectangle-div16_pr" />
                        <div className="group-div66_pr">
                            <img className="subtract-icon3_pr" alt="" src="assets/pricing/subtract3.svg" />
                            <div className="collaboration-soon-div_pr">Priority Support</div>
                        </div>
                        <div className="group-div67_pr">
                            <div className="group-div68_pr">
                                <div className="group-div69_pr">
                                    <div className="group-div70_pr">
                                        <img
                                            className="subtract-icon3_pr"
                                            alt=""
                                            src="assets/pricing/subtract5.svg"
                                        />
                                        <div className="unlimited-contacts-div_pr">
                                            Unlimited Contacts
                                        </div>
                                    </div>
                                    <div className="group-div71_pr">
                                        <img
                                            className="subtract-icon3_pr"
                                            alt=""
                                            src="assets/pricing/subtract6.svg"
                                        />
                                        <div className="unlimited-contacts-div_pr">1000 Companies</div>
                                    </div>
                                    <div className="group-div72_pr">
                                        <img
                                            className="subtract-icon3_pr"
                                            alt=""
                                            src="assets/pricing/subtract7.svg"
                                        />
                                        <div className="campaign-slots-div_pr">12 Campaign Slots</div>
                                    </div>
                                    <div className="group-div73_pr">
                                        <img
                                            className="subtract-icon3_pr"
                                            alt=""
                                            src="assets/pricing/subtract8.svg"
                                        />
                                        <div className="collaboration-soon-div_pr">
                                            Contact List Upload Tool
                                        </div>
                                    </div>
                                    <div className="group-div74_pr">
                                        <img
                                            className="subtract-icon3_pr"
                                            alt=""
                                            src="assets/pricing/subtract9.svg"
                                        />
                                        <div className="gb-storage-div_pr">2 GB Storage</div>
                                    </div>
                                </div>
                                <div className="group-div75_pr">
                                    <Button
                                        className="rectangle-icon_pr"
                                        onClick={() => { selectPlanAndSignup('accelerator') }}
                                    >
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group-div76_pr">
                        <div className="rectangle-div17_pr" />
                        <div className="group-div77_pr">
                            <div className="frequently-asked-questions_pr">
                                Frequently Asked Questions
                            </div>
                        </div>
                    </div>
                    <div className="rectangle-div18_pr" />
                    <div className="group-div78_pr">
                        <div className="free-trial-div_pr">Free Trial</div>
                    </div>
                    <img className="rectangle-icon1_pr" alt="" src="assets/pricing/rectangle-125.svg" />
                    <div className="group-div79_pr">
                        <div className="group-div80_pr">
                            <div className="group-div81_pr">
                                <div className="group-div70_pr">
                                    <img className="subtract-icon3_pr" alt="" src="assets/pricing/subtract10.svg" />
                                    <div className="unlimited-contacts-div_pr">
                                        Unlimited Contacts
                                    </div>
                                </div>
                                <div className="group-div83_pr">
                                    <img className="subtract-icon3_pr" alt="" src="assets/pricing/subtract11.svg" />
                                    <div className="unlimited-contacts-div_pr">25 Companies</div>
                                </div>
                                <div className="group-div84_pr">
                                    <img className="subtract-icon3_pr" alt="" src="assets/pricing/subtract12.svg" />
                                    <div className="campaign-slots-div_pr">1 Campaign Slot</div>
                                </div>
                                <div className="group-div85_pr">
                                    <img className="subtract-icon3_pr" alt="" src="assets/pricing/subtract13.svg" />
                                    <div className="day-trial-period_pr">7-Day Trial Period</div>
                                </div>
                            </div>
                            <div className="group-div86_pr">
                                <Button
                                    className="free-trial-btn"
                                    onClick={() => { selectPlanAndSignup('free-trial') }}
                                >
                                    Start Free Trial
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="group-div87_pr">
                        <div className="rectangle-div19_pr" />
                        <div className="group-div88_pr">
                            <div className="group-div89_pr">
                                <div className="div2_pr">$</div>
                                <div className="div5_pr">{currentPricing.starter}</div>
                            </div>
                            <div className="have-a-go-and-test-your-superp_pr">
                                Have a go and test your superpowers
                            </div>
                            <div className="starter-div_pr">Starter</div>
                        </div>
                        <div className="rectangle-div20_pr" />
                        <div className="group-div90_pr">
                            <div className="group-div91_pr">
                                <div className="group-div92_pr">
                                    <div className="group-div93_pr">
                                        <img
                                            className="subtract-icon3_pr"
                                            alt=""
                                            src="assets/pricing/subtract14.svg"
                                        />
                                        <div className="unlimited-contacts-div2_pr">
                                            Unlimited Contacts
                                        </div>
                                    </div>
                                    <div className="group-div94_pr">
                                        <img
                                            className="subtract-icon3_pr"
                                            alt=""
                                            src="assets/pricing/subtract15.svg"
                                        />
                                        <div className="companies-div2_pr">250 Companies</div>
                                    </div>
                                    <div className="group-div95_pr">
                                        <img
                                            className="subtract-icon3_pr"
                                            alt=""
                                            src="assets/pricing/subtract16.svg"
                                        />
                                        <div className="campaign-slots-div1_pr">3 Campaign Slots</div>
                                    </div>
                                    <div className="group-div96_pr">
                                        <img
                                            className="subtract-icon3_pr"
                                            alt=""
                                            src="assets/pricing/subtract17.svg"
                                        />
                                        <div className="contact-list-upload-tool1_pr">
                                            Contact List Upload Tool
                                        </div>
                                    </div>
                                    <div className="group-div97_pr">
                                        <img
                                            className="subtract-icon3_pr"
                                            alt=""
                                            src="assets/pricing/subtract18.svg"
                                        />
                                        <div className="mb-storage-div_pr">500 MB Storage</div>
                                    </div>
                                </div>
                                <div>
                                    <Button
                                        className="group-button4_pr"
                                        onClick={() => { selectPlanAndSignup('starter') }}
                                    >
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-div3_pr">
                        <div className="group-div98_pr">
                            <div className="group-div99_pr">
                                <div className="div6_pr">$</div>
                                <div className="div7_pr">{currentPricing.growth}</div>
                            </div>
                            <div className="experiment-the-power-of-infini_pr">
                                Experiment the power of infinite possibilities
                            </div>
                            <div className="growth-div_pr">Growth</div>
                        </div>
                        <img className="ellipse-icon14_pr" style={{ zIndex: 0 }} alt="" src="assets/pricing/ellipse-53.svg" />
                        <div className="group-div100_pr">
                            <div className="rectangle-div21_pr" />
                            <div className="group-div101_pr">
                                <div className="group-div102_pr">
                                    <div className="group-div103_pr">
                                        <div className="group-div104_pr">
                                            <img
                                                className="subtract-icon19_pr"
                                                alt=""
                                                src="assets/pricing/subtract19.svg"
                                            />
                                            <div className="unlimited-contacts-div3_pr">
                                                Unlimited Contacts
                                            </div>
                                        </div>
                                        <div className="group-div105_pr">
                                            <img
                                                className="subtract-icon19_pr"
                                                alt=""
                                                src="assets/pricing/subtract20.svg"
                                            />
                                            <div className="companies-div3_pr">500 Companies</div>
                                        </div>
                                        <div className="group-div106_pr">
                                            <img
                                                className="subtract-icon19_pr"
                                                alt=""
                                                src="assets/pricing/subtract20.svg"
                                            />
                                            <div className="campaign-slots-div2_pr">
                                                6 Campaign Slots
                                            </div>
                                        </div>
                                        <div className="group-div107_pr">
                                            <img
                                                className="subtract-icon19_pr"
                                                alt=""
                                                src="assets/pricing/subtract20.svg"
                                            />
                                            <div className="contact-list-upload-tool2_pr">{`Contact List Upload Tool `}</div>
                                        </div>
                                        <div className="group-div108_pr">
                                            <img
                                                className="subtract-icon19_pr"
                                                alt=""
                                                src="assets/pricing/subtract20.svg"
                                            />
                                            <div className="gb-storage-div2_pr">1 GB Storage</div>
                                        </div>
                                        <div className="group-div109_pri_pr">
                                            <img
                                                className="subtract-icon19_pr"
                                                alt=""
                                                src="assets/pricing/subtract24.svg"
                                            />
                                            <div className="priority-support-annual-plans_pr">
                                                Priority Support (annual plans)
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        className="group-button5_pr"
                                        onClick={() => { selectPlanAndSignup('growth') }}
                                    >
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="group-div109_pr">
                            <div className="rectangle-div22_pr" />
                            <div className="most-popular-div_pr">Most Popular</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ellipse-icon8_pr" />
            <div className="ellipse-icon9_pr" />
            <div className="ellipse-icon10_pr" />
            <div className="ellipse-icon11_pr" />
            <div className="ellipse-icon12_pr" />
            <div className="ellipse-icon13_pr" />
            <FAQs />
            <div className="group-div122_pr" style={{ zIndex: 39 }}>
                <div className="group-div123_pr">
                    <Button
                        className="rectangle-button1_pr"
                        onClick={() => { selectPlanAndSignup('free-trial') }}
                    >
                        Get Started for Free
                    </Button>
                </div>
                <b className="get-up-and-running-in-less-tha1_pr">
                    Get up and running in less than 2 minutes.
                </b>
            </div>
            <Footer />
        </div>
    </>
})
