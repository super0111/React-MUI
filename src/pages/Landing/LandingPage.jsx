// import { useState } from "react";
// import { Link } from "react-router-dom";

import { Box, Typography, Button, styled, Grid } from "@mui/material";
import { Navbar, Footer } from "../../components";

import { Landing, Categories, HowTo, Features, Customers } from './'
const Section = styled(Box)(({ theme }) => ({
  paddingTop: 60,
  paddingBottom: 60,
  [theme.breakpoints.up('md')]: {
    paddingLeft: 120,
    paddingRight: 120,
  },
  [theme.breakpoints.down('md')]: {
    paddingLeft: 20,
    paddingRight: 20,
  }
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
          <Section>
            <Categories />
          </Section>
          <Section px={`0 !important`}>
            <Features />
          </Section>
          <Section>
            <HowTo />
          </Section>
          <Section>
            <Customers />
          </Section>
          <Section>
            <Box px={{ md: 20, xs: 0 }}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <Box display="flex" justifyContent="center">
                    <Typography variant='h4' sx={{ fontSize: 36, maxWidth: 400 }}>
                      Get up and running in less than 2 minutes.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box display="flex" justifyContent="center">
                    <Button variant="secondary">Get Started for Free</Button>
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
