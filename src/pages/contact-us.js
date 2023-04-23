import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/core/Container';
import { Typography, ListItemText, ListItemAvatar, ListItem, Divider, Avatar } from '@mui/material';



// info@dbmlegalservices.com
// (646) 809-8000
// Comprehensive Legal Solutions Tailored to Your Business Needs
export default function ContactUs() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const Sidebar = () => (
    <Box
      flex={'1 1 30%'}
      maxWidth={'30%'}
      maxHeight={'100vh'}
      position={'sticky'}
      top={0}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        height={1}
        width={1}
      >
        <Box
          component={'img'}
          loading="lazy"
          height={1}
          width={1}
          src={'/images/brooklynbridge2023.jpeg'}
          alt="..."
          sx={{
            objectFit: 'cover',
          }}
        />
      </Box>
    </Box>
  );

  const info = [
    {
      label: 'Phone',
      value: '(646) 809-8000',
      icon: (
        <svg
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      value: 'info@dbmlegalservices.com',
      icon: (
        <svg
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
    },
    // {
    //   label: 'Address',
    //   value: 'Via Venini 33, 20147',
    //   icon: (
    //     <svg
    //       width={20}
    //       height={20}
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 20 20"
    //       fill="currentColor"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
  ];

  const ContactDetails = () => (
    <Box>
    <Box marginBottom={2}>
      <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
        Contact details
      </Typography>
      <Typography color="text.secondary">
      Please contact us to discuss our full range of comprehensive legal solutions tailored to meet your business needs.
      </Typography>
    </Box>
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
    >
      {info.map((item, i) => (
        <Box
          key={i}
          component={ListItem}
          disableGutters
          width={'auto'}
          padding={0}
        >
          <Box
            component={ListItemAvatar}
            minWidth={'auto !important'}
            marginRight={2}
          >
            <Box
              component={Avatar}
              bgcolor={theme.palette.primary.main}
              width={40}
              height={40}
            >
              {item.icon}
            </Box>
          </Box>
          <ListItemText primary={item.label} secondary={item.value} />
        </Box>
      ))}
    </Box>
  </Box>
  );

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
      <Box
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        marginTop={-13}
      >
        {isMd ? <Sidebar /> : null}
        <Box
          flex={{ xs: '1 1 100%', md: '1 1 70%' }}
          maxWidth={{ xs: '100%', md: '70%' }}
          paddingTop={14}
        >
          <Box height={1}>
            <Container>
              <ContactDetails/>
            </Container>
          </Box>
        </Box>
      </Box>

      </Main>
    </Box>
  )
}

