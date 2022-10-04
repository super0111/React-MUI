import { Container, Box, Typography, Button } from '@mui/material';


const buttons = [
  { btn: "500k+", text: "qualified leads" },
  { btn: "57%", text: "more leads identified" },
  { btn: "1000s", text: "of hours saved prospecting" },
  { btn: "$100s", text: "saved on Ad Spend" },
]

const Header = () => {
  return (
    <Box sx={{
        backgroundImage: `url(/assets/Header_Bg.png)`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
    }}>
        <Container sx={{
            padding: "140px 0 0 0",
            ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
                padding: "120px 16px 0 16px"
            },
        }}>
            <Box display="flex" flexDirection="column">
                <Box sx={{
                    display: "flex",
                    justifyContent: 'space-between',
                    ['@media (max-width:800px)']: { // eslint-disable-line no-useless-computed-key
                        flexDirection: "column"
                    },
                }}>
                    <Box display="flex" flexDirection="column" sx={{
                        width: "50%",
                        ['@media (max-width:800px)']: { // eslint-disable-line no-useless-computed-key
                            width: '100%'
                        },
                    }}> 
                        <Typography variant="h4" sx={{
                            ['@media (max-width:992px)']: { // eslint-disable-line no-useless-computed-key
                                fontSize: "35px",
                            },
                        }}>
                            Enablemint is the no-code, lead automation platform powering Sales & Marketing teams
                        </Typography>
                        <Box
                            component="img"
                            src="/assets/vector-32.svg" 
                            sx={{ 
                                margin: "25px 0", width: '90%', 
                                ['@media (max-width:800px)']: { // eslint-disable-line no-useless-computed-key
                                    width: '100%', 
                                },
                            }} 
                        />
                        <Typography sx={{
                            color: '#191A15',
                            fontSize: 25,
                            fontWeight: 700,
                            fontStyle: 'normal',
                            lineHeight: 1.1,
                            marginBottom: "10px",
                            ['@media (max-width:769px)']: { // eslint-disable-line no-useless-computed-key
                                fontSize: "20px",
                            },
                        }}>
                            Our mission
                        </Typography>
                        <Typography sx={{
                            maxWidth: '90%',
                            color: '#191A15',
                            fontSize: 13,
                            fontWeight: 500,
                            fontStyle: 'normal',
                            lineHeight: "30px",
                            ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
                                lineHeight: "20px",
                            },
                            ['@media (max-width:769px)']: { // eslint-disable-line no-useless-computed-key
                                fontSize: "12px",
                            },
                            ['@media (max-width:800px)']: { // eslint-disable-line no-useless-computed-key
                                maxWidth: '100%',
                            },
                        }}>
                            Getting your message to the right people is just as important as the message itself. enablemint supports marketing professionals by unlocking the potential of their LinkedIn Premium Account data. enablemint allows marketers to access this company and contact data at scale to create more accurate and higher quality leads lists in a fraction of the time.
                        </Typography>
                    </Box> 
                    <Box sx={{ 
                        width: "40%", 
                        ['@media (max-width:992px)']: { // eslint-disable-line no-useless-computed-key
                            width: "48%", 
                        },
                        ['@media (max-width:800px)']: { // eslint-disable-line no-useless-computed-key
                            margin: "auto", 
                            marginTOp: "30px !important"
                        },
                        ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
                            width: "80%", 
                        },
                    }}>
                        <img style={{width: "100%"}} src="/assets/about_us/asset-2-1@2x.png" />
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex", justifyContent: 'space-between', alignItems: 'base-line', 
                    width: '80%', margin: "auto", marginTop: "80px !important", marginBottom: "70px !important",
                    ['@media (max-width:992px)']: { // eslint-disable-line no-useless-computed-key
                        width: '100%'
                    },
                    ['@media (max-width:800px)']: { // eslint-disable-line no-useless-computed-key
                        flexWrap: 'wrap'
                    },
                }}>
                    { buttons.map((item, i)=>(
                        <Box key={i} display="flex" flexDirection='column' alignItems="center" sx={{
                            margin: "10px 0",
                            ['@media (max-width:800px)']: { // eslint-disable-line no-useless-computed-key
                                width: "48%"
                            },
                            ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
                                width: "100%"
                            },
                        }}>
                            <Button sx={{
                                width: "186px",
                                height: "58px",
                                background: "#388E3C",
                                borderRadius: "40px",
                                fontFamily: 'Inter',
                                fontWeight: 700,
                                fontSize: "32px !important",
                                lineHeight: "39px !important",
                                color: "#FFFFFF",
                                '&:hover': {
                                    background: "#377d3a",
                                },
                                ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                                    fontSize: "25px !important",
                                    height: "50px",
                                },
                            }}>
                                {item.btn}
                            </Button>
                            <Typography sx={{
                                maxWidth: "88%",
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '16px',
                                textAlign: 'center',
                                lineHeight: '19px',
                                color: '#000000',
                                marginTop: "9px",
                            }}>
                                {item.text}
                            </Typography>
                        </Box>
                    )) }
                </Box>
            </Box>
        </Container>
    </Box>

  )
}

export default Header