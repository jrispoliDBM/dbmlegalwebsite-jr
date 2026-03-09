import React from 'react';
import Head from 'next/head';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Divider from '@mui/material/Divider';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckIcon from '@mui/icons-material/Check';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Main from '@/layouts/Main';
import Container from 'components/core/Container';
import GradientCard from 'components/core/GradientCard';
import DbmDivider from '@/components/core/DbmDivider';
import { CldImage } from 'next-cloudinary';
import useTeam from '@/hooks/useTeam';

const CONTACT_URL = '/contact-us';
const PHONE = '(646) 809-8408';
const EMAIL = 'dbmadmin@dbmlegalservices.com';

const services = [
    {
        title: 'Regulatory Compliance & Risk Management',
        description: 'We develop and implement compliance programs to keep your practice aligned with federal and state regulations, including HIPAA, Stark Law, Anti-Kickback statutes, and state-specific healthcare rules.'
    },
    {
        title: 'Mergers, Acquisitions & Strategic Transactions',
        description: 'We handle transactional work from LOI through closing — including due diligence, purchase agreements, and regulatory filings.'
    },
    {
        title: 'Payor Contracts & Reimbursement',
        description: 'We review, negotiate, and manage agreements with insurance carriers, managed care organizations, and government payors.'
    },
    {
        title: 'Physician Employment & Professional Agreements',
        description: 'From employment agreements and independent contractor arrangements to non-compete and non-solicitation provisions.'
    },
    {
        title: 'Medical Staff Credentialing & Privileging',
        description: 'Credentialing and privileging processes, peer review matters, and medical staff governance — areas where in-house GC experience provides distinctive depth.'
    },
    {
        title: 'Formation, Structuring & Corporate Governance',
        description: 'Entity selection, formation, and restructuring — including CPOM compliance, PC/MSO structures, and multi-state operational requirements.'
    },
    {
        title: 'Privacy, HIPAA & Data Security',
        description: 'HIPAA compliance, breach notification obligations, Business Associate Agreements, and privacy policies.'
    },
    {
        title: 'Vendor, Facility & Operational Agreements',
        description: 'Vendor contracts, equipment leases, facility agreements, and other operational documents critical to running a compliant healthcare business.'
    },
    {
        title: 'Licensing & Multi-State Operations',
        description: 'Obtaining and maintaining necessary licenses for physician owners and corporate entities — critical for telehealth, multi-location operations, or new state markets.'
    }
];

const clientTypes = [
    {
        title: 'Medical Practices & Physician Groups',
        items: ['Private physician practices', 'Group practices', 'Independent contractor physicians', 'Surgical and specialty practices', 'Dental/orthodontic practices']
    },
    {
        title: 'Specialty & Allied Health Practitioners',
        items: ['Wellness centers and clinics', 'IV therapy clinics', 'Chronic care management programs', 'Remote patient monitoring (RPM/RTM)', 'Mental & behavioral health practitioners']
    },
    {
        title: 'Aesthetic & Cosmetic Services',
        items: ['MedSpas and aesthetic clinics', 'Weight loss clinics', 'Cosmetic dermatology practices', 'Anti-aging and hormone therapy providers']
    },
    {
        title: 'Healthcare Organizations & Facilities',
        items: ['Surgery centers and outpatient clinics', 'Diagnostic imaging centers', 'Concierge medicine practices', 'Urgent care centers', 'Multi-specialty groups']
    },
    {
        title: 'Digital Health & Technology-Enabled Services',
        items: ['Telehealth practitioners', 'Chronic disease management platforms', 'Remote healthcare startups', 'Health tech companies']
    }
];

