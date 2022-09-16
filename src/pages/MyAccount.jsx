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
    <Box sx={{background: "#F5F5F5", height: "100vh"}}>
      <Container sx={{
        padding: "130px 60px 0 60px !important",
        ['@media (max-width:684px)']: { // eslint-disable-line no-useless-computed-key 
          padding: "80px 20px 0 20px!important",
        }
      }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            background: "#FFFFFF",
            borderRadius: "15px !important",
            padding: { md: "50px 45px !important", sm: "40px 15px!important" },
            ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key 
              padding: "40px 15px!important",
            }
          }}>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#388E3C",
                marginBottom: "40px",
                textAlign: "left",
              }}
            >
              Create New Campaign
            </Typography>
            <Box sx={{marginBottom: "35px"}}>
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
                New Campaign Name
              </Typography>
              <InputField placeholder="Enter New Campaign Name" />
            </Box>
            <Box sx={{marginTop: "25px !important"}}>
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
                Description
              </Typography>
              <InputField placeholder="Enter Description" />
            </Box>
            <Box display="flex" justifyContent="end">
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
                }
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