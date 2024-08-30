import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import Home from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ClothingIcon from '@mui/icons-material/DryCleaning'
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import ListItemAvatar from '@mui/material/ListItemAvatar';


const drawerWidth = 240;

// DrawerHeader styled component to style the header of the drawer
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

/**
 * DrawerComponent is a functional component that renders a persistent 
 * navigation drawer on the left side of the screen.
 * 
 * @param {boolean} open - Determines whether the drawer is open or not.
 * @param {function} handleDrawerClose - Function to handle closing the drawer.
 * @returns {JSX.Element} The rendered component.
 */
function DrawerComponent({ open, handleDrawerClose }) {
  // useTheme hook to access the current theme and adjust styles accordingly
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline /> {/* CssBaseline helps ensure consistent styling across browsers */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent" // Persistent drawer stays open even when the user clicks outside it
        anchor="left" // The drawer appears on the left side of the screen
        open={open} // The drawer's open state is controlled by the `open` prop
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {/* Icon changes based on the text direction (LTR/RTL) */}
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>


        <Divider />
        <List>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="first_name" secondary="last_name" />
      </ListItem>
        </List>
        <Divider /> {/* Divider for separating different sections in the drawer */}
        <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Home/> 
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <ClothingIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Products" />
                </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                   <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Cart" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <BookmarksIcon/>
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItemButton>
            </ListItem>

         
        </List>
        {/*<Divider />*/}
        {/*<List>*/}
        {/*  {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
        {/*    <ListItem key={text} disablePadding>*/}
        {/*      <ListItemButton>*/}
        {/*        <ListItemIcon>*/}
        {/*          /!* InboxIcon for even indexes, MailIcon for odd indexes *!/*/}
        {/*          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
        {/*        </ListItemIcon>*/}
        {/*        <ListItemText primary={text} />*/}
        {/*      </ListItemButton>*/}
        {/*    </ListItem>*/}
        {/*  ))}*/}
        {/*</List>*/}
      </Drawer>
    </Box>
  );
}

// PropTypes for type-checking props passed to the DrawerComponent
DrawerComponent.propTypes = {
  open: PropTypes.bool.isRequired, // Boolean to determine if the drawer is open
  handleDrawerClose: PropTypes.func.isRequired, // Function to close the drawer
};

export default DrawerComponent;
