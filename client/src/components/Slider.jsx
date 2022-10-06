import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';

import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const Slider = (props) => {
  const {Component, TitleField, textField} = props;
  const navigate = useNavigate()
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [active, setActive] = useState(['/dashboard', '/uploadFile',].indexOf(location.pathname));
  const [isCampaignShow, setIsCampaignShow] = useState(true);
  const matches = useMediaQuery('(min-width:685px)');

  const handleActive = (index) => {
    setActive(index);
  }

  useEffect(() => {
    setOpen(matches);
  }, [matches])
  useEffect(() => {
    if(open===false)
    setIsCampaignShow(false)
  }, [open])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/logout");
  }

  return (
    <Box 
      className='slider' 
      sx={{ 
        display: 'flex',
        "& .MuiBox-root": {
          padding: 0,
          margin: "10px 0 0 0",
        }
      }}
    >
      <AppBar 
        position="fixed" 
        open={open}
        sx={{
          backgroundColor: open === true ? "white" : "#161C28",
          boxShadow: "none !important",
          height: "80px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
            <Box display="flex" flexDirection="column" sx={{ width: "100%" }}>
              <Typography
                variant="h6" 
                noWrap 
                component="div"
                sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "30px",
                  lineHeight: "30px",
                  color: open===true ? '#161C28' : 'white',
                }}
              >
                <TitleField />
              </Typography>
              <Typography
                variant="h6" 
                noWrap 
                component="div"
                sx={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: open===true ? '#000000' : 'white',
                  marginLeft: "50px"
                }}
              >
                {textField}
              </Typography>
            </Box>
        </Toolbar>
      </AppBar>

      <Drawer 
        variant="permanent" 
        open={open}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#161C28",
          }
        }}
      >
        <DrawerHeader
          sx={{
            padding: "20px 0 10px 0",
            position: "relative"
          }}
        >
          <div 
            className={
              `${open === true ? "d-flex flex-column aign-items-center m-auto" 
              : "d-flex flex-column aign-items-center m-auto pt-4 mt-5"}`
            }
            onClick={()=>navigate("/")}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ color: 'white', cursor: "pointer"}}
            >
              <img src="/assets/logo-1@2x.png" alt='logo' style={{ width: open === true ? "50px" : "45px", marginRight: open? "5px" : "0px",}} />
              { open === true && "enablemint" }
            </Typography>
          </div>
          {
            open === true ?
            <div className='draw_icon_field'>
              <IconButton className='draw_icon' onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon className='text-white'/> : <ChevronLeftIcon className='text-white'/>}
              </IconButton>
            </div>
            : ""
          }
        </DrawerHeader>

        <Box display="flex" flexDirection="column" justifyContent="space-between" sx={{height: "100vh"}}>
          <List sx={
            open === true && { paddingLeft: "10px" }}>
            {['Dashboard', 'Upload my file',].map((text, index) => (
              <>
                <ListItem 
                  id={`nav-${index}`}
                  key={index}
                  sx={
                    active === index &&
                    {
                      backgroundColor: "#131926",
                    }
                  }
                  className={`${active === index ? 'nav-active' : ''}`}
                  disablePadding 
                  button
                  onClick={() => {
                    handleActive(index);
                    navigate(['/dashboard', '/uploadfile',].filter((url, j)=>(  
                      index === j
                    )).join(''));
                  }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 40,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      color: "white"
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {
                        [ <img style={{width: "20px"}} src='/assets/dashboard/Vector.png' />, <img style={{width: "20px"}} src='/assets/dashboard/Vector (1).png' />].map((icon, i) => (
                          index === i && icon
                        ))
                      }
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </>
            ))}
            <ListItem 
              disablePadding 
              button
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <ListItemButton
                sx={{
                  width: "100%",
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  color: "white"
                }}
                onClick={()=>setIsCampaignShow(!isCampaignShow)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {
                    <img style={{width: "20px"}} src='/assets/dashboard/Megaphone.png' />
                  }
                </ListItemIcon>
                <ListItemText primary="Campaigns" sx={{ opacity: open ? 1 : 0 }} />
                { isCampaignShow===true ? <BiChevronUp /> : <BiChevronDown /> }
              </ListItemButton>
              {
                isCampaignShow === true ?
                <Box sx={{}}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "15px",
                      lineHeight: "16px",
                      color: "#FFFFFF",
                      marginBottom: "15px",
                    }}
                    onClick={()=>navigate("/newCampaign")}
                  >
                    <img src="/assets/dashboard/Vector (2).png" style={{width: "15px", marginRight: "10px",}} />
                    New campaign
                  </Typography>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "16px",
                      color: "#FFFFFF",
                      margin: "10px 0 10px 30px",
                    }}
                    onClick={()=>navigate("/campaignA")}
                  >
                    Campaign A
                  </Typography>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "16px",
                      color: "#FFFFFF",
                      margin: "10px 0 10px 30px",
                    }}
                    onClick={()=>navigate("/campaignB")}
                  >
                    Campaign B
                  </Typography>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "16px",
                      color: "#FFFFFF",
                      margin: "10px 0 10px 30px",
                    }}
                    onClick={()=>navigate("/campaignX")}
                  >
                    Campaign X
                  </Typography>
                </Box>
                : ""
              }
            </ListItem>
          </List>

          <List sx={
            open === true && { paddingLeft: "10px" }}>
            {['Feedback', 'My Account', 'Help Center'].map((text, index) => (
              <>
                <ListItem 
                  id={`nav-${index}`}
                  key={index}
                  className={`${active === index ? 'nav-active' : ''}`}
                  disablePadding 
                  button
                  onClick={() => {
                    handleActive(index);
                    navigate(['/feedback', '/myAccount', '/help-center'].filter((url, j)=>(  
                      index === j
                    )).join(''));
                  }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 40,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      color: "white"
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {[
                        <img style={{width: "20px"}} src='/assets/dashboard/Vector (3).png' />, 
                        <img style={{width: "20px"}} src='/assets/dashboard/Vector (4).png' />,
                        <img style={{width: "20px"}} src='/assets/dashboard/Vector (5).png' />,
                      ].map((icon, i) => (
                        index === i && icon
                      ))}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </>
            ))}
            <ListItem 
              disablePadding 
              button
            >
              <ListItemButton
                sx={{
                  width: "100%",
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  color: "white"
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "35px",
                    mr: open ? 0 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <img style={{width: "20px"}} src='/assets/dashboard/Vector (6).png' />
                </ListItemIcon>
                <ListItemText 
                  primary="Log Out" 
                  sx={{ opacity: open ? 1 : 0, marginLeft: open && "15px" }} 
                  onClick={handleLogout}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
        <Component />
      </Box>
    </Box>
  );
}

export default Slider
