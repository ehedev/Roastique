import React from 'react';
import MenuAddModal from '../../../components/ui/MenuAddModal';
import MenuEditModal from '../../../components/ui/MenuEditModal';
import MenuDeleteModal from '../../../components/ui/MenuDeleteModal';

const MenuModals = ({
        showAdd, onHideAdd, onSaveAdd,
        showEdit, onHideEdit, onSaveEdit, itemToEdit,
        showDelete, onHideDelete, onConfirmDelete, itemToDelete
    }) => {
        
    return (
        <>
            <MenuAddModal 
                show={showAdd} 
                onHide={onHideAdd} 
                onSave={onSaveAdd} 
            />

            <MenuEditModal 
                show={showEdit} 
                onHide={onHideEdit} 
                onSave={onSaveEdit}
                itemToEdit={itemToEdit}
            />

            <MenuDeleteModal
                show={showDelete}
                onHide={onHideDelete}
                onConfirm={onConfirmDelete}
                itemName={itemToDelete?.name}
            />
        </>
    );
};

export default MenuModals;