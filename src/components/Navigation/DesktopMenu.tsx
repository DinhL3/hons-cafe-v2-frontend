import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router';
import { red } from '@mui/material/colors';

import type { NavPage } from './types';

interface DesktopMenuProps {
  pages: NavPage[];
  onClose: () => void;
}

function DesktopMenu({ pages, onClose }: DesktopMenuProps) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'flex-end',
        gap: 2,
      }}
    >
      {pages.map((page) => (
        <Button
          key={page.label}
          component={Link}
          to={page.path}
          onClick={onClose}
          sx={{
            my: 2,
            color: red[900],
            display: 'block',
            fontWeight: 600,
            background: 'none',
            '&:hover': { color: red[500] },
          }}
        >
          {page.label}
        </Button>
      ))}
    </Box>
  );
}

export default DesktopMenu;
