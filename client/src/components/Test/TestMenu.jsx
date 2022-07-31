import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { theme } from "../../theme";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button> */}
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon
          fontSize="small"
          sx={{
            // color: theme.palette.primary.main,
            color: theme.palette.text.primary,
          }}
        />
      </IconButton>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        <MenuItem>
          <IconButton
            sx={{
              backgroundColor: theme.palette.secondary.hover,
            }}
          >
            <RemoveRedEyeIcon
              fontSize="small"
              sx={{ color: theme.palette.secondary.main }}
            />
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton
            sx={{
              backgroundColor: theme.palette.active.bg,
            }}
          >
            <EditIcon
              fontSize="small"
              sx={{ color: theme.palette.active.main }}
            />
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton
            sx={{
              backgroundColor: theme.palette.error.bg,
            }}
          >
            <CloseIcon
              fontSize="small"
              sx={{ color: theme.palette.error.main }}
            />
          </IconButton>
        </MenuItem>
      </Menu>
    </div>
  );
}

{
  /* <MoreHorizIcon
          fontSize="small"
          sx={{
            // color: theme.palette.primary.main,
            color: theme.palette.background.default,
          }}
        /> */
}
