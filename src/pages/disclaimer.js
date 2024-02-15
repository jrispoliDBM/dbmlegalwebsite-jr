import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/core/Container';
import { Stack, Typography } from '@mui/material';
import Head from 'next/head';

export default function TermsAndConditions() {
    const theme = useTheme();

    return (
        <>
            <Head>
                <title>DBM Compliance</title>
                <meta name="description" content="DBM Compliance Services" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>

            <Box sx={{ overflowX: 'hidden' }}>
                <Main bgcolor={'background.paper'}>
                    <Container>
                        <Typography variant="h4" fontWeight="bold">
                            Website Disclaimer: DBM Legal Services LLC
                        </Typography>

                        <Typography variant="body1" gutterBottom>
                            {`The information contained in the DBM Legal Services LLC (the "DBM") website is provided for informational purposes only and should not be construed as legal advice on any subject matter.`}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {`No recipient of content from this site, client or otherwise, should act or refrain from acting on the basis of any content included in the site without seeking the appropriate legal or other professional advice on the particular facts and circumstances at issue from an attorney licensed in the recipient&#39;s state. The content of this website contains general information and may not reflect current legal developments, verdicts, or settlements. DBM expressly disclaims all liability in respect to actions taken or not taken based on any or all the contents of this site.`}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {`Any information sent to the firm via Internet e-mail or through the DBM Web site is not secure and is done so on a non-confidential basis. The transmission of the DBM site, in part or in whole, and/or communication with DBM via Internet e-mail through this site does not constitute or create an attorney-client relationship between DBM and any recipients.`}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {`The firm does not necessarily endorse and is not responsible for, any third-party content that may be accessed through this website.`}
                        </Typography>
                        {/* <Typography variant="body1">                        
                            {termsAndConditionsList.map((item, index) => (
                                <Stack key={index} spacing={2} sx={{ mt: 2 }}>
                                    <Typography variant="h5" fontWeight='bold'>{index+1}. {item.title}</Typography>
                                    <Typography variant="body1">{item.content}</Typography>
                                </Stack>
                            ))}
                        </Typography> */}
                    </Container>
                </Main>
            </Box>
        </>
    );
}
