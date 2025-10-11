import React, { useState } from 'react';
import {
    Box,
    Button,
    Grid,
    Stack,
    Typography,
    Dialog,
    DialogContent,
    DialogActions,
    DialogContentText,
    DialogTitle,
    Avatar
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import PersonDialog from './PersonDialog';
import Image from 'next/image';
import { CldImage } from 'next-cloudinary';

function PersonTile({ person, handleClickOpen, minHeight = 500, fontVariant = '', fontVariant2 = 'caption' }) {
    const theme = useTheme();

    return (
        <Box
            position="relative"
            minHeight={minHeight}
            width={1}
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                '&:hover .image-transform img': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.7s ease'
                },
                '.image-transform img': {
                    transform: 'scale(1.0)',
                    transition: 'transform 0.7s ease'
                }
            }}
        >
            <Box className="image-transform">
                <CldImage
                    src={person.image} // Use this sample image or upload your own via the Media Explorer
                    //width="500" // Transform the image: auto-crop to square aspect_ratio
                    //height="500"
                    fill={true} // Fill the image to cover the dimensions provided
                    alt="alt"
                    style={{
                        objectFit: 'contain',
                        transition: 'transform .7s ease !important'
                    }}
                />

                {/* <Image
                    src={person.image ? person.image : '/images/backgrounds/nordwood-themes-R53t-Tg6J4c-unsplash.jpg'}
                    alt="..."
                    fill={true}
                    loading="lazy"
                    style={{
                        objectFit: 'contain',
                        transition: 'transform .7s ease !important'
                    }}
                /> */}
            </Box>
            <Box
                position={'absolute'}
                bottom={0}
                left={0}
                right={0}
                padding={3}
                sx={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000)`
                }}
            >
                <Stack direction={'row'} spacing={1} justifyContent="space-between">
                    <Stack direction="column">
                        <Typography variant={fontVariant} fontWeight={700} sx={{ color: 'common.white' }}>
                            {person.name}
                        </Typography>
                        <Typography
                            variant={fontVariant2}
                            fontWeight={700}
                            // sx={{ color: 'common.white' }}
                            sx={{ color: theme.palette.primary.main }}
                        >
                            {person.title}
                        </Typography>
                    </Stack>
                    {person.bio && (
                        <Stack direction="column" justifyContent="center">
                            <Button
                                sx={{ padding: '2px' }}
                                variant={'outlined'}
                                color={'primary'}
                                size="small"
                                onClick={() => handleClickOpen(person)}
                            >
                                More
                            </Button>
                        </Stack>
                    )}
                </Stack>
            </Box>
        </Box>
    );
}

export default PersonTile;
