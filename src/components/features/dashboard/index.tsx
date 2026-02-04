"use client";

import { Box, styled } from "@mui/material";
import { Heading } from "@/components";
import { colors } from "@/styles";
import { SalesOverviewCard } from "@/components";

const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: "row",
    gap: "21px",
    flexWrap: 'wrap',
    alignItems: 'center'
});

export const Dashboard = () => {
    return (
        <Box sx={{ margin: "12px 24px 16px 24px" }}>
            <Heading sx={{ fontWeight: 600, fontSize: 20, color: colors.primary.black, marginBottom: 2 }}>Welcome, Ahmed</Heading>
            <StyledBox>
                <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(68% - 12px)' }, width: "-webkit-fill-available" }}>
                    <SalesOverviewCard />
                </Box>
                <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(32% - 12px)' }, display: "flex", flexDirection: "column", gap: "20px" }}>
                </Box>
            </StyledBox>
        </Box>
    )
}