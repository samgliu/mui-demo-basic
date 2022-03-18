import { Stack } from '@mui/material';
import { Rating } from '@mui/material';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const MuiRating = () => {
  const [rating, setRating] = useState<number | null>(3); //null
  console.log({ rating });
  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setRating(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={rating}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize='inherit' color='secondary' />}
        emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
        // readOnly
        // highlightSelectedOnly
      />
    </Stack>
  );
};
