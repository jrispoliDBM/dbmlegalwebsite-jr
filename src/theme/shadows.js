import { alpha } from '@mui/material/styles';
const shadows = (themeMode = 'light') => {
  const rgb = themeMode !== 'light' ? '#8c98a4' : '#000000';

  return [
    'none',
    `0 3px 6px 0 ${alpha(rgb, 0.25)}`,
    `0 12px 15px ${alpha(rgb, 0.1)}`,
    `0 6px 24px 0 ${alpha(rgb, 0.125)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 16px 28px 0 ${alpha(rgb, 0.35)}`,
    `0 20px 40px 5px ${alpha(rgb, 0.4)}`,
    `0 24px 48px 10px ${alpha(rgb, 0.45)}`,
    `0 28px 56px 15px ${alpha(rgb, 0.5)}`,
    `0 32px 64px 20px ${alpha(rgb, 0.55)}`,
    `0 36px 72px 25px ${alpha(rgb, 0.6)}`,
    `0 40px 80px 30px ${alpha(rgb, 0.65)}`,
    `0 44px 88px 35px ${alpha(rgb, 0.7)}`,
    `0 48px 96px 40px ${alpha(rgb, 0.75)}`,
    `0 52px 104px 45px ${alpha(rgb, 0.8)}`,
        `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
  ];
};

export default shadows;
