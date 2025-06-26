"use client";
import {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";

export default function createModal({ open, onClose, onSave, fields }) {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        onSave(formData);
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            slotProps={{
                paper: {
                    component: 'form',
                    onSubmit: handleSubmit,
                },
            }}
        >
            <DialogTitle>Add new Customer</DialogTitle>
            <DialogContent>
                {fields.map(({ name, label }) => (
                    <TextField
                        key={name}
                        label={label}
                        name={name}
                        fullWidth
                        margin="dense"
                        onChange={handleChange}
                        required={true}
                    />
                ))}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Cancel</Button>
                <Button type="submit" color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    )
}