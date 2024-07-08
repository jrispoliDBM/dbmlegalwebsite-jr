import React from 'react';
import { Grid, Stack, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';


const Footer = () => {
    const theme = useTheme();
    const { mode } = theme.palette;
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });
    const iconWidth = 50;
    const iconHeight = 70;


    return (
        <Stack direction={isMd ? "row" : 'column'} justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={2} alignItems='center'>
                <Box component="a" href="/" title="DBM Legal Services" width={{ xs: iconWidth, md: iconWidth }}>
                    <Box
                        component={'img'}
                        src={mode === 'light' ? '/images/dbmlegal.png' : '/images/dbmlegal.png'}
                        sx={{
                            height: iconHeight, // Set a fixed height for all images
                            width: 'auto' // Maintain the aspect ratio
                        }}
                        // height={1}
                        // width={1}
                    />
                </Box>
                <Box component="a" href="https://www.dbmbusinessservices.com" title="DBM Business Services" width={{ xs: iconWidth, md: iconWidth }}>
                    <Box
                        component={'img'}
                        src={mode === 'light' ? '/images/dbmbusiness.png' : '/images/dbmbusiness.png'}
                        sx={{
                            height:iconHeight, // Set a fixed height for all images
                            width: 'auto' // Maintain the aspect ratio
                        }}
                        // height={1}
                        // width={1}
                    />
                </Box>
                <Box component="a" href="https://www.dbmcompliance.com" title="DBM Compliance" width={{ xs: iconWidth, md: iconWidth }}>
                    <Box
                        component={'img'}
                        src={mode === 'light' ? '/images/dbmcompliance.png' : '/images/dbmcompliance.png'}
                        sx={{
                            height: iconHeight, // Set a fixed height for all images
                            width: 'auto' // Maintain the aspect ratio
                        }}
                        // height={1}
                        // width={1}
                    />
                </Box>
            </Stack>

            <Typography align={'center'} variant={'subtitle2'} color="text.secondary" gutterBottom>
                &copy; Copyright {new Date().getFullYear()} DBM Legal Services LLC
            </Typography>
            <Stack direction="row">
                {/* <Link href="/privacypolicy" passHref>
                <Button sx={{ whiteSpace: "nowrap" }}>Privacy Policy</Button>
              </Link> */}
                <Link href="/disclaimer" passHref>
                    <Button sx={{ whiteSpace: 'nowrap' }}>Disclaimer</Button>
                </Link>
                <Link href="/contact-us" passHref>
                    <Button sx={{ whiteSpace: 'nowrap' }}>Contact Us</Button>
                </Link>
                {/* 
              <Button
                sx={{ whiteSpace: "nowrap" }}
                component="a"
                href="mailto:info@dbmlegaleservices.com"
            >
                Contact Us
            </Button> */}
                {/* <Button sx={{ whiteSpace: "nowrap" }}>Contact Us</Button> */}
            </Stack>
        </Stack>
        // <Grid container spacing={2}>
        //   <Grid item xs={12}>
        //     <Box
        //       display={'flex'}
        //       justifyContent={'space-between'}
        //       alignItems={'center'}
        //       width={1}
        //       flexDirection={{ xs: 'column', sm: 'row' }}
        //     >
        //       <Box
        //         display={'flex'}
        //         component="a"
        //         href="/"
        //         title="theFront"
        //         width={80}
        //       >
        //         {/* <Box
        //           component={'img'}
        //           src={
        //             mode === 'light'
        //               ? '/images/dbmiconcolor.png'
        //               : '/images/dbmiconcolor.png'
        //           }
        //           height={1}
        //           width={1}
        //         /> */}
        //       </Box>
        //       <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
        //         <Box marginTop={1} marginRight={2}>
        //           {/* <Link
        //             underline="none"
        //             component="a"
        //             href="/"
        //             color="text.primary"
        //             variant={'subtitle2'}
        //           >
        //             Home
        //           </Link> */}
        //         </Box>
        //         <Box marginTop={1} marginRight={2}>
        //           {/* <Link
        //             underline="none"
        //             component="a"
        //             href="/docs/introduction"
        //             color="text.primary"
        //             variant={'subtitle2'}
        //           >
        //             Documentation
        //           </Link> */}
        //         </Box>
        //         {/* <Box marginTop={1}>
        //           <Button
        //             variant="outlined"
        //             color="primary"
        //             component="a"
        //             target="blank"
        //             href="https://mui.com/store/items/the-front-landing-page/"
        //             size="small
        //             "
        //           >
        //             Careers
        //           </Button>
        //         </Box> */}
        //       </Box>
        //     </Box>
        //   </Grid>
        //   <Grid item xs={12}>
        //     <Typography
        //       align={'center'}
        //       variant={'subtitle2'}
        //       color="text.secondary"
        //       gutterBottom
        //     >
        //       &copy; Copyright {new Date().getFullYear()} Duncan Bergman Mandell

        //     </Typography>
        //     <Typography
        //       align={'center'}
        //       variant={'caption'}
        //       color="text.secondary"
        //       component={'p'}
        //     >
        //       When you visit or interact with our site, we or
        //       our authorised service providers may use cookies for storing
        //       information to help provide you with a better, faster and safer
        //       experience and for marketing purposes.
        //     </Typography>
        //   </Grid>
        // </Grid>
    );
};

export default Footer;
// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';
// import { useTheme } from '@mui/material/styles';

// const Footer = () => {
//   const theme = useTheme();
//   const { mode } = theme.palette;

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <Box
//           display={'flex'}
//           justifyContent={'space-between'}
//           alignItems={'center'}
//           width={1}
//           flexDirection={{ xs: 'column', sm: 'row' }}
//         >
//           <Box
//             display={'flex'}
//             component="a"
//             href="/"
//             title="theFront"
//             width={80}
//           >
//             {/* <Box
//               component={'img'}
//               src={
//                 mode === 'light'
//                   ? '/images/dbmiconcolor.png'
//                   : '/images/dbmiconcolor.png'
//               }
//               height={1}
//               width={1}
//             /> */}
//           </Box>
//           <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
//             <Box marginTop={1} marginRight={2}>
//               {/* <Link
//                 underline="none"
//                 component="a"
//                 href="/"
//                 color="text.primary"
//                 variant={'subtitle2'}
//               >
//                 Home
//               </Link> */}
//             </Box>
//             <Box marginTop={1} marginRight={2}>
//               {/* <Link
//                 underline="none"
//                 component="a"
//                 href="/docs/introduction"
//                 color="text.primary"
//                 variant={'subtitle2'}
//               >
//                 Documentation
//               </Link> */}
//             </Box>
//             {/* <Box marginTop={1}>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 component="a"
//                 target="blank"
//                 href="https://mui.com/store/items/the-front-landing-page/"
//                 size="small
//                 "
//               >
//                 Careers
//               </Button>
//             </Box> */}
//           </Box>
//         </Box>
//       </Grid>
//       <Grid item xs={12}>
//         <Typography
//           align={'center'}
//           variant={'subtitle2'}
//           color="text.secondary"
//           gutterBottom
//         >
//           &copy; Copyright {new Date().getFullYear()} Duncan Bergman Mandell

//         </Typography>
//         <Typography
//           align={'center'}
//           variant={'caption'}
//           color="text.secondary"
//           component={'p'}
//         >
//           When you visit or interact with our site, we or
//           our authorised service providers may use cookies for storing
//           information to help provide you with a better, faster and safer
//           experience and for marketing purposes.
//         </Typography>
//       </Grid>
//     </Grid>
//   );
// };

// export default Footer;
