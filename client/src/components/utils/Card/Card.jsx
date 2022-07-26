import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import {theme} from '../../../theme';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function RecipeReviewCard() {

  return (
    <Card sx={{ maxWidth: 1100, m: 1}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[400] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Senior Product Developer"
        subheader="Acme • Atlanta, GA / Remote / San Francisco, CA"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Exciting news! I’m hiring mid-level and senior Product Designers to join my team at Acme, where we’re building the future of eCommerce.
        <ul style= {{padding: 0, margin: 10}}>
            <li>Own a product area, work cross-platform</li>
            <li>Small, talented, tight-knit team</li>
            <li>SF, ATL or Remote</li>
        </ul>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" color="primary" sx={{color: '#2196f3', fontSize: '15'}}>
            Apply
        </Button>
        <Button variant="conatined" color="primary" sx={{color: '#2196f3', fontSize: '15'}} startIcon={<RemoveRedEyeIcon />}>
            WATCH
        </Button>
      </CardActions>
    </Card>
  );
}
