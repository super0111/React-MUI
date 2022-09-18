
import { Container, Typography, Box, Button, } from "@mui/material"

const HelpCenterArticleBody = () => {
  return (
    <Box sx={{}}>
      <Typography sx={{
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "17px",
        color: "#6D6D6D",
      }}>
        Help Center/ Getting Started / Article 1 
      </Typography>
      <Box sx={{
        marginTop: "18px",
        padding: "43px 46px",
      }}>
        <Typography sx={{
          fontFamily: 'Inter',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "39px",
          color: "#000000;",
        }}>
          Article 1 
        </Typography>

        <Typography sx={{
          fontFamily: 'Inter',
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "15px",
          color: "#000000",
          marginTop: "24px",
        }}>
          asdfasdf
        </Typography>

        <img src="asdf" style={{width: "100%"}} />
      </Box>
    </Box>  
  )
}

export default HelpCenterArticleBody