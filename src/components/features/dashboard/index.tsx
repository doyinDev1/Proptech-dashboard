"use client";
import { Box } from "@mui/material";
import { Heading } from "@/components";
import { colors } from "@/styles";

export const Dashboard = () => {
    return (
        <Box sx={{ margin: "12px 24px 16px 24px" }}>
            <Heading sx={{ fontWeight: 600, fontSize: 20, color: colors.primary.black, marginBottom: 2 }}>Welcome, Ahmed</Heading>
        </Box>
    )
}