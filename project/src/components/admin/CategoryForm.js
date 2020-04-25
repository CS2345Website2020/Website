import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddCategory = (props, { status }) => {
    // used with formik and yup validation 
	const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
    } = props;

    // hook keeps track of art information 
    const [category, setCategory] = useState({
        name: "",
        definition: "", 
        tag: ""
    });

    useEffect(() => {
        if (status) {
            setCategory(info => ({...category, info}))
        }
    }, [status, category])

    return (
        <div id="category-container">
            <h1>Create a Category</h1>

            <Form 
                id="category-form"
                onSubmit={handleSubmit}
            >
                {/* name */}
                <h2 className="placeholder">Name</h2>
                <Field 
                    type="text" 
                    name="name" 
                    placeholder="Enter Category Name"
                    className="art-input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
                {touched.name && errors.name && ( <p className="error">{errors.name}</p> )}

                {/* definition */}
                <h2 className="placeholder">Definition</h2>
                <Field 
                    type="text" 
                    name="definition" 
                    placeholder="Enter Category Definition" 
                    className="art-input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.definition}
                />
                {touched.definition && errors.definition && <p className="error">{errors.definition}</p>}

                {/* tag */}
                <h2 className="placeholder">Tag</h2>
                <Field 
                    type="text" 
                    name="tag" 
                    placeholder="Enter Category Tag"
                    className="art-input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tag}
                />
                {touched.tag && errors.tag && ( <p className="error">{errors.tag}</p> )}

                <button type="submit" id="add-button"><span>Submit</span></button>
            </Form>
        </div>
    );
}

// use formik 
const CategoryForm = withFormik({

    // assign default values if value is undefined 
    mapPropsToValues({ name, definition, tag }) {
        return {
            name: name || "", 
            definition: definition || "",
            tag: tag || "",
        };
    }, 

    validationSchema: Yup.object().shape({
        name: Yup
        .string()
        .required("Please Enter Category Name"),
        definition: Yup 
        .string()
        .required("Please Enter Category Definition"),
        tag: Yup
        .string()
        .required("Please Enter Category Tag")
    }),

    handleSubmit(values, { resetForm, props }) {
        console.log("category form values, props", values, props)

		axios
            .post('https://cs2345-db-api.herokuapp.com/category', values)
            .then(response => {
                // successful 
                console.log("add art form api response object", response.data);
                
            }) 

            .catch(error => {
                // unsuccessful 
                console.log("The api is currently down.", error.response);
            });

        resetForm();
    }
})(AddCategory)

export default CategoryForm;