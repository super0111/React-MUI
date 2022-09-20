// import { useState } from "react";
// import { Link } from "react-router-dom";

import { Box, Typography, Button, styled, Grid } from "@mui/material";
import { Navbar, Footer } from "../../components";

import { Landing, Categories, HowTo, Features, Customers } from './'
const Section = styled(Box)(({ theme }) => ({
  paddingTop: 60,
  paddingBottom: 60,
  [theme.breakpoints.up('md')]: {
    paddingLeft: 130,
    paddingRight: 130,
  },
  [theme.breakpoints.down('md')]: {
    paddingLeft: 48,
    paddingRight: 48,
  },
}))
export const LandingPage = () => {
  // const initialIndustries = ['Real Estate', 'Healthcare', 'Retail', 'Hospitality', 'Education']
  // const nextIndustries = ['Manufacturing', 'Engineering', 'VMS', 'Software', 'Professional Services']
  // const [industries, setIndustries] = useState(initialIndustries);

  // const loadPreviousIndustries = (event) => {
  //   document.getElementsByClassName('industries-div')[0].classList.remove(['next-data']);
  //   setIndustries(initialIndustries)
  // }

  // const loadNextIndustries = (event) => {
  //   document.getElementsByClassName('industries-div')[0].classList.add(['next-data']);
  //   setIndustries(nextIndustries)
  // }

  return (
    <>
      <div className="landing-page-div">
        <Navbar currentPage="home" />
        <Box mt={14}>
          <Section sx={{
            backgroundImage: `url(/assets/ellipse-38.svg)`,
            backgroundSize: "cover",
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
              paddingLeft: "20px !important",
              paddingRight: "20px !important",
            },
          }}>
            <Landing />
          </Section>
          <Section sx={{
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                padding: "20px 45px 20px 30px !important",
            },
        }}>
            <Categories />
          </Section>
          <Section px={`0 !important`}>
            <Features />
          </Section>
          <Section sx={{
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                padding: "20px !important",
            },
        }}>
            <HowTo />
          </Section>
          <Section sx={{
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                padding: "0px 20px 0 20px !important",
            },
        }}>
            <Customers />
          </Section>
          <Section sx={{
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
              padding: "30px 20px !important",
            },
          }}>
            <Box px={{ md: 20, xs: 0 }}>
              <Grid container spacing={5}>
                <Grid item md={12} lg={6}
                  sx={{
                    ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                      paddingTop: "0px !important" 
                    },
                  }}
                >
                  <Box display="flex" justifyContent={{ md: 'center', xs: 'start' }}>
                    <Typography variant='h4' 
                      sx={{ 
                        fontSize: 36, maxWidth: 430, 
                        ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                          fontSize: "25px", maxWidth: "100%", 
                        },
                      }}>
                      Get up and running in less than 2 minutes.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={12} lg={6}>
                  <Box display="flex" justifyContent={{ md: 'center', xs: 'start' }}>
                    <Button variant="secondary" sx={{
                      '&:hover': {
                        background: "#377d3a",
                      }
                    }}>Get Started for Free</Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Section>
        </Box>
        <Footer />
      </div>
    </>
  );
};
