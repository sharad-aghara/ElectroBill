import type { Category } from "@/context/types";
import { useData } from "@/context/useData";

import AddIcon from "@mui/icons-material/Add";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import Switch, { type SwitchProps } from "@mui/material/Switch";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import React, { useState } from "react";

export const CategoryPage: React.FC = () => {
    const { categories, addCategory, updateCategory, deleteCategory } =
        useData();
    const [isDilogOpen, setIsDilogOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", active: true });
    const [editingCategory, setEditingCategory] = useState<Category | null>(
        null
    );

    const handleSubmit = (e: React.FormEvent) => {
        console.log(categories);

        e.preventDefault();

        if (editingCategory) {
            updateCategory(editingCategory.id, formData);
        } else {
            addCategory(formData);
        }

        setIsDilogOpen(false);
        resetForm();
        console.log(categories);
    };

    const handleEdit = (category: Category) => {
        setEditingCategory(category);
        setFormData({ name: category.name, active: category.active });
        setIsDilogOpen(true);
    };

    const handleDelete = (id: string) => {
        if (confirm("Are you sure to delete this category?")) {
            deleteCategory(id);
        }
    };

    const handleDilogClose = (open: boolean) => {
        setIsDilogOpen(false);
        if (!open) {
            resetForm();
        }
    };

    const resetForm = () => {
        setFormData({
            name: "",
            active: true,
        });
        setEditingCategory(null);
    };

    const handleDialogOpen = () => {
        setIsDilogOpen(true);
    };

    const handleDilogueClose = (open: boolean) => {
        setIsDilogOpen(open);
        if (!open) {
            resetForm();
        }
    };

    // MUI Switch Customization
    const IOSSwitch = styled((props: SwitchProps) => (
        <Switch
            focusVisibleClassName=".Mui-focusVisible"
            disableRipple
            {...props}
        />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: 2,
            transitionDuration: "300ms",
            "&.Mui-checked": {
                transform: "translateX(16px)",
                color: "#fff",
                "& + .MuiSwitch-track": {
                    backgroundColor: "#0a290f", //"#65C466",
                    opacity: 1,
                    border: 0,
                    ...theme.applyStyles("dark", {
                        backgroundColor: "#2ECA45",
                    }),
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                    opacity: 0.5,
                },
            },
            "&.Mui-focusVisible .MuiSwitch-thumb": {
                color: "#0a290f", //"#33cf4d",
                border: "6px solid #fff",
            },
            "&.Mui-disabled .MuiSwitch-thumb": {
                color: theme.palette.grey[100],
                ...theme.applyStyles("dark", {
                    color: theme.palette.grey[600],
                }),
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.7,
                ...theme.applyStyles("dark", {
                    opacity: 0.3,
                }),
            },
        },
        "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 22,
            height: 22,
        },
        "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            backgroundColor: "#E9E9EA",
            opacity: 1,
            transition: theme.transitions.create(["background-color"], {
                duration: 500,
            }),
            ...theme.applyStyles("dark", {
                backgroundColor: "#39393D",
            }),
        },
    }));

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                {/* heading */}
                <h1 className="text-3xl">Categories</h1>

                {/* dilogue button
                <Button variant="outlined" onClick={handleDialogOpen}>
                    Add Category
                </Button> */}

                {/* dilog box */}
                <Dialog
                    open={isDilogOpen}
                    onClose={handleDilogClose}
                    fullWidth="true"
                >
                    <DialogTitle>
                        {editingCategory ? "Edit Category" : "Add Category"}
                    </DialogTitle>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <DialogContent>
                            <div className="space-y-2">
                                <InputLabel htmlFor="name">
                                    Category Name
                                </InputLabel>
                                <Input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        });
                                    }}
                                    required
                                    className="h-12 w-md text-lg"
                                />

                                <div className="flex items-center justify-between">
                                    <InputLabel htmlFor="active">
                                        Active
                                    </InputLabel>
                                    {/* <Switch
                                        id="active"
                                        checked={formData.active}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                active: e.target.checked,
                                            })
                                        }
                                    /> */}

                                    <IOSSwitch
                                        sx={{ m: 1 }}
                                        id="active"
                                        checked={formData.active}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                active: e.target.checked,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <div className="flex gap-3 justify-end">
                                <Button
                                    type="button"
                                    variant="outlined"
                                    onClick={() => handleDilogueClose(false)}
                                    size="large"
                                    sx={{
                                        color: "black",
                                        borderColor: "black",
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        background: "black",
                                        borderColor: "black",
                                    }}
                                >
                                    {editingCategory ? "Update" : "Add"}
                                </Button>
                            </div>
                        </DialogActions>
                    </form>
                </Dialog>

                {/* main content */}
                <div className="border rounded-lg">
                    {/* dilogue button */}
                    <Button
                        variant="contained"
                        onClick={handleDialogOpen}
                        sx={{ background: "black" }}
                    >
                        <AddIcon className="mr-2" /> Add Category
                    </Button>
                </div>
            </div>

            <div className="flex justify-between items-center mb-6">
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell className="text-right">
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {categories.length === 0 ? (
                                <TableRow>
                                    <TableCell
                                        colSpan={3}
                                        className="text-center py-8 text-muted-foreground"
                                    >
                                        No categories found. Add your first
                                        category to get started.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                categories.map((category) => (
                                    <TableRow key={category.id}>
                                        {/* col-1 */}
                                        <TableCell>{category.name}</TableCell>

                                        {/* col-2 */}
                                        <TableCell>
                                            {/* {category.active
                                                ? "Active"
                                                : "Inactive"} */}
                                            <Badge
                                                color={
                                                    category.active
                                                        ? "success"
                                                        : "secondary"
                                                }
                                                badgeContent={
                                                    category.active
                                                        ? "Active"
                                                        : "Inactive"
                                                }
                                            ></Badge>
                                        </TableCell>

                                        {/* col-3 */}
                                        <TableCell className="text-right">
                                            <div className="flex gap-2 justify-end">
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    onClick={() =>
                                                        handleEdit(category)
                                                    }
                                                    className="h-10 w-10"
                                                    sx={{
                                                        color: "black",
                                                        borderColor: "black",
                                                    }}
                                                >
                                                    <EditOutlinedIcon className="h-4 w-4" />
                                                </Button>

                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    onClick={() =>
                                                        handleDelete(
                                                            category.id
                                                        )
                                                    }
                                                    className="h-10 w-10"
                                                    sx={{
                                                        color: "black",
                                                        borderColor: "black",
                                                    }}
                                                >
                                                    <DeleteForeverOutlinedIcon className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};
