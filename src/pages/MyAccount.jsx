import * as React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import Slider from "../components/Slider";
import { styled } from '@mui/system';

const InputField = styled('input')({
  width: "100%",
  padding: "15px 20px",
  background: "#FFFFFF",
  border: "1px solid #388E3C",
  borderRadius: "32px",
  fontFamily: 'Inter',
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#A6A6A6",
});

const MyAccountApp = () => {
  return (
    <Box sx={{background: "#F5F5F5"}}>
      <Container sx={{
        padding: "100px 60px 30px 60px !important",
        ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key 
          padding: "80px 16px 30px 16px!important",
        }
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          background: "#FFFFFF",
          borderRadius: "15px !important",
          padding: { md: "35px 45px !important", sm: "25px 15px!important" },
          ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key 
            padding: "25px 15px!important",
          }
        }}>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "29px",
              color: "#191A15",
              marginBottom: "24px",
              textAlign: "left",
              textDecoration: "underline"
            }}
          >
            My Account
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "24px",
              color: "#388E3C",
              marginBottom: "16px",
              textAlign: "left",
            }}
          >
            Account Details
          </Typography>
          <Box sx={{}}>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#191A15",
                marginBottom: "10px",
                textAlign: "left",
              }}
            >
              First Name
            </Typography>
            <InputField placeholder="Enter LinkedIn Cookie" />
          </Box>
          <Box sx={{}}>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#191A15",
                marginBottom: "10px",
                textAlign: "left",
              }}
            >
              Last Name
            </Typography>
            <InputField placeholder="Enter LinkedIn Cookie" />
          </Box>
          <Box sx={{marginBottom: "10px !important"}}>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#191A15",
                marginBottom: "10px",
                textAlign: "left",
              }}
            >
              Last Name
            </Typography>
            <InputField placeholder="Enter LinkedIn Cookie" />
          </Box>

          <Typography
            sx={{
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "24px",
              color: "#388E3C",
              textAlign: "left",
              margin: "12px 0 -10px 0",
            }}
          >
            Credit Card Details
          </Typography>

          <Box display="flex" flexDirection="column">
            <Box sx={{
              display: "flex",
              ['@media (max-width:950px)']: { // eslint-disable-line no-useless-computed-key 
                flexDirection: "column"
              }    
            }}>
              <Box sx={{margin: "5px 0 !important"}}>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#191A15",
                    marginBottom: "10px",
                    textAlign: "left",
                  }}
                >
                  Card Type
                </Typography>
                <InputField placeholder="Enter Drop Down" sx={{
                  width: "240px",
                  ['@media (max-width:950px)']: { // eslint-disable-line no-useless-computed-key 
                    width: "100%"
                  }     
                }}/>
              </Box>
              <Box sx={{
                margin: "5px 0 5px 15px !important",
                ['@media (max-width:950px)']: { // eslint-disable-line no-useless-computed-key 
                  margin: "5px 0px !important",
                }   
              }}>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#191A15",
                    marginBottom: "10px",
                    textAlign: "left",
                  }}
                >
                  Expiration Date
                </Typography>
                <InputField placeholder="Enter Number" sx={{
                  width: "240px",
                  ['@media (max-width:950px)']: { // eslint-disable-line no-useless-computed-key 
                    width: "100%"
                  } 
                }} />
              </Box>
            </Box>
            <Box sx={{margin: "15px 0 !important"}}>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#191A15",
                  marginBottom: "10px",
                  textAlign: "left",
                }}
              >
                Card Number
              </Typography>
              <InputField placeholder="Enter Number" />
            </Box>
          </Box>

          <Typography
            sx={{
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "24px",
              color: "#388E3C",
              textAlign: "left",
              margin: "5px 0",
            }}
          >
            Payment Details
          </Typography>

          <Box sx={{
            padding: "0 30px !important",
            ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key 
              padding: "0 !important",
            }
          }}>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#191A15",
                marginBottom: "12px"
              }}
            >
              Current Subscription:
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#191A15",
                marginBottom: "12px"
              }}
            >
              Last Payment Date:
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#191A15",
                marginBottom: "12px"
              }}
            >
              Next Payment Date:
            </Typography>

            <Button sx={{
              width: "197px",
              height: "61px",
              background: "#388E3C",
              border: "1px solid #388E3C",
              borderRadius: "32px",
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: '#58b75c',
              },
              margin: "5px 0",
              ['@media (max-width:950px)']: { // eslint-disable-line no-useless-computed-key 
                width: "100%",
              }
            }}>
              View Payment History
            </Button>

            <Box sx={{
              display: "flex",
              ['@media (max-width:950px)']: { // eslint-disable-line no-useless-computed-key 
                flexDirection: "column",
              }
            }}>
              <Button sx={{
                width: "197px",
                height: "61px",
                background: "#388E3C",
                border: "1px solid #388E3C",
                borderRadius: "32px",
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: '#58b75c',
                },
                ['@media (max-width:950px)']: { // eslint-disable-line no-useless-computed-key 
                  width: "100%",
                }
              }}>
                Change Subscription
              </Button>
              <Button sx={{
                width: "197px",
                height: "61px",
                background: "whtie",
                border: "1px solid #388E3C",
                borderRadius: "32px",
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#A6A6A6",
                marginLeft: "15px",
                ['@media (max-width:950px)']: { // eslint-disable-line no-useless-computed-key 
                  width: "100%",
                  margin: "10px 0px 0 0",
                }
              }}>
                Cancel Subscription
              </Button>
            </Box>
          </Box>

          <Typography
            sx={{
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "24px",
              color: "#388E3C",
              textAlign: "left",
              margin: "25px 0 0 0",
            }}
          >
            Login Preferences
          </Typography>

          <Box sx={{
            display: 'flex', padding: "0 30px !important",
            ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key 
              flexDirection: "column",
            },
            ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key 
              padding: "0 !important",
            }
          }}>
            <Button sx={{
              width: "250px",
              height: "61px",
              background: "#388E3C",
              border: "1px solid #388E3C",
              borderRadius: "32px",
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
              color: "#FFFFFF",
              margin: "5px 0",
              "&:hover": {
                backgroundColor: '#58b75c',
              },
              ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key 
                width: "100%",
              }  
            }}>
              Change Account Password
            </Button>
            <Button sx={{
              width: "250px",
              height: "61px",
              background: "#388E3C",
              border: "1px solid #388E3C",
              borderRadius: "32px",
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
              color: "#FFFFFF",
              margin: "5px 0 5px 15px",
              "&:hover": {
                backgroundColor: '#58b75c',
              },
              ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key 
                width: "100%",
                margin: "5px 0px",
              }  
            }}>
              Change Account Email
            </Button>
          </Box>

          <Box sx={{
            display: "flex", justifyContent: "end",
            ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key 
              justifyContent: "center",
            }
          }}>
            <Button sx={{
              width: "140px",
              height: "38px",
              background: "#388E3C",
              borderRadius: "10px",
              fontFamily: 'Inter',
              fontWtyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "19px",
              textAlign: "center",
              color: "#F8F8FA",
              marginTop: "45px",
              "&:hover": {
                background: "#3da642",
              },
            }}>
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

const TitleField = () => {
  return (
    <Box>
      <img src='/assets/dashboard/Color-Vector (4).png' style={{width: "38px", height: "25px", margin: "0 15px 6px 0px"}} />
      My Account
    </Box>
  )
}
const textField = "Update or change your account settings accordingly to your preferences ";

const MyAccount = () => {
  return (
    <Slider Component={MyAccountApp} TitleField={TitleField} textField={textField} />
  )
}

export default MyAccount