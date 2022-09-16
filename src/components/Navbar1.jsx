import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
  
import { 
  Container,
  AppBar, 
  Box, 
  Divider, 
  IconButton, 
  Drawer,  
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Toolbar, 
  Typography, 
  Button 
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/logo.png";
import "../assets/styles/Navbar.css";
import { Dropdown } from "."

const drawerWidth = 240;
const navItems = ["Home", "About us", "Resources", "Pricing"];

export const Navbar = ({ currentPage, window }) => {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [show, setShow] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setShow(false);
        } else { // if scroll up show the navbar
          setShow(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const changeLocation = React.useCallback((callerID) => {
    navigate(`/${callerID}`);
  }, [navigate]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        enablemint
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            if (item === "Resources") {<Dropdown />}else
            {
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            }
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* className={`active ${show && 'hidden'}`} */}
      <Box Container sx={{ zIndex: 7898 }}>
          <AppBar
            component="nav"
            sx={{ height: 110, display: "flex", bgcolor: "#161C28" }}
            style={{ "justifyContent": "center" }}
          >
            <Container>

              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>

                <Link to="/">
                  <Box
                    component="img"
                    sx={{ height: 78, width: 78, ml: 17 }}
                    alt="EnableMint Logo"
                    src={logo}
                  />
                </Link>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", sm: "block" },
                    fontSize: 24,
                  }}
                >
                  <Link to="/"
                    sx={{
                      textDecoration: "none",
                      color: "white"
                    }}
                  >enablemint</Link>
                </Typography>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  {navItems.map((item) => getNavItem(item))}
                </Box>
                <Box
                  sx={{ mr: 5, ml: 5, display: { xs: "none", sm: "block" } }}
                ></Box>
                <Box sx={{ display: "flex" }} style={{ "justifyContent": "center" }}>
                  <Button
                    sx={{ color: "#fff", mr: 1, ":hover": { color: "#388E3C", bgcolor: "#19d27014" } }}
                    onClick={() => { changeLocation('login') }}
                  >
                    Login
                  </Button>
                  <Button
                    sx={{
                      mr: 16.3,
                      borderRadius: 1,
                      color: "#fff",
                      bgcolor: "#388E3C",
                      ":hover": { bgcolor: "#1E5620" },
                    }}
                    onClick={() => { changeLocation('signup') }}
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
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
      </Box>
    </>
  );
};
