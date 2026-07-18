import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';
import { GiCoffeeCup } from 'react-icons/gi';
import { Link } from 'react-router';

function Root() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '95vh', md: '93vh' },
        display: 'flex',
        alignItems: 'center',
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://res.cloudinary.com/dlhzbr2to/image/upload/v1784385649/coffee-on-white-horiz_ry0qyw.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ maxWidth: 560 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{ color: 'white', fontWeight: 700 }}
          >
            Sit, relax, grab a drink
          </Typography>
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
            Catch up with friends, enjoy coffee beans from around the world, and
            get work done with free wifi and air conditioning
          </Typography>
          <Box>
            <Button
              component={Link}
              to="/menu"
              variant="contained"
              disableElevation
              size="large"
              startIcon={<GiCoffeeCup size={24} />}
              sx={{
                bgcolor: teal[200],
                color: teal[900],
                textTransform: 'none',
                borderRadius: 999,
                fontSize: '1.2rem',
                '&:hover': {
                  bgcolor: teal[300],
                },
              }}
            >
              See menu
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Root;
