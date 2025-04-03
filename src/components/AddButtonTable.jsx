"use client";

import { Button } from "@mui/material";

export default function AddButtonTable({ text, onClick }) {
    return (
        <Button
            variant="contained"
            sx={{ textTransform: "none", bgcolor: "#1E90FF", "&:hover": { bgcolor: "#1C86EE" } }}
            onClick={onClick}
        >
            {text}
        </Button>
    );
}
