import React from 'react'
import { styled , ListItem} from '@mui/material'

const ListItemAction = styled(ListItem)(({ theme }) => ({
    width: "100%",
    borderRadius: "40px",
    '&:hover': {
      backgroundColor: theme.palette.secondary.hover,
      '& .MuiListItemIcon-root': {
        color: theme.palette.secondary.main,
      },
      '& .MuiListItemText-primary': {
        color: theme.palette.secondary.main,
      }
    },
    '&:{active}': {
      backgroundColor: theme.palette.secondary.hover,
      '& .MuiListItemIcon-root': {
        color: theme.palette.secondary.main,
      },
      '& .MuiListItemText-primary': {
        color: theme.palette.secondary.main,
      }
    },
  }));

export default ListItemAction