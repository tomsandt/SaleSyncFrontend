"use client";

import GridTable from "@/components/GridTable";
import { Box } from "@mui/material";
import PageHeader from "@/components/PageHeader";
import {useState} from "react";
import {addData} from "@/services/apiService";
import CreateModal from "@/components/CreateModal";
import {deleteSale, fetchSales, updateSale} from "@/features/sale/saleService";

const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "customerId", headerName: "Customer ID", width: 200, editable: true },
    { field: "articleId", headerName: "Article ID", width: 250, editable: true },
    { field: "status", headerName: "Status", width: 150, editable: true },
    { field: "amount", headerName: "Amount", width: 150, editable: true },
    { field: "date", headerName: "Date", width: 150, editable: true },
    { field: "price", headerName: "Price", width: 150, editable: true },
    { field: "fee", headerName: "Fee", width: 150, editable: true },
    { field: "tax", headerName: "Tax", width: 150, editable: true },
];

const fields = ["Customer ID", "Article ID", "Status", "Amount", "Date", "Price", "Fee", "Tax"]

export default function SaleTable() {
    const [open, setOpen] = useState(false);

    const handleSave = async (data) => {
        await addData("sales", data);
        setOpen(false);
        window.location.reload();
    }

    return (
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", overflow: "auto" }}>
            <Box sx={{ width: "93%", maxHeight: "89%" }}>
                <PageHeader title="Sale" onAdd={() => setOpen(true)} />
                <GridTable
                    columns={columns}
                    fetchObj={fetchSales}
                    updateObj={updateSale}
                    deleteObj={deleteSale}
                />
                <CreateModal open={open} onClose={() => setOpen(false)} onSave={handleSave} fields={fields} />
            </Box>
        </Box>
    );
}