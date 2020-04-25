import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';

const AddOwner = (props, { status }) => {
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
    const [owner, setOwner] = useState({});

    useEffect(() => {
        if (status) {
            setOwner(info => ({...owner, info}))
        }
    }, [status, owner])

    return (
        <div id="owner-container">
            <h1>Create an Owner</h1>

            <Form 
                className="artist-form"
                onSubmit={handleSubmit}
            >
                {/* first name */}
                <h2 className="placeholder">First Name</h2>
                <Field 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name"
                    className="text-field"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                />
                {touched.firstName && errors.firstName && ( <p className="error">{errors.firstName}</p> )}

                {/* last name */}
                <h2 className="placeholder">Last Name</h2>
                <Field 
                    type="test" 
                    name="lastName" 
                    placeholder="Last Name" 
                    className="text-field"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                />
                {touched.lastName && errors.lastName && <p className="error">{errors.lastName}</p>}

                <button type="submit" className="button">Submit</button>
            </Form>
        </div>
    );
}

// use formik 
const OwnerForm = withFormik({

    // assign default value if given value is undefined 
    mapPropsToValues({ firstName, lastName }) {
        return {
            firstName: firstName || "",
            lastName: lastName || "", 
        };
    },
    
    // use yup to enforce input requirements 
    validationSchema: Yup.object().shape({
        firstName: Yup
        .string()
        .required("Please Enter Owner's First Name"),
        lastName: Yup
        .string()
        .required("Please Enter Owner's Last Name"),
    }),
    
    // update values and set status 
    handleSubmit(values, { resetForm, props }) {
        console.log("owner form values, props", values, props)
    
        resetForm(); 
    }
})(AddOwner)

export default OwnerForm;