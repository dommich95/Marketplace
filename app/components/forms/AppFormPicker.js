import React from 'react';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage'
import {useFormikContext} from  'formik'

function AppFromPicker({name,items, placeholder,PickerItemComponent, width, numberOfColumns}) {
    const {setFieldValue, values, errors, touched} =  useFormikContext()
    return (
        <>
            <AppPicker
                items={items}
                numberOfColumns = {numberOfColumns}
                PickerItemComponent={PickerItemComponent}
                onSelectItem ={(item) => setFieldValue(name,item)}
                placeholder={placeholder}
                selectItem={values[name]}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFromPicker;