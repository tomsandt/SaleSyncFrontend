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
    { field: "articleId", headerName: "Article ID", width: 250, editable: true },
    { field: "status", headerName: "Status", width: 150, editable: true },
    { field: "amount", headerName: "Amount", width: 150, editable: true },
    { field: "date", headerName: "Date", width: 150, editable: true },
    { field: "price", headerName: "Price", width: 150, editable: true },
    { field: "shipping", headerName: "Shipping", width: 150, editable: true },
    { field: "tax", headerName: "Tax", width: 150, editable: true },
];

const fields = ["type", "articleId", "status", "amount", "date", "price", "shipping", "tax"]

export default function PurchaseTable() {
    const [open, setOpen] = useState(false);

    const handleSave = async (data) => {
        await addData("purchases", data);
        setOpen(false);
        window.location.reload();
    }

    return (
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", overflow: "auto" }}>
            <Box sx={{ width: "93%", maxHeight: "89%" }}>
                <PageHeader title="Purchase" onAdd={() => setOpen(true)} />
                <GridTable endpoint="purchases" columns={columns} />
                <CreateModal open={open} onClose={() => setOpen(false)} onSave={handleSave} fields={fields} />
            </Box>
        </Box>
    );
}