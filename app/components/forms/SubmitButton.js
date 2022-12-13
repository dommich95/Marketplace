import React from 'react';
import ButtonScreen from '../../screens/ButtonScreen';
import {useFormikContext} from 'formik'

function SubmitButton({title}) {
    const {handleSubmit} = useFormikContext();
    return (
        <ButtonScreen title={title} onPress={handleSubmit} />
    );
}

export default SubmitButton;