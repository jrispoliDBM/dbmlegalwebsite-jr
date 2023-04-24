import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {Grid, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

const SidebarNav = ({ pages, simplePages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const hasActiveLink =  () => items.find((i) => i.href === activeLink);
  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? '/images/dbmnewlogo.png'
                : '/images/dbmnewlogo.png'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
        <Grid container spacing={1}>
            {simplePages && simplePages.length > 0 && simplePages.map((p, i) => (
              <Grid item key={i} xs={12}>
                <Button
                  size={'large'}
                  component={'a'}
                  href={p.href}
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    color:
                      activeLink === p.href
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    backgroundColor:
                      activeLink === p.href
                        ? alpha(theme.palette.primary.main, 0.1)
                        : 'transparent',
                    fontWeight: activeLink === p.href ? 600 : 400,
                  }}
                >
                  {p.title}
                  {p.isNew && (
                    <Box
                      padding={0.5}
                      display={'inline-flex'}
                      borderRadius={1}
                      bgcolor={'primary.main'}
                      marginLeft={2}
                    >
                      <Typography
                        variant={'caption'}
                        sx={{ color: 'common.white', lineHeight: 1 }}
                      >
                        new
                      </Typography>
                    </Box>
                  )}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* <Box>
          <NavItem title={'Landings'} items={landingPages} />
        </Box> */}
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
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
