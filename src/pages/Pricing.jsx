import { useCallback, useState } from "react";
import { Container, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Footer, FAQs } from "../components";
import "../assets/styles/Pricing.css";
import GetStarted from "./Pricing/GetStarted";
import Questions from "./Pricing/Questions";


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
        <Navbar currentPage="help-center" />
        <Box>
            <Box sx={{
                    backgroundImage: `url(/assets/Header_Bg.png)`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    padding: "150px 0 20px 0",
                    position: 'relative',
                    ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key 
                        padding: "120px 0 10px 0",
                    },
                }}
            >
                <Container sx={{}}>
                    <Typography variant="h4" sx={{
                        maxWidth: '60%',
                        textAlign: "center",
                        margin: "auto",
                        ['@media (max-width:550px)']: { // eslint-disable-line no-useless-computed-key 
                            maxWidth: '100%',
                        },
                    }}>
                        Plans for Companies Big & Small
                    </Typography>
                    <Box display="flex" justifyContent='center' sx={{margin: "40px 0 20px 0"}}>
                        <Box component="img" src="/assets/pricing/vector-32.svg" sx={{
                            maxWidth: '50%',
                            ['@media (max-width:550px)']: { // eslint-disable-line no-useless-computed-key 
                                maxWidth: '100%',
                            },
                        }} />
                    </Box>
                    <Typography sx={{
                        maxWidth: '70%',    
                        fontFamily: 'Inter',
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "30px",
                        textAlign: "center",
                        color: "#000000",
                        margin: "auto",
                        ['@media (max-width:550px)']: { // eslint-disable-line no-useless-computed-key 
                            maxWidth: '100%',
                        },
                    }}>
                        Unlimited leads, no-code workflows, handy dashboard, priority support plans or start your free trial for 7 days
                    </Typography>

                    <GetStarted />

                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: 'center',
                        maxWidth: '75%',
                        margin: "auto",
                        marginTop: "40px",
                        marginBottom: '25px',
                        ['@media (max-width: 600px)']: { // eslint-disable-line no-useless-computed-key 
                            flexDirection: 'column',
                            maxWidth: '100  %',
                        }
                    }}>
                        <Typography variant="h4" sx={{
                            fontWeight: 400,
                            ['@media (max-width: 600px)']: { // eslint-disable-line no-useless-computed-key 
                                textAlign: 'center',
                                marginBottom: '10px',
                            }
                        }}>
                            Playing Big? Get a custom plan
                        </Typography>
                        <Button 
                            sx={{
                                width: "232px",
                                height: "60px",
                                background: "#388E3C",
                                borderRadius: "12px",
                                fontFamily: 'Inter',
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "16px",
                                lineHeight: "19px",
                                color: "#FFFFFF",
                                ':hover': {
                                    backgroundColor: "#1E5620",
                                }
                            }}
                            onClick={() => { changeLocation('contact') }}
                        >
                            Contact Us
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Questions />
            <Footer />
        </Box>
        <Footer />

    </>
})
