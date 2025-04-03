"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/themes/Theme";
import Sidebar from "@/components/Sidebar";
import { Box } from "@mui/material";

export default function RootLayout({ children }) {
    return (
        <html lang="de">
        <body>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: "flex", height: "100vh", overflow: "hidden", position: "relative" }}>
                <Sidebar />

                {/* Content */}
                <Box
                    sx={{
                        flexGrow: 1,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        bgcolor: "#F5F5F5",
                        padding: 3
                    }}
                >
                    {children}
                </Box>
            </Box>
        </ThemeProvider>
        </body>
        </html>
    );
}
