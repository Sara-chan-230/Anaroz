import React from 'react';
import { 
  Box,
  Avatar,
  Typography,
  Divider,
  Badge,
  Chip
} from '@mui/material';
import { 
  FiberManualRecord 
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const LiveBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#4caf50',
    color: '#4caf50',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const DonationItem = ({ donation }) => {
  const colors = ['#2196f3', '#9c27b0', '#009688']; // Blue, Purple, Teal
  
  return (
    <Box sx={{ 
      p: 2,
      '&:hover': {
        backgroundColor: 'action.hover',
        transition: 'background-color 0.2s'
      }
    }}>
      <Box display="flex" alignItems="flex-start">
        <Avatar 
          sx={{ 
            bgcolor: colors[donation.id % 3],
            width: 32,
            height: 32,
            fontSize: '0.875rem'
          }}
        >
          {donation.name.charAt(0)}
        </Avatar>
        
        <Box sx={{ ml: 2, flex: 1, minWidth: 0 }}>
          <Typography variant="subtitle2" noWrap>
            {donation.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Donated <Typography component="span" color="primary.main" fontWeight="500">
              {donation.amount} HP
            </Typography> to {donation.campaign}
          </Typography>
          <Typography variant="caption" color="text.disabled" display="block">
            {donation.time} ago
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const LiveDonationsFeed = () => {
  const donations = [
    { id: 1, name: "Alex Johnson", amount: "500", campaign: "School Renovation", time: "2 minutes" },
    { id: 2, name: "Maria Garcia", amount: "200", campaign: "Medical Fund", time: "15 minutes" },
    { id: 3, name: "Sam Wilson", amount: "750", campaign: "Clean Water", time: "27 minutes" },
    { id: 4, name: "Taylor Smith", amount: "300", campaign: "Food Drive", time: "42 minutes" },
  ];

  return (
    <Box sx={{
      width: { xs: '100%', lg: '38%' }, // Increased width
      position: 'sticky',
      top: 16,
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: 1,
      overflow: 'hidden',
      border: '1px solid',
      borderColor: 'divider'
    }}>
      {/* Header */}
      <Box sx={{ 
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: 'background.default',
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Typography variant="subtitle1" fontWeight="medium">
          Live Donations
        </Typography>
        <Chip 
          size="small"
          icon={
            <LiveBadge variant="dot" overlap="circular">
              <FiberManualRecord color="success" fontSize="inherit" />
            </LiveBadge>
          }
          label="Updated now"
          sx={{ 
            fontSize: '0.75rem',
            '& .MuiChip-icon': {
              ml: 0.5,
              mr: -0.5
            }
          }}
        />
      </Box>

      {/* Donation stream */}
      <Box sx={{ 
        maxHeight: 500,
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: 6,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'divider',
          borderRadius: 3,
        }
      }}>
        {donations.map((donation) => (
          <React.Fragment key={donation.id}>
            <DonationItem donation={donation} />
            <Divider variant="middle" />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default LiveDonationsFeed;