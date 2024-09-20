import React, { useEffect, useState } from 'react';
import {
  Avatar,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  MenuItem,
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { readUser } from '../services/userService'; // Adjust the path as needed

// Custom styling for the avatar image
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(14),
  height: theme.spacing(14),
  marginBottom: theme.spacing(2),
}));

// Profile Page Component
const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const userId = 'YOUR_USER_ID'; // Replace with the actual user ID from authentication context or state

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await readUser(userId);
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  // Handle form input change
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const result = await response.json();
      console.log('Updated User Data:', result);
      // Optionally show success message or redirect
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  if (!userData) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <StyledAvatar
          alt={`${userData.firstName} ${userData.lastName}`}
          src={userData.avatar}
        />
        <Typography variant="h5">
          {userData.firstName} {userData.lastName}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {userData.role.join(', ')}
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="firstName"
              label="First Name"
              fullWidth
              value={userData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="lastName"
              label="Last Name"
              fullWidth
              value={userData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              fullWidth
              value={userData.email}
              onChange={handleChange}
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="birthDate"
              label="Birth Date"
              fullWidth
              value={userData.birthDate}
              onChange={handleChange}
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              fullWidth
              value={userData.password}
              onChange={handleChange}
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              value={userData.phoneNumber}
              onChange={handleChange}
              type="tel"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="role"
              label="Role"
              select
              fullWidth
              value={userData.role}
              onChange={handleChange}
              SelectProps={{
                multiple: true,
              }}
            >
              {['ADMIN', 'USER'].map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save Changes
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfilePage;
