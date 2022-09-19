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
          <Section>
            <Landing />
          </Section>
          <Section sx={{
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                paddingTop: "20px !important",
                paddingBottom: "20px !important",
            },
        }}>
            <Categories />
          </Section>
          <Section px={`0 !important`}>
            <Features />
          </Section>
          <Section sx={{
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                paddingTop: "20px !important",
                paddingBottom: "20px !important",
            },
        }}>
            <HowTo />
          </Section>
          <Section sx={{
            ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
                paddingTop: "0px !important",
                paddingBottom: "0px !important",
            },
        }}>
            <Customers />
          </Section>
          <Section>
            <Box px={{ md: 20, xs: 0 }}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}
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
                <Grid item xs={12} md={6}>
                  <Box display="flex" justifyContent={{ md: 'center', xs: 'start' }}>
                    <Button variant="secondary" sx={{
                      '&:hover': {
                        background: "#57b95b"
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
