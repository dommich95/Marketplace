import React from 'react';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage'
import {useFormikContext} from  'formik'

function AppFromPicker({name,items, placeholder}) {
    const {setFieldValue, values, errors, touched} =  useFormikContext()
    return (
        <>
            <AppPicker
                items={items}
                onSelectItem ={(item) => setFieldValue(name,item)}
                placeholder={placeholder}
                selectItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFromPicker;