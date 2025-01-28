import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';

const PuzzlePiece1 = ({ style }) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    style={{ ...style }}
  >
    <path
      d="M0,0 L100,0 Q120,40 100,80 L80,80 Q40,100 80,100 L100,100 Q120,140 100,200 L0,200 L0,0 Z"
      fill="#FF5722"
    />
  </svg>
);

const PuzzlePiece2 = ({ style }) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    style={{ ...style }}
  >
    <path
      d="M0,0 L200,0 L200,200 Q160,180 100,200 L100,140 Q140,120 100,100 L80,100 Q40,80 80,80 L80,0 Z"
      fill="#2196F3"
    />
  </svg>
);

const PuzzlePiece3 = ({ style }) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    style={{ ...style }}
  >
    <path
      d="M0,0 Q40,20 80,0 L120,0 Q160,20 200,0 L200,100 L120,100 Q140,120 100,140 Q60,120 80,100 L0,100 L0,0 Z"
      fill="#4CAF50"
    />
  </svg>
);
//import React, { useState, useEffect } from 'react';
//import { Box, Stack, Typography, useTheme } from '@mui/material';

const PuzzleAnimation = () => {
  const theme = useTheme();

  // States to control animations
  const [pieceStates, setPieceStates] = useState({
    piece1: false,
    piece2: false,
    piece3: false,
  });

  useEffect(() => {
    // Trigger animations sequentially
    setTimeout(() => setPieceStates((prev) => ({ ...prev, piece1: true })), 500);
    setTimeout(() => setPieceStates((prev) => ({ ...prev, piece2: true })), 1000);
    setTimeout(() => setPieceStates((prev) => ({ ...prev, piece3: true })), 1500);
  }, []);

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{ minHeight: '100vh', backgroundColor: theme.palette.background.default }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Watch the Puzzle Come Together
      </Typography>
      <Box
        sx={{
          position: 'relative',
          width: 400,
          height: 400,
        }}
      >
        {/* Puzzle Piece 1 */}
        <PuzzlePiece1
          style={{
            position: 'absolute',
            transform: pieceStates.piece1
              ? 'translate(0px, 0px)'
              : 'translate(-200px, -200px)',
            transition: 'transform 1s ease-in-out',
          }}
        />

        {/* Puzzle Piece 2 */}
        <PuzzlePiece2
          style={{
            position: 'absolute',
            transform: pieceStates.piece2
              ? 'translate(200px, 0px)'
              : 'translate(400px, -200px)',
            transition: 'transform 1s ease-in-out',
          }}
        />

        {/* Puzzle Piece 3 */}
        <PuzzlePiece3
          style={{
            position: 'absolute',
            transform: pieceStates.piece3
              ? 'translate(100px, 200px)'
              : 'translate(100px, 400px)',
            transition: 'transform 1s ease-in-out',
          }}
        />
      </Box>
    </Stack>
  );
};

export default PuzzleAnimation;
