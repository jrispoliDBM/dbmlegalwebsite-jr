import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/core/Container';
import Head from 'next/head';
import NewClientForm from '@/components/general_components/NewClientForm';

export default function NewClientFormPage() {
    return (
        <>
            <Head>
                <title>DBM Legal Services</title>
                <meta name="description" content="DBM Legal Services" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>

            <Box sx={{ overflowX: 'hidden' }} pt={5}>
                <Main bgcolor={'background.paper'}>
                    <Container>
                        <NewClientForm formSource="new-client-form" />
                    </Container>
                </Main>
            </Box>
        </>
    );
}
