import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router';
import { teal } from '@mui/material/colors';

import type { NavPage } from './types';

interface MobileMenuProps {
  pages: NavPage[];
  anchorEl: HTMLElement | null;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
  onClose: () => void;
}

function MobileMenu({ pages, anchorEl, onOpen, onClose }: MobileMenuProps) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="navigation menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={onOpen}
        sx={{ color: teal[50] }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={Boolean(anchorEl)}
        onClose={onClose}
        sx={{ display: { xs: 'block', md: 'none' } }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              mt: 1,
              minWidth: 160,
              border: 1,
              borderColor: teal[200],
              borderRadius: 2,
            },
          },
        }}
      >
        {pages.map((page) => (
          <MenuItem
            key={page.label}
            component={Link}
            to={page.path}
            onClick={onClose}
            sx={{
              fontWeight: 600,
              color: teal[900],
              '&:hover': { color: teal[500], bgcolor: 'transparent' },
            }}
          >
            {page.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default MobileMenu;
