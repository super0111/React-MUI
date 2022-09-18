import { Outlet } from "react-router-dom";
import { Container, Typography, Box, Button, Accordion } from "@mui/material"
import { styled } from '@mui/system';

import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import { Navbar } from "../../components";
import { useState } from "react";

const SearchField = styled('input')({
  width: '100%',
  height: "50px",
  background: "#FFFFFF",
  borderRadius: "10px",
  padding: "15px 20px",
  fontFamily: 'Inter',
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "17px",
  color: "#A6A6A6",
  border: "none", 
  outline: "none",
});

const routers = [
  { route: "Getting Started", articles: [ {text: "Article1"}, {text: "Article2"}, {text: "Article3"}, {text: "Article4"}, {text: "Article5"}, {text: "Article6"},] },
  { route: "Tutorials", articles: [ {text: "Article1"}, {text: "Article2"}, {text: "Article3"}, {text: "Article4"}, {text: "Article5"}, {text: "Article6"},] },
  { route: "Billing", articles: [ {text: "Article1"}, {text: "Article2"}, {text: "Article3"}, {text: "Article4"} ] },
  { route: "Account", articles: [ {text: "Article1"}, {text: "Article2"}, {text: "Article3"} ] },
]

const HelpCenterArticle = () => {
  const [ currentSelect, setCurrentSelect ] = useState(0);

  const handleSelect = (index) => {
    if (index === currentSelect) setCurrentSelect(1000)
    else setCurrentSelect(index)
  }

  return (
    <>
      <Navbar currentPage="Help Center Article" />
      <Container sx={{
        padding: "150px 0",
        position: 'relative'
      }}>
        <Typography sx={{
          fontFamily: 'Inter',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "60px",
          textAlign: "center",
          color: "#191A15",
          marginBottom: "55px",
        }}>
          Welcome to Help Center
        </Typography>
        <Box sx={{
          position: "relative",
          width: '60%',
          margin: 'auto !important',
        }}>
          <SearchField placeholder="What can we help you with today?" />
          <Button sx={{
            width: "80px",
            height: "40px",
            background: "#388E3C",
            borderRadius: "10px",
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#F8F8FA",
            position: "absolute",
            right: "5px",
            bottom: "5px",
            '&:hover': {
              background: "#388E3C",
            }
          }}>
            Search
          </Button>
        </Box>

        <Box sx={{
          position: "absolute",
          left: '10px',
          marginTop: "55px"
        }}>
          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#388E3C",
            marginBottom: "12px",
          }}>
            What is enablemint?
          </Typography>

          { routers.map((item, i)=>(
            <Box key={i} sx={{}}>
              <Box display="flex" justifyContent="space-between" alignItems="center"
                sx={{cursor: 'pointer'}}
                onClick={()=>handleSelect(i)}
              >
                { currentSelect === i ?
                  <BiChevronUp size={25} /> : <BiChevronDown size={25} />
                }
                
                <Typography sx={{
                  width: '80%',
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#000000",
                  textAlign: "start",
                  margin: "12px 0"
                }}>
                  {item.route}
                </Typography>

              </Box>
              { currentSelect === i &&
                <Box sx={{
                  margin: "-15px 0 0 45px",
                }}>
                  { item.articles.map((item, i)=>(
                    <Typography key={i} sx={{
                      fontFamily: 'Inter',
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "17px",
                      color: "#6D6D6D",
                      margin: "14px 0",
                      cursor: "pointer",
                    }}>
                      {item.text}
                    </Typography>
                  )) }
                </Box>
              }
            </Box>
          )) }
        </Box>
        <Box sx={{
          width: '60%'
        }}>
          <Outlet />
        </Box>
      </Container>
    </>
  )
}

export default HelpCenterArticle