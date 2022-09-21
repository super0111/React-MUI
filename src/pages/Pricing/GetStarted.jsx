import { Container, Grid, Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const free = [
  {text: 'Unlimited Contacts'},
  {text: '25 Companies'},
  {text: '1 Campaign Slot'},
  {text: '7-Day Trial Period'},
]
const start = [
  {text: "Unlimited Contacts"},
  {text: "250 Companies"},
  {text: "3 Campaign Slots"},
  {text: "Contact List Upload Tool"},
  {text: "500 MB Storage"},
]
const growth = [
  {text: 'Unlimited Contacts'},
  {text: '500 Companies'},
  {text: '6 Campaign Slots'},
  {text: 'Contact List Upload Tool '},
  {text: '1 GB Storage'},
  {text: 'Priority Support'},
  {text: '(annual plans)'},
]
const Accelerator = [
  {text: "Unlimited Contacts"},
  {text: "1000 Companies"},
  {text: "12 Campaign Slots"},
  {text: "Contact List Upload Tool"},
  {text: "2 GB Storage"},
  {text: "Priority Support"},
]

const GetStarted = () => {
  const navigate = useNavigate();
  const [monthly, setMonthly] = useState(true);
  const [yearly, setYearly] = useState(false);

  const handleType = (type) => {

    console.log("tyeeeee", type)
    if(type==="monthly") {
      setMonthly(true);
      setYearly(false);
    } else if(type==="yearly") {
      setMonthly(false);
      setYearly(true);
    }
  }
  
  return (<>
      <Box sx={{
        width: "282.8px",
        display: "flex", alignItems: "center",
        background: "#FFFFFF",
        boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
        padding: '5px 8px',
        margin: 'auto',
        marginTop: '40px',
        marginBottom: '50px',
      }}>
        <Button sx={{
          width: "133.08px",
          height: "46.58px",
          background: monthly === true ? "#388E3C" : "white" ,
          borderRadius: "12px",
          fontFamily: 'Inter',
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: '15px',
          lineHeight: "30px",
          color: monthly === true ? "#FFFFFF" : "#000000",
          ':hover': { backgroundColor: monthly===true ?  "#1E5620" : 'white' }
        }}
        onClick={()=>handleType("monthly")}
        >
          Bill Monthly
        </Button>
        <Button sx={{
          width: "133.08px",
          height: "46.58px",
          background: monthly===true ? "whtie" : "#388E3C",
          borderRadius: "12px",
          fontFamily: 'Inter',
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: '15px',
          lineHeight: "30px",
          color: monthly === true ? "#000000" : "#FFFFFF" ,
          ':hover': { backgroundColor: yearly===true ?  "#1E5620" : 'white' }
        }}
        onClick={()=>handleType("yearly")}
        >
          Bill Yearly
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid item md={3} sm={6} sx={{
          ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            width: "80%",
            margin: "auto",
          },
          ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%",
            margin: "auto",
          },
        }}>
          <Box sx={{
            background: "#FFFFFF",
            boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.05)",
            borderRadius: "20px",
            padding: '35px 50px',
            ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
              padding: "30px 20px"
            } 
          }}>
            <Typography sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '29px',
              textDecorationLine: 'underline',
              color: '#191A15',
              textAlign: 'center',
              marginBottom: '35px',
            }}>
              Free Trial
            </Typography>
            { free.map((item, i)=>(
              <Box key={i} display="flex" alignItems="center" sx={{margin: '9px 0'}}>
                <Box component="img" src="/assets/subtract2.svg" sx={{
                  width: "20px", height: "20px"
                }} />
                <Typography sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "15px !important",
                  lineHeight: "30px",
                  color: "#191A15",
                  marginLeft: '8px',
                }}>
                  {item.text}
                </Typography>
              </Box>
            )) }
            <Box sx={{
              display: 'flex', justifyContent: 'center',
            }}>
              <Button sx={{
                width: "100%",
                height: "53.23px",
                background: "#FFFFFF",
                boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.05)",
                borderRadius: "20px",
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '15px',
                lineHeight: '30px',
                color: "#388E3C",
                margin: 'auto',
              }}
              onClick={()=>navigate("/signUp")}
              >
                Start Free Trial
              </Button>
            </Box>

          </Box>
        </Grid>

        <Grid item md={3} sm={6} sx={{
          ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            width: "80%",
            margin: "auto",
          },
          ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%",
            margin: "auto",
          },
        }}>
          <Box sx={{
            background: "#FFFFFF",
            boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.05)",
            borderRadius: "20px",
            padding: '35px 50px',
            ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
              padding: "30px 20px"
            } 
          }}>
            <Typography sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '29px',
              textDecorationLine: 'underline',
              color: '#191A15',
              textAlign: 'center',
              marginBottom: '15px',
            }}>
             Starter
            </Typography>
          
            <Typography sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '15px',
              lineHeight: '27px',
              textDecorationLine: 'underline',
              color: '#A6A6A6',
              textAlign: 'center',
              marginBottom: '20px',
            }}> 
             Have a go  and test your  superpowers
            </Typography>
            <Box sx={{position: 'relative', width: "70px", margin: 'auto', marginBottom: '50px'}}>
              <Typography sx={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "30px",
                textAlign: 'center',
                color: "#191A15",
              }}>
                {monthly=== true ? 70 : 63}
              </Typography>
              <Box component="img" src="/assets/pricing/$.png" sx={{
                position: "absolute",
                top: '-10px',
                left: '-10px',
              }} />
            </Box>
            { start.map((item, i)=>(
              <Box key={i} display="flex" alignItems="center" sx={{margin: '9px 0'}}>
                <Box component="img" src="/assets/subtract2.svg" sx={{
                  width: "20px", height: "20px"
                }} />
                <Typography sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "15px !important",
                  lineHeight: "30px",
                  color: "#191A15",
                  marginLeft: '8px',
                }}>
                  {item.text}
                </Typography>
              </Box>
            )) }
            <Box sx={{
              display: 'flex', justifyContent: 'center',
            }}>
              <Button sx={{
                width: "100%",
                height: "53.23px",
                background: "#FFFFFF",
                boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.05)",
                borderRadius: "20px",
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '15px',
                lineHeight: '30px',
                color: "#388E3C",
                margin: 'auto',
              }}
              onClick={()=>navigate("/signUp")}
              >
                Get Started
              </Button>
            </Box>

          </Box>
        </Grid>

        <Grid item md={3} sm={6} sx={{
          ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            width: "80%",
            margin: "auto",
          },
          ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%",
            margin: "auto",
          },
        }}>
          <Box sx={{
            background: "#388E3C",
            boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.05)",
            borderRadius: "20px",
            padding: '55px 20px 10px 20px',
            marginTop: '-20px',
            position: 'relative',
            ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
              padding: "55px 20px 10px 20px"
            },
            ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
              marginTop: '-60px',
            },
            ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
              marginTop: '0px',
            } 
          }}>
            <Typography sx={{
              position: "absolute",
              top: "10px",
              left: '10px',
              padding:"0px 10px",
              background: 'white',
              borderRadius: "12px",
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "30px",
              textAlign: 'center',
              color: '#388E3C',
            }}>
              Most Popular
            </Typography>
            <Typography sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '29px',
              textDecorationLine: 'underline',
              color: 'white',
              textAlign: 'center',
              marginBottom: '15px',
            }}>
             Growth
            </Typography>
          
            <Typography sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '15px',
              lineHeight: '27px',
              textDecorationLine: 'underline',
              color: 'white',
              textAlign: 'center',
              marginBottom: '20px',
            }}> 
             Experiment the power of infinite possibilities
            </Typography>
            <Box sx={{position: 'relative', width: "70px", margin: 'auto', marginBottom: '50px'}}>
              <Typography sx={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "30px",
                textAlign: 'center',
                color: "white",
              }}>
                {monthly=== true ? 120 : 100}
              </Typography>
              <Box component="img" src="/assets/pricing/white$.png" sx={{
                position: "absolute",
                top: '-10px',
                left: '-10px',
              }} />
            </Box>
              <Box sx={{
                background: "#FFFFFF",
                borderRadius: "12px",
                padding: '27px',
              }}>
                { growth.map((item, i)=>(
                  <Box key={i} display="flex" alignItems="center" sx={{margin: '9px 0'}}>
                    { i===6 ? "" : 
                      <Box component="img" src="/assets/subtract2.svg" sx={{
                        width: "20px", height: "20px"
                      }} />
                    }
                    <Typography sx={{
                      fontFamily: 'Inter',
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "15px !important",
                      lineHeight: "30px",
                      color: "#191A15",
                      marginTop: i===6 ? "-10px" : "0px",
                      marginLeft: i===6 ? '25px' : '8px',
                    }}>
                      {item.text}
                    </Typography>
                  </Box>
                )) }
            </Box>
            <Box sx={{
              display: 'flex', justifyContent: 'center',
            }}>
              <Button sx={{
                width: "100%",
                height: "53.23px",
                background: "#388E3C",
                boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.05)",
                borderRadius: "20px",
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '15px',
                lineHeight: '30px',
                color: "white",
                margin: 'auto',
              }}
              onClick={()=>navigate("/signUp")}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item md={3} sm={6} sx={{
          ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            width: "80%",
            margin: "auto",
          },
          ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
            width: "100%",
            margin: "auto",
          },
        }}>
          <Box sx={{
            background: "#FFFFFF",
            boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.05)",
            borderRadius: "20px",
            padding: '35px 50px',
            ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
              padding: "30px 20px"
            } 
          }}>
            <Typography sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '29px',
              textDecorationLine: 'underline',
              color: '#191A15',
              textAlign: 'center',
              marginBottom: '15px',
            }}>
             Accelerator
            </Typography>
          
            <Typography sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '15px',
              lineHeight: '27px',
              textDecorationLine: 'underline',
              color: '#A6A6A6',
              textAlign: 'center',
              marginBottom: '20px',
            }}> 
             Unveil new superpowers and join the Design Leaque
            </Typography>
            <Box sx={{position: 'relative', width: "70px", margin: 'auto', marginBottom: '50px'}}>
              <Typography sx={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "30px",
                textAlign: 'center',
                color: "#191A15",
              }}>
                {monthly=== true ? 200 : 170}
              </Typography>
              <Box component="img" src="/assets/pricing/$.png" sx={{
                position: "absolute",
                top: '-10px',
                left: '-10px',
              }} />
            </Box>
            { Accelerator.map((item, i)=>(
              <Box key={i} display="flex" alignItems="center" sx={{margin: '9px 0'}}>
                <Box component="img" src="/assets/subtract2.svg" sx={{
                  width: "20px", height: "20px"
                }} />
                <Typography sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "15px !important",
                  lineHeight: "30px",
                  color: "#191A15",
                  marginLeft: '8px',
                }}>
                  {item.text}
                </Typography>
              </Box>
            )) }
            <Box sx={{
              display: 'flex', justifyContent: 'center',
            }}>
              <Button sx={{
                width: "100%",
                height: "53.23px",
                background: "#FFFFFF",
                boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.05)",
                borderRadius: "20px",
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '15px',
                lineHeight: '30px',
                color: "#388E3C",
                margin: 'auto',
                marginTop: '100px',
              }}
              onClick={()=>navigate("/signUp")}
              >
                Get Started
              </Button>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default GetStarted