import React, { useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';

const ArtistForm = (props, { status }) => {
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
                <p>Please fill in this form completely to create a new artist.</p>
            </div>
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

                {/* birth date */}
                <h2 className="placeholder">Birth Date</h2>
                <Field 
                    type="test" 
                    name="birthDate" 
                    placeholder="Birth Date" 
                    className="text-field"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.birthDate}
                />
                {touched.birthDate && errors.birthDate && <p className="error">{errors.birthDate}</p>}

                <button type="submit" className="button">Submit</button>
            </Form>
        </div>
    );
};

// using formik 
const AddArtist = withFormik({
    
    // assign default value if given value is undefined 
    mapPropsToValues({ firstName, lastName }) {
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
      
		axios
            .post('https://cs2345-db-api.herokuapp.com/artist', values)
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

})(ArtistForm); // currying functions

export default AddArtist;