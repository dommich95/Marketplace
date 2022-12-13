import React from 'react';
import { StyleSheet} from 'react-native';
import * as Yup from 'yup'

import {AppForm,AppFormField,AppFormPicker,SubmitButton} from '../components/forms';
import Screen from '../components/Screen';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category')
})

const categories = [
    { label: 'Furniture', vale: 1},
    { label: 'Clothing', vale: 2},
    { label: 'Camera', vale: 3},
]

function ListingEditScreen(props) {
    return (
      <Screen style={styles.container}>
        <AppForm 
            initialValues={{
                title: '',
                price: "",
                description: "",
                category: null,
            }}
            onSubmit = {(values) => console.log(values)}
            validationSchema= {validationSchema}
        >
            <AppFormField maxLength={255} name="title" placeholder="Title" />
            <AppFormField maxLength={8} name="price" placeholder="Price" keyboardType="numeric" />
            <AppFormPicker name="category" placeholder="Category"item={categories} />
            <AppFormField maxLength={255} name="description" placeholder="Description" numberOfLines={3} multiline />
            <SubmitButton title= "Post" /> 
        </AppForm>
      </Screen>
      
    );
}
const styles = StyleSheet.create({
    container: {

    }
})

export default ListingEditScreen;