import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Box, Typography } from '@mui/material';
import Slider from "../components/Slider";

const items = [
  { text: "Companies Processed", process: "80%", count: "400/500" },
  { text: "Campaign Slots", process: "90%", count: "2/3" },
  { text: "Storage Usage", process: "50%", count: "250/500" },
]

const DashboardApp = () => {
  return (
    <Box sx={{background: "#F5F5F5",}}>
      <Container>
        <Box sx={{
          padding: "150px 80px 100px 80px !important",
          ['@media (max-width:992px)']: { // eslint-disable-line no-useless-computed-key 
            padding: "120px 10px 70px 10px!important",
          }
        }}>
          <TableContainer component={Paper} 
            sx={{ 
              boxShadow: "none",
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          >
            <Table sx={{}} aria-label="simple table">
              <TableHead>
                <TableRow sx={{background: "#388E3C"}}>
                  <TableCell sx={{padding: "5px", color: "white", width: "25%" }} align="center">Campaign</TableCell>
                  <TableCell sx={{padding: "5px", color: "white", width: "25%" }} align="center">Queries</TableCell>
                  <TableCell sx={{padding: "5px", color: "white", width: "25%" }} align="center">Companies Found</TableCell>
                  <TableCell sx={{padding: "5px", color: "white", width: "25%" }} align="center">Contacts Found</TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{backgroundColor: "white"}}>
                  <TableRow>
                    <TableCell sx={{borderRight: "1px solid #A6A6A6", padding: "20px 0"}} align="center"></TableCell>
                    <TableCell sx={{borderRight: "1px solid #A6A6A6", padding: "20px 0"}} align="center"></TableCell>
                    <TableCell sx={{borderRight: "1px solid #A6A6A6", padding: "20px 0"}} align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{borderRight: "1px solid #A6A6A6", padding: "20px 0"}} align="center"></TableCell>
                    <TableCell sx={{borderRight: "1px solid #A6A6A6", padding: "20px 0"}} align="center"></TableCell>
                    <TableCell sx={{borderRight: "1px solid #A6A6A6", padding: "20px 0"}} align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{borderRight: "1px solid #A6A6A6", padding: "20px 0"}} align="center"></TableCell>
                    <TableCell sx={{borderRight: "1px solid #A6A6A6", padding: "20px 0"}} align="center"></TableCell>
                    <TableCell sx={{borderRight: "1px solid #A6A6A6", padding: "20px 0"}} align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          { items.map((item, i)=>(
              <Box key={i} sx={{
                position: "relative",
                height: "140px",
                background: "#FFFFFF",
                borderRadius: "15px !important",  
                padding: "20px 45px !important",
                margin: "20px 0 !important"
              }}>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "#388E3C",
                    marginBottom: "15px"
                  }}
                >
                  {item.text}
                </Typography>
                <Box sx={{
                  width: `${item.process}`,
                  height: "25px",
                  background: "#388E3C",
                  borderRadius: "18px",
                }}></Box>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineGeight: "19px",
                    color: "#6D6D6D",
                    position: "absolute",
                    bottom: "10px",
                    right: "15px",
                }}>
                  {item.count}
                </Typography>
              </Box>
            ))
          }
        </Box>
      </Container>
    </Box>
  )
}

const TitleField = () => {
  return (
    <Box>
      <img src='/assets/dashboard/Vector (7).png' style={{width: "25px", height: "25px", margin: "0 15px 6px 0px"}} />
      Dashboard
    </Box>
  )
}
const textField = "An overview of all of your campaigns and previous activity rolled up into a single view";

const Dashboard = () => {
  return (
    <Slider Component={DashboardApp} TitleField={TitleField} textField={textField} />
  )
}

export default Dashboard