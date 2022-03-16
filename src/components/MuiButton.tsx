import { Button } from "@mui/material";
import { MuiTypography } from "./MuiTypography";

export const MuiButton = () => {
  return (
    <div>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Contained</Button>
    </div>
  )
}