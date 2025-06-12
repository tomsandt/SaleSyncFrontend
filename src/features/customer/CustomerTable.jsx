"use client";

import GridTable from "@/components/GridTable";
import { Box } from "@mui/material";
import PageHeader from "@/components/PageHeader";
import {useState} from "react";
import CreateModal from "@/components/CreateModal";
import {addCustomer, deleteCustomers, fetchCustomers, updateCustomers} from "@/features/customer/customerService";

const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "firstName", headerName: "First Name", width: 200, editable: true },
    { field: "lastName", headerName: "Last Name", width: 250, editable: true },
    { field: "street", headerName: "Street", width: 150, editable: true },
    { field: "zipCode", headerName: "ZIP Code", width: 150, editable: true },
    { field: "city", headerName: "City", width: 150, editable: true },
    { field: "mail", headerName: "E-Mail", width: 150, editable: true },
    { field: "phone", headerName: "Phone", width: 150, editable: true },
];

const fields = ["firstName", "lastName", "street", "zipCode", "city", "mail", "phone"]

export default function CustomerTable() {
    const [open, setOpen] = useState(false);

    const handleSave = async (data) => {
        await addCustomer(data);
        setOpen(false);
        window.location.reload();
    }

    return (
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", overflow: "auto" }}>
            <Box sx={{ width: "93%", maxHeight: "89%" }}>
                <PageHeader title="Customer" onAdd={() => setOpen(true)} />
                <GridTable
                    columns={columns}
                    fetchObj={fetchCustomers}
                    updateObj={updateCustomers}
                    deleteObj={deleteCustomers}
                />
                <CreateModal open={open} onClose={() => setOpen(false)} onSave={handleSave} fields={fields} />
            </Box>
        </Box>
    );
}
