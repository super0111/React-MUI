import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { Container, AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 200;
const navItems = ['About us', 'Resources', 'Pricing'];

const Navbar = (props) => {
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        enablemint
      </Typography>
      <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
         
        </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
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
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
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
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              ))}
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
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
