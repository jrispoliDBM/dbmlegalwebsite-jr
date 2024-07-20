import React, { useState, useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Card, Typography, Stack, Grid, Button, Dialog, DialogActions, DialogContentText, DialogTitle, DialogContent } from '@mui/material';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/core/Container';
import Head from 'next/head';
import * as Yup from 'yup';
import { Field, Form, Formik, FormikProps } from 'formik';
import useTeam from 'hooks/useTeam';
import { TextField, DatePicker, FormSelect, EntryTypeRadioGroup, FormSwitch, GenericRadioGroup } from 'components/FormikMui';
import useNewClientForms from '@/hooks/useNewClientForms';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import axios from 'axios';

export default function NewClientForm() {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });
    const [verticals, setVerticals] = useState([]);
    const { team } = useTeam();
    const { addForm } = useNewClientForms();
    const [openSubmissionDialog, setOpenSubmissionDialog] = useState(false);
    const [IP, setIP] = useState('');
    

    useEffect(() => {
        //set of verticals from team
        //console.log('Team', team)
        //console.log('Team Loaded', team.length);
        //console.log('Navigator', navigator.geolocation.latitude);
        const fetchIP = async () => {
            try {
                const response = await axios.get('https://api.ipify.org?format=json');
                console.log('IP:', response.data.ip);
                setIP(response.data.ip);
            } catch (error) {
                console.error('Error fetching IP address:', error);
                setIP('Error fetching IP address');
            }
        };

        fetchIP();
        let verticalList = [];
        team.map((person) => {
            if (person.verticals) {
                person.verticals.map((vertical) => {
                    if (!verticalList.includes(vertical)) {
                        if (vertical !== 'All') {
                            verticalList.push(vertical);
                        }
                    }
                });
            }
        });
        // sort
        verticalList.sort((a, b) => a.localeCompare(b));

        setVerticals([...verticalList, 'Unknown']);
    }, [team]);

    const stateAbbreviations = [
        '',
        'AL',
        'AK',
        'AZ',
        'AR',
        'CA',
        'CO',
        'CT',
        'DE',
        'FL',
        'GA',
        'HI',
        'ID',
        'IL',
        'IN',
        'IA',
        'KS',
        'KY',
        'LA',
        'ME',
        'MD',
        'MA',
        'MI',
        'MN',
        'MS',
        'MO',
        'MT',
        'NE',
        'NV',
        'NH',
        'NJ',
        'NM',
        'NY',
        'NC',
        'ND',
        'OH',
        'OK',
        'OR',
        'PA',
        'RI',
        'SC',
        'SD',
        'TN',
        'TX',
        'UT',
        'VT',
        'VA',
        'WA',
        'WV',
        'WI',
        'WY',
        'Foreign/Other'
    ];

    return (
        <>
            <Head>
                <title>DBM Legal Services</title>
                <meta name="description" content="DBM Legal Services" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>

            <Box sx={{ overflowX: 'hidden' }}>
                <Main bgcolor={'background.paper'}>
                    <Container>
                        <Card p={2}>
                            <Stack spacing={2} direction="column" p={2}>
                                <Typography variant="h3" fontWeight="bold">
                                    New Client Form
                                </Typography>
                                <Typography>
                                    {`Thank you for your interest in DBM Legal Services. You can complete this form before or after your initial consultation with a member of our Operations team or your attorney. This information is for internal use only and will be used to initiate our conflict check process and to complete your internal client profile. The information you provide is confidential and will be treated accordingly. `}
                                </Typography>
                                <Card>
                                    <Formik
                                        initialValues={{
                                            pointOfContactName: '',
                                            pointOfContactCellPhone: '',
                                            pointOfContactEmail: '',
                                            referralSource: 'NA',
                                            referralSourceInfo: '',
                                            businessName: '',
                                            businessTradeNames: '',
                                            businessOfficersDirectorsPartners: '',
                                            businessIndustry: '',
                                            businessDescription: '',
                                            businessWebsite: '',
                                            businessAddress: '',
                                            businessEmail: '',
                                            businessEntityType: 'NA',
                                            businessEntityTypeOther: '',
                                            businessIncorporationState: '',
                                            businessPublicCompany: false,
                                            matterSummary: '',
                                            matterPracticeArea: 'Unknown',
                                            matterBillingType: 'TBD',
                                            matterCounterparties: '',
                                            disclaimerAcknowledged: false,
                                            practice: 'Unassigned',
                                            userAgent:'',
                                            userIP: '',
                                            dateCompleted: new Date().toISOString(),
                                            reviewedByDBM: false,
                                        }}
                                        onSubmit={async (values, actions) => {
                                            //alert(JSON.stringify(values, null, 2));
                                            values.userIP = IP;
                                            values.userAgent = navigator.userAgent;
                                            values.dateCompleted = new Date().toISOString();
                                            //console.log('Submitting:', values); 
                                            addForm(values);
                                            actions.setSubmitting(false);
                                            actions.resetForm();
                                            setOpenSubmissionDialog(true);
                                        }}
                                        validationSchema={Yup.object({
                                            pointOfContactName: Yup.string('Enter a primary point of contact name').required(
                                                'A primary point of contact name is required.'
                                            ),
                                            pointOfContactEmail: Yup.string('Enter an email')
                                                .email('Enter a valid primary point of contact email')
                                                .required('A primary point of contact email is required.'),
                                            businessName: Yup.string('Enter a business name').required('A business name is required.'),

                                            disclaimerAcknowledged: Yup.boolean()
                                                .oneOf([true], 'You must accept the disclaimer to submit.')
                                                .required('You must accept the disclaimer to submit.')
                                        })}
                                    >
                                        {({ values, submitForm, setFieldValue, resetForm, isSubmitting, touched, errors }) => (
                                            <Form>
                                                <Grid container spacing={2} p={2}>
                                                    <Grid item xs={12}>
                                                        <Typography variant="h5" fontWeight="bold">
                                                            Client Point of Contact Information
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Field
                                                            component={TextField}
                                                            name="pointOfContactName"
                                                            id="pointOfContactName"
                                                            placeholder="Name"
                                                            label="Name"
                                                            required
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Field
                                                            component={TextField}
                                                            name="pointOfContactCellPhone"
                                                            id="pointOfContactCellPhone"
                                                            placeholder="Cell Phone"
                                                            label="Cell Phone"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Field
                                                            component={TextField}
                                                            name="pointOfContactEmail"
                                                            id="pointOfContactEmail"
                                                            type="email"
                                                            placeholder="Email"
                                                            label="Email"
                                                            required
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    {isMd && <Grid item md={6} />}
                                                    <Grid item xs={12}>
                                                        <Stack>
                                                            <Typography variant="h6">
                                                                How did you learn about DBM Legal Services?
                                                            </Typography>
                                                            <Field
                                                                component={GenericRadioGroup}
                                                                name="referralSource"
                                                                id="referralSource"
                                                                activeStates={['Personal Referral', 'Google', 'LinkedIn', 'Other', 'NA']}
                                                                onChange={(e) => {
                                                                    setFieldValue('referralSource', e.target.value);
                                                                    setFieldValue('referralSourceInfo', '');
                                                                }}
                                                            />
                                                        </Stack>
                                                    </Grid>
                                                    {(values.referralSource == 'Other' || values.referralSource == 'Personal Referral') && (
                                                        <Grid item xs={12} md={6}>
                                                            <Field
                                                                component={TextField}
                                                                name="referralSourceInfo"
                                                                id="referralSourceInfo"
                                                                placeholder=""
                                                                label={
                                                                    values.referralSource === 'Other' ? 'Other?' : 'Personal Referral Name?'
                                                                }
                                                                fullWidth
                                                            />
                                                        </Grid>
                                                    )}
                                                    <Grid item xs={12}>
                                                        <Typography variant="h5" fontWeight="bold" pt={2}>
                                                            Business Information
                                                        </Typography>
                                                        <Typography>
                                                            {`This information will be used to initiate the conflict check process. Please complete as thoroughly as possible to limit follow-ups. `}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Field
                                                            component={TextField}
                                                            name="businessName"
                                                            id="businessName"
                                                            placeholder="Business Name"
                                                            label="Business Name"
                                                            required
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Field
                                                            component={TextField}
                                                            name="businessTradeNames"
                                                            id="businessTradeNames"
                                                            placeholder="Business Trade Names"
                                                            label="Trade Names / DBA"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Field
                                                            component={TextField}
                                                            name="businessOfficersDirectorsPartners"
                                                            id="businessOfficersDirectorsPartners"
                                                            placeholder="businessOfficersDirectorsPartners"
                                                            label="Officers, Directors & Partners"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Field
                                                            component={TextField}
                                                            name="businessDescription"
                                                            id="businessDescription"
                                                            placeholder="businessDescription"
                                                            label="Busines Description"
                                                            multiline
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Field
                                                            component={TextField}
                                                            name="businessIndustry"
                                                            id="businessIndustry"
                                                            placeholder="businessIndustry"
                                                            label="Industry"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Field
                                                            component={FormSwitch}
                                                            name="businessPublicCompany"
                                                            id="businessPublicCompany"
                                                            placeholder="businessPublicCompany"
                                                            label="Public Company?"
                                                            checked={values.businessPublicCompany}
                                                            // onChange={(e) => {
                                                            //     setFieldValue('billable', !values.billable);
                                                            // }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Field
                                                            component={TextField}
                                                            name="businessWebsite"
                                                            id="businessWebsite"
                                                            placeholder="businessWebsite"
                                                            label="Website"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Field
                                                            component={TextField}
                                                            name="businessEmail"
                                                            id="businessEmail"
                                                            placeholder="businessEmail"
                                                            label="Business Email"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <Field
                                                            component={FormSelect}
                                                            name="businessIncorporationState"
                                                            id="businessIncorporationState"
                                                            placeholder="businessIncorporation State"
                                                            label="Incorporation State"
                                                            items={[...stateAbbreviations]}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <Field
                                                            component={FormSelect}
                                                            name="businessEntityType"
                                                            id="businessEntityType"
                                                            placeholder="business Entity Type"
                                                            label="Entity Type"
                                                            items={[
                                                                'LLC',
                                                                'Corporation',
                                                                'Non-Profit Corporation',
                                                                'LLP',
                                                                'LP',
                                                                'GP',
                                                                'PLLC',
                                                                'Trust',
                                                                'Other',
                                                                'NA'
                                                            ]}
                                                            fullWidth
                                                            onChange={(e) => {
                                                                setFieldValue('businessEntityType', e.target.value);
                                                                setFieldValue('businessEntityTypeOther', '');
                                                            }}
                                                        />
                                                    </Grid>
                                                    {values.businessEntityType === 'Other' && (
                                                        <Grid item xs={12} md={6}>
                                                            <Field
                                                                component={TextField}
                                                                name="businessEntityTypeOther"
                                                                id="businessEntityTypeOther"
                                                                placeholder="businessEntityTypeOther"
                                                                label="Other?"
                                                                fullWidth
                                                            />
                                                        </Grid>
                                                    )}
                                                    <Grid item xs={12}>
                                                        <Typography variant="h5" fontWeight="bold" pt={2}>
                                                            Matter Information
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Field
                                                            component={TextField}
                                                            name="matterSummary"
                                                            id="matterSummary"
                                                            placeholder="matterSummary"
                                                            label="Brief Summary of Legal Issue"
                                                            multiline
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Field
                                                            component={TextField}
                                                            name="matterCounterparties"
                                                            id="matterCounterparties"
                                                            placeholder="matterCounterparties"
                                                            label="Counterparties"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <Field
                                                            component={FormSelect}
                                                            name="matterPracticeArea"
                                                            id="matterPracticeArea"
                                                            placeholder="matterPracticeArea"
                                                            label="Practice Area"
                                                            items={verticals}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Stack>
                                                            <Typography variant="h6">
                                                                Are you looking for hourly or flat-fee billing?
                                                            </Typography>
                                                            <Field
                                                                component={GenericRadioGroup}
                                                                name="matterBillingType"
                                                                id="matterBillingType"
                                                                activeStates={[ 'TBD','Hourly', 'Flat-Fee']}
                                                            />
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="h5" fontWeight="bold" pt={2}>
                                                            Disclaimer
                                                        </Typography>
                                                        <Typography>
                                                            {`The purpose of this initial consultation is to determine if DBM Legal Services LLC (Duncan Bergman Mandell LLC) can assist you with your legal needs, to inform you about the services our firm provides, and to discuss the potential agreement for the provision of legal services and formation of an attorney-client relationship. This initial consultation does not create an attorney-client relationship and does not mean DBM Legal Services LLC will act as your attorney. After the initial consultation, if your matter is accepted by DBM Legal Services LLC and you desire to retain DBM Legal Services LLC as your attorneys, we will provide you with a written engagement letter which will set forth the terms of the agreement for legal services. Upon receipt of the signed engagement letter and the required retainer, we will begin to act as your attorneys. Your legal rights may be affected by laws that place time restrictions on certain legal claims or may be otherwise affected if prompt action is not taken. If DBM Legal Services LLC does not accept your matter or you decide not to retain our services, you should seek alternate legal counsel immediately to ensure that your legal rights are not affected. DBM LEGAL SERVICES LLC WILL NOT TAKE ANY ACTION ON YOUR BEHALF PRIOR TO RECEIPT AND ACCEPTANCE BY OUR LAW FIRM OF A SIGNED ENGAGEMENT LETTER AND REQUIRED RETAINER FEE. I HEREBY ACKNOWLEDGE THAT I HAVE READ THE FOREGOING NOTICE AND UNDERSTAND THAT DBM LEGAL SERVICES LLC WILL NOT ACT AS MY ATTORNEYS OR TAKE ANY ACTION ON MY BEHALF UNLESS AND UNTIL A WRITTEN ENGAGEMENT LETTER SIGNED BY BOTH PARTIES AND THE REQUIRED RETAINER FEE ARE RECEIVED AND ACCEPTED BY OUR LAW FIRM. `}
                                                        </Typography>
                                                        <Field
                                                            component={FormSwitch}
                                                            name="disclaimerAcknowledged"
                                                            id="disclaimerAcknowledged"
                                                            placeholder="disclaimerAcknowledged"
                                                            label="I hereby accept this disclaimer"
                                                            checked={values.disclaimerAcknowledged}
                                                            />
                                                            
                                                        {errors.disclaimerAcknowledged && touched.disclaimerAcknowledged ? (
                                                            <Typography color="error">{errors.disclaimerAcknowledged}</Typography>
                                                        ) : null}
                                                        {errors.pointOfContactName ? (
                                                            <Typography color="error">{errors.pointOfContactName}</Typography>
                                                        ) : null}
                                                        {errors.pointOfContactEmail ? (
                                                            <Typography color="error">{errors.pointOfContactEmail}</Typography>
                                                        ) : null}
                                                        {errors.businessName ? (
                                                            <Typography color="error">{errors.businessName}</Typography>
                                                        ) : null}
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <Button variant="contained" onClick={submitForm}>
                                                            Submit
                                                        </Button>
                                                        
                                                    </Grid>
                                                </Grid>
                                            </Form>
                                        )}
                                    </Formik>
                                </Card>
                            </Stack>
                        </Card>
                    </Container>
                </Main>
            </Box>
            <Dialog
                open={openSubmissionDialog}
                onClose={() => {
                    setOpenSubmissionDialog(false);
                }}
            >
                <DialogTitle>Submission Successful</DialogTitle>
                <DialogContent>
                    <Stack spacing={2}>
                        <DialogContentText>{`Thank you. If you haven't done so already, please feel free to book a complementary call with our Operations team. They will collect additional information on your matter and discuss which DBM attorney is best suited for your project. `}</DialogContentText>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Stack direction="row" spacing={2} justifyContent='space-between'>
                        <Button
                            variant="contained"
                            component="a"
                            href="https://outlook.office365.com/book/DBM1@dbmlegalservices.com/s/LUta9DPC30SzU3zO4t6uqQ2"
                        >
                            Book a Call
                        </Button>
                        <Button
                            onClick={() => {
                                setOpenSubmissionDialog(false);
                            }}
                            color="primary"
                        >
                            Close
                        </Button>
                    </Stack>
                </DialogActions>
            </Dialog>
        </>
    );
}
