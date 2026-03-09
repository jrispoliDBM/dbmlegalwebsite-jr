import React from 'react';
import Head from 'next/head';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Divider from '@mui/material/Divider';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckIcon from '@mui/icons-material/Check';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HealingIcon from '@mui/icons-material/Healing';
import SpaIcon from '@mui/icons-material/Spa';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DevicesIcon from '@mui/icons-material/Devices';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupsIcon from '@mui/icons-material/Groups';
import BalanceIcon from '@mui/icons-material/Balance';
import ShieldIcon from '@mui/icons-material/Shield';
import BarChartIcon from '@mui/icons-material/BarChart';
import Main from '@/layouts/Main';
import Container from 'components/core/Container';
import GradientCard from 'components/core/GradientCard';
import { CldImage } from 'next-cloudinary';

const CONTACT_URL = 'https://outlook.office.com/book/ShawnPhillips@dbmlegalservices.com/s/bZQj8jMzz0WU2GByJdozkg2?ismsaljsauthenabled';
const PHONE = '(646) 809-8408';
const EMAIL = 'dbmadmin@dbmlegalservices.com';

const services = [
    {
        title: 'Day-to-Day Legal Advisory',
        description: 'We advise on the day-to-day legal and business matters that arise across the ongoing operation and management of healthcare organizations.'
    },
    {
        title: 'Regulatory Compliance & Risk Management',
        description: 'We help healthcare organizations navigate federal and state regulatory requirements, including HIPAA, Stark Law, the Anti-Kickback Statute, audit readiness, and broader compliance program development.'
    },
    {
        title: 'Mergers, Acquisitions & Strategic Transactions',
        description: 'We advise on transactions from LOI through closing, including due diligence, purchase agreements, structuring, and regulatory considerations.'
    },
    {
        title: 'Payor Contracts & Reimbursement',
        description: 'We review, negotiate, and manage agreements with commercial carriers, managed care organizations, and government payors.'
    },
    {
        title: 'Physician Employment & Professional Agreements',
        description: 'We draft and negotiate employment agreements, independent contractor arrangements, restrictive covenant provisions, and other key professional agreements.'
    },
    {
        title: 'Medical Staff Credentialing & Privileging',
        description: 'We advise on credentialing and privileging processes, peer review matters, and medical staff governance.'
    },
    {
        title: 'Formation, Structuring & Corporate Governance',
        description: 'We counsel on entity formation, restructuring, governance, CPOM compliance, PC/MSO structures, and multi-state operational planning.'
    },
    {
        title: 'Privacy, HIPAA & Data Security',
        description: 'We advise on HIPAA compliance, breach response obligations, Business Associate Agreements, and privacy-related policies and procedures.'
    },
    {
        title: 'Vendor, Facility & Operational Agreements',
        description: 'We handle vendor contracts, equipment leases, facility agreements, and other core operational documents.'
    },
    {
        title: 'Licensing & Multi-State Operations',
        description: 'We support licensing strategy and ongoing compliance for physician owners and business entities, including telehealth and multi-state expansion.'
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
        name: 'Starter',
        subtitle: 'Ideal for startups, early-stage practices, and smaller organizations',
        price: '$2,500',
        hours: '5',
        keyTerms: [
            { label: 'Hours Per Month', value: '5 billable attorney hours' }
        ]
    },
    {
        name: 'Professional',
        subtitle: 'Ideal for established practices and growing organizations',
        price: '$4,500',
        hours: '10',
        keyTerms: [
            { label: 'Hours Per Month', value: '10 billable attorney hours' }
        ]
    },
    {
        name: 'Enterprise',
        subtitle: 'Ideal for multi-location practices, health systems, and complex organizations',
        price: '$8,500',
        hours: '20',
        keyTerms: [
            { label: 'Hours Per Month', value: '20 billable attorney hours' }
        ]
    }
];

const includedItems = [
    'Dedicated General Counsel support from Shawn Phillips',
    'Access to the full DBM Legal Services team across all practice areas',
    'Phone, email, and video consultation access',
    'Monthly utilization reports',
    'Up to 25% of unused hours roll over each month',
    'Additional hours billed at your subscription rate — no premium pricing',
];

