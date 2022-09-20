import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { Container, AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Dropdown from "./Dropdown"

const drawerWidth = 160;
const navItems = ["Home", "About us", "Resources", "Pricing"];

const Navbar = (props) => {
  const { window, currentPage } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [resourcesShow, setResourcesShow] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const changeLocation = React.useCallback((callerID) => {
    navigate(`/${callerID}`);
  }, [navigate]);

  const changeColor = (ref) => {
    if (ref.getAttribute("id") === currentPage) {
      ref.style.color = "#388E3C"
      ref.style.backgroundColor = "#19d27014"
    }
  };

  const getNavItem = (item) => {
    const _item = item.toLowerCase().split(' ').join('-');
    if (item === "Resources") {
      return <Dropdown key={item} currentPage={currentPage} />;
    } else {
      return (
        <Button
          key={_item}
          id={_item}
          sx={{ mr: 0.4, color: "#fff", ":hover": { color: "#388E3C", bgcolor: "#19d27014" } }}
          ref={(ref) => { if (ref) changeColor(ref); }}
          onClick={() => { changeLocation(_item) }}
        >
          {item}
        </Button>
      );
    }
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography sx={{ fontSize: "25px", my: 2, color: "white", fontWeight: 700, marginTop: "30px" }}
        onClick={handleDrawerToggle}
      >
        Enablemint
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            { item === "Resources" ?
            <Box display="flex" flexDirection="column" justifyContent="start" sx={{width: "100%"}}>
              <ListItemButton sx={{ textAlign: "left", height: "40px", }} onClick={()=>setResourcesShow(!resourcesShow)}>
                <ListItemText primary="Resources" sx={{color: "white", fontSize: "15px !important"}} />
                { resourcesShow === true ? <BiChevronUp color='white' /> : <BiChevronDown color='white' /> }
              </ListItemButton>
              {
                resourcesShow && 
                <Box display="flex" flexDirection="column" 
                  sx={{marginTop: "-10px"}}
                >
                  <Button 
                    sx={{
                      marginLeft: "-30px",
                      color: "white",
                      fontSize: "14px !important",
                      fontWeight: 500,
                      marginBottom: "0px",
                    }}
                    onClick={()=>navigate("/help-center")}
                  >
                    Help Center
                  </Button>
                  <Button 
                    sx={{
                      marginLeft: "-30px",
                      color: "white",
                      fontSize: "14px !important",
                      fontWeight: 500,
                    }}
                    onClick={()=>navigate("/contact-us")}
                  >
                    Contact Us
                  </Button>
                </Box>
              }
            </Box>
            : 
              <ListItemButton sx={{ textAlign: "left", height: '40px' }}>
                <ListItemText primary={item} sx={{color: "white", fotnSize: '15px'}} />
              </ListItemButton>
            }
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', padding: "0 50px" }}>
      <AppBar component="nav"
        sx={{
          background: "#161C28",
        }}
      >
        <Container sx={{padding: "10px !important"}}>
          <Toolbar sx={{
              padding: "0px !important",
              ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key 
                display: "flex",
                justifyContent: "space-between"
              }
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: "white", cursor:"pointer" }}
              onClick={()=>navigate("/")}
            >
              <img src="/assets/logo-1@2x.png" alt='logo' style={{width: "55px", marginRight: "5px",}} />
              enablemint
            </Typography>
            <Box sx={{ 
                display: { xs: 'none', sm: 'block' }, 
                marginRight: "120px", 
                ['@media (max-width:680px)']: { // eslint-disable-line no-useless-computed-key 
                  marginRight: "0px", 
                }
              }}
            >
              {navItems.map((item) => getNavItem(item))}
            </Box>
            <Box>
              <Button sx={{ color: '#fff' }}
                onClick={()=>navigate("/login")}
              >
                Login
              </Button>
              <Button
                sx={{
                  width: "80px",
                  height: "40px",
                  background: "#388E3C",
                  borderRadius: "10px",
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: '#F8F8FA',
                  '&:hover': {
                    background: "#377d3a",
                  }
                }}
                onClick={()=>navigate("/signup")}
              >
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: "#161C28" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
