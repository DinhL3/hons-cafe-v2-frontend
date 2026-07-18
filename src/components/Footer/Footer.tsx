import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { teal } from '@mui/material/colors';
import { SiCoffeescript } from 'react-icons/si';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router';

import type { NavPage } from '../Navigation/types';

const pages: NavPage[] = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About Us', path: '/about' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: FaInstagram },
  { label: 'Facebook', href: 'https://facebook.com', icon: FaFacebook },
];

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: teal[900], color: teal[50] }}>
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={4}
          sx={{ justifyContent: 'space-between' }}
        >
          <Stack spacing={1.5} sx={{ maxWidth: 280 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <SiCoffeescript size={22} />
              Hon's cafe
            </Typography>
            <Typography variant="body2" sx={{ color: teal[50] }}>
              Sit, relax, grab a drink. Coffee beans from around the world,
              roasted with care.
            </Typography>
          </Stack>

          <Stack spacing={1.5}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, textTransform: 'uppercase' }}
            >
              Explore
            </Typography>
            {pages.map((page) => (
              <Link
                key={page.label}
                component={RouterLink}
                to={page.path}
                sx={{
                  color: teal[50],
                  textDecoration: 'none',
                  '&:hover': { color: teal[200] },
                }}
              >
                {page.label}
              </Link>
            ))}
          </Stack>

          <Stack spacing={1.5}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, textTransform: 'uppercase' }}
            >
              Visit us
            </Typography>
            <Typography variant="body2" sx={{ color: teal[50] }}>
              Unioninkatu 29, 00170 Helsinki
            </Typography>
            <Typography variant="body2" sx={{ color: teal[50] }}>
              Mon-Sun: 7:00 – 22:00
            </Typography>
            <Link
              href=""
              underline="hover"
              variant="body2"
              sx={{ color: teal[50], '&:hover': { color: 'white' } }}
            >
              (+358) 0000 0000
            </Link>
          </Stack>

          <Stack spacing={1.5}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, textTransform: 'uppercase' }}
            >
              Follow us
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  sx={{
                    color: teal[50],
                    '&:hover': { color: 'white', bgcolor: teal[800] },
                  }}
                >
                  <Icon size={20} />
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: teal[800], my: 4 }} />

        <Typography variant="body2" sx={{ color: teal[100] }}>
          © {new Date().getFullYear()} Hon's cafe. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
