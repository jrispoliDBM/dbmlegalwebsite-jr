import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
    const theme = useTheme();
    const { mode } = theme.palette;

    return (
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={1}
        >
            <Box
                display={"flex"}
                component="a"
                href="/"
                title="theFront"
                width={{ xs: 200, md: 240 }}
            >
                <Box
                    component={"img"}
                    src={
                        mode === "light" && !colorInvert
                            ? "/images/dbm_dark_logo2.png"
                            : "/images/dbm_dark_logo2.png"
                    }
                    height={1}
                    width={1}
                />
            </Box>
            <Box sx={{ display: "block" }} alignItems={"center"}>
                <Button
                    onClick={() => onSidebarOpen()}
                    aria-label="Menu"
                    variant={"outlined"}
                    sx={{
                        borderRadius: 2,
                        minWidth: "auto",
                        padding: 1,
                        borderColor: alpha(theme.palette.divider, 0.2),
                    }}
                >
                    <MenuIcon />
                </Button>
            </Box>
        </Box>
    );
};

Topbar.propTypes = {
    onSidebarOpen: PropTypes.func,
    pages: PropTypes.object,
    colorInvert: PropTypes.bool,
};

export default Topbar;
