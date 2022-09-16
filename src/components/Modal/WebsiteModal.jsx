import * as React from 'react';
import { Backdrop, Box, Button, Modal, Fade, Typography } from '@mui/material';
import { BiChevronLeft } from "react-icons/bi";

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  width: "60%",
  height: "640px",
  overflowY: "scroll",
  background: "#FFFFFF",
  borderRadius: "24px",
  padding: "20px 45px",
};

const items = [
  { text: "LinkedIn Cookie 1", },
  { text: "LinkedIn Cookie 2", },
  { text: "LinkedIn Cookie 3", },
]

const websiteModal = ({ websiteModal, setWebsiteModal }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={websiteModal}
      onClose={()=>setWebsiteModal(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 700,
      }}
    >
      <Fade in={websiteModal}>
        <Box sx={style}>
          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "29px",
            textDecorationLine: "underline",
            color: "#191A15",
            marginBottom: "9px"
          }}>
            New Workflow Set Up (Company Website URLs)
          </Typography>
          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "24px",
            color: " #388E3C",
            margin: "20px 0 0px 0"
          }}>
            Connecting to LinkedIn (need help?)
          </Typography>

          { items.map((item, i)=>(
            <Box key={i} sx={{margin: "12px 0 20px 0 !important"}}>
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
                {item.text}
              </Typography>
              <InputField placeholder="Enter Description" />
            </Box>
          ))}
          <Box sx={{display: "flex", alignItems: "center", margin: "20px 0 0px 0",}}>
            <Typography sx={{
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "24px",
              color: " #388E3C",
            }}>
              Automation Settings 
            </Typography>
            <Typography sx={{ 
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "24px",
              color: " #388E3C",
              textDecoration: "underline", 
            }}>
              (need help?)
            </Typography>
          </Box>
          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "19px",
            background: "rgba(56, 142, 60, 0.75)",
            borderRadius: "10px",
            padding: "12px 43px",
            color: "#FFFFFF",
            margin: "20px 0 0px 0"
          }}>
            There is a limit to how much you can automate on LinkedIn (see more)
            It is reccomended that you process ~40 Companies with <BiChevronLeft /> 500 employees per day. If you exceed this amount you will have to update your LinkedIn Cookie Session more frequently.
          </Typography>
    
          <Box sx={{margin: "12px 0 20px 0 !important"}}>
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
              Campaign Mapping
            </Typography>
            <InputField placeholder="Enter Number" />
          </Box>

          <Box sx={{margin: "12px 0 20px 0 !important"}}>
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
              Campaign Mapping
            </Typography>
            <InputField placeholder="DROPDOWN OF LIST OF CAMPAIGNS + new (will automatically make new campaign)" />
          </Box>

          <Box sx={{margin: "12px 0 20px 0 !important"}}>
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
              Launch Schedule
            </Typography>
            <Box sx={{display: "flex",}}>
              <Button sx={{
                background: "#FFFFFF",
                borderRadius: "24px",
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: '#A6A6A6',
                marginRight: "12px"
              }}>
                Once
              </Button>
              <Button sx={{
                background: "#FFFFFF",
                borderRadius: "24px",
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: '#A6A6A6',
                marginRight: "12px"
              }}>
                Manually
              </Button>
              <Button sx={{
                background: "#388E3C",
                border: "1px solid #388E3C",
                borderRadius: "32px",
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: '#FFFFFF',
              }}>
                Daily
              </Button>
            </Box>
          </Box>
            
          <Box sx={{display: "flex",}}>
            <Button sx={{
              background: "#388E3C",
              border: "1px solid #388E3C",
              borderRadius: "32px",
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
              color: '#FFFFFF',
            }}>
              Cookie Expiry
            </Button>
            <Button sx={{
              background: "#FFFFFF",
              borderRadius: "24px",
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19px",
              color: '#A6A6A6',
              marginRight: "12px"
            }}>
              None
            </Button>
          </Box>

          <Box sx={{display: "flex", alignItems: "center", margin: "20px 0 0px 0",}}>
            <Typography sx={{
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "24px",
              color: " #388E3C",
            }}>
              Upload Input File (see formatting) 
            </Typography>

            <Box sx={{
              display: "flex",
              justifyContent: "space-between",
            }}>
              <Box sx={{
                border: "1px solid #388E3C",
                borderRadius: "32px",
                display: "flex",
                alignItems: "center"
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
                }}>
                  Upload your .csv file here
                </Typography>
              </Box>
              <Button sx={{
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
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}

export default websiteModal