import Typography from '@mui/material/Typography';
import { teal } from '@mui/material/colors';
import type { SxProps, Theme } from '@mui/material/styles';
import { SiCoffeescript } from 'react-icons/si';

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
        color: teal[50],
        textDecoration: 'none',
        alignItems: 'center',
        gap: 1,
        ...sx,
      }}
    >
      <SiCoffeescript size={24} />
      Hon's cafe
    </Typography>
  );
}

export default NavLogo;
