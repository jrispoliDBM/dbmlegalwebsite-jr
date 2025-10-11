import { Box, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { keyframes } from '@emotion/react';

const SectionTitle = ({ section, textColor }) => {
    const theme = useTheme();
    const slideIn = keyframes`
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  `;
  
    if (!section) return null;
    
    return section.subtitle ? (
            <>
                {section.title && (
                    <Box
                        sx={{
                            animation: `${slideIn} 1s ease-out forwards`
                        }}
                        pt={2}
                    >
                        <Typography variant="h3" align="center" color="primary">
                            {section.title}
                        </Typography>
                    </Box>
                )}
                <Box>
                    {section.subtitle && (
                        <Box>
                            <Typography variant={'h4'} align="center" color={textColor}>
                                {section.subtitle}
                            </Typography>
                        </Box>
                    )}
                </Box>
            </>
        ) : (
            <>
                {section.title && (
                    <Box
                        sx={{
                            animation: `${slideIn} 1s ease-out forwards`
                        }}
                        pt={2}
                        pb={2}
                    >
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            align="center"
                            color={textColor}
                            sx={{
                                textDecoration: 'underline',
                                textDecorationColor: `${alpha(theme.palette.primary.main, 1.0)}`
                                // textDecorationThickness: '0.2em'
                                //
                            }}
                        >
                            {section.title}
                        </Typography>
                    </Box>
                )}
            </>
        );
    
};

export default SectionTitle;