const pricingTiers = [
    {
        name: 'Legal Consultant',
        subtitle: 'Ideal for startups, early-stage practices, and smaller organizations',
        price: '$2,500',
        hours: '5',
        features: [
            'Dedicated Healthcare General Counsel (Shawn Phillips)',
            'Access to the full DBM Legal Services team',
            'Compliance monitoring and regulatory updates',
            'Phone, email, and video consultation access',
            'Monthly utilization reports',
            'Up to 25% unused hours roll over monthly'
        ],
        highlighted: false
    },
    {
        name: 'General Counsel',
        subtitle: 'Ideal for established practices and growing organizations',
        price: '$4,500',
        hours: '10',
        features: [
            'Everything in Legal Consultant, plus:',
            'Strategic business advisory support',
            'Contract drafting, review, and negotiation',
            'Proactive compliance program development',
            'Priority scheduling and response times',
            'Up to 25% unused hours roll over monthly'
        ],
        highlighted: true
    },
    {
        name: 'Chief Compliance Officer',
        subtitle: 'Ideal for multi-location practices, health systems, and complex organizations',
        price: '$8,500',
        hours: '18',
        features: [
            'Everything in General Counsel, plus:',
            'Comprehensive compliance program management',
            'Regulatory audit preparation and support',
            'Board and leadership advisory services',
            'M&A and strategic transaction support',
            'Dedicated compliance monitoring and reporting',
            'Up to 25% unused hours roll over monthly'
        ],
        highlighted: false
    }
];

const differentiators = [
    {
        title: 'A Real General Counsel — Not a Hotline',
        description: 'Shawn Phillips brings the experience of having served as General Counsel for a major health system. He anticipates issues, advises proactively, and functions as a true member of your leadership team.'
    },
    {
        title: 'One Membership, Full Team Access',
        description: 'Your relationship starts with Shawn, but your membership unlocks the entire DBM Legal Services team. Corporate, employment, IP — the right specialist is already on your team.'
    },
    {
        title: 'Big Law Training, Accessible Pricing',
        description: "DBM's attorneys come from top-tier law firms and bring that caliber of expertise to a subscription model that makes ongoing legal support feasible for practices of every size."
    },
    {
        title: 'Proactive Compliance Management',
        description: "We don't wait for problems. We monitor regulatory changes, flag issues before they become crises, and keep your compliance programs current."
    },
    {
        title: 'Transparent Billing & Reporting',
        description: 'Every month you receive a detailed report showing exactly how your hours were used. No ambiguity, no hidden charges — just clarity and accountability.'
    },
    {
        title: 'Flexible & Scalable',
        description: 'Start with the tier that fits your current needs and scale up as your practice grows. Upgrade anytime, add hours as needed.'
    }
];

const faqs = [
    {
        question: 'How do I get started?',
        answer: 'Schedule a free consultation by contacting our Intake Team at (646) 809-8408, emailing dbmadmin@dbmlegalservices.com, or using our online scheduling link. During this initial conversation, we\'ll discuss your needs and recommend the most suitable membership tier.'
    },
    {
        question: 'What makes this different from hiring outside counsel on an hourly basis?',
        answer: 'Traditional outside counsel charges by the hour with no ongoing relationship or strategic context. The Healthcare General Counsel program gives you a dedicated attorney — Shawn Phillips — who knows your practice, your goals, and your risk profile. You get continuous, proactive support for a predictable monthly fee, plus access to the full DBM team for specialized matters.'
    },
    {
        question: "What's the difference between this and a traditional retainer?",
        answer: 'A retainer is typically an upfront fee for specific, defined legal work. The DBM Healthcare General Counsel program is an ongoing membership that provides continuous access to legal services, compliance support, and strategic advisory — with predictable monthly billing and the flexibility to scale.'
    },
    {
        question: "What happens if I don't use all my hours in a given month?",
        answer: 'Up to 25% of your unused monthly hours roll over to the following month, so you always get full value from your membership.'
    },
    {
        question: 'Can I add more hours if I need them?',
        answer: "Yes. Additional hours beyond your monthly allocation are billed at your package's base subscription rate — the same rate you're already paying, with no premium."
    },
    {
        question: 'Can I upgrade or downgrade my membership?',
        answer: 'Absolutely. Our memberships are designed to flex with your business. You can upgrade or downgrade at any time based on your evolving needs.'
    },
    {
        question: 'Do I need to have my business entity formed before engaging DBM?',
        answer: 'No. We can assist with entity formation and structuring from the ground up, ensuring your practice is set up correctly from day one.'
    },
    {
        question: 'What states does DBM cover?',
        answer: 'DBM Legal Services provides support across multiple states. Shawn is admitted to practice in Pennsylvania and New Jersey, and the broader DBM team covers additional jurisdictions. Contact us to confirm coverage in your state.'
    },
    {
        question: 'Can I hire DBM for a specific project without a membership?',
        answer: 'Yes, we offer project-based legal services. However, project-based rates are higher than membership rates, which reflect a discounted, ongoing partnership.'
    },
    {
        question: 'Does the membership cover filing costs and state fees?',
        answer: 'Compliance services include all Registered Agent Service Charges. State out-of-pocket fees (filing fees, registration fees, etc.) are billed separately.'
    }
];

