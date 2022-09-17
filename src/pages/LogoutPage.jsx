
import * as React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { Footer, Navbar } from "../components"

const LogoutPage = () => {
  return (
    <>
      <Navbar currentPage="logout" />
      <Box sx={{background: "#F5F5F5"}}>
        <Container sx={{
          padding: "150px 15px 60px 15px !important",
        }}>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" 
            sx={{ 
              width: "100%", margin: "auto !important"
            }}
          >
            <Typography sx={{
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "60px",
              wordBreak: "break-all",
              textAlign: "center",
              color: "#191A15;",
              marginBottom: "70px",
              ['@media (max-width:550px)']: { // eslint-disable-line no-useless-computed-key 
                fontSize: "30px",
              },
            }}>
              Sucessfully Logged Out!
            </Typography>
            <Box
              component="img"
              sx={{
                width: "40%",
                marginBottom: "100px",
                ['@media (max-width:550px)']: { // eslint-disable-line no-useless-computed-key 
                  width: "60%",
                },
              }}
              alt="Logout"
              src="/assets/dashboard/logout.png"
            />
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default LogoutPage