import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { teal } from '@mui/material/colors';

import NavLogo from './NavLogo';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import type { NavPage } from './types';

const pages: NavPage[] = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About Us', path: '/about' },
];

function Navigation() {
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ bgcolor: teal[100], borderBottom: 1, borderColor: teal[200] }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <NavLogo sx={{ display: { xs: 'none', md: 'flex' } }} />
          <MobileMenu
            pages={pages}
            anchorEl={anchorElNav}
            onOpen={(e) => setAnchorElNav(e.currentTarget)}
            onClose={() => setAnchorElNav(null)}
          />
          <NavLogo sx={{ display: { xs: 'flex', md: 'none' } }} />
          <DesktopMenu pages={pages} onClose={() => setAnchorElNav(null)} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
