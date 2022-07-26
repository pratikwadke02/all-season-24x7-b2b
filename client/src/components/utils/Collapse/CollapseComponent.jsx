import React from 'react'
import { ListItemIcon,ListItemText,Divider,List,Collapse, ListItem } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import CircleOutlined from '@mui/icons-material/CircleOutlined';
import ListItemAction from '../ListItemAction/ListItemAction';


const CollapseComponent = (props) => {

    const {name, icon, link, items} = props;
    // console.log(icon)

    const isExpandable = items && items.length > 0;
    const [open, setOpen] = React.useState(false);

    function handleClick() {
        setOpen(!open)
      }

    const MenuItemRoot = (
        <ListItemAction button onClick={handleClick}>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={name} inset={!icon} />
          {isExpandable && !open && <KeyboardArrowRightOutlinedIcon fontSize='medium'/>}
          {isExpandable && open && <ExpandMoreOutlinedIcon />}
        </ListItemAction>
      )
    
      const MenuItemChildren = isExpandable ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List>
            {items.map((item, index) => (
              <CollapseComponent {...item} key={index} />
            ))}
          </List>
        </Collapse>
      ) : null

  return (
    <div>
        {MenuItemRoot}
        {MenuItemChildren}
    </div>
  )
}

export default CollapseComponent