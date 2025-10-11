// src/components/Section.js
import React from 'react';
import { Stack, Box, Typography, Button, Grid, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { keyframes } from '@emotion/react';
import GeneralCounselPricing from '../section_components/GeneralCounselPricing';
import TrademarkPricing from '../section_components/TrademarkPricing';
import HealthcareMembershipPricing from '../section_components/HealthcareMembershipPricing';
import Carousel from '../section_components/Carousel';
import SectionTitle from '../section_components/SectionTitle';
import CheckMarkList from '../section_components/CheckMarkList';
import Faq from '../section_components/Faq';
import Catalog from '../section_components/Catalog';
import SimpleList from '../section_components/SimpleList';
import AboutTeamMember from '../section_components/AboutTeamMember';

function Section({ section }) {
    const theme = useTheme();
    const textColor = theme.palette.white[100];
    return (
        <Container>
            <Stack p={0}>
                <SectionTitle section={section} textColor={textColor} />
                {section.sectionType === 'checkMarkList' && <CheckMarkList section={section} textColor={textColor} />}
                {section.sectionType === 'carousel' && <Carousel data={section.items} />}
                {section.sectionType === 'faq' && <Faq section={section} />}
                {section.sectionType === 'catalog' && <Catalog section={section} textColor={textColor} />}
                {(section.sectionType === 'simpleList' || section.sectionType === 'simplelist') && (
                    <SimpleList section={section} textColor={textColor} />
                )}
                {section.sectionType === 'general-counsel-pricing' && <GeneralCounselPricing />}
                {section.sectionType === 'trademark-pricing' && <TrademarkPricing />}
                {section.sectionType === 'healthcare-membership-pricing' && (
                    <HealthcareMembershipPricing section={section} pricing={section.pricingTable} />
                )}
                {section.sectionType === 'aboutTeamMember' && <AboutTeamMember section={section} />}
                {section.bottomCallToActionButton && (
                    <Box py={3} display="flex" justifyContent="center">
                        <Button variant="outlined" href={section.bottomCallToActionButton.route} m={10}>
                            <Typography>{section.bottomCallToActionButton.label}</Typography>
                        </Button>
                    </Box>
                )}
            </Stack>
        </Container>
    );
}

export default Section;
