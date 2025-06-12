"use client"
import {DataGrid, GridActionsCellItem, GridRowModes} from "@mui/x-data-grid";
import { Box } from "@mui/material";
import {useEffect, useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import {deleteData, fetchData, updateData} from "@/services/apiService";

export default function GridTable({ columns, fetchObj, updateObj, deleteObj }) {
    const [rows, setRows] = useState([]);
    const [rowMode, setRowMode] = useState({});

    useEffect(() => {
        fetchObj().then(setRows);
    }, [fetchObj]);

    const handleEditClick = (id) => () => {
        setRowMode({ ...rowMode, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => async () => {
        const updatedRow = rows.find((row) => row.id === id);
        await updateObj(id, updatedRow);
        setRowMode({ ...rowMode, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id) => async () => {
        await deleteObj(id);
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    };

    const handleCancelClick = (id) => () => {
        setRowMode({
            ...rowMode,
            [id]: { mode: GridRowModes.View, ignoreModifications: true},
        });
    };

    const processRowUpdate = async (newRow) => {
        await updateObj(newRow.id, newRow);
        return newRow;
    };

    const handleRowModeChange = (newMode) => {
        setRowMode(newMode);
    };

    const actionColumn = {
        field : "actions",
        type : "actions",
        headerName : "CRUD",
        width : 100,
        getActions: ({id}) => {
            const isInEditMode = rowMode[id]?.mode === GridRowModes.Edit;

            if (isInEditMode) {
                return [
                    <GridActionsCellItem icon={<SaveIcon />} label="Save" onClick={handleSaveClick(id)} />,
                    <GridActionsCellItem icon={<CancelIcon />} label="Cancel" onClick={handleCancelClick(id)} />
                ];
            }

            return [
                <GridActionsCellItem icon={<EditIcon />} label="Edit" onClick={handleEditClick(id)} />,
                <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={handleDeleteClick(id)} />
            ];
        },
    };

    return (
        <>
            <Box sx={{ width: "100%", height: "95%" }}>
                <DataGrid
                    rows={rows}
                    columns={[...columns, actionColumn]}
                    editMode="row"
                    rowModesModel={rowMode}
                    onRowModesModelChange={handleRowModeChange}
                    processRowUpdate={processRowUpdate}
                    pageSizeOptions={[5]}
                    checkboxSelection
                />
            </Box>
        </>
    );
}
