import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from './axiosWithAuth.js'; 
import '../../styles/AdminForms.css';

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
            <h1>New Owner Form</h1>
            <p>Please fill in all sections of the form completely.</p>

            <Form 
                id="owner-form"
                onSubmit={handleSubmit}
            >
                {/* first name */}
                <h2 className="placeholder">First Name</h2>
                <Field 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name"
                    className="input"
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
                    className="input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                />
                {touched.lastName && errors.lastName && <p className="error">{errors.lastName}</p>}

                <div id="space"></div>

                <div className="form-buttons">
                    <button type="submit" className="submit-button"><span>Submit</span></button>
                    <button className="cancel-button" onClick={() => props.history.push('/Admin')}><span>Cancel</span></button>
                </div>
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

        axiosWithAuth()
            .post('https://cs2345-db-api.herokuapp.com/owner', values)
            .then(response => {
                // successful 
                console.log("owner form api response object", response.data);
            }) 

            .catch(error => {
                // unsuccessful 
                console.log("The api is currently down.", error.response);
            });

        resetForm();
    }
})(AddOwner)

export default OwnerForm;