import { Badge, Stack } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

export const MuiBadge = () => {
  return (
    <Stack spacing={3} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary" max={999}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" badgeContent={5} color="primary" invisible={false}>
        <MailIcon />
      </Badge>
    </Stack>
  );
};
