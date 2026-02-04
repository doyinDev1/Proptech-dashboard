"use client";

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    AppBar,
    Avatar,
    Box,
    Container,
    Button,
    IconButton,
    styled,
    Toolbar,
    Tooltip
} from '@mui/material';
import {
    CalculatorIcon,
    CalendarIcon,
    LogoIcon,
    MarketPlaceIcon,
    PayoutIcon,
    SearchStatusIcon,
} from '@/components';
import { colors } from '@/styles';
import { navItems } from './nav-items';
import { navIcons } from './nav-icons';

const StyledIcon = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== "disabled",
})<{ disabled?: boolean }>(({ disabled }) => ({
    color: colors.white,
    padding: '0px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    '&:hover': {
        cursor: disabled ? 'not-allowed' : 'pointer',
    },
}));

const StyledAvatar = styled(Avatar, {
    shouldForwardProp: (prop) => !["showUserProfile"].includes(prop as string),
})<{ showUserProfile?: boolean }>(({ showUserProfile }) => ({
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 500,
    fontSize: 23,
    cursor: 'pointer',
    fontFamily: 'var(--font-euclid-circular-b)',
    border: showUserProfile ? "4px solid white" : "4px solid transparent",
    transform: showUserProfile ? "scale(1.05)" : "scale(1)",
    transition: "all 0.3s ease",
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: `0 0 0 4px ${colors.gray[100]}`,
    }
}));

const StyledNavItem = styled(Button, {
    shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ active }) => ({
    textTransform: 'none',
    color: active ? colors.primary.main : colors.gray[400],
    backgroundColor: active ? colors.gray[300] : 'transparent',
    '&:hover': {
        backgroundColor: colors.gray[300],
        color: 'black'
    },
    fontFamily: 'var(--font-euclid-circular-b), sans-serif',
    borderRadius: '8px',
    padding: '9px 32px',
    fontWeight: active ? 600 : 400,
    fontSize: 14,
    transition: 'all 0.2s ease'
}));

const StyledTooltip = styled(({ className, ...props }: React.ComponentProps<typeof Tooltip>) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    '& .MuiTooltip-tooltip': {
        fontFamily: 'var(--font-euclid-circular-b), sans-serif',
        backgroundColor: colors.gray[850],
        color: colors.white,
        fontSize: '12px',
        fontWeight: 500,
        padding: '8px 12px',
        borderRadius: '8px',
        '& .MuiTooltip-arrow': {
            color: colors.gray[850],
        },
    },
});

export const Navbar = () => {
    const [showUserProfile, setShowUserProfile] = useState(false);
    const pathname = usePathname();

    const renderNavItem = useCallback((item: { key: string; title: string; href: string; icon: string }) => {
        const Icon = navIcons[item.icon as keyof typeof navIcons];
        const active = pathname === item.href;

        return (
            <Link key={item.key} href={item.href} style={{ textDecoration: 'none' }}>
                <StyledNavItem active={active}>
                    {Icon && <Icon sx={{ mr: 1, fontSize: 20, color: active ? colors.primary.main : colors.gray[400] }} />}
                    {item.title}
                </StyledNavItem>
            </Link>
        );
    }, [pathname]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: colors.primary.main }}>
                <Container maxWidth="xl">
                    <Toolbar sx={{ justifyContent: 'space-between', px: 0, height: '82px' }}>
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gridColumn: '1 / 2',
                                cursor: 'pointer'
                            }}>
                                <LogoIcon sx={{ color: 'white', width: 200, height: 27 }} />
                            </Box>
                        </Link>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>

                            <StyledTooltip title="Budgeting" placement="bottom" arrow>
                                <StyledIcon>
                                    <CalculatorIcon sx={{ fontSize: "36px" }} />
                                </StyledIcon>
                            </StyledTooltip>
                            <StyledTooltip title="Calendar" placement="bottom" arrow>
                                <StyledIcon>
                                    <CalendarIcon sx={{ color: "white", fontSize: "36px" }} />
                                </StyledIcon>
                            </StyledTooltip>

                            <StyledTooltip title="Search Activity" placement="bottom" arrow>
                                <StyledIcon>
                                    <SearchStatusIcon sx={{ color: "white", fontSize: "36px" }} />
                                </StyledIcon>
                            </StyledTooltip>

                            <StyledTooltip title="Payout Center" placement="bottom" arrow>
                                <StyledIcon>
                                    <PayoutIcon sx={{ color: "white", fontSize: "36px" }} />
                                </StyledIcon>
                            </StyledTooltip>

                            <StyledTooltip title="Marketplace" placement="bottom" arrow>
                                <StyledIcon>
                                    <MarketPlaceIcon sx={{ color: "white", fontSize: "36px" }} />
                                </StyledIcon>
                            </StyledTooltip>
                            <Box sx={{ position: 'relative' }}>
                                <StyledAvatar
                                    onMouseEnter={() => setShowUserProfile(true)}
                                    onMouseLeave={() => setShowUserProfile(false)}
                                >
                                    D
                                </StyledAvatar>
                                {showUserProfile && (
                                    <h1>Dylan Frank</h1>
                                )}
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{ bgcolor: 'white', borderBottom: 1, borderColor: colors.gray[100] }}>
                <Container maxWidth="xl">
                    <Toolbar sx={{ justifyContent: 'space-between', padding: "14px 0" }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}>
                            {navItems.map(renderNavItem)}
                        </Box>
                    </Toolbar>
                </Container>
            </Box>
        </Box>
    );
};
