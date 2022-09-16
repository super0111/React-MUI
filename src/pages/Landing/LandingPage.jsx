// import { useState } from "react";
// import { Link } from "react-router-dom";

import { Box, Typography, Button, styled } from "@mui/material";
import { Navbar, Footer } from "../../components";

import { Landing, Categories, HowTo, Features, Customers } from './'
const Section = styled(Box)(() => ({
  py: 5,
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
        <Box mt={14} p={20}>
          <Section>
            <Landing />
          </Section>
          <Section>
            <Categories />
          </Section>
          <Section>
            <Features />
          </Section>
          <Section>
            <HowTo />
          </Section>
          <Section>
            <Customers />
          </Section>
          <Section></Section>
        </Box>
        <Footer />
      </div>
    </>
  );
};
