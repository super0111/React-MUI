import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import jwt_decode from "jwt-decode";
import Moment from 'moment';
import Slider from "../components/Slider";
import config from '../config';
import LinkedInModal from '../components/Modal/LinkedInModal';
import WebsiteModal from '../components/Modal/WebsiteModal';

const UploadFileApp = () => {
  const [ email, setEmail ] = useState("");
  const [websiteModal, setWebsiteModal] = useState(false);
  const [linkedInModal, setLinkedInModal] = useState(false);
  const [workFlowWebsites, setWorkFlowWebsites] = useState([]);

  useEffect(()=>{
    const token = localStorage.getItem("token");
    const current_user = jwt_decode(token);
    setEmail(current_user.email);
  }, [])

  useEffect( () => {
    const fetchPosts = async () => {
      const res = await fetch(`${config.server_url}api/dashboardRoutes/getUploadWebsite/${email}`);
      const data = await res.json();
      setWorkFlowWebsites(data);
    };
    fetchPosts();
  }, [email]);

  console.log("workFlowWebsites", workFlowWebsites)
  
  return (
    <Box sx={{
      backgroundImage: `url(/assets/Header_Bg.png)`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      paddingBottom: "70px !important",
    }}>
      <Container sx={{
        padding: "0 60px !important",
        ['@media (max-width:684px)']: { // eslint-disable-line no-useless-computed-key 
          padding: "0px 20px !important",
        }
      }}>
        <Box sx={{
          padding: "130px 0px 60px 0px !important",
          display: "flex",
          justifyContent: "space-between",
          ['@media (max-width:576px)']: { // eslint-disable-line no-useless-computed-key 
            flexDirection: "column"
          }
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: '49%', sm: '49%', md: "40%" },
            background: "#FFFFFF",
            borderRadius: "15px !important",
            padding: { md: "50px 45px !important", sm: "40px 15px!important" },
            ['@media (max-width:576px)']: { // eslint-disable-line no-useless-computed-key 
              width: "100%",
              padding: "40px 15px!important",
            }
          }}>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#388E3C",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              Company Website URLs
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineGeight: "19px",
                color: "#191A15",
            }}>
              Drop your file
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" 
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#388E3C",
                cursor: "pointer"
              }}
              onClick={()=>setWebsiteModal(true)}
            >
              <Box component="img" sx={{width: "25px", height: "25px", margin: "0 !important"}} src="/assets/dashboard/+.png" />
            </Box>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: '49%', sm: '49%', md: "40%" },
            background: "#FFFFFF",
            borderRadius: "15px !important",
            padding: { md: "50px 45px !important", sm: "40px 15px!important", xs: "40px 15px!important" },
            ['@media (max-width:576px)']: { // eslint-disable-line no-useless-computed-key 
              width: "100%",
              padding: "40px 15px!important",
            }
          }}>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#388E3C",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              Company LinkedIn URLs
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineGeight: "19px",
                color: "#191A15",
            }}>
              Drop your file
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" 
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#388E3C",
                cursor: "pointer"
              }}
              onClick={()=>setLinkedInModal(true)}
            >
              <img style={{width: "25px", height: "25px"}} src="/assets/dashboard/+.png" />
            </Box>
          </Box>
        </Box>

        <TableContainer component={Paper} 
            sx={{ 
              boxShadow: "none",
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          >
            <Table sx={{ }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{background: "#388E3C"}}>
                  <TableCell sx={{padding: "5px", color: "white", width: "12%" }} align="center">Queries</TableCell>
                  <TableCell sx={{padding: "5px 0 5px 20px", color: "white", width: "25%" }} align="left">File Name</TableCell>
                  <TableCell sx={{padding: "5px", color: "white", width: "12%" }} align="center">Scrape per day</TableCell>
                  <TableCell sx={{padding: "5px", color: "white", width: "12%" }} align="center">Date Uploaded</TableCell>
                  <TableCell sx={{padding: "5px", color: "white", width: "12%" }} align="center">Campaign</TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{backgroundColor: "white"}}>
                {
                  workFlowWebsites.map((item, i)=>(
                    <TableRow key={i}>
                      <TableCell sx={{borderRight: "1px solid #A6A6A6", padding: "20px 0"}} align="center"></TableCell>
                      <TableCell sx={{borderRight: "1px solid #A6A6A6", padding: "20px 0"}} align="center">{item.fileName}</TableCell>
                      <TableCell sx={{borderRight: "1px solid #A6A6A6", padding: "20px 0"}} align="center">{item.comapnyNumber}</TableCell>
                      <TableCell sx={{borderRight: "1px solid #A6A6A6", padding: "20px 0"}} align="center">{Moment(item.update_date).format('YYYY-MM-DD HH:mm')}</TableCell>
                      <TableCell align="center">{item.comapnyMapping}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
        </TableContainer>
      </Container>
      <WebsiteModal  websiteModal={websiteModal} setWebsiteModal={setWebsiteModal} workFlowWebsites={workFlowWebsites} setWorkFlowWebsites={setWorkFlowWebsites}/>
      <LinkedInModal linkedInModal={linkedInModal} setLinkedInModal={setLinkedInModal} workFlowWebsites={workFlowWebsites} setWorkFlowWebsites={setWorkFlowWebsites}/>
    </Box>
  )
}

const TitleField = () => {
  return (
    <Box>
      <img src='/assets/dashboard/Color-Vector.png' style={{width: "38px", height: "25px", margin: "0 15px 6px 0px"}} />
      Upload Tool
    </Box>
  )
}
const textField = "Easily upload a single input and set up your automation preferences to activate our workflows";


const UploadFile = () => {
  return (
    <Slider Component={UploadFileApp} TitleField={TitleField} textField={textField} />
  )
}

export default UploadFile