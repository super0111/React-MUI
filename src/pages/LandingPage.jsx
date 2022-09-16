import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import { Navbar, Footer } from "../components";

import "../assets/styles/LandingPage.css";

export const LandingPage = () => {
  const initialIndustries = ['Real Estate', 'Healthcare', 'Retail', 'Hospitality', 'Education']
  const nextIndustries = ['Manufacturing', 'Engineering', 'VMS', 'Software', 'Professional Services']
  const [industries, setIndustries] = useState(initialIndustries);

  const loadPreviousIndustries = (event) => {
    document.getElementsByClassName('industries-div')[0].classList.remove(['next-data']);
    setIndustries(initialIndustries)
  }

  const loadNextIndustries = (event) => {
    document.getElementsByClassName('industries-div')[0].classList.add(['next-data']);
    setIndustries(nextIndustries)
  }

  return (
    <>
      <div className="landing-page-div">
        <Navbar currentPage="home" />
          
        <Footer />
      </div>
    </>
  );
};
