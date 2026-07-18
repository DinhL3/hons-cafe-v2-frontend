import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import type { SxProps, Theme } from '@mui/material/styles';

import { Link } from 'react-router';

interface NavLogoProps {
  sx?: SxProps<Theme>;
}

function NavLogo({ sx }: NavLogoProps) {
  return (
    <Typography
      variant="h6"
      noWrap
      component={Link}
      to="/"
      sx={{
        mr: 2,
        fontWeight: 700,
        color: red[900],
        textDecoration: 'none',
        ...sx,
      }}
    >
      KHANH NGUYEN
    </Typography>
  );
}

export default NavLogo;
