import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation, Link } from 'react-router-dom';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

// Map of route segments to display labels
const labelMap = {
  orders: 'Orders',
  items: 'Items',
  // Add other mappings as needed
};

// Helper function to determine if a segment is an ID (e.g., a number)
const isID = (segment) => !isNaN(segment);

export default function CustomizedBreadcrumbs() {
  const location = useLocation();

  // Break down the current path into segments
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {/* Home breadcrumb */}
      <StyledBreadcrumb
        component={Link}
        to="/"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
      />

      {/* Dynamically create breadcrumbs for each path segment */}
      {pathnames.map((value, index) => {
        if (isID(value)) {
          // Skip segments that are IDs
          return null;
        }

        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        const label = labelMap[value] || value; // Use mapped label or the actual value

        return isLast ? (
          <StyledBreadcrumb key={index} label={label} />
        ) : (
          <StyledBreadcrumb key={index} component={Link} to={routeTo} label={label} />
        );
      })}
    </Breadcrumbs>
  );
}
