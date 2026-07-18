import {
  Avatar,
  Box,
  Chip,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { teal } from '@mui/material/colors';
import { BsCupFill } from 'react-icons/bs';

import { menuCategories, menuItems } from '../data/menu';

function Menu() {
  const sortedCategories = [...menuCategories].sort(
    (a, b) => a.sortOrder - b.sortOrder,
  );

  return (
    <Container maxWidth="sm" sx={{ mb: 3 }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ color: teal[900], textAlign: 'center', mt: 2 }}
      >
        Menu
      </Typography>

      {sortedCategories.map((category) => {
        const itemsInCategory = menuItems.filter(
          (item) => item.category === category.id,
        );

        if (itemsInCategory.length === 0) {
          return null;
        }

        return (
          <Box key={category.id} sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: teal[800],
                borderBottom: 1,
                borderColor: teal[100],
                pb: 1,
              }}
            >
              {category.name}
            </Typography>
            <List sx={{ width: '100%', bgcolor: 'none' }}>
              {itemsInCategory.map((item) => (
                <ListItem
                  key={item.id}
                  alignItems="flex-start"
                  sx={{ opacity: item.available ? 1 : 0.5 }}
                >
                  <ListItemAvatar>
                    {item.imageUrl ? (
                      <Avatar src={item.imageUrl} alt={item.name} />
                    ) : (
                      <Avatar sx={{ bgcolor: teal[50] }}>
                        <BsCupFill color={teal[700]} />
                      </Avatar>
                    )}
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography
                          component="span"
                          sx={{
                            fontWeight: 'bold',
                            textDecoration: item.available
                              ? 'none'
                              : 'line-through',
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          component="span"
                          sx={{
                            textDecoration: item.available
                              ? 'none'
                              : 'line-through',
                          }}
                        >
                          {item.price.toLocaleString('fi-FI', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}{' '}
                          €
                        </Typography>
                      </Box>
                    }
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.secondary"
                          sx={{ display: 'block' }}
                        >
                          {item.description}
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                          {!item.available && (
                            <Chip
                              label="Sold out"
                              size="small"
                              color="default"
                            />
                          )}
                          {item.tags.map((tag) => (
                            <Chip
                              key={tag}
                              label={tag}
                              size="small"
                              sx={{ bgcolor: teal[50], color: teal[900] }}
                            />
                          ))}
                        </Stack>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        );
      })}
    </Container>
  );
}

export default Menu;
