"use client";

import GridTable from "@/components/GridTable";
import { Box } from "@mui/material";
import PageHeader from "@/components/PageHeader";
import {useState} from "react";
import {addData} from "@/services/apiService";
import CreateModal from "@/components/CreateModal";

const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "type", headerName: "Type", width: 200, editable: true },
    { field: "dealerId", headerName: "Dealer ID", width: 250, editable: true },
    { field: "name", headerName: "Name", width: 150, editable: true },
    { field: "description", headerName: "Description", width: 150, editable: true },
];

const fields = ["type", "dealerId", "name", "description"]

export default function ArticleTable() {
    const [open, setOpen] = useState(false);

    const handleSave = async (data) => {
        await addData("article", data);
        setOpen(false);
        window.location.reload();
    }

    return (
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", overflow: "auto" }}>
            <Box sx={{ width: "93%", maxHeight: "89%" }}>
                <PageHeader title="Article" onAdd={() => setOpen(true)} />
                <GridTable endpoint="articles" columns={columns} />
                <CreateModal open={open} onClose={() => setOpen(false)} onSave={handleSave} fields={fields} />
            </Box>
        </Box>
    );
}