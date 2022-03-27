import { Stack, Avatar, AvatarGroup } from '@mui/material';

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
        <Avatar sx={{ bgcolor: 'sucess.light' }}>CK</Avatar>
      </Stack>

      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
          <Avatar
            src="http://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="http://randomuser.me/api/portraits/women/80.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="http://randomuser.me/api/portraits/women/81.jpg"
            alt="Jane Doe"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar
          variant="square"
          sx={{ bgcolor: 'error.light', width: 48, height: 48 }}
        >
          YY
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: 'secondary.light', width: 48, height: 48 }}
        >
          XX
        </Avatar>
      </Stack>
    </Stack>
  );
};