export default function HealthcareGC() {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), { defaultMatches: true });
    const { team } = useTeam();
    const shawn = team.find((member) => member.name === 'Shawn Phillips');

    return (
        <>
            <Head>
                <title>Healthcare General Counsel | DBM Legal Services</title>
                <meta
                    name="description"
                    content="Fractional General Counsel for healthcare practices. Led by former hospital GC Shawn Phillips. Compliance, transactions, and risk management — one monthly fee."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>

            <Box sx={{ overflowX: 'hidden' }}>
                <Main bgcolor={'background.paper'}>
                    {/* ========== 1. HERO — matches ServiceHeader pattern ========== */}
                    <Container>
                        <Stack p={1} pt={8}>
                            <Box>
                                <Grid container spacing={isMd ? 4 : 2} pb={4}>
                                    <Grid item xs={12} md={12}>
                                        <Box maxWidth={{ xs: 1, sm: '100%' }}>
                                            <Typography component="div" variant="h2" color="text.primary">
                                                <Typography variant="h2" mb={-2}>
                                                    Healthcare
                                                </Typography>
                                                <Typography color="primary" component="span" variant="inherit">
                                                    General Counsel
                                                </Typography>
                                                <Typography color={theme.palette.white[100]} component="span" variant="inherit">
                                                    .
                                                </Typography>
                                            </Typography>
                                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                                Without the Full-Time Price Tag
                                            </Typography>
                                            <Box data-aos="fade-right">
                                                <Typography variant="h5" color="text.secondary">
                                                    Led by Senior Partner Shawn Phillips, DBM&apos;s Healthcare General Counsel program gives
                                                    physicians, medical practices, and healthcare organizations a dedicated legal partner
                                                    for the complex regulatory, transactional, and compliance demands of modern
                                                    healthcare — backed by the full depth of the DBM team.
                                                </Typography>
                                            </Box>
                                            <Box
                                                display="flex"
                                                flexDirection={{ xs: 'column', sm: 'row' }}
                                                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                                                marginTop={4}
                                            >
                                                <Button
                                                    component="a"
                                                    variant="outlined"
                                                    color="primary"
                                                    size="large"
                                                    fullWidth={!isMd}
                                                    href={CONTACT_URL}
                                                >
                                                    Schedule a Free Consultation
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            {/* ========== 2. INTRODUCTION — in GradientCard ========== */}
                            <Stack spacing={4} p={2}>
                                <GradientCard>
                                    <Box p={{ xs: 3, md: 5 }}>
                                        <Typography
                                            variant="h3"
                                            fontWeight="bold"
                                            sx={{
                                                textDecoration: 'underline',
                                                textDecorationColor: alpha(theme.palette.primary.main, 1.0)
                                            }}
                                            pb={3}
                                        >
                                            The Challenge
                                        </Typography>
                                        <Typography variant="h5" color={theme.palette.white[100]} pb={2}>
                                            Running a healthcare organization means navigating a legal landscape that never stops
                                            shifting — Stark Law, Anti-Kickback, HIPAA, payor contracts, credentialing, employment
                                            agreements, and more. Most practices can&apos;t justify the cost of a full-time general
                                            counsel, and traditional outside counsel charges by the hour with no continuity or
                                            strategic context.
                                        </Typography>
                                        <Divider sx={{ borderColor: theme.palette.white[700], my: 3 }} />
                                        <Typography
                                            variant="h3"
                                            fontWeight="bold"
                                            color="primary"
                                            pb={3}
                                        >
                                            The Solution
                                        </Typography>
                                        <Typography variant="h5" color={theme.palette.white[100]} pb={2}>
                                            For a predictable monthly fee, you get Shawn Phillips — a former hospital General
                                            Counsel and seasoned healthcare attorney — as your dedicated legal partner. And behind
                                            Shawn stands the entire DBM Legal Services team: Big Law-trained attorneys with deep
                                            expertise across corporate transactions, regulatory compliance, risk management, and
                                            business strategy.
                                        </Typography>
                                        <Typography variant="h5" color={theme.palette.white[500]} sx={{ fontStyle: 'italic' }}>
                                            This isn&apos;t reactive legal support. It&apos;s a strategic partnership designed to protect
                                            your practice, keep you compliant, and position you for growth.
                                        </Typography>
                                    </Box>
                                </GradientCard>

                                {/* ========== 3. MEET YOUR GENERAL COUNSEL ========== */}
                                <GradientCard>
                                    <Box p={{ xs: 3, md: 5 }}>
                                        <Typography
                                            variant="h3"
                                            fontWeight="bold"
                                            pb={3}
                                            sx={{
                                                textDecoration: 'underline',
                                                textDecorationColor: alpha(theme.palette.primary.main, 1.0)
                                            }}
                                        >
                                            Meet Your General Counsel
                                        </Typography>
                                        <Grid container spacing={4}>
                                            <Grid item xs={12} md={5}>
                                                <Box
                                                    sx={{
                                                        position: 'relative',
                                                        width: 1,
                                                        minHeight: { xs: 400, md: 500 },
                                                        overflow: 'hidden',
                                                        borderRadius: 2,
                                                        '&:hover img': {
                                                            transform: 'scale(1.05)',
                                                            transition: 'transform 0.7s ease'
                                                        },
                                                        '& img': {
                                                            transform: 'scale(1.0)',
                                                            transition: 'transform 0.7s ease'
                                                        }
                                                    }}
                                                >
                                                    {shawn && shawn.image ? (
                                                        <CldImage
                                                            src={shawn.image}
                                                            fill={true}
                                                            alt="Shawn Phillips - Senior Partner"
                                                            style={{ objectFit: 'contain' }}
                                                        />
                                                    ) : (
                                                        <Box
                                                            sx={{
                                                                width: 1,
                                                                height: '100%',
                                                                minHeight: { xs: 400, md: 500 },
                                                                backgroundColor: theme.palette.black[400],
                                                                borderRadius: 2,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center'
                                                            }}
                                                        >
                                                            <Typography color="text.secondary">Loading...</Typography>
                                                        </Box>
                                                    )}
                                                </Box>
                                                <Typography variant="h4" fontWeight={700} pt={2}>
                                                    Shawn Phillips
                                                </Typography>
                                                <Typography variant="h5" color="primary" fontWeight={700}>
                                                    Senior Partner
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} md={7}>
                                                <Stack spacing={2}>
                                                    <Typography variant="body1" color={theme.palette.white[100]} sx={{ lineHeight: 1.8 }}>
                                                        Shawn Phillips is a Senior Partner in the Healthcare Practice Group at DBM
                                                        Legal Services. He advises physicians, medical practices, healthcare
                                                        organizations, and other professionals on a broad range of healthcare law
                                                        matters, including mergers and acquisitions, regulatory compliance, risk
                                                        management, medical staff credentialing, professional and vendor agreements,
                                                        payor contracts, privacy issues including HIPAA compliance, and Stark Law
                                                        and Anti-Kickback statute analysis.
                                                    </Typography>
                                                    <Typography variant="body1" color={theme.palette.white[100]} sx={{ lineHeight: 1.8 }}>
                                                        Prior to joining DBM, Shawn served as General Counsel and Secretary of the
                                                        Board of Directors at Coordinated Health, where he managed compliance and
                                                        regulatory matters, oversaw physician employment agreements, structured
                                                        buyouts of minority physician shareholders, and supported strategic expansion
                                                        initiatives for clinical services.
                                                    </Typography>
                                                    <Typography variant="body1" color={theme.palette.white[100]} sx={{ lineHeight: 1.8 }}>
                                                        Earlier in his career, Shawn was a Partner at Thomas, Thomas & Hafer, LLP,
                                                        and held a senior role at Saba, Endler & Associates, LLP, where his practice
                                                        focused predominantly on healthcare law.
                                                    </Typography>
                                                    <Typography variant="body1" color={theme.palette.white[500]} sx={{ lineHeight: 1.8 }}>
                                                        Shawn earned his Juris Doctor from Washington and Lee University School of
                                                        Law and holds a Bachelor of Science in Mathematics from Moravian University.
                                                        He is admitted to practice in Pennsylvania and New Jersey.
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            borderLeft: `4px solid ${theme.palette.primary.main}`,
                                                            pl: 3,
                                                            py: 2,
                                                            mt: 2
                                                        }}
                                                    >
                                                        <Typography variant="h5" color={theme.palette.white[100]} sx={{ fontStyle: 'italic' }}>
                                                            &quot;When you engage DBM&apos;s Healthcare General Counsel program, Shawn is
                                                            your first call — but you&apos;re never limited to one attorney. Your
                                                            membership gives you access to the full DBM team, so no matter what
                                                            issue arises, you have the right expertise at the table.&quot;
                                                        </Typography>
                                                    </Box>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </GradientCard>

                                {/* ========== 4. SERVICES — CheckMarkList pattern ========== */}
                                <GradientCard>
                                    <Box p={{ xs: 3, md: 5 }}>
                                        <Typography variant="h3" align="center" color="primary" pb={1}>
                                            How We Support Your Practice
                                        </Typography>
                                        <Typography variant="h4" align="center" color={theme.palette.white[100]} pb={4}>
                                            Comprehensive Healthcare Legal Services — All Under One Membership
                                        </Typography>
                                        <Grid container spacing={3}>
                                            {services.map((service, index) => (
                                                <Grid item xs={12} md={6} key={index}>
                                                    <Stack direction="row" spacing={1.5}>
                                                        <CheckBoxIcon color="primary" sx={{ mt: 0.3 }} />
                                                        <Box>
                                                            <Typography variant="h6" fontWeight="bold" color={theme.palette.white[100]}>
                                                                {service.title}
                                                            </Typography>
                                                            <Typography color={theme.palette.white[500]}>
                                                                {service.description}
                                                            </Typography>
                                                        </Box>
                                                    </Stack>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </GradientCard>

                                {/* ========== 5. WHO WE SERVE ========== */}
                                <GradientCard>
                                    <Box p={{ xs: 3, md: 5 }}>
                                        <Typography
                                            variant="h3"
                                            fontWeight="bold"
                                            pb={4}
                                            sx={{
                                                textDecoration: 'underline',
                                                textDecorationColor: alpha(theme.palette.primary.main, 1.0)
                                            }}
                                        >
                                            Who We Serve
                                        </Typography>
                                        <Typography variant="h4" color={theme.palette.white[100]} pb={4}>
                                            Built for Healthcare Organizations at Every Stage
                                        </Typography>
                                        <Grid container spacing={4}>
                                            {clientTypes.map((category, index) => (
                                                <Grid item xs={12} sm={6} md={4} key={index}>
                                                    <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                                                        {category.title}
                                                    </Typography>
                                                    <Stack spacing={0.75}>
                                                        {category.items.map((item, i) => (
                                                            <Stack direction="row" spacing={1} alignItems="flex-start" key={i}>
                                                                <CheckBoxIcon
                                                                    color="primary"
                                                                    sx={{ fontSize: 18, mt: 0.3 }}
                                                                />
                                                                <Typography variant="body2" color={theme.palette.white[500]}>
                                                                    {item}
                                                                </Typography>
                                                            </Stack>
                                                        ))}
                                                    </Stack>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </GradientCard>

                                {/* ========== 6. MEMBERSHIP PRICING ========== */}
                                <GradientCard>
                                    <Box p={{ xs: 3, md: 5 }}>
                                        <Typography variant="h3" align="center" color="primary" pb={1}>
                                            Membership Packages
                                        </Typography>
                                        <Typography variant="h4" align="center" color={theme.palette.white[100]} pb={1}>
                                            Predictable Pricing. Comprehensive Support. No Surprises.
                                        </Typography>
                                        <Typography variant="h5" align="center" color={theme.palette.white[500]} pb={4} sx={{ maxWidth: 900, mx: 'auto' }}>
                                            Every tier includes Shawn Phillips as your dedicated Healthcare General Counsel,
                                            plus access to the broader DBM team for specialized matters.
                                        </Typography>
                                        <Grid container spacing={3} justifyContent="center">
                                            {pricingTiers.map((tier, index) => (
                                                <Grid item xs={12} md={4} key={index}>
                                                    <Box
                                                        sx={{
                                                            border: tier.highlighted
                                                                ? `2px solid ${theme.palette.primary.main}`
                                                                : `1px solid ${theme.palette.white[700]}`,
                                                            borderRadius: 3,
                                                            p: 3,
                                                            height: '100%',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            backgroundColor: tier.highlighted
                                                                ? alpha(theme.palette.primary.main, 0.05)
                                                                : 'transparent'
                                                        }}
                                                    >
                                                        {tier.highlighted && (
                                                            <Typography
                                                                variant="caption"
                                                                fontWeight={700}
                                                                color="primary"
                                                                sx={{ textTransform: 'uppercase', letterSpacing: 1 }}
                                                                pb={1}
                                                            >
                                                                Recommended
                                                            </Typography>
                                                        )}
                                                        <Typography variant="h4" fontWeight={700} color={theme.palette.white[100]}>
                                                            {tier.name}
                                                        </Typography>
                                                        <Typography variant="caption" color={theme.palette.white[500]} pb={2}>
                                                            {tier.subtitle}
                                                        </Typography>
                                                        <Stack direction="row" alignItems="baseline" spacing={0.5} pb={1}>
                                                            <Typography variant="h3" fontWeight={700} color="primary">
                                                                {tier.price}
                                                            </Typography>
                                                            <Typography variant="h5" color={theme.palette.white[500]}>
                                                                /month
                                                            </Typography>
                                                        </Stack>
                                                        <Typography variant="body2" color={theme.palette.white[500]} pb={2}>
                                                            {tier.hours} billable attorney hours included
                                                        </Typography>
                                                        <Divider sx={{ borderColor: theme.palette.white[700], mb: 2 }} />
                                                        <Stack spacing={1.5} flexGrow={1}>
                                                            {tier.features.map((feature, i) => (
                                                                <Stack direction="row" spacing={1} alignItems="flex-start" key={i}>
                                                                    <CheckIcon
                                                                        sx={{
                                                                            color: theme.palette.primary.main,
                                                                            fontSize: 18,
                                                                            mt: 0.3
                                                                        }}
                                                                    />
                                                                    <Typography variant="body2" color={theme.palette.white[200]}>
                                                                        {feature}
                                                                    </Typography>
                                                                </Stack>
                                                            ))}
                                                        </Stack>
                                                        <Button
                                                            variant={tier.highlighted ? 'contained' : 'outlined'}
                                                            color="primary"
                                                            size="large"
                                                            href={CONTACT_URL}
                                                            fullWidth
                                                            sx={{ mt: 3 }}
                                                        >
                                                            Schedule a Consultation
                                                        </Button>
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                        <Stack spacing={1} pt={4}>
                                            <Typography variant="caption" color={theme.palette.white[500]}>
                                                <Typography variant="caption" component="span" fontWeight="bold">
                                                    Additional Hours:
                                                </Typography>
                                                {' '}Need more time in a given month? Additional hours are billed at your package&apos;s base subscription rate — no surprise rate increases.
                                            </Typography>
                                            <Typography variant="caption" color={theme.palette.white[500]}>
                                                <Typography variant="caption" component="span" fontWeight="bold">
                                                    Annual Membership:
                                                </Typography>
                                                {' '}All memberships are structured on an annual basis for continuity and cost savings. We offer discounts for clients who pay quarterly or annually in advance.
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </GradientCard>

                                {/* ========== 7. WHY DBM ========== */}
                                <GradientCard>
                                    <Box p={{ xs: 3, md: 5 }}>
                                        <Typography
                                            variant="h3"
                                            fontWeight="bold"
                                            pb={4}
                                            sx={{
                                                textDecoration: 'underline',
                                                textDecorationColor: alpha(theme.palette.primary.main, 1.0)
                                            }}
                                        >
                                            Why DBM
                                        </Typography>
                                        <Grid container spacing={3}>
                                            {differentiators.map((item, index) => (
                                                <Grid item xs={12} md={6} key={index}>
                                                    <Stack direction="row" spacing={1.5}>
                                                        <CheckBoxIcon color="primary" sx={{ mt: 0.3 }} />
                                                        <Box>
                                                            <Typography variant="h6" fontWeight="bold" color={theme.palette.white[100]}>
                                                                {item.title}
                                                            </Typography>
                                                            <Typography color={theme.palette.white[500]}>
                                                                {item.description}
                                                            </Typography>
                                                        </Box>
                                                    </Stack>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </GradientCard>

                                {/* ========== 8. FAQ ========== */}
                                <GradientCard>
                                    <Box p={{ xs: 3, md: 5 }}>
                                        <Typography
                                            variant="h3"
                                            fontWeight="bold"
                                            pb={3}
                                            sx={{
                                                textDecoration: 'underline',
                                                textDecorationColor: alpha(theme.palette.primary.main, 1.0)
                                            }}
                                        >
                                            Frequently Asked Questions
                                        </Typography>
                                        {faqs.map((faq, index) => (
                                            <Box pb={2} key={index}>
                                                <Accordion sx={{ backgroundColor: theme.palette.white[100] }}>
                                                    <AccordionSummary
                                                        expandIcon={<ArrowDropDownIcon sx={{ color: theme.palette.black[500] }} />}
                                                    >
                                                        <Typography color={theme.palette.black[500]} variant="h6" fontWeight="bold">
                                                            {faq.question}
                                                        </Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography color={theme.palette.black[500]}>
                                                            {faq.answer}
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </Box>
                                        ))}
                                    </Box>
                                </GradientCard>
                            </Stack>

                            {/* ========== 9. FINAL CTA — matches CallToAction pattern ========== */}
                            <Box py={6}>
                                <GradientCard
                                    hover={false}
                                    gradientStart={theme.palette.black[600]}
                                    gradientEnd={theme.palette.black[800]}
                                >
                                    <Box p={{ xs: 4, md: 6 }} textAlign="center">
                                        <Typography variant="h3" color={theme.palette.white[100]} pb={2}>
                                            Ready to Give Your Practice the Legal Leadership It{' '}
                                            <Typography variant="h3" component="span" color="primary">
                                                Deserves
                                            </Typography>
                                            <Typography color={theme.palette.white[100]} component="span" variant="inherit">
                                                ?
                                            </Typography>
                                        </Typography>
                                        <Typography variant="h5" color={theme.palette.white[500]} pb={4} sx={{ maxWidth: 800, mx: 'auto' }}>
                                            Schedule a free consultation with our team. We&apos;ll discuss your practice, your
                                            challenges, and whether the DBM Healthcare General Counsel program is the right
                                            fit — no pressure, no obligation.
                                        </Typography>
                                        <Button
                                            component="a"
                                            variant="outlined"
                                            color="primary"
                                            size="large"
                                            href={CONTACT_URL}
                                            sx={{ mb: 4 }}
                                        >
                                            Schedule Your Free Consultation
                                        </Button>
                                        <Stack
                                            direction={{ xs: 'column', sm: 'row' }}
                                            spacing={4}
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <PhoneIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                                                <Typography
                                                    component="a"
                                                    href={`tel:${PHONE}`}
                                                    color={theme.palette.white[100]}
                                                    sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}
                                                >
                                                    {PHONE}
                                                </Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <EmailIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                                                <Typography
                                                    component="a"
                                                    href={`mailto:${EMAIL}`}
                                                    color={theme.palette.white[100]}
                                                    sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}
                                                >
                                                    {EMAIL}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </GradientCard>
                            </Box>
                        </Stack>
                    </Container>
                </Main>
            </Box>
        </>
    );
}
