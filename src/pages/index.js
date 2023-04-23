import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/core/Container';
import Hero from 'components/Hero';
import Head from 'next/head'

export default function Home() {
  return (
    <>
          <Head>
        <title>DBM Legal Services</title>
        <meta name="description" content="DBM Legal Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Hero />
      </Main>
    </Box>
    </>
  )
}
