import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

export const Footer = () => (
  <Box mt="80px" bgcolor="#898121">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '80px' }} />
    </Stack>
    <Typography variant="h5" color="#F7F1E5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with by Ankit Bisen</Typography>
  </Box>
);