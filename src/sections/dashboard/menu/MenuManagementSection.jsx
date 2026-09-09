import React from 'react';
import { useMenu } from '../../../hooks/dashboard/useMenu';
import AdminHeader from '../../../components/dashboard/AdminHeader';
import MenuTable from '../../../features/dashboard/menu/MenuTable';
import MenuModals from '../../../features/dashboard/menu/MenuModals';

const MenuManagementSection = () => {
    const {
        showAddModal, setShowAddModal, handleAddSubmit,
        showEditModal, setShowEditModal, itemToEdit, handleEditSubmit, handleEditClick,
        showDeleteModal, setShowDeleteModal, itemToDelete, setItemToDelete, handleConfirmDelete, handleDeleteClick
    } = useMenu();

    return (
        <section className="d-flex flex-column h-100 animation-fade-in">
            <AdminHeader
                title="Menu Management" 
                subtitle="Add, update, and manage your restaurant's items." 
                actionText="Add New Item" 
                onActionClick={() => setShowAddModal(true)}
            />

            <MenuTable onEditClick={handleEditClick} onDeleteClick={handleDeleteClick} />

            <MenuModals 
                showAdd={showAddModal}
                onHideAdd={() => setShowAddModal(false)}
                onSaveAdd={handleAddSubmit}
                
                showEdit={showEditModal}
                onHideEdit={() => setShowEditModal(false)}
                onSaveEdit={handleEditSubmit}
                itemToEdit={itemToEdit}
                
                showDelete={showDeleteModal}
                onHideDelete={() => {
                    setShowDeleteModal(false);
                    setItemToDelete(null);
                }}
                onConfirmDelete={handleConfirmDelete}
                itemToDelete={itemToDelete}
            />

        </section>
    );
};

export default MenuManagementSection;