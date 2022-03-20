import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="random picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>
            Share
          </Button>
          <Button>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
