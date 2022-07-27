import React from "react";
import {
  ListItemIcon,
  ListItemText,
  Divider,
  List,
  Collapse,
  ListItem,
  Typography,
} from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import CircleOutlined from "@mui/icons-material/CircleOutlined";
import ListItemAction from "../ListItemAction/ListItemAction";
import { theme } from "../../../theme";

const CollapseComponent = (props) => {
  const { name, icon, link, items, isHeader } = props;
  // console.log(icon)

  const isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  const MenuItemRoot = (
    <ListItemAction button onClick={handleClick}>
      <ListItemIcon sx={{ mr: 2 }}>{icon}</ListItemIcon>
      <ListItemText inset={!icon}>
        {isHeader ? (
           <Typography variant="h3" sx={{mb:-.15}}>
           {name}
           </Typography>
        ): (
          <Typography variant="h4" sx={{mb:-.15}}>
            {name}
          </Typography>
        )}
      </ListItemText>
      {isExpandable && !open && (
        <KeyboardArrowRightOutlinedIcon fontSize="medium" />
      )}
      {isExpandable && open && <ExpandMoreOutlinedIcon />}
    </ListItemAction>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List>
        {items.map((item, index) => (
          <CollapseComponent {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <div>
      {MenuItemRoot}
      {MenuItemChildren}
    </div>
  );
};

export default CollapseComponent;
