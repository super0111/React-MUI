import { Box, Card, TextField, Button, Typography, TextareaAutosize, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Navbar } from "../../components";
import { Footer } from "../../components/Footer";

const items = [
    { title: "Need Help?", text: "Our Help Center offers a library of articles and tutorials that answer our customers most asked questions.", btn: "Go to Help Center" },
    { title: "Need a Custom Solution?", text: "Need more than what our pre-packaged plans are offering? We can help with that.", btn: "Contact Sales" },
    { title: "Join our Affiliate Program", text: "Get rewarded for every sale you make while promoting our product. Make up to 35% comissions in a single month.", btn: "Contact Sales" },
]

const formItems = [
    { name: "Full Name", placeholder: "Enter your name", type: "text" },
    { name: "Last Name", placeholder: "Enter your last name", type: "text" },
    { name: "Email", placeholder: "Enter your email", type: "email" },
    { name: "Phone", placeholder: "Enter your phone number", type: "text" },
    { name: "Company", placeholder: "Enter your company name", type: "text" },
    { name: "Website", placeholder: "Enter website URL", type: "text" },
]

const ContactUs = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
    }

    return <>
        <Navbar currentPage="contact-us" />
        <div className="contactUs">
            <div className="headerImg">
                <img src="/assets/contact_us/image 7.png" alt="header-img" />
            </div>
            <div className="container">
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
                                borderRadius: "10px",
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

                <img className="map" src="/assets/contact_us/map.png" alt="map" />

                <form className="contactUs-form" onSubmit={handleSubmit}>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "30px",
                        textAlign: "center",
                        color: "#FFFFFF",
                        marginBottom: "30px",
                    }}>
                        Contact Sales 
                    </Typography>
                    <Grid container spacing={2}
                        sx={{ margin: '5px 0', width: "100% !important" }}
                    >
                        { formItems.map((item, i)=>(
                            <Grid item key={i} md={6} xs={12}
                                sx={{
                                    margin: "5px 0",
                                    paddingLeft:"8px !important",
                                    paddingRight:"8px !important"
                                }}
                            >
                                <Box key={i} display="flex" flexDirection="column">
                                    <Typography
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: "normal",
                                            fontWeight: 500,
                                            fontSize: "15px",
                                            lineHeight: "16px",
                                            color: "#FFFFFF",
                                            marginBottom: "15px"
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                    <TextField
                                        sx={{ 
                                            background: "#FFFFFF",
                                            borderRadius: "10px", 
                                        }}
                                        variant="outlined"
                                        type={`${item.type}`}
                                        placeholder={`${item.placeholder}`}
                                        required
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <Box display="flex" flexDirection="column"
                        sx={{ 
                            margin: "auto", 
                            marginTop: "15px",
                            padding: "0 8px"
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontStyle: "normal",
                                fontWeight: 500,
                                fontSize: "15px",
                                color: "#FFFFFF",
                                marginBottom: "15px"
                            }}
                        >
                            Heading
                        </Typography>
                        <TextField
                            sx={{
                                background: "#FFFFFF",
                                borderRadius: "10px", 
                            }}
                            variant="outlined"
                            type="text"
                            placeholder="Heading"
                            required
                        />
                    </Box>
                    <Box display="flex" flexDirection="column"
                        sx={{ margin: "auto",  marginTop: "25px", padding: "0 8px"}}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontStyle: "normal",
                                fontWeight: 500,
                                fontSize: "15px",
                                color: "#FFFFFF",
                                marginBottom: "10px"
                            }}
                        >
                            Message
                        </Typography>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="What would you like to say?"
                            style={{
                                background: "#FFFFFF",
                                borderRadius: "10px",
                                padding: "16px",
                                height: "150px",
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: "17px",
                                color: "#A6A6A6",
                            }}
                        />
                    </Box>
                    <Box display="flex" justifyContent="center"
                        sx={{padding: "0 8px"}}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                width: "440px",
                                height: "60px",
                                background: "#388E3C",
                                borderRadius: "10px",
                                fontFamily: 'Inter',
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "16px",
                                lineHeight: "19px",
                                color: "#FFFFFF",
                                marginTop: "25px",
                                "&:hover": {
                                    backgroundColor: '#58b75c',
                                }
                            }}
                        >
                            Contact Us
                        </Button>
                    </Box>
                </form>
            </div>
        </div>
        <Footer />
    </>;
};

export default ContactUs;
