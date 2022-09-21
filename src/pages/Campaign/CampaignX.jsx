import * as React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

import Slider from "../../components/Slider";

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

const contactLists = [
  { text: "Job Titles of Interest", type: "", placeholder: "Enter Job Titles of Interest" },
  { text: "Job Titles NOT of Interest", type: "Optional", placeholder: "Enter Job Titles NOT of Interest" },
  { text: "Senority of Interest", type: "Optional", placeholder: "Enter Senority Titles of Interest" },
  { text: "Number of Years in Company (greater than)", type: "Optional", placeholder: "Enter Number" },
  { text: "Number of Years in Role (greater than)", type: "Optional", placeholder: "Enter Number" },
]

const CampaignXApp = () => {
  return (
    <Box sx={{background: "#F5F5F5", height: "100vh"}}>
      <Container sx={{
        padding: "130px 60px 100px 60px !important",
        ['@media (max-width:684px)']: { // eslint-disable-line no-useless-computed-key 
          padding: "80px 20px 100px 20px!important",
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
                lineHeight: "24px",
                textDecorationLine: "underline",
                color: "#191A15",
              }}
            >
              Contact List Upload Tool 
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "24px",
                textDecorationLine: "underline",
                color: "#388E3C",
                margin: "15px 0 0 0 !important",
              }}
            >
              Target Audience Characteristics of Interest
            </Typography>

            { contactLists.map((item, i)=>(
              <Box sx={{marginTop: "16px !important"}}>
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#191A15",
                      marginBottom: "9px !important"
                    }}
                  >
                    {item.text}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#191A15",
                      marginBottom: "9px !important"
                    }}
                  >
                    {item.type}
                  </Typography>
                </Box>
                <InputField placeholder={`${item.placeholder}`} />
              </Box>
            ))}

            <Box sx={{marginTop: "16px !important"}}>
              <Box display="flex" justifyContent="space-between">
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "#388E3C",
                    marginBottom: "9px !important"
                  }}
                >
                  Filtered Results File Name
                </Typography>
              </Box>
              <InputField placeholder='file_name' />
            </Box>


            <Typography sx={{
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "24px",
              color: "#388E3C",
              marginTop: "35px",
            }}>
              Upload Input File (see formatting)
            </Typography>
            <Box sx={{
                width: "406px",
                height: "97px",
                border: "1px solid #388E3C",
                borderRadius: "32px",
                display: "flex",
                alignItems: "center",
                padding: "18px 36px !important",
                ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key 
                  width: "100%"
                }
              }}>
                <Box display="flex" justifyContent="center" alignItems="center" 
                  sx={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "#388E3C",
                    cursor: "pointer"
                  }}
                >
                  <img style={{width: "25px", height: "25px"}} src="/assets/dashboard/+.png" />
                </Box>
                <Typography sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "24px",
                  color: "#191A15",
                  marginLeft: '16px',
                }}>
                  Upload your .csv file here
                </Typography>
              </Box>

              <Box sx={{
                display: "flex",
                justifyContent: "end",
              }}>
                <Button sx={{
                  width: "142px",
                  height: "40px",
                  background: "#388E3C",
                  borderRadius: "12px",
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#F8F8FA",
                  '&:hover': {
                    background: "#4da651"
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
      <img src='/assets/dashboard/Color-Vector (3).png' style={{width: "38px", height: "25px", margin: "0 15px 6px 0px"}} />
      Campaign X
    </Box>
  )
}
const textField = "A collection of your result files and additional tools for a specific target audience";

const CampaignX = () => {
  return (
    <Slider Component={CampaignXApp} TitleField={TitleField} textField={textField} />
  )
}

export default CampaignX