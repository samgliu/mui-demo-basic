import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Masonry } from '@mui/lab';

const heights = [
  150, 30, 90, 70, 110, 330, 120, 193, 121, 34, 55, 66, 77, 88, 99, 100, 123,
  141, 33, 12, 55, 39,
];

export const MuiMasonry = () => {
  return (
    <Box sx={{ width: 500, minHeight: 400 }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => {
          return (
            <Paper
              key={index}
              sx={{
                // display: 'flex',
                // justifyContent: 'center',
                // alignItem: 'center',
                // height,
                border: '1px solid',
              }}
            >
              <Accordion sx={{ minHeight: height }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>Content</AccordionDetails>
              </Accordion>
            </Paper>
          );
        })}
      </Masonry>
    </Box>
  );
};
