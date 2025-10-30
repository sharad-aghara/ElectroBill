import Dialog from '@mui/material/Dialog'
import React, { useState } from 'react'

export const CategoryPage: React.FC = () => {
    const [isDilogOpen, setIsDilogOpen] = useState(false);
    const [formData, setFormData] = useState({name:'', active: true});

    const handleDilogClose = (open: boolean) => {
        setIsDilogOpen(false);
        if(!open) {
            resetForm();
        }
    }

    const resetForm = () => {
        setFormData({
            name: '',
            active: true,
        });
        setEditingCategory(null);
    }



  return (
    <div className="p-6">
        <div className="flex justify-between items-center mb-6">
            {/* heading */}
            <h1 className="text-3xl">Categories</h1>

            {/* dilog box */}
            <Dialog open={isDilogOpen} onClose={handleDilogClose}>

            </Dialog>
        </div>
    </div>
  )
}
