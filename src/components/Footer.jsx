import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#d9d8f6">
    <Stack gap="40px" sx={{ alignItems: 'center' }} display="flex" flexDirection="row" justifyContent="center" alignItems="center" px="40px" pt="24px">
      <Typography display="flex" justifyContent="center" alignItems="center" pt="1rem" fontFamily="Brush Script MT" fontSize="2rem"> Blue demon gym</Typography>
      <img src={Logo} alt="logo" style={{ width: '80px', height: '80px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Alberto Flores</Typography>
  </Box>
);

export default Footer;