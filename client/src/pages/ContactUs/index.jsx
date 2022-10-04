import { Box, Card, Container, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { Footer } from "../../components/Footer";
import ContactForm from "./ContactForm";

const items = [
    { title: "Need Help?", text: "Our Help Center offers a library of articles and tutorials that answer our customers most asked questions.", btn: "Go to Help Center" },
    { title: "Need a Custom Solution?", text: "Need more than what our pre-packaged plans are offering? We can help with that.", btn: "Contact Sales" },
    { title: "Join our Affiliate Program", text: "Get rewarded for every sale you make while promoting our product. Make up to 35% comissions in a single month.", btn: "Contact Sales" },
]

const ContactUs = () => {
    const navigate = useNavigate();

    return <>
        <Navbar currentPage="contact-us" />
        <Box sx={{
            backgroundImage: `url(/assets/Header_Bg.png)`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            position: "relative",
            paddingBottom: "255px",
            [`@media (max-width: 768px)`]: {
                paddingBottom: "150px",
            },
            [`@media (max-width: 400px)`]: {
                paddingBottom: "80px",
            },
        }}>
            <Box component="img" src="/assets/contact_us/image 7.png" alt="header-img" sx={{
                position: "absolute",
                right: 0,
                top: "80px",
                width: "50%",
                zIndex: 1,
                [`@media (max-width: 600px)`]: {
                    top: "68px",
                },
            }} />
            <Container>
                <Typography sx={{
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "40px",
                    lineHeight: "60px",
                    textAlign: "left",
                    color: "#191A15",
                    paddingTop: "174px",
                    ['@media (max-width:576px)']: { // eslint-disable-line no-useless-computed-key
                        paddingTop: "155px",
                        fontSize: "30px",
                        lineHeight: "10px",
                    },
                }}>
                    Contact Us
                </Typography>
                <Box sx={{zIndex: "100"}}>
                    <Typography sx={{
                        width: "477px",
                        fontFamily: 'Inter',
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "19px",
                        textAlign: "left",
                        color: "#000000",
                        margin: "30px 0 60px 0",
                        zIndex: "100",
                        ['@media (max-width:576px)']: { // eslint-disable-line no-useless-computed-key
                            width: "100%",
                            fontSize: "14px",
                            lineHeight: "14px",
                        }
                    }}>
                        Whether you are interested in enablemint’s software, or need a little more assistance - 
                        we’re here for you. Check out our Resources or contact us directly. Here’s how you you can reach us....
                    </Typography>
                </Box>

                <Box sx={{ 
                    display: "flex",
                    justifyContent: "start",
                    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }
                }}>
                    { items.map((item, i)=> (
                        <Card key={i} sx={{ 
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "300.45px",
                            height: "188px",
                            background: "#FFFFFF",
                            boxShadow: "1px 9px 9px rgb(5 5 5 / 5%)",
                            borderRadius: "20px",
                            padding: "18px 38px",
                            margin: "10px",
                            zIndex: "100",
                        }}>
                            <Typography 
                                sx={{ 
                                    fontFamily: 'Inter',
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    fontSize: "16px",
                                    lineHeight: "19px",
                                    textAlign: "center",
                                    color: "#000000",
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography 
                                sx={{ 
                                    fontFamily: 'Inter',
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "11px",
                                    lineHeight: "13px",
                                    textAlign: "center",
                                    color: "#000000",
                                }}>
                                {item.text}
                            </Typography>
                            <Button sx={{
                                width: "170px",
                                background: "#388E3C",
                                borderRadius: "12px",
                                fontFamily: 'Inter',
                                fontStyle: "normal",
                                fontWeight: 500,
                                fontSize: "16px",
                                lineHeight: "19px",
                                textAlign: "center",
                                color: "#F8F8FA",
                            }}>
                                {item.btn}
                            </Button>
                        </Card>
                    )) }
                </Box>

                <Grid container spacing={2}
                    sx={{ 
                        marginTop: '135px',
                        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
                            marginTop: "70px"
                        }
                    }}
                >
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: "36px",
                                lineHeight: "44px",
                                textAlign: "left",
                                color: "#000000",
                                marginLeft: "75px",
                                ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
                                    textAlign: "center",
                                    marginLeft: "0px",
                                },
                                ['@media (max-width:576px)']: { // eslint-disable-line no-useless-computed-key
                                    textAlign: "left",
                                    marginLeft: "0px",
                                    fontSize: "25px",
                                    lineHeight: "25px",
                                }
                            }}                
                        >
                            Helping our clients succeed with our global reach
                        </Typography>
                    </Grid>
                    <Grid item lg={6} md={12} sm={12} xs={12}
                        sx={{ 
                            display: "flex", 
                            justifyContent: "end",
                            ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
                                justifyContent: "center",
                            }
                        }}
                    >
                        <Card
                            sx={{
                                width: "519px",
                                height: "125px",
                                background: "#FFFFFF",
                                padding: "21px 26px",
                                borderRadius: "15px",
                                display: "flex",
                                justifyContent: "space-between",
                                ['@media (max-width:576px)']: { // eslint-disable-line 
                                    padding: "15px"
                                }
                            }}
                        >
                            <Box display="flex" flexDirection="column" sx={{margin: "15px 0"}} justifyContent="center" alignItems="center">
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        fontSize: "50px",
                                        lineHeight: "61px",
                                        textAlign: "left",
                                        color: "#388E3C",
                                        ['@media (max-width:576px)']: { // eslint-disable-line 
                                            fontSize: "35px",
                                            lineHeight: "30px",
                                        }
                                    }}  
                                >
                                    3
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        fontSize: "15px",
                                        lineHeight: "15px",
                                        textAlign: "left",
                                        color: "#388E3C",
                                        ['@media (max-width:576px)']: { // eslint-disable-line 
                                            marginTop: "15px"
                                        }
                                    }} 
                                >
                                    Timezones
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    borderLeft: "1px solid #878686",
                                }}
                            ></Typography>
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        fontSize: "50px",
                                        lineHeight: "61px",
                                        textAlign: "left",
                                        color: "#388E3C",
                                        ['@media (max-width:576px)']: { // eslint-disable-line 
                                            fontSize: "35px",
                                            lineHeight: "30px",
                                        }
                                    }}  
                                >
                                    200+
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        fontSize: "15px",
                                        lineHeight: "15px",
                                        textAlign: "left",
                                        color: "#388E3C",
                                        ['@media (max-width:576px)']: { // eslint-disable-line 
                                            marginTop: "15px"
                                        }
                                    }} 
                                >
                                    Countries
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    borderLeft: "1px solid #878686",
                                }}
                            ></Typography>
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        fontSize: "50px",
                                        lineHeight: "61px",
                                        textAlign: "left",
                                        color: "#388E3C",
                                        ['@media (max-width:576px)']: { // eslint-disable-line 
                                            fontSize: "35px",
                                            lineHeight: "30px",
                                        }
                                    }}  
                                >
                                    1
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        fontSize: "15px",
                                        lineHeight: "15px",
                                        textAlign: "left",
                                        color: "#388E3C",
                                        ['@media (max-width:576px)']: { // eslint-disable-line 
                                            marginTop: "15px"
                                        }
                                    }} 
                                >
                                    Platform
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>

                <Box component="img" src="/assets/contact_us/map.png" alt="map" sx={{
                    width: "85%",
                    margin: "auto",
                    marginTop: "60px",
                    marginBottom: "60px",
                }} />
                
                <ContactForm />
            </Container>
        </Box>
        <Footer />
    </>;
};

export default ContactUs;
