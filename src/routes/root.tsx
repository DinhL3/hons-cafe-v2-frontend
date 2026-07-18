import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';

function Root() {
  return (
    <Container maxWidth="lg" sx={{ pt: 2 }}>
      <Box
        sx={{
          p: 4,
          mb: 4,
        }}
      >
        <Typography variant="h5" color="black" sx={{ fontWeight: 500 }}>
          Welcone to Hon's Cafe!
        </Typography>
      </Box>
    </Container>
  );
}

export default Root;
