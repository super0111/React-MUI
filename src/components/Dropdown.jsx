import * as React from "react";
import { useNavigate } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";


const Dropdown = ({ currentPage }) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeColor = (ref) => {
    if (ref.getAttribute("id") === currentPage) {
      ref.style.color = "#388E3C"
      ref.style.backgroundColor = "#19d27014"
    }
  };

  const changeLocation = React.useCallback((callerID) => {
    navigate(`/${callerID}`);
  }, [navigate]);

  return (
    <>
      <Button
        id="resources"
        aria-controls={open ? "resources-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#fff", mr: 0.4, ":hover": { color: "#388E3C", bgcolor: "#19d27014" } }}
        ref={(ref) => { if (ref) changeColor(ref); }}
      >
        Resources
      </Button>
      <Menu
        sx={{background: "whtie !important"}}
        id="resources-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "resources",
        }}
      >
        <MenuItem onClick={handleClose} sx={{ ":hover": { bgcolor: "#fff" } }}>
          <Button sx={{ color: "#000", ":hover": { color: "#388E3C", bgcolor: "#fff" } }} onClick={() => { changeLocation('help-center') }}>Help Center</Button>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ ":hover": { bgcolor: "#fff" } }}>
          <Button sx={{ color: "#000", ":hover": { color: "#388E3C", bgcolor: "#fff" } }} onClick={() => { changeLocation('contact-us') }}>Contact Us</Button>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Dropdown