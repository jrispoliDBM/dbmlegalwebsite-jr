import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';
import useServices from '@/hooks/useServices';

const SidebarNav = () => {
    const theme = useTheme();
    const { mode } = theme.palette;
    const [activeLink, setActiveLink] = useState('');
    const { services, error, isLoading } = useServices();
    const simplePages = [{ title: 'Home', href: '/' }];
    const [servicePages, setServicePages] = useState([]);
    const simplePages2 = [
      {
        title: 'Our Team',
        href: '/our-team',
      },
      { title: 'New Client Form', href: '/new-client-form' },
      { title: 'FAQs', href: '/faqs' },
      {
        title: 'Contact Us',
        href: '/contact-us',
      },
    ]

    useEffect(() => {
        setActiveLink(window && window.location ? window.location.pathname : '');
    }, []);

    useEffect(() => {
        console.log('servicePages', services);
        let pages = [];
        services.filter(service=>service.showOnMainPage && service.showOnMainPage != "false").map((service) => {
            pages.push({ title: service.service, href: `/${service.route}` });
        });
        //sort pages by title
        pages.sort((a, b) => (a.title > b.title ? 1 : -1));
        setServicePages(pages);
    }, [services]);

    const hasActiveLink = () => items.find((i) => i.href === activeLink);

    return (
        <Box>
            <Box width={1} paddingX={2} paddingY={1}>
                <Box display={'flex'} component="a" href="/" title="theFront" width={{ xs: 100, md: 120 }}>
                    <Box
                        component={'img'}
                        src={mode === 'light' ? '/images/dbm_dark_logo2.png' : '/images/dbm_dark_logo2.png'}
                        height={1}
                        width={1}
                    />
                </Box>
            </Box>
            <Box paddingX={2} paddingY={2}>
                <Box>
                    <Grid container spacing={1}>
                        {simplePages &&
                            simplePages.length > 0 &&
                            simplePages.map((p, i) => (
                                <Grid item key={i} xs={12}>
                                    <Button
                                        size={'large'}
                                        component={'a'}
                                        href={p.href}
                                        fullWidth
                                        sx={{
                                            justifyContent: 'flex-start',
                                            color: activeLink === p.href ? theme.palette.primary.main : theme.palette.text.primary,
                                            backgroundColor: activeLink === p.href ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                                            fontWeight: activeLink === p.href ? 600 : 400
                                        }}
                                    >
                                        {p.title}
                                    </Button>
                                </Grid>
                            ))}
                        {servicePages && servicePages.length > 0 && (
                            <Grid item xs={12}>
                                <NavItem title={'Our Services'} items={servicePages} href='our-services' />
                            </Grid>
                        )}
                        {simplePages2 &&
                            simplePages2.length > 0 &&
                            simplePages2.map((p, i) => (
                                <Grid item key={i} xs={12}>
                                    <Button
                                        size={'large'}
                                        component={'a'}
                                        href={p.href}
                                        fullWidth
                                        sx={{
                                            justifyContent: 'flex-start',
                                            color: activeLink === p.href ? theme.palette.primary.main : theme.palette.text.primary,
                                            backgroundColor: activeLink === p.href ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                                            fontWeight: activeLink === p.href ? 600 : 400
                                        }}
                                    >
                                        {p.title}
                                    </Button>
                                </Grid>
                            ))}

                    </Grid>
                </Box>
                {/* <Box>
          <NavItem title={'Company'} items={companyPages} />
        </Box> */}
                {/* <Box>
          <NavItem title={'Pages'} items={secondaryPages} />
        </Box>
        <Box>
          <NavItem title={'Account'} items={accountPages} />
        </Box>
        <Box>
          <NavItem title={'Blog'} items={blogPages} />
        </Box>
        <Box>
          <NavItem title={'Portfolio'} items={portfolioPages} />
        </Box> */}
            </Box>
        </Box>
    );
};

SidebarNav.propTypes = {
};

export default SidebarNav;
