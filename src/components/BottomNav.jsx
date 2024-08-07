import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardWithIcon = ({ icon, title, items }) => (
  <Card sx={{ width: '30%', m: 1 }}>
    <CardContent>
      {icon}
      <Typography variant="h6" component="div">
        {title}
      </Typography>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.ownerDocument.body.scrollTop = 0;
    }
  }, [value]);

  const cards = [
    {
      icon: <RestoreIcon fontSize="large" />,
      title: 'Recents',
      items: ['Recent item 1', 'Recent item 2'],
    },
    {
      icon: <FavoriteIcon fontSize="large" />,
      title: 'Favorites',
      items: ['Favorite item 1', 'Favorite item 2'],
    },
    {
      icon: <ArchiveIcon fontSize="large" />,
      title: 'Archive',
      items: ['Archived item 1', 'Archived item 2'],
    },
  ];

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      {/* Bottom navigation bar with cards */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 1 }}>
          {cards.map((card, index) => (
            <CardWithIcon
              key={index}
              icon={card.icon}
              title={card.title}
              items={card.items}
            />
          ))}
        </Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
