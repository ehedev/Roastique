import { useState } from 'react';
import { useRestaurant } from '../../store/RestaurantContext';

export const useMenu = () => {
    const { addMenuItem, updateMenuItem, deleteMenuItem } = useRestaurant();

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [itemToEdit, setItemToEdit] = useState(null);
    const [itemToDelete, setItemToDelete] = useState(null);

    // Handlers for Add Modal
    const handleAddSubmit = (newItemData) => {
        addMenuItem(newItemData);
        setShowAddModal(false);
    };

    // Handlers for Edit Modal
    const handleEditClick = (item) => {
        setItemToEdit(item);
        setShowEditModal(true);
    };

    const handleEditSubmit = (id, updatedData) => {
        updateMenuItem(id, updatedData);
        setShowEditModal(false);
    };

    // Handlers for Delete Modal
    const handleDeleteClick = (item) => {
        setItemToDelete(item);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        if (itemToDelete) {
            deleteMenuItem(itemToDelete.id);
            setShowDeleteModal(false);
            setItemToDelete(null);
        }
    };

    return {
        showAddModal, setShowAddModal, handleAddSubmit,
        showEditModal, setShowEditModal, itemToEdit, handleEditSubmit, handleEditClick,
        showDeleteModal, setShowDeleteModal, itemToDelete, setItemToDelete, handleDeleteClick, handleConfirmDelete
    };
};