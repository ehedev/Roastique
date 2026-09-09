import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('Item name is required'),
    category: yup.string().required('Category is required'),
    description: yup.string().required('Description is required'),
    price: yup.number()
        .transform(value => (isNaN(value) ? undefined : value))
        .positive('Price must be greater than zero')
        .required('Price is required'),
    isAvailable: yup.boolean().default(true)
});

export const useMenuForm = (show, itemToEdit = null) => {
    const formMethods = useForm({
        resolver: yupResolver(schema),
        defaultValues: { isAvailable: true }
    });

    const { reset } = formMethods;

    useEffect(() => {
        if (show) {
            if (itemToEdit) {
                reset({
                    name: itemToEdit.name,
                    category: itemToEdit.category,
                    description: itemToEdit.description,
                    price: itemToEdit.price,
                    isAvailable: itemToEdit.isAvailable
                });
            } else {
                reset({ name: '', category: '', description: '', price: '', isAvailable: true });
            }
        }
    }, [show, itemToEdit, reset]);

    return formMethods;
};