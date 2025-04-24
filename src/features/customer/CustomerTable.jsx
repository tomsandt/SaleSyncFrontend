"use client";

import GridTable from "@/components/GridTable";
import { Box } from "@mui/material";
import PageHeader from "@/components/PageHeader";
import {useState} from "react";
import {addData} from "@/services/apiService";
import CreateModal from "@/components/CreateModal";

const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "first_name", headerName: "First Name", width: 200, editable: true },
    { field: "last_name", headerName: "Last Name", width: 250, editable: true },
    { field: "street", headerName: "Street", width: 150, editable: true },
    { field: "zip_code", headerName: "ZIP Code", width: 150, editable: true },
    { field: "city", headerName: "City", width: 150, editable: true },
    { field: "email", headerName: "Email", width: 150, editable: true },
    { field: "phone", headerName: "Phone", width: 150, editable: true },
];

const fields = ["first_name", "last_name", "street", "zip_code", "city", "email", "phone"]

export default function CustomerTable() {
    const [open, setOpen] = useState(false);

    const handleSave = async (data) => {
        await addData("customers", data);
        setOpen(false);
        window.location.reload();
    }

    return (
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", overflow: "auto" }}>
            <Box sx={{ width: "93%", maxHeight: "89%" }}>
                <PageHeader title="Customer" onAdd={() => setOpen(true)} />
                <GridTable endpoint="customers" columns={columns} />
                <CreateModal open={open} onClose={() => setOpen(false)} onSave={handleSave} fields={fields} />
            </Box>
        </Box>
    );
}