const differentiators = [
    {
        icon: GavelIcon,
        title: 'Embedded General Counsel',
        description: 'Shawn Phillips brings the perspective of a former health system General Counsel and serves as a proactive, strategic advisor to your leadership team.'
    },
    {
        icon: GroupsIcon,
        title: 'One Relationship, Full Team Access',
        description: 'Your engagement is led by Shawn, with seamless access to the broader DBM team when specialized support is needed.'
    },
    {
        icon: BalanceIcon,
        title: 'Big Law-Caliber Counsel, Structured for Value',
        description: 'DBM combines top-tier transactional and regulatory experience with a subscription model designed to deliver sophisticated counsel in a more efficient, cost-conscious format.'
    },
    {
        icon: ShieldIcon,
        title: 'Proactive, Not Reactive',
        description: 'We identify issues early, monitor regulatory developments, and help clients address legal risk before it disrupts operations.'
    },
    {
        icon: BarChartIcon,
        title: 'Transparency and Scalability',
        description: 'Clear monthly reporting, predictable pricing, and flexible capacity allow your legal support to grow alongside your organization.'
    }
];

const faqs = [
    {
        question: 'How do I get started?',
        answer: 'To get started, schedule a consultation with Shawn Phillips directly at (570) 977-1344 or shawn.phillips@dbmlegalservices.com. You may also book online here:',
        bookingUrl: 'https://outlook.office.com/book/ShawnPhillips@dbmlegalservices.com/?ismsaljsauthenabled',
        bookingLabel: 'Schedule with Shawn'
    },
    {
        question: 'What makes this different from hiring outside counsel on an hourly basis?',
        answer: "Traditional outside counsel is often engaged reactively, with limited day-to-day visibility into your organization and its broader objectives. DBM's Healthcare General Counsel program is designed differently. You work with Shawn Phillips as a dedicated legal partner who understands your business, your leadership priorities, and your risk profile. The result is more strategic, more consistent legal support delivered through a predictable monthly model."
    },
    {
        question: 'What is the difference between this and a traditional retainer?',
        answer: 'A traditional retainer is typically tied to specific matters or a limited scope of work. Our Healthcare General Counsel program is structured as an ongoing subscription designed to provide continuous legal support across a broad range of healthcare, corporate, and operational issues. It is intended to function as a more integrated and strategic relationship, not simply a deposit against future hourly work.'
    },
    {
        question: 'What happens if I do not use all of my hours in a given month?',
        answer: 'Up to 25% of unused monthly hours may roll over into the following month. This structure provides added flexibility while helping clients capture the full value of their subscription.'
    },
    {
        question: 'Can I add more hours if needed?',
        answer: 'Yes. If your legal needs exceed your monthly allocation in a given month, additional time is billed at your subscription rate.'
    },
    {
        question: 'Can I upgrade or downgrade my subscription?',
        answer: 'Yes. Subscription tiers are designed to accommodate the changing needs of healthcare organizations over time. As your practice grows or your legal demands shift, your plan can be adjusted accordingly.'
    },
    {
        question: 'Do I need to have my business entity formed before engaging DBM?',
        answer: 'No. We regularly advise clients at the earliest stages of formation and can assist with entity selection, structuring, governance, and related legal considerations to help ensure the organization is established on a sound foundation.'
    },
    {
        question: 'Can I engage DBM for a discrete project without a subscription?',
        answer: 'Yes. We also offer project-based legal services for clients with specific transactional, regulatory, or operational needs. That said, the subscription model is often the more efficient option for organizations seeking ongoing counsel, continuity, and broader access to our team.'
    }
];

const testimonials = [
    {
        quote: 'Working with Shawn helped me navigate the transition between fellowship training and clinical practice. Shawn provided a thorough and assertive approach that succeeded in executing the contract I deserve, and that made all the difference in my job satisfaction. Don\'t go to anyone else!',
        name: 'Tyler MacRae, DPM, AACFAS',
        title: 'Foot and Ankle Surgery',
        organization: 'St. Jude Orthopedics and Sports Medicine',
        avatar: '3_jwp5xl'
    },
    {
        quote: 'Shawn\'s reputation is impeccable for physician contract law. My colleagues and I have benefited from his counsel in the past. There was no question that he was my choice when I needed help with my recent contract review and negotiation. I was very happy with the outcome.',
        name: 'Scott Sauer',
        title: 'Orthopedic Surgeon, Foot and Ankle Specialist',
        organization: 'Roper St. Francis Healthcare',
        avatar: '1_ejraid'
    },
    {
        quote: 'Shawn provided me first-class and timely physician contract analysis that allowed me to confidently accept a new job offer in a new state. I felt well educated and extremely prepared for talks with my future employer. He truly masters the intricacies of health care systems and operations.',
        name: 'Brian Goldberg, M.D.',
        title: 'Orthopaedics',
        organization: 'Rothman Orthopaedics Florida',
        avatar: '2_jwqnk1'
    },
    {
        quote: 'Shawn brings a rare blend of legal expertise and deep understanding of the healthcare landscape, making complex issues clear and manageable. His thoughtful, physician-centered approach has earned the trust of dozens of physicians I know. He\'s exactly the kind of advocate every physician wants in their corner.',
        name: 'Eiran Mandelker, M.D.',
        title: 'Medical Officer',
        organization: 'FDA',
        avatar: '4_mabwum'
    }
];

