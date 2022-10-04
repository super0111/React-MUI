import { useState } from "react";
import { Container, Typography, Box, Button, Grid, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Navbar, Footer } from "../../components";
import { styled } from '@mui/system';
import "../../assets/styles/HelpCenter.css";
import TouchUs from "./TouchUs";

const SearchField = styled('input')({
    width: '100%',
    height: "50px",
    background: "#FFFFFF",
    borderRadius: "12px",
    padding: "15px 20px",
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "17px",
    color: "#A6A6A6",
    border: "none", 
    outline: "none",
});

const helps = [
    { url: "/assets/help_center/rocket@2x.png", title: "Getting Started", text: "Learn more about how to get started with enablemint with our quick tips and guides to all that you can do on our platform." },
    { url: "/assets/help_center/Vector (1).png", title: "Tutorials", text: "Check out video tutorials with step-by-step instructions for setting up and using various tools that enablemint offers." },
    { url: "/assets/help_center/billing.svg", title: "Billing", text: "Questions about Billing or your Subscription? We got you covered. Learn more about our policies and plans." },
    { url: "/assets/help_center/settings.svg", title: "Account Settings", text: "Learn more about your account and how to navigate, change or update your account settings to your prefernces." },                                                         
]

const HelpCenter = () => {
    const navigate = useNavigate();
    return <>
        <Navbar currentPage="help-center" />
        <Box sx={{
            backgroundImage: `url(/assets/Header_Bg.png)`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
        }}>
            <Container sx={{
                padding: "150px 0",
                position: 'relative',
                ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key 
                padding: "120px 0",
                },
            }}>
                <Typography sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "60px",
                textAlign: "center",
                color: "#191A15",
                marginBottom: "55px",
                ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key 
                    fontSize: "25px",
                    lineHeight: "28px",
                    marginBottom: "25px",
                },
                }}>
                Welcome to Help Center
                </Typography>
                <Box sx={{
                    position: "relative",
                    width: '58%',
                    margin: 'auto !important',
                    ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key 
                        width: '94%',
                    },
                }}>
                <SearchField placeholder="What can we help you with today?" />
                <Button sx={{
                    width: "80px",
                    height: "40px",
                    background: "#388E3C",
                    borderRadius: "12px",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#F8F8FA",
                    position: "absolute",
                    right: "5px",
                    bottom: "5px",
                    '&:hover': {
                    background: "#388E3C",
                    }
                }}>
                    Search
                </Button>
                </Box>

                <Box sx={{
                    display: "flex", justifyContent: 'center'
                }}>
                    <Grid container spacing={2} sx={{
                        margin: "80px 0",
                        maxWidth: "68%",
                        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key 
                            maxWidth: "100%",
                        },
                    }}>
                        { helps.map((item, i)=>(
                            <Grid KEY={i} item md={6} xs={12} sx={{
                                display: "flex", justifyContent: 'center',
                                ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key 
                                    padding: "0 16px"
                                },
                            }}>
                                <Box 
                                    sx={{
                                        display: "flex",
                                        flexDirection: 'column',
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        padding: "20px 40px",
                                        width: '356px',
                                        background: "#FFFFFF",
                                        boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.05)",
                                        borderRadius: "20px",
                                        margin: "8px 0",
                                        cursor: 'pointer',
                                        '&:hover': {
                                            boxShadow: "8px 7px 6px rgb(0 0 0 / 5%)",
                                        }
                                    }}
                                    onClick={()=>navigate("/help-center-article")}
                                >
                                    <Box component="img" src={item.url} sx={{
                                        width: "40px", height: "40px",
                                    }} />
                                    <Typography sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        fontSize: "16px",
                                        lineHeight: "19px",
                                        color: "#000000",
                                        margin: "12px 0"
                                    }}>
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        fontSize: "11px",
                                        lineHeight: "13px",
                                        color: "#000000",
                                        marginTop: '8px',
                                        textAlign: 'center',
                                    }}>
                                        {item.text}
                                    </Typography>
                                </Box>
                            </Grid>   
                        )) }
                    </Grid>
                </Box>

                <TouchUs />
            </Container>
        </Box>
        <Footer />
    </>;
};

export default HelpCenter;
