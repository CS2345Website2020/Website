import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from './axiosWithAuth.js';
import '../../styles/AdminForms.css';

const AddArtist = (props, { status }) => {
    // used with formik and yup validation 
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    // hook keeps track of login information 
    const [artist, setArtist] = useState({});

    // update login if change has occured 
    useEffect(() => {
        if (status) {
            setArtist(info => ({...artist, info}))
        }
    }, [status, artist]); 

    return(
        <div id="artist-container">
            <div id="artist-text">
                <h1>New Artist Form</h1>
                <p>Please complete this form to create a new artist.</p>
                <p>If a value is unknown, enter <strong>'Unknown'</strong> in the input field.</p>
            </div>
            <Form 
                id="artist-form"
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

                {/* birth date */}
                <h2 className="placeholder">Birth Date</h2>
                <Field 
                    type="test" 
                    name="birthDate" 
                    placeholder="Birth Date" 
                    className="input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.birthDate}
                />
                {touched.birthDate && errors.birthDate && <p className="error">{errors.birthDate}</p>}

                <div className="form-buttons">
                    <button type="submit" className="submit-button"><span>Submit</span></button>
                    <button className="cancel-button" onClick={() => props.history.push('/Admin')}><span>Cancel</span></button>
                </div>
            </Form>
        </div>
    );
};

// using formik 
const ArtistForm = withFormik({
    
    // assign default value if given value is undefined 
    mapPropsToValues({ firstName, lastName, birthDate }) {
        return {
            firstName: firstName || "",
            lastName: lastName || "", 
            birthDate: birthDate || ""
        };
    },
    
    // use yup to enforce input requirements 
    validationSchema: Yup.object().shape({
        firstName: Yup
        .string()
        .required("Please Enter Artist's First Name"),
        lastName: Yup
        .string()
        .required("Please Enter Artist's Last Name"),
        birthDate: Yup
        .string()
        .required("Please Enter Artist's Birth Date")
    }),
    
    // update values and set status 
    handleSubmit(values, { resetForm, props }) {
        console.log("artist form values, props", values, props)
      
		axiosWithAuth()
            .post('https://cs2345-db-api.herokuapp.com/artist', values)
            .then(response => {
                // successful 
                console.log("add artist form api response object", response.data);
            }) 

            .catch(error => {
                // unsuccessful 
                console.log("The api is currently down.", error.response);
            });
        
        resetForm(); 
    }

})(AddArtist); // currying functions

export default ArtistForm;