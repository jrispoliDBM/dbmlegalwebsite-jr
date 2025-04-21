import useNewClientForms from '@/hooks/useNewClientForms';
import { Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import { FormSelect, BlackFormSwitch, BlackGenericRadioGroup, BlackBlackGenericRadioGroup, PhoneNumberInput, TextField } from 'components/FormikMui';
import { Field, Form, Formik } from 'formik';
import useTeam from 'hooks/useTeam';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

export default function NewClientForm({ formSource }) {
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
        console.log('NewClientForm source:', formSource);
    }, [formSource]);

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
            if (person.practiceAreas) {
                person.practiceAreas.map((vertical) => {
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

    const completeNewClientForm = (values, submitForm, setFieldValue, resetForm, isSubmitting, touched, errors) => {
        return (
            <Form>
                <Grid container spacing={2} p={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5" color={theme.palette.black[500]} fontWeight="bold" >
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
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Field
                            component={PhoneNumberInput}
                            label={'Cell Phone'}
                            name="pointOfContactCellPhone"
                            fullWidth
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
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
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Field
                            component={TextField}
                            name="pointOfContactLinkedIn"
                            id="pointOfContactLinkedIn"
                            type="email"
                            placeholder="LinkedIn Profile URL"
                            label="LinkedIn Profile URL"
                            fullWidth
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    {isMd && <Grid item md={6} />}
                    <Grid item xs={12}>
                        <Stack>
                            <Typography variant="h6" color={theme.palette.black[500]}>
                                How did you learn about DBM Legal Services?
                            </Typography>
                            <Field
                                component={BlackGenericRadioGroup}
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
                                label={values.referralSource === 'Other' ? 'Other?' : 'Personal Referral Name?'}
                                fullWidth
                                InputProps={{
                                    style: { color: 'black' } // Ensure text entered by the user is black
                                }}
                                InputLabelProps={{
                                    style: { color: 'black' } // Ensure label text is black
                                }}
                            />
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <Typography variant="h5" color={theme.palette.black[500]} fontWeight="bold" pt={2}>
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
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
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
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            component={TextField}
                            name="businessOfficersDirectorsPartners"
                            id="businessOfficersDirectorsPartners"
                            placeholder="List of officers, directors, partners"
                            label="Officers, Directors & Partners"
                            fullWidth
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            component={TextField}
                            name="businessDescription"
                            id="businessDescription"
                            placeholder="Describe business"
                            label="Business Description"
                            multiline
                            fullWidth
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Field
                            component={TextField}
                            name="businessIndustry"
                            id="businessIndustry"
                            placeholder="Industry"
                            label="Industry"
                            fullWidth
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Field
                            component={BlackFormSwitch}
                            name="businessPublicCompany"
                            id="businessPublicCompany"
                            label="Public Company?"
                            checked={values.businessPublicCompany}
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Field
                            component={TextField}
                            name="businessWebsite"
                            id="businessWebsite"
                            placeholder="Website"
                            label="Website"
                            fullWidth
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Field
                            component={TextField}
                            name="businessLinkedIn"
                            id="businessLinkedIn"
                            placeholder="LinkedIn Profile URL"
                            label="LinkedIn Profile URL"
                            fullWidth
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Field
                            component={TextField}
                            name="businessEmail"
                            id="businessEmail"
                            placeholder="Email"
                            label="Business Email"
                            fullWidth
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
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
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Field
                            component={FormSelect}
                            name="businessEntityType"
                            id="businessEntityType"
                            placeholder="business Entity Type"
                            label="Entity Type"
                            items={['LLC', 'Corporation', 'Non-Profit Corporation', 'LLP', 'LP', 'GP', 'PLLC', 'Trust', 'Other', 'NA']}
                            fullWidth
                            onChange={(e) => {
                                setFieldValue('businessEntityType', e.target.value);
                                setFieldValue('businessEntityTypeOther', '');
                            }}
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    {values.businessEntityType === 'Other' && (
                        <Grid item xs={12} md={6}>
                            <Field
                                component={TextField}
                                name="businessEntityTypeOther"
                                id="businessEntityTypeOther"
                                placeholder=""
                                label="Other?"
                                fullWidth
                                InputProps={{
                                    style: { color: 'black' } // Ensure text entered by the user is black
                                }}
                                InputLabelProps={{
                                    style: { color: 'black' } // Ensure label text is black
                                }}
                            />
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <Typography variant="h5" color={theme.palette.black[500]} fontWeight="bold" pt={2}>
                            Matter Information
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            component={TextField}
                            name="matterSummary"
                            id="matterSummary"
                            placeholder="Summary of Legal Issue"
                            label="Brief Summary of Legal Issue"
                            multiline
                            fullWidth
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            component={TextField}
                            name="matterCounterparties"
                            id="matterCounterparties"
                            placeholder="List of Counterparties"
                            label="Counterparties"
                            fullWidth
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
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
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Stack>
                            <Typography variant="h6" color={theme.palette.black[500]}>
                                Are you looking for hourly or flat-fee billing?
                            </Typography>
                            <Field
                                component={BlackGenericRadioGroup}
                                name="matterBillingType"
                                id="matterBillingType"
                                activeStates={['TBD', 'Hourly', 'Flat-Fee']}
                                InputProps={{
                                    style: { color: 'black' } // Ensure text entered by the user is black
                                }}
                                InputLabelProps={{
                                    style: { color: 'black' } // Ensure label text is black
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" color={theme.palette.black[500]} fontWeight="bold" pt={2}>
                            Disclaimer
                        </Typography>
                        <Typography color={theme.palette.black[500]}>
                            {`The purpose of this initial consultation is to determine if DBM Legal Services LLC (Duncan Bergman Mandell LLC) can assist you with your legal needs, to inform you about the services our firm provides, and to discuss the potential agreement for the provision of legal services and formation of an attorney-client relationship. This initial consultation does not create an attorney-client relationship and does not mean DBM Legal Services LLC will act as your attorney. After the initial consultation, if your matter is accepted by DBM Legal Services LLC and you desire to retain DBM Legal Services LLC as your attorneys, we will provide you with a written engagement letter which will set forth the terms of the agreement for legal services. Upon receipt of the signed engagement letter and the required retainer, we will begin to act as your attorneys. Your legal rights may be affected by laws that place time restrictions on certain legal claims or may be otherwise affected if prompt action is not taken. If DBM Legal Services LLC does not accept your matter or you decide not to retain our services, you should seek alternate legal counsel immediately to ensure that your legal rights are not affected. DBM LEGAL SERVICES LLC WILL NOT TAKE ANY ACTION ON YOUR BEHALF PRIOR TO RECEIPT AND ACCEPTANCE BY OUR LAW FIRM OF A SIGNED ENGAGEMENT LETTER AND REQUIRED RETAINER FEE. I HEREBY ACKNOWLEDGE THAT I HAVE READ THE FOREGOING NOTICE AND UNDERSTAND THAT DBM LEGAL SERVICES LLC WILL NOT ACT AS MY ATTORNEYS OR TAKE ANY ACTION ON MY BEHALF UNLESS AND UNTIL A WRITTEN ENGAGEMENT LETTER SIGNED BY BOTH PARTIES AND THE REQUIRED RETAINER FEE ARE RECEIVED AND ACCEPTED BY OUR LAW FIRM. `}
                        </Typography>
                        <Field
                            component={BlackFormSwitch}
                            name="disclaimerAcknowledged"
                            id="disclaimerAcknowledged"
                            placeholder="disclaimerAcknowledged"
                            label="I hereby accept this disclaimer"
                            checked={values.disclaimerAcknowledged}
                            InputProps={{
                                style: { color: '#111111' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: '#111111' } // Ensure label text is black
                            }}
                        />

                        {errors.pointOfContactName ? <Typography color="error">{errors.pointOfContactName}</Typography> : null}
                        {errors.pointOfContactEmail ? <Typography color="error">{errors.pointOfContactEmail}</Typography> : null}
                        {errors.businessName ? <Typography color="error">{errors.businessName}</Typography> : null}
                        {errors.businessEmail ? <Typography color="error">{errors.businessEmail}</Typography> : null}
                        {errors.disclaimerAcknowledged && touched.disclaimerAcknowledged ? (
                            <Typography color="error">{errors.disclaimerAcknowledged}</Typography>
                        ) : null}
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" onClick={submitForm}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Form>
        );
    };

    const abbreviatedNewClientForm = (values, submitForm, setFieldValue, resetForm, isSubmitting, touched, errors) => {
        return (
            <Form>
                <Grid container spacing={2} p={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4" sx={{ fontWeight: 700 }} color={theme.palette.grey[900]}>
                            Ask a question
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Field
                            component={TextField}
                            name="pointOfContactName"
                            id="pointOfContactName"
                            placeholder="Name"
                            label="Name"
                            required
                            fullWidth
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Field
                            component={TextField}
                            name="pointOfContactEmail"
                            id="pointOfContactEmail"
                            type="email"
                            placeholder="Email"
                            label="Email"
                            required
                            fullWidth
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Field
                            component={PhoneNumberInput}
                            label={'Cell Phone'}
                            name="pointOfContactCellPhone"
                            fullWidth
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            component={TextField}
                            name="businessName"
                            id="businessName"
                            placeholder="Business Name"
                            label="Business Name"
                            fullWidth
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            component={TextField}
                            name="matterSummary"
                            id="matterSummary"
                            placeholder="Message"
                            label="Message"
                            multiline
                            fullWidth
                            InputProps={{
                                style: { color: 'black' } // Ensure text entered by the user is black
                            }}
                            InputLabelProps={{
                                style: { color: 'black' } // Ensure label text is black
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Stack>
                            <Typography variant="h6" color={theme.palette.black[500]}>
                                How did you learn about DBM Legal Services?
                            </Typography>
                            <Field
                                component={BlackGenericRadioGroup}
                                name="referralSource"
                                id="referralSource"
                                activeStates={['Personal Referral', 'Google', 'LinkedIn', 'Other', 'NA']}
                                onChange={(e) => {
                                    setFieldValue('referralSource', e.target.value);
                                    setFieldValue('referralSourceInfo', '');
                                }}
                                InputProps={{
                                    style: { color: 'black' } // Ensure text entered by the user is black
                                }}
                                InputLabelProps={{
                                    style: { color: 'black' } // Ensure label text is black
                                }}
                            />
                        </Stack>
                    </Grid>
                    {(values.referralSource == 'Other' || values.referralSource == 'Personal Referral') && (
                        <Grid item xs={12} md={12}>
                            <Field
                                component={TextField}
                                name="referralSourceInfo"
                                id="referralSourceInfo"
                                placeholder=""
                                label={values.referralSource === 'Other' ? 'Other?' : 'Personal Referral Name?'}
                                fullWidth
                                InputProps={{
                                    style: { color: 'black' } // Ensure text entered by the user is black
                                }}
                                InputLabelProps={{
                                    style: { color: 'black' } // Ensure label text is black
                                }}
                            />
                        </Grid>
                    )}

                    <Grid item xs={12}>
                        {errors.pointOfContactName ? <Typography color="error">{errors.pointOfContactName}</Typography> : null}
                        {errors.pointOfContactEmail ? <Typography color="error">{errors.pointOfContactEmail}</Typography> : null}
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" onClick={submitForm}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Form>
        );
    };

    return (
        <>
            <Card
                p={2}
                backgroundColor={theme.palette.common.white}
                sx={{ backgroundColor: theme.palette.common.white, borderRadius: '10px', boxShadow: 5, marginTop: 5, marginBottom: 4 }}
                >
                <Stack spacing={2} direction="column" p={2}>
                    {formSource == 'new-client-form' ? (
                        <>
                            <Typography variant="h3" fontWeight="bold" color={theme.palette.black[500]}>
                                New Client Form
                            </Typography>
                            <Typography color={theme.palette.black[500]}>
                                {`Thank you for your interest in DBM Legal Services. You can complete this form before or after your initial consultation with a member of our Operations team or your attorney. This information is for internal use only and will be used to initiate our conflict check process and to complete your internal client profile. The information you provide is confidential and will be treated accordingly. `}
                            </Typography>
                        </>
                    ) : null}
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
                            userAgent: '',
                            userIP: '',
                            dateCompleted: new Date().toISOString(),
                            reviewedByDBM: false,
                            source: formSource
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
                        validationSchema={
                            formSource == 'new-client-form'
                                ? Yup.object({
                                      pointOfContactName: Yup.string('Enter a primary point of contact name').required(
                                          'A primary point of contact name is required.'
                                      ),
                                      pointOfContactEmail: Yup.string('Enter an email')
                                          .email('Enter a valid primary point of contact email')
                                          .required('A primary point of contact email is required.'),
                                      businessName: Yup.string('Enter a business name').required('A business name is required.'),
                                      businessEmail: Yup.string('Enter an email').email('Enter a valid business email'),
                                      disclaimerAcknowledged: Yup.boolean()
                                          .oneOf([true], 'You must accept the disclaimer to submit.')
                                          .required('You must accept the disclaimer to submit.')
                                  })
                                : Yup.object({
                                      pointOfContactName: Yup.string('Enter a name.').required('Name is required.'),
                                      pointOfContactEmail: Yup.string('Enter an email')
                                          .email('Enter a valid contact email')
                                          .required('A contact email is required.')
                                  })
                        }
                    >
                        {({ values, submitForm, setFieldValue, resetForm, isSubmitting, touched, errors }) =>
                            formSource == 'new-client-form'
                                ? completeNewClientForm(values, submitForm, setFieldValue, resetForm, isSubmitting, touched, errors)
                                : abbreviatedNewClientForm(values, submitForm, setFieldValue, resetForm, isSubmitting, touched, errors)
                        }
                    </Formik>
                </Stack>
            </Card>
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
                    <Stack direction="row" spacing={2} justifyContent="space-between">
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