const categoryIcons = [LocalHospitalIcon, HealingIcon, SpaIcon, ApartmentIcon, DevicesIcon];

const HERO_TRUST_POINTS = ['Former Hospital General Counsel', 'Full DBM Team Access', 'Transparent Monthly Pricing'];

export default function HealthcareGCPhillips() {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), { defaultMatches: true });

    return (
        <>
            <Head>
                <title>Healthcare General Counsel | DBM Legal Services</title>
                <meta
                    name="description"
                    content="Fractional General Counsel for healthcare practices. Led by former hospital GC Shawn Phillips. Compliance, transactions, and risk management. One monthly fee."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>

            <Box sx={{ overflowX: 'hidden' }}>
                <Main bgcolor={'background.paper'}>
                    {/* ========== 1. HERO ========== */}
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
                                                Without the Full-Time Overhead
                                            </Typography>
                                            <Box data-aos="fade-right">
                                                <Typography variant="h5" color="text.secondary">
                                                    Led by Senior Partner Shawn Phillips, DBM&apos;s Healthcare General Counsel program
                                                    provides physicians, medical practices, and healthcare organizations with a dedicated
                                                    legal partner for the regulatory, transactional, and compliance demands of modern
                                                    healthcare, backed by the full strength of the DBM team.
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
                                                    Schedule a Consultation
                                                </Button>
                                            </Box>
                                            <Stack
                                                direction={{ xs: 'column', sm: 'row' }}
                                                alignItems={{ xs: 'flex-start', sm: 'center' }}
                                                flexWrap="wrap"
                                                gap={{ xs: 1, sm: 1.5 }}
                                                mt={3}
                                            >
                                                {HERO_TRUST_POINTS.map((point, i, arr) => (
                                                    <React.Fragment key={i}>
                                                        <Stack direction="row" alignItems="center" spacing={1}>
                                                            <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: theme.palette.primary.main, flexShrink: 0 }} />
                                                            <Typography variant="body2" color={theme.palette.white[500]}>
                                                                {point}
                                                            </Typography>
                                                        </Stack>
                                                        {i < arr.length - 1 && (
                                                            <Box sx={{ display: { xs: 'none', sm: 'block' }, width: 5, height: 5, borderRadius: '50%', backgroundColor: theme.palette.primary.main, opacity: 0.4, flexShrink: 0 }} />
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </Stack>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            {/* ========== 2. INTRODUCTION ========== */}
                            <Stack spacing={4}>
                                <Box
                                    data-aos="fade-right"
                                    sx={{
                                        borderTop: `1px solid ${alpha(theme.palette.white[700], 0.25)}`,
                                        borderBottom: `1px solid ${alpha(theme.palette.white[700], 0.25)}`,
                                        py: { xs: 6, md: 8 },
                                        px: { xs: 0, md: 1 }
                                    }}
                                >
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
                                            Running a healthcare organization means navigating a legal landscape that is constantly
                                            shifting: Stark Law, the Anti-Kickback Statute, HIPAA, payor contracts, credentialing,
                                            employment agreements, and more. Many practices cannot justify the cost of a full-time
                                            general counsel, yet traditional outside counsel often bills by the hour without offering
                                            the continuity or strategic perspective healthcare organizations need.
                                        </Typography>
                                        <Divider sx={{ borderColor: theme.palette.white[700], my: 3 }} />
                                        <Typography
                                            variant="h3"
                                            fontWeight="bold"
                                            color="primary"
                                            pb={3}
                                        >
                                            Fractional General Counsel
                                        </Typography>
                                        <Typography variant="h5" color={theme.palette.white[100]} pb={2}>
                                            For a predictable monthly fee, your organization gains Shawn Phillips, a former hospital
                                            General Counsel and seasoned healthcare attorney, as a dedicated legal partner. Shawn is
                                            backed by the full DBM Legal Services team, including Big Law-trained attorneys with deep
                                            experience in corporate transactions, regulatory compliance, risk management, and business
                                            strategy.
                                        </Typography>
                                        <Typography variant="h5" color={theme.palette.white[500]} sx={{ fontStyle: 'italic' }}>
                                            More than traditional outside counsel, this model delivers an embedded legal partner
                                            focused on protecting your organization, strengthening compliance, and supporting
                                            sustainable growth.
                                        </Typography>
                                </Box>

                                {/* ========== 3. MEET YOUR GENERAL COUNSEL ========== */}
                                <GradientCard data-aos="fade-up" data-aos-delay="50">
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
                                        <Grid container spacing={4} alignItems="flex-start">
                                            <Grid item xs={12} md={4}>
                                                <Box sx={{ maxWidth: { xs: 220, sm: 260, md: '100%' }, mx: { xs: 'auto', md: 0 } }}>
                                                    <Box
                                                        sx={{
                                                            position: 'relative',
                                                            width: '100%',
                                                            paddingTop: '125%',
                                                            borderRadius: 2,
                                                            overflow: 'hidden',
                                                            border: `1px solid ${alpha(theme.palette.white[700], 0.6)}`,
                                                            mb: 2,
                                                            '&:hover img': {
                                                                transform: 'scale(1.03)',
                                                                transition: 'transform 0.7s ease'
                                                            },
                                                            '& img': {
                                                                transform: 'scale(1.0)',
                                                                transition: 'transform 0.7s ease'
                                                            }
                                                        }}
                                                    >
                                                        <CldImage
                                                            src="IMG_0883-CV_1_fqqhft"
                                                            fill={true}
                                                            priority={true}
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                            alt="Shawn Phillips - Senior Partner, Healthcare General Counsel at DBM Legal Services"
                                                            style={{
                                                                objectFit: 'cover',
                                                                objectPosition: 'center 15%',
                                                                filter: 'brightness(0.93) saturate(0.82) contrast(1.05)'
                                                            }}
                                                        />
                                                    </Box>
                                                    <Typography variant="h5" fontWeight={700}>
                                                        Shawn Phillips
                                                    </Typography>
                                                    <Typography variant="body1" color="primary" fontWeight={700}>
                                                        Senior Partner
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={8}>
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
                                                            &ldquo;When you engage DBM&apos;s Healthcare General Counsel program, Shawn is
                                                            your first call, but you&apos;re never limited to one attorney. Your
                                                            subscription gives you access to the full DBM team, so no matter what
                                                            issue arises, you have the right expertise at the table.&rdquo;
                                                        </Typography>
                                                    </Box>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </GradientCard>

                                {/* ========== TESTIMONIALS ========== */}
                                <Box
                                    data-aos="fade-up"
                                    sx={{
                                        borderTop: `1px solid ${alpha(theme.palette.white[700], 0.25)}`,
                                        py: { xs: 6, md: 8 },
                                        px: { xs: 0, md: 1 }
                                    }}
                                >
                                    <Box mb={5} textAlign="center">
                                        <Chip
                                            label="CLIENT TESTIMONIALS"
                                            size="small"
                                            sx={{
                                                backgroundColor: alpha(theme.palette.primary.main, 0.15),
                                                color: theme.palette.primary.main,
                                                fontWeight: 700,
                                                letterSpacing: 1.5,
                                                fontSize: '0.65rem',
                                                mb: 2,
                                                borderRadius: 1
                                            }}
                                        />
                                        <Typography variant="h3" fontWeight="bold" color={theme.palette.white[100]} pb={1}>
                                            Trusted by Physicians Nationwide
                                        </Typography>
                                        <Typography variant="h5" color={theme.palette.white[500]} sx={{ maxWidth: 640, mx: 'auto' }}>
                                            Healthcare organizations and physicians across the country rely on Shawn Phillips for the counsel they need to protect their practice and move forward with confidence.
                                        </Typography>
                                    </Box>
                                    <Grid container spacing={3}>
                                        {testimonials.map((t, index) => (
                                            <Grid item xs={12} sm={6} key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                                                <Box
                                                    sx={{
                                                        backgroundColor: alpha(theme.palette.white[100], 0.03),
                                                        border: `1px solid ${alpha(theme.palette.white[700], 0.3)}`,
                                                        borderRadius: 2,
                                                        p: { xs: 3, md: 4 },
                                                        height: '100%',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: 2.5
                                                    }}
                                                >
                                                    <Typography
                                                        variant="body1"
                                                        color={theme.palette.white[200]}
                                                        sx={{ lineHeight: 1.8, fontStyle: 'italic', flexGrow: 1 }}
                                                    >
                                                        &ldquo;{t.quote}&rdquo;
                                                    </Typography>
                                                    <Stack direction="row" spacing={2} alignItems="center" sx={{ borderTop: `1px solid ${alpha(theme.palette.white[700], 0.3)}`, pt: 2 }}>
                                                        <Box
                                                            sx={{
                                                                width: 48,
                                                                height: 48,
                                                                borderRadius: '50%',
                                                                overflow: 'hidden',
                                                                flexShrink: 0,
                                                                border: `2px solid ${alpha(theme.palette.primary.main, 0.4)}`
                                                            }}
                                                        >
                                                            <CldImage
                                                                src={t.avatar}
                                                                width={48}
                                                                height={48}
                                                                alt={t.name}
                                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                            />
                                                        </Box>
                                                        <Box>
                                                            <Typography variant="subtitle2" fontWeight={700} color={theme.palette.white[100]}>
                                                                {t.name}
                                                            </Typography>
                                                            <Typography variant="caption" color="primary" display="block">
                                                                {t.title}
                                                            </Typography>
                                                            <Typography variant="caption" color={theme.palette.white[500]} display="block">
                                                                {t.organization}
                                                            </Typography>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>

                                {/* ========== 4. HOW WE SUPPORT YOUR PRACTICE — Redesigned ========== */}
                                <GradientCard data-aos="fade-left" data-aos-delay="50">
                                    <Box p={{ xs: 3, md: 5 }}>
                                        <Box mb={5} textAlign="center">
                                            <Chip
                                                label="FULL-SERVICE COVERAGE"
                                                size="small"
                                                sx={{
                                                    backgroundColor: alpha(theme.palette.primary.main, 0.15),
                                                    color: theme.palette.primary.main,
                                                    fontWeight: 700,
                                                    letterSpacing: 1.5,
                                                    fontSize: '0.65rem',
                                                    mb: 2,
                                                    borderRadius: 1
                                                }}
                                            />
                                            <Typography variant="h3" fontWeight="bold" color={theme.palette.white[100]} pb={1}>
                                                How We Support Your Practice
                                            </Typography>
                                            <Typography variant="h5" color={theme.palette.white[500]} sx={{ maxWidth: 680, mx: 'auto' }}>
                                                Comprehensive healthcare legal services, all under one subscription.
                                            </Typography>
                                        </Box>
                                        <Grid container spacing={2}>
                                            {services.map((service, index) => (
                                                <Grid item xs={12} md={6} key={service.title} data-aos="fade-up" data-aos-delay={index * 40}>
                                                    <Box
                                                        sx={{
                                                            backgroundColor: alpha(theme.palette.white[100], 0.03),
                                                            borderLeft: `3px solid ${alpha(theme.palette.primary.main, 0.7)}`,
                                                            borderRadius: '0 8px 8px 0',
                                                            p: 2.5,
                                                            height: '100%',
                                                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                                            '&:hover': {
                                                                transform: 'translateY(-3px)',
                                                                boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.1)}`
                                                            }
                                                        }}
                                                    >
                                                        <Typography variant="subtitle1" fontWeight={700} color={theme.palette.white[100]} gutterBottom>
                                                            {service.title}
                                                        </Typography>
                                                        <Typography variant="body2" color={theme.palette.white[500]} sx={{ lineHeight: 1.7 }}>
                                                            {service.description}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </GradientCard>

                                {/* ========== 5. WHO WE SERVE — Redesigned ========== */}
                                <Box
                                    data-aos="fade-up"
                                    sx={{
                                        borderTop: `1px solid ${alpha(theme.palette.white[700], 0.25)}`,
                                        borderBottom: `1px solid ${alpha(theme.palette.white[700], 0.25)}`,
                                        py: { xs: 6, md: 8 },
                                        px: { xs: 0, md: 1 }
                                    }}
                                >
                                    <Box mb={5} textAlign="center">
                                        <Chip
                                            label="OUR CLIENTELE"
                                            size="small"
                                            sx={{
                                                backgroundColor: alpha(theme.palette.primary.main, 0.15),
                                                color: theme.palette.primary.main,
                                                fontWeight: 700,
                                                letterSpacing: 1.5,
                                                fontSize: '0.65rem',
                                                mb: 2,
                                                borderRadius: 1
                                            }}
                                        />
                                        <Typography variant="h3" fontWeight="bold" color={theme.palette.white[100]} pb={1}>
                                            Who We Serve
                                        </Typography>
                                        <Typography variant="h5" color={theme.palette.white[500]} sx={{ maxWidth: 680, mx: 'auto' }}>
                                            Built for healthcare organizations at every stage of growth
                                        </Typography>
                                    </Box>
                                    <Grid container spacing={2.5} justifyContent="center">
                                        {clientTypes.map((category, index) => {
                                            const CategoryIcon = categoryIcons[index];
                                            return (
                                            <Grid item xs={12} sm={6} md={4} key={category.title} data-aos="fade-up" data-aos-delay={index * 40}>
                                                <Box
                                                    sx={{
                                                        backgroundColor: alpha(theme.palette.white[100], 0.04),
                                                        border: `1px solid ${alpha(theme.palette.white[700], 0.5)}`,
                                                        borderRadius: 2,
                                                        p: 3,
                                                        height: '100%',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: 2,
                                                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                                        '&:hover': {
                                                            transform: 'translateY(-3px)',
                                                            boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.1)}`
                                                        }
                                                    }}
                                                >
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                        <Box
                                                            sx={{
                                                                width: 36,
                                                                height: 36,
                                                                borderRadius: 1.5,
                                                                backgroundColor: alpha(theme.palette.primary.main, 0.15),
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                flexShrink: 0
                                                            }}
                                                        >
                                                            <CategoryIcon sx={{ color: theme.palette.primary.main, fontSize: 18 }} />
                                                        </Box>
                                                        <Typography variant="subtitle1" fontWeight={700} color={theme.palette.white[100]} sx={{ lineHeight: 1.3 }}>
                                                            {category.title}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                                                        {category.items.map((item, i) => (
                                                            <Chip
                                                                key={i}
                                                                label={item}
                                                                size="small"
                                                                sx={{
                                                                    backgroundColor: alpha(theme.palette.white[700], 0.12),
                                                                    color: theme.palette.white[500],
                                                                    fontSize: '0.7rem',
                                                                    height: 24,
                                                                    borderRadius: 1,
                                                                    '& .MuiChip-label': { px: 1 }
                                                                }}
                                                            />
                                                        ))}
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Box>

                                {/* ========== 6. SUBSCRIPTION PRICING ========== */}
                                <GradientCard data-aos="fade-right" data-aos-delay="50">
                                    <Box p={{ xs: 3, md: 5 }}>
                                        <Box mb={5} textAlign="center">
                                            <Typography variant="h3" color="primary" fontWeight="bold" pb={1}>
                                                Subscription Packages
                                            </Typography>
                                            <Typography variant="h4" color={theme.palette.white[100]} pb={1}>
                                                Predictable Pricing. Comprehensive Counsel. No Surprises.
                                            </Typography>
                                            <Typography variant="h5" color={theme.palette.white[500]} sx={{ maxWidth: 900, mx: 'auto' }}>
                                                Each tier features a flat monthly fee for a set number of attorney hours, which may
                                                be applied across any service area. Shawn Phillips serves as your dedicated General
                                                Counsel under every plan.
                                            </Typography>
                                        </Box>

                                        {/* Pricing Cards */}
                                        <Grid container spacing={3} justifyContent="center">
                                            {pricingTiers.map((tier, index) => (
                                                <Grid item xs={12} md={4} key={index} data-aos="fade-up" data-aos-delay={index * 40}>
                                                    <Box
                                                        sx={{
                                                            border: `1px solid ${theme.palette.white[700]}`,
                                                            borderRadius: 3,
                                                            p: 3,
                                                            height: '100%',
                                                            display: 'flex',
                                                            flexDirection: 'column'
                                                        }}
                                                    >
                                                        <Box sx={{ minHeight: { md: '80px' } }}>
                                                            <Typography variant="h5" fontWeight={700} color={theme.palette.white[100]} gutterBottom>
                                                                {tier.name}
                                                            </Typography>
                                                            <Typography variant="caption" color={theme.palette.white[500]} display="block">
                                                                {tier.subtitle}
                                                            </Typography>
                                                        </Box>
                                                        <Stack direction="row" alignItems="baseline" spacing={0.5} pt={2} pb={0.5}>
                                                            <Typography variant="h3" fontWeight={700} color="primary">
                                                                {tier.price}
                                                            </Typography>
                                                            <Typography variant="h5" color={theme.palette.white[500]}>
                                                                /month
                                                            </Typography>
                                                        </Stack>
                                                        <Typography variant="body2" color={theme.palette.white[500]} pb={3}>
                                                            {tier.hours} billable attorney hours per month
                                                        </Typography>
                                                        <Box flexGrow={1} />
                                                        <Button
                                                            variant="outlined"
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

                                        {/* Billing notes */}
                                        <Stack spacing={1} pt={4} pb={5}>
                                            <Typography variant="caption" color={theme.palette.white[500]}>
                                                <Typography variant="caption" component="span" fontWeight="bold">
                                                    Rollover Hours:
                                                </Typography>
                                                {' '}Up to 25% of unused hours carry forward each month, so your subscription investment is never wasted.
                                            </Typography>
                                            <Typography variant="caption" color={theme.palette.white[500]}>
                                                <Typography variant="caption" component="span" fontWeight="bold">
                                                    Additional Hours:
                                                </Typography>
                                                {' '}When additional support is needed in a given month, supplemental hours are billed at your subscription rate, without premium pricing or unexpected increases.
                                            </Typography>
                                        </Stack>

                                        {/* What's Included Across All Plans */}
                                        <Divider sx={{ borderColor: theme.palette.white[700], mb: 5 }} />
                                        <Box>
                                            <Box mb={4}>
                                                <Chip
                                                    label="EVERY PLAN INCLUDES"
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: alpha(theme.palette.primary.main, 0.15),
                                                        color: theme.palette.primary.main,
                                                        fontWeight: 700,
                                                        letterSpacing: 1.5,
                                                        fontSize: '0.65rem',
                                                        mb: 2,
                                                        borderRadius: 1
                                                    }}
                                                />
                                                <Typography variant="h4" fontWeight="bold" color={theme.palette.white[100]} pb={1}>
                                                    What&apos;s Included Across All Plans
                                                </Typography>
                                                <Typography variant="body1" color={theme.palette.white[500]} sx={{ maxWidth: 700 }}>
                                                    Integrated legal support across DBM Legal Services&apos; full suite of healthcare capabilities.
                                                </Typography>
                                            </Box>
                                            <Grid container spacing={1.5}>
                                                {includedItems.map((item, index) => (
                                                    <Grid item xs={12} sm={6} key={index} data-aos="fade-up" data-aos-delay={index * 30}>
                                                        <Stack direction="row" spacing={1.5} alignItems="flex-start">
                                                            <CheckIcon sx={{ color: theme.palette.primary.main, fontSize: 18, mt: 0.2, flexShrink: 0 }} />
                                                            <Typography variant="body1" color={theme.palette.white[200]} sx={{ lineHeight: 1.6 }}>
                                                                {item}
                                                            </Typography>
                                                        </Stack>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Box>
                                    </Box>
                                </GradientCard>

                                {/* ========== 7. WHY DBM ========== */}
                                <Box
                                    data-aos="fade-up"
                                    sx={{
                                        borderTop: `1px solid ${alpha(theme.palette.white[700], 0.25)}`,
                                        borderBottom: `1px solid ${alpha(theme.palette.white[700], 0.25)}`,
                                        py: { xs: 6, md: 8 },
                                        px: { xs: 0, md: 1 }
                                    }}
                                >
                                    <Box mb={5}>
                                        <Chip
                                            label="OUR DIFFERENCE"
                                            size="small"
                                            sx={{
                                                backgroundColor: alpha(theme.palette.primary.main, 0.15),
                                                color: theme.palette.primary.main,
                                                fontWeight: 700,
                                                letterSpacing: 1.5,
                                                fontSize: '0.65rem',
                                                mb: 2,
                                                borderRadius: 1
                                            }}
                                        />
                                        <Typography variant="h3" fontWeight="bold" color={theme.palette.white[100]} pb={1}>
                                            Why DBM
                                        </Typography>
                                        <Typography variant="h5" color={theme.palette.white[500]} sx={{ maxWidth: 680 }}>
                                            What sets our Healthcare General Counsel program apart from traditional outside counsel.
                                        </Typography>
                                    </Box>
                                    <Stack divider={<Divider sx={{ borderColor: alpha(theme.palette.white[700], 0.15) }} />}>
                                        {differentiators.map((item, index) => (
                                            <Grid
                                                container
                                                key={item.title}
                                                spacing={{ xs: 1, md: 4 }}
                                                alignItems="flex-start"
                                                data-aos="fade-up"
                                                data-aos-delay={index * 40}
                                                py={3}
                                            >
                                                <Grid item xs={12} md={4}>
                                                    <Stack direction="row" spacing={2} alignItems="flex-start">
                                                        <Box
                                                            sx={{
                                                                width: 38,
                                                                height: 38,
                                                                borderRadius: 1.5,
                                                                backgroundColor: alpha(theme.palette.primary.main, 0.12),
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                flexShrink: 0,
                                                                mt: 0.25
                                                            }}
                                                        >
                                                            <item.icon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                                                        </Box>
                                                        <Typography variant="h6" fontWeight={700} color={theme.palette.white[100]} sx={{ lineHeight: 1.4 }}>
                                                            {item.title}
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12} md={8}>
                                                    <Typography variant="body1" color={theme.palette.white[500]} sx={{ lineHeight: 1.8 }}>
                                                        {item.description}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        ))}
                                    </Stack>
                                </Box>

                                {/* ========== 8. FAQ ========== */}
                                <GradientCard data-aos="fade-up">
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
                                            Frequently Asked Questions
                                        </Typography>
                                        {faqs.map((faq) => (
                                            <Box pb={2} key={faq.question}>
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
                                                            {faq.bookingUrl && (
                                                                <> <a href={faq.bookingUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontWeight: 700, textDecoration: 'underline' }}>{faq.bookingLabel || 'Schedule with Shawn'}</a></>
                                                            )}
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </Box>
                                        ))}
                                    </Box>
                                </GradientCard>
                            </Stack>

                            {/* ========== 9. FINAL CTA ========== */}
                            <Box py={6}>
                                <GradientCard
                                    hover={false}
                                    gradientStart={theme.palette.black[600]}
                                    gradientEnd={theme.palette.black[800]}
                                >
                                    <Box p={{ xs: 4, md: 6 }} textAlign="center">
                                        <Typography variant="h3" color={theme.palette.white[100]} pb={2}>
                                            Elevate the Legal Support Behind Your{' '}
                                            <Typography variant="h3" component="span" color="primary">
                                                Practice
                                            </Typography>
                                            <Typography color={theme.palette.white[100]} component="span" variant="inherit">
                                                ?
                                            </Typography>
                                        </Typography>
                                        <Typography variant="h5" color={theme.palette.white[500]} pb={4} sx={{ maxWidth: 800, mx: 'auto' }}>
                                            Schedule a consultation with our team to discuss your organization, the legal
                                            and operational challenges you are navigating, and whether DBM&apos;s Healthcare
                                            General Counsel program is the right fit.
                                        </Typography>
                                        <Button
                                            component="a"
                                            variant="outlined"
                                            color="primary"
                                            size="large"
                                            fullWidth={!isMd}
                                            href={CONTACT_URL}
                                            sx={{ mb: 4 }}
                                        >
                                            Schedule Your Consultation
                                        </Button>
                                        <Stack spacing={2} alignItems="center">
                                            <Stack
                                                direction={{ xs: 'column', sm: 'row' }}
                                                spacing={{ xs: 1.5, sm: 3 }}
                                                justifyContent="center"
                                                alignItems="center"
                                            >
                                                <Typography variant="caption" color={theme.palette.white[500]} fontWeight={700} sx={{ letterSpacing: 1, textTransform: 'uppercase' }}>
                                                    Shawn Phillips
                                                </Typography>
                                                <Stack direction="row" spacing={1} alignItems="center">
                                                    <PhoneIcon sx={{ color: theme.palette.primary.main, fontSize: 18 }} />
                                                    <Typography
                                                        component="a"
                                                        href="tel:+15709771344"
                                                        color={theme.palette.white[100]}
                                                        variant="body2"
                                                        sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}
                                                    >
                                                        (570) 977-1344
                                                    </Typography>
                                                </Stack>
                                                <Stack direction="row" spacing={1} alignItems="center">
                                                    <EmailIcon sx={{ color: theme.palette.primary.main, fontSize: 18 }} />
                                                    <Typography
                                                        component="a"
                                                        href="mailto:shawn.phillips@dbmlegalservices.com"
                                                        color={theme.palette.white[100]}
                                                        variant="body2"
                                                        sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}
                                                    >
                                                        shawn.phillips@dbmlegalservices.com
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                            <Stack
                                                direction={{ xs: 'column', sm: 'row' }}
                                                spacing={{ xs: 1.5, sm: 3 }}
                                                justifyContent="center"
                                                alignItems="center"
                                            >
                                                <Typography variant="caption" color={theme.palette.white[500]} fontWeight={700} sx={{ letterSpacing: 1, textTransform: 'uppercase' }}>
                                                    General Inquiries
                                                </Typography>
                                                <Stack direction="row" spacing={1} alignItems="center">
                                                    <PhoneIcon sx={{ color: theme.palette.primary.main, fontSize: 18 }} />
                                                    <Typography
                                                        component="a"
                                                        href={`tel:${PHONE}`}
                                                        color={theme.palette.white[100]}
                                                        variant="body2"
                                                        sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}
                                                    >
                                                        {PHONE}
                                                    </Typography>
                                                </Stack>
                                                <Stack direction="row" spacing={1} alignItems="center">
                                                    <EmailIcon sx={{ color: theme.palette.primary.main, fontSize: 18 }} />
                                                    <Typography
                                                        component="a"
                                                        href={`mailto:${EMAIL}`}
                                                        color={theme.palette.white[100]}
                                                        variant="body2"
                                                        sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}
                                                    >
                                                        {EMAIL}
                                                    </Typography>
                                                </Stack>
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
