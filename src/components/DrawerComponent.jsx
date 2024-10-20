import { useAuth } from '../context/AuthContext'; 
import { useNavigate } from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Avatar, Button, ListItemAvatar, Drawer } from '@mui/material'; 
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Home from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import PersonIcon from '@mui/icons-material/Person';
import { styled, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function DrawerComponent({ open, handleDrawerClose }) {
    const theme = useTheme();
    const navigate = useNavigate();
    const { currentUser, logout } = useAuth();
    const [user, setUser] = useState(currentUser); // Local state for tracking currentUser

    useEffect(() => {
        // Track changes in currentUser from context
        setUser(currentUser);
    }, [currentUser]);

    const getInitials = (firstName, lastName) => {
        const initials = `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase();
        return initials;
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>

                <Divider />

                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                {user
                                    ? getInitials(user.firstName, user.lastName)
                                    : <PersonIcon />}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={user ? `${user.firstName} ${user.lastName}` : 'Guest'}
                            secondary={user ? 'Logged In' : 'Not Logged In'}
                        />
                    </ListItem>
                </List>

                <Divider />

                <List>
                    <ListItem>
                        <ListItemButton onClick={() => navigate('/')}>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={() => navigate('/cart')}>
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Cart" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={() => navigate('/orders')}>
                            <ListItemIcon>
                                <BookmarksIcon />
                            </ListItemIcon>
                            <ListItemText primary="Orders" />
                        </ListItemButton>
                    </ListItem>
                </List>

                <Divider />

                <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Button
                        variant="contained"
                        color={user ? 'secondary' : 'primary'}
                        onClick={user ? logout : () => navigate('/login')}
                    >
                        {user ? 'Logout' : 'Login'}
                    </Button>
                </Box>
            </Drawer>
        </Box>
    );
}

DrawerComponent.propTypes = {
    open: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func.isRequired,
};

export default DrawerComponent;
