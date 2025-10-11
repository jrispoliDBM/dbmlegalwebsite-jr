import React, { useEffect, useState } from 'react';
import useTeam from '@/hooks/useTeam';
import { Grid, Typography, Box } from '@mui/material';
import { CldImage } from 'next-cloudinary';
import PersonTile from '../general_components/PersonTile';

const AboutTeamMember = ({ section }) => {
    const { team } = useTeam();
    const [teamMember, setTeamMember] = useState(null);
    useEffect(() => {
        setTeamMember(team.find((member) => member.name === section.teamMember));
        console.log(teamMember);
    }, [team]);
    if (!teamMember) return null;
    if (!teamMember.alternateBio) return null;
    return (
        <Grid container spacing={2} pb={2}>
            <Grid item xs={12} md={7}>
                {teamMember.alternateBio.split('\n').map((paragraph, index) => (
                    <Typography key={index} variant="body1" pb={1}>
                        {paragraph}
                    </Typography>
                ))}
            </Grid>
            <Grid item xs={12} md={5} alignItems="center" justifyContent="center">
                <PersonTile
                    person={teamMember}
                    handleClickOpen={(person) => {
                        if (person && person.email) {
                            window.location.href = `mailto:${person.email}`;
                        }
                    }}
                    moreText="Contact"
                    useGradient={false}
                    minHeight={300}
                    addBottomPadding={15}
                    titleOnly={true}
                    fontVariant="h5"
                    fontVariant2="caption"
                />
                {/* <Box sx={{ position: 'relative', width: 1, minHeight: { xs: 300, md: 500 }, overflow: 'hidden', borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <CldImage
                        src={teamMember.image} // Use this sample image or upload your own via the Media Explorer
                        // width="500" // Transform the image: auto-crop to square aspect_ratio
                        // height="500"
                        fill={true} // Fill the image to cover the dimensions provided
                        alt="alt"
                        sizes="(max-width: 900px) 100vw, 40vw"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                            paddingBottom: 50
                        }}
                    />
                </Box> */}
            </Grid>
        </Grid>
    );
};

export default AboutTeamMember;
