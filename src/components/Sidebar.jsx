"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const drawerWidth = 240;

const menuItems = [
    { text: "Dashboard", icon: <DashboardOutlinedIcon />, path: "/" },
    { text: "Customer", icon: <GroupOutlinedIcon />, path: "/customer" },
    { text: "Dealer", icon: <StorefrontOutlinedIcon />, path: "/dealer" },
    { text: "Inventory", icon: <Inventory2OutlinedIcon />, path: "/inventory" },
    { text: "Purchase", icon: <ShoppingCartOutlinedIcon />, path: "/purchase" },
    { text: "Sales", icon: <AttachMoneyOutlinedIcon />, path: "/sales" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Box
            sx={{
                width: drawerWidth,
                height: "100vh",
                backgroundColor: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                borderRight: "1px solid #E0E0E0",
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 80, p: 2 }}>
                <img src="/images/logo_salesync.png" style={{ width: "80%", maxWidth: "110px" }} />
            </Box>

            <Divider />

            <List sx={{ flexGrow: 1 }}>
                {menuItems.map(({ text, icon, path }, index) => (
                    <ListItem key={index} disablePadding>
                        <Link href={path} passHref legacyBehavior>
                            <ListItemButton
                                selected={pathname === path}
                                sx={{
                                    borderRadius: "12px",
                                    mx: 1,
                                    py: 1,
                                    backgroundColor: pathname === path ? "#E3E7FE" : "transparent",
                                    color: pathname === path ? "#3F51B5" : "inherit",
                                    "&:hover": { backgroundColor: "#E3E7FE" },
                                }}
                            >
                                <ListItemIcon sx={{ color: pathname === path ? "#3F51B5" : "inherit" }}>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={text} primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>

            <Divider />

            <List>
                <ListItem disablePadding>
                    <Link href="/settings" passHref legacyBehavior>
                        <ListItemButton selected={pathname === "/settings"} sx={{ borderRadius: "12px", mx: 1, py: 1 }}>
                            <ListItemIcon sx={{ color: pathname === "/settings" ? "#3F51B5" : "inherit" }}>
                                <SettingsOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }} />
                        </ListItemButton>
                    </Link>
                </ListItem>
            </List>

            <Box sx={{ p: 2, display: "flex", alignItems: "center", borderTop: "1px solid", borderColor: "divider" }}>
                <img src="/images/user_avatar.png" style={{ width: 36, height: 36, borderRadius: "50%" }} />
                <Box sx={{ ml: 2 }}>
                    <ListItemText primary="Tom Sandt" secondary="tom.sandt@telekom.de" />
                </Box>
                <LogoutRoundedIcon sx={{ ml: "auto", cursor: "pointer", color: "gray", fontSize: "1.6rem" }} />
            </Box>
        </Box>
    );
}
