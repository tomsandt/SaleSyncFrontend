import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#fff",
                },
                columnHeaders: {
                    backgroundColor: "#f5f5f5",
                    fontSize: "16px",
                    fontWeight: "bold",
                    borderBottom: "2px solid #e0e0e0",
                },
                cell: {
                    fontSize: "14px",
                    borderBottom: "1px solid #f0f0f0",
                },
                row: {
                    "&:hover": {
                        backgroundColor: "#f9f9f9",
                    },
                },
                checkbox: {
                    color: "#1E90FF",
                },
            },
        },
    },
});

export default theme;
