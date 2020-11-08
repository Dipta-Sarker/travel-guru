import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Css from './Location.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    
    
    
    
  
    
    
  },
  media: {
    height:300,
    
  

    
  },
  

});
const Location = (props) => {
    const {name,image} =props.cart;
    const classes = useStyles();
    return (
        <div>
          
           <Card className={classes.root}>
         <CardActionArea className={classes.cart}>
          <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
          />
  
          </CardActionArea>
      
          </Card> 
      
        </div>
    );
};

export default Location;