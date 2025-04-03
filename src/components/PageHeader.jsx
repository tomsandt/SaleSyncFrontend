import { Box, Typography } from "@mui/material";
import AddButtonTable from "@/components/AddButtonTable";

export default function PageHeader({ title, onAdd }) {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, padding: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>{title}</Typography>
            <AddButtonTable text={`Add ${title}`} onClick={onAdd} />
        </Box>
    );
}